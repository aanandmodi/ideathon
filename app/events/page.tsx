"use client"

import { useState } from "react"
import {
  Lightbulb,
  Shield,
  Wrench,
  Leaf,
  Lock,
  HeartPulse,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

const problemTracks = [
  {
    track: "Defence",
    icon: Shield,
    color: "from-blue-600 to-cyan-500",
    problems: [
      {
        title: "Anti-Drone System",
        description: `The misuse of commercial drones for surveillance, smuggling, and potential threats is on the rise. Design an affordable, scalable anti-drone solution capable of detecting, identifying, and neutralizing unauthorized drones in restricted airspace using technologies such as radar, RF analysis, AI, or computer vision.`,
      },
      {
        title: "Enhancement of Ion Thruster Technology",
        description: `Ion thrusters offer fuel-efficient propulsion for space missions but require improvements for broader application. Propose enhancements in design or technology that improve thrust output, energy efficiency, or operational lifespan, suitable for satellites or interplanetary missions.`,
      },
    ],
  },
  {
    track: "Engineering",
    icon: Wrench,
    color: "from-purple-600 to-pink-500",
    problems: [
      {
        title: "Efficient Data Compression or Transfer Protocol",
        description: `Design a protocol for efficient data compression or transfer that maximizes speed, security, and bandwidth usage while ensuring scalability across devices and platforms.`,
      },
      {
        title: "Compressor-less Air Conditioner",
        description: `Traditional ACs are power-hungry due to compressor-based systems. Innovate a sustainable air-cooling solution that eliminates the compressor while maintaining effective cooling and significantly lowering energy consumption.`,
      },
      {
        title: "Safe Fast Charging Technology",
        description: `Fast charging often leads to thermal hazards and battery degradation. Develop a smart charging protocol or hardware for EVs or mobile devices that ensures rapid charging while protecting battery health and enhancing energy efficiency.`,
      },
      {
        title: "Offline Payment Transfer System",
        description: `Digital payments are limited in remote areas lacking internet. Design a secure, reliable payment transfer system that functions offline using technologies like Bluetooth, USSD, NFC, or mesh networking.`,
      },
      {
        title: "Li-Fi Communication System",
        description: `Wi-Fi faces limitations in bandwidth and security. Create a Li-Fi-based data transmission prototype that uses light for high-speed, secure communication, especially in environments like hospitals, aircraft, or submarines.`,
      },
      {
        title: "Commercialization of Solid-State Batteries",
        description: `Solid-state batteries are promising but face scalability issues. Innovate a reliable method to commercialize solid-state batteries for mainstream consumer electronics and electric vehicles.`,
      },
      {
        title: "Hybrid or Advanced Electric Motors",
        description: `There’s a growing need for motors that offer high efficiency with minimal heat loss. Design a hybrid electric motor or enhance existing induction/BLDC motor systems to improve torque, thermal management, and affordability for EV or industrial use.`,
      },
    ],
  },
  {
    track: "Sustainability",
    icon: Leaf,
    color: "from-green-600 to-lime-500",
    problems: [
      {
        title: "Clean Energy Innovation (Solar, Wind, Hybrid)",
        description: `Challenges in renewable energy adoption include storage and grid integration. Propose a novel clean energy system or component—generation, storage, or transmission—that maximizes efficiency, scalability, and affordability.`,
      },
      {
        title: "Eco-Friendly Alternative to Plastic",
        description: `Plastic pollution is escalating. Develop a biodegradable or recyclable material that can replace single-use plastics while maintaining durability, low cost, and large-scale production viability.`,
      },
      {
        title: "Next-Gen Composite Materials",
        description: `Aerospace, automotive, and construction industries require lightweight yet strong materials. Propose an advanced composite with improved mechanical, thermal, or sustainable characteristics for high-performance applications.`,
      },
      {
        title: "Climate-Disease Prediction Model",
        description: `Climate change is influencing disease patterns. Build a predictive system or model that uses environmental and biological data to forecast disease outbreaks and support public health decisions.`,
      },
    ],
  },
  {
    track: "Cybersecurity & Tech",
    icon: Lock,
    color: "from-yellow-500 to-orange-500",
    problems: [
      {
        title: "Real-Time Vishing Attack Detection",
        description: `Voice phishing (vishing) scams are increasingly deceptive. Create a system or app that uses AI, voice analysis, and NLP to detect and warn users in real-time about potential scam calls.`,
      },
      {
        title: "Deepfake & Scam Content Detection",
        description: `Deepfakes and digital scams are eroding online trust. Design a tool or browser extension that can detect manipulated content and identify scams in real-time using AI, forensic analysis, or metadata scanning.`,
      },
      {
        title: "Wi-Fi Based Indoor Location System",
        description: `GPS doesn’t perform well indoors. Build a location-tracking system that uses Wi-Fi signals (RSSI, trilateration, etc.) for accurate room-level navigation in malls, hospitals, or industrial settings.`,
      },
    ],
  },
  {
    track: "Health & Biotechnology",
    icon: HeartPulse,
    color: "from-pink-600 to-rose-500",
    problems: [
      {
        title: "BCI-Based Applications (Brain-Computer Interface)",
        description: `BCI can transform assistive tech and health monitoring. Develop a practical and affordable BCI application—such as mind-controlled devices, neurofeedback systems, or accessibility tools—that’s user-friendly and impactful.`,
      },
      {
        title: "Early Detection & Personalized Cancer Diagnosis",
        description: `Early detection is key to improving cancer outcomes. Create a diagnostic tool or system using AI, biomarkers, or genomics to identify early-stage cancer and personalize treatment recommendations.`,
      },
    ],
  },
  {
    track: "Open Innovation",
    icon: Sparkles,
    color: "from-indigo-500 to-purple-600",
    problems: [
      {
        title: "Your Unique Innovation",
        description: `Have a groundbreaking idea that doesn’t fit into a defined category? This is your space. Whether it’s a social innovation, breakthrough tech prototype, or creative hardware-software integration, pitch your unique solution that solves a real-world problem with originality and impact.`,
      },
    ],
  },
]

export default function EventsPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="heading-xl">
              Problem <span className="text-gradient">Statements</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Click on a track to explore detailed problem statements categorized by domain. Solve what matters most.
            </p>
          </div>

          {/* Accordion-style Tracks */}
          <div className="space-y-8">
            {problemTracks.map((track, index) => {
              const Icon = track.icon
              const isOpen = index === activeIndex
              return (
                <div key={track.track} className="glass-effect rounded-2xl hover-glow transition-all duration-300">
                  <button
                    onClick={() => setActiveIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-r ${track.color} flex items-center justify-center`}
                      >
                        <Icon className="text-white" size={24} />
                      </div>
                      <h2 className="text-2xl font-bold text-white">{track.track}</h2>
                    </div>
                    {isOpen ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 space-y-6">
                      {track.problems.map((prob, i) => (
                        <div key={i}>
                          <h3 className="text-lg font-semibold text-white">{prob.title}</h3>
                          <p className="text-gray-300 leading-relaxed">{prob.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
