import { cn } from "@/lib/utils";
import Image from "next/image";

const ArticleCard = ({
  date,
  img,
  title,
  popular,
  description,
  className,
  orientation = "horizontal",
}: {
  date: Date;
  img?: string;
  title?: string;
  popular?: boolean;
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
              orientation === "vertical" && !popular && "line-clamp-1"
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
export default ArticleCard;