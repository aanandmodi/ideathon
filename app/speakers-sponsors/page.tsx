"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Linkedin, Twitter, Globe, X, Star, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// --- SPEAKERS DATA ---
const speakers = [
  // 1. Featured Speaker
  {
    id: 1,
    name: "Parth Gupta",
    title: "Security Analyst",
    company: "EY | India's Youngest Certified Ethical Hacker",
    image: "speaker1.jpg",
    bio: "Parth Gupta is a Security Analyst at EY and holds the record for being India's Youngest Certified Ethical Hacker. With accolades from the EC Council and the Golden Book of World Records, Parth is a prominent young expert in the field of cybersecurity.",
    expertise: ["Ethical Hacking", "Cybersecurity", "Security Analysis"],
    social: {
      linkedin: "https://in.linkedin.com/in/parth-gupta-8a62b7131",
      twitter: "#",
      website: "http://www.infikeytech.com/",
    },
  },
  // 2. Second Speaker
  {
    id: 2,
    name: "Shyam N Chawda",
    title: "Founder & CEO",
    company: "Shyam Sir Institute",
    image: "/speaker2.jpg?height=300&width=300&text=Shyam+N+Chawda",
    bio: "Shyam Sir, Founder & CEO of Shyam Sir Institute, is a pioneer in coding and tech education with over 15 years of experience. Through his institute, he has trained thousands of students across India and abroad, equipping them with skills in coding, AI, and innovation.",
    expertise: ["Coding", "AI", "Mentorship"],
    social: { 
      linkedin: "https://www.linkedin.com/in/shyam-n-chawda-9a0360315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", 
      twitter: "#", 
      website: "https://shyamsir.com/" 
    },
  },
  // 3. Third speaker updated to CA Shikha Agarwal
  {
    id: 3,
    name: "CA Shikha Agarwal",
    title: "Finance Expert",
    company: "V S Agarwal & Associates LLP",
    image: "/speaker3.jpg?height=300&width=300&text=CA+Shikha+Agarwal",
    bio: "CA Shikha Agarwal, FCA, is the Managing Partner at V S Agarwal & Associates LLP with over 17 years of expertise in audit, taxation, corporate finance, and management consulting. She currently serves as MCM Member (2025–29) and WICASA Chairperson (2025–26) at the Ahmedabad Branch of ICAI.",
    expertise: ["Finance", "Focus", "Future"],
    social: { 
      linkedin: "https://www.linkedin.com/in/shikhaagarwal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", 
      twitter: "#", 
      website: "#" 
    },
  },
]

// --- SPONSORS DATA ---
const allSponsors = [
    { name: "Ahmedabad Signal Vadapav", logo: "/sponser1.png?height=200&width=350&text=Ahmedabad+Signal+Vadapav", website: "https://www.instagram.com/asv.2025?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDcOZUODc0MzIxNw==" },
    { name: "Ahmedabad Mirror", logo: "/sponser2.png?height=100&width=250&text=Ahmedabad+Mirror", website: "https://www.instagram.com/ahmedabadmirrorofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDcOZUODc0MzIxNw==" },
    { name: "Unstop", logo: "/sponser3.png?height=100&width=250&text=Unstop", website: "https://unstop.com/" },
    { name: "TruScholar", logo: "/sponser4.svg?height=100&width=250&text=VentureCapital+Pro", website: "https://www.truscholar.io/" },
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
          <Link href={sponsor.website} key={index} target="_blank" className="flex-shrink-0 mx-8 flex items-center justify-center group/logo">
            <Image
              src={sponsor.logo}
              alt={`${sponsor.name} logo`}
              width={250}
              height={100}
              className="h-20 w-48 object-contain transition-all duration-300 group-hover/logo:scale-105"
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

            {/* MODIFIED: Grid layout changed to lg:grid-cols-3 for 3 speakers */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {speakers.map((speaker) => {
                const isComingSoon = speaker.name === "Coming Soon";
                return (
                  <div
                    key={speaker.id}
                    className={`glass-effect-strong rounded-3xl overflow-hidden group transition-opacity ${
                      isComingSoon
                        ? 'cursor-default opacity-60'
                        : 'hover-glow cursor-pointer'
                    }`}
                    onClick={() => !isComingSoon && setSelectedSpeaker(speaker)}
                  >
                    <div className="relative">
                      <Image
                        src={speaker.image || "/placeholder.svg"}
                        alt={speaker.name}
                        width={300}
                        height={300}
                        className={`w-full h-64 object-cover transition-transform duration-300 ${!isComingSoon && 'group-hover:scale-105'}`}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = `/placeholder.svg?height=300&width=300&text=${encodeURIComponent(speaker.name)}`
                        }}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${!isComingSoon && 'opacity-0 group-hover:opacity-100'}`} />
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
                )
              })}
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
                        <a href={selectedSpeaker.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">
                          <Linkedin size={20} />
                        </a>
                        <a href={selectedSpeaker.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">
                          <Twitter size={20} />
                        </a>
                        <a href={selectedSpeaker.social.website} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">
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