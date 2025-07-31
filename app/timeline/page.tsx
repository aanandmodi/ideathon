"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import {
  Calendar,
  Users,
  Lightbulb,
  Trophy,
  Rocket,
  Star,
  Clock,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const timelineEvents = [
  {
    id: 1,
    title: "Registration & Welcome, Kit Distribution",
    date: "August 28, 2025",
    time: "09:30 AM – 10:30 AM",
    description:
      "Kick off the event by checking in, receiving your kit, and getting ready for an exciting day!",
    icon: Calendar,
    color: "from-purple-500 to-blue-500",
    phase: "Day 1",
  },
  {
    id: 2,
    title: "Inauguration Ceremony & Keynote Address",
    date: "August 28, 2025",
    time: "11:00 AM – 11:30 AM",
    description:
      "Be inspired by our keynote speakers as we officially open the event.",
    icon: Rocket,
    color: "from-blue-500 to-cyan-500",
    phase: "Day 1",
  },
  {
    id: 3,
    title: "Welcome, Event Briefing + Judging Criteria Explanation",
    date: "August 28, 2025",
    time: "11:30 AM – 12:30 PM",
    description:
      "Get briefed on the event flow and understand how your work will be evaluated.",
    icon: Lightbulb,
    color: "from-cyan-500 to-green-500",
    phase: "Day 1",
  },
  {
    id: 4,
    title: "Teams Showcase Working Prototypes (Expo-Style Evaluation)",
    date: "August 28, 2025",
    time: "12:00 PM – 01:00 PM",
    description:
      "Teams present their working prototypes for initial feedback and evaluation.",
    icon: Star,
    color: "from-green-500 to-yellow-500",
    phase: "Day 1",
  },
  {
    id: 5,
    title: "Lunch Break",
    date: "August 28, 2025",
    time: "01:00 PM – 02:00 PM",
    description: "Take a break and network with fellow participants over lunch.",
    icon: Users,
    color: "from-yellow-500 to-orange-500",
    phase: "Day 1",
  },
  {
    id: 6,
    title: "Prototype Evaluation Round 2",
    date: "August 28, 2025",
    time: "02:00 PM – 03:30 PM",
    description: "A second round of evaluation for your improved prototypes.",
    icon: Trophy,
    color: "from-orange-500 to-red-500",
    phase: "Day 1",
  },
  {
    id: 7,
    title: "Day 1 Wrap-up + Announcement of Finalists",
    date: "August 28, 2025",
    time: "03:30 PM – 04:30 PM",
    description:
      "End of Day 1 with the announcement of teams moving to the final round.",
    icon: Calendar,
    color: "from-red-500 to-purple-500",
    phase: "Day 1",
  },
  {
    id: 8,
    title: "Finalist Check-in & Setup",
    date: "August 29, 2025",
    time: "09:30 AM – 10:30 AM",
    description: "Finalist teams check in and set up for the final day.",
    icon: Users,
    color: "from-purple-500 to-blue-500",
    phase: "Day 2",
  },
  {
    id: 9,
    title: "Inauguration Ceremony & Keynote Address",
    date: "August 29, 2025",
    time: "11:00 AM – 11:30 AM",
    description: "Start Day 2 with a fresh keynote and opening remarks.",
    icon: Rocket,
    color: "from-blue-500 to-cyan-500",
    phase: "Day 2",
  },
  {
    id: 10,
    title: "Guest Session 1: How to Pitch Your Startup Idea Effectively",
    date: "August 29, 2025",
    time: "11:30 AM – 12:30 PM",
    description: "Learn the art of pitching from industry experts.",
    icon: Lightbulb,
    color: "from-cyan-500 to-green-500",
    phase: "Day 2",
  },
  {
    id: 11,
    title: "Guest Session 2: How to Pitch Your Startup Idea Effectively",
    date: "August 29, 2025",
    time: "12:00 PM – 01:00 PM",
    description: "A second session to further hone your pitching skills.",
    icon: Lightbulb,
    color: "from-green-500 to-yellow-500",
    phase: "Day 2",
  },
  {
    id: 12,
    title: "Final Pitch Presentations & Live Demos (8–10 minutes per team)",
    date: "August 29, 2025",
    time: "01:00 PM – 02:00 PM",
    description: "Finalists present their solutions and demos to the jury.",
    icon: Trophy,
    color: "from-yellow-500 to-orange-500",
    phase: "Day 2",
  },
  {
    id: 13,
    title: "Lunch Break",
    date: "August 29, 2025",
    time: "02:00 PM – 03:30 PM",
    description: "Enjoy lunch and network with other teams and guests.",
    icon: Users,
    color: "from-orange-500 to-red-500",
    phase: "Day 2",
  },
  {
    id: 14,
    title: "Jury Deliberation & Networking",
    date: "August 29, 2025",
    time: "03:30 PM – 04:30 PM",
    description:
      "Jury deliberates while participants network and await results.",
    icon: Star,
    color: "from-red-500 to-purple-500",
    phase: "Day 2",
  },
  {
    id: 15,
    title: "Prize Distribution & Closing Ceremony",
    date: "August 29, 2025",
    time: "04:30 PM – 05:00 PM",
    description:
      "Celebrate the winners and wrap up the event with a closing ceremony.",
    icon: Trophy,
    color: "from-purple-500 to-blue-500",
    phase: "Day 2",
  },
]

export default function TimelinePage() {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate")
            }, index * 300)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    const timelineItems = document.querySelectorAll(".timeline-event")
    timelineItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      <section className="section-padding pt-32">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="heading-xl">
              Event <span className="text-gradient">Timeline</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Your journey from idea to innovation. Follow our carefully
              crafted timeline designed to maximize learning, networking, and
              creative output over 48 hours of intensive collaboration.
            </p>
            <div className="flex items-center justify-center space-x-4 text-gray-400">
              <Clock size={20} />
              <span>48 Hours of Innovation</span>
              <span>•</span>
              <span>7 Key Milestones</span>
              <span>•</span>
              <span>Endless Possibilities</span>
            </div>
          </div>

          {/* Grouped Timeline */}
          <div ref={timelineRef} className="mb-20">
            {["Day 1", "Day 2"].map((day) => {
              const events = timelineEvents.filter(
                (event) => event.phase === day,
              )

              return (
                <div key={day} className="mb-24">
                  <h2 className="text-4xl font-bold text-white text-center mb-12 border-b border-gray-700 pb-4">
                    <span className="text-gradient">{day}</span>
                  </h2>

                  <div className="timeline-modern">
                    <div className="timeline-line" />
                    <div className="timeline-line-active" />

                    {events.map((event, index) => {
                      const IconComponent = event.icon
                      const globalIndex = timelineEvents.findIndex(
                        (e) => e.id === event.id,
                      )

                      return (
                        <div key={event.id} className="timeline-event">
                          <div className="timeline-node">
                            <IconComponent className="text-white" size={32} />
                          </div>
                          <div className="timeline-content">
                            <div className="mb-4">
                              <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold mb-3">
                                {event.phase}
                              </span>
                              <div className="flex items-center space-x-3 text-gray-400 mb-2">
                                <Calendar size={16} />
                                <span className="font-semibold">
                                  {event.date}
                                </span>
                                <span>•</span>
                                <Clock size={16} />
                                <span>{event.time}</span>
                              </div>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4 hover:text-gradient transition-all duration-300">
                              {event.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-lg">
                              {event.description}
                            </p>
                            <div className="mt-6 flex items-center space-x-2">
                              <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                                <div
                                  className={`h-full bg-gradient-to-r ${event.color} rounded-full`}
                                  style={{
                                    width: `${
                                      ((globalIndex + 1) /
                                        timelineEvents.length) *
                                      100
                                    }%`,
                                  }}
                                />
                              </div>
                              <span className="text-gray-400 text-sm font-semibold">
                                {globalIndex + 1}/{timelineEvents.length}
                              </span>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Guidelines and CTA (unchanged, keep existing) */}
          {/* ...Add your existing Guidelines and CTA content here */}
        </div>
      </section>
    </div>
  )
}
