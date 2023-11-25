import { CommentCard } from "../cards/CommentCard"
import { AddComment } from "../forms/AddComment"

export const Comments = () => {
  return (
    <div className="flex flex-col flex-wrap gap-3 mt-5">
        <CommentCard/>
        <CommentCard/>
        <CommentCard/>
    </div>
  )
}
