import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative z-10 glass-effect mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
             
              <span className="text-white font-bold text-xl flex items-center gap-2">
                <img
                  src="/logo.png"
                  alt="E-Cell Ignite Logo"
                  className="h-10 w-10 rounded-xl object-cover inline-block"
                />
                Ecell Ignite
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering innovation and entrepreneurship through the Ideathon 2025. Join us in shaping the future of
              technology and business.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/IgniteForStartups" className="text-gray-300 hover:text-purple-400 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="https://www.instagram.com/igniteforstartups" className="text-gray-300 hover:text-purple-400 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="http://www.linkedin.com/company/iicws" className="text-gray-300 hover:text-purple-400 transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="https://www.twitter.com/ignite4startups" className="text-gray-300 hover:text-purple-400 transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-purple-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/timeline" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Timeline
                </Link>
              </li>
              <li>
                <Link href="/prizes" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Prizes
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Team
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-gray-300">© 2025 Ecell Ignite. All rights reserved. Made with ❤️ for innovation.</p>
        </div>
      </div>
    </footer>
  )
}
