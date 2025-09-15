'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/bikes', label: 'Bikes' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Tahalka TVS" width={40} height={40} priority />
          <span className="font-extrabold text-xl tracking-wide text-tvsBlue">Tahalka <span className="text-tvsRed">TVS</span></span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {navItems.map(item => (
            <Link key={item.href} href={item.href} className={`text-sm font-medium hover:text-tvsRed ${pathname === item.href ? 'text-tvsRed' : 'text-gray-700'}`}>
              {item.label}
            </Link>
          ))}
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 border rounded-lg">Menu</button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          {navItems.map(item => (
            <Link key={item.href} href={item.href} className="block px-4 py-3 border-b" onClick={() => setOpen(false)}>{item.label}</Link>
          ))}
        </div>
      )}
      <div className="bg-tvsBlue text-white text-center text-xs md:text-sm py-1">
        NH-28, Teghra Chowk, Begusarai, Bihar-851133 • Sales: <a href="tel:+917319762328" className="underline">+91 73197 62328</a> • Service: <a href="tel:+917480012328" className="underline">+91 74800 12328</a>
      </div>
    </header>
  );
}
