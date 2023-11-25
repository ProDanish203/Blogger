"use client"
import { LoginForm } from "@/components/forms/LoginForm"
import { Loader } from "@/components/helpers/Loader";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const page = () => {

  const {status} = useSession();

  const router = useRouter();
  if(status == "loading") return (
    <div className="w-full h-[80vh] flex items-center justify-center">
      <Loader dark/>
    </div>
  )
  if(status == "authenticated")
    router.push('/')
  else{
    return (
      <div className="shadow-lg max-w-[400px] w-full mx-auto mt-10 p-4 rounded-lg bg-neutral-200 dark:bg-neutral-900">
        <h3 className="text-center text-3xl font-extrabold ">Login</h3>
        <button className="w-full bg-primary text-center py-2 rounded-md mt-5"
        onClick={() => signIn("google")}
        >Login with Google</button>
        <p className="text-between mt-5 text-center text-lg font-bold">OR</p>
        <LoginForm/>
    </div>
  )
  }
}

export default page