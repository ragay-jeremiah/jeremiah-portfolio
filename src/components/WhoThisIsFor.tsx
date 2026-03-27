import { Sun, CheckSquare, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhoThisIsFor() {
  const audiences = [
    {
      title: 'Solar Companies',
      desc: 'Looking for a predictable flow of exclusive, qualified appointments instead of buying shared leads.',
      icon: <Sun size={32} className="text-[#9b87f5]" />
    },
    {
      title: 'Local Service Businesses',
      desc: 'Contractors, roofers, and home services wanting to capture estimates around the clock without answering every call.',
      icon: <CheckSquare size={32} className="text-[#9b87f5]" />
    },
    {
      title: 'Ad Buyers Missing the Mark',
      desc: 'Running paid traffic but failing to capture and convert those visitors into booked calls on the backend.',
      icon: <TrendingUp size={32} className="text-[#9b87f5]" />
    }
  ];

  return (
    <section className="py-24 relative bg-[#020617] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
        >
          <p className="text-[#9b87f5] font-semibold tracking-wider uppercase text-sm mb-3 text-center">
            Who this is for
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-12 sm:mb-16">
            Is this for your business?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((aud, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, type: "spring", stiffness: 100 }}
              className="glass-card p-6 sm:p-10 rounded-3xl flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300 border-slate-800 hover:border-[#9b87f5]/40 hover:shadow-[0_10px_40px_-10px_rgba(155,135,245,0.2)] group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#9b87f5]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                {aud.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{aud.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                {aud.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
