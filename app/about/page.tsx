import Image from "next/image"
import Link from "next/link"
import { Award, Users, Leaf, Truck } from "lucide-react"

export default function AboutPage() {
  return (
    <div>
      {/* About Hero */}
      <section className="bg-[var(--primary)] py-16">
        <div className="container">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-2xl mx-auto">Crafting premium coolers for outdoor enthusiasts since 2010</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Arctic Chill was founded in 2010 by a group of outdoor enthusiasts who were frustrated with the
                performance of existing coolers on the market. After a camping trip where their food spoiled due to
                inadequate cooling, they decided to create a better solution.
              </p>
              <p className="text-gray-700 mb-4">
                Starting in a small garage in Colorado, our founders combined their expertise in materials science,
                product design, and outdoor recreation to develop the first Arctic Chill prototype. After extensive
                testing in extreme conditions, from desert heat to mountain snow, they perfected a cooler that could
                maintain ice for days, not hours.
              </p>
              <p className="text-gray-700">
                Today, Arctic Chill has grown into a leading manufacturer of premium coolers, but our mission remains
                the same: to create durable, high-performance products that enhance outdoor experiences while minimizing
                environmental impact.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Our team in the outdoors"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-[var(--light)]">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)] bg-opacity-10 flex items-center justify-center mr-4">
                  <Award size={24} className="text-[var(--primary)]" />
                </div>
                <h3 className="text-xl font-bold">Quality Excellence</h3>
              </div>
              <p className="text-gray-700">
                We never compromise on quality. Every cooler undergoes rigorous testing to ensure it meets our high
                standards for durability, performance, and reliability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)] bg-opacity-10 flex items-center justify-center mr-4">
                  <Leaf size={24} className="text-[var(--primary)]" />
                </div>
                <h3 className="text-xl font-bold">Environmental Responsibility</h3>
              </div>
              <p className="text-gray-700">
                We're committed to sustainable practices, from using eco-friendly materials to implementing
                energy-efficient manufacturing processes and reducing waste.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)] bg-opacity-10 flex items-center justify-center mr-4">
                  <Users size={24} className="text-[var(--primary)]" />
                </div>
                <h3 className="text-xl font-bold">Customer Focus</h3>
              </div>
              <p className="text-gray-700">
                Our customers are at the heart of everything we do. We actively seek feedback and continuously improve
                our products to better meet their needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)] bg-opacity-10 flex items-center justify-center mr-4">
                  <Truck size={24} className="text-[var(--primary)]" />
                </div>
                <h3 className="text-xl font-bold">Innovation</h3>
              </div>
              <p className="text-gray-700">
                We're constantly exploring new technologies and materials to push the boundaries of what's possible in
                cooler design and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Our Team</h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Meet the passionate individuals behind Arctic Chill who are dedicated to creating the best coolers for your
            adventures.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Michael Thompson"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Michael Thompson</h3>
              <p className="text-[var(--primary)] mb-2">Co-Founder & CEO</p>
              <p className="text-gray-600">Outdoor enthusiast with 15+ years in product development</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=200&width=200" alt="Sarah Chen" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Sarah Chen</h3>
              <p className="text-[var(--primary)] mb-2">Co-Founder & CTO</p>
              <p className="text-gray-600">Materials scientist specializing in thermal insulation</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="David Rodriguez"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">David Rodriguez</h3>
              <p className="text-[var(--primary)] mb-2">Head of Design</p>
              <p className="text-gray-600">Award-winning industrial designer and avid camper</p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=200&width=200" alt="Emma Wilson" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Emma Wilson</h3>
              <p className="text-[var(--primary)] mb-2">Sustainability Director</p>
              <p className="text-gray-600">Environmental scientist focused on eco-friendly manufacturing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--primary)]">
        <div className="container">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Arctic Chill Community</h2>
            <p className="text-lg mb-8">
              Follow us on social media for the latest product updates, outdoor tips, and customer stories.
            </p>
            <Link href="/contact" className="btn btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
