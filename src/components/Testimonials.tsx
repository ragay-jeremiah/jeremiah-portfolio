import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      text: "He helped us out with project tracking stuff. Built a system that tracks expenses which is useful. Good at getting things organized and doesnt need constant check-ins. Solid work.",
      author: "Tony R.",
      role: "American Array Solar",
    },
    {
      text: "We had him helping with research, planning, and outreach. He got it done. Pretty straightforward guy, no drama, just does what he says he'll do.",
      author: "Tom H.",
      role: "Hill Contracting Ltd.",
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-[400px] bg-[#9b87f5]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="mb-12">
          <p className="text-[#9b87f5] font-semibold tracking-wider uppercase text-sm mb-3 flex items-center gap-3">
            <span className="w-8 h-px bg-[#9b87f5]"></span> What clients say
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Proven results</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test, idx) => (
            <div 
              key={idx} 
              className="glass-card p-8 md:p-10 rounded-3xl flex flex-col h-full hover:border-[#9b87f5]/40 transition-colors"
            >
              <div className="flex gap-1 mb-6 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" className="opacity-90" />
                ))}
              </div>
              
              <blockquote className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 flex-grow">
                "{test.text}"
              </blockquote>
              
              <div className="pt-6 border-t border-slate-800/60 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#9b87f5]/20 flex items-center justify-center text-[#9b87f5] font-bold text-xl border border-[#9b87f5]/30">
                  {test.author.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold">{test.author}</p>
                  <p className="text-[#9b87f5] text-sm">{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
