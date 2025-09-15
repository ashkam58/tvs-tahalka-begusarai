import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.example.com'),
  title: 'Tahalka TVS | Teghra Chowk, Begusarai',
  description: 'Browse TVS bikes, book test rides, and schedule service at Tahalka TVS — NH-28, Teghra Chowk, Begusarai. Simple site, solid deals.',
  keywords: ['TVS Begusarai', 'TVS showroom Begusarai', 'Tahalka TVS', 'TVS service Begusarai', 'TVS bikes Begusarai', 'Teghra Chowk'],
  openGraph: {
    title: 'Tahalka TVS — Begusarai',
    description: 'Your trusted TVS dealer in Begusarai. Browse bikes, book test rides, and schedule service.',
    url: 'https://www.example.com',
    siteName: 'Tahalka TVS',
    images: [{ url: '/logo.svg', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: { canonical: 'https://www.example.com' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "name": "Tahalka TVS",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "NH-28, Teghra Chowk",
      "addressLocality": "Begusarai",
      "addressRegion": "Bihar",
      "postalCode": "851133",
      "addressCountry": "IN"
    },
    "telephone": "+91-7319762328",
    "areaServed": "Begusarai",
    "url": "https://www.example.com",
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "09:30",
      "closes": "19:00"
    }],
    "sameAs": [
      "https://wa.me/917319762328",
      "https://wa.me/917480012328"
    ]
  };

  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <Navbar />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
