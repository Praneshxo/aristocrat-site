'use client';

import { useState } from 'react';

const testimonials = [
  {
    quote: 'We shot content out in Tenerife and North Yorkshire across a few releases, and it never felt staged or overdone. It was more about capturing the right moments and letting that reflect the music.',
    author: 'Rules',
  },
  {
    quote: 'I worked with Aristocrat on my A Fragile Season EP over a period of six months. It was a really collaborative process, and they helped everything feel more clear and connected to the music.',
    author: 'Carmichael',
  },
  {
    quote: 'Working with Aristocrat was sick. They helped shape a visual identity around the music that felt cohesive and true to what I’m trying to express.',
    author: 'Junior Simba',
  },
  {
    quote: 'Absolutely smashed the visuals for the Leeds shows. I wanted something that hit hard from the off and really built the energy before the drop.',
    author: 'Jamie Duggan',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section id="testimonials" className="py-24 px-6 md:px-10 animate-section border-t border-white/10">
      <div className="flex items-end justify-between mb-12">
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">Testimonials</h2>
        <span className="text-2xl">(06)</span>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {testimonials.slice(index, index + 3).concat(testimonials.slice(0, Math.max(0, index + 3 - testimonials.length))).map((t, i) => (
          <div key={i} className="bg-neutral-900 border border-white/10 p-8 min-h-[280px] flex flex-col justify-between">
            <p className="text-white/80 leading-relaxed mb-6">{t.quote}</p>
            <p className="font-semibold">{t.author}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button onClick={prev} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:text-black transition">
          ←
        </button>
        <button onClick={next} className="w-12 h-12 rounded-full bg-accent text-black flex items-center justify-center hover:bg-white transition">
          →
        </button>
      </div>
    </section>
  );
}