
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { Sidebar } from '@/components/Sidebar'
import { prisma } from '@/lib/db'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {
  const session = await getServerSession(authOptions);
  if(!session) return redirect('/unauthorized');
  const vendorId = session.user.id;

  const vendorProfile = await prisma.vendorProfile.findUnique({
    where: { userId: vendorId },
  });

  if(!vendorProfile) return redirect('/unauthorized');

  return (
    <section>
        <Sidebar menuItems={["products"]} role="VENDOR" />
        <h1 className='heading'>Vendor Dashboard</h1>
        <p>Id: {vendorProfile.id}</p>
    </section>
  )
}

export default page 