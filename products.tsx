"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    name: "Black Galaxy",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/black%20galaxy.png-PYpjdzG1v8nx4MCceeSMXCXkXmaAkQ.jpeg",
    description: "A stunning black granite with golden copper flecks that shimmer like stars in the night sky. Perfect for luxury kitchens and fireplaces.",
    features: ["Golden Speckles", "High Durability", "Polished Finish"],
    origin: "Andhra Pradesh, India",
  },
  {
    name: "Steel Gray",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/steel%20grey.png-jqT2jBWw6yzVgM0ad8SW944bKbfC2N.jpeg",
    description: "Elegant gray granite with subtle dark veining, perfect for modern architectural applications and sophisticated interiors.",
    features: ["Uniform Texture", "Versatile Use", "Premium Quality"],
    origin: "Andhra Pradesh, India",
  },
  {
    name: "Black Pearl",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/black%20pearl.png-SZyPZgv6KQXuwi3gdylFIj5MSuWYci.jpeg",
    description: "Deep black surface with silver-gray speckles creating a sophisticated pearlescent effect. Ideal for luxury residential and commercial projects.",
    features: ["Pearlescent Shine", "Scratch Resistant", "Easy Maintenance"],
    origin: "Andhra Pradesh, India",
  },
  {
    name: "Absolute Black",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kanigiri%20black-3GbLJSOvNaRHxQ5ZLXgMw9a7cvgSwd.jpg",
    description: "Premium uniform black granite known for its consistent color and exceptional durability. A classic choice for premium applications.",
    features: ["Consistent Color", "Dense Structure", "Classic Appeal"],
    origin: "Prakasam District, India",
  },
]

export function Products() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-28 bg-[#0B1929] relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="inline-flex items-center gap-2 text-[#60A5FA] font-medium mb-4 tracking-widest uppercase text-xs">
            <Sparkles className="w-4 h-4" />
            Our Collection
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-5 text-balance leading-tight">
            Premium Granite Selection
          </h2>
          <p className="text-white/60 leading-relaxed">
            Discover our curated collection of India&apos;s finest granite varieties, sourced directly from the best quarries.
          </p>
        </div>

        {/* Products Grid - One by One */}
        <div className="space-y-20">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={`group transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}>
                {/* Image - Large */}
                <div className={`relative h-96 rounded-2xl overflow-hidden border-2 border-[#1E3A5F] group-hover:border-[#2563EB] transition-all duration-700 ease-out group-hover:shadow-2xl ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  
                  {/* Origin Badge */}
                  <div className="absolute top-6 left-6 bg-[#2563EB] text-white text-sm font-semibold px-4 py-2 rounded-lg">
                    {product.origin}
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="inline-flex items-center gap-2 text-[#60A5FA] font-medium mb-4 tracking-widest uppercase text-xs">
                    <Sparkles className="w-4 h-4" />
                    {`Product ${index + 1}`}
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-5 group-hover:text-[#60A5FA] transition-colors duration-300 ease-out">
                    {product.name}
                  </h3>
                  
                  <p className="text-white/60 text-lg mb-8 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-white/40 text-sm uppercase tracking-widest font-medium mb-4">Key Features</h4>
                    <div className="space-y-3">
                      {product.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-[#60A5FA] rounded-full" />
                          <span className="text-white/70">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button asChild size="lg" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium group/btn">
                    <a href="#contact">
                      Request Quote
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-white/50 mb-6">
            Looking for custom specifications? We can source any Indian granite variety to meet your requirements.
          </p>
          <Button asChild size="lg" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium px-8">
            <a href="#contact">
              Discuss Your Requirements
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
