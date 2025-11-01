import Header from '../components/Header'
import Hero from '../components/Hero'
import UseCases from '../components/UseCases'
import TrustSection from '../components/TrustSection'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Get Important Paperwork Done Without Stress | Knitigy',
  description: 'Knitigy helps you get property verification, will drafting, rental agreements, and document preparation done start to finish. Expert-reviewed. No upfront payment.',
  openGraph: {
    title: 'Get Important Paperwork Done Without Stress | Knitigy',
    description: 'Expert-reviewed document services without the running around. No upfront payment.',
  },
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <UseCases />
      <TrustSection />
      <ContactForm />
      <Footer />
    </div>
  )
}