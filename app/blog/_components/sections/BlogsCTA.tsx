import Image from "next/image";
import BlogSearch from "../BlogsSearch";

const BlogsCTA = () => {
  return (
    <section className="h-[60vh] relative w-full">
      {/* IMAGE  */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={"/blog/cta.jpg"}
          alt="cta"
          width={800}
          height={600}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex items-center justify-center h-full w-full relative z-20 text-center text-white">
        <div className="w-full">
          <h1 className="heading sm:text-5xl md:text-6xl">
            Get Involved In The <br />
            Agricultural Uprising
          </h1>
          <BlogSearch
            btnText="Join Now"
            placeholder="Type your email address.."
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default BlogsCTA;