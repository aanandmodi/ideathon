import type { Metadata } from "next"
import { Inter, Orbitron } from "next/font/google"
import "./globals.css"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FallingParticlesMulticolor from "@/components/falling-particles-multicolor"
import BackToTop from "@/components/back-to-top"
import ScrollToTop from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" })

export const metadata: Metadata = {
  title: "Ecell Ignite Ideathon 2025",
  description: "Transform Ideas Into Reality - Join the most exciting ideathon of 2025",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Use .ico favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className} ${orbitron.variable}`}>
        <div className="min-h-screen bg-dark-navy relative overflow-hidden">
          <FallingParticlesMulticolor />
          <ScrollToTop />
          <Navbar />
          <main className="relative z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-0">
              {children}
            </div>
          </main>
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  )
}
