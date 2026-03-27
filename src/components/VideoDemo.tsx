import { PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VideoDemo() {
  return (
    <section className="py-24 bg-[#030712] border-t border-slate-900/50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-8"
        >
          See how it works
        </motion.h2>

        {/* Video Placeholder Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
          className="relative w-full max-w-4xl mx-auto aspect-video rounded-[2rem] bg-slate-900/40 border border-slate-800 flex items-center justify-center overflow-hidden group hover:border-[#9b87f5]/30 hover:shadow-[0_0_80px_-20px_rgba(155,135,245,0.2)] transition-all cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#9b87f5]/5 to-transparent"></div>
          
          <div className="relative z-10 flex flex-col items-center gap-4 text-slate-400 group-hover:text-white transition-colors">
            <PlayCircle size={64} className="opacity-80 group-hover:scale-110 group-hover:text-[#9b87f5] transition-all duration-300" />
            <p className="font-semibold tracking-wide uppercase text-sm">Demo video coming soon</p>
          </div>
          
          {/* Replace with Loom video later:
              <iframe src="YOUR_LOOM_URL" frameBorder="0" className="absolute inset-0 w-full h-full" allowFullScreen></iframe> 
          */}
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-slate-400 text-lg"
        >
          Walkthrough of how the system captures, qualifies, and follows up with leads automatically.
        </motion.p>

      </div>
    </section>
  );
}
