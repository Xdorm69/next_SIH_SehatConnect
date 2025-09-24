import React from "react";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/Wrappers/MaxWidthWrapper";
import CartButton from "../_components/CartButton";

const Page = async ({ params }: { params: { id: string } }) => {
    const {id} = await params;
    return (
      <section className="py-18 mt-14">
        <MaxWidthWrapper>
          <div className="mb-8">
            <h1 className="heading">Product Page</h1>
          </div>

          <div className="flex justify-between gap-12">
            <div className="flex-1 bg-zinc-300 shadow h-[300px] rounded"></div>
            <div className="flex-1">
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

          {/* ADDITIONAL IMAGES  */}
          <div className="flex gap-4 mt-4">
            <div className="size-20 bg-zinc-500 rounded shadow"></div>
            <div className="size-20 bg-zinc-500 rounded shadow"></div>
            <div className="size-20 bg-zinc-500 rounded shadow"></div>
          </div>
        </MaxWidthWrapper>
      </section>
    );
};



export default Page;
