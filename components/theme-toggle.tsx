"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-9 h-9">
        <div className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="w-9 h-9 relative overflow-hidden"
    >
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          theme === "dark" ? "rotate-180 scale-0" : "rotate-0 scale-100"
        }`}
      >
        <Sun className="h-4 w-4" />
      </div>
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          theme === "light" ? "-rotate-180 scale-0" : "rotate-0 scale-100"
        }`}
      >
        <Moon className="h-4 w-4" />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
