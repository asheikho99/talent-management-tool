"use client";

import React from "react";
import { useMounted } from "@/hooks/use-mounted";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Moon, Sun } from "lucide-react";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  switch (theme) {
    case "dark":
      return (
        <Button
          aria-label="Switch to light theme"
          onClick={() => setTheme("light")}
          variant={"ghost"}>
          <Sun />
        </Button>
      );
    case "light":
      return (
        <Button
          aria-label="Switch to dark theme"
          onClick={() => setTheme("dark")}
          variant={"ghost"}>
          <Moon />
        </Button>
      );
  }
};

const ThemeSwitcher = () => {
  const mounted = useMounted();

  return mounted ? <ToggleTheme /> : <Skeleton className="h-10 w-14" />;
};

export default ThemeSwitcher;
