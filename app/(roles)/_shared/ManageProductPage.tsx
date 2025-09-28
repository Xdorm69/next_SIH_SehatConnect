import { getSSRProducts } from '@/actions/products/getSSRProducts';
import getQueryClient from '@/lib/getQueryClient';
import { Product } from '@prisma/client';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import React from 'react'
import ProductTable from './components/ProductTable';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

const ManageProductPage = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: getSSRProducts,
  });
  const dehydratedState = dehydrate(queryClient);

  const data =
    (queryClient.getQueryData(["products"]) as {
      message: string;
      success: boolean;
      products: Product[];
    }) || [];

    const session = await getServerSession(authOptions);
    if(!session) return redirect("/unauthorized")

    if(session.user.role !== "VENDOR")
      return redirect("/unauthorized")

  return (
    <div>
      <h1 className="heading">Manage Products</h1>
      <HydrationBoundary state={dehydratedState}>
        <ProductTable vendorId={session.user.id as string} initialData={data} />
      </HydrationBoundary>
    </div>
  );
}

export default ManageProductPage