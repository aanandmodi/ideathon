"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Zap, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Challenges", href: "/events" },
  { name: "Timeline", href: "/timeline" },
  { name: "Prizes", href: "/prizes" },
  { name: "Glimpse", href: "/glimpses" },
  { name: "Speakers & Sponsors", href: "/speakers-sponsors" },
]

const aboutDropdownItems = [
  { name: "About Page", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Contact Us", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setScrolled(window.scrollY > 20)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <div
        className={`navbar-modern px-6 py-3 transition-all duration-300 ${
          scrolled ? "scale-95" : "scale-100"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
  <div className="w-10 h-10 rounded-xl overflow-hidden">
    <img
      src="/logo.png"
      alt="E-Cell Ignite Logo"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="block">
    <span className="text-white font-bold text-lg">Ecell Ignite</span>
    <div className="text-xs text-muted">Ideathon 2025</div>
  </div>
</Link>




          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  pathname === item.href
                    ? "text-white bg-white/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* About Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all"
              >
                About Us <ChevronDown size={16} />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full mt-2 w-48 bg-white/10 backdrop-blur border border-white/10 text-white rounded-xl overflow-hidden shadow-lg transition-all duration-300">
                  {aboutDropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm hover:bg-white/5 transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Register Button */}
            <Link
              href="/register"
              className="ml-2 relative group inline-block overflow-hidden rounded-full px-5 py-2 text-sm font-semibold text-white bg-gradient-to-br from-purple-600 to-blue-500 to-orange-500 shadow-md transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="relative z-10">Register Now</span>
              <span className="absolute -inset-1 before:content-[''] before:absolute before:inset-0 before:bg-white/40 before:transform before:-translate-x-full group-hover:before:translate-x-full before:rotate-45 before:transition-transform before:duration-700 before:blur-sm z-0"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden ml-2">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-white hover:text-primary transition-colors p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-white/10">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 text-center ${
                    pathname === item.href
                      ? "text-white bg-white/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {aboutDropdownItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 text-center ${
                    pathname === item.href
                      ? "text-white bg-white/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
