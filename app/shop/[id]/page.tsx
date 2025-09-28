import React from "react";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/Wrappers/MaxWidthWrapper";
import CartButton from "../_components/CartButton";
import { prisma } from "@/lib/db";
import Image from "next/image";

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });
  if (!product) return <div>Invalid Product ID</div>;
  return (
    <section className="py-18 mt-8  md:mt-14">
      <MaxWidthWrapper>
        <div className="mb-8">
          <h1 className="heading">Product Page</h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between  gap-8 md:gap-12">
          <div className="flex w-full md:w-1/2 flex-col">
            {/* HERO  */}
            <div className="w-full bg-zinc-300 shadow h-[180px] md:h-[300px] rounded">
              <Image
                src={product.imageUrl as string}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            {/* ADDITIONAL IMAGES  */}
            <div className="flex gap-4 mt-4">
              <div className="size-14 md:size-20 bg-zinc-500 rounded shadow">
                <Image
                  src={product.imageUrl as string}
                  alt={product.name}
                  width={50}
                  height={50}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="size-14 md:size-20 bg-zinc-500 rounded shadow">
                <Image
                  src={product.imageUrl as string}
                  alt={product.name}
                  width={50}
                  height={50}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="size-14 md:size-20 bg-zinc-500 rounded shadow">
                <Image
                  src={product.imageUrl as string}
                  alt={product.name}
                  width={50}
                  height={50}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* PRODUCT INFO  */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            {/* Title */}
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {product?.name}
            </h1>

            {/* Description */}
            <p className="text-base text-gray-600 leading-relaxed">
              {product?.description || "No description available."}
            </p>

            {/* Stock + Price */}
            <div className="flex items-center gap-6 mt-2">
              <span
                className={`text-sm font-medium px-3 py-1 rounded-full ${
                  product.stock > 0
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {product.stock > 0
                  ? `${product.stock} in stock`
                  : "Out of stock"}
              </span>

              <span className="text-2xl font-semibold text-emerald-700">
                ₹{product.price.toFixed(2)}
              </span>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              <Button
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 text-lg"
                disabled={product.stock === 0}
              >
                Buy Now
              </Button>
              <CartButton product={product} />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Page;
