'use client';
export default function WhatsAppFloat() {
  const safeAreaStyle = {
paddingBottom: 'env(safe-area-inset-bottom)',
} as React.CSSProperties;

  return (
    <>
{/* Desktop / tablet: corner-floating FABs */}
<a
href="https://wa.me/917319762328?text=Hi%20Tahalka%20TVS!%20I%20want%20to%20talk%20to%20Sales."
target="_blank"
rel="noopener noreferrer"
className="hidden md:flex fixed right-4 bottom-4 z-[9999] items-center gap-2 px-4 py-3 rounded-full bg-green-500 text-white font-semibold shadow-lg hover:scale-105 active:scale-95 transition-transform border-2 border-green-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-600"
aria-label="WhatsApp Sales"
style={safeAreaStyle}
>
<span role="img" aria-hidden>💬</span>
<span>WhatsApp Sales</span>
</a>


<a
href="https://wa.me/917480012328?text=Hi%20Tahalka%20TVS%20Service!%20I%20need%20help%20with%20my%20bike."
target="_blank"
rel="noopener noreferrer"
className="hidden md:flex fixed left-4 bottom-4 z-[9999] items-center gap-2 px-4 py-3 rounded-full bg-green-600 text-white font-semibold shadow-lg hover:scale-105 active:scale-95 transition-transform border-2 border-green-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-700"
aria-label="WhatsApp Service"
style={safeAreaStyle}
>
<span role="img" aria-hidden>🔧</span>
<span>WhatsApp Service</span>
</a>


{/* Mobile: a single bottom bar with two large, thumb-friendly buttons */}
<div
className="md:hidden fixed inset-x-2 bottom-2 z-[9999]"
style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 4px)' }}
aria-label="Quick WhatsApp actions"
>
<div className="mx-auto max-w-md rounded-2xl border border-white/20 bg-white/70 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/60">
<div className="grid grid-cols-2 gap-2 p-2">
<a
href="https://wa.me/917319762328?text=Hi%20Tahalka%20TVS!%20I%20want%20to%20talk%20to%20Sales."
target="_blank"
rel="noopener noreferrer"
className="flex items-center justify-center gap-2 rounded-xl bg-green-600 text-white font-semibold py-3 shadow hover:scale-[1.02] active:scale-[0.98] transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-700"
aria-label="WhatsApp Sales"
>
<span role="img" aria-hidden>💬</span>
<span className="truncate">Sales</span>
</a>
<a
href="https://wa.me/917480012328?text=Hi%20Tahalka%20TVS%20Service!%20I%20need%20help%20with%20my%20bike."
target="_blank"
rel="noopener noreferrer"
className="flex items-center justify-center gap-2 rounded-xl bg-green-700 text-white font-semibold py-3 shadow hover:scale-[1.02] active:scale-[0.98] transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-800"
aria-label="WhatsApp Service"
>
<span role="img" aria-hidden>🔧</span>
<span className="truncate">Service</span>
</a>
</div>
</div>
</div>
</>
  );
}
