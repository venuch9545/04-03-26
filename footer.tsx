"use client"

import Link from "next/link"
import { Phone, Mail, Globe, MessageCircle, ArrowUp } from "lucide-react"

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#contact", label: "Contact" },
]

const products = [
  "Black Galaxy",
  "Steel Gray",
  "Black Pearl",
  "Kanigiri Black",
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#071320] text-white relative">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#1E3A5F] rounded flex items-center justify-center">
                <span className="text-white font-serif font-bold text-xl">S</span>
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-white">South Stone</span>
                <span className="block text-xs uppercase tracking-[0.2em] text-[#60A5FA]">Exports</span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Premium Indian granite exporters with 9+ years of combined experience. Delivering quality stone products to clients worldwide.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/919014409545"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1E3A5F] rounded-lg flex items-center justify-center hover:bg-[#2563EB] transition-all duration-300 ease-out hover:scale-110 hover:shadow-lg"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="tel:+919014409545"
                className="w-10 h-10 bg-[#1E3A5F] rounded-lg flex items-center justify-center hover:bg-[#2563EB] transition-all duration-300 ease-out hover:scale-110 hover:shadow-lg"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@southstoneexports.in"
                className="w-10 h-10 bg-[#1E3A5F] rounded-lg flex items-center justify-center hover:bg-[#2563EB] transition-all duration-300 ease-out hover:scale-110 hover:shadow-lg"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-[#60A5FA] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-white mb-6">Our Products</h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <Link
                    href="#products"
                    className="text-white/50 hover:text-[#60A5FA] transition-colors text-sm"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#60A5FA] mt-1 shrink-0" />
                <div>
                  <div className="text-white/40 text-xs">Phone / WhatsApp</div>
                  <a href="tel:+919014409545" className="text-white text-sm hover:text-[#60A5FA] transition-colors">
                    +91 9014409545
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#60A5FA] mt-1 shrink-0" />
                <div>
                  <div className="text-white/40 text-xs">Email</div>
                  <a href="mailto:info@southstoneexports.in" className="text-white text-sm hover:text-[#60A5FA] transition-colors">
                    info@southstoneexports.in
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-4 h-4 text-[#60A5FA] mt-1 shrink-0" />
                <div>
                  <div className="text-white/40 text-xs">Website</div>
                  <a href="https://www.southstoneexports.in" target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-[#60A5FA] transition-colors">
                    www.southstoneexports.in
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1E3A5F]">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-sm text-center md:text-left">
              {new Date().getFullYear()} South Stone Exports. All rights reserved.
            </p>
            <p className="text-white/30 text-sm">
              Proprietor: <span className="text-white/50">Venu Challa</span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-[#1E3A5F] rounded-full flex items-center justify-center hover:bg-[#2563EB] transition-all duration-300 ease-out shadow-lg hover:shadow-2xl hover:scale-125"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
    </footer>
  )
}
