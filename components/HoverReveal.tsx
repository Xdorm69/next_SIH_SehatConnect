

import { toast } from "sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Button } from "./ui/button";
import { Copy } from "lucide-react";

const HoverReveal = ({ data }: { data: string | undefined }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(data || "");
      toast.success("Copied to clipboard");
    } catch (error) {
      toast.error("Failed to copy");
    }
  };

  const brakeData = (data: string) => {
    const words = data.split(" ");
    const elements = [];
    for (let i = 0; i < words.length; i++) {
      elements.push(words[i]);
      elements.push(" ");
      if ((i + 1) % 5 === 0) elements.push(<br key={i} />);
    }
    return elements;
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant={"ghost"} className="p-0">
            <p>{data ? (data.length > 10 ? data.slice(0, 10) + "..." : data) : "NA"}</p>
          </Button>
        </TooltipTrigger>
        <TooltipContent className="bg-card p-3 rounded shadow flex items-center justify-between gap-2">
          <span className="text-black text-xs">{brakeData(data || "")}</span>
          <Button size="icon" variant="outline" onClick={handleCopy}>
            <Copy className="w-4 h-4 text-primary" />
          </Button>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default HoverReveal;
