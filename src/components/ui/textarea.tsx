import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[100px] w-full rounded-xl border border-neutral-200/90 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-md px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-[#6C696D] dark:placeholder:text-[#888888] shadow-xs transition-all focus:bg-white dark:focus:bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15A1BF]/40 focus-visible:border-[#15A1BF] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
