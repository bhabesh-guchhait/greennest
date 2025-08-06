import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Green Banner */}
      <div className="bg-green-700 text-white py-4 overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="flex items-center mx-8 flex-shrink-0">
              <div className="w-6 h-6 mr-2">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66C7.71 17.33 10.26 13.93 17 12c3.79-.98 4.07-6.47 4.07-6.47s-1.07.47-4.07.47z"/>
                  <path d="M3.82 21.34C5.9 16.17 8 10 17 8c3-.47 4.07-.47 4.07-.47S20.79 13.02 17 14c-6.74 1.93-9.29 5.33-11.29 10z"/>
                </svg>
              </div>
              <span className="font-medium">Plants Grow People</span>
            </div>
          ))}
        </div>
      </div>

      {/* City Links */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="#" className="text-gray-600 hover:text-green-600 underline">Mumbai</Link>
            <Link href="#" className="text-gray-600 hover:text-green-600 underline">Pune</Link>
            <Link href="#" className="text-gray-600 hover:text-green-600 underline">Delhi</Link>
            <Link href="#" className="text-gray-600 hover:text-green-600 underline">Bangalore</Link>
            <Link href="#" className="text-gray-600 hover:text-green-600 underline">Hyderabad</Link>
            <Link href="#" className="text-gray-600 hover:text-green-600 underline">Chennai</Link>
            <Link href="#" className="text-gray-600 hover:text-green-600 underline">Kolkata</Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About Us */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">ABOUT US</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-600 hover:text-green-600 text-sm">Our Story</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-green-600 text-sm">Contact Us</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-green-600 text-sm">Careers</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-green-600 text-sm">Locate Stores</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-green-600 text-sm">Own Grown</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-green-600 text-sm">Garden Services & Maintenance</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">CUSTOMER CARE</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-600 hover:text-green-600 text-sm">Take The Plant Quiz</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-green-600 text-sm">Track Order</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-green-600 text-sm">Shipping Policy</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-green-600 text-sm">Terms and Conditions</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-green-600 text-sm">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-green-600 text-sm">FAQs</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-green-600 text-sm">Refund policy</Link></li>
            </ul>
          </div>

          {/* Offers & Rewards */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">OFFERS & REWARDS</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-600 hover:text-green-600 text-sm">Plant Parent Rewards Club</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-green-600 text-sm">Ugaoo Coupons</Link></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">GET IN TOUCH</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <p>WhatsApp us at: 8087087224</p>
              <p>Call: +91-9129912991</p>
              <p>Email: support@ugaoo.com</p>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">SIGN UP FOR OUR NEWSLETTER</h3>
            <div className="flex mb-4">
              <Input
                type="email"
                placeholder="Enter email address"
                className="flex-1 rounded-r-none border-r-0"
              />
              <Button className="bg-green-600 hover:bg-green-700 rounded-l-none px-3">
                →
              </Button>
            </div>
            <p className="text-xs text-gray-600 mb-6">
              For plant care tips, our featured plant of the week, exclusive offers and discounts
            </p>

            <h4 className="font-semibold text-gray-900 mb-4">FOLLOW US</h4>
            <div className="flex space-x-4 mb-6">
              <Link href="#" className="text-gray-400 hover:text-blue-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-800">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.569 2.956 7.569 6.919 0 4.125-2.603 7.441-6.211 7.441-1.212 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </Link>
            </div>

            <h4 className="font-semibold text-gray-900 mb-4">DOWNLOAD OUR APP</h4>
            <div className="flex space-x-2">
              <Link href="#" className="block">
                <div className="bg-black text-white px-3 py-2 rounded text-xs flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div>
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </div>
              </Link>
              <Link href="#" className="block">
                <div className="bg-black text-white px-3 py-2 rounded text-xs flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div>
                    <div className="text-xs">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
