"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-5 w-5 shrink-0 rounded-md border-2 border-neutral-400/80 dark:border-neutral-500 hover:border-[#15A1BF] bg-white dark:bg-[#18181b] shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15A1BF] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#15A1BF] data-[state=checked]:border-[#15A1BF] data-[state=checked]:text-white cursor-pointer transition-all",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-3.5 w-3.5 stroke-[3]" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
