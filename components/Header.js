'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 pt-5 sm:px-8 md:px-12 md:pt-6">
      <div className="mx-auto flex max-w-[1800px] items-start justify-between gap-4">
        <div className="flex h-[68px] w-full max-w-[585px] items-center justify-between rounded-[5px] bg-black/90 px-5 text-white shadow-2xl shadow-black/30 ring-1 ring-white/10 sm:px-7">
          <Link href="/" aria-label="Aristocrat home" className="text-2xl font-black leading-none tracking-[-0.2em]">A.</Link>
          <span className="font-mono text-[10px] uppercase tracking-tight sm:text-xs">Nice entrance</span>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open} className="flex h-8 w-8 flex-col items-center justify-center gap-1.5">
            <i className="h-px w-5 bg-white" />
            <i className="h-px w-5 bg-white" />
            <i className="h-px w-5 bg-white" />
          </button>
        </div>
        <Link href="#contact" className="hidden h-[68px] min-w-[210px] items-center justify-between rounded-[5px] bg-white/85 px-5 font-mono text-[10px] uppercase tracking-tight text-black transition-colors hover:bg-white md:flex">
          <span>Get in touch</span><span>↗</span>
        </Link>
      </div>

      {open && (
        <div className="absolute left-5 top-[97px] w-[calc(100%-2.5rem)] max-w-[585px] rounded-[5px] bg-white p-6 font-mono text-xs uppercase tracking-widest text-black shadow-2xl sm:left-8 sm:w-[calc(100%-4rem)] md:left-12">
          <Link href="#works" onClick={() => setOpen(false)} className="block hover:text-accent">Works</Link>
          <Link href="#services" onClick={() => setOpen(false)} className="mt-3 block hover:text-accent">Services</Link>
          <Link href="#process" onClick={() => setOpen(false)} className="mt-3 block hover:text-accent">Process</Link>
          <Link href="#testimonials" onClick={() => setOpen(false)} className="mt-3 block hover:text-accent">Testimonials</Link>
          <Link href="#contact" onClick={() => setOpen(false)} className="mt-3 block hover:text-accent">Get Started</Link>
        </div>
      )}
    </header>
  );
}
