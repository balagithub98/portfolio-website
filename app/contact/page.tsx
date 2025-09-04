import { ContactForm } from '@/components/contact/contact-form'
import { ContactInfo } from '@/components/contact/contact-info'
import { ContactMap } from '@/components/contact/contact-map'
import { generateMetadata as generatePageMetadata } from '@/lib/utils'

export const metadata = generatePageMetadata({
  title: 'Contact Us - Get Your Free Website Quote',
  description: 'Ready to transform your business? Contact us for a free consultation and website quote. We respond within 24 hours.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ready to transform your business? Get in touch with us for a free consultation and quote.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <ContactForm />
            <div className="space-y-12">
              <ContactInfo />
              <ContactMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
