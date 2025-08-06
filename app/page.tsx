"use client"

import { useState } from "react"
import Header from "@/components/header"
import CategoryCircles from "@/components/category-circles"
import HeroSection from "@/components/hero-section"
import ProductCategories from "@/components/product-categories"
import ProductsSection from "@/components/products-section"
import CartSidebar from "@/components/cart-sidebar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function UgaooHomePage() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header onCartOpen={() => setIsCartOpen(true)} />
      <CategoryCircles />
      <HeroSection />
      <ProductCategories />
      <ProductsSection />
      <WhatsAppButton />
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Footer />
    </div>
  )
}
