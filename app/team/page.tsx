"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Linkedin, Instagram, Mail, X } from "lucide-react"

const teamMembers = [
  // First 10 are now Core Team
  {
    id: 1,
    name: "Hitendrasinh Zala",
    role: "Event Director",
    image: "/Hitendra.jpg?height=300&width=300&text=Abhisekh+Agrawal",
    bio: "Responsible for the overall planning, execution, and supervision of the ideathon.",
    skills: ["Leadership", "Strategic Planning", "Event Management"],
    social: {
      linkedin: "http://linkedin.com/in/hitendrasinhzala",
      instagram: "https://www.instagram.com/ardnetih.__/",
      email: "hitendrasinh2004@gmail.com",
    },
  },
  {
    id: 2,
    name: "Abhishek Agarwal",
    role: "Vice Convenor",
    image: "/Abhishek.jpg?height=300&width=300&text=Parth+Raval",
    bio: "Supports the Event Director and coordinates with team.",
    skills: ["Team Coordination", "Operations", "Communication"],
    social: {
      linkedin: "https://www.linkedin.com/in/abhishekkkagarwal/",
      instagram: "https://www.instagram.com/abhishek_ag.1108/",
      email: "abhishek040478@gmail.com",
    },
  },
  {
    id: 3,
    name: "Parth Raval",
    role: "Vice Convenor",
    image: "/Raval Parth.jpg?height=300&width=300&text=Aanand+Modi",
    bio: "Manages daily operations and resolves issues during the event.",
    skills: ["Operational Management", "Issue Resolution", "On-site Coordination"],
    social: {
      linkedin: "https://www.linkedin.com/in/parth-raval-4583362bb/",
      instagram: "https://www.instagram.com/parth_raval_25/?hl=en",
      email: "ravalp682@gmail.com",
    },
  },
  {
    id: 4,
    name: "Rituraj Singh Deora",
    role: "Corporate Relations Lead",
    image: "/Rituraj.jpg?height=300&width=300&text=Rituraj+Singh+Deora",
    bio: "Handles sponsorships, partnerships, and corporate communications.",
    skills: ["Sponsorship Acquisition", "Partnership Building", "Negotiation"],
    social: {
      linkedin: "https://www.linkedin.com/in/rituraj-singh-deora-b8b002376/",
      instagram: "https://www.instagram.com/deora.rituraj/",
      email: "riturajsd25@gmail.com",
    },
  },
  {
    id: 5,
    name: "Aanand Modi",
    role: "Technical head",
    image: "/Aanand.jpg?height=300&width=300&text=Vikram+Singh",
    bio: "Manages the website, registration system, and all technical tools.",
    skills: ["Web Development", "System Administration", "Technical Support"],
    social: {
      linkedin: "https://www.linkedin.com/in/aanand-modi-648687353/",
      instagram: "https://www.instagram.com/_aanand16_/",
      email: "aanandmodi09@gmail.com",
    },
  },
  {
    id: 6,
    name: "Kunjal Bhavsar",
    role: "Social Media Lead",
    image: "/kunjal.jpeg?height=300&width=300&text=Ananya+Joshi",
    bio: "Oversees event promotion and engagement on social platforms.",
    skills: ["Social Media Strategy", "Content Creation", "Community Engagement"],
    social: {
      linkedin: "https://www.linkedin.com/in/kunjal-bhavsar-84568331b",
      instagram: "https://www.instagram.com/kunjal_bhavsar_/",
      email: "kbbhavsar1234@gmail.com",
    },
  },
  {
    id: 7,
    name: "Mansi Sharma",
    role: "Content & Copywriting",
    image: "/Mansi.jpg?height=300&width=300&text=Karthik+Nair",
    bio: "Content strategist and writer with a knack for storytelling and brand communication. Telling the story of innovation.",
    skills: ["Content Strategy", "Copywriting", "Storytelling"],
    social: {
      linkedin: "https://www.linkedin.com/in/mansi-sharma-52136b30a",
      instagram: "https://www.instagram.com/mansi.bs_04/",
      email: "karthik@ecellignite.in",
    },
  },
  {
    id: 8,
    name: "Arpita Motwani",
    role: "Marketing Head",
    image: "/Arpita.jpg?height=300&width=300&text=Meera+Agarwal",
    bio: "Designs branding strategies and promotional campaigns for the event.",
    skills: ["Marketing Strategy", "Brand Management", "Campaign Planning"],
    social: {
      linkedin: "https://www.linkedin.com/in/arpita-motwani/",
      instagram: "https://www.instagram.com/arpita._.motwani/",
      email: "motwaniarpita0@gmail.com",
    },
  },
  {
    id: 9,
    name: "Dhruvil Barot",
    role: "Marketing Head",
    image: "/Dhruvil.jpg?height=300&width=300&text=Meera+Agarwal",
    bio: "Coordinates research and development of problem statements and innovation ideas.",
    skills: ["Market Research", "Campaign Coordination", "Lead Generation"],
    social: {
      linkedin: "http://www.linkedin.com/in/barot-dhruvil-b64572317/",
      instagram: "https://www.instagram.com/dhruvil_barot.0355",
      email: "barotdhruvilc@gmail.com",
    },
  },
  {
    id: 10,
    name: "Jayesh Dhanwani",
    role: "Logistics Lead",
    image: "/Jayesh.jpg?height=300&width=300&text=Meera+Agarwal",
    bio: "Manages venue setup, resources, and on‑ground arrangements.",
    skills: ["Logistics Planning", "Venue Management", "Resource Allocation"],
    social: {
      linkedin: "https://www.linkedin.com/in/jayesh-dhanwani-52a2382ab/",
      instagram: "https://www.instagram.com/dhanwani182/",
      email: "jayeshdhanwani558@gmail.com",
    },
  },
  // Other Members
  {
    id: 11,
    name: "Pratham Patel",
    role: "Core member",
    image: "/pratham.jpeg?height=300&width=300&text=Tanya+Bansal",
    skills: ["Public Relations", "Media Outreach", "Team Collaboration"],
    social: {
      linkedin: "https://www.linkedin.com/in/pratham-patel-2978042ab",
      instagram: "https://www.linkedin.com/in/pratham-patel-2978042ab",
      email: "tanya@ecellignite.in",
    },
  },
  {
    id: 12,
    name: "Priyasingh Rajput",
    role: "Treasurer",
    image: "/Priya.jpg?height=300&width=300&text=Nikhil+Deshmukh",
    bio: "Prepares the budget, manages funds, and maintains financial records.",
    skills: ["Budgeting", "Financial Management", "Record Keeping"],
    social: {
      linkedin: "https://www.linkedin.com/in/priyaa-singh-439638375",
      instagram: "https://www.instagram.com/prriiiyyaaa_/?hl=en",
      email: "Priyaasinghh81@gmail.com",
    },
  },
  {
    id: 13,
    name: "Vanshika Prajapati",
    role: "Host Coordinator",
    image: "/Vanshika.jpg?height=300&width=300&text=Priya+Sharma",
    bio: "Coordinates anchors across different sessions.",
    skills: ["Anchor Coordination", "Stage Management", "Public Speaking"],
    social: {
      linkedin: "https://www.linkedin.com/in/vanshika-prajapati-25272431b",
      instagram: "https://www.instagram.com/vanshiiikaaa_20/",
      email: "Vanshikadevendraprajapati@gmail.com",
    },
  },
  {
    id: 14,
    name: "Rashid Mirza",
    role: "Hospitality Lead",
    image: "/Rashid Mirza.jpg?height=300&width=300&text=Rohan+Gupta",
    bio: "Takes care of arrangements for judges, guests, and speakers.",
    skills: ["Guest Relations", "Hospitality Management", "VIP Handling"],
    social: {
      linkedin: "https://www.linkedin.com/in/rashid-mirza-8b4858275/",
      instagram: "https://www.instagram.com/rashid_mirza007/",
      email: "ra1277121@gmail.com",
    },
  },
  {
    id: 15,
    name: "Riya Chawla",
    role: "Host Coordinator",
    image: "/riya.jpeg?height=300&width=300&text=Sneha+Patel",
    bio: "Coordinates anchors and ensures smooth stage flow during sessions.",
    skills: ["Event Anchoring", "Stage Coordination", "Script Management"],
    social: {
      linkedin: "https://www.linkedin.com/in/riya-chawla-aba3bb239/",
      instagram: "https://www.instagram.com/_.ohhthtsriaa._/",
      email: "sneha@ecellignite.in",
    },
  },
  {
    id: 16,
    name: "Niharika Vaishnav",
    role: "Host Coordinator",
    image: "/Niharika.jpg?height=300&width=300&text=Arjun+Reddy",
    bio: "Coordinates anchors and ensures smooth stage flow during sessions.",
    skills: ["Event Anchoring", "Stage Coordination", "Script Management"],
    social: {
      linkedin: "https://www.linkedin.com/in/niharika-vaishnav-8a1916316",
      instagram: "https://www.instagram.com/niiharikaa11/",
      email: "NiharikaVv06@gmail.com",
    },
  },
  {
    id: 17,
    name: "Pallav Choudhary",
    role: "Host Coordinator",
    image: "/pallav.jpg?height=300&width=300&text=Fatima+Khan",
    bio: "Provides backup support for anchoring and event flow management",
    skills: ["Event Support", "Backup Anchoring", "Flow Management"],
    social: {
      linkedin: "#",
      instagram: "https://www.instagram.com/pallav__choudhary_/",
      email: "pallavchoudhary809@gmail.com",
    },
  },
  {
    id: 18,
    name: "Vyom Dave",
    role: "Social Media Lead",
    image: "/Vyom.JPG?height=300&width=300&text=David+D'souza",
    bio: "Creates engaging content and boosts reach on social platforms.",
    skills: ["Content Creation", "Social Media Marketing", "Audience Growth"],
    social: {
      linkedin: "https://www.linkedin.com/in/vyom-dave-7b357a378",
      instagram: "https://www.instagram.com/thevyomdave/",
      email: "vyomdave021@gmail.com",
    },
  },
]

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<(typeof teamMembers)[0] | null>(null)

  // Separate the members into a core team of 10 and 8 other members
  const coreTeam = teamMembers.slice(0, 10)
  const otherMembers = teamMembers.slice(10)

  const MemberCard = ({ member }: { member: (typeof teamMembers)[0] }) => (
    <div
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
  )

  return (
    <div className="min-h-screen">
      <section className="section-padding pt-40 md:pt-32">
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

          {/* Core Team Section */}
          <div className="mb-24">
            <h2 className="heading-lg text-center mb-12">
              Our <span className="text-gradient">Core Team</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {coreTeam.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>

          {/* Other Members Section */}
          <div>
            <h2 className="heading-lg text-center mb-12">
              Our <span className="text-gradient">Esteemed Members</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {otherMembers.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
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
                        <a href={selectedMember.social.instagram} className="text-gray-300 hover:text-purple-400 transition-colors">
                          <Instagram size={20} />
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