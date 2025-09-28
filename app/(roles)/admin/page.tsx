"use client";
import { useSession } from "next-auth/react";


export default function AdminPage() {
  const { data: session } = useSession();

  return (
    <div>
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <p className="mt-2 ">Hello, {session?.user?.username}</p>
    </div>
  );
}


