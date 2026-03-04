"use client"

import React from "react"
import { useEffect, useRef, useState } from "react"
import { Phone, Mail, Globe, MapPin, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9014409545",
    href: "tel:+919014409545",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 9014409545",
    href: "https://wa.me/919014409545",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@southstoneexports.in",
    href: "mailto:info@southstoneexports.in",
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.southstoneexports.in",
    href: "https://www.southstoneexports.in",
  },
]

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Hello South Stone Exports!%0A%0AName: ${formState.name}%0AEmail: ${formState.email}%0APhone: ${formState.phone}%0A%0AMessage: ${formState.message}`
    window.open(`https://wa.me/919014409545?text=${message}`, "_blank")
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-28 bg-[#0B1929] relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="inline-block text-[#60A5FA] font-medium mb-4 tracking-widest uppercase text-xs">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-5 text-balance leading-tight">
            Let&apos;s Discuss Your
            <span className="block text-[#60A5FA]">Requirements</span>
          </h2>
          <p className="text-white/60 leading-relaxed">
            Ready to source premium Indian granite? Contact us today for competitive quotes and personalized service.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="bg-[#0F2337] rounded-2xl p-8 border border-[#1E3A5F] h-full">
              <h3 className="text-2xl font-serif font-bold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-4 mb-10">
                {contactInfo.map((item) => (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 rounded-xl border border-[#1E3A5F] hover:border-[#2563EB] bg-[#0F2337] hover:bg-[#1E3A5F]/50 transition-all duration-500 ease-out group hover:shadow-xl"
              >
                    <div className="w-12 h-12 bg-[#2563EB]/20 rounded-lg flex items-center justify-center group-hover:bg-[#2563EB] transition-colors">
                      <item.icon className="w-5 h-5 text-[#60A5FA] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-white/50 text-sm">{item.label}</div>
                      <div className="text-white font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Business Info */}
              <div className="pt-8 border-t border-[#1E3A5F]">
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#60A5FA]" />
                  Business Details
                </h4>
                <div className="text-white/50 space-y-3 text-sm">
                  <p><strong className="text-white">Company:</strong> South Stone Exports</p>
                  <p><strong className="text-white">Proprietor:</strong> Venu Challa</p>
                  <p><strong className="text-white">Focus:</strong> Quality Granite Export</p>
                  <p><strong className="text-white">Experience:</strong> 4 Years Quality Manager + 5 Years Business</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="bg-white rounded-2xl p-8 border border-[#E2E8F0]">
              <h3 className="text-2xl font-serif font-bold text-[#1E3A5F] mb-8">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#1E3A5F]">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      required
                      className="bg-[#F0F4F8] border-[#E2E8F0] focus:border-[#2563EB] focus:ring-[#2563EB]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#1E3A5F]">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      required
                      className="bg-[#F0F4F8] border-[#E2E8F0] focus:border-[#2563EB] focus:ring-[#2563EB]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#1E3A5F]">Phone Number</Label>
                  <Input
                    id="phone"
                    placeholder="+1 234 567 8900"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="bg-[#F0F4F8] border-[#E2E8F0] focus:border-[#2563EB] focus:ring-[#2563EB]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#1E3A5F]">Your Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your granite requirements..."
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                    className="bg-[#F0F4F8] border-[#E2E8F0] focus:border-[#2563EB] focus:ring-[#2563EB] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white group"
                >
                  Send via WhatsApp
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-center text-sm text-[#64748B]">
                  Or call us directly at{" "}
                  <a href="tel:+919014409545" className="text-[#2563EB] hover:underline font-medium">
                    +91 9014409545
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
