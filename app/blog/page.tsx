import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/Wrappers/MaxWidthWrapper";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const BlogPage = () => {
  return (
    <main>
      <BlogHero />
      <BlogPopular />
      <BlogLatest />
      <BlogCTA/>
    </main>
  );
};

export default BlogPage;

const BlogSearch = ({placeholder, btnText, className}: {placeholder: string, btnText: string, className?: string}) => {
  return (
    <div className={cn("bg-zinc-300 w-1/3 mt-12 flex items-center justify-between rounded-full pl-4 pr-1 py-1 shadow", className)}>
      <input
        className="focus:outline-none placeholder:text-muted-foreground"
        type="text"
        placeholder={placeholder}
      />
      <Button className="rounded-full px-0 pl-4">
        <p>{btnText}</p>
        <div className="rounded-full p-2 bg-zinc-800 text-white">
          <ChevronRight />
        </div>
      </Button>
    </div>
  );
}

const BlogHero = () => {
  return (
    <section className="h-screen">
      <div className="w-full h-screen absolute z-0">
        <Image
          src={"/blog/hero.jpg"}
          alt="blog-bg"
          width={1600}
          height={1600}
          priority
          className="w-full h-full object-cover"
        />
      </div>

      <MaxWidthWrapper>
        <div className="flex justify-center flex-col h-screen relative z-10">
          <h1 className="heading font-bold text-6xl text-white leading-18">
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

const ArticleCard = ({
  date,
  img,
  title,
  description,
  className,
  orientation = "horizontal",
}: {
  date: Date;
  img?: string;
  title?: string;
  description?: string;
  className?: string;
  orientation?: "horizontal" | "vertical";
}) => (
  <div
    className={cn(
      "w-full h-full",
      orientation === "vertical" ? "flex flex-col" : "flex flex-row",
      className
    )}
  >
    {/* IMAGE */}
    {img && (
      <div
        className={cn(
          "bg-zinc-300 shadow overflow-hidden",
          orientation === "vertical" ? "w-full h-2/3" : "w-1/2 h-full"
        )}
      >
        <Image
          src={img}
          loading="lazy"
          alt={title || description || ""}
          width={600}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
    )}

    {/* CONTENT */}
    {title && (
      <div
        className={cn(
          "flex flex-col justify-between py-4",
          orientation === "vertical" ? "w-full h-1/3" : "flex-1 px-4"
        )}
      >
        {/* DATE */}
        <p className="text-sm text-zinc-700">
          {new Date(date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>

        {/* TITLE & DESC */}
        <div>
          <h2
            className={cn(
              "font-semibold font-sans text-xl",
              orientation === "vertical" && "line-clamp-1"
            )}
          >
            {title}
          </h2>
          {description && (
            <p className="text-sm text-muted-foreground font-serif line-clamp-2">
              {description}
            </p>
          )}
        </div>
      </div>
    )}
  </div>
);

const BlogPopular = () => {
  const articles = [
    {
      orientation: "vertical",
      date: new Date(),
      className: "col-span-2 row-span-3",
      img: "/blog/articles/1.jpg",
      title: "Best Strategy to Achieve Profitable Harvest",
      description:
        "Optimal strategies to achieve profitable harvests include a comprehensive approach to farm management, selection of appropriate crop varieties, and implementation of efficient practices.",
    },
    {
      date: new Date(),
      img: "/blog/articles/2.jpg",
      title: "Abundant Harvest from Agriculture Farm Land Shows Success.",
      className: "col-span-2 row-span-1",
    },
    {
      date: new Date(),
      img: "/blog/articles/3.jpg",
      title: "Latest Innovations Increase Milk Production and Quality",
      className: "col-span-2 row-span-1",
    },
    {
      date: new Date(),
      img: "/blog/articles/4.jpg",
      title: "Best Practices In Harvesting Vegetables From Plantations",
      className: "col-span-2 row-span-1",
    },
  ];
  return (
    <section className="pt-18 min-h-screen">
      <MaxWidthWrapper>
        <h1 className="heading mb-8">Popular Articles</h1>

        <div className="grid grid-cols-4 grid-rows-[150px_150px_150px] gap-4">
          {articles.map((article, i) => (
            <ArticleCard
              key={i}
              orientation={article.orientation as "horizontal" | "vertical"}
              date={article.date}
              className={article.className}
              img={article.img}
              title={article.title}
              description={article.description}
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

const BlogLatest = () => {
  const data = [
    {
      title: "The Future of AI in Everyday Life",
      description:
        "Exploring how artificial intelligence is shaping healthcare, education, and personal productivity.",
      date: "2025-01-12",
    },
    {
      title: "Top 10 Travel Destinations for 2025",
      description:
        "From hidden gems to popular hotspots, discover where you should plan your next adventure.",
      date: "2025-02-05",
    },
    {
      title: "Mastering Remote Work: Tips & Tools",
      description:
        "A practical guide to staying productive and maintaining work-life balance while working from home.",
      date: "2025-03-18",
    },
    {
      title: "Climate Change and Its Global Impact",
      description:
        "Analyzing the challenges of climate change and what steps nations are taking to adapt.",
      date: "2025-04-09",
    },
    {
      title: "Beginner's Guide to Investing in Crypto",
      description:
        "Breaking down the basics of cryptocurrency and what new investors should know before starting.",
      date: "2025-05-21",
    },
    {
      title: "Healthy Living: Nutrition Myths Debunked",
      description:
        "Experts share insights on common nutrition misconceptions and the truth behind them.",
      date: "2025-06-14",
    },
  ];

  return (
    <section className="py-18 min-h-screen bg-zinc-200">
      <MaxWidthWrapper>
        <div>
          <h1 className="heading mb-8">Latest Articles</h1>
          <div className="grid grid-cols-3 grid-rows-[400px_400px] gap-8">
            {data.map((item, i) => {
              return (
                <ArticleCard
                  orientation="vertical"
                  key={i}
                  date={new Date(item.date)}
                  img={`/blog/articles/${i + 1}.jpg`}
                  title={item.title}
                  description={item.description}
                />
              );
            })}
          </div>

          {/* PAGINATION  */}
          <div className="w-full mt-8 flex items-center justify-between">
            <Button variant={"outline"} className="flex items-center gap-1">
              <ChevronLeft className="size-5" /> <p>Previous</p>
            </Button>
            <div>
              {Array.from({length: 6}).map((_, id) => {
                return id < 5 ? (
                  <Button key={id} className="rounded-full" variant={'ghost'}>
                    {id + 1}
                  </Button>
                ) :  (
                  <Button key={id} className="rounded-full " disabled variant={'link'}>
                    ...
                  </Button>
                )
              })}
            </div>
            <Button variant={"outline"} className="flex items-center gap-1">
              <p>Next</p> <ChevronRight className="size-5" />
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};


const BlogCTA = () => {
  return (
    <section className="h-[50vh] relative w-full">
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
          <h1 className="heading text-6xl">
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
}
