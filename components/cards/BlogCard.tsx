import Image from "next/image"
import Link from "next/link"

interface Props{
    data: any
}

export const BlogCard = ({data}: Props) => {
  return (
    <div className="flex max-lg:flex-col items-center gap-5 p-4 dark:bg-neutral-900 bg-neutral-100 rounded-md w-full">
        <div className="relative max-lg:w-full lg:w-[500px] h-[250px]">
            <Image src={data.image} alt={data.slug} fill
            className="object-cover rounded-md"
            />
        </div>

        <div className="flex flex-col md:gap-5 w-full gap-3">
            <div className="flex items-center gap-2">
                <p className="text-neutral-600 dark:text-neutral-400  font-semibold">22-11-2023 | </p>
                <p className="text-red-500">{data.cat}</p>
            </div>

            <h2 className="text-2xl max-sm:text-xl text-text dark:text-white">{data.title > 40 ? data.title.substring(0, 40): data.title}</h2>

            <p className="text-neutral-500 dark:text-neutral-300"
            // @ts-ignore
            dangerouslySetInnerHTML={{__html: data.desc}}
            >
            </p>

            <Link href={`/blog/${data.slug}?id=${data._id}`}
            className="text-bg bg-accent px-5 py-2.5 rounded-md max-xs:max-w-full max-w-[130px]">
                Read More
            </Link>
        </div>
    </div>
  )
}
