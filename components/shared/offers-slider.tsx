"use client"

import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

type Img = { src: string; alt: string }

export default function OffersSlider() {
  const [images, setImages] = useState<Img[]>([])

  useEffect(() => {
    let mounted = true
    fetch("/api/offers")
      .then((res) => res.json())
      .then((files: string[]) => {
        if (!mounted || !Array.isArray(files)) return
        setImages(
          files.map((name, i) => ({ src: `/offers/${name}`, alt: `Offer ${i + 1}` }))
        )
      })
      .catch(() => {})
    return () => {
      mounted = false
    }
  }, [])

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
      className="wrapper my-8 w-full"
      dir="rtl"
    >
      <CarouselContent className="w-full shadow-2xl">
        {images.map((img) => (
          <CarouselItem key={img.alt} className="relative h-88 w-full">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="rounded-md object-cover object-top"
              loading="eager"
              sizes="100vw"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
