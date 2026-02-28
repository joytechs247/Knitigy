export const metadata = {
  title: "Terms and Conditions | Knitigya",
  description: "Read the terms and conditions governing the use of Knitigya services."
}

export default function TermsPage() {
  return (
    <main className="bg-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        <h1 className="text-4xl font-bold text-primary-500">
          Terms and Conditions
        </h1>

        <p className="text-gray-600">
          Last Updated: {new Date().toLocaleDateString('en-IN')}
        </p>

        <section className="space-y-4 text-gray-700">
          <h2 className="text-2xl font-semibold">1. Services Provided</h2>
          <p>
            Knitigya provides documentation assistance and support services including
            property documentation, certificate assistance, legal drafting support,
            business registration guidance, and related advisory services.
            Our website functions as an informational and lead-generation platform.
          </p>
        </section>

        <section className="space-y-4 text-gray-700">
          <h2 className="text-2xl font-semibold">2. No User Accounts</h2>
          <p>
            This website does not offer account creation or login functionality.
            No user accounts are created or maintained.
          </p>
        </section>

        <section className="space-y-4 text-gray-700">
          <h2 className="text-2xl font-semibold">3. Collection of Information</h2>
          <p>
            We collect personal information voluntarily submitted through our forms,
            including:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Name</li>
            <li>Phone Number</li>
            <li>Email Address</li>
            <li>Service Requirement Details</li>
          </ul>
          <p>
            By submitting the form, you consent to being contacted via call,
            email, or WhatsApp regarding your inquiry.
          </p>
        </section>

        <section className="space-y-4 text-gray-700">
          <h2 className="text-2xl font-semibold">4. Use of Data</h2>
          <p>
            Your information is used solely to provide the services requested
            and for communication regarding your inquiry. We do not sell,
            rent, or share your personal data with third parties.
          </p>
        </section>

        <section className="space-y-4 text-gray-700">
          <h2 className="text-2xl font-semibold">5. Intellectual Property</h2>
          <p>
            All website content, including text, design, graphics, and logos,
            is the property of Knitigya and protected under Indian intellectual property laws.
            Unauthorized use is prohibited.
          </p>
        </section>

        <section className="space-y-4 text-gray-700">
          <h2 className="text-2xl font-semibold">6. Limitation of Liability</h2>
          <p>
            The website is provided on an “as-is” basis. Knitigya shall not
            be liable for any indirect or incidental damages arising from
            the use of this website.
          </p>
        </section>

        <section className="space-y-4 text-gray-700">
          <h2 className="text-2xl font-semibold">7. Governing Law</h2>
          <p>
            These terms are governed by the laws of India. Any disputes shall
            fall under the jurisdiction of courts in Delhi NCR, Uttar Pradesh.
          </p>
        </section>

        <section className="space-y-4 text-gray-700">
          <h2 className="text-2xl font-semibold">8. Changes to Terms</h2>
          <p>
            We reserve the right to update these terms at any time.
            Changes become effective immediately upon posting.
          </p>
        </section>

        <section className="space-y-4 text-gray-700">
          <h2 className="text-2xl font-semibold">9. Contact Information</h2>
          <p>
            Email: nikhilks.981@gmail.com <br />
            Location: Delhi NCR, Uttar Pradesh, India
          </p>
        </section>

      </div>
    </main>
  )
}