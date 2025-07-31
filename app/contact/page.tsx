"use client"

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container-max px-2 sm:px-4 md:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="heading-xl">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Have questions about the Ideathon? Need help with registration? Our
              team is here to help you every step of the way.
            </p>
          </div>

          {/* Contact Information */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Contact <span className="text-gradient">Information</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Email */}
              <div className="glass-effect-strong p-8 rounded-3xl hover-glow">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <Mail className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">Email</h3>
                    <p className="text-gray-300 text-lg">ignite@socet.edu.in</p>
                    <p className="text-gray-400 text-sm mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="glass-effect-strong p-8 rounded-3xl hover-glow">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <Phone className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">Phone</h3>
                    <p className="text-gray-300 text-lg">+91 95121 38299</p>
                    <p className="text-gray-400 text-sm mt-1">Available 9 AM - 6 PM IST</p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="glass-effect-strong p-8 rounded-3xl hover-glow">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center">
                    <MapPin className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">Address</h3>
                    <p className="text-gray-300 text-lg">Silver Oak University</p>
                    <p className="text-gray-300">Ahmedabad, Gujarat 382481</p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="glass-effect-strong p-8 rounded-3xl hover-glow">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <Clock className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">Office Hours</h3>
                    <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-400 text-sm mt-1">Closed on Sundays</p>
                  </div>
                </div>
              </div>
            </div>

{/* Social Icons */}
<div className="glass-effect-strong p-12 rounded-3xl mb-16 text-center">
  <h3 className="text-3xl font-bold text-white mb-8">Follow Us</h3>
  <div className="flex flex-wrap justify-center gap-4 sm:gap-6 relative">
    {/* Facebook */}
    <div className="group relative">
      <Link
        href="https://www.facebook.com/IgniteForStartups"
        className="group w-12 h-12 sm:w-14 sm:h-14 border border-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:border-blue-600 hover:scale-110"
      >
        <Facebook className="text-white group-hover:animate-fb-bounce group-hover:text-[#1877F2]" size={24} />
      </Link>
      <span className="tooltip">Facebook</span>
    </div>

    {/* Instagram */}
    <div className="group relative">
      <Link
        href="https://www.instagram.com/igniteforstartups"
        className="group w-12 h-12 sm:w-14 sm:h-14 border border-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:border-pink-500 hover:scale-110"
      >
        <Instagram className="text-white group-hover:animate-ig-sparkle" size={24} />
      </Link>
      <span className="tooltip">Instagram</span>
    </div>

    {/* LinkedIn */}
    <div className="group relative">
      <Link
        href="http://www.linkedin.com/company/iicws"
        className="group w-12 h-12 sm:w-14 sm:h-14 border border-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:border-sky-500 hover:scale-110"
      >
        <Linkedin className="text-white group-hover:animate-li-pulse" size={24} />
      </Link>
      <span className="tooltip">LinkedIn</span>
    </div>

    {/* Twitter */}
    <div className="group relative">
      <Link
        href="https://www.twitter.com/ignite4startups"
        className="group w-12 h-12 sm:w-14 sm:h-14 border border-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:border-cyan-400 hover:scale-110"
      >
        <Twitter className="text-white group-hover:animate-flap" size={24} />
      </Link>
      <span className="tooltip">Twitter</span>
    </div>
  </div>
</div>


            {/* Embedded Google Map */}
            <div className="glass-effect-strong p-12 rounded-3xl mb-20 text-center">
              <h3 className="text-3xl font-bold text-white mb-6">Our Location</h3>
              <p className="text-gray-300 mb-6">Find us on the map below.</p>
              <div className="w-full h-96 rounded-2xl overflow-hidden border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d272.7882992773887!2d72.5345492152241!3d23.09024034004919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e833af6f39347%3A0xf1db9065daea7008!2sSilver%20Oak%20University!5e0!3m2!1sen!2sin!4v1753697363004!5m2!1sen!2sin"
                  height="100%"
                  width="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="glass-effect-strong p-12 rounded-3xl max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold text-white text-center mb-16">
              Quick <span className="text-gradient">Answers</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  When is the registration deadline?
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Registration closes on August 25, 2025. Register early to secure your spot!
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Is there a participation fee?
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  No, the Ideathon is completely free to participate in.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Can I change my team after registration?
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Yes, team changes are allowed until the team formation deadline.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  What platform will be used for the event?
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  The event will be conducted at Silver Oak University campus with hybrid participation options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

<style jsx>{`
  .tooltip {
    position: absolute;
    bottom: -2.5rem;
    left: 50%;
    transform: translateX(-50%) translateY(10px);
    background-color: #1f2937;
    color: white;
    padding: 6px 10px;
    border-radius: 8px;
    font-size: 0.875rem;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
  }

  .group:hover .tooltip {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  @keyframes flap {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(12deg); }
    75% { transform: rotate(-12deg); }
  }

  @keyframes fb-bounce {
    0%   { transform: scale(1); }
    50%  { transform: scale(1.2); }
    100% { transform: scale(1); }
  }

  @keyframes ig-sparkle {
    0%, 100% { transform: scale(1) rotate(0deg); filter: hue-rotate(0deg); }
    50% { transform: scale(1.3) rotate(5deg); filter: hue-rotate(60deg); }
  }

  @keyframes li-pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.15); }
  }

  .animate-flap {
    animation: flap 0.6s ease-in-out infinite;
  }
  .animate-fb-bounce {
    animation: fb-bounce 0.4s ease-in-out;
  }
  .animate-ig-sparkle {
    animation: ig-sparkle 0.7s ease-in-out infinite;
  }
  .animate-li-pulse {
    animation: li-pulse 0.6s ease-in-out;
  }
`}</style>

    </div>
  )
}
