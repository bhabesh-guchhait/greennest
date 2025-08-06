import Image from "next/image"

const productCategories = [
  {
    title: "Plants",
    image: "/images/best-image/best_picks-02.jpg",
    bgColor: "bg-green-100",
  },
  {
    title: "Fertilizers",
    image: "/images/best-image/best_picks-05.jpg",
    bgColor: "bg-green-200",
  },
  {
    title: "Ceramic Pots",
    image: "/images/best-image/best_picks-03.jpg",
    bgColor: "bg-green-100",
  },
  {
    title: "Seeds",
    image: "/images/best-image/best_picks-04.jpg",
    bgColor: "bg-green-200",
  },
]

export default function ProductCategories() {
  return (
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
  )
}
