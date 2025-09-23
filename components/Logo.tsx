import { BicepsFlexed } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const Logo = ({className}: {className?: string}) => {
  return (
    <Link className={className} href={"/"}>
      <div className="flex items-center">
        {/* ICON  */}
        <BicepsFlexed className="w-5 h-5 font-bold" />
        {/* TEXT  */}
        <h1 className="font-sans ml-1 text-xl font-semibold">SehatCon</h1>
      </div>
    </Link>
  );
}

export default Logo