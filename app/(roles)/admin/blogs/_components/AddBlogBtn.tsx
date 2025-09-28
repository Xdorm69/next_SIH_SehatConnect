
"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const AddBlogBtn = () => {
    const router = useRouter();
  return (
    <Button onClick={() => router.push('/admin/blogs/add')} className="mt-4 bg-emerald-600 hover:bg-emerald-700 cursor-pointer">
      Add Blog
    </Button>
  )
}

export default AddBlogBtn