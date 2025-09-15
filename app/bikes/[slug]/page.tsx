import Image from 'next/image';
import Link from 'next/link';
import bikes from '@/data/bikes.json';

type Bike = {
  name: string; slug: string; price_from_inr: number; engine_cc: number; mileage_kmpl: number; highlights: string[]; image: string;
};

export async function generateStaticParams() {
  return (bikes as Bike[]).map(b => ({ slug: b.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const bike = (bikes as Bike[]).find(b => b.slug === params.slug);
  return {
    title: `${bike?.name || 'Bike'} | Tahalka TVS Begusarai`,
    description: `${bike?.name} at Tahalka TVS, Begusarai. ₹${bike?.price_from_inr?.toLocaleString()} onwards. ${bike?.engine_cc}cc engine, ${bike?.mileage_kmpl} kmpl. Book test ride on WhatsApp.`,
    keywords: `${bike?.name}, TVS ${bike?.name} Begusarai, ${bike?.name} price, TVS showroom Begusarai`,
    openGraph: {
      title: `${bike?.name} - Tahalka TVS Begusarai`,
      description: `Explore ${bike?.name} specifications, pricing & book test ride at Tahalka TVS, Begusarai's trusted TVS dealer.`,
      images: [{ url: bike?.image || "/logo.svg", width: 800, height: 600 }]
    }
  };
}

export default function BikePage({ params }: { params: { slug: string } }) {
  const bike = (bikes as Bike[]).find(b => b.slug === params.slug);
  if (!bike) return <main className="mx-auto max-w-7xl px-4 py-10">Bike not found.</main>;
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image src={bike.image} alt={bike.name} width={1200} height={800} className="w-full h-auto rounded-2xl border" />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold">{bike.name}</h1>
          <p className="text-gray-700">From ₹{bike.price_from_inr.toLocaleString('en-IN')}</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="p-3 border rounded-xl">Engine: <b>{bike.engine_cc}cc</b></div>
            <div className="p-3 border rounded-xl">Mileage: <b>{bike.mileage_kmpl} kmpl*</b></div>
          </div>
          <ul className="mt-4 list-disc list-inside text-gray-700">
            {bike.highlights.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`https://wa.me/917319762328?text=Hi%20Tahalka%20TVS!%20I%20want%20a%20test%20ride%20of%20${encodeURIComponent(bike.name)}.`} className="px-5 py-3 rounded-2xl bg-green-500 text-white font-semibold shadow">Book Test Ride</a>
            <a href="tel:+917319762328" className="px-5 py-3 rounded-2xl border font-semibold">Call Sales</a>
            <Link href="/bikes" className="px-5 py-3 rounded-2xl border font-semibold">Back to Bikes</Link>
          </div>
          <p className="mt-3 text-xs text-gray-500">*Mileage/price are indicative. Please WhatsApp for latest details and on-road quote.</p>
        </div>
      </div>
    </main>
  );
}
