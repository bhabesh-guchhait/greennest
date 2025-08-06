import { Button } from "@/components/ui/button"
import { ShoppingCart, X } from 'lucide-react'
import Image from "next/image"

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      
      {/* Cart Panel */}
      <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-xl z-50 overflow-y-auto">
        {/* Cart Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">CART</h2>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Promotional Banner */}
        <div className="bg-green-50 p-4 border-b">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/products/8.jpg"
              alt="Succulent"
              width={50}
              height={50}
              className="rounded"
            />
            <div className="flex-1">
              <p className="text-sm font-medium">Succulent worth ₹599 <span className="font-bold">FREE</span></p>
              <p className="text-xs text-gray-600">on orders above ₹1499</p>
            </div>
            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1">
              use code: MOREPLANTS
            </Button>
          </div>
        </div>

        {/* Delivery Progress */}
        <div className="p-4 border-b">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
            </div>
            <p className="text-sm">
              Add <span className="font-bold text-green-600">₹1,000</span> more to get <span className="font-bold">Free Delivery</span>
            </p>
          </div>
        </div>

        {/* Empty Cart */}
        <div className="p-6 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <ShoppingCart className="h-8 w-8 text-gray-400" />
          </div>
          <p className="text-gray-600 mb-6">Your cart is currently empty</p>
          
          <h3 className="font-semibold mb-4">Explore our wide collections</h3>
          
          {/* Product Categories Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-lg p-3 text-center hover:shadow-md transition-shadow cursor-pointer">
              <Image
                src="/images/products/7.jpg"
                alt="Indoor Plants"
                width={60}
                height={60}
                className="mx-auto mb-2 rounded"
              />
              <h4 className="text-sm font-medium mb-1">Indoor Plants</h4>
              <p className="text-xs text-green-600 font-medium">upto 60% off</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-3 text-center hover:shadow-md transition-shadow cursor-pointer">
              <Image
                src="/images/products/6.jpg"
                alt="Large Plants"
                width={60}
                height={60}
                className="mx-auto mb-2 rounded"
              />
              <h4 className="text-sm font-medium mb-1">Large Plants</h4>
              <p className="text-xs text-green-600 font-medium">Buy 2 @ ₹1999</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-3 text-center hover:shadow-md transition-shadow cursor-pointer">
              <Image
                src="/images/products/5.jpg"
                alt="Plant care"
                width={60}
                height={60}
                className="mx-auto mb-2 rounded"
              />
              <h4 className="text-sm font-medium mb-1">Plant care</h4>
              <p className="text-xs text-green-600 font-medium">upto 50% off</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-3 text-center hover:shadow-md transition-shadow cursor-pointer">
              <Image
                src="/images/products/4.jpg"
                alt="Fertilizers"
                width={60}
                height={60}
                className="mx-auto mb-2 rounded"
              />
              <h4 className="text-sm font-medium mb-1">Fertilizers</h4>
              <p className="text-xs text-green-600 font-medium">upto 55% off</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-3 text-center hover:shadow-md transition-shadow cursor-pointer">
              <Image
                src="/images/products/3.jpg"
                alt="Pots & Planters"
                width={60}
                height={60}
                className="mx-auto mb-2 rounded"
              />
              <h4 className="text-sm font-medium mb-1">Pots & Planters</h4>
              <p className="text-xs text-green-600 font-medium">extra 10% off</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-3 text-center hover:shadow-md transition-shadow cursor-pointer">
              <Image
                src="/images/products/2.jpg"
                alt="Plant Stands"
                width={60}
                height={60}
                className="mx-auto mb-2 rounded"
              />
              <h4 className="text-sm font-medium mb-1">Plant Stands</h4>
              <p className="text-xs text-green-600 font-medium">upto 60% off</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
