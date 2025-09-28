import { BicepsFlexed } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const Logo = ({className}: {className?: string}) => {
  return (
    <Link className={className} href={"/"}>
      <div className="flex items-center">
        {/* ICON  */}
        <BicepsFlexed className="font-bold" />
        {/* TEXT  */}
        <h1 className="font-sans ml-1 font-semibold">SehatCon</h1>
      </div>
    </Link>
  );
}

export default Logo