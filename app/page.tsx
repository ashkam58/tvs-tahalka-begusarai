import Image from 'next/image';
import bikes from '@/data/bikes.json';
import services from '@/data/services.json';
import faqs from '@/data/faqs.json';
import OfferMarquee from '@/components/OfferMarquee';
import Hero from '@/components/Hero';
import BikeCard from '@/components/BikeCard';
import Link from 'next/link';
import { MapPin, Phone, Clock } from 'lucide-react';

export const metadata = {
  title: 'Tahalka TVS | TVS Showroom Begusarai | NH-28 Teghra Chowk',
  description: 'Leading TVS dealer in Begusarai. Browse Apache, Raider, Jupiter bikes. Book test rides, service appointments on WhatsApp. Located at NH-28, Teghra Chowk.',
  keywords: "TVS Begusarai, Tahalka TVS, TVS showroom Begusarai, Apache RTR Begusarai, TVS dealer Bihar, Teghra Chowk TVS",
  openGraph: {
    title: "Tahalka TVS - Your Trusted TVS Partner in Begusarai",
    description: "Explore TVS bikes, book test rides & service at Tahalka TVS, Begusarai's premier TVS showroom.",
    images: [{ url: "/bikes/apache-rtr-1604v.jpg", width: 1200, height: 630 }]
  }
};

export default function HomePage() {
  return (
    <main>
      <OfferMarquee />
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl md:text-3xl font-extrabold">Popular Bikes</h2>
          <Link href="/bikes" className="text-tvsBlue font-semibold">Browse all →</Link>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bikes.slice(0,3).map((b) => <BikeCard key={b.slug} bike={b as any} />)}
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <h2 className="text-2xl md:text-3xl font-extrabold">Services</h2>
          <p className="text-gray-700 mt-2">TVS bike service, genuine parts, aur free first service (labour) — yahi par.</p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <div key={i} className="border rounded-2xl p-4 bg-white">
                <h3 className="font-bold">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            <a href="https://wa.me/917480012328?text=Hi%20Tahalka%20TVS%20Service!%20I%20want%20to%20book%20a%20service." className="px-5 py-3 rounded-2xl bg-green-600 text-white font-semibold shadow">Book a Service</a>
            <Link href="/services" className="px-5 py-3 rounded-2xl border font-semibold">Know more</Link>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="rounded-3xl border p-6 md:p-8 bg-white">
        <div className="flex items-center gap-3 mb-4"></div>
            <p className="mt-2 text-gray-700">Showroom par parts bhi milengi — quality assured. Detail ke liye WhatsApp karein.</p>
            <a href="https://wa.me/917319762328?text=Hi!%20Please%20share%20details%20of%20pipes%20available." className="mt-4 inline-block px-5 py-3 rounded-2xl bg-green-500 text-white font-semibold">Ask on WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <h2 className="text-2xl md:text-3xl font-extrabold">FAQ</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            {faqs.map((f, i) => (
              <details key={i} className="border rounded-2xl p-4 bg-white">
                <summary className="font-bold cursor-pointer">{f.q}</summary>
                <p className="mt-2 text-gray-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <h2 className="text-2xl md:text-3xl font-extrabold">Customer Reviews</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 border rounded-2xl bg-gray-50">
              <p className="text-sm text-gray-700">"Great service and friendly staff! Highly recommend Tahalka TVS."</p>
              <div className="mt-2 text-sm font-bold">- Ramesh Kumar</div>
            </div>
            <div className="p-4 border rounded-2xl bg-gray-50">
              <p className="text-sm text-gray-700">"Bought my Apache RTR here. Smooth process and great deals."</p>
              <div className="mt-2 text-sm font-bold">- Priya Sharma</div>
            </div>
            <div className="p-4 border rounded-2xl bg-gray-50">
              <p className="text-sm text-gray-700">"Quick service and genuine parts. Very satisfied!"</p>
              <div className="mt-2 text-sm font-bold">- Anil Verma</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <h2 className="text-2xl md:text-3xl font-extrabold">Latest Blog Posts</h2>
          <p className="text-gray-700 mt-2">Stay updated with the latest tips, news, and updates from Tahalka TVS.</p>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: '5 Reasons to Choose TVS Apache RTR',
                slug: 'reasons-to-choose-apache-rtr',
                excerpt: 'Discover why the TVS Apache RTR is the perfect bike for performance enthusiasts.',
                date: '2025-09-01'
              },
              {
                title: 'How to Maintain Your TVS Bike',
                slug: 'maintain-your-tvs-bike',
                excerpt: 'Simple tips to keep your TVS bike in top condition.',
                date: '2025-08-15'
              },
              {
                title: 'Top 3 TVS Bikes for Daily Commuting',
                slug: 'top-tvs-bikes-daily-commuting',
                excerpt: 'Explore the best TVS bikes for your daily commute.',
                date: '2025-07-20'
              }
            ].map((article) => (
              <a key={article.slug} href={`/blog/${article.slug}`} className="block p-4 border rounded-xl bg-gray-50 shadow hover:shadow-md">
                <h3 className="text-xl font-bold">{article.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{article.excerpt}</p>
                <div className="mt-4 text-xs text-gray-500">Published on {article.date}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Visit Our Showroom</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold">Address</h3>
                </div>
                <p className="text-gray-700">
                  NH-28, Teghra Chowk<br />
                  Begusarai, Bihar 851133
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-bold">Contact</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>Sales:</strong> <a href="tel:+917319762328" className="text-blue-600 hover:underline">+91 7319762328</a>
                  </p>
                  <p className="text-gray-700">
                    <strong>Service:</strong> <a href="tel:+917480012328" className="text-blue-600 hover:underline">+91 7480012328</a>
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-orange-600" />
                  <h3 className="text-xl font-bold">Opening Hours</h3>
                </div>
                <div className="space-y-1 text-gray-700">
                  <p><strong>Monday - Saturday:</strong> 9:30 AM - 7:00 PM</p>
                  <p><strong>Sunday:</strong> 10:30 AM - 4:00 PM</p>
                </div>
              </div>

              <div className="flex gap-3">
                <a 
                  href="https://maps.google.com/?q=Tahalka+TVS+NH-28+Teghra+Chowk+Begusarai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  Get Directions
                </a>
                <div className="flex gap-3">
            
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="h-96 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.8989!2d86.1276!3d25.4181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI1JzA1LjIiTiA4NsKwMDcnMzkuNCJF!5e0!3m2!1sen!2sin!4v1000000000000!5m2!1sen!2sin&q=Teghra+Chowk+Begusarai"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tahalka TVS Location - NH-28, Teghra Chowk, Begusarai"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
