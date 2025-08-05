"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, User, ShoppingCart, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function UgaooHomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const categories = [
    { name: "Start Now", image: "/placeholder.svg?height=80&width=80" },
    { name: "Buy 2 @ ₹1999", image: "/placeholder.svg?height=80&width=80" },
    { name: "Indoor Plants", image: "/placeholder.svg?height=80&width=80" },
    { name: "Bestsellers", image: "/placeholder.svg?height=80&width=80" },
    { name: "Easy To Care", image: "/placeholder.svg?height=80&width=80" },
    { name: "Fertilizers", image: "/placeholder.svg?height=80&width=80" },
    { name: "Seeds", image: "/placeholder.svg?height=80&width=80" },
    { name: "Plant Care", image: "/placeholder.svg?height=80&width=80" },
  ]

  const productCategories = [
    {
      title: "Plants",
      image: "/placeholder.svg?height=200&width=300",
      bgColor: "bg-green-100",
    },
    {
      title: "Fertilizers",
      image: "/placeholder.svg?height=200&width=300",
      bgColor: "bg-green-200",
    },
    {
      title: "Ceramic Pots",
      image: "/placeholder.svg?height=200&width=300",
      bgColor: "bg-green-100",
    },
    {
      title: "Seeds",
      image: "/placeholder.svg?height=200&width=300",
      bgColor: "bg-green-200",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Top promotional bars */}
      <div className="bg-green-800 text-white">
        <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-2 text-xs sm:text-sm">
          <div className="mb-1 sm:mb-0">Free Delivery Above ₹999 | Shop Now</div>
          <div className="mb-1 sm:mb-0">Get 10% OFF Above ₹1299 | Use : RAIN10</div>
          <div>Get 2 Large Plants @ ₹1999</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="text-green-600 font-bold text-2xl">ugaoo</div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-gray-700 hover:text-green-600 font-medium">
                PLANTS
              </Link>
              <Link href="#" className="text-gray-700 hover:text-green-600 font-medium">
                SEEDS
              </Link>
              <Link href="#" className="text-gray-700 hover:text-green-600 font-medium">
                POTS & PLANTERS
              </Link>
              <Link href="#" className="text-gray-700 hover:text-green-600 font-medium">
                PLANT CARE
              </Link>
              <Link href="#" className="text-gray-700 hover:text-green-600 font-medium">
                GIFTING
              </Link>
              <Link href="#" className="text-gray-700 hover:text-green-600 font-medium">
                BLOG
              </Link>
              <Link href="#" className="bg-yellow-400 text-black px-3 py-1 rounded font-medium">
                OFFERS
              </Link>
            </div>

            {/* Search and Icons */}
            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block">
                <Input
                  type="text"
                  placeholder="Search For Plants, Pots, Fertilizers..."
                  className="w-64 lg:w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              </div>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Search */}
      <div className="sm:hidden px-4 py-3 bg-gray-50">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search For Plants, Pots, Fertilizers..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        </div>
      </div>

      {/* Category Circles */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-2 shadow-md">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs md:text-sm font-medium text-gray-700">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-green-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Hero background"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
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
            </div>

            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Plants in pots"
                width={500}
                height={400}
                className="max-w-full h-auto"
              />
            </div>
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

      {/* Product Categories */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className={`${category.bgColor} rounded-3xl p-8 text-center hover:shadow-lg transition-shadow cursor-pointer`}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">{category.title}</h3>
                <div className="flex justify-center">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    width={200}
                    height={150}
                    className="max-w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WhatsApp Chat Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button size="icon" className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg">
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
