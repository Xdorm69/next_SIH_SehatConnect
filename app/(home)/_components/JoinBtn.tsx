
"use client";
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';


const JoinBtn = () => {
  return (
    <>
      <Button onClick={() => redirect("/join")}>Join Us</Button>
    </>
  );
}

export default JoinBtn