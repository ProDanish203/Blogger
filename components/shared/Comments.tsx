import { getComments } from "@/lib/actions/Comment"
import { CommentCard } from "../cards/CommentCard"

export const Comments = async ({postId}:{postId:string}) => {

  const {comments, success} = await getComments(postId)
  
  return (
    <div className="flex flex-col flex-wrap gap-3 mt-5">
      {comments && comments.length > 0 ? 
        comments.map((comment:any, i:number) => (
          <CommentCard data={comment} key={comment._id}/>
        )) : (
          <h5 className="text-white dark:text-darkText text-xl font-bold">No comments yet</h5>
        )
      }
    </div>
  )
}
