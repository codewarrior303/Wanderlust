import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-xl border border-neutral-200/90 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-md px-4 py-2 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-[#6C696D] dark:placeholder:text-[#888888] shadow-xs transition-all focus:bg-white dark:focus:bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15A1BF]/40 focus-visible:border-[#15A1BF] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
