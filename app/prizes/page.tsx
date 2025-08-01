import Link from "next/link"
import { Trophy, Award, Gift, Star, Zap, Crown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const prizes = [
  {
    position: "1st Prize",
    amount: "₹1,00,000",
    icon: Crown,
    color: "from-yellow-400 to-orange-500",
    benefits: [
      "Cash Prize of ₹1,00,000",
      "Incubation Support",
      "Mentorship Program",
      "Industry Networking",
      "Certificate of Excellence",
    ],
  },
  {
    position: "2nd Prize",
    amount: "₹75,000",
    icon: Trophy,
    color: "from-gray-300 to-gray-500",
    benefits: [
      "Cash Prize of ₹75,000",
      "Mentorship Program",
      "Industry Networking",
      "Certificate of Achievement",
      "Startup Resources",
    ],
  },
  {
    position: "3rd Prize",
    amount: "₹50,000",
    icon: Award,
    color: "from-orange-400 to-red-500",
    benefits: [
      "Cash Prize of ₹50,000",
      "Industry Networking",
      "Certificate of Recognition",
      "Startup Resources",
      "Alumni Network Access",
    ],
  },
]

const specialPrizes = [
  {
    title: "Best Innovation",
    description: "Most creative and groundbreaking solution",
    prize: "₹25,000 + Goodies",
    icon: Zap,
  },
  {
    title: "Best Presentation",
    description: "Most compelling and well-delivered pitch",
    prize: "₹15,000 + Goodies",
    icon: Star,
  },
  {
    title: "People's Choice",
    description: "Voted by fellow participants",
    prize: "₹10,000 + Goodies",
    icon: Gift,
  },
]

export default function PrizesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="heading-xl">
              Amazing <span className="text-gradient">Prizes</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
            Win from a prize pool worth ₹2.5 Lakhs+ plus get exclusive mentorship, incubation support, and powerful industry connections.
            </p>
          </div>

          {/* Main Prizes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {prizes.map((prize, index) => {
              const IconComponent = prize.icon
              return (
                <div
                  key={index}
                  className={`glass-effect p-8 rounded-2xl hover-glow relative overflow-hidden ${
                    index === 0 ? "md:scale-110 md:z-10" : ""
                  }`}
                >
                  {index === 0 && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-500" />
                  )}

                  <div className="text-center">
                    <div
                      className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${prize.color} flex items-center justify-center`}
                    >
                      <IconComponent className="text-white" size={40} />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">{prize.position}</h3>
                    <div className="text-4xl font-bold text-gradient mb-6">{prize.amount}</div>

                    <ul className="space-y-3 text-left">
                      {prize.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 rounded-full bg-purple-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Special Prizes */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Special <span className="text-gradient">Categories</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specialPrizes.map((prize, index) => {
                const IconComponent = prize.icon
                return (
                  <div key={index} className="glass-effect p-8 rounded-2xl hover-glow">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-white">{prize.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{prize.description}</p>
                    <div className="text-lg font-semibold text-gradient">{prize.prize}</div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Prize Pool Breakdown */}
          <div className="glass-effect p-12 rounded-3xl mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Total Prize Pool: <span className="text-gradient">₹2.5 Lakhs+</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient mb-2">₹1,00,000</div>
                <div className="text-white text-sm">First Prize</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient mb-2">₹75,000</div>
                <div className="text-white text-sm">Second Prize</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient mb-2">₹50,000</div>
                <div className="text-white text-sm">Third Prize</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient mb-2">₹50,000+</div>
                <div className="text-white text-sm">Special Prizes</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
