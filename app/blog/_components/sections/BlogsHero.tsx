import MaxWidthWrapper from "@/components/Wrappers/MaxWidthWrapper";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import BlogSearch from "../BlogsSearch";

const BlogHero = () => {
  return (
    <section className="h-screen">
      <div className="w-full h-screen absolute z-0">
        <Image
          src={"/blog/hero.jpg"}
          alt="blog-bg"
          width={800}
          height={600}
          priority
          className="w-full h-full object-cover"
        />
      </div>

      <MaxWidthWrapper>
        <div className="flex justify-center flex-col h-screen relative z-10">
          <h1 className="heading font-bold md:text-6xl text-white md:leading-18">
            Utilization of technology to
            <br />
            Support Enviornmentally <br />
            Friendly Agriculture
          </h1>

          {/* CUSTOM SEARCH  */}
          <BlogSearch btnText="Search" placeholder="search articles.." />

          <div className="absolute right-8 bottom-8 flex gap-2 rounded-full w-fit items-center">
            <p className="font-sans text-white">Explore More</p>{" "}
            <ChevronDown className="bg-zinc-100 text-black rounded-full p-1 size-8" />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default BlogHero;