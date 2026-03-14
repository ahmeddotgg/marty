"use client"
import { IconDeviceMobile } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { buttonVariants } from "../ui/button"
import MobileSheet from "./mobile-sheet"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"

export default function Header() {
  const pathname = usePathname()
  const links = [
    { title: "الرئيسية", href: "/" },
    { title: "المتاجر", href: "/stores" },
    { title: "العروض", href: "/offers" },
    { title: "خدماتنا", href: "/services" },
    { title: "اتصل بنا", href: "/contact" }
  ]

  return (
    <div className="wrapper">
      <div className="flex items-center py-4 gap-3 sm:gap-6">
        <div className="md:hidden">
          <MobileSheet links={links} />
        </div>
        <Image
          src="/logo.svg"
          alt="Logo"
          width={100}
          height={60}
          className="me-auto md:me-0 w-auto max-w-28"
        />
        <div className="flex-1 gap-4 font-medium hidden md:flex">
          {links.map((link) => {
            const active =
              pathname === link.href ||
              (pathname.startsWith(link.href) && link.href !== "/")
            return (
              <Link
                href={link.href}
                key={link.title}
                className={cn(
                  active && "text-primary",
                  "hover:text-primary transition-colors"
                )}
              >
                {link.title}
              </Link>
            )
          })}
        </div>
        <div className="flex items-center gap-1">
          <a
            href="#"
            className={cn(
              buttonVariants({ className: "sm:px-6 font-semibold", size: "lg" })
            )}
          >
            <IconDeviceMobile className="size-5" />
            نزل التطبيق
          </a>
          <ThemeToggle className="hidden md:inline-flex" />
        </div>
      </div>
    </div>
  )
}
