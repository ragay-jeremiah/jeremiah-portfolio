import { Workflow, Layers, TerminalSquare } from 'lucide-react';

export default function HowIWork() {
  const steps = [
    {
      num: '01',
      title: 'Where you are right now',
      desc: "We look at the reality of your current operations. The manual tasks, the wasted time, the wrong hires. We map out exactly where you are stuck and overwhelmed.",
      icon: <Workflow className="text-[#9b87f5] mb-6" size={32} />
    },
    {
      num: '02',
      title: 'Where you could be in 30-60 days',
      desc: "We define the destination. A clear picture of smoother systems, automated workflows, and focused growth. You see the outcome before we even start building.",
      icon: <Layers className="text-[#9b87f5] mb-6" size={32} />
    },
    {
      num: '03',
      title: 'The exact steps in between',
      desc: "I don't just sell hours or tasks. I build the solid bridge between your current state and your desired outcome. The path is clear, direct, and faster than trial and error.",
      icon: <TerminalSquare className="text-[#9b87f5] mb-6" size={32} />
    }
  ];

  return (
    <section id="approach" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="mb-16 max-w-2xl">
          <p className="text-[#9b87f5] font-semibold tracking-wider uppercase text-sm mb-3 flex items-center gap-3">
            <span className="w-8 h-px bg-[#9b87f5]"></span> The Process
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">How we build the bridge</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="group relative p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors overflow-hidden"
            >
              {/* Subtle gradient hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start">
                  {step.icon}
                  <span className="text-4xl font-black text-slate-800/50">{step.num}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                  {step.desc}
                </p>
              </div>
              
              {/* Bottom animated border */}
              <div className="absolute bottom-0 left-0 h-1 bg-[#9b87f5] w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
