import { Layers, Database, Zap, CalendarCheck, Inbox } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Solution() {
  const features = [
    {
      title: 'Conversion-focused landing pages',
      icon: <Layers className="text-[#9b87f5]" size={28} />
    },
    {
      title: 'Lead capture and qualification forms',
      icon: <Inbox className="text-[#9b87f5]" size={28} />
    },
    {
      title: 'CRM integration (GoHighLevel / GHL)',
      icon: <Database className="text-[#9b87f5]" size={28} />
    },
    {
      title: 'Automated email and SMS follow-ups',
      icon: <Zap className="text-[#9b87f5]" size={28} />
    },
    {
      title: 'Appointment booking system',
      icon: <CalendarCheck className="text-[#9b87f5]" size={28} />
    }
  ];

  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#9b87f5] font-semibold tracking-wider uppercase text-sm mb-3 flex items-center gap-3">
            <span className="w-8 h-px bg-[#9b87f5]"></span> The Build
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Here's what I build for you
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col gap-4 sm:gap-6 hover:border-[#9b87f5]/50 transition-colors group cursor-default"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#9b87f5]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center border-t border-slate-800/80 pt-16 relative"
        >
          {/* Subtle glow underneath the final text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] bg-[#9b87f5]/10 rounded-full blur-[60px] pointer-events-none"></div>
          
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-300 relative z-10">
            A simple system that turns website visitors into <span className="text-white font-bold border-b-2 border-[#9b87f5]">real business opportunities.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
