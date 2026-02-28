export const metadata = {
  title: "Privacy Policy | Knitigya",
  description: "Privacy policy explaining how Knitigya collects and protects user data."
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        <h1 className="text-4xl font-bold text-primary-500">
          Privacy Policy
        </h1>

        <p className="text-gray-600">
          Effective Date: {new Date().toLocaleDateString('en-IN')}
        </p>

        <section className="space-y-4 text-gray-700">
          <h2 className="text-2xl font-semibold">1. Information We Collect</h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-3 border">Data Category</th>
                  <th className="p-3 border">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border">Name</td>
                  <td className="p-3 border">To identify and address your inquiry.</td>
                </tr>
                <tr>
                  <td className="p-3 border">Email Address</td>
                  <td className="p-3 border">To send updates or requested documents.</td>
                </tr>
                <tr>
                  <td className="p-3 border">Phone Number</td>
                  <td className="p-3 border">To contact you via call, SMS, or WhatsApp.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4 text-gray-700">
          <h2 className="text-2xl font-semibold">2. Use of Data</h2>
          <p>
            We use collected data strictly for service delivery, responding to
            inquiries, and improving user experience.
          </p>
        </section>

        <section className="space-y-4 text-gray-700">
          <h2 className="text-2xl font-semibold">3. No Third-Party Sharing</h2>
          <p>
            We do not sell, trade, or share personal information with
            third-party marketing agencies.
          </p>
        </section>

        <section className="space-y-4 text-gray-700">
          <h2 className="text-2xl font-semibold">4. Data Retention</h2>
          <p>
            Data is retained only as long as necessary to fulfill the purpose
            for which it was collected. Upon request, data can be deleted earlier.
          </p>
        </section>

        <section className="space-y-4 text-gray-700">
          <h2 className="text-2xl font-semibold">5. Your Rights</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Right to Access your data</li>
            <li>Right to Correction</li>
            <li>Right to Erasure</li>
            <li>Right to Withdraw Consent</li>
          </ul>
        </section>

        <section className="space-y-4 text-gray-700">
          <h2 className="text-2xl font-semibold">6. Security Measures</h2>
          <p>
            We implement reasonable technical safeguards to protect
            your data from unauthorized access.
          </p>
        </section>

        <section className="space-y-4 text-gray-700">
          <h2 className="text-2xl font-semibold">7. Grievance Officer</h2>
          <p>
            Name: Nikhil Sharma <br />
            Email: nikhilks.981@gmail.com <br />
            Location: Delhi NCR, Uttar Pradesh, India
          </p>
        </section>

      </div>
    </main>
  )
}