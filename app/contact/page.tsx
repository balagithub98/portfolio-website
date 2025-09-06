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
      <div className="py-24 sm:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h1 className="text-display text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-body text-muted-foreground leading-relaxed">
              Ready to transform your business? Get in touch with us for a free consultation and quote.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div className="space-y-8">
              <ContactInfo />
              <ContactMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
