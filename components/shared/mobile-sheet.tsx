"use client"
import { TextAlignJustify } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"
import { useIsMobile } from "@/hooks/use-mobile"

export default function MobileSheet({
  links
}: {
  links?: { title: string; href: string }[]
}) {
  const [open, setOpen] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (!isMobile) {
      setOpen(false)
    }
  }, [isMobile])

  return (
    <Sheet open={open} onOpenChange={(open) => setOpen(open)}>
      <SheetTrigger
        render={
          <Button size="icon-lg" variant="outline">
            <TextAlignJustify className="size-5" />
          </Button>
        }
      />
      <SheetContent showCloseButton={false}>
        <SheetHeader>
          <SheetTitle>
            <Image
              src="/logo.svg"
              alt="Logo"
              width={100}
              height={60}
              className="w-auto max-w-22"
            />
          </SheetTitle>
          <SheetDescription></SheetDescription>
          <SheetClose />
        </SheetHeader>
        <hr />
        <div className="gap-8 p-4 flex flex-col">
          {links?.map((link) => (
            <Link
              href={link.href}
              key={link.title}
              className="hover:text-primary transition-colors font-bold text-lg"
              onClick={() => setOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="px-4">
          <ThemeToggle />
        </div>
      </SheetContent>
    </Sheet>
  )
}
