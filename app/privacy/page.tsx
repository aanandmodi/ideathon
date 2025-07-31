export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-xl text-gray-300">Last updated: January 2025</p>
        </section>

        <div className="glass-effect p-8 rounded-2xl space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
            <p className="text-gray-300 mb-4">
              We collect information you provide directly to us, such as when you register for the Ideathon, contact us,
              or participate in our events.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Name and contact information</li>
              <li>Educational background</li>
              <li>Team formation preferences</li>
              <li>Project submissions and presentations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Organize and conduct the Ideathon</li>
              <li>Facilitate team formation and networking</li>
              <li>Communicate event updates and information</li>
              <li>Evaluate submissions and award prizes</li>
              <li>Improve our future events</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
            <p className="text-gray-300 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your
              consent, except as described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
            <p className="text-gray-300 mb-4">
              We implement appropriate security measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:privacy@ecellignite.in" className="text-purple-400 hover:text-purple-300">
                privacy@ecellignite.in
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
