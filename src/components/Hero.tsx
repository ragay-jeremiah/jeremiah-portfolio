import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [charCount, setCharCount] = useState(0);
  
  const text1 = "I build websites that turn visitors into ";
  const text2 = "qualified leads and booked appointments.";
  const totalChars = text1.length + text2.length;

  useEffect(() => {
    if (charCount < totalChars) {
      const timeout = setTimeout(() => {
        setCharCount(prev => prev + 1);
      }, 35); // Adjust typing speed here
      return () => clearTimeout(timeout);
    }
  }, [charCount, totalChars]);

  const currentText1 = text1.substring(0, charCount);
  const currentText2 = charCount > text1.length ? text2.substring(0, charCount - text1.length) : "";

  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center pt-20 pb-10 md:pt-24 md:pb-12 overflow-hidden bg-[#020617]">
      {/* Background Subtle Glow */}
      <div className="absolute top-0 right-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-[#9b87f5]/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col items-start text-left">
        

        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1] max-w-4xl min-h-[100px] sm:min-h-[140px] md:min-h-[120px]">
          {currentText1}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9b87f5] to-indigo-400">
            {currentText2}
          </span>
          <span className="inline-block w-1 h-[0.9em] bg-white ml-1 align-middle animate-pulse"></span>
        </h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: charCount >= totalChars ? 1 : 0, y: charCount >= totalChars ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-base text-slate-400 mb-8 leading-relaxed max-w-xl"
        >
          I help solar and service-based businesses capture, qualify, and follow up with leads automatically using conversion-focused pages and smart automation.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: charCount >= totalChars ? 1 : 0, scale: charCount >= totalChars ? 1 : 0.9 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-start lg:items-center gap-6 mb-12"
        >
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-slate-300 font-medium">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#9b87f5]/20 flex items-center justify-center text-[#9b87f5]">✓</span>
              Capture more qualified leads
            </li>
            <li className="flex items-center gap-3 text-slate-300 font-medium">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#9b87f5]/20 flex items-center justify-center text-[#9b87f5]">✓</span>
              Automate follow-ups instantly
            </li>
            <li className="flex items-center gap-3 text-slate-300 font-medium">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#9b87f5]/20 flex items-center justify-center text-[#9b87f5]">✓</span>
              Turn traffic into booked calls
            </li>
          </ul>
        </motion.div>
        
        <motion.a 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: charCount >= totalChars ? 1 : 0, y: charCount >= totalChars ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          href="#cta" 
          className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#9b87f5] text-white text-lg font-bold hover:bg-[#8570e6] transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(155,135,245,0.5)] group"
        >
          Get a Lead-Generating Website
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </motion.a>
        
      </div>
    </section>
  );
}
