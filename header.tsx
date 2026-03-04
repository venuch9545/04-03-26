"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#products", label: "Products" },
    { href: "#why-us", label: "Why Us" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out",
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg py-3 border-b border-[#2563EB]/10"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1E3A5F] rounded flex items-center justify-center transform group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 ease-out shadow-md">
                <span className="text-white font-serif font-bold text-lg md:text-xl">S</span>
              </div>
            </div>
            <div>
              <span className={cn(
                "font-serif text-lg md:text-xl font-bold tracking-tight transition-colors duration-300",
                isScrolled ? "text-[#1E3A5F]" : "text-white"
              )}>
                South Stone
              </span>
              <span className={cn(
                "block text-[10px] md:text-xs uppercase tracking-[0.2em] transition-colors duration-300",
                isScrolled ? "text-[#2563EB]" : "text-[#60A5FA]"
              )}>
                Exports
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors duration-300 ease-out group",
                  isScrolled ? "text-[#1E3A5F] hover:text-[#2563EB]" : "text-white/90 hover:text-white"
                )}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2563EB] transition-all duration-400 ease-out group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919014409545"
              className={cn(
                "flex items-center gap-2 text-sm transition-colors duration-300",
                isScrolled ? "text-[#1E3A5F]" : "text-white/90"
              )}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+91 9014409545</span>
            </a>
            <Button asChild className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium">
              <a href="#contact">Get Quote</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              isScrolled ? "text-[#1E3A5F]" : "text-white"
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-500 ease-in-out",
            isMobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          )}
        >
          <nav className="bg-white rounded-lg p-4 shadow-xl space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-4 text-[#1E3A5F] hover:bg-[#F0F4F8] rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-[#E2E8F0] space-y-3">
              <a
                href="tel:+919014409545"
                className="flex items-center gap-3 py-2 px-4 text-[#1E3A5F]"
              >
                <Phone className="w-4 h-4 text-[#2563EB]" />
                +91 9014409545
              </a>
              <a
                href="mailto:info@southstoneexports.in"
                className="flex items-center gap-3 py-2 px-4 text-[#1E3A5F]"
              >
                <Mail className="w-4 h-4 text-[#2563EB]" />
                info@southstoneexports.in
              </a>
              <Button asChild className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
                <a href="#contact">Get Quote</a>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
