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
            E-Cell Ignite Ideathon: Where bold ideas turn into real-world impact. Experience 48 hours of creativity, mentorship, and innovation.
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
              Our mission is to build a platform where bright minds unite to solve real-world challenges, driving entrepreneurship and technological progress among students and young professionals.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-2xl">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="text-purple-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
              To become the leading innovation platform that turns ideas into impactful solutions, shaping the next generation of entrepreneurs and changemakers.
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
        </div>
      </section>
    </div>
  )
}
