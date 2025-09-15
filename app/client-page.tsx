// app/client-page.tsx — Client component for Tahalka TVS HomePage
'use client';
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useMemo, useState, useTransition } from "react";

// ----------------------
// Mock Data (swap with your JSON imports)
// ----------------------

type Bike = {
  name: string;
  slug: string;
  image: string;
  price: number; // INR
  cc: number;
  category: "Sport" | "Commuter" | "Scooter";
  mileage?: number; // kmpl
  colorways?: string[];
};

type Service = { title: string; desc: string; icon?: string };

type FAQ = { q: string; a: string };

const bikes: Bike[] = [
  {
    name: "Apache RTR 160 4V",
    slug: "apache-rtr-1604v",
    image: "/bikes/apache-rtr-1604v.jpg",
    price: 131500,
    cc: 159,
    category: "Sport",
    mileage: 45,
    colorways: ["Racing Red", "Knight Black"],
  },
  {
    name: "TVS Raider 125",
    slug: "raider-125",
    image: "/bikes/raider-125.jpg",
    price: 99700,
    cc: 124,
    category: "Commuter",
    mileage: 57,
    colorways: ["Fiery Yellow", "Blazing Blue"],
  },
  {
    name: "Jupiter 110",
    slug: "jupiter-110",
    image: "/bikes/jupiter-110.jpg",
    price: 85500,
    cc: 109,
    category: "Scooter",
    mileage: 50,
    colorways: ["Pristine White", "Royal Wine"],
  },
  {
    name: "Apache RTR 200 4V",
    slug: "apache-rtr-2004v",
    image: "/bikes/apache-rtr-2004v.jpg",
    price: 168000,
    cc: 197,
    category: "Sport",
    mileage: 38,
    colorways: ["Matte Blue", "Gloss Black"],
  },
];

const services: Service[] = [
  { title: "Periodic Service", desc: "Company-specified PMS with digital job card.", icon: "🔧" },
  { title: "Genuine Parts", desc: "100% TVS-certified parts with warranty.", icon: "✅" },
  { title: "Express Service", desc: "60–90 minute quick service window.", icon: "⚡" },
  { title: "Pick & Drop", desc: "Doorstep pickup and delivery in city limits.", icon: "🛵" },
];

const faqs: FAQ[] = [
  {
    q: "Kya main WhatsApp par test ride book kar sakta/ti hoon?",
    a: "Bilkul. Green button dabaiye, name/number share kijiye aur bike select kijiye — team confirm karegi.",
  },
  {
    q: "Service charges kitne hote hain?",
    a: "First service labour free hota hai. Baaki service PMS ke hisaab se hota hai — estimate WhatsApp par mil jayega.",
  },
  {
    q: "Finance/EMI milta hai?",
    a: "Haan, leading NBFCs ke saath on-spot approval. Aadhaar, PAN aur address proof rakhna hota hai.",
  },
  {
    q: "Location kaha hai?",
    a: "NH-28, Teghra Chowk, Begusarai. Google Maps pe ‘Tahalka TVS’ search kijiye.",
  },
];

// ----------------------
// Utility
// ----------------------

const INR = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

function waLink(phone: string, text: string) {
  const msg = encodeURIComponent(text);
  return `https://wa.me/${phone}?text=${msg}`;
}

// ----------------------
// Structured Data (JSON-LD)
// ----------------------

function StructuredData() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "MotorcycleDealer",
    name: "Tahalka TVS",
    url: "https://tahalkatvs.example/",
    telephone: "+91-7480012328",
    image: "/bikes/apache-rtr-1604v.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "NH-28, Teghra Chowk",
      addressLocality: "Begusarai",
      addressRegion: "Bihar",
      postalCode: "851101",
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: 25.468, longitude: 86.136 },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "09:30", closes: "19:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:30", closes: "16:00" },
    ],
    sameAs: [
      "https://maps.google.com/?q=Tahalka+TVS+Begusarai",
    ],
  };

  const productLd = bikes.map((b) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: b.name,
    sku: b.slug,
    category: b.category,
    brand: { "@type": "Brand", name: "TVS" },
    image: [b.image],
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: b.price,
      availability: "https://schema.org/InStock",
      url: `https://tahalkatvs.example/bikes/${b.slug}`,
    },
  }));

  return (
    <>
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Script id="ld-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      {productLd.map((obj, i) => (
        <Script key={i} id={`ld-product-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
      ))}
    </>
  );
}

// ----------------------
// Small UI primitives
// ----------------------

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-4 ${className}`}>{children}</div>;
}

function SectionHeading({ title, ctaHref, ctaLabel }: { title: string; ctaHref?: string; ctaLabel?: string }) {
  return (
    <div className="flex items-baseline justify-between">
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">{title}</h2>
      {ctaHref && (
        <Link href={ctaHref} className="text-blue-600 font-semibold hover:underline">
          {ctaLabel ?? "Browse all →"}
        </Link>
      )}
    </div>
  );
}

function OfferMarquee() {
  return (
    <div className="relative overflow-x-hidden bg-blue-600 text-white">
      <div className="animate-marquee whitespace-nowrap py-2 text-sm font-semibold">
        <span className="mx-8">⚡ Festive Offers: Low down payment & instant delivery*</span>
        <span className="mx-8">🛠️ First service labour FREE</span>
        <span className="mx-8">💬 Book on WhatsApp — quick response</span>
        <span className="mx-8">📍 NH-28, Teghra Chowk — Easy parking</span>
      </div>
      <style jsx>{`
        .animate-marquee { animation: marquee 22s linear infinite; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10">
        <Image src="/hero/tvs-showroom.jpg" alt="Tahalka TVS showroom in Begusarai" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      </div>
      <Container className="pt-24 pb-20">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Tahalka TVS — Begusarai ka trusted TVS showroom</h1>
          <p className="mt-3 text-lg text-white/90">Apache, Raider, Jupiter… sab yahi. Test ride, finance, aur service — sab WhatsApp pe within minutes.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={waLink("917480012328", "Hi Tahalka TVS! I want to book a TEST RIDE.")}
              className="inline-flex items-center gap-2 rounded-2xl bg-green-600 px-5 py-3 font-semibold text-white shadow hover:bg-green-700"
            >
              <span>💬 Book Test Ride</span>
            </a>
            <a href="tel:+917480012328" className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-5 py-3 font-semibold text-white ring-1 ring-white/40 hover:bg-white/20">
              📞 Call Now
            </a>
            <a href="https://maps.google.com/?q=Tahalka+TVS+Begusarai" className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-gray-900 hover:bg-gray-100">
              📍 Directions
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

function BikeCard({ bike }: { bike: Bike }) {
  return (
    <div className="group rounded-2xl border bg-white shadow-sm transition hover:shadow-md">
      <div className="relative h-44 w-full overflow-hidden rounded-t-2xl">
        <Image src={bike.image} alt={bike.name} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg">{bike.name}</h3>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{bike.category}</span>
        </div>
        <p className="mt-1 text-sm text-gray-600">{bike.cc}cc • {bike.mileage ?? 45} kmpl</p>
        <p className="mt-2 text-base font-semibold">{INR.format(bike.price)}</p>
        <div className="mt-3 flex gap-2">
          <Link href={`/bikes/${bike.slug}`} className="rounded-xl border px-3 py-2 text-sm font-semibold">View</Link>
          <a href={waLink("917480012328", `Interested in ${bike.name}. Please contact me.`)} className="rounded-xl bg-green-600 px-3 py-2 text-sm font-semibold text-white">Enquire</a>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ s }: { s: Service }) {
  return (
    <div className="border rounded-2xl p-4 bg-white">
      <div className="text-2xl">{s.icon ?? "🛠️"}</div>
      <h3 className="mt-2 font-bold">{s.title}</h3>
      <p className="text-sm text-gray-600">{s.desc}</p>
    </div>
  );
}

function FAQItem({ f }: { f: FAQ }) {
  return (
    <details className="border rounded-2xl p-4 bg-white">
      <summary className="font-bold cursor-pointer">{f.q}</summary>
      <p className="mt-2 text-gray-700">{f.a}</p>
    </details>
  );
}

function StickyCta() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3">
      <a
        href={waLink("917480012328", "Hi Tahalka TVS! Need assistance.")}
        className="rounded-full bg-green-600 px-4 py-3 text-white font-semibold shadow-lg"
        aria-label="Chat on WhatsApp"
      >
        WhatsApp
      </a>
      <a href="tel:+917480012328" className="rounded-full bg-blue-600 px-4 py-3 text-white font-semibold shadow-lg" aria-label="Call showroom">
        Call
      </a>
    </div>
  );
}

// ----------------------
// Filters for Bikes
// ----------------------

function BikeFilters({ onChange }: { onChange: (state: { q: string; cat: string; max: number | null }) => void }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [max, setMax] = useState<string>("");

  return (
    <div className="mt-4 grid gap-3 sm:grid-cols-3">
      <input
        className="w-full rounded-xl border px-3 py-2"
        placeholder="Search model (Apache, Raider, Jupiter)"
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          onChange({ q: e.target.value, cat, max: max ? Number(max) : null });
        }}
      />
      <select
        className="w-full rounded-xl border px-3 py-2"
        value={cat}
        onChange={(e) => {
          setCat(e.target.value);
          onChange({ q, cat: e.target.value, max: max ? Number(max) : null });
        }}
      >
        {['All', 'Sport', 'Commuter', 'Scooter'].map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>
      <input
        className="w-full rounded-xl border px-3 py-2"
        type="number"
        min={50000}
        step={5000}
        placeholder="Max budget (₹)"
        value={max}
        onChange={(e) => {
          setMax(e.target.value);
          onChange({ q, cat, max: e.target.value ? Number(e.target.value) : null });
        }}
      />
    </div>
  );
}

function TestRideForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [model, setModel] = useState(bikes[0]?.name ?? "");
  const disabled = !name || !phone;

  const href = useMemo(
    () =>
      waLink(
        "917480012328",
        `Hi Tahalka TVS! Test ride request:\nName: ${name}\nPhone: ${phone}\nModel: ${model}`
      ),
    [name, phone, model]
  );

  return (
    <div className="rounded-3xl border bg-white p-4 md:p-6">
      <h3 className="text-xl font-bold">Quick Test Ride</h3>
      <p className="text-sm text-gray-600">30 seconds — direct WhatsApp message to our team.</p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <input className="rounded-xl border px-3 py-2" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="rounded-xl border px-3 py-2" placeholder="Phone number" inputMode="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <select className="rounded-xl border px-3 py-2 sm:col-span-2" value={model} onChange={(e) => setModel(e.target.value)}>
          {bikes.map((b) => (
            <option key={b.slug}>{b.name}</option>
          ))}
        </select>
        <a
          aria-disabled={disabled}
          className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold text-white shadow sm:col-span-2 ${disabled ? "cursor-not-allowed bg-gray-400" : "bg-green-600 hover:bg-green-700"}`}
          href={disabled ? undefined : href}
        >
          💬 Send on WhatsApp
        </a>
      </div>
    </div>
  );
}

// ----------------------
// Page
// ----------------------

export default function HomePage() {
  const [filter, setFilter] = useState<{ q: string; cat: string; max: number | null }>({ q: "", cat: "All", max: null });
  const [isPending, startTransition] = useTransition();

  const filtered = useMemo(() => {
    const q = filter.q.trim().toLowerCase();
    return bikes
      .filter((b) => (filter.cat === "All" ? true : b.category === filter.cat))
      .filter((b) => (filter.max ? b.price <= filter.max : true))
      .filter((b) => (q ? `${b.name} ${b.category}`.toLowerCase().includes(q) : true));
  }, [filter]);

  return (
    <main className="bg-white">
      <StructuredData />
      <OfferMarquee />
      <Hero />

      {/* Popular Bikes */}
      <section className="py-10">
        <Container>
          <SectionHeading title="Popular Bikes" ctaHref="/bikes" />
          <BikeFilters onChange={(state) => startTransition(() => setFilter(state))} />
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.slice(0, 6).map((b) => (
              <BikeCard key={b.slug} bike={b} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="mt-6 text-sm text-gray-600">No bikes match your filters. Try clearing search or increasing budget.</p>
          )}
        </Container>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-10">
        <Container>
          <SectionHeading title="Services" ctaHref="/services" ctaLabel="Know more →" />
          <p className="text-gray-700 mt-2">TVS bike service, genuine parts, aur free first service (labour) — yahi par.</p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <ServiceCard key={i} s={s} />
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            <a
              href={waLink("917480012328", "Hi Tahalka TVS Service! I want to book a service.")}
              className="px-5 py-3 rounded-2xl bg-green-600 text-white font-semibold shadow hover:bg-green-700"
            >
              Book a Service
            </a>
            <Link href="/services" className="px-5 py-3 rounded-2xl border font-semibold">
              Know more
            </Link>
          </div>
        </Container>
      </section>

      {/* Pipes CTA */}
      <section className="py-10">
        <Container>
          <div className="rounded-3xl border p-6 md:p-8 bg-white">
            <h2 className="text-2xl md:text-3xl font-extrabold">Also Available: Pipes (Industrial / Household)</h2>
            <p className="mt-2 text-gray-700">Showroom par pipes bhi milengi — quality assured. Detail ke liye WhatsApp karein.</p>
            <a
              href={waLink("917319762328", "Hi! Please share details of pipes available.")}
              className="mt-4 inline-block px-5 py-3 rounded-2xl bg-green-500 text-white font-semibold hover:bg-green-600"
            >
              Ask on WhatsApp
            </a>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-10">
        <Container>
          <SectionHeading title="FAQ" />
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            {faqs.map((f, i) => (
              <FAQItem key={i} f={f} />
            ))}
          </div>
        </Container>
      </section>

      {/* Reviews */}
      <section className="bg-white py-10">
        <Container>
          <SectionHeading title="Customer Reviews" />
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{ n: "Ramesh Kumar", t: "Great service and friendly staff! Highly recommend Tahalka TVS." }, { n: "Priya Sharma", t: "Bought my Apache RTR here. Smooth process and great deals." }, { n: "Anil Verma", t: "Quick service and genuine parts. Very satisfied!" }].map((r, i) => (
              <div key={i} className="p-4 border rounded-2xl bg-gray-50">
                <p className="text-sm text-gray-700">“{r.t}”</p>
                <div className="mt-2 text-sm font-bold">— {r.n}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quick Test Ride */}
      <section className="bg-blue-50 py-10">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold">Ready to ride?</h2>
              <p className="mt-2 text-gray-700">30-second WhatsApp form. No spam, only vroom.</p>
              <ul className="mt-3 list-disc pl-5 text-gray-700 text-sm">
                <li>Instant confirmation</li>
                <li>Bring any Govt. ID for the ride</li>
                <li>Helmet provided</li>
              </ul>
            </div>
            <TestRideForm />
          </div>
        </Container>
      </section>

      {/* Store Info */}
      <section className="py-10">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">Visit Us</h3>
              <p className="mt-2 text-gray-700">NH-28, Teghra Chowk, Begusarai, Bihar 851101</p>
              <p className="text-gray-700">Hours: Mon–Sat 9:30am – 7:00pm, Sun 10:30am – 4:00pm</p>
              <div className="mt-3 flex gap-3">
                <a href="https://maps.google.com/?q=Tahalka+TVS+Begusarai" className="rounded-2xl border px-4 py-2 font-semibold">Open in Maps</a>
                <a href="tel:+917480012328" className="rounded-2xl bg-blue-600 px-4 py-2 font-semibold text-white">Call</a>
              </div>
            </div>
            <iframe
              title="Google Maps — Tahalka TVS Begusarai"
              className="h-72 w-full rounded-2xl border"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Tahalka+TVS+Begusarai&output=embed"
            />
          </div>
        </Container>
      </section>

      <StickyCta />

      <footer className="border-t py-8 text-center text-sm text-gray-600">
        <Container>
          <p>© {new Date().getFullYear()} Tahalka TVS — Begusarai</p>
          <p className="mt-1">Built with ❤️. Prices are ex‑showroom and subject to change.</p>
        </Container>
      </footer>
    </main>
  );
}
