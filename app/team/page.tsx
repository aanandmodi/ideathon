"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Linkedin, Twitter, Mail, X, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const teamMembers = [
  {
    id: 1,
    name: "Arjun Sharma",
    role: "Event Director",
    image: "/placeholder.svg?height=300&width=300&text=Arjun+Sharma",
    bio: "Final year Computer Science student with a passion for entrepreneurship and innovation. Leading the team with vision and dedication.",
    skills: ["Leadership", "Strategy", "Innovation"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "arjun@ecellignite.in",
    },
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Operations Head",
    image: "/placeholder.svg?height=300&width=300&text=Priya+Patel",
    bio: "MBA student specializing in operations management and event coordination. Ensuring smooth execution of all event activities.",
    skills: ["Operations", "Management", "Coordination"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "priya@ecellignite.in",
    },
  },
  {
    id: 3,
    name: "Rahul Gupta",
    role: "Technical Lead",
    image: "/placeholder.svg?height=300&width=300&text=Rahul+Gupta",
    bio: "Software engineer with expertise in full-stack development and technical infrastructure. Building the tech backbone of the event.",
    skills: ["Full Stack", "DevOps", "Architecture"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "rahul@ecellignite.in",
    },
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Marketing Head",
    image: "/placeholder.svg?height=300&width=300&text=Sneha+Reddy",
    bio: "Digital marketing specialist focused on brand building and community engagement. Spreading the word about innovation.",
    skills: ["Digital Marketing", "Branding", "Social Media"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sneha@ecellignite.in",
    },
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Partnerships Lead",
    image: "/placeholder.svg?height=300&width=300&text=Vikram+Singh",
    bio: "Business development professional with experience in corporate partnerships. Building bridges with industry leaders.",
    skills: ["Business Development", "Partnerships", "Networking"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "vikram@ecellignite.in",
    },
  },
  {
    id: 6,
    name: "Ananya Joshi",
    role: "Design Head",
    image: "/placeholder.svg?height=300&width=300&text=Ananya+Joshi",
    bio: "UI/UX designer passionate about creating beautiful and functional user experiences. Crafting the visual identity of the event.",
    skills: ["UI/UX Design", "Branding", "Creative Direction"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "ananya@ecellignite.in",
    },
  },
  {
    id: 7,
    name: "Karthik Nair",
    role: "Content Lead",
    image: "/placeholder.svg?height=300&width=300&text=Karthik+Nair",
    bio: "Content strategist and writer with a knack for storytelling and brand communication. Telling the story of innovation.",
    skills: ["Content Strategy", "Writing", "Storytelling"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "karthik@ecellignite.in",
    },
  },
  {
    id: 8,
    name: "Meera Agarwal",
    role: "Finance Head",
    image: "/placeholder.svg?height=300&width=300&text=Meera+Agarwal",
    bio: "Finance professional ensuring transparent and efficient budget management. Managing resources for maximum impact.",
    skills: ["Finance", "Budget Management", "Analytics"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "meera@ecellignite.in",
    },
  },
  {
    id: 9,
    name: "Ritika Mehta",
    role: "Outreach Coordinator",
    image: "/placeholder.svg?height=300&width=300&text=Ritika+Mehta",
    bio: "Energetic outreach specialist passionate about connecting communities and driving student engagement through creative initiatives.",
    skills: ["Outreach", "Communication", "Networking"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "ritika@ecellignite.in",
    },
  },
  {
    id: 10,
    name: "Aditya Verma",
    role: "Logistics Head",
    image: "/placeholder.svg?height=300&width=300&text=Aditya+Verma",
    bio: "Detail-oriented logistics planner ensuring smooth movement of resources and seamless execution of physical arrangements.",
    skills: ["Logistics", "Planning", "Time Management"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "aditya@ecellignite.in",
    },
  },
  {
    id: 11,
    name: "Tanya Bansal",
    role: "PR & Media Head",
    image: "/placeholder.svg?height=300&width=300&text=Tanya+Bansal",
    bio: "Public relations enthusiast crafting compelling narratives and managing media coverage to boost event visibility.",
    skills: ["Public Relations", "Media Management", "Storytelling"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "tanya@ecellignite.in",
    },
  },
  {
    id: 12,
    name: "Nikhil Deshmukh",
    role: "Volunteer Coordinator",
    image: "/placeholder.svg?height=300&width=300&text=Nikhil+Deshmukh",
    bio: "Team player managing and mentoring volunteers to ensure enthusiastic participation and efficient task execution.",
    skills: ["Team Management", "Mentoring", "Coordination"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "nikhil@ecellignite.in",
    },
  },
]

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<(typeof teamMembers)[0] | null>(null)

  return (
    <div className="min-h-screen">
      <section className="section-padding pt-32">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="heading-xl">
              Meet Our <span className="text-gradient">Team</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              The passionate individuals behind Ecell Ignite Ideathon 2025. A diverse group of students and
              professionals working together to create an amazing innovation experience.
            </p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="glass-effect-strong rounded-3xl overflow-hidden hover-glow cursor-pointer group"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="relative">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = `/placeholder.svg?height=300&width=300&text=${encodeURIComponent(member.name)}`
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-blue-400 font-semibold mb-1">{member.role}</p>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-2">{member.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.slice(0, 2).map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            
          {selectedMember && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="glass-effect-strong rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="relative p-8">
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="absolute top-4 right-4 text-white hover:text-purple-400 transition-colors"
                  >
                    <X size={24} />
                  </button>

                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <Image
                        src={selectedMember.image || "/placeholder.svg"}
                        alt={selectedMember.name}
                        width={200}
                        height={200}
                        className="w-full h-48 md:h-auto object-cover rounded-2xl"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = `/placeholder.svg?height=200&width=200&text=${encodeURIComponent(selectedMember.name)}`
                        }}
                      />
                    </div>

                    <div className="md:w-2/3">
                      <h2 className="text-3xl font-bold text-white mb-2">{selectedMember.name}</h2>
                      <p className="text-blue-400 font-semibold mb-4">{selectedMember.role}</p>

                      <div className="flex space-x-4 mb-6">
                        <a href={selectedMember.social.linkedin} className="text-gray-300 hover:text-purple-400 transition-colors">
                          <Linkedin size={20} />
                        </a>
                        <a href={selectedMember.social.twitter} className="text-gray-300 hover:text-purple-400 transition-colors">
                          <Twitter size={20} />
                        </a>
                        <a href={`mailto:${selectedMember.social.email}`} className="text-gray-300 hover:text-purple-400 transition-colors">
                          <Mail size={20} />
                        </a>
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed">{selectedMember.bio}</p>

                      <div>
                        <h3 className="text-white font-semibold mb-3">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedMember.skills.map((skill, index) => (
                            <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
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
