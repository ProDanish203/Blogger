"use client"
import { Editor } from '@/components/forms/Editor'
import { Loader } from '@/components/helpers/Loader';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';

const page = () => {

  const router = useRouter();
  const {status} = useSession();

  if(status == "loading") return (
    <div className="w-full h-[80vh] flex items-center justify-center">
      <Loader dark/>
    </div>
  )
  if(status == "unauthenticated")
    router.push('/')
  else
    return (
    <>
      <Editor/>
    </>
    )
}

export default page;