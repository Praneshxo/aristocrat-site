import Link from 'next/link';

export default function AboutCTA() {
  return (
    <section id="contact" className="animate-section">
      {/* Creative that slaps band */}
      <div className="relative h-[70vh] md:h-[80vh] flex items-center">
        <img
          src="https://images.unsplash.com/photo-1571266028243-d220c6a6b5d6?q=80&w=2070"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-6 md:px-10 max-w-4xl">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
            Creative<br />that slaps
          </h2>
          <p className="text-lg md:text-xl max-w-xl mb-8 text-white/90">
            Quality sits at the heart of everything we do. We’re not here to cut corners or rush work out the door. No matter the format, the focus is on making sure the creative absolutely slaps.
          </p>
          <Link href="#contact" className="text-2xl md:text-3xl font-bold inline-flex items-center gap-2 hover:text-accent">
            Get Started →
          </Link>
        </div>
      </div>

      {/* About + CTA */}
      <div className="grid md:grid-cols-2">
        <div className="relative h-96 md:h-auto">
          <img
            src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2070"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="bg-white text-black p-10 md:p-16 flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            We’re an independent studio helping artists and labels bring releases and campaigns to life visually.
          </h2>
          <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
            Our goal is simple: take the pressure off your content, so you can get back to the music. Design and content for the music world, built by people who understand it.
          </p>
          <Link href="#contact" className="text-xl font-semibold inline-flex items-center gap-2 hover:text-neutral-600">
            Get Started →
          </Link>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-black py-32 px-6 md:px-10 flex flex-col md:flex-row items-end justify-between gap-8">
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
          Let’s get<br />you moving
        </h2>
        <Link
          href="#contact"
          className="text-3xl md:text-4xl font-bold inline-flex items-center gap-2 hover:text-accent"
        >
          Get Started →
        </Link>
      </div>
    </section>
  );
}