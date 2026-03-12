"use client"
import { IconMoonStars, IconSun } from "@tabler/icons-react"
import { useTheme } from "next-themes"
import { Button } from "../ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      size="icon"
      variant="outline"
    >
      <IconMoonStars className="absolute size-5 scale-100 rotate-0 transition-all! dark:scale-0 dark:rotate-90" />
      <IconSun className="size-5 scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0" />
    </Button>
  )
}
