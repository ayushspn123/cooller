import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer>
      <div className="gradient-bg py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-1">
              <h3 className="text-2xl font-bold mb-6 text-white">Arctic Chill</h3>
              <p className="mb-6 text-gray-200">Premium coolers designed for outdoor enthusiasts and adventurers.</p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-span-1">
              <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-200 hover:text-white transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-[var(--accent-orange)] rounded-full mr-2"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-gray-200 hover:text-white transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-[var(--accent-orange)] rounded-full mr-2"></span>
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-200 hover:text-white transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-[var(--accent-orange)] rounded-full mr-2"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-200 hover:text-white transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-[var(--accent-orange)] rounded-full mr-2"></span>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div className="col-span-1">
              <h3 className="text-xl font-bold mb-6 text-white">Products</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/products" className="text-gray-200 hover:text-white transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-[var(--accent-orange)] rounded-full mr-2"></span>
                    Camping Coolers
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-gray-200 hover:text-white transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-[var(--accent-orange)] rounded-full mr-2"></span>
                    Electric Coolers
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-gray-200 hover:text-white transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-[var(--accent-orange)] rounded-full mr-2"></span>
                    Portable Ice Chests
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-gray-200 hover:text-white transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-[var(--accent-orange)] rounded-full mr-2"></span>
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-span-1">
              <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 text-gray-200">
                  <MapPin size={20} className="flex-shrink-0 mt-1 text-[var(--accent-orange)]" />
                  <span>Ghukna,Ghaziabad,Uttar Pradesh ,201009</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-200">
                  <Phone size={20} className="flex-shrink-0 text-[var(--accent-orange)]" />
                  <span>+91 8047673894</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-200">
                  <Mail size={20} className="flex-shrink-0 text-[var(--accent-orange)]" />
                  <span>info.sakshienterprises@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[var(--dark)] py-6 text-center text-gray-400">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Sakshi Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
