import { IconDeviceMobile } from "@tabler/icons-react"
import Image from "next/image"
import { buttonVariants } from "../ui/button"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"

export default function Header() {
  return (
    <div className="flex items-center py-4">
      <Image src="/logo.svg" alt="Logo" width={100} height={60} />
      <div className="flex-1"></div>
      <div className="flex items-center gap-1">
        <a
          href="https://play.google.com/store/apps/details?id=com.fourm.marty"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ className: "px-6" }))}
        >
          <IconDeviceMobile className="size-5" />
          حمل التطبيق
        </a>
        <ThemeToggle />
      </div>
    </div>
  )
}
