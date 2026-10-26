const steps = [
  { num: '01', title: 'Ideate', desc: 'Ideation shapes a clear visual direction from the start. Get this right early and everything else falls into place.' },
  { num: '02', title: 'Create', desc: 'We handle the heavy lifting across design, motion and video so you stay focused on the music.' },
  { num: '03', title: 'Deliver', desc: 'Ready-to-use creative, delivered when you need it — without you having to lift a finger.' },
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 md:px-10 animate-section border-t border-white/10">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
          Our<br />Process
        </h2>

        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.num} className="bg-neutral-900 border border-white/10 p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl md:text-4xl font-bold">{step.title}</h3>
                <span className="text-3xl text-white/40">{step.num}</span>
              </div>
              <p className="text-white/70 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}