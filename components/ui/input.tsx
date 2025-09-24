import * as React from "react";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="relative w-full">
      <input
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors",
          "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
          className
        )}
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        {...props}
      />

      {type === "password" &&
        (!showPassword ? (
          <Eye
            className="absolute right-2 top-1/2 -translate-y-1/2 size-5 text-muted-foreground cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : (
          <EyeOff
            className="absolute right-2 top-1/2 -translate-y-1/2 size-5 text-muted-foreground cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          />
        ))}
    </div>
  );
}

export { Input };
