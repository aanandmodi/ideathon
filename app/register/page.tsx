"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  Clock,
  Users,
  Award,
  AlertCircle,
  ArrowRight,
} from "lucide-react"
import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"

const registrationBenefits = [
  "Access to 48-hour intensive ideathon",
  "Mentorship from industry experts",
  "Networking with 500+ participants",
  "Chance to win ₹2.5L+ in prizes",
  "Certificate of participation",
  "Access to exclusive workshops",
  "Post-event incubation support",
  "Alumni network access",
]

const guidelines = [
  {
    title: "Team Formation",
    description:
      "Teams of 2-4 members are allowed. You can register individually and form teams during the networking session.",
  },
  {
    title: "Eligibility",
    description:
      "Open to all students from any discipline. No prior experience required, just bring your creativity and passion.",
  },
  {
    title: "Platform",
    description:
      "The event will be conducted at Silver Oak University campus. All registered participants will receive detailed venue information.",
  },
  {
    title: "Submission",
    description:
      "Teams must submit their pitch deck and prototype/demo by the specified deadline during the event.",
  },
]

export default function RegisterPage() {
  const [showButton, setShowButton] = useState(false)
  useEffect(() => {
    setTimeout(() => setShowButton(true), 100)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container-max px-2 sm:px-4 md:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="heading-xl">
              Register <span className="text-gradient">Now</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Secure your spot in the most exciting ideathon of 2025. Transform your ideas into reality and compete for
              amazing prizes!
            </p>

            {/* Registration Alert */}
            <div className="glass-effect p-6 rounded-xl mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2 text-yellow-300 mb-2">
                <AlertCircle size={20} />
                <span className="font-semibold">Registration Deadline</span>
              </div>
              <p className="text-white">August 25, 2025 - Don't miss out!</p>
            </div>
          </div>

          {/* Registration Button (Moved here) */}
          <div className="text-center mb-16">
            <a
              href="https://forms.gle/mSmTMG3FxiLDN29s5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button
                className="relative flex items-center justify-center gap-4 px-12 py-5 text-2xl font-bold rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white shadow-lg transition-all duration-300 focus:outline-none overflow-hidden group hover:-translate-y-1 hover:shadow-cyan-400/40 will-change-transform"
                style={{ minWidth: 260 }}
              >
                <span className="relative z-10">Register Now</span>
                <ArrowRight
                  size={28}
                  className="relative z-10 transition-transform duration-500 group-hover:translate-x-8 will-change-transform"
                  aria-hidden="true"
                />
              </button>
            </a>
          </div>

          {/* Event Details */}
          <div className="glass-effect p-12 rounded-3xl mb-12">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Event <span className="text-gradient">Details</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Detail icon={<Calendar size={24} />} title="Date" desc="August 28-29, 2025" />
              <Detail icon={<Clock size={24} />} title="Duration" desc="48 Hours" />
              <Detail icon={<Users size={24} />} title="Team Size" desc="1-5 Members" />
              <Detail icon={<Award size={24} />} title="Prize Pool" desc="₹2.5L+" />
            </div>
          </div>

          {/* FAQ Section */}
          <div className="glass-effect p-12 rounded-3xl">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <div className="space-y-6">
              <FAQ question="Is there a registration fee?" answer="No, the event is completely free to participate in." />
              <FAQ question="Can I participate alone?" answer="Yes, you can register individually and form teams during the networking session." />
              <FAQ question="What if I don't have a technical background?" answer="No problem! We welcome participants from all backgrounds. Diverse teams often create the best solutions." />
              <FAQ question="Will I receive a certificate?" answer="Yes, all participants will receive a certificate of participation." />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function Detail({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white">
        {icon}
      </div>
      <div>
        <h3 className="text-white font-semibold">{title}</h3>
        <p className="text-gray-300">{desc}</p>
      </div>
    </div>
  )
}

function FAQ({ question, answer }: { question: string, answer: string }) {
  return (
    <div>
      <h3 className="text-xl font-bold text-white mb-2">{question}</h3>
      <p className="text-gray-300">{answer}</p>
    </div>
  )
}
