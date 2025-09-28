"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useSession } from "next-auth/react";

// ---------------- Profile Card ----------------
const ProfileCard = () => {
    const {data: session} = useSession();
    let username = "";
    let phone = "";
    let email = "";
    if(session){
        username = session?.user?.username as string;
        phone = session?.user?.phone as string;
        email = session?.user?.email as string;
    }
    return (
    
  <Card className="flex flex-col items-center gap-2 h-full w-full">
    <Image
      src="/profile/avatar.png"
      alt="User"
      width={120}
      height={120}
      className="rounded-full"
    />
    {session ? (
        <>
        <h2 className="heading text-2xl mt-2">{username}</h2>
        <p className="text-sm text-blue-500">+91 {phone}</p>
        <p className="text-sm text-gray-500">{email}</p>
        </>
    ) : (
        <LoaderForProfile/>
    )}
  </Card>
);}

export default ProfileCard;

const LoaderForProfile = () => {
    return (
        <>
            <div className="animate-pulse bg-zinc-400"/>
            <div className="animate-pulse bg-zinc-400"/>
            <div className="animate-pulse bg-zinc-400"/>
        </>
    )
}
