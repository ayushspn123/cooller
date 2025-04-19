"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Product } from "@/lib/types"

interface ProductGalleryProps {
  product: Product
}

const ProductGallery = ({ product }: ProductGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // For a real implementation, we would have multiple images per product
  // Here we're simulating it with the same image
  const images = [
    product.image,
    product.image,
    product.image,
    product.image,
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const selectImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <div>
      {/* Main Image */}
      <div className="relative h-96 md:h-[500px] mb-6 rounded-xl overflow-hidden">
        <Image src={images[currentImageIndex] || "/placeholder.svg"} alt={product.name} fill className="object-cover" />

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md hover:bg-white transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md hover:bg-white transition-colors"
          aria-label="Next image"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex space-x-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => selectImage(index)}
            className={`relative w-24 h-24 rounded-lg overflow-hidden transition-all ${
              index === currentImageIndex
                ? "ring-2 ring-[var(--primary)] ring-offset-2"
                : "border border-gray-200 hover:border-gray-300"
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${product.name} thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductGallery
