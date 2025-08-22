"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Users, Trophy, Lightbulb, Target, Rocket } from "lucide-react"

function pad(num: number) {
  return num.toString().padStart(2, "0")
}

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

      const days = Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24)))
      const hours = Math.max(0, Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
      const minutes = Math.max(0, Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)))
      const seconds = Math.max(0, Math.floor((difference % (1000 * 60)) / 1000))

      setTimeLeft({ days, hours, minutes, seconds })

      if (difference < 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <header className="section-padding pt-40 md:pt-32" aria-label="Hero">
        <div className="container-max px-2 sm:px-4 md:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <div className="mb-12">
              <h1 className="ideathon-title text-5xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-white mb-4">
                IDEATHON 4.0
              </h1>
            </div>
            <p className="hero-subtitle text-gray-300 max-w-3xl mx-auto mb-12 text-xl leading-relaxed">
              Think bold, act together
            </p>

            {/* Redesigned Countdown */}
            <nav className="countdown-modern max-w-5xl mx-auto mb-12" aria-label="Countdown to event">
              <h2 className="text-white text-2xl font-bold mb-8 text-center">Event Starts In</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Days", value: pad(timeLeft.days) },
                  { label: "Hours", value: pad(timeLeft.hours) },
                  { label: "Minutes", value: pad(timeLeft.minutes) },
                  { label: "Seconds", value: pad(timeLeft.seconds) },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="countdown-item p-8 text-center"
                    aria-label={item.label}
                  >
                    <div className="countdown-number mb-3 text-5xl font-mono font-bold animate-pulse">
                      {item.value}
                    </div>
                    <div className="text-gray-300 text-lg font-semibold uppercase tracking-wider">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </nav>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                asChild
                size="lg"
                className="btn-register btn-register-pulse text-white px-12 py-6 rounded-full text-xl font-bold shadow-lg"
              >
                <Link href="/register" className="flex items-center" aria-label="Register Now">
                  Register Now <ArrowRight className="ml-3" size={24} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="btn-hover-modern btn-accent text-white px-12 py-6 rounded-full text-xl font-semibold"
              >
                <Link href="/about" aria-label="Learn More about Ideathon 4.0">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="section-padding" aria-label="Features">
        <div className="container-max px-2 sm:px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-3xl md:text-4xl font-bold">
              Why Join <span className="text-gradient">Ideathon 4.0</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Experience innovation like never before with industry mentors, amazing prizes, and networking
              opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Trophy className="text-blue-400" size={24} />}
              bg="bg-blue-500/20"
              title="₹2.5L Prize Pool"
              desc="Compete for amazing cash prizes and recognition. Winners get funding opportunities and mentorship."
            />
            <FeatureCard
              icon={<Users className="text-purple-400" size={24} />}
              bg="bg-purple-500/20"
              title="Expert Mentorship"
              desc="Get guidance from industry leaders and successful entrepreneurs throughout the event."
            />
            <FeatureCard
              icon={<Rocket className="text-cyan-400" size={24} />}
              bg="bg-cyan-500/20"
              title="Startup Opportunities"
              desc="Turn your ideas into reality with incubation support and investor connections."
            />
            <FeatureCard
              icon={<Target className="text-green-400" size={24} />}
              bg="bg-green-500/20"
              title="Real-World Impact"
              desc="Work on problems that matter and create solutions with genuine social impact."
            />
            <FeatureCard
              icon={<Lightbulb className="text-orange-400" size={24} />}
              bg="bg-orange-500/20"
              title="Innovation Focus"
              desc="Push boundaries with cutting-edge technology and creative problem-solving approaches."
            />
            <FeatureCard
              icon={<Calendar className="text-pink-400" size={24} />}
              bg="bg-pink-500/20"
              title="48-Hour Challenge"
              desc="Intensive innovation sprint designed to maximize creativity and collaboration."
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding" aria-label="Event Highlights">
        <div className="container-max px-2 sm:px-4 md:px-8">
          <div className="glass-effect p-6 sm:p-10 md:p-12 rounded-3xl">
            <div className="text-center mb-12">
              <h2 className="heading-lg text-3xl md:text-4xl font-bold">
                Event <span className="text-gradient">Highlights</span>
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              <StatCard value="300+" label="Participants" />
              <StatCard value="48" label="Hours" />
              <StatCard value="₹2.5L" label="Prize Pool" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function FeatureCard({
  icon,
  bg,
  title,
  desc,
}: {
  icon: React.ReactNode
  bg: string
  title: string
  desc: string
}) {
  return (
    <div className="feature-card p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition">
      <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-gray-400">{desc}</p>
    </div>
  )
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="w-1/2 md:w-1/4 text-center space-y-2">
      <div className="text-4xl font-bold text-gradient">{value}</div>
      <div className="text-gray-400">{label}</div>
    </div>
  )
}
