"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Globe, Shield, Users } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Global Exports",
    description: "Shipping premium granite to customers across 50+ countries worldwide.",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Every slab undergoes rigorous quality checks before export.",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description: "4 years as Quality Manager + 5 years running our own export business.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Dedicated support from inquiry to delivery, ensuring satisfaction.",
  },
]

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-28 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <span className="inline-block text-[#2563EB] font-medium mb-4 tracking-widest uppercase text-xs">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1E3A5F] mb-8 leading-tight">
              Crafting Excellence in
              <span className="block text-[#2563EB]">Natural Stone</span>
            </h2>
            <div className="space-y-5 text-[#64748B] leading-relaxed">
              <p>
                <strong className="text-[#1E3A5F]">South Stone Exports</strong> is a trusted name in the granite export industry, 
                led by proprietor <strong className="text-[#1E3A5F]">Venu Challa</strong>. With 4 years of experience as a Quality Checking Manager 
                and 5 years running our own export business, we bring unmatched expertise in sourcing and delivering the finest Indian granite to clients worldwide.
              </p>
              <p>
                Our commitment to quality is unwavering. We personally oversee every step of the process—from quarry selection 
                to final packaging—ensuring that each piece of granite meets the highest international standards.
              </p>
              <p>
                Based in the heart of India&apos;s granite belt, we have direct access to premium varieties including 
                the renowned Black Galaxy, elegant Steel Gray, luxurious Black Pearl, and classic Kanigiri Black.
              </p>
            </div>

            {/* Proprietor Info */}
            <div className="mt-10 flex items-center gap-5 p-5 bg-[#F0F4F8] rounded-lg border border-[#E2E8F0]">
              <div className="w-16 h-16 bg-[#1E3A5F] rounded-full flex items-center justify-center">
                <span className="text-xl font-serif font-bold text-white">VC</span>
              </div>
              <div>
                <div className="font-semibold text-[#1E3A5F] text-lg">Venu Challa</div>
                <div className="text-sm text-[#64748B]">Proprietor, South Stone Exports</div>
                <div className="text-xs text-[#2563EB] mt-1">4 Years Quality Manager + 5 Years Business Owner</div>
              </div>
            </div>
          </div>

          {/* Right Column - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`p-6 bg-white rounded-lg border border-[#E2E8F0] hover:border-[#2563EB]/50 hover:shadow-lg transition-all duration-500 group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-12 h-12 bg-[#F0F4F8] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#1E3A5F] transition-all duration-300">
                  <feature.icon className="w-5 h-5 text-[#1E3A5F] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
