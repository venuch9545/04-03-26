"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.4}px)`
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div ref={parallaxRef} className="absolute inset-0 z-0">
        <Image
          src="/images/hero-granite.jpg"
          alt="Premium Indian Granite"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1929]/95 via-[#1E3A5F]/85 to-[#1E3A5F]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1929]/70 to-transparent" />
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 z-10 opacity-10 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-[#60A5FA]/30 bg-[#2563EB]/20 backdrop-blur-sm rounded-full px-5 py-2.5 mb-8 animate-fade-in-up">
            <span className="w-1.5 h-1.5 bg-[#60A5FA] rounded-full" />
            <span className="text-[#60A5FA] text-sm font-medium tracking-wide">9+ Years Combined Experience</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6 animate-fade-in-up animation-delay-200">
            Premium Indian
            <span className="block text-[#60A5FA] mt-2">Granite Exports</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed animate-fade-in-up animation-delay-400">
            Delivering exceptional quality Black Galaxy, Steel Gray, Black Pearl & Kanigiri Black granite to discerning clients worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
            <Button
              asChild
              size="lg"
              className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium group px-8"
            >
              <a href="#products">
                Explore Products
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent"
            >
              <a href="#about">
                <Play className="mr-2 w-4 h-4" />
                Our Story
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20 pt-10 border-t border-white/10 animate-fade-in-up animation-delay-800">
            <div>
              <div className="text-3xl md:text-4xl font-serif font-bold text-white mb-1">9+</div>
              <div className="text-white/50 text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-serif font-bold text-[#60A5FA] mb-1">Global</div>
              <div className="text-white/50 text-sm">Export Markets</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-serif font-bold text-white mb-1">100%</div>
              <div className="text-white/50 text-sm">Quality Focus</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#60A5FA] rounded-full mt-2 animate-scroll-down" />
        </div>
      </div>
    </section>
  )
}
