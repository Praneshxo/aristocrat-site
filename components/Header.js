'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 bg-black/80 backdrop-blur-sm border-b border-white/5">
      <Link href="/" className="text-2xl md:text-3xl font-bold tracking-tighter lowercase">
        aristocrat
      </Link>

      <button
        onClick={() => setOpen(!open)}
        className="text-sm uppercase tracking-widest"
      >
        Menu
      </button>

      {open && (
        <div className="absolute top-full right-6 md:right-10 mt-2 bg-neutral-900 border border-white/10 p-6 min-w-[200px] text-sm uppercase tracking-widest space-y-3">
          <Link href="#works" onClick={() => setOpen(false)} className="block hover:text-accent">Works</Link>
          <Link href="#services" onClick={() => setOpen(false)} className="block hover:text-accent">Services</Link>
          <Link href="#process" onClick={() => setOpen(false)} className="block hover:text-accent">Process</Link>
          <Link href="#testimonials" onClick={() => setOpen(false)} className="block hover:text-accent">Testimonials</Link>
          <Link href="#contact" onClick={() => setOpen(false)} className="block hover:text-accent">Get Started</Link>
        </div>
      )}
    </header>
  );
}