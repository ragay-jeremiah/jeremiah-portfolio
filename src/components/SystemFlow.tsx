import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SystemFlow() {
  const steps = [
    { num: '01', text: 'A visitor lands on your website' },
    { num: '02', text: 'They fill out a short qualification form' },
    { num: '03', text: 'They instantly receive confirmation' },
    { num: '04', text: 'Their details are stored in your CRM' },
    { num: '05', text: 'Automated follow-up is triggered' },
    { num: '06', text: 'They are guided to book an appointment' }
  ];

  return (
    <section className="py-24 bg-slate-900/30 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            How the system works
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical joining line for desktop */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden md:block absolute left-1/2 top-0 w-px bg-slate-800 -translate-x-1/2"
          ></motion.div>
          
          <div className="space-y-6 md:space-y-0 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15, type: "spring", stiffness: 80 }}
                className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                
                <div className={`w-full md:w-1/2 flex ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  <div className="glass-card p-5 sm:p-6 md:p-8 rounded-2xl w-full max-w-sm flex items-center gap-4 sm:gap-6 border-slate-800 hover:border-[#9b87f5]/40 transition-colors">
                    <span className="text-2xl sm:text-3xl font-black text-slate-800/50">{step.num}</span>
                    <p className="text-base sm:text-lg font-semibold text-white leading-tight">{step.text}</p>
                  </div>
                </div>

                <div className="hidden md:flex w-12 h-12 rounded-full border-4 border-[#020617] bg-[#9b87f5] items-center justify-center shrink-0 z-20 hover:scale-110 transition-transform shadow-[0_0_15px_rgba(155,135,245,0.4)]">
                  <ArrowRight size={20} className="text-white" />
                </div>
                
                <div className="hidden md:block w-full md:w-1/2"></div>

              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-[2px] rounded-2xl bg-gradient-to-r from-[#9b87f5] to-emerald-400">
            <div className="bg-[#030712] px-8 py-5 rounded-[14px]">
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">
                "Once the system makes sense, <span className="text-rose-400">not fixing it becomes the bigger risk.</span>"
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
