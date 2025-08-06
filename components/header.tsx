"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, User, ShoppingCart, ChevronRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

interface HeaderProps {
  onCartOpen: () => void
}

export default function Header({ onCartOpen }: HeaderProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  return (
    <>
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
            {/* Logo - Left */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="text-green-600 font-bold text-2xl">GreenNest</div>
              </Link>
            </div>

            {/* Desktop Navigation - Center */}
            <div className="hidden md:flex items-center space-x-8">
              {/* PLANTS Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('plants')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href="#" className="text-gray-700 hover:text-green-600 font-medium">
                  PLANTS
                </Link>
                {activeDropdown === 'plants' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg border z-50">
                    <div className="py-2">
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">XL plants</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Indoor Plants</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Flowering Plants</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Low Maintenance Plants</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Air Purifying Plants</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Low Light Plants</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cacti and Succulents</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Hanging Plants</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Medicinal & Aromatic Plants</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Pet-Friendly Plants</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Fruit Plants</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Bundles</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">New Arrivals</Link>
                      <div className="border-t border-gray-200 mt-2 pt-2">
                        <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between">
                          Shop by Location
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                        <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Subscriptions</Link>
                        <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between">
                          Shop by Name
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* SEEDS Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('seeds')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href="#" className="text-gray-700 hover:text-green-600 font-medium">
                  SEEDS
                </Link>
                {activeDropdown === 'seeds' && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg border z-50">
                    <div className="py-2">
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Vegetable Seeds</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Flower Seeds</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Herb Seeds</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Fruit Seeds</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Microgreen Seeds</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Exotic Seeds</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Seasonal Seeds</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Seed Combos</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Organic Seeds</Link>
                    </div>
                  </div>
                )}
              </div>

              {/* POTS & PLANTERS Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('pots')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href="#" className="text-gray-700 hover:text-green-600 font-medium">
                  POTS & PLANTERS
                </Link>
                {activeDropdown === 'pots' && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg border z-50">
                    <div className="py-2">
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Ceramic Pots</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Plastic Pots</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Metal Planters</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Hanging Planters</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Self Watering Pots</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Designer Pots</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Grow Bags</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Saucers & Trays</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Pot Stands</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Garden Decor</Link>
                    </div>
                  </div>
                )}
              </div>

              {/* PLANT CARE Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('care')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href="#" className="text-gray-700 hover:text-green-600 font-medium">
                  PLANT CARE
                </Link>
                {activeDropdown === 'care' && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg border z-50">
                    <div className="py-2">
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Fertilizers</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Organic Manure</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Pesticides</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Growth Promoters</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Soil & Potting Mix</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Garden Tools</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Watering Tools</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Plant Support</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Care Kits</Link>
                    </div>
                  </div>
                )}
              </div>

              {/* GIFTING Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('gifting')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href="#" className="text-gray-700 hover:text-green-600 font-medium">
                  GIFTING
                </Link>
                {activeDropdown === 'gifting' && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg border z-50">
                    <div className="py-2">
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Birthday Gifts</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Anniversary Gifts</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Housewarming Gifts</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Corporate Gifts</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Wedding Gifts</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Gift Hampers</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Personalized Gifts</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Gift Cards</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Subscription Gifts</Link>
                    </div>
                  </div>
                )}
              </div>

              {/* BLOG Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('blog')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href="#" className="text-gray-700 hover:text-green-600 font-medium">
                  BLOG
                </Link>
                {activeDropdown === 'blog' && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg border z-50">
                    <div className="py-2">
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Plant Care Tips</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Gardening Guides</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Plant Diseases</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Seasonal Care</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Indoor Gardening</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Plant Styling</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Success Stories</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Expert Advice</Link>
                    </div>
                  </div>
                )}
              </div>

              {/* OFFERS Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('offers')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href="#" className="bg-yellow-400 text-black px-3 py-1 rounded font-medium hover:bg-yellow-300">
                  OFFERS
                </Link>
                {activeDropdown === 'offers' && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg border z-50">
                    <div className="py-2">
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Today's Deals</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Flash Sale</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Buy 1 Get 1</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Combo Offers</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Seasonal Sale</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Clearance Sale</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Bulk Discounts</Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">First Order Discount</Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Search and Icons - Right */}
            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block">
                <Input
                  type="text"
                  placeholder="Search For Plants, Pots, Fertilizers..."
                  className="w-64 lg:w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                
                {/* Search Suggestions Dropdown */}
                {isSearchFocused && (
                  <div className="absolute top-full left-0 mt-2 w-full lg:w-96 bg-white shadow-xl rounded-lg border z-50 p-4">
                    {/* Popular Choices */}
                    <div className="mb-6">
                      <div className="flex items-center mb-3">
                        <div className="w-4 h-4 mr-2">
                          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Popular Choices</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white rounded-full px-4 py-1 text-xs">
                          XL Plants →
                        </Button>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white rounded-full px-4 py-1 text-xs">
                          Soil and fertiliser →
                        </Button>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white rounded-full px-4 py-1 text-xs">
                          Ceramic Pots →
                        </Button>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white rounded-full px-4 py-1 text-xs">
                          Indoor Plants →
                        </Button>
                      </div>
                    </div>

                    {/* Recommended For You */}
                    <div>
                      <div className="flex items-center mb-3">
                        <div className="w-4 h-4 mr-2">
                          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Recommended For You</span>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        {/* Product 1 */}
                        <div className="bg-white border rounded-lg p-2 hover:shadow-md transition-shadow cursor-pointer">
                          <div className="relative">
                            <Image
                              src="/images/products/5.jpg"
                              alt="Plant Fertilizer Pellets"
                              width={80}
                              height={80}
                              className="w-full h-16 object-cover rounded"
                            />
                            <span className="absolute top-1 left-1 bg-yellow-400 text-black text-xs px-1 rounded">35%</span>
                            <div className="flex items-center mt-1">
                              <span className="text-xs text-yellow-500">★</span>
                              <span className="text-xs text-gray-500 ml-1">5.0</span>
                            </div>
                          </div>
                          <h4 className="text-xs font-medium mt-1 line-clamp-2">Plant Fertilizer Pellets - 1...</h4>
                          <div className="flex items-center mt-1">
                            <span className="text-xs text-gray-500 line-through">₹399</span>
                            <span className="text-xs font-bold text-green-600 ml-1">₹259</span>
                          </div>
                        </div>

                        {/* Product 2 */}
                        <div className="bg-white border rounded-lg p-2 hover:shadow-md transition-shadow cursor-pointer">
                          <div className="relative">
                            <Image
                              src="/images/products/6.jpg"
                              alt="Mustard Cake Powder"
                              width={80}
                              height={80}
                              className="w-full h-16 object-cover rounded"
                            />
                            <span className="absolute top-1 left-1 bg-yellow-400 text-black text-xs px-1 rounded">54%</span>
                          </div>
                          <h4 className="text-xs font-medium mt-1 line-clamp-2">Mustard Cake Powder</h4>
                          <div className="flex items-center mt-1">
                            <span className="text-xs text-gray-500 line-through">₹499</span>
                            <span className="text-xs font-bold text-green-600 ml-1">₹229</span>
                          </div>
                        </div>

                        {/* Product 3 */}
                        <div className="bg-white border rounded-lg p-2 hover:shadow-md transition-shadow cursor-pointer">
                          <div className="relative">
                            <Image
                              src="/images/products/8.jpg"
                              alt="Frosted Ceramic Pot"
                              width={80}
                              height={80}
                              className="w-full h-16 object-cover rounded"
                            />
                            <span className="absolute top-1 left-1 bg-yellow-400 text-black text-xs px-1 rounded">25%</span>
                          </div>
                          <h4 className="text-xs font-medium mt-1 line-clamp-2">Frosted Ceramic Pot</h4>
                          <div className="flex items-center mt-1">
                            <span className="text-xs text-gray-500 line-through">₹799</span>
                            <span className="text-xs font-bold text-green-600 ml-1">₹599</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={onCartOpen}>
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
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          
          {/* Mobile Search Suggestions */}
          {isSearchFocused && (
            <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-xl rounded-lg border z-50 p-4">
              {/* Popular Choices */}
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Popular Choices</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white rounded-full px-3 py-1 text-xs">
                    XL Plants
                  </Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white rounded-full px-3 py-1 text-xs">
                    Soil and fertiliser
                  </Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white rounded-full px-3 py-1 text-xs">
                    Ceramic Pots
                  </Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white rounded-full px-3 py-1 text-xs">
                    Indoor Plants
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
