"use client"

import Image from "next/image"
import { Button } from "../ui/button"

export default function CtaButtons() {
  return (
    <div className="wrapper py-26">
      <div className="rounded-lg bg-linear-to-br from-[#ffae00] to-primary p-16 text-center text-slate-950">
        <h2 className="text-2xl font-bold">جاهز للطلب؟ حمل التطبيق الآن</h2>
        <p className="mt-2 mb-8">بيتك التاني للتسوق.</p>
        <div className="flex flex-col items-center justify-center sm:flex-row">
          <Button
            className="h-15 gap-4 rounded-sm bg-neutral-900 px-8 text-start tracking-wide hover:bg-neutral-800"
            dir="ltr"
            nativeButton={false}
            render={
              <a
                href="https://play.google.com/store/apps/details?id=com.fourm.marty"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/google.png"
                  alt="play store icon"
                  width={30}
                  height={30}
                  className="w-auto"
                />
                <p>
                  <span className="block text-xs font-light">GET IT ON</span>
                  <span>Google Play</span>
                </p>
              </a>
            }
          />
          <Button
            className="h-15 gap-4 rounded-sm bg-neutral-900 px-6 text-start tracking-wide hover:bg-neutral-800"
            dir="ltr"
            nativeButton={false}
            render={
              <a
                href="https://apps.apple.com/eg/app/marty/id6759621448"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/apple.png"
                  alt="app store icon"
                  width={30}
                  height={30}
                  className="w-auto"
                />
                <p>
                  <span className="block text-xs font-light">Download on the</span>
                  <span>App Store</span>
                </p>
              </a>
            }
          />
        </div>
      </div>
    </div>
  )
}
