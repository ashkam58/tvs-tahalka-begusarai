import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-tvsBlue via-biharGold to-tvsRed opacity-15"></div>
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-20 relative">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Tahalka TVS — Begusarai ka dhamakedaar showroom</h1>
            <p className="mt-4 text-gray-700 text-lg">Simple website, solid deals. Browse bikes, book test ride, ya phir service schedule karein — sab WhatsApp pe.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/bikes" className="px-5 py-3 rounded-2xl bg-tvsBlue text-white font-semibold shadow hover:shadow-md">Browse Bikes</Link>
              <Link href="/services" className="px-5 py-3 rounded-2xl bg-white border font-semibold hover:bg-gray-50">Services</Link>
              <a href="https://wa.me/917319762328?text=Hi%20Tahalka%20TVS!%20I%20want%20a%20test%20ride." className="px-5 py-3 rounded-2xl bg-green-500 text-white font-semibold shadow hover:shadow-md">Book Test Ride</a>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="p-3 rounded-xl border bg-white">
              <div className="font-bold">Free First Service</div>
              <div className="text-gray-600">No labour charge</div>
              </div>
              <div className="p-3 rounded-xl border bg-white">
              <div className="font-bold">WhatsApp Booking</div>
              <div className="text-gray-600">Fast & easy</div>
              </div>
              <div className="p-3 rounded-xl border bg-white">
              <div className="font-bold">EMI Available</div>
              <div className="text-gray-600">Low down payment</div>
              </div>
              <div className="p-3 rounded-xl border bg-white">
              <div className="font-bold">Pipes Available</div>
              <div className="text-gray-600">Industrial/household</div>
              </div>
            </div>

            
            </div>
            <p className="mt-4 text-sm text-gray-600">Free first service (labour). Genuine parts. EMI options available.</p>
            </div>
            <div className="rounded-3xl bg-gray-100 p-4 md:p-8 shadow-inner flex flex-col justify-between min-h-[28rem]">
            <div className="h-64 md:h-80 rounded-2xl bg-white shimmer flex flex-col items-center justify-center mb-4">
              <img src="/hero-image.png" alt="Tahalka TVS Hero" className="h-24 md:h-32 mb-4 drop-shadow-lg" />
              <span className="text-xl md:text-2xl font-bold text-gray-700 text-center">Begusarai Special • Tahalka Deals</span>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
