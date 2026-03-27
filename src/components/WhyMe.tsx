export default function WhyMe() {
  const reasons = [
    {
      title: 'No micromanaging needed',
      desc: "I communicate progress clearly so you always know what stage we're in and what's coming next. You won't need to chase updates or wonder if things are being handled."
    },
    {
      title: 'Systems you actually understand',
      desc: "I don't hand off black boxes. Everything I build is organized, named properly, and documented so you can understand it, maintain it, or hand it to someone else."
    },
    {
      title: 'Reliability over speed',
      desc: "Clients care most about three things: saving time, having systems that run consistently, and peace of mind. I build for all three — not just the one that looks impressive in a demo."
    },
    {
      title: 'Process before tools',
      desc: "I don't pick software first. I understand how your work flows, identify what's actually slowing you down, then decide what to build. That's what separates a working system from a complicated one."
    }
  ];

  return (
    <section id="why" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="mb-12">
          <p className="text-[#9b87f5] font-semibold tracking-wider uppercase text-sm mb-3 flex items-center gap-3">
            <span className="w-8 h-px bg-[#9b87f5]"></span> Why work with me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">What to expect</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, idx) => (
            <div 
              key={idx} 
              className="glass-card p-8 md:p-10 rounded-3xl group hover:border-[#9b87f5] transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#9b87f5] transition-colors">
                {reason.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-[15px]">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
