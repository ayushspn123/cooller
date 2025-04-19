import Image from "next/image"
import Link from "next/link"
import { Clock, ShieldCheck, Weight, Star } from "lucide-react"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card h-full flex flex-col group">
      <div className="relative h-72 overflow-hidden">
        <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
        <div className="absolute top-4 right-4">
          <span className="bg-[var(--accent-orange)] text-white text-sm font-bold px-3 py-1 rounded-full">New</span>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center mb-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={16} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">({Math.floor(Math.random() * 100) + 50})</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{product.shortDescription}</p>

        <div className="mb-4">
          <ul className="space-y-2">
            {product.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-700">
                {feature.icon === "clock" && <Clock size={16} className="mr-2 text-[var(--primary)]" />}
                {feature.icon === "shield" && <ShieldCheck size={16} className="mr-2 text-[var(--primary)]" />}
                {feature.icon === "weight" && <Weight size={16} className="mr-2 text-[var(--primary)]" />}
                {feature.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <span className="text-xl font-bold text-[var(--primary)]">${product.price}</span>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 20a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                <path d="M20 20a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </button>
            <Link href={`/products/${product.id}`} className="btn btn-primary py-2 px-4">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
