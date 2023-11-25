import { AddComment } from "@/components/forms/AddComment";
import { Comments, Sidebar } from "@/components/shared";
import Image from "next/image";

const page = ({params}: {params: {id:string}}) => {

    const id = params.id;

  return (
    <div > 
        <div className="row">
            <div className="col-1 flex flex-col justify-between">
                <h3 className="text-5xl max-md:text-3xl max-sm:text-2xl font-extrabold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, modi?</h3>

                <div className="flex items-center gap-4 md:mt-10 mt-2">
                    <div className='md:h-[50px] md:w-[50px] h-[40px] w-[40px] round relative'>
                        <Image src='/banner.jpg' alt='banner' width={500} height={500}
                        className='round object-cover w-full h-full'
                        />
                    </div>

                    <div>
                        <p className="max-md:text-sm font-semibold text-text dark:text-darkText">Author Name</p>
                        <p className="text-neutral-500 text-sm font-semibold">Date created</p>
                    </div>
                </div>
            </div>

            <div className="col-2">
                <div className='w-full h-[250px] md:h-[400px]'>
                    <Image src='/banner.jpg' alt='banner' width={1500} height={800}
                    className='rounded-md w-full h-full'
                    />
                </div>
            </div>
        </div>

        <div className="flex gap-10 justify-between mt-5 relative">
            <div>

                <div>

                <p className="text-text dark:text-darkText">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio repellendus nam alias accusamus, delectus laudantium velit aspernatur voluptatibus cum dolorum distinctio facilis, quae ratione. Beatae voluptates quaerat nobis minus, similique, dolore cum et perferendis commodi recusandae laborum. Commodi quo sunt placeat unde dolorum, amet, pariatur consequatur nesciunt vitae iste nostrum a perferendis numquam quaerat ab. Nostrum reprehenderit ab iure quod numquam minus totam at, cumque sint possimus magnam earum laudantium.
                </p>
                <br />
                <p className="text-text dark:text-darkText">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio repellendus nam alias accusamus, delectus laudantium velit aspernatur voluptatibus cum dolorum distinctio facilis, quae ratione. Beatae voluptates quaerat nobis minus, similique, dolore cum et perferendis commodi recusandae laborum. Commodi quo sunt placeat unde dolorum, amet, pariatur consequatur nesciunt vitae iste nostrum a perferendis numquam quaerat ab. Nostrum reprehenderit ab iure quod numquam minus totam at, cumque sint possimus magnam earum laudantium.
                </p>
                </div>

                <div className="md:mt-10 mt-5">
                    <h6 className="text-xl font-bold mb-5">Comments</h6>
                    <AddComment/>
                    <Comments/>
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