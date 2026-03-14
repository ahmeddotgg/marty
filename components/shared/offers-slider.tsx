"use client"

import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

const images = [
  { src: "/offer-1.jpg", alt: "Offer 1" },
  { src: "/offer-2.jpg", alt: "Offer 2" },
  { src: "/offer-3.jpg", alt: "Offer 3" }
]
export default function OffersSlider() {
  return (
    <Carousel
      opts={{
        align: "start",
        direction: "rtl",
        loop: true
      }}
      plugins={[
        Autoplay({
          delay: 4000
        })
      ]}
      className="w-full shadow-lg my-8"
      dir="rtl"
    >
      <CarouselContent>
        {images.map((img) => (
          <CarouselItem key={img.alt}>
            <div className="aspect-17/8 relative shadow-md">
              <Image
                src={img.src}
                alt={img.alt}
                className="size-full rounded-md object-cover"
                fill
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
