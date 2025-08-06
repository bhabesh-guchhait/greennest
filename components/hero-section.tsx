"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from "next/image"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <div className="relative bg-green-800 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/products/Banners-fix-03.webp"
          alt="Hero background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* <div className="text-center md:text-left">
            <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium mb-4">
              INDOOR PLANTS
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Monsoon
              <br />
              <span className="line-through decoration-yellow-400">Blues</span>
              <br />
              <span className="text-green-300">Greens</span>
            </h1>
            <Button className="bg-green-300 text-green-800 hover:bg-green-200 px-8 py-3 rounded-full font-medium">
              Shop Now
            </Button>
          </div> */}

          {/* <div className="flex justify-center">
            <Image
              src="/images/products/1.jpg"
              alt="Plants in pots"
              width={500}
              height={400}
              className="max-w-full h-auto"
            />
          </div> */}
        </div>
      </div>

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
        onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
        onClick={() => setCurrentSlide(currentSlide + 1)}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  )
}
