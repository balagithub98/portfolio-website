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
      <div className="py-24 sm:py-32 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-indigo-300/20 to-purple-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-pink-300/20 to-rose-300/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-purple-300/15 to-indigo-300/15 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Contact</span> Us
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
