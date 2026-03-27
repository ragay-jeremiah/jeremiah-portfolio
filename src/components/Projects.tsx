import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, CircleDot, Calendar, User } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Moses Wire Arts Scrollytelling",
      subtitle: "High-end Brand Experience",
      date: "Dec 2025",
      managedBy: "Jeremiah R.",
      milestones: [
        { label: "Problem Identification", desc: "Flat gallery fails to convey premium value.", status: "completed" },
        { label: "Scrollytelling Design", desc: "Implemented immersive Next.js animations.", status: "completed" },
        { label: "Production Launch", desc: "Live site driving premium art sales.", status: "completed" }
      ],
      link: "https://moses-wire-arts.vercel.app/"
    },
    {
      title: "Automated Invoice Tracker",
      subtitle: "SaaS Financial Dashboard",
      date: "Feb 2026",
      managedBy: "Jeremiah R.",
      milestones: [
        { label: "UX Research", desc: "Identified bookkeeping chaos in SMBs.", status: "completed" },
        { label: "Data Architecture", desc: "Built dynamic filtering and visual analytics.", status: "completed" },
        { label: "System Integration", desc: "Automated manual invoicing workflows.", status: "completed" }
      ],
      link: "https://for-aas-invoice-tracker.netlify.app/"
    },
    {
      title: "n8n Automation Guide",
      subtitle: "Strategic Lead Magnet",
      date: "Jan 2026",
      managedBy: "Jeremiah R.",
      milestones: [
        { label: "Strategy & Content", desc: "Mapped out n8n automation tutorials.", status: "completed" },
        { label: "Lead Funnel Setup", desc: "Built responsive lead capture system.", status: "completed" },
        { label: "Conversion Optimization", desc: "Booking rates up by 35%.", status: "completed" }
      ],
      link: "https://jeremiah-n8n-free-guide.netlify.app/"
    },
    {
      title: "Solar & Roofing Landing Page",
      subtitle: "High-Conversion Lead Gen",
      date: "Nov 2025",
      managedBy: "Jeremiah R.",
      milestones: [
        { label: "Funnel Analysis", desc: "Generic homepage high bounce rate fixed.", status: "completed" },
        { label: "Multi-step Capture", desc: "Qualification form for data capture.", status: "completed" },
        { label: "Predictable Growth", desc: "Automated consultation bookings.", status: "completed" }
      ],
      link: "https://solarandroofingjeremiah.netlify.app/"
    },
    {
      title: "Agency Consultation Hub",
      subtitle: "Unified Service Branding",
      date: "Ongoing",
      managedBy: "Jeremiah R.",
      milestones: [
        { label: "Brand Consolidation", desc: "Agency services under one unified hub.", status: "completed" },
        { label: "Project Showcasing", desc: "Refined past work visualization.", status: "completed" },
        { label: "Booking Streamline", desc: "Integrated seamless scheduling hub.", status: "in-progress" }
      ],
      link: "https://workwithjeremiah.netlify.app/"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Decorative backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#9b87f5]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center lg:text-left"
        >
          <p className="text-[#9b87f5] font-semibold tracking-wider uppercase text-sm mb-3 flex items-center justify-center lg:justify-start gap-3">
            <span className="hidden lg:block w-8 h-px bg-[#9b87f5]"></span> Recent Work
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Projects <span className="text-[#9b87f5]/60">& Progress</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((proj, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card flex flex-col p-8 rounded-[2rem] border-slate-800/80 hover:border-[#9b87f5]/40 hover:shadow-[0_20px_60px_-15px_rgba(155,135,245,0.15)] transition-all duration-500 group"
            >
              {/* Card Header */}
              <div className="mb-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-[#9b87f5] transition-colors">
                    {proj.title}
                  </h3>
                  <div className="bg-slate-800/50 p-2 rounded-lg text-slate-400 group-hover:text-[#9b87f5] transition-colors">
                    <Calendar size={18} />
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <User size={14} className="text-[#9b87f5]" /> {proj.managedBy}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                  <span>{proj.date}</span>
                </div>
                <p className="mt-3 text-[#9b87f5]/80 text-sm font-medium uppercase tracking-widest">{proj.subtitle}</p>
              </div>

              {/* Milestones List */}
              <div className="space-y-6 mb-10 flex-grow">
                {proj.milestones.map((milestone, mIdx) => (
                  <div key={mIdx} className="flex gap-4 group/item">
                    <div className="flex flex-col items-center">
                      <div className={`mt-1 h-5 w-5 rounded-full flex items-center justify-center transition-colors ${
                        milestone.status === 'completed' 
                          ? 'bg-emerald-500/20 text-emerald-400' 
                          : 'bg-[#9b87f5]/20 text-[#9b87f5]'
                      }`}>
                        {milestone.status === 'completed' 
                          ? <CheckCircle2 size={14} /> 
                          : <CircleDot size={14} className="animate-pulse" />
                        }
                      </div>
                      {mIdx !== proj.milestones.length - 1 && (
                        <div className="w-px h-full bg-slate-800 mt-2"></div>
                      )}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-[15px] mb-1 group-hover/item:text-[#9b87f5] transition-colors">
                        {milestone.label}
                      </p>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {milestone.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="pt-6 border-t border-slate-800/80">
                <a 
                  href={proj.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-slate-800/50 text-white font-bold hover:bg-[#9b87f5] hover:text-white transition-all duration-300 group/btn overflow-hidden relative"
                >
                  <span className="relative z-10">Next Step: View Live</span>
                  <ExternalLink size={18} className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
