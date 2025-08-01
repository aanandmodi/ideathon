"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Users, Trophy, Lightbulb, Target, Rocket } from "lucide-react"

export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2025-08-29T09:30:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })

      if (difference < 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding pt-40 md:pt-32">
        <div className="container-max px-2 sm:px-4 md:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <div className="mb-8">
              <span className="inline-block px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-lg font-medium mb-8">
                🚀 Innovation Awaits - Join the Revolution
              </span>
            </div>

            {/* Fixed Ideathon 4.0 Title with Space */}
            <div className="mb-12">
              <h1 className="ideathon-title leading-[1.6rem]"></h1>
              <div className="ideathon-title text-8xl md:text-9xl mt-4">IDEATHON 4.0</div>
            </div>

            <p className="hero-subtitle text-gray-300 max-w-3xl mx-auto mb-12 text-xl leading-relaxed">
            Think bold, act together
            </p>

            {/* Redesigned Countdown */}
            <div className="countdown-modern max-w-5xl mx-auto mb-12">
              <h3 className="text-white text-2xl font-bold mb-8 text-center">Event Starts In</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="countdown-item p-8 text-center">
                  <div className="countdown-number mb-3">{timeLeft.days}</div>
                  <div className="text-gray-300 text-lg font-semibold uppercase tracking-wider">Days</div>
                </div>
                <div className="countdown-item p-8 text-center">
                  <div className="countdown-number mb-3">{timeLeft.hours}</div>
                  <div className="text-gray-300 text-lg font-semibold uppercase tracking-wider">Hours</div>
                </div>
                <div className="countdown-item p-8 text-center">
                  <div className="countdown-number mb-3">{timeLeft.minutes}</div>
                  <div className="text-gray-300 text-lg font-semibold uppercase tracking-wider">Minutes</div>
                </div>
                <div className="countdown-item p-8 text-center">
                  <div className="countdown-number mb-3">{timeLeft.seconds}</div>
                  <div className="text-gray-300 text-lg font-semibold uppercase tracking-wider">Seconds</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                asChild
                size="lg"
                className="btn-register btn-register-pulse text-white px-12 py-6 rounded-full text-xl font-bold"
              >
                <Link href="/register" className="flex items-center">
                  Register Now <ArrowRight className="ml-3" size={24} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="btn-hover-modern btn-accent text-white px-12 py-6 rounded-full text-xl font-semibold"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-max px-2 sm:px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg">
              Why Join <span className="text-gradient">Ideathon 4.0</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Experience innovation like never before with industry mentors, amazing prizes, and networking
              opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card p-8">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <Trophy className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">₹2.5L Prize Pool</h3>
              <p className="text-gray-400">
                Compete for amazing cash prizes and recognition. Winners get funding opportunities and mentorship.
              </p>
            </div>

            <div className="feature-card p-8">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <Users className="text-purple-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Expert Mentorship</h3>
              <p className="text-gray-400">
                Get guidance from industry leaders and successful entrepreneurs throughout the event.
              </p>
            </div>

            <div className="feature-card p-8">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Startup Opportunities</h3>
              <p className="text-gray-400">
                Turn your ideas into reality with incubation support and investor connections.
              </p>
            </div>

            <div className="feature-card p-8">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="text-green-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Real-World Impact</h3>
              <p className="text-gray-400">
                Work on problems that matter and create solutions with genuine social impact.
              </p>
            </div>

            <div className="feature-card p-8">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="text-orange-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Innovation Focus</h3>
              <p className="text-gray-400">
                Push boundaries with cutting-edge technology and creative problem-solving approaches.
              </p>
            </div>

            <div className="feature-card p-8">
              <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6">
                <Calendar className="text-pink-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">48-Hour Challenge</h3>
              <p className="text-gray-400">
                Intensive innovation sprint designed to maximize creativity and collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

              {/* Stats Section */}
         <section className="section-padding">
          <div className="container-max px-2 sm:px-4 md:px-8">
            <div className="glass-effect p-6 sm:p-10 md:p-12 rounded-3xl">
              <div className="text-center mb-12">
                <h2 className="heading-lg">
                  Event <span className="text-gradient">Highlights</span>
                </h2>
              </div>

              <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                {/* Participants */}
                <div className="w-1/2 md:w-1/4 text-center space-y-2">
                  <div className="text-4xl font-bold text-gradient">300+</div>
                  <div className="text-gray-400">Participants</div>
                </div>

                {/* Hours */}
                <div className="w-1/2 md:w-1/4 text-center space-y-2">
                  <div className="text-4xl font-bold text-gradient">48</div>
                  <div className="text-gray-400">Hours</div>
                </div>

                {/* Prize Pool */}
                <div className="w-1/2 md:w-1/4 text-center space-y-2">
                  <div className="text-4xl font-bold text-gradient">₹2.5L</div>
                  <div className="text-gray-400">Prize Pool</div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}
