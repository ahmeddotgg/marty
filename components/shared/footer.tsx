"use client"

import Image from "next/image"
import Link from "next/link"
import { SocialIcon } from "react-social-icons"
import { Separator } from "../ui/separator"
import { links } from "./header"

export default function Footer() {
  return (
    <>
      <div className="wrapper flex flex-col gap-10 py-16 md:flex-row md:gap-20">
        <div className="flex flex-col items-center gap-4 text-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={60}
            className="w-auto max-w-28"
          />
          <p className="text-sm text-muted-foreground">
            مارتي | Marty App 🚀 <br /> بيتك التاني للتسوق 🏠
          </p>
          <div className="space-y-3">
            <ul className="flex gap-3">
              <li>
                <SocialIcon
                  url="https://www.facebook.com/profile.php?id=100064153298398"
                  className="size-8!"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </li>
              <li>
                <SocialIcon
                  url="https://www.tiktok.com/@marty.banha"
                  className="size-8!"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </li>
              <li>
                <SocialIcon
                  url="https://www.instagram.com/marty_banha"
                  className="size-8!"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </li>
            </ul>
            <ul className="flex justify-center gap-5">
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.fourm.marty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Image
                    src="/icons/google.png"
                    alt="play store icon"
                    width={30}
                    height={30}
                    className="size-7 w-auto"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://apps.apple.com/eg/app/marty/id6759621448"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Image
                    src="/icons/apple.png"
                    alt="app store icon"
                    width={30}
                    height={30}
                    className="size-7 w-auto"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-around md:flex-1">
          <ul className="col-start-2 space-y-2">
            <p className="mb-4 text-lg font-semibold">روابط سريعة</p>
            {links.map((link) => (
              <li key={link.title} className="text-muted-foreground">
                <Link href={link.href} className="transition-colors hover:text-primary">
                  {link.title}
                </Link>
              </li>
            ))}
            <li className="text-muted-foreground">
              <a
                href="https://wa.me/201288249293"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                أتصل بنا
              </a>
            </li>
          </ul>
          <ul className="space-y-2 [&>li]:text-muted-foreground">
            <p className="mb-4 text-lg font-semibold">خدماتنا</p>
            <li>مطاعم</li>
            <li>سوبر ماركت</li>
            <li>خدمات التوصيل</li>
            <li>الحجوزات</li>
          </ul>
        </div>
      </div>
      <Separator />
      <div className="py-6 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Marty جميع الحقوق محفوظة.
      </div>
    </>
  )
}
