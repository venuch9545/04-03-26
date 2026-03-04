"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2, Truck, HeartHandshake, Scale, Clock, BadgeCheck } from "lucide-react"

const reasons = [
  {
    icon: BadgeCheck,
    title: "Premium Quality",
    description: "We source only the finest granite from trusted quarries with rigorous quality control at every step.",
  },
  {
    icon: Scale,
    title: "Competitive Pricing",
    description: "Direct quarry relationships allow us to offer the best prices without compromising on quality.",
  },
  {
    icon: Truck,
    title: "Global Shipping",
    description: "Expert logistics management ensuring safe delivery to any port worldwide.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We understand deadlines matter. Our efficient processes ensure on-time delivery every time.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description: "Personal attention from inquiry to delivery with 24/7 communication availability.",
  },
  {
    icon: CheckCircle2,
    title: "Custom Solutions",
    description: "Flexible sizing, finishing options, and packaging tailored to your specific requirements.",
  },
]

const stats = [
  { value: "4+", label: "Years as Quality Manager" },
  { value: "5+", label: "Years Own Business" },
  { value: "4", label: "Global Markets" },
  { value: "100%", label: "Quality Focus" },
]

const exportRegions = [
  "USA",
  "UAE",
  "Europe",
  "Middle East"
]

export function WhyUs() {
  const [isVisible, setIsVisible] = useState(false)
  const [countersStarted, setCountersStarted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setCountersStarted(true), 500)
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
      id="why-us"
      ref={sectionRef}
      className="py-28 bg-[#F0F4F8] relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="inline-block text-[#2563EB] font-medium mb-4 tracking-widest uppercase text-xs">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1E3A5F] mb-5 text-balance leading-tight">
            Your Trusted Partner in
            <span className="block text-[#2563EB]">Granite Export</span>
          </h2>
          <p className="text-[#64748B] leading-relaxed">
            We combine industry expertise with personalized service to deliver exceptional value to our clients.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`p-6 bg-white rounded-lg border border-[#E2E8F0] hover:border-[#2563EB]/50 hover:shadow-lg transition-all duration-500 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F0F4F8] rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#1E3A5F] transition-all duration-300">
                  <reason.icon className="w-5 h-5 text-[#1E3A5F] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">{reason.title}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`bg-[#1E3A5F] rounded-2xl p-10 md:p-14 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-white/10">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div
                  className={`text-4xl md:text-5xl font-serif font-bold text-[#60A5FA] mb-2 transition-all duration-1000 ${
                    countersStarted ? "opacity-100 scale-100" : "opacity-0 scale-50"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Export Regions */}
          <div className="text-center">
            <h3 className="text-white/50 text-sm uppercase tracking-widest font-medium mb-6">Exporting To</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {exportRegions.map((region, index) => (
                <div
                  key={region}
                  className={`px-6 py-3 bg-[#2563EB]/30 border border-[#60A5FA]/50 rounded-lg transition-all duration-1000 ${
                    countersStarted ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                  style={{ transitionDelay: `${600 + index * 150}ms` }}
                >
                  <span className="text-[#60A5FA] font-semibold">{region}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
