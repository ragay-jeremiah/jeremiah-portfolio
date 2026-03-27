import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-slate-800/80 pt-24">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: Info */}
            <div>
              <p className="text-[#9b87f5] font-semibold tracking-wider uppercase text-sm mb-3 flex items-center gap-3">
                <span className="w-8 h-px bg-[#9b87f5]"></span> Let's Connect
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8">
                Ready to cross <br /> the bridge?
              </h2>
              <p className="text-lg text-slate-400 max-w-md mb-12">
                Stop taking the long route — trial and error, wasted time, wrong hires. Drop me a message to find the direct path to growth.
              </p>
              
              <div className="space-y-4">
                <a href="mailto:hello@example.com" className="flex items-center gap-5 p-5 glass-card rounded-2xl hover:border-[#9b87f5] transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-slate-800/80 flex items-center justify-center text-[#9b87f5] group-hover:bg-[#9b87f5] group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                    <p className="text-white font-medium">hello@example.com</p>
                  </div>
                </a>
                
                <a href="#" className="flex items-center gap-5 p-5 glass-card rounded-2xl hover:border-[#9b87f5] transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-slate-800/80 flex items-center justify-center text-[#9b87f5] group-hover:bg-[#9b87f5] group-hover:text-white transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-1">LinkedIn</p>
                    <p className="text-white font-medium">Jeremiah Ragay</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: Availability Card */}
            <div className="glass-card rounded-[2.5rem] p-10 lg:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#9b87f5]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
              
              <h3 className="text-2xl font-bold text-white mb-6">Availability</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Currently open for new automation projects, CRM setups, and technical VA engagements. Usually responds within 24 hours.
              </p>
              
              <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl flex items-center gap-4 mb-8">
                <div className="relative flex h-4 w-4 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Accepting new clients</p>
                  <p className="text-xs text-slate-500 mt-0.5">EST Timezone (Flexible)</p>
                </div>
              </div>
              
              <a href="mailto:hello@example.com" className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#9b87f5] text-white font-bold hover:bg-[#8570e6] transition-all hover:-translate-y-1 group">
                Send an Email
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/60 bg-[#020617] py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Jeremiah Ragay. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 hover:text-[#9b87f5] text-sm transition-colors">Privacy</a>
            <a href="#" className="text-slate-500 hover:text-[#9b87f5] text-sm transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </>
  );
}
