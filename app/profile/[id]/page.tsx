import { Blogs } from "@/components/shared";
import { getProfile } from "@/lib/actions/User";
import Image from "next/image";
import { toast } from "react-toastify";

const Profile = async ({params}: {params: {id:string}}) => {

    const {id} = params;
    const {data, success } = await getProfile(id)
    if(!success) return toast.error("something went wrong");
  return (
    <>
    <div className="max-sm:flex-col max-sm:justify-center flex gap-2 items-center">
        <Image src={data?.image} alt={data?.username} width={500} height={500}
        className="rounded-full sm:w-[200px] sm:h-[200px] w-[100px] h-[100px] object-cover"
        />

        <div className="max-sm:text-center">
            <h4 className="sm:text-4xl text-2xl font-bold text-text dark:text-darkText">{data?.username}</h4>
            <p className="text-neutral-600 dark:neutral-700 ">{data?.email}</p>
        </div>
    </div>

    <div className="mt-10">
    {data && data.blogs.length > 0 ? (
    <>
    <h4 className="text-text dark:text-darkText text-xl font-semibold">
        {data.username}'s published blogs:
    </h4>

    {data.blogs.map((blog:any, i:number) => (
        <Blogs page={1} limit={10}/>
    ))}
    </>
    ): (
    <h4 className="text-text dark:text-darkText text-xl font-semibold">
        No blogs published yet
    </h4>
    )}
    </div>
    </>
  )
}

export default Profile;