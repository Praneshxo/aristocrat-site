const services = [
  { num: '01', title: 'Social Content', desc: 'Promo assets, cover art, motion teasers, visualisers and carousels that capture your sound.' },
  { num: '02', title: 'Release Packages', desc: 'Cohesive campaigns from artwork to social content that build the story of your release.' },
  { num: '03', title: 'Live Visuals', desc: 'Custom visuals that connect with your sound and elevate the live performance.' },
  { num: '04', title: 'Video Production', desc: 'Performance videos, interviews and short-form content planned and produced for your campaign.' },
  { num: '05', title: 'Events', desc: 'Flyer artwork, lineup announcements, motion promos and aftermovies that get people through the door.' },
  { num: '06', title: 'Brand Identity', desc: 'Message, aesthetic, colours and typography so your visuals stay consistent and recognisable.' },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-10 animate-section border-t border-white/10">
      <div className="flex items-end justify-between mb-16">
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">Services</h2>
        <span className="text-2xl md:text-4xl">(06)</span>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.num} className="border border-white/10 p-8 hover:border-accent/50 transition-colors group">
            <div className="text-accent text-sm mb-4">{s.num}</div>
            <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4 group-hover:text-accent transition-colors">
              {s.title}
            </h3>
            <p className="text-white/70 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}