
"use client";
import React from 'react'
import { redirect } from 'next/navigation'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const ProductCardImage = ({productId, imgUrl}: {productId: string, imgUrl: string}) => {
  return (
    <div>
      <div
        onClick={() => redirect(`/shop/${productId}`)}
        className={cn("w-full h-[180px] bg-amber-200")}
      >
        <Image src={imgUrl} alt={`product-${productId}`} width={500} height={500} className='w-full h-full object-cover'/>
      </div>
    </div>
  );
}

export default ProductCardImage