import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const BlogSearch = ({
  placeholder,
  btnText,
  className,
}: {
  placeholder: string;
  btnText: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-zinc-300 w-fit mt-12 flex items-center justify-between rounded-full pl-4 pr-1 py-1 shadow",
        className
      )}
    >
      <input
        className="focus:outline-none placeholder:text-muted-foreground"
        type="text"
        placeholder={placeholder}
      />
      <Button className="rounded-full p-1 pl-4 ">
        <p>{btnText}</p>
        <div className="rounded-full p-1 flex items-center justify-center bg-zinc-800 text-white">
          <ChevronRight className="size-5" />
        </div>
      </Button>
    </div>
  );
};

export default BlogSearch;
