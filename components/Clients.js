'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const clients = [
  'MOONCHILD',
  'RULES',
  'CARMICHAEL',
  'JUNIOR SIMBA',
  'LOVE RACING',
  'PENGSHUI',
  'UNIVERSAL',
  'THIRDSPACE',
];

export default function Clients() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const tween = gsap.to(track, {
      xPercent: -50,
      repeat: -1,
      duration: 25,
      ease: 'none',
    });

    return () => tween.kill();
  }, []);

  return (
    <section className="py-24 border-t border-white/10 animate-section">
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-16">Our Clients</h2>
      <div className="overflow-hidden">
        <div ref={trackRef} className="flex gap-16 md:gap-24 whitespace-nowrap items-center">
          {[...clients, ...clients].map((name, i) => (
            <span
              key={i}
              className="text-2xl md:text-4xl font-black uppercase tracking-tight opacity-80"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}