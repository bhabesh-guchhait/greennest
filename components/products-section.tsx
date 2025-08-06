import { Button } from "@/components/ui/button"
import { Filter, ChevronDown, Star } from 'lucide-react'
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Lotus Seeds",
    image: "/images/products/1.jpg",
    rating: 5.0,
    reviews: 1,
    originalPrice: 399,
    discountedPrice: 199,
    discount: 50,
    badge: "50% OFF",
    badgeColor: "bg-green-600",
    buttonText: "View Product",
    buttonStyle: "bg-green-600 hover:bg-green-700"
  },
  {
    id: 2,
    name: "Flower Seeds Bundle of 5 Packet",
    image: "/images/products/2.jpg",
    rating: 4.8,
    reviews: 5,
    originalPrice: 775,
    discountedPrice: 449,
    discount: 42,
    badge: "42% OFF",
    badgeColor: "bg-green-600",
    buttonText: "Add To Cart",
    buttonStyle: "bg-green-600 hover:bg-green-700"
  },
  {
    id: 3,
    name: "Coriander Seeds",
    image: "/images/products/3.jpg",
    rating: 4.68,
    reviews: 31,
    originalPrice: 145,
    discountedPrice: 99,
    discount: 32,
    badge: "32% OFF",
    badgeColor: "bg-green-600",
    buttonText: "View Product",
    buttonStyle: "bg-green-600 hover:bg-green-700"
  },
  {
    id: 4,
    name: "Spinach Seeds (Palak)",
    image: "/images/products/4.jpg",
    rating: 4.72,
    reviews: 36,
    originalPrice: 145,
    discountedPrice: 99,
    discount: 32,
    badge: "🔥 Bestseller",
    badgeColor: "bg-orange-500",
    buttonText: "View Product",
    buttonStyle: "bg-green-600 hover:bg-green-700"
  },
  {
    id: 5,
    name: "Tomato Seeds - Cherry Variety",
    image: "/images/products/5.jpg",
    rating: 4.5,
    reviews: 28,
    originalPrice: 199,
    discountedPrice: 129,
    discount: 35,
    badge: "35% OFF",
    badgeColor: "bg-green-600",
    buttonText: "Add To Cart",
    buttonStyle: "bg-green-600 hover:bg-green-700"
  },
  {
    id: 6,
    name: "Marigold Seeds - Mixed Colors",
    image: "/images/products/6.jpg",
    rating: 4.6,
    reviews: 42,
    originalPrice: 99,
    discountedPrice: 69,
    discount: 30,
    badge: "30% OFF",
    badgeColor: "bg-green-600",
    buttonText: "View Product",
    buttonStyle: "bg-green-600 hover:bg-green-700"
  },
  {
    id: 7,
    name: "Basil Seeds - Holy Basil",
    image: "/images/products/7.jpg",
    rating: 4.8,
    reviews: 19,
    originalPrice: 149,
    discountedPrice: 99,
    discount: 34,
    badge: "34% OFF",
    badgeColor: "bg-green-600",
    buttonText: "Add To Cart",
    buttonStyle: "bg-green-600 hover:bg-green-700"
  },
  {
    id: 8,
    name: "Sunflower Seeds - Giant Variety",
    image: "/images/products/8.jpg",
    rating: 4.4,
    reviews: 15,
    originalPrice: 179,
    discountedPrice: 119,
    discount: 34,
    badge: "⭐ New Arrival",
    badgeColor: "bg-blue-500",
    buttonText: "View Product",
    buttonStyle: "bg-green-600 hover:bg-green-700"
  },
  {
    id: 9,
    name: "Carrot Seeds - Orange Variety",
    image: "/images/products/1.jpg",
    rating: 4.3,
    reviews: 22,
    originalPrice: 129,
    discountedPrice: 89,
    discount: 31,
    badge: "31% OFF",
    badgeColor: "bg-green-600",
    buttonText: "Add To Cart",
    buttonStyle: "bg-green-600 hover:bg-green-700"
  },
  {
    id: 10,
    name: "Mint Seeds - Spearmint",
    image: "/images/products/2.jpg",
    rating: 4.7,
    reviews: 33,
    originalPrice: 119,
    discountedPrice: 79,
    discount: 34,
    badge: "34% OFF",
    badgeColor: "bg-green-600",
    buttonText: "View Product",
    buttonStyle: "bg-green-600 hover:bg-green-700"
  },
  {
    id: 11,
    name: "Chili Seeds - Green Chili",
    image: "/images/products/3.jpg",
    rating: 4.5,
    reviews: 27,
    originalPrice: 159,
    discountedPrice: 109,
    discount: 31,
    badge: "31% OFF",
    badgeColor: "bg-green-600",
    buttonText: "Add To Cart",
    buttonStyle: "bg-green-600 hover:bg-green-700"
  },
  {
    id: 12,
    name: "Cucumber Seeds - Hybrid Variety",
    image: "/images/products/4.jpg",
    rating: 4.2,
    reviews: 18,
    originalPrice: 139,
    discountedPrice: 99,
    discount: 29,
    badge: "29% OFF",
    badgeColor: "bg-green-600",
    buttonText: "View Product",
    buttonStyle: "bg-green-600 hover:bg-green-700"
  },
  {
    id: 13,
    name: "Radish Seeds - White Variety",
    image: "/images/products/5.jpg",
    rating: 4.4,
    reviews: 21,
    originalPrice: 99,
    discountedPrice: 69,
    discount: 30,
    badge: "30% OFF",
    badgeColor: "bg-green-600",
    buttonText: "Add To Cart",
    buttonStyle: "bg-green-600 hover:bg-green-700"
  },
  {
    id: 14,
    name: "Fenugreek Seeds (Methi)",
    image: "/images/products/6.jpg",
    rating: 4.6,
    reviews: 25,
    originalPrice: 109,
    discountedPrice: 79,
    discount: 28,
    badge: "28% OFF",
    badgeColor: "bg-green-600",
    buttonText: "View Product",
    buttonStyle: "bg-green-600 hover:bg-green-700"
  },
  {
    id: 15,
    name: "Okra Seeds (Bhindi)",
    image: "/images/products/7.jpg",
    rating: 4.3,
    reviews: 16,
    originalPrice: 149,
    discountedPrice: 109,
    discount: 27,
    badge: "27% OFF",
    badgeColor: "bg-green-600",
    buttonText: "Add To Cart",
    buttonStyle: "bg-green-600 hover:bg-green-700"
  },
  {
    id: 16,
    name: "Brinjal Seeds - Purple Variety",
    image: "/images/products/8.jpg",
    rating: 4.5,
    reviews: 29,
    originalPrice: 169,
    discountedPrice: 119,
    discount: 30,
    badge: "🔥 Bestseller",
    badgeColor: "bg-orange-500",
    buttonText: "View Product",
    buttonStyle: "bg-green-600 hover:bg-green-700"
  }
]

export default function ProductsSection() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Seeds</h2>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="flex items-center space-x-2">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
            <div className="relative">
              <Button variant="outline" className="flex items-center space-x-2 min-w-32">
                <span>Sort by</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              {/* Product Image */}
              <div className="relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                {/* Discount Badge */}
                <div className={`absolute top-3 left-3 ${product.badgeColor} text-white px-2 py-1 rounded text-xs font-medium`}>
                  {product.badge}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                {/* Rating */}
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium ml-1">{product.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">| {product.reviews}</span>
                  </div>
                </div>

                {/* Product Name */}
                <h3 className="font-medium text-gray-900 mb-3 line-clamp-2">{product.name}</h3>

                {/* Pricing */}
                <div className="flex items-center mb-4">
                  <span className="text-sm text-gray-500 line-through mr-2">₹{product.originalPrice}</span>
                  <span className="text-lg font-bold text-gray-900">₹{product.discountedPrice}</span>
                </div>

                {/* Action Button */}
                <Button className={`w-full ${product.buttonStyle} text-white`}>
                  {product.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
