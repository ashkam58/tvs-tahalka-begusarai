'use client';
import offers from '@/data/offers.json';

export default function OfferMarquee() {
  return (
    <div className="bg-tvsRed text-white py-2">
      <div className="marquee">
        <div className="inline-block animate-marquee">
          {offers.concat(offers).map((offer, idx) => (
            <span key={idx} className="mx-8 font-semibold">
              🔥 {offer}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
