"use client"
import { IconDeviceMobile } from "@tabler/icons-react"
import { TextAlignJustify } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Separator } from "../ui/separator"
import { links } from "./header"
import { ThemeToggle } from "./theme-toggle"
import { Button, buttonVariants } from "@/components/ui/button"
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
import { cn } from "@/lib/utils"

export default function MobileSheet() {
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
        <Separator />
        <div className="flex flex-col gap-8 p-4">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.title}
              className="text-lg font-bold transition-colors hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          <a
            href="https://wa.me/201288249293"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold transition-colors hover:text-primary"
          >
            أتصل بنا
          </a>
        </div>
        <Separator />
        <div className="flex items-center gap-1 px-4">
          <a
            href="https://marty.ink/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ className: "sm:px-6 font-semibold flex-1", size: "lg" })
            )}
          >
            <IconDeviceMobile className="size-5" />
            حمل التطبيق الأن
          </a>
          <ThemeToggle />
        </div>
      </SheetContent>
    </Sheet>
  )
}
