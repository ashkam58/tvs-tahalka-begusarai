'use client';
import { Phone, MessageCircle, MapPin, Bike } from "lucide-react";
import bikes from "@/data/bikes.json";
import BikeCard from "@/components/BikeCard";

// export const metadata = {
//   title: "Bikes | Tahalka TVS",
//   description:
//     "Explore TVS bikes in Begusarai: Apache, Raider, Jupiter, and more. Book test ride on WhatsApp.",
//   keywords:
//     "TVS bikes Begusarai, Apache RTR, Raider 125, Jupiter 110, Ntorq 125, bike showroom Begusarai",
//   openGraph: {
//     title: "TVS Bikes in Begusarai | Tahalka TVS",
//     description:
//       "Explore latest TVS bikes at Tahalka TVS, Begusarai. Apache, Raider, Jupiter & more. Book test ride today!",
//     images: [{ url: "/bikes/apache-rtr-1604v.jpg", width: 800, height: 600 }],
//   },
// };

export default function BikesPage() {
  const waNumber = "917319762328";
  const waText = encodeURIComponent(
    "Hi Tahalka TVS! I want to book a test ride."
  );
  const mapsQuery = encodeURIComponent("NH-28, Teghra Chowk, Begusarai");

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* FLASHY HERO */}
      <section
        className="relative h-[320px] md:h-[420px] flex items-center justify-center overflow-hidden rounded-b-3xl shadow-xl pb-20 md:pb-24"
        aria-label="TVS Bikes Hero"
      >
        {/* Gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-500 to-pink-500" aria-hidden />
        <div
          className="absolute -inset-40 blur-3xl opacity-40"
          style={{
            background:
              "conic-gradient(from 90deg, rgba(255,255,255,0.12), rgba(255,255,255,0), rgba(255,255,255,0.18))",
          }}
          aria-hidden
        />

        {/* Marquee banner */}
        <div className="pointer-events-none absolute top-3 left-0 right-0 overflow-hidden" aria-hidden>
          <div className="marquee whitespace-nowrap text-white/90 text-[13px] md:text-base font-semibold tracking-wide">
            <span className="pr-16">
              📞 Call Us Anytime • 💬 WhatsApp Support • 🏍️ Test Rides Daily • 📍 NH-28, Teghra Chowk, Begusarai •
            </span>
            <span>
              📞 Call Us Anytime • 💬 WhatsApp Support • 🏍️ Test Rides Daily • 📍 NH-28, Teghra Chowk, Begusarai •
            </span>
          </div>
        </div>

        {/* Center content */}
        <div className="relative z-10 text-center px-4">
          <div className="mx-auto mb-4 w-16 h-16 grid place-items-center rounded-2xl bg-white/20 backdrop-blur shadow-lg">
            <Bike className="w-9 h-9 text-white" aria-hidden />
          </div>
          {/* <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-xl">
            Browse the TVS Lineup
          </h1> */}
          {/* <p className="text-white/95 text-base md:text-lg mt-3 mb-6 max-w-2xl mx-auto">
            Powerful sport, nimble commuter, or zippy scooter—pick your joyride and book a test ride instantly.
          </p> */}

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {/* WhatsApp CTA with subtle shine */}
           
            {/* Call */}
            {/* <a
              href="tel:+917319762328"
              className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 font-semibold text-white bg-orange-700/90 hover:bg-orange-600 shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-white/70"
              aria-label="Call for Best Price"
            >
              <Phone className="w-5 h-5" aria-hidden />
              Call Now
            </a> */}

            {/* Directions */}
            {/* <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 font-semibold text-yellow-900 bg-rose-700/90 hover:bg-rose-600 shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-white/70"
              aria-label="Get Directions"
            >
              <MapPin className="w-5 h-5" aria-hidden />
              Directions
            </a> */}
          </div>
        </div>

        
        {/* <svg
          className="absolute bottom-0 left-0 right-0 h-[72px] md:h-[96px] z-[1]"
          viewBox="0 0 1440 110"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill=""
            d="M0,64L48,53.3C96,43,192,21,288,21.3C384,21,480,43,576,48C672,53,768,43,864,58.7C960,75,1056,117,1152,122.7C1248,128,1344,96,1392,80L1440,64L1440,110L1392,110C1344,110,1248,110,1152,110C1056,110,960,110,864,110C768,110,672,110,576,110C480,110,384,110,288,110C192,110,96,110,48,110L0,110Z"
          />
        </svg> */}

        {/* Local styles for marquee + shine */}
        <style jsx>{`
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .marquee { display:inline-block; animation: marquee 22s linear infinite; }
          .btn-shine::before {
            content: "";
            position: absolute;
            inset: -8px auto -8px -40%;
            width: 34%;
            transform: skewX(-20deg);
            background: rgba(255,255,255,0.45);
            filter: blur(8px);
            animation: shine 2.2s ease-in-out infinite;
            pointer-events: none;
          }
          @keyframes shine { 0% { left: -40%; } 100% { left: 140%; } }
        `}</style>
      </section>

      {/* PRODUCT GRID */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Our Complete Range
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From powerful sport bikes to efficient commuters. Find your perfect ride with competitive pricing and
              instant WhatsApp booking.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bikes.map((b) => (
              <div key={b.slug} className="group relative">
                {/* subtle hover pop */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/0 to-red-500/0 opacity-0 group-hover:opacity-10 transition-opacity" />
                <BikeCard bike={b as any} />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${waNumber}?text=${waText}`}
                className="px-8 py-4 rounded-2xl bg-green-600 text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                📱 Book Test Ride on WhatsApp
              </a>
              <a
                href="tel:+917319762328"
                className="px-8 py-4 rounded-2xl border-2 border-orange-600 text-orange-600 font-bold hover:bg-orange-600 hover:text-white transition-all duration-300"
              >
                📞 Call for Best Price
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
