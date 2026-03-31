import { motion } from 'framer-motion';
import { Image as ImageIcon, ExternalLink, Zap, Layout } from 'lucide-react';

export default function Creatives() {
  const creativeCategories = [
    {
      id: "ad-creatives",
      title: "Conversion-Driven Ad Creatives",
      description: "Strategic visual assets built for high-performance paid social and search campaigns.",
      items: [
        { src: "/creatives/1.png", alt: "Ad Creative 1" },
        { src: "/creatives/2.png", alt: "Ad Creative 2" },
        { src: "/creatives/creatives image 1.png", alt: "Ad Creative 3" },
        { src: "/creatives/creatives image 2.png", alt: "Ad Creative 4" },
        { src: "/creatives/creatives image 3.png", alt: "Ad Creative 5" }
      ]
    },
    {
      id: "web-designs",
      title: "Web Design & Solutions",
      description: "Clean, conversion-optimized website mockups designed to scale businesses.",
      items: [
        { src: "/creatives/Website Created 1.png", alt: "Web Design 1" },
        { src: "/creatives/Website Created 2.png", alt: "Web Design 2" },
        { src: "/creatives/Website Created 3.png", alt: "Web Design 3" },
        { src: "/creatives/Website Created 4.png", alt: "Web Design 4" }
      ]
    }
  ];

  return (
    <section id="creatives" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#9b87f5]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center lg:text-left"
        >
          <p className="text-[#9b87f5] font-semibold tracking-wider uppercase text-sm mb-3 flex items-center justify-center lg:justify-start gap-3">
            <span className="hidden lg:block w-8 h-px bg-[#9b87f5]"></span> Visual Identity
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Creatives <span className="text-[#9b87f5]/60">& Design</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl leading-relaxed">
            A selection of strategic creatives and web solutions built for brands that value performance, clarity, and impact.
          </p>
        </motion.div>

        <div className="space-y-24">
          {creativeCategories.map((category) => (
            <div key={category.id} className="relative">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6"
              >
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 flex items-center gap-3">
                    {category.id === 'ad-creatives' ? <Zap className="text-[#9b87f5]" /> : <Layout className="text-[#9b87f5]" />}
                    {category.title}
                  </h3>
                  <p className="text-slate-400">{category.description}</p>
                </div>
                <div className="h-px bg-slate-800 flex-grow mx-8 hidden lg:block opacity-50"></div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden glass-card border-slate-800/80 hover:border-[#9b87f5]/40 transition-all duration-500"
                  >
                    <img 
                      src={item.src} 
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <div className="flex items-center gap-2 text-white font-medium">
                        <ImageIcon size={18} className="text-[#9b87f5]" />
                        <span>Enlarge View</span>
                        <ExternalLink size={14} className="opacity-60" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
