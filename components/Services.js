const services = [
  { title: 'Marketing', icon: 'target' },
  { title: 'Visual Identity', icon: 'dot' },
  { title: 'Website Creation', icon: 'square' },
  { title: 'Development', icon: 'code' },
  { title: 'Motion Design', icon: 'play' },
  { title: 'E-learning', icon: 'split' },
];

function ServiceIcon({ type }) {
  const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 4, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const corners = <path {...stroke} d="M34 58V42c0-9 7-16 16-16h16M142 58V42c0-9-7-16-16-16h-16M34 102v16c0 9 7 16 16 16h16M142 102v16c0 9-7 16-16 16h-16" />;
  return (
    <svg viewBox="0 0 176 160" className="h-32 w-36 text-white sm:h-36 sm:w-40" aria-hidden="true">
      {corners}
      {type === 'target' && <><circle {...stroke} cx="88" cy="80" r="22" /><circle {...stroke} cx="88" cy="80" r="10" /></>}
      {type === 'dot' && <circle cx="88" cy="80" r="5" fill="currentColor" />}
      {type === 'square' && <rect {...stroke} x="67" y="59" width="42" height="42" rx="5" />}
      {type === 'code' && <path {...stroke} d="m75 66-16 14 16 14m26-28 16 14-16 14" />}
      {type === 'play' && <path {...stroke} d="m76 60 28 20-28 20z" />}
      {type === 'split' && <><path {...stroke} d="M88 58v44M84 58c-18 3-25 15-25 22s7 19 25 22M92 58c18 3 25 15 25 22s-7 19-25 22" /></>}
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="animate-section bg-[#191c1b] px-5 py-24 sm:px-8 md:px-12 md:py-32">
      <h2 className="mb-20 max-w-5xl text-[clamp(2.25rem,3.8vw,4rem)] leading-[1.08] tracking-[-0.055em] text-[#f7f3ec] md:mb-28">
        We partner with brands that<br className="hidden md:block" />
        dare to lead and help them grow<br className="hidden md:block" />
        through digital.
      </h2>
      <p className="mb-12 font-mono text-xs uppercase tracking-[0.16em] text-white/60 md:mb-16">Our services</p>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-y-20 sm:grid-cols-2 sm:gap-x-14 lg:grid-cols-3 lg:gap-x-24 lg:gap-y-24">
        {services.map((s) => (
          <div key={s.title} className="flex flex-col items-center text-center">
            <ServiceIcon type={s.icon} />
            <h3 className="mt-5 max-w-[220px] text-2xl font-medium uppercase leading-[1.2] tracking-[-0.045em] text-white sm:text-3xl">
              {s.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
