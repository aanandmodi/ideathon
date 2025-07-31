"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gradient mb-4">404</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-300 mb-8">
            Oops! The page you're looking for seems to have wandered off into the digital void. Don't worry, even the
            best innovations sometimes take unexpected paths.
          </p>
        </div>

        <div className="glass-effect p-8 rounded-2xl mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">What happened?</h3>
          <p className="text-gray-300 mb-6">
            The page you requested might have been moved, deleted, or you might have typed the wrong URL. It happens to
            the best of us!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white hover-glow"
            >
              <Link href="/">
                <Home className="mr-2" size={20} />
                Go Home
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover-glow bg-transparent"
              onClick={() => window.history.back()}
            >
              <button>
                <ArrowLeft className="mr-2" size={20} />
                Go Back
              </button>
            </Button>
          </div>
        </div>

        <div className="text-gray-400">
          <p>
            Need help?{" "}
            <Link href="/contact" className="text-purple-400 hover:text-purple-300 underline">
              Contact our team
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
