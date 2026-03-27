export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-[#020617] py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <a href="#" className="font-sans font-bold text-xl tracking-tight text-white block mb-2">
              Jeremiah Ragay<span className="text-[#9b87f5]">.</span>
            </a>
            <p className="text-slate-500 text-sm">Lead Generation Systems & Automation</p>
          </div>

          <div className="flex gap-8">
            <a href="mailto:hello@example.com" className="text-slate-400 hover:text-[#9b87f5] font-medium transition-colors">
              hello@example.com
            </a>
            <a href="#" className="text-slate-400 hover:text-[#9b87f5] font-medium transition-colors">
              LinkedIn
            </a>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Jeremiah Ragay. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-600 hover:text-slate-400 text-sm transition-colors">Privacy</a>
            <a href="#" className="text-slate-600 hover:text-slate-400 text-sm transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
