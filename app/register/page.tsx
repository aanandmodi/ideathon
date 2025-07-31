"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, Award, CheckCircle, AlertCircle, ArrowRight } from "lucide-react"
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
    description: "Teams must submit their pitch deck and prototype/demo by the specified deadline during the event.",
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

          {/* Event Details */}
          <div className="glass-effect p-12 rounded-3xl mb-12">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Event <span className="text-gradient">Details</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Calendar className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Date</h3>
                  <p className="text-gray-300">August 29-30, 2025</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Duration</h3>
                  <p className="text-gray-300">48 Hours</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Team Size</h3>
                  <p className="text-gray-300">2-4 Members</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Prize Pool</h3>
                  <p className="text-gray-300">₹2.5L+</p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Benefits */}
          <div className="glass-effect p-12 rounded-3xl mb-12">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              What You'll <span className="text-gradient">Get</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {registrationBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Button */}
          <div className="glass-effect p-12 rounded-3xl mb-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to <span className="text-gradient">Join</span>?
            </h2>
            <p className="text-gray-300 mb-8">
              Click the button below to register your team via Google Form.
            </p>
            <div className="flex justify-center">
              <a href="https://forms.gle/mSmTMG3FxiLDN29s5" target="_blank" rel="noopener noreferrer" className="w-full max-w-xs">
                <button
                  className="relative flex items-center justify-center gap-4 w-full px-10 py-4 text-2xl font-bold rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white shadow-lg transition-all duration-300 focus:outline-none overflow-hidden group hover:-translate-y-1 hover:shadow-cyan-400/40 will-change-transform"
                  style={{ minWidth: 200 }}
                >
                  <span className="relative z-10">Register Now</span>
                  <ArrowRight size={28} className="relative z-10 transition-transform duration-500 group-hover:translate-x-8 will-change-transform" aria-hidden="true" />
                </button>
              </a>
            </div>
          </div>

          {/* Guidelines */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Event <span className="text-gradient">Guidelines</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guidelines.map((guideline, index) => (
                <div key={index} className="glass-effect p-6 rounded-xl hover-glow">
                  <h3 className="text-xl font-bold text-white mb-3">{guideline.title}</h3>
                  <p className="text-gray-300">{guideline.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="glass-effect p-12 rounded-3xl">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Is there a registration fee?</h3>
                <p className="text-gray-300">No, the event is completely free to participate in.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Can I participate alone?</h3>
                <p className="text-gray-300">
                  Yes, you can register individually and form teams during the networking session.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">What if I don't have a technical background?</h3>
                <p className="text-gray-300">
                  No problem! We welcome participants from all backgrounds. Diverse teams often create the best
                  solutions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Will I receive a certificate?</h3>
                <p className="text-gray-300">Yes, all participants will receive a certificate of participation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function RegisterForm() {
  const [teamName, setTeamName] = useState("")
  const [leader, setLeader] = useState({ name: "", email: "", phone: "", college: "" })
  const [numMembers, setNumMembers] = useState(2)
  const [members, setMembers] = useState([
    { name: "", email: "" },
    { name: "", email: "" },
  ])
  const [agree, setAgree] = useState(false)
  const [loading, setLoading] = useState(false)

  // Adjust members array when numMembers changes
  function handleNumMembersChange(n: number) {
    setNumMembers(n)
    setMembers((prev) => {
      const arr = [...prev]
      while (arr.length < n) arr.push({ name: "", email: "" })
      while (arr.length > n) arr.pop()
      return arr
    })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!teamName || !leader.name || !leader.email || !leader.phone || !leader.college) {
      toast({ title: "All fields are required." })
      return
    }
    for (const m of members) {
      if (!m.name || !m.email) {
        toast({ title: "All member fields are required." })
        return
      }
    }
    if (!agree) {
      toast({ title: "You must agree to the terms." })
      return
    }
    setLoading(true)
    try {
      const res = await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ teamName, leader, members }),
      })
      if (res.ok) {
        toast({ title: "Registration successful!" })
        setTeamName("")
        setLeader({ name: "", email: "", phone: "", college: "" })
        setNumMembers(2)
        setMembers([
          { name: "", email: "" },
          { name: "", email: "" },
        ])
        setAgree(false)
      } else {
        const data = await res.json()
        toast({ title: data.error || "Registration failed." })
      }
    } catch {
      toast({ title: "Network error." })
    }
    setLoading(false)
  }

  return (
    <form className="space-y-6 max-w-xl mx-auto text-left" onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="teamName" className="text-white">Team Name</Label>
        <Input id="teamName" value={teamName} onChange={e => setTeamName(e.target.value)} required className="mt-1" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="leaderName" className="text-white">Leader Name</Label>
          <Input id="leaderName" value={leader.name} onChange={e => setLeader(l => ({ ...l, name: e.target.value }))} required className="mt-1" />
        </div>
        <div>
          <Label htmlFor="leaderEmail" className="text-white">Leader Email</Label>
          <Input id="leaderEmail" type="email" value={leader.email} onChange={e => setLeader(l => ({ ...l, email: e.target.value }))} required className="mt-1" />
        </div>
        <div>
          <Label htmlFor="leaderPhone" className="text-white">Leader Phone</Label>
          <Input id="leaderPhone" value={leader.phone} onChange={e => setLeader(l => ({ ...l, phone: e.target.value }))} required className="mt-1" />
        </div>
        <div>
          <Label htmlFor="leaderCollege" className="text-white">Leader College</Label>
          <Input id="leaderCollege" value={leader.college} onChange={e => setLeader(l => ({ ...l, college: e.target.value }))} required className="mt-1" />
        </div>
      </div>
      <div>
        <Label className="text-white">Number of Team Members</Label>
        <select
          className="mt-1 block w-full bg-gray-800 text-white rounded p-2"
          value={numMembers}
          onChange={e => handleNumMembersChange(Number(e.target.value))}
        >
          {[2, 3, 4].map(n => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </div>
      <div>
        <Label className="text-white">Team Members</Label>
        <div className="space-y-4 mt-2">
          {members.map((m, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder={`Member ${i + 1} Name`}
                value={m.name}
                onChange={e => setMembers(arr => arr.map((mm, idx) => idx === i ? { ...mm, name: e.target.value } : mm))}
                required
              />
              <Input
                placeholder={`Member ${i + 1} Email`}
                type="email"
                value={m.email}
                onChange={e => setMembers(arr => arr.map((mm, idx) => idx === i ? { ...mm, email: e.target.value } : mm))}
                required
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <input type="checkbox" id="agree" checked={agree} onChange={e => setAgree(e.target.checked)} required />
        <Label htmlFor="agree" className="text-white">I agree to the <a href="/terms" className="underline">terms & conditions</a>.</Label>
      </div>
      <Button type="submit" size="lg" className="w-full" disabled={loading}>
        {loading ? "Registering..." : "Register Now"}
      </Button>
    </form>
  )
}
