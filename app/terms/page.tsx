export default function TermsPage() {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Terms of <span className="text-gradient">Service</span>
          </h1>
          <p className="text-xl text-gray-300">Last updated: January 2025</p>
        </section>

        <div className="glass-effect p-8 rounded-2xl space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
            <p className="text-gray-300">
              By participating in the Ecell Ignite Ideathon 2025, you agree to be bound by these Terms of Service and
              all applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Eligibility</h2>
            <p className="text-gray-300 mb-4">To participate in the Ideathon, you must:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Be currently enrolled as a student in any recognized educational institution</li>
              <li>Form teams of 2-4 members</li>
              <li>Agree to participate for the full duration of the event</li>
              <li>Submit original work and ideas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
            <p className="text-gray-300 mb-4">
              Participants retain ownership of their ideas and submissions. However, by participating, you grant Ecell
              Ignite the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Document and photograph the event for promotional purposes</li>
              <li>Share anonymized insights from submissions for educational purposes</li>
              <li>Feature winning projects in our marketing materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Code of Conduct</h2>
            <p className="text-gray-300 mb-4">All participants must:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Treat all participants, organizers, and mentors with respect</li>
              <li>Submit original work and properly attribute any external resources</li>
              <li>Follow all event guidelines and deadlines</li>
              <li>Maintain professional behavior throughout the event</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Prizes and Awards</h2>
            <p className="text-gray-300">
              Prize distribution is subject to successful completion of the event requirements. Winners will be selected
              by our judging panel, and their decisions are final.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
            <p className="text-gray-300">
              For questions about these terms, please contact us at{" "}
              <a href="mailto:legal@ecellignite.in" className="text-purple-400 hover:text-purple-300">
                legal@ecellignite.in
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
