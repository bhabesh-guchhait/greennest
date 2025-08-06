import Image from "next/image"

const categories = [
  { name: "Start Now", image: "/images/category/c-1.jpg" },
  { name: "Buy 2 @ ₹1999", image: "/images/category/c-2.jpg" },
  { name: "Indoor Plants", image: "/images/category/c-3.jpg" },
  { name: "Bestsellers", image: "/images/category/c-4.jpg" },
  { name: "Easy To Care", image: "/images/category/c-5.jpg" },
  { name: "Fertilizers", image: "/images/category/c-6.jpg" },
  { name: "Seeds", image: "/images/category/c-7.jpg" },
  { name: "Plant Care", image: "/images/category/c-8.jpg" },
]

export default function CategoryCircles() {
  return (
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
  )
}
