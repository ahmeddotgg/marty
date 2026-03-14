"use client"
import { IconMoonStars, IconSun } from "@tabler/icons-react"
import { useTheme } from "next-themes"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      aria-label="Toggle theme"
      className={cn(className)}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      size="icon-lg"
      variant="outline"
    >
      <IconMoonStars className="absolute size-5 scale-100 rotate-0 transition-all! dark:scale-0 dark:rotate-90" />
      <IconSun className="size-5 scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0" />
    </Button>
  )
}
