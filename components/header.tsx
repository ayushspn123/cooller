"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingCart } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-white py-4"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10">
              <Image
                src="/hero1.svg?height=40&width=40"
                alt="Arctic Chill Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-[var(--primary)] font-montserrat">Sakshi Enterprises</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link active">
              Home
            </Link>
            <Link href="/products" className="nav-link">
              Products
            </Link>
            <Link href="/about" className="nav-link">
              About Us
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-700 hover:text-[var(--primary)] transition-colors">
                <ShoppingCart size={22} />
                <span className="absolute -top-1 -right-1 bg-[var(--accent-orange)] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  0
                </span>
              </button>
              <Link href="/products" className="btn btn-primary">
                Shop Now
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button className="relative p-2 text-gray-700 hover:text-[var(--primary)] transition-colors">
              <ShoppingCart size={22} />
              <span className="absolute -top-1 -right-1 bg-[var(--accent-orange)] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </button>
            <button className="text-gray-700 focus:outline-none" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 mt-4 border-t border-gray-100 animate-fadeIn">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link href="/" className="block py-2 text-gray-700 hover:text-[var(--primary)]" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="block py-2 text-gray-700 hover:text-[var(--primary)]"
                  onClick={toggleMenu}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 text-gray-700 hover:text-[var(--primary)]"
                  onClick={toggleMenu}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 text-gray-700 hover:text-[var(--primary)]"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/products" className="block w-full btn btn-primary text-center" onClick={toggleMenu}>
                  Shop Now
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
