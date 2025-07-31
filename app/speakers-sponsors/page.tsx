"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Linkedin, Twitter, Globe, X, Star, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const speakers = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    title: "Chief Technology Officer",
    company: "TechCorp India",
    image: "/placeholder.svg?height=300&width=300&text=Dr.+Priya+Sharma",
    bio: "Dr. Priya Sharma is a renowned technology leader with over 15 years of experience in AI and machine learning. She has led multiple successful startups and is passionate about mentoring young entrepreneurs.",
    expertise: ["Artificial Intelligence", "Machine Learning", "Startup Strategy"],
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    title: "Serial Entrepreneur",
    company: "Founder of 3 Successful Startups",
    image: "/placeholder.svg?height=300&width=300&text=Rajesh+Kumar",
    bio: "Rajesh Kumar is a serial entrepreneur who has founded and successfully exited three startups. He is now an active angel investor and mentor, helping the next generation of entrepreneurs.",
    expertise: ["Entrepreneurship", "Business Strategy", "Fundraising"],
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  },
  {
    id: 3,
    name: "Sarah Johnson",
    title: "VP of Innovation",
    company: "Global Ventures",
    image: "/placeholder.svg?height=300&width=300&text=Sarah+Johnson",
    bio: "Sarah Johnson leads innovation initiatives at Global Ventures, one of the world's largest venture capital firms. She has a keen eye for identifying disruptive technologies and has been instrumental in funding over 50 successful startups.",
    expertise: ["Venture Capital", "Innovation Strategy", "Market Analysis"],
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  },
  {
    id: 4,
    name: "Dr. Amit Patel",
    title: "Research Director",
    company: "Innovation Labs",
    image: "/placeholder.svg?height=300&width=300&text=Dr.+Amit+Patel",
    bio: "Dr. Amit Patel is a leading researcher in emerging technologies with a focus on blockchain and IoT. He has published over 100 research papers and holds 25 patents in various technology domains.",
    expertise: ["Blockchain", "IoT", "Research & Development"],
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  },
]

const titleSponsor = {
  name: "TechCorp Global",
  logo: "/placeholder.svg?height=120&width=300&text=TechCorp+Global",
  website: "https://techcorp.com",
  description: "Leading technology solutions provider empowering innovation worldwide.",
  tier: "Platinum",
}

const coSponsors = [
  {
    name: "InnovateLabs",
    logo: "/placeholder.svg?height=80&width=200&text=InnovateLabs",
    website: "https://innovatelabs.com",
    tier: "Gold",
  },
  {
    name: "StartupHub",
    logo: "/placeholder.svg?height=80&width=200&text=StartupHub",
    website: "https://startuphub.com",
    tier: "Gold",
  },
  {
    name: "VentureCapital Pro",
    logo: "/placeholder.svg?height=80&width=200&text=VentureCapital+Pro",
    website: "https://vcpro.com",
    tier: "Gold",
  },
]

export default function SpeakersSponsorsPage() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<(typeof speakers)[0] | null>(null)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="heading-xl">
              Speakers & <span className="text-gradient">Sponsors</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Meet our distinguished speakers and generous sponsors who make this incredible event possible. Learn from
              industry leaders and connect with organizations shaping the future of technology.
            </p>
          </div>

          {/* Speakers Section */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full glass-effect mb-6">
                <Star className="text-yellow-400 mr-2" size={20} />
                <span className="text-white font-semibold">Distinguished Speakers</span>
              </div>
              <h2 className="text-5xl font-bold text-white mb-6">
                Learn from the <span className="text-gradient">Best</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Get insights from industry veterans, successful entrepreneurs, and innovation experts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {speakers.map((speaker) => (
                <div
                  key={speaker.id}
                  className="glass-effect-strong rounded-3xl overflow-hidden hover-glow cursor-pointer group"
                  onClick={() => setSelectedSpeaker(speaker)}
                >
                  <div className="relative">
                    <Image
                      src={speaker.image || "/placeholder.svg"}
                      alt={speaker.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = `/placeholder.svg?height=300&width=300&text=${encodeURIComponent(speaker.name)}`
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{speaker.name}</h3>
                    <p className="text-blue-400 font-semibold mb-1">{speaker.title}</p>
                    <p className="text-gray-300 text-sm mb-4">{speaker.company}</p>
                    <div className="flex flex-wrap gap-2">
                      {speaker.expertise.slice(0, 2).map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* What to Expect from Speakers */}
            <div className="glass-effect-strong p-12 rounded-3xl">
              <h3 className="text-3xl font-bold text-white text-center mb-12">
                What to <span className="text-gradient">Expect</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-4">🎤 Keynote Sessions</h4>
                  <p className="text-gray-300 mb-6">
                    Inspiring talks from industry leaders sharing their journey, insights, and vision for the future.
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-4">🤝 Mentorship Rounds</h4>
                  <p className="text-gray-300 mb-6">
                    One-on-one sessions with experts to get personalized feedback on your ideas and strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sponsors Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full glass-effect mb-6">
                <Award className="text-green-400 mr-2" size={20} />
                <span className="text-white font-semibold">Our Sponsors</span>
              </div>
              <h2 className="text-5xl font-bold text-white mb-6">
                Powered by <span className="text-gradient">Innovation</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                We're grateful to our amazing sponsors who make this event possible and support the next generation of
                innovators.
              </p>
            </div>

            {/* Title Sponsor */}
            <div className="mb-20">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-300 text-sm font-semibold">
                  Platinum Sponsor
                </span>
              </div>
              <div className="glass-effect-strong p-12 rounded-3xl text-center hover-glow max-w-4xl mx-auto">
                <Link href={titleSponsor.website} target="_blank" className="block">
                  <div className="mb-8">
                    <div className="inline-block p-6 bg-white/5 rounded-3xl mb-6">
                      <Image
                        src={titleSponsor.logo || "/placeholder.svg"}
                        alt={titleSponsor.name}
                        width={300}
                        height={120}
                        className="hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = `/placeholder.svg?height=120&width=300&text=${encodeURIComponent(titleSponsor.name)}`
                        }}
                      />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{titleSponsor.name}</h3>
                  <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">{titleSponsor.description}</p>
                </Link>
              </div>
            </div>

            {/* Co-Sponsors */}
            <div className="mb-20">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold">
                  Gold Sponsors
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {coSponsors.map((sponsor, index) => (
                  <div key={index} className="glass-effect-strong p-8 rounded-3xl text-center hover-glow group">
                    <Link href={sponsor.website} target="_blank" className="block">
                      <div className="p-4 bg-white/5 rounded-2xl mb-4 inline-block">
                        <Image
                          src={sponsor.logo || "/placeholder.svg"}
                          alt={sponsor.name}
                          width={200}
                          height={80}
                          className="group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.src = `/placeholder.svg?height=80&width=200&text=${encodeURIComponent(sponsor.name)}`
                          }}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-white">{sponsor.name}</h3>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Register Now CTA */}
          <div className="text-center glass-effect-strong p-12 rounded-3xl mb-20">
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to <span className="text-gradient">Learn</span> from the Best?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Don't miss this opportunity to learn from industry leaders and connect with amazing sponsors. Register
              now!
            </p>
            <Button
              asChild
              size="lg"
              className="btn-register btn-modern text-white px-16 py-6 rounded-full text-2xl font-bold"
            >
              <Link href="/register" className="flex items-center">
                Register Now <ArrowRight className="ml-3" size={28} />
              </Link>
            </Button>
          </div>

          {/* Speaker Modal */}
          {selectedSpeaker && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="glass-effect-strong rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="relative p-8">
                  <button
                    onClick={() => setSelectedSpeaker(null)}
                    className="absolute top-4 right-4 text-white hover:text-purple-400 transition-colors"
                  >
                    <X size={24} />
                  </button>

                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <Image
                        src={selectedSpeaker.image || "/placeholder.svg"}
                        alt={selectedSpeaker.name}
                        width={200}
                        height={200}
                        className="w-full h-48 md:h-auto object-cover rounded-2xl"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = `/placeholder.svg?height=200&width=200&text=${encodeURIComponent(selectedSpeaker.name)}`
                        }}
                      />
                    </div>

                    <div className="md:w-2/3">
                      <h2 className="text-3xl font-bold text-white mb-2">{selectedSpeaker.name}</h2>
                      <p className="text-blue-400 font-semibold mb-1">{selectedSpeaker.title}</p>
                      <p className="text-gray-300 mb-4">{selectedSpeaker.company}</p>

                      <div className="flex space-x-4 mb-6">
                        <a
                          href={selectedSpeaker.social.linkedin}
                          className="text-gray-300 hover:text-purple-400 transition-colors"
                        >
                          <Linkedin size={20} />
                        </a>
                        <a
                          href={selectedSpeaker.social.twitter}
                          className="text-gray-300 hover:text-purple-400 transition-colors"
                        >
                          <Twitter size={20} />
                        </a>
                        <a
                          href={selectedSpeaker.social.website}
                          className="text-gray-300 hover:text-purple-400 transition-colors"
                        >
                          <Globe size={20} />
                        </a>
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed">{selectedSpeaker.bio}</p>

                      <div>
                        <h3 className="text-white font-semibold mb-3">Expertise</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedSpeaker.expertise.map((skill, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
