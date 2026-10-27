import Link from 'next/link';

export default function SoundFeature() {
  return (
    <section className="animate-section bg-black px-5 py-20 sm:px-8 md:px-12 md:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="max-w-5xl text-[clamp(2.1rem,3.45vw,4rem)] font-black uppercase leading-[0.92] tracking-[-0.065em] text-white">
          Creative ideas. Powerful brands. Memorable events.
        </h2>

        <video
          className="mt-10 aspect-[16/9] w-full object-cover md:mt-14"
          src="/video/events.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Live music event"
        />

        <div className="mx-auto mt-8 max-w-4xl text-center md:mt-10">
          <p className="text-lg leading-[1.45] text-white/60 md:text-2xl">
            Music marketing is becoming noisier by the day. A strong visual identity that tells the story behind your music is essential if you want to break through. We take pride in creating a range of visuals that stay true to your music while catching the eye of the modern audience.
          </p>
          <Link href="#contact" className="mt-10 inline-flex items-center gap-2 text-lg font-bold text-white transition-colors hover:text-white/60 md:text-xl">
            Get Started <span className="text-lime-300">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
