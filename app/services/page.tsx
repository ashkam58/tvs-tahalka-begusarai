'use client'
import services from '@/data/services.json';
import parts from '@/data/parts.json';
import PartsSection from '@/components/PartsSection';
import Script from 'next/script';
import Link from 'next/link';
import {
  Wrench,
  Settings,
  Clock,
  Truck,
  Phone,
  MessageCircle,
  Award,
  Shield,
  Star,
  CheckCircle,
  Zap,
  Heart
} from 'lucide-react';

// export const metadata = {
//   title: 'Services | Tahalka TVS',
//   description:
//     'TVS service, genuine parts, quick oil change, and more at Teghra Chowk, Begusarai.',
//   keywords:
//     'TVS service Begusarai, TVS parts, oil change, bike service Begusarai, genuine TVS parts',
//   openGraph: {
//     title: 'TVS Service & Parts | Tahalka TVS Begusarai',
//     description:
//       'Professional TVS service, genuine parts & quick oil change at Tahalka TVS, Begusarai. Book service on WhatsApp.',
//     images: [{ url: '/parts/oil-filter.jpg', width: 1200, height: 630 }],
//     type: 'website'
//   },
//   alternates: {
//     canonical: 'https://tahalkatvs.com/services'
//   }
// };

// Constants for contact actions
const PHONE_DISPLAY = '+91 7480012328';
const PHONE_TEL = '+917480012328';
const WA_NUMBER = '917480012328';
const WA_MSG = encodeURIComponent(
  'Hi Tahalka TVS Service! I want to book a service.'
);
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

// Icon pools for the service cards
const iconComponents = [Wrench, Settings, Clock, Truck];
const iconColorClasses = [
  'text-blue-600',
  'text-green-600',
  'text-orange-600',
  'text-purple-600'
];

export default function ServicesPage() {
  const orgLd = {
    '@context': 'https://schema.org',
    '@type': ['MotorcycleDealer', 'AutoRepair'],
    name: 'Tahalka TVS',
    image: '/parts/oil-filter.jpg',
    url: 'https://tahalkatvs.com/services',
    telephone: '+917480012328',
    areaServed: 'Begusarai, Bihar',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Teghra Chowk',
      addressLocality: 'Begusarai',
      addressRegion: 'Bihar',
      postalCode: '851101',
      addressCountry: 'IN'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        opens: '09:00',
        closes: '19:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '10:00',
        closes: '16:00'
      }
    ],
    sameAs: [`https://wa.me/${WA_NUMBER}`],
    hasMap:
      'https://www.google.com/maps?q=Tahalka+TVS+Teghra+Chowk+Begusarai'
  } as const;

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* JSON-LD for Local Business */}
      <Script id="tahalka-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(orgLd)}
      </Script>

      {/* Hero Section with Image */}
      <img src="/hero/bikes-hero.png" alt="Hero Image" />
      <section
        className="relative h-[320px] md:h-[420px] flex items-center justify-center bg-gradient-to-br from-blue-600 to-green-500 overflow-hidden rounded-b-3xl shadow-lg"
        aria-label="Hero"
      >
        
        <div className="relative text-center px-4">
          {/* Animated marquee-style carousel */}
          <div className="overflow-hidden  mb-8 w-full">
            <div className="animate-marquee whitespace-nowrap text-2xl md:text-3xl font-bold text-white/80">
              🔧 Premium TVS Service • 🚀 Quick Oil Change • ⚡ Genuine Parts • 🛠️ Expert Technicians • 🔧 Premium TVS Service • 🚀 Quick Oil Change • ⚡ Genuine Parts • 🛠️ Expert Technicians
            </div>
          </div>
          
          <Settings className="mx-auto mb-4 w-16 h-16 text-white drop-shadow-lg animate-pulse" aria-hidden />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 drop-shadow-lg">
            Premium TVS Services
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-xl mx-auto drop-shadow">
            Expert care for your TVS bike at Begusarai's most trusted service center
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border-2 border-white text-white font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/70"
              aria-label={`Call ${PHONE_DISPLAY}`}
            >
              <Phone className="w-5 h-5" aria-hidden />
              {`Call ${PHONE_DISPLAY}`}
            </a>
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="py-8 bg-white" aria-label="Quick actions">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-green-600 text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-300"
              aria-label="Book service on WhatsApp"
            >
              <MessageCircle className="w-6 h-6" aria-hidden />
              Book Service on WhatsApp
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-3 px-8 py-4 rounded-2xl border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              aria-label={`Call ${PHONE_DISPLAY}`}
            >
              <Phone className="w-6 h-6" aria-hidden />
              {`Call ${PHONE_DISPLAY}`}
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16" aria-label="Our expert services">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Our Expert Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional maintenance and genuine parts to keep your TVS bike running at peak performance
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((s: { title: string; desc: string }, i: number) => {
              const Icon = iconComponents[i % iconComponents.length];
              const color = iconColorClasses[i % iconColorClasses.length];
              return (
                <div
                  key={i}
                  className="group relative p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-100 to-green-100 group-hover:scale-110 transition-transform duration-300">
                        <Icon className={`w-8 h-8 ${color}`} aria-hidden />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {s.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{s.desc}</p>
                    <div className="mt-4 flex items-center text-green-600 font-semibold">
                      <CheckCircle className="w-5 h-5 mr-2" aria-hidden />
                      Available Now
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process / How it works */}
      <section className="py-16 bg-white" aria-label="How it works">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
            Smooth, Simple, Sorted
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: '1. Book',
                desc: 'Ping us on WhatsApp or call to schedule your slot.'
              },
              {
                title: '2. Drop / Pickup',
                desc: 'Visit Teghra Chowk or request pickup & drop (within city limits).'
              },
              {
                title: '3. Ride Happy',
                desc: 'We service, test, and return your bike ready to roll.'
              }
            ].map((step, idx) => (
              <div
                key={idx}
                className="rounded-3xl p-6 bg-gradient-to-br from-gray-50 to-blue-50 border border-gray-100 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-white shadow">
                    {idx === 0 && <MessageCircle className="w-5 h-5 text-green-600" aria-hidden />}
                    {idx === 1 && <Truck className="w-5 h-5 text-purple-600" aria-hidden />}
                    {idx === 2 && <Star className="w-5 h-5 text-yellow-500" aria-hidden />}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-700">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white" aria-label="Ready to service CTA">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
              <Zap className="w-5 h-5 text-yellow-300" aria-hidden />
              <span className="font-semibold">Quick Service</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Service Your Bike?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Book now and get your bike serviced by certified TVS technicians
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-green-600 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/70"
              aria-label="Book service on WhatsApp"
            >
              <MessageCircle className="w-6 h-6" aria-hidden />
              WhatsApp Booking
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-3 px-8 py-4 rounded-2xl border-2 border-white text-white font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/70"
              aria-label={`Call ${PHONE_DISPLAY}`}
            >
              <Phone className="w-6 h-6" aria-hidden />
              {`Call ${PHONE_DISPLAY}`}
            </a>
          </div>
        </div>
      </section>

      {/* Free Service Highlight */}
      <section className="py-16" aria-label="Free first service">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-1">
            <div className="rounded-3xl bg-white p-8 md:p-12">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full">
                    <Award className="w-12 h-12 text-orange-600" aria-hidden />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  🎉 FREE First Service!
                </h2>
                <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                  New TVS bike owners get their first service absolutely FREE! Our expert technicians will ensure your bike runs perfectly from day one.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="flex flex-col items-center p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100">
                    <Shield className="w-8 h-8 text-blue-600 mb-2" aria-hidden />
                    <h3 className="font-bold text-gray-900">Labour FREE</h3>
                    <p className="text-sm text-gray-600 text-center">No charges for service labour</p>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-2xl bg-gradient-to-br from-green-50 to-green-100">
                    <CheckCircle className="w-8 h-8 text-green-600 mb-2" aria-hidden />
                    <h3 className="font-bold text-gray-900">Genuine Parts</h3>
                    <p className="text-sm text-gray-600 text-center">Only authentic TVS parts used</p>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100">
                    <Heart className="w-8 h-8 text-purple-600 mb-2" aria-hidden />
                    <h3 className="font-bold text-gray-900">Expert Care</h3>
                    <p className="text-sm text-gray-600 text-center">Certified TVS technicians</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white" aria-label="Customer reviews">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-10">
            What Riders Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Rohit K.',
                text: 'Quick oil change and chain service—back on the road in an hour!'
              },
              {
                name: 'Shreya P.',
                text: 'Transparent pricing and genuine parts. My Apache feels brand new.'
              },
              { name: 'Imran S.', text: 'Pickup & drop was super helpful. Smooth experience.' }
            ].map((t, i) => (
              <figure
                key={i}
                className="rounded-3xl p-6 bg-gradient-to-br from-gray-50 to-green-50 border border-gray-100 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2" aria-hidden>
                  <Star className="w-5 h-5 text-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500" />
                </div>
                <blockquote className="text-gray-800">{t.text}</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-gray-700">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16" aria-label="Frequently asked questions">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-8">
            FAQs
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Do you offer pickup & drop?',
                a: 'Yes, within Begusarai city limits. Ask on WhatsApp for availability and charges.'
              },
              {
                q: 'Which oil do you use for oil changes?',
                a: 'We follow TVS recommendations for your model. Only genuine TVS-approved oils are used.'
              },
              {
                q: 'Is the first service free?',
                a: 'Labour is free for the first service of new TVS motorcycles. Parts and consumables, if required, are billed as per MRP.'
              }
            ].map((f, i) => (
              <details key={i} className="group rounded-2xl bg-white p-5 border border-gray-200 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between">
                  <span className="font-semibold text-gray-900">{f.q}</span>
                  <span className="text-blue-600 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-gray-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Parts Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50" aria-label="Genuine TVS parts">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
              Genuine TVS Parts
            </h2>
            <p className="text-gray-700">Browse frequently requested parts in stock</p>
          </div>
          <PartsSection parts={parts} />
        </div>
      </section>

      {/* Map & Contact */}
      <section className="py-16 bg-white" aria-label="Map and contact">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-700 mb-4">
              Teghra Chowk, Begusarai, Bihar 851101
            </p>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                title="Tahalka TVS location"
                src="https://www.google.com/maps?q=Teghra+Chowk+Begusarai&output=embed"
                className="w-full h-72"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="rounded-3xl p-6 bg-gradient-to-br from-green-50 to-blue-50 border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" aria-hidden />
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="font-semibold text-blue-700 hover:underline"
                  aria-label={`Call ${PHONE_DISPLAY}`}
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-green-600" aria-hidden />
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-green-700 hover:underline"
                  aria-label="Chat on WhatsApp"
                >
                  Chat on WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-purple-600" aria-hidden />
                <span className="text-gray-800">Certified TVS Technicians</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sticky booking bar (mobile) */}
      <div className="fixed bottom-4 inset-x-4 z-40 flex md:hidden gap-3">
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-green-600 text-white font-bold px-4 py-3 shadow-lg"
          aria-label="Book on WhatsApp"
        >
          <MessageCircle className="w-5 h-5" aria-hidden /> Book
        </a>
        <a
          href={`tel:${PHONE_TEL}`}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 text-white font-bold px-4 py-3 shadow-lg"
          aria-label={`Call ${PHONE_DISPLAY}`}
        >
          <Phone className="w-5 h-5" aria-hidden /> Call
        </a>
      </div>
    </main>
  );
}
