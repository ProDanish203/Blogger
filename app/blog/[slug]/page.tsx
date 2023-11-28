import { AddComment } from "@/components/forms/AddComment";
import { Comments, Sidebar } from "@/components/shared";
import { getBlog } from "@/lib/actions/Blogs";
import Image from "next/image";
import { toast } from "react-toastify";
import { formatDistanceToNowStrict, format } from "date-fns";

interface Params{
    params: {
        slug: string
    },
    searchParams: {
        id: string
    }
}

const page = async ({params, searchParams}: Params) => {

    const slug = params.slug;
    const id = searchParams.id
    const {data, success} = await getBlog(slug, id);
    if(!success) 
        return toast.error("Something went wrong");

    const formattedDate = format(new Date(data.createdAt), "yyyy-MM-dd HH:mm");
    // const formattedDate = formatDistanceToNowStrict(new Date(data.createdAt));
  return (
    <div > 
        <div className="row">
            <div className="col-1 flex flex-col justify-between">
                <h3 className="text-5xl max-md:text-3xl max-sm:text-2xl font-extrabold ">{data?.title}</h3>

                <div className="flex items-center gap-4 md:mt-10 mt-2">
                    <div className='md:h-[50px] md:w-[50px] h-[40px] w-[40px] round relative'>
                        <Image src={data?.author.image} alt={data?.author.username} width={500} height={500}
                        className='round object-cover w-full h-full'
                        />
                    </div>

                    <div>
                        <p className="max-md:text-sm font-semibold text-text dark:text-darkText">{data?.author.username}</p>
                        <p className="text-neutral-500 text-sm font-semibold">
                            {formattedDate}
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-2">
                <div className='w-full h-[250px] md:h-[400px]'>
                    <Image src={data?.image} alt={data?.slug} width={1500} height={800}
                    className='rounded-md w-full h-full'
                    />
                </div>
            </div>
        </div>

        <div className="flex gap-10 justify-between mt-5 relative">
            <div>
                
                <div dangerouslySetInnerHTML={{__html: data.desc}}/>

                <div className="md:mt-10 mt-5">
                    <h6 className="text-xl font-bold mb-5">Comments</h6>
                    <AddComment postId={data._id}/>
                    <Comments postId={data._id}/>
                </div>

            </div>
            <div className="max-2xl:hidden mt-12">
                <Sidebar/>
            </div>
        </div>
    </div>
  )
}

export default page;