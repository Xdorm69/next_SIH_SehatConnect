"use client";

import { useSession, signOut, signIn } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { UserRoles } from "@prisma/client";
import { avatarUrl } from "@/lib/helpers/profileUrl";


const NavbarAuth = () => {
  const { data: session, status } = useSession();

  const router = useRouter();

  if (status === "loading")
    return <div className="size-7 rounded-full animate-pulse bg-zinc-400" />; // optional loading state

  if (session?.user) {
    return (
      <div className="flex items-center gap-2">
        <Avatar
          className="cursor-pointer"
          onClick={() =>
            router.push(`${avatarUrl(session.user.role as UserRoles)}`)
          }
        >
          {session.user.image ? (
            <AvatarImage
              src={session.user.image}
              alt={session.user.name || ""}
            />
          ) : (
            <AvatarFallback className="text-primary bg-zinc-300 font-bold">
              {session.user.name?.[0].toUpperCase()}
            </AvatarFallback>
          )}
        </Avatar>
      </div>
    );
  }

  return <Button onClick={() => router.push("/login")}>Login</Button>;
};

export default NavbarAuth;
