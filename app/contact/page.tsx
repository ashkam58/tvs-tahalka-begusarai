import { MapPin, Phone, Clock, MessageCircle, Settings } from 'lucide-react';

const PHONE_TEL = "+917319762328";
const PHONE_DISPLAY = "+91 73197 62328";

export const metadata = { 
  title: 'Contact | Tahalka TVS', 
  description: 'Contact Tahalka TVS — NH-28, Teghra Chowk, Begusarai. Call or WhatsApp for sales and service.',
  keywords: "Tahalka TVS contact, TVS showroom Begusarai address, Teghra Chowk TVS dealer",
  openGraph: {
    title: "Contact Tahalka TVS | Begusarai TVS Dealer",
    description: "Visit Tahalka TVS at NH-28, Teghra Chowk, Begusarai. Call +91-7319762328 for sales & service.",
    images: [{ url: "/logo.svg", width: 400, height: 400 }]
  }
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
                    <img src="/hero/contact.png" alt="" />

    
      <section
              className="relative h-[320px] md:h-[420px] flex items-center justify-center bg-gradient-to-br from-blue-600 to-green-500 overflow-hidden rounded-b-3xl shadow-lg"
              aria-label="Hero"
            >
              <div className="relative text-center px-4">
                {/* Animated marquee-style carousel */}
                <div className="relative overflow-hidden bg-black">
  <div
    className="
      mask-edges
      whitespace-nowrap text-2xl md:text-3xl font-bold
      bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300
      bg-clip-text text-transparent drop-shadow
      animate-marquee
      motion-reduce:animate-none
      hover:[animation-duration:10s]    /* speed up on hover */
      [animation-duration:16s]          /* default speed (faster than 18s) */
    "
    style={{ ["--marquee-dur" as any]: "16s" }}  // you can set speed here too
  >
    {/* Duplicate the content once for a seamless loop */}
    <span>
      📞 Call Us Anytime • 💬 WhatsApp Support • 🏢 Visit Our Showroom • 📍 NH-28, Teghra Chowk, Begusarai •
      📞 Call Us Anytime • 💬 WhatsApp Support • 🏢 Visit Our Showroom • 📍 NH-28, Teghra Chowk, Begusarai •
    </span>
    <span aria-hidden="true" className="ml-8">
      📞 Call Us Anytime • 💬 WhatsApp Support • 🏢 Visit Our Showroom • 📍 NH-28, Teghra Chowk, Begusarai •
      📞 Call Us Anytime • 💬 WhatsApp Support • 🏢 Visit Our Showroom • 📍 NH-28, Teghra Chowk, Begusarai •
    </span>
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
      
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
              <MessageCircle className="w-16 h-16" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Get in Touch</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-2xl mx-auto">
            Visit our showroom or connect with us on WhatsApp for instant support and service.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Left Side - Contact Information */}
            <div className="space-y-8">
              {/* Location Card */}
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl">
                    <MapPin className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Our Location</h2>
                </div>
                <p className="text-lg text-gray-700 mb-4">
                  NH-28, Teghra Chowk<br />
                  Begusarai, Bihar 851133
                </p>
                <a 
                  className="inline-flex items-center gap-2 px-16 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors" 
                  href="https://www.google.com/maps/search/?api=1&query=NH-28%2C%20Teghra%20Chowk%2C%20Begusarai%2C%20Bihar%20851133" 
                  target="_blank"
                >
                  <MapPin className="w-5 h-5" />
                  Open in Google Maps
                </a>
              </div>

              {/* Phone & WhatsApp Card */}
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl">
                    <Phone className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Phone & WhatsApp</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="font-semibold text-gray-900 mb-3">Sales Team</p>
                    <div className="flex flex-wrap gap-3">
                      <a className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors" href="tel:+917319762328">
                        <Phone className="w-4 h-4" />
                        +91 73197 62328
                      </a>
                      <a className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700 transition-colors" href="https://wa.me/917319762328">
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-3">Service Team</p>
                    <div className="flex flex-wrap gap-3">
                      <a className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors" href="tel:+917480012328">
                        <Phone className="w-4 h-4" />
                        +91 74800 12328
                      </a>
                      <a className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700 transition-colors" href="https://wa.me/917480012328">
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours Card */}
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl">
                    <Clock className="w-8 h-8 text-orange-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Opening Hours</h2>
                </div>
                <div className="space-y-2 text-lg text-gray-700">
                  <p><span className="font-semibold">Monday - Saturday:</span> 9:30 AM - 7:00 PM</p>
                  <p><span className="font-semibold">Sunday:</span> 10:00 AM - 2:00 PM</p>
                </div>
              </div>

              {/* Quick Connect Card */}
              <div className="bg-gradient-to-br from-blue-600 to-green-600 p-8 rounded-3xl text-white">
                <h2 className="text-3xl font-bold mb-4">Quick Connect</h2>
                <p className="text-blue-100 mb-6 text-lg">
                  Sab WhatsApp pe asaan hai! Choose your department and get instant responses.
                </p>
                <div className="space-y-4">
                  <a 
                    href="https://wa.me/917319762328?text=Hi%20Tahalka%20TVS!%20I%20am%20looking%20to%20buy%20a%20bike." 
                    className="flex items-center gap-4 p-6 rounded-2xl bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
                  >
                    <div className="p-3 bg-white/20 rounded-xl">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Sales Inquiry</h3>
                      <p className="text-blue-100">Bike prices, test rides, finance options</p>
                    </div>
                  </a>
                  <a 
                    href="https://wa.me/917480012328?text=Hi%20Tahalka%20TVS%20Service!%20I%20need%20service%20support." 
                    className="flex items-center gap-4 p-6 rounded-2xl bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
                  >
                    <div className="p-3 bg-white/20 rounded-xl">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Service Support</h3>
                      <p className="text-blue-100">Book service, parts inquiry, maintenance</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Google Map */}
            <div className="lg:sticky lg:top-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl">
                    <MapPin className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Find Us on Map</h2>
                </div>
                <div className="w-full h-96 lg:h-[700px] rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.1234567890!2d86.1234567!3d25.4234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNH-28%2C%20Teghra%20Chowk%2C%20Begusarai%2C%20Bihar%20851133!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Tahalka TVS Location - NH-28, Teghra Chowk, Begusarai"
                  ></iframe>
                </div>
                <div className="mt-6 text-center">
                  <a 
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors" 
                    href="https://www.google.com/maps/search/?api=1&query=NH-28%2C%20Teghra%20Chowk%2C%20Begusarai%2C%20Bihar%20851133" 
                    target="_blank"
                  >
                    <MapPin className="w-5 h-5" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}