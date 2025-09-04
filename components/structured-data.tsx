export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "hyybuu",
    "description": "Professional web design, development, and marketing services",
    "url": process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    "logo": `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "contact@yourdomain.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Business Street",
      "addressLocality": "City",
      "addressRegion": "State",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://facebook.com/hyybuu",
      "https://twitter.com/hyybuu",
      "https://linkedin.com/company/hyybuu",
      "https://instagram.com/hyybuu"
    ],
    "service": [
      {
        "@type": "Service",
        "name": "Web Design",
        "description": "Custom web design services"
      },
      {
        "@type": "Service", 
        "name": "Web Development",
        "description": "Full-stack web development services"
      },
      {
        "@type": "Service",
        "name": "Digital Marketing",
        "description": "SEO and digital marketing services"
      }
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "hyybuu",
    "url": process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    "description": "Professional web design, development, and marketing services",
    "publisher": {
      "@type": "Organization",
      "name": "hyybuu"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  )
}
