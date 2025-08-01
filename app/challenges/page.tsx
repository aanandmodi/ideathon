"use client"

import { useState } from "react"
import {
  Shield,
  Wrench,
  Leaf,
  Lock,
  HeartPulse,
  Sparkles,
  X,
} from "lucide-react"

const problemTracks = [
  {
    track: "Defence",
    icon: Shield,
    color: "from-blue-600 to-cyan-500",
    problems: [
      {
        title: "Anti-Drone System",
        description: `Drones are being misused for spying, smuggling, and threats. Build an affordable system that can detect and stop unauthorized drones using tech like radar, AI, or computer vision.`,
      },
      {
        title: "Better Ion Thrusters",
        description: `Ion thrusters are super-efficient engines for space travel but need upgrades. Suggest ways to make them stronger, longer-lasting, and more efficient for satellites or space missions.`,
      },
    ],
  },
  {
    track: "Engineering",
    icon: Wrench,
    color: "from-purple-600 to-pink-500",
    problems: [
      {
        title: "Smarter Data Sharing",
        description: `Create a faster, safer way to send or compress data so it works well on many devices without using too much bandwidth.`,
      },
      {
        title: "Air Conditioning Without a Compressor",
        description: `Normal ACs use a lot of electricity because of compressors. Design a cooling system that works without a compressor and uses less energy.`,
      },
      {
        title: "Safe Fast Charging",
        description: `Fast charging often damages batteries or causes overheating. Build a charging system that’s both fast and safe for EVs or mobile devices.`,
      },
      {
        title: "Payments Without Internet",
        description: `In remote places with no internet, digital payments are hard. Make a secure system that works offline using Bluetooth, NFC, or similar tech.`,
      },
      {
        title: "Li-Fi",
        description: `Wi-Fi has limits in speed and security. Create a system that uses light (Li-Fi) for super-fast and safe data transfer useful in hospitals, airplanes, or submarines.`,
      },
      {
        title: "Solid-State Batteries for Everyone",
        description: `Solid-state batteries are better but hard to mass-produce. Find ways to make them affordable and practical for electric vehicles and gadgets.`,
      },
      {
        title: "Better Electric Motors",
        description: `Design an advanced motor that wastes less energy, produces less heat, and is affordable — perfect for EVs or industries.`,
      },
    ],
  },
  {
    track: "Sustainability",
    icon: Leaf,
    color: "from-green-600 to-lime-500",
    problems: [
      {
        title: "Clean Energy Breakthroughs",
        description: `Find new ways to produce, store, or share solar, wind, or hybrid energy so it’s more efficient, cheap, and scalable.`,
      },
      {
        title: "Plastic Alternatives",
        description: `Invent a material to replace single-use plastic — it should be biodegradable, cost-effective, and easy to produce in large amounts.`,
      },
      {
        title: "Stronger, Lighter Materials",
        description: `Create next-gen materials that are light, durable, and eco-friendly for use in cars, planes, and buildings.`,
      },
      {
        title: "Disease Prediction from Climate Change",
        description: `Build a system that predicts disease outbreaks by studying how climate changes affect health, helping doctors prepare early.`,
      },
    ],
  },
  {
    track: "Cybersecurity & Tech",
    icon: Lock,
    color: "from-yellow-500 to-orange-500",
    problems: [
      {
        title: "Real-Time Scam Call Detection",
        description: `Voice phishing (fake calls) is rising. Design an app or system that uses AI to detect and warn people about scam calls instantly.`,
      },
      {
        title: "Detecting Deepfakes & Online Scams",
        description: `Make a tool that can spot fake videos, photos, or scam content online to help people trust what they see.`,
      },
      {
        title: "Indoor GPS Using Wi-Fi",
        description: `GPS doesn’t work indoors. Build a Wi-Fi-based system that helps people navigate inside malls, hospitals, or large buildings.`,
      },
    ],
  },
  {
    track: "Health & Biotechnology",
    icon: HeartPulse,
    color: "from-pink-600 to-rose-500",
    problems: [
      {
        title: "Brain-Controlled Tech (BCI)",
        description: `Develop an affordable brain-computer interface tool — for example, devices controlled by thoughts or systems that help patients communicate and control technology.`,
      },
      {
        title: "Early Cancer Detection",
        description: `Create a system that detects cancer early using AI, genetics, or biomarkers and suggests personalized treatment.`,
      },
    ],
  },
  {
    track: "Open Innovation",
    icon: Sparkles,
    color: "from-indigo-500 to-purple-600",
    problems: [
      {
        title: "Your Unique Idea",
        description: `Have a game-changing idea that doesn’t fit into the categories above? This is your chance to pitch it, whether it’s a tech invention, a social innovation, or a creative prototype.`,
      },
    ],
  },
]

export default function EventsPage() {
  const [selectedTrack, setSelectedTrack] = useState<any>(null)

  const openModal = (track: any) => setSelectedTrack(track)
  const closeModal = () => setSelectedTrack(null)

  return (
    <div className="min-h-screen relative">
      <section className="section-padding pt-32">
        <div className="container-max px-4">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="heading-xl">
              Problem <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-xl text-gray-300">
              Choose a track to dive into real-world challenges. Pick your domain and start solving what matters most.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {problemTracks.map((track, index) => {
              const Icon = track.icon
              return (
                <div
                  key={index}
                  onClick={() => openModal(track)}
                  className="cursor-pointer rounded-2xl p-6 flex flex-col justify-between border border-white/10 bg-white/5 backdrop-blur-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${track.color} flex items-center justify-center`}
                    >
                      <Icon className="text-white" size={20} />
                    </div>
                    <h2 className="text-xl font-bold text-white">{track.track}</h2>
                  </div>
                  <p className="text-sm text-blue-400 mt-8 text-right">Click to view details →</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {selectedTrack && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div
            className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl max-w-3xl w-full p-6 relative overflow-y-auto max-h-[90vh] text-white shadow-2xl animate-fadeZoom"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-red-400"
            >
              <X size={20} />
            </button>
            <div className="mb-4 flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-lg bg-gradient-to-r ${selectedTrack.color} flex items-center justify-center`}
              >
                <selectedTrack.icon className="text-white" size={18} />
              </div>
              <h3 className="text-2xl font-bold text-white">{selectedTrack.track}</h3>
            </div>

            <div className="space-y-4">
              {selectedTrack.problems.map((prob: any, i: number) => (
                <div key={i} className="flex gap-2">
                  <span className="text-orange-400 text-xl leading-6">›</span>
                  <div>
                    <h4 className="text-lg font-semibold">{prob.title}</h4>
                    <p className="text-gray-300 text-sm">{prob.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeZoom {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeZoom {
          animation: fadeZoom 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
