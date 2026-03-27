import { AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Problem() {
  return (
    <section className="py-24 relative bg-[#030712] border-t border-slate-900 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Most websites <span className="text-rose-400">don't generate leads.</span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            This results in missed opportunities and lost revenue every day.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          className="glass-card p-6 sm:p-10 md:p-12 rounded-[2rem] border-rose-900/30 relative overflow-hidden group hover:border-rose-500/30 transition-all duration-500 hover:shadow-[0_0_80px_-20px_rgba(225,29,72,0.15)]"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 rounded-full blur-[80px]"></div>
          
          <ul className="space-y-6 relative z-10">
            <li className="flex items-start gap-4 text-slate-300 text-lg">
              <AlertCircle className="text-rose-400 shrink-0 mt-1" size={24} />
              <span><strong>No clear call to action.</strong> Visitors don't know what to do next.</span>
            </li>
            <li className="flex items-start gap-4 text-slate-300 text-lg">
              <AlertCircle className="text-rose-400 shrink-0 mt-1" size={24} />
              <span><strong>Visitors leave without taking action.</strong> You pay for traffic, but get zero return.</span>
            </li>
            <li className="flex items-start gap-4 text-slate-300 text-lg">
              <AlertCircle className="text-rose-400 shrink-0 mt-1" size={24} />
              <span><strong>No system to capture and qualify leads.</strong> You waste time talking to the wrong people.</span>
            </li>
            <li className="flex items-start gap-4 text-slate-300 text-lg">
              <AlertCircle className="text-rose-400 shrink-0 mt-1" size={24} />
              <span><strong>No follow-up after someone visits.</strong> Leads go cold because you didn't reach out instantly.</span>
            </li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center md:text-left"
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-tight border-l-4 border-[#9b87f5] pl-6 py-2 inline-block italic">
            "The real cost isn't the system—it's how many leads you're losing without it."
          </p>
        </motion.div>

      </div>
    </section>
  );
}
