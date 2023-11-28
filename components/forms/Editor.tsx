"use client"
import { createBlog } from '@/lib/actions/Blogs';
import React, { useEffect, useState } from 'react'
// import ReactQuill from 'react-quill'; we will add it dynamically to make it a client side compnent
import 'react-quill/dist/quill.bubble.css';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from "@/util/firebase";
import { toast } from 'react-toastify';
import { usePathname, useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';


export const Editor = () => {
    // @ts-ignore
    const ReactQuill = dynamic(() => import('react-quill', { ssr: false}))
    
    const [showOptions, setShowOptions] = useState(false);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");

    const [file, setFile] = useState("");
    const [image, setImage] = useState("");
    const [progress, setProgress] = useState(0);

    const router = useRouter();
    const pathname = usePathname();

    const uploadFile = (file:any) => {
        if(!file) return;
        const fileName = new Date().getTime() + file.name;
        
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);

        const uploadTask = uploadBytesResumable(storageRef, file);
        
            uploadTask.on('state_changed', 
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    setProgress(progress)
                    break;
                }
            }, 
            (error) => {
                console.log(error);
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImage(downloadURL)
                });
            }
        );
    }

    useEffect(() => {
        file && uploadFile(file);
    }, [file])

    const createSlug = (title:string): string => {      
        const slug = title.toLowerCase()
                    .trim()
                    .replace(/[^\w\s-]/g, "")
                    .replace(/[\s_-]+/g, "_")
                    .replace(/^-+|-+$/g, "")
        return slug;
    }

    const publish = async () => {
        if(!image) return toast.error("Media is required");
        if(!title) return toast.error("Title is required")
        if(!content) return toast.error("Content is required")
        if(!category) return toast.error("Please specify the category")

        const slug = createSlug(title);
        if(!slug) return toast.error("Something went wrong");
        
        const {data, success} = await createBlog({
            title,
            desc: content,
            image,
            cat: category,
            slug,
            pathname
        });

        console.log(title, slug, image, category, pathname)
        if(success){
            console.log(data);
            toast.success("Blog published");
            router.push('/');
        }else{
            router.push("Something went wrong");
        }

    }

  return (
    <>
    <div className=''>
        <input type="text" placeholder='Title'
        className='bg-transparent w-full outline-none text-5xl max-md:text-3xl'
        value={title}
        onChange={(e:any) => setTitle(e.target.value)}
        />

        <input type="text" placeholder='Category'
        className='bg-transparent w-full mt-5 outline-none'
        value={category}
        onChange={(e:any) => setCategory(e.target.value)}
        />
        
        <div className='flex gap-5 mt-5'>
            <button className='rounded-full w-10 h-10 bg-neutral-300 dark:bg-neutral-900'
            onClick={() => setShowOptions(prev => !prev)}
            >
                <i className='fas fa-plus'></i>
            </button>
        {
            showOptions && (
                <div className='flex flex-wrap gap-4'>
                    <input type="file" id='image' onChange={(e:any) => setFile(e.target.files[0])} className='hidden'/>

                    <button className='rounded-full w-10 h-10 bg-neutral-300 dark:bg-neutral-900'
                    >
                        <label htmlFor='image'>
                            <i className='fas fa-image cursor-pointer'></i>
                        </label>
                    </button>
                    <label htmlFor="image">
                        <button className='rounded-full w-10 h-10 bg-neutral-300 dark:bg-neutral-900'
                        >
                            <i className='fas fa-file-image'></i>
                        </button>
                    </label>
                    <label htmlFor="image">
                        <button className='rounded-full w-10 h-10 bg-neutral-300 dark:bg-neutral-900'
                        >
                            <i className='fas fa-video'></i>
                        </button>
                    </label>

                    {progress > 0 && (
                    <div id="progress-container" className='mt-2 flex items-center relative max-h-[20px] sm:w-[300px] w-[250px] h-full rounded-md overflow-hidden'>
                    <div id="progress-bar" style={{width: progress + '%', height: "100%"}}
                    className='h-full flex items-center justify-center'
                    >{progress.toFixed(2)} %</div>
                    </div>
                    )}
                    
                </div>
            )
        }
        </div>

        <div className='mt-5'>
            <ReactQuill theme='bubble' value={content} onChange={setContent} placeholder='Content goes here...'
            className='w-full dark:text-neutral-300 min-h-[400px]'
            />
        </div>

        <div>
            <button className='bg-primary rounded-md px-5 py-2 cursor-pointer max-sm:w-full'
            onClick={publish}
            >Publish</button>
        </div>
    </div>
    </>
  )
}
