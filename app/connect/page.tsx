import Image from "next/image"
import { Mail, Phone, MapPin, Send, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const teamMembers = [
  {
    id: 1,
    name: "Arjun Sharma",
    role: "Event Director",
    image: "/placeholder.svg?height=300&width=300&text=Arjun Sharma",
    bio: "Final year Computer Science student with a passion for entrepreneurship and innovation.",
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
    image: "/placeholder.svg?height=300&width=300&text=Priya Patel",
    bio: "MBA student specializing in operations management and event coordination.",
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
    image: "/placeholder.svg?height=300&width=300&text=Rahul Gupta",
    bio: "Software engineer with expertise in full-stack development and technical infrastructure.",
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
    image: "/placeholder.svg?height=300&width=300&text=Sneha Reddy",
    bio: "Digital marketing specialist focused on brand building and community engagement.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sneha@ecellignite.in",
    },
  },
]

export default function ConnectPage() {
  return (
    <div className="min-h-screen section-padding">
      <div className="container-max px-2 sm:px-4 md:px-8">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 neon-text">
            Connect <span className="text-gradient">With Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Get in touch with our team or reach out for any queries about the Ideathon. We're here to help you every
            step of the way.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Contact Information */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-12">
              Get in <span className="text-gradient">Touch</span>
            </h2>

            <div className="space-y-8 mb-16">
              <div className="glass-effect-strong card-spacing hover-glow">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <Mail className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">Email</h3>
                    <p className="text-gray-300 text-lg">contact@ecellignite.in</p>
                    <p className="text-gray-400 text-sm mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="glass-effect-strong card-spacing hover-glow">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <Phone className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">Phone</h3>
                    <p className="text-gray-300 text-lg">+91-9876-543-210</p>
                    <p className="text-gray-400 text-sm mt-1">Available 9 AM - 6 PM IST</p>
                  </div>
                </div>
              </div>

              <div className="glass-effect-strong card-spacing hover-glow">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <MapPin className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">Address</h3>
                    <p className="text-gray-300 text-lg">Silver Oak University</p>
                    <p className="text-gray-300">Ahmedabad, Gujarat 382481</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="glass-effect-strong card-spacing">
              <h3 className="text-2xl font-bold text-white mb-8">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-white font-semibold mb-3">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12 rounded-xl"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-white font-semibold mb-3">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12 rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-3">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12 rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-semibold mb-3">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="How can we help you?"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12 rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-3">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us more about your inquiry..."
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 resize-none rounded-xl"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white hover-glow h-14 text-lg rounded-xl"
                >
                  <Send className="mr-3" size={20} />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-5xl font-bold text-white text-center mb-16">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="glass-effect-strong rounded-2xl overflow-hidden hover-glow group">
                <div className="relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.bio}</p>

                  <div className="flex space-x-3">
                    <a
                      href={member.social.linkedin}
                      className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Linkedin className="text-white" size={16} />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Twitter className="text-white" size={16} />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Mail className="text-white" size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="glass-effect-strong card-spacing">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">When is the registration deadline?</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Registration closes on August 25, 2025. Register early to secure your spot!
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Is there a participation fee?</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                No, the Ideathon is completely free to participate in.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Can I change my team after registration?</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Yes, team changes are allowed until the team formation deadline.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">What platform will be used for the event?</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                The event will be conducted at Silver Oak University campus with hybrid participation options.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
