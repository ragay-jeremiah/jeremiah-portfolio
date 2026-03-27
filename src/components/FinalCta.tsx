import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FinalCta() {
  return (
    <section className="py-32 relative bg-[#020617] overflow-hidden">
      
      {/* Background glow for emphasis */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#9b87f5]/15 rounded-full blur-[120px] pointer-events-none"
      ></motion.div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xl md:text-2xl font-semibold text-slate-300 italic mb-8 border-b border-slate-800 pb-8 tracking-wide">
            "When the outcome feels real, not moving forward starts to feel like giving something up."
          </p>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8"
        >
          Stop losing leads <br className="hidden md:block"/> from your website.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto"
        >
          If your website isn't capturing and converting visitors, you're leaving revenue on the table.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 100 }}
          className="flex flex-col items-center gap-6"
        >
          <a href="#contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-[#9b87f5] text-white text-lg font-bold hover:bg-[#8570e6] transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(155,135,245,0.7)] group">
            Let's build your lead system
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-sm font-medium text-slate-500 uppercase tracking-widest mt-4">
            You're not paying for a website—you're paying to stop losing potential customers.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
