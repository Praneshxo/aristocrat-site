'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const titleRef = useRef(null);
  const subRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(titleRef.current, {
      y: 36,
      duration: 0.7,
      ease: 'power4.out',
    }).from(
      subRef.current,
      {
        y: 20,
        duration: 0.5,
        ease: 'power3.out',
      },
      '-=0.35'
    );
  }, []);

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-black px-5 pb-7 pt-32 sm:px-8 md:px-12 md:pb-8">
      <div className="relative z-10 mx-auto flex w-full max-w-[1800px] flex-col">
        <div className="grid items-end gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-8 lg:col-span-9">
            <p className="mb-7 font-mono text-[10px] uppercase tracking-[0.18em] text-white/75 sm:text-xs">[ We are Aristocrat ]</p>
            <h1 ref={titleRef} className="whitespace-nowrap text-[clamp(2.9rem,5.25vw,6.35rem)] font-black uppercase leading-[0.86] tracking-[-0.07em] text-white">
              A creative digital<br />
              agency that goes<br />
              all in or not at all.
            </h1>
          </div>
          <p ref={subRef} className="max-w-sm pb-1 text-base leading-[1.35] tracking-tight text-white/90 sm:text-lg md:col-span-4 lg:col-span-3 lg:text-xl">
            We craft brands, products and experiences that hit harder, work smarter and connect deeper. With heart, with craft, and with a team that’s all in or not at all.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-y-5 border-t border-white/80 pt-5 font-mono text-[10px] uppercase tracking-tight text-white/85 sm:grid-cols-3 md:mt-16 md:grid-cols-6 md:text-xs">
          <span>20+ Digital freaks</span>
          <span>India based</span>
          <span className="hidden md:block">[ ● 06 : 02 : 41 ]</span>
          <span className="hidden md:block" />
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-60">Instagram ↗</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-60">LinkedIn ↗</a>
        </div>
      </div>
    </section>
  );
}
