import Image from 'next/image';
import Link from 'next/link';

type Props = {
  bike: {
    name: string;
    slug: string;
    price_from_inr: number;
    engine_cc: number;
    mileage_kmpl: number;
    highlights: string[];
    image: string;
  }
};

export default function BikeCard({ bike }: Props) {
  return (
    <div className="border rounded-2xl overflow-hidden bg-white hover:shadow-lg transition">
      <Image src={bike.image} alt={bike.name} width={800} height={500} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-extrabold text-lg">{bike.name}</h3>
        <p className="text-sm text-gray-600">From ₹{bike.price_from_inr.toLocaleString('en-IN')}</p>
        <div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-700">
          <span>⚙️ {bike.engine_cc}cc</span>
          <span>⛽ {bike.mileage_kmpl} kmpl*</span>
        </div>
        <div className="mt-3 flex gap-2">
          <Link href={`/bikes/${bike.slug}`} className="px-3 py-2 rounded-xl bg-tvsBlue text-white text-sm font-semibold">View</Link>
          <a href={`https://wa.me/917319762328?text=Hi%20Tahalka%20TVS!%20Interested%20in%20${encodeURIComponent(bike.name)}.`} className="px-3 py-2 rounded-xl bg-green-500 text-white text-sm font-semibold">WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
