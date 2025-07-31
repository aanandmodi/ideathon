"use client"

import { useState } from "react"
import Image from "next/image"
import { Linkedin, Twitter, Globe, X } from "lucide-react"

const speakers = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    title: "Chief Technology Officer",
    company: "TechCorp India",
    image: "/placeholder.svg?height=300&width=300&text=Dr. Priya Sharma",
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
    image: "/placeholder.svg?height=300&width=300&text=Rajesh Kumar",
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
    image: "/placeholder.svg?height=300&width=300&text=Sarah Johnson",
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
    image: "/placeholder.svg?height=300&width=300&text=Dr. Amit Patel",
    bio: "Dr. Amit Patel is a leading researcher in emerging technologies with a focus on blockchain and IoT. He has published over 100 research papers and holds 25 patents in various technology domains.",
    expertise: ["Blockchain", "IoT", "Research & Development"],
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  },
  {
    id: 5,
    name: "Lisa Chen",
    title: "Product Manager",
    company: "Meta",
    image: "/placeholder.svg?height=300&width=300&text=Lisa Chen",
    bio: "Lisa Chen is a senior product manager at Meta, where she leads product development for emerging social technologies. She has a strong background in user experience design and product strategy.",
    expertise: ["Product Management", "UX Design", "Social Technology"],
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  },
  {
    id: 6,
    name: "Michael Rodriguez",
    title: "Startup Mentor",
    company: "TechStars",
    image: "/placeholder.svg?height=300&width=300&text=Michael Rodriguez",
    bio: "Michael Rodriguez is a seasoned startup mentor at TechStars with experience in scaling businesses from idea to IPO. He has mentored over 200 startups and is passionate about helping entrepreneurs succeed.",
    expertise: ["Startup Scaling", "Business Development", "Mentoring"],
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  },
]

export default function SpeakersPage() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<(typeof speakers)[0] | null>(null)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="heading-xl">
              Distinguished <span className="text-gradient">Speakers</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Learn from industry leaders, successful entrepreneurs, and innovation experts who will guide you through
              your journey from idea to implementation.
            </p>
          </div>

          {/* Speakers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {speakers.map((speaker) => (
              <div
                key={speaker.id}
                className="glass-effect rounded-2xl overflow-hidden hover-glow cursor-pointer group"
                onClick={() => setSelectedSpeaker(speaker)}
              >
                <div className="relative">
                  <Image
                    src={speaker.image || "/placeholder.svg"}
                    alt={speaker.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
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
                    {speaker.expertise.length > 2 && (
                      <span className="px-3 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-full">
                        +{speaker.expertise.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Speaker Modal */}
          {selectedSpeaker && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="glass-effect rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
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
                        className="w-full h-48 md:h-auto object-cover rounded-xl"
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

          {/* What to Expect */}
          <div className="glass-effect p-12 rounded-3xl">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              What to <span className="text-gradient">Expect</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">🎤 Keynote Sessions</h3>
                <p className="text-gray-300 mb-6">
                  Inspiring talks from industry leaders sharing their journey, insights, and vision for the future of
                  technology and entrepreneurship.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">🤝 Mentorship Rounds</h3>
                <p className="text-gray-300 mb-6">
                  One-on-one sessions with experts to get personalized feedback on your ideas and strategies for
                  implementation.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">🏆 Judging Panel</h3>
                <p className="text-gray-300 mb-6">
                  Our distinguished speakers will evaluate final presentations and provide valuable feedback to all
                  participating teams.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">🌐 Networking</h3>
                <p className="text-gray-300 mb-6">
                  Exclusive networking opportunities to connect with industry leaders and build lasting professional
                  relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
