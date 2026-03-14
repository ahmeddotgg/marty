"use client"
import { TextAlignJustify } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
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

export default function MobileSheet({
  links
}: {
  links?: { title: string; href: string }[]
}) {
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={(open) => setOpen(open)}>
      <SheetTrigger
        render={
          <Button size="icon-lg" variant="outline">
            <TextAlignJustify className="size-5" />
          </Button>
        }
      />
      <SheetContent>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
          <SheetClose />
        </SheetHeader>
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
      </SheetContent>
    </Sheet>
  )
}
