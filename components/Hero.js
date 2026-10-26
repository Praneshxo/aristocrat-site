'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const titleRef = useRef(null);
  const subRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(titleRef.current, {
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
    }).from(
      subRef.current,
      {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      },
      '-=0.6'
    );
  }, []);

  return (
    <section className="relative min-h-screen flex items-end pb-20 md:pb-32 px-6 md:px-10 pt-32">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070')] bg-cover bg-center opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-8">
          <p className="text-xs uppercase tracking-[0.3em] mb-6 text-white/70">
            [ We are Aristocrat ]
          </p>
          <h1
            ref={titleRef}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter uppercase"
          >
            Creative studio<br />
            for the music<br />
            world.
          </h1>
        </div>
        <div ref={subRef} className="md:col-span-4 text-base md:text-lg leading-relaxed text-white/80">
          We craft visuals that stay true to your sound. From release assets to live visuals and full campaigns — built by people who understand the music.
        </div>
      </div>
    </section>
  );
}