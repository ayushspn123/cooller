import Link from "next/link"
import { notFound } from "next/navigation"
import { Clock, ShieldCheck, Weight, Check, Star, ShoppingCart } from "lucide-react"
import { products } from "@/lib/data"
import ProductGallery from "@/components/product-gallery"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="py-16">
      <div className="container">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <nav className="text-sm text-gray-500">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="hover:text-[var(--primary)]">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/products" className="hover:text-[var(--primary)]">
                  Products
                </Link>
              </li>
              <li>/</li>
              <li className="text-[var(--primary)]">{product.name}</li>
            </ol>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Gallery */}
          <div>
            <ProductGallery product={product} />
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-2 flex items-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-500 ml-2">({Math.floor(Math.random() * 100) + 50} reviews)</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
            <div className="text-2xl font-bold text-[var(--primary)] mb-6">${product.price}</div>

            <div className="mb-8">
              <p className="text-gray-700 mb-4 text-lg">{product.description}</p>

              <div className="bg-[var(--light)] p-6 rounded-xl mt-6">
                <h3 className="text-xl font-bold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-3 mt-1 text-[var(--primary)]">
                        {feature.icon === "clock" && <Clock size={20} />}
                        {feature.icon === "shield" && <ShieldCheck size={20} />}
                        {feature.icon === "weight" && <Weight size={20} />}
                      </span>
                      <span className="text-gray-700">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Specifications</h3>
              <div className="grid grid-cols-2 gap-4 bg-white p-6 rounded-xl border border-gray-200">
                <div className="border-b pb-3">
                  <span className="text-gray-600 text-sm">Dimensions</span>
                  <p className="font-medium">{product.specs.dimensions}</p>
                </div>
                <div className="border-b pb-3">
                  <span className="text-gray-600 text-sm">Weight</span>
                  <p className="font-medium">{product.specs.weight}</p>
                </div>
                <div className="border-b pb-3">
                  <span className="text-gray-600 text-sm">Capacity</span>
                  <p className="font-medium">{product.specs.capacity}</p>
                </div>
                <div className="border-b pb-3">
                  <span className="text-gray-600 text-sm">Material</span>
                  <p className="font-medium">{product.specs.material}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-4 mb-8">
              <div className="flex items-center">
                <label htmlFor="quantity" className="mr-4 font-medium">
                  Quantity:
                </label>
                <div className="flex border border-gray-300 rounded-md">
                  <button className="px-3 py-2 border-r border-gray-300 hover:bg-gray-100">-</button>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    value="1"
                    className="w-16 text-center focus:outline-none"
                    readOnly
                  />
                  <button className="px-3 py-2 border-l border-gray-300 hover:bg-gray-100">+</button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="btn btn-primary flex items-center justify-center">
                  <ShoppingCart size={20} className="mr-2" />
                  Add to Cart
                </button>
                <button className="btn bg-[var(--accent-orange)] text-white hover:bg-opacity-90">Buy Now</button>
              </div>
            </div>

            <div className="bg-[var(--light)] p-6 rounded-xl">
              <div className="flex items-center space-x-3 mb-3">
                <Check size={20} className="text-[var(--accent-green)]" />
                <span className="font-medium">Free shipping on orders over $100</span>
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <Check size={20} className="text-[var(--accent-green)]" />
                <span className="font-medium">5-year warranty included</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check size={20} className="text-[var(--accent-green)]" />
                <span className="font-medium">30-day money-back guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
