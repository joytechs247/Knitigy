import './globals.css'

export const metadata = {
  title: {
    default: 'Knitigy - Get Important Paperwork Done Without Stress',
    template: '%s | Knitigy'
  },
  description: 'Buying property, changing your name, or need documents drafted? Knitigy helps you get paperwork done start to finish. Expert-reviewed. No upfront payment.',
  keywords: 'legal documents, property verification, will drafting, name change, affidavit, rental agreement, startup legal, Knitigy, document services, paperwork help',
  authors: [{ name: 'Knitigy Team' }],
  creator: 'Knitigy',
  publisher: 'Knitigy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://knitigy.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Knitigy - Get Important Paperwork Done Without Stress',
    description: 'Expert-reviewed document services without the running around. No upfront payment.',
    url: 'https://knitigy.com',
    siteName: 'Knitigy',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Knitigy - Professional Document Services',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Knitigy - Get Important Paperwork Done Without Stress',
    description: 'Expert-reviewed document services without the running around.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification here
    // google: 'your-google-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-58BFS8Z8');`
          }}
        />
        {/* End Google Tag Manager */}

        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17967111712"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17967111712');
            `
          }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Knitigy",
              "description": "Professional document preparation and verification services",
              "url": "https://knitigy.com",
              "logo": "https://knitigy.com/favicon.ico",
              "sameAs": [],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "help@knitigy.com",
                "contactType": "customer service"
              },
              "areaServed": "IN",
              "knowsAbout": [
                "Document Preparation",
                "Property Verification", 
                "Legal Documentation",
                "Will Drafting",
                "Rental Agreements",
                "Name Change Process"
              ]
            })
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-58BFS8Z8" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
          }}
        />
        {/* End Google Tag Manager (noscript) */}

        {children}
      </body>
    </html>
  )
}