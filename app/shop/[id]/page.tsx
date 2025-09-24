import React from "react";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/Wrappers/MaxWidthWrapper";
import CartButton from "../_components/CartButton";

const Page = async ({ params }: { params: { id: string } }) => {
    const {id} = await params;
    return (
      <section className="py-18 mt-8  md:mt-14">
        <MaxWidthWrapper>
          <div className="mb-8">
            <h1 className="heading">Product Page</h1>
          </div>

          <div className="flex flex-col md:flex-row justify-between  gap-8 md:gap-12">
            <div className="flex w-full md:w-1/2 flex-col">
              <div className="w-full bg-zinc-300 shadow h-[180px] md:h-[300px] rounded"></div>
              {/* ADDITIONAL IMAGES  */}
              <div className="flex gap-4 mt-4">
                <div className="size-14 md:size-20 bg-zinc-500 rounded shadow"></div>
                <div className="size-14 md:size-20 bg-zinc-500 rounded shadow"></div>
                <div className="size-14 md:size-20 bg-zinc-500 rounded shadow"></div>
              </div>
            </div>

            {/* PRODUCT INFO  */}
            <div className="w-full md:w-1/2">
              <h1 className="heading">Title {id}</h1>
              <p className="desc">
                Description {id} Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Necessitatibus facere beatae accusantium
                consequuntur delectus nesciunt maiores debitis reprehenderit
                quas tempore ullam voluptatibus est sed, molestias ex, odit
                numquam cupiditate. Natus.
              </p>

              {/* BUTTONS  */}
              <div className="flex gap-4 mt-8">
                <Button>Buy Now</Button>
                <CartButton />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    );
};



export default Page;
