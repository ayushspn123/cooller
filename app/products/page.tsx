import { products } from "@/lib/data"
import ProductCard from "@/components/product-card"

export default function ProductsPage() {
  return (
    <div>
      {/* Products Hero */}
      <section className="bg-[var(--primary)] py-16">
        <div className="container">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Explore our range of high-performance coolers designed for every adventure
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
