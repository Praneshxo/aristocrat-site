'use client';

import Link from 'next/link';

const works = [
  {
    title: 'Moonchild Sanelly',
    desc: 'Live visuals for Grammy-nominated artist’s sold-out show at Village Underground, London.',
    img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070',
  },
  {
    title: 'Rules',
    desc: 'Video content across multiple release campaigns for Counter Records artist.',
    img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070',
  },
  {
    title: 'Carmichael',
    desc: 'Long-term visual identity and full 2026 EP campaign rollout.',
    img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2070',
  },
  {
    title: 'Junior Simba',
    desc: 'Visual identity, release assets, social content and live visuals.',
    img: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070',
  },
];

export default function FeaturedWorks() {
  return (
    <section id="works" className="py-24 animate-section">
      <div className="flex items-end justify-between px-6 md:px-10 mb-10">
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">
          Featured<br />Works
        </h2>
        <span className="text-2xl md:text-4xl font-light">(04)</span>
      </div>

      <div className="space-y-1">
        {works.map((work) => (
          <div key={work.title} className="group relative h-[60vh] md:h-[80vh] overflow-hidden">
            <img
              src={work.img}
              alt={work.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
              <h3 className="text-4xl md:text-6xl font-black uppercase mb-2">{work.title}</h3>
              <p className="max-w-md text-white/90 mb-4">{work.desc}</p>
              <Link
                href="#"
                className="inline-block bg-accent text-black text-sm font-semibold px-4 py-2 w-fit"
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}