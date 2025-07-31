import { Lightbulb, Target, Users, Award, Rocket, Star } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container-max px-2 sm:px-4 md:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="heading-xl">
              About <span className="text-gradient">Ideathon 2025</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              The Ecell Ignite Ideathon is where innovation meets opportunity. Join us for 48 hours of intensive
              collaboration, mentorship, and groundbreaking solution development.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="glass-effect p-8 rounded-2xl">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Target className="text-blue-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To create a platform where innovative minds converge to solve real-world problems, fostering
                entrepreneurship and technological advancement among students and young professionals.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-2xl">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="text-purple-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be the premier innovation platform that transforms ideas into impactful solutions, creating the next
                generation of entrepreneurs and change-makers.
              </p>
            </div>
          </div>

          {/* What Makes Us Different */}
          <div className="glass-effect p-12 rounded-3xl mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              What Makes Us <span className="text-gradient">Different</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Expert Mentorship</h3>
                <p className="text-gray-400">
                  Get guidance from industry veterans, successful entrepreneurs, and technology leaders.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Rocket className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Real Impact</h3>
                <p className="text-gray-400">
                  Focus on solutions that address genuine problems and create meaningful change.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Star className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Post-Event Support</h3>
                <p className="text-gray-400">
                  Continued mentorship, incubation opportunities, and investor connections.
                </p>
              </div>
            </div>
          </div>

          {/* Event Journey */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-effect p-8 rounded-2xl text-center">
                <div className="text-6xl font-bold text-gradient mb-4">2022</div>
                <h3 className="text-xl font-semibold text-white mb-3">The Beginning</h3>
                <p className="text-gray-400">Started with 100 participants and big dreams of fostering innovation.</p>
              </div>

              <div className="glass-effect p-8 rounded-2xl text-center">
                <div className="text-6xl font-bold text-gradient mb-4">2023</div>
                <h3 className="text-xl font-semibold text-white mb-3">Growth</h3>
                <p className="text-gray-400">Expanded to 300 participants with industry partnerships and mentorship.</p>
              </div>

              <div className="glass-effect p-8 rounded-2xl text-center">
                <div className="text-6xl font-bold text-gradient mb-4">2025</div>
                <h3 className="text-xl font-semibold text-white mb-3">Innovation Hub</h3>
                <p className="text-gray-400">500+ participants, ₹2.5L prize pool, and startup incubation support.</p>
              </div>
            </div>
          </div>

          {/* Key Statistics */}
          <div className="glass-effect p-12 rounded-3xl">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Impact <span className="text-gradient">Statistics</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <Award className="text-blue-400 mx-auto mb-4" size={40} />
                <div className="text-3xl font-bold text-gradient mb-2">50+</div>
                <div className="text-gray-400">Awards Given</div>
              </div>
              <div className="text-center">
                <Users className="text-purple-400 mx-auto mb-4" size={40} />
                <div className="text-3xl font-bold text-gradient mb-2">900+</div>
                <div className="text-gray-400">Total Participants</div>
              </div>
              <div className="text-center">
                <Lightbulb className="text-cyan-400 mx-auto mb-4" size={40} />
                <div className="text-3xl font-bold text-gradient mb-2">200+</div>
                <div className="text-gray-400">Ideas Pitched</div>
              </div>
              <div className="text-center">
                <Rocket className="text-green-400 mx-auto mb-4" size={40} />
                <div className="text-3xl font-bold text-gradient mb-2">25+</div>
                <div className="text-gray-400">Startups Launched</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
