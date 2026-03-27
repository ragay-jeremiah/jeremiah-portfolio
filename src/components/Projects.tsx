import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Moses Wire Arts Scrollytelling",
      problem: "The client needed a high-end, cinematic web experience to showcase premium wire art collections, moving away from a standard flat gallery.",
      solution: "Developed a performant, animation-heavy scrollytelling site using Next.js and Framer Motion with immersive visuals.",
      result: "Delivered a visually stunning, premium brand experience that elevates the perceived value of the artwork.",
      link: "https://moses-wire-arts.vercel.app/"
    },
    {
      title: "Automated Invoice Tracker",
      problem: "Managing invoices manually led to delayed payments and chaotic bookkeeping for small businesses without an enterprise budget.",
      solution: "Built a production-ready dashboard with dynamic data handling, visual analytics, and a responsive mobile-first UI.",
      result: "Streamlined the invoicing workflow, providing clear visibility into financials and outstanding payments.",
      link: "https://for-aas-invoice-tracker.netlify.app/"
    },
    {
      title: "n8n Automation Guide",
      problem: "Agencies lacking a centralized, easy-to-follow guide struggled to implement structural n8n automations efficiently.",
      solution: "Created an accessible, responsive lead-magnet funnel integrating automation tutorials and booking systems.",
      result: "Effectively captures top-of-funnel leads and establishes technical authority in the business automation space.",
      link: "https://jeremiah-n8n-free-guide.netlify.app/"
    },
    {
      title: "Solar & Roofing Landing Page",
      problem: "The client was driving paid traffic to a generic homepage with no clear lead capture mechanism, resulting in a high bounce rate.",
      solution: "Implemented a dedicated, high-converting landing page with a multi-step qualification form capturing crucial prospect data.",
      result: "Created a predictable flow of booked solar and roofing consultations directly into the sales calendar.",
      link: "https://solarandroofingjeremiah.netlify.app/"
    },
    {
      title: "Personal Brand & Consultation Hub",
      problem: "Needed a centralized hub to consolidate agency services, highlight past work, and provide a seamless booking experience.",
      solution: "Designed a sleek, high-performance portfolio with integrated scheduling and clear service offerings.",
      result: "Improved client acquisition with a professional, cohesive digital footprint that drives consultation bookings.",
      link: "https://workwithjeremiah.netlify.app/"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-[#020617] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#9b87f5] font-semibold tracking-wider uppercase text-sm mb-3 flex items-center gap-3">
            <span className="w-8 h-px bg-[#9b87f5]"></span> Real World Applications
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.2, type: "spring", stiffness: 100 }}
              className="glass-card p-6 sm:p-8 md:p-10 rounded-[2rem] border-slate-800 hover:border-[#9b87f5]/30 hover:shadow-[0_0_60px_-15px_rgba(155,135,245,0.15)] transition-all duration-500 flex flex-col"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 pb-4 border-b border-slate-800/80">
                {proj.title}
              </h3>
              
              <div className="space-y-6 flex-grow">
                <div>
                  <h4 className="text-rose-400 font-semibold uppercase tracking-widest text-xs mb-2">Problem</h4>
                  <p className="text-slate-300 leading-relaxed text-[15px]">{proj.problem}</p>
                </div>
                
                <div>
                  <h4 className="text-[#9b87f5] font-semibold uppercase tracking-widest text-xs mb-2">Solution</h4>
                  <p className="text-slate-300 leading-relaxed text-[15px]">{proj.solution}</p>
                </div>
                
                <div className="bg-[#9b87f5]/10 p-5 rounded-xl border border-[#9b87f5]/20">
                  <h4 className="text-emerald-400 font-semibold uppercase tracking-widest text-xs mb-2">Result</h4>
                  <p className="text-white font-medium leading-relaxed font-sans">{proj.result}</p>
                </div>
              </div>

              {proj.link && (
                <div className="mt-8 pt-4 border-t border-slate-800/80">
                  <a 
                    href={proj.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#9b87f5] hover:text-white font-medium transition-colors group"
                  >
                    View Project Live <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
