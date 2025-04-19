import Image from "next/image"
import Link from "next/link"
import { Clock, Shield, Leaf, ChevronRight, Star, TrendingUp, Truck } from "lucide-react"
import ProductCard from "@/components/product-card"
import { products } from "@/lib/data"

export default function Home() {
  // Featured products (first 3)
  const featuredProducts = products.slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpeg?height=100&width=1920"
            alt="Cooler in the wild"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl text-white">
            <div className="inline-block px-4 py-1 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <p className="text-sm font-medium text-white">Premium Outdoor Coolers</p>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-shadow-lg">
              Stay Cool. <br />
              <span className="text-[var(--accent-orange)]">Wherever You Go.</span>
            </h1>
            <p className="text-xl mb-8 text-gray-100 max-w-lg">
              Premium coolers designed for outdoor enthusiasts and adventurers. Built to last and keep your items cold
              for days.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="btn btn-primary">
                Shop Coolers
              </Link>
              <Link
                href="/about"
                className="btn btn-outline bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-[var(--primary)]"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-8 right-8 md:right-16 z-10 hidden md:block">
          <div className="glass-card p-6 w-64">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center">
                <Star size={20} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Customer Rating</p>
                <p className="font-bold text-lg">4.9/5 (2,500+ reviews)</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[var(--accent-orange)] flex items-center justify-center">
                <TrendingUp size={20} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Trusted By</p>
                <p className="font-bold text-lg">50,000+ Adventurers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 bg-[var(--light)]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title mb-8 pb-4">
              Why Choose <span className="text-[var(--primary)]">Arctic Chill</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our coolers are designed with the modern adventurer in mind, combining cutting-edge technology with rugged
              durability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="feature-card text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-[var(--primary)] bg-opacity-10 flex items-center justify-center">
                  <Clock size={40} className="text-[var(--primary)]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">24+ Hours Cold Retention</h3>
              <p className="text-gray-600">
                Our advanced insulation technology keeps your items cold for more than 24 hours, even in extreme
                conditions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-[var(--primary)] bg-opacity-10 flex items-center justify-center">
                  <Shield size={40} className="text-[var(--primary)]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Ultra Durable</h3>
              <p className="text-gray-600">
                Built to withstand the toughest conditions with impact-resistant materials and reinforced construction.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-[var(--primary)] bg-opacity-10 flex items-center justify-center">
                  <Leaf size={40} className="text-[var(--primary)]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Eco-Friendly Materials</h3>
              <p className="text-gray-600">
                Committed to sustainability with eco-friendly materials and manufacturing processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title mb-8 pb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Discover our most popular coolers, designed for every adventure and outdoor experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/products" className="btn btn-outline inline-flex items-center">
              View All Products <ChevronRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-[var(--light)]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title mb-8 pb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Don't just take our word for it - hear from adventurers who rely on Arctic Chill.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "My Arctic Chill cooler kept ice frozen for our entire 5-day camping trip in the desert. Absolutely
                worth every penny!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <p className="font-bold">Michael R.</p>
                  <p className="text-sm text-gray-500">Expedition Pro 75 Owner</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The durability is impressive. After accidentally dropping it from my truck, not a scratch and
                everything inside stayed perfectly cold."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <p className="font-bold">Sarah T.</p>
                  <p className="text-sm text-gray-500">Trailblazer 45 Owner</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "I've tried many coolers over the years, but Arctic Chill is in a league of its own. The quality and
                performance are unmatched."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <p className="font-bold">James L.</p>
                  <p className="text-sm text-gray-500">Multiple Product Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-bg">
        <div className="container">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for Your Next Adventure?</h2>
            <p className="text-xl mb-8 text-white/90">
              Explore our collection of premium coolers and find the perfect companion for your outdoor activities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/products" className="btn bg-white text-[var(--primary)] hover:bg-gray-100">
                Shop Now
              </Link>
              <Link href="/contact" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center">
              <Truck size={32} className="text-[var(--primary)] mb-3" />
              <h3 className="font-bold mb-1">Free Shipping</h3>
              <p className="text-sm text-gray-600">On orders over $100</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield size={32} className="text-[var(--primary)] mb-3" />
              <h3 className="font-bold mb-1">5-Year Warranty</h3>
              <p className="text-sm text-gray-600">On all products</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Clock size={32} className="text-[var(--primary)] mb-3" />
              <h3 className="font-bold mb-1">24/7 Support</h3>
              <p className="text-sm text-gray-600">Always here to help</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Leaf size={32} className="text-[var(--primary)] mb-3" />
              <h3 className="font-bold mb-1">Eco-Friendly</h3>
              <p className="text-sm text-gray-600">Sustainable materials</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
