"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="w-9 h-9 rounded-full text-neutral-600 dark:text-neutral-300"
        aria-label="Toggle theme"
      >
        <span className="h-4 w-4 block" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";
  const tooltipText = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="w-9 h-9 rounded-full text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          aria-label={tooltipText}
        >
          {isDark ? (
            <Sun className="h-4 w-4 text-[#FE9A00] transition-transform duration-200 rotate-0 hover:rotate-45" />
          ) : (
            <Moon className="h-4 w-4 text-[#15A1BF] transition-transform duration-200 rotate-0 hover:-rotate-12" />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        <p>{tooltipText}</p>
      </TooltipContent>
    </Tooltip>
  );
}
