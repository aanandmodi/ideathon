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

const allSponsors = [
    { name: "Ahmedabad Signal Vadapav", logo: "/sponser1.png?height=200&width=350&text=TechCorp+Global", website: "#" },
    { name: "Ahmedabad Mirror", logo: "/sponser2.png?height=100&width=250&text=InnovateLabs", website: "#" },
    { name: "StartupHub", logo: "/placeholder.svg?height=100&width=250&text=StartupHub", website: "#" },
    { name: "VentureCapital Pro", logo: "/placeholder.svg?height=100&width=250&text=VentureCapital+Pro", website: "#" },
    { name: "Future Systems", logo: "/placeholder.svg?height=100&width=250&text=Future+Systems", website: "#" },
    { name: "NextGen AI", logo: "/placeholder.svg?height=100&width=250&text=NextGen+AI", website: "#" },
    { name: "EcoSolutions", logo: "/placeholder.svg?height=100&width=250&text=EcoSolutions", website: "#" },
    { name: "QuantumLeap", logo: "/placeholder.svg?height=100&width=250&text=QuantumLeap", website: "#" },
];

// Reusable Marquee Component for Sponsors
const SponsorMarquee = ({ sponsors, speed = '80s' }: {
  sponsors: { name: string; logo: string; website: string }[];
  speed?: string;
}) => {
  return (
    <div className="relative w-full overflow-hidden group">
      <div 
        className="marquee-content flex w-max animate-[marquee-left_var(--marquee-speed)_linear_infinite] group-hover:[animation-play-state:paused]"
        style={{ '--marquee-speed': speed } as React.CSSProperties}
      >
        {/* Render logos twice for a seamless loop */}
        {[...sponsors, ...sponsors].map((sponsor, index) => (
          // FIX 1: The 'group' class is named 'group/logo' to make it unique.
          <Link href={sponsor.website} key={index} target="_blank" className="flex-shrink-0 mx-8 flex items-center justify-center group/logo">
            <Image
              src={sponsor.logo}
              alt={`${sponsor.name} logo`}
              width={250}
              height={100}
              // FIX 2: The hover effects now specifically target the 'group-hover/logo' state.
              className="h-20 w-48 object-contain transition-all duration-300 filter grayscale group-hover/logo:filter-none group-hover/logo:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = `/placeholder.svg?height=100&width=250&text=${encodeURIComponent(sponsor.name)}`
              }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};


export default function SpeakersSponsorsPage() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<(typeof speakers)[0] | null>(null)

  return (
    <div className="min-h-screen">
      <section className="section-padding pt-40 md:pt-48">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto mb-20 md:mb-24">
            <h1 className="heading-xl">
              Speakers & <span className="text-gradient">Sponsors</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Speakers who inspire. Sponsors who empower. Together, they make this journey possible.
            </p>
          </div>

          {/* Speakers Section */}
          <div className="mb-24 md:mb-32">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-bold text-white">
                Meet Our <span className="text-gradient">Speakers</span>
               </h2>
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

            <div className="glass-effect-strong p-8 md:p-12 rounded-3xl">
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
          <div className="mb-24 md:mb-32">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full glass-effect mb-6">
                <Award className="text-green-400 mr-2" size={20} />
                <span className="text-white font-semibold">Our Valued Partners</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powered by <span className="text-gradient">Industry Leaders</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                We're grateful for the incredible support from our sponsors who are committed to fostering innovation and empowering the next generation of talent.
              </p>
            </div>

            <div className="relative py-8 [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
                <SponsorMarquee sponsors={allSponsors} speed="80s" />
            </div>
          </div>
          
          {/* Speaker Modal */}
          {selectedSpeaker && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="glass-effect-strong rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="relative p-6 md:p-8">
                  <button
                    onClick={() => setSelectedSpeaker(null)}
                    className="absolute top-4 right-4 text-white hover:text-purple-400 transition-colors z-10"
                  >
                    <X size={24} />
                  </button>

                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3 flex-shrink-0">
                      <Image
                        src={selectedSpeaker.image || "/placeholder.svg"}
                        alt={selectedSpeaker.name}
                        width={200}
                        height={200}
                        className="w-full h-48 md:h-full object-cover rounded-2xl"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = `/placeholder.svg?height=200&width=200&text=${encodeURIComponent(selectedSpeaker.name)}`
                        }}
                      />
                    </div>

                    <div className="md:w-2/3">
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedSpeaker.name}</h2>
                      <p className="text-blue-400 font-semibold mb-1">{selectedSpeaker.title}</p>
                      <p className="text-gray-300 mb-4">{selectedSpeaker.company}</p>

                      <div className="flex space-x-4 mb-6">
                        <a href={selectedSpeaker.social.linkedin} className="text-gray-300 hover:text-purple-400 transition-colors">
                          <Linkedin size={20} />
                        </a>
                        <a href={selectedSpeaker.social.twitter} className="text-gray-300 hover:text-purple-400 transition-colors">
                          <Twitter size={20} />
                        </a>
                        <a href={selectedSpeaker.social.website} className="text-gray-300 hover:text-purple-400 transition-colors">
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