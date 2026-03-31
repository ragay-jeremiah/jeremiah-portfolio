import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Layout, X, Plus, GripVertical } from 'lucide-react';
import { useAdmin } from '../admin/AdminContext';
import { CloudinaryUploader } from '../admin/CloudinaryUploader';

export default function Creatives() {
  const { images, isEditorMode, deleteImage } = useAdmin();
  const [uploaderOpen, setUploaderOpen] = useState(false);
  const [uploadCategory, setUploadCategory] = useState<'ad-creatives' | 'web-designs'>('ad-creatives');

  const categories = [
    {
      id: 'ad-creatives' as const,
      title: 'Conversion-Driven Ad Creatives',
      description: 'Strategic visual assets built for high-performance paid social and search campaigns.',
      icon: <Zap className="text-[#9b87f5]" />,
    },
    {
      id: 'web-designs' as const,
      title: 'Web Design & Solutions',
      description: 'Clean, conversion-optimized website mockups designed to scale businesses.',
      icon: <Layout className="text-[#9b87f5]" />,
    },
  ];

  const openUploader = (category: 'ad-creatives' | 'web-designs') => {
    setUploadCategory(category);
    setUploaderOpen(true);
  };

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
            Creatives <span className="text-[#9b87f5]/60">&amp; Design</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl leading-relaxed">
            A selection of strategic creatives and web solutions built for brands that value performance, clarity, and impact.
          </p>
        </motion.div>

        <div className="space-y-24">
          {categories.map((category) => {
            const categoryImages = images.filter(img => img.category === category.id);

            return (
              <div key={category.id} className="relative">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col lg:flex-row lg:items-center justify-between mb-10 gap-6"
                >
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 flex items-center gap-3">
                      {category.icon}
                      {category.title}
                    </h3>
                    <p className="text-slate-400">{category.description}</p>
                  </div>

                  {/* Add button only in editor mode */}
                  {isEditorMode && (
                    <button
                      onClick={() => openUploader(category.id)}
                      className="flex-shrink-0 flex items-center gap-2 px-5 py-3 rounded-2xl border-2 border-dashed border-[#9b87f5]/60 text-[#9b87f5] hover:bg-[#9b87f5]/10 transition-all font-semibold text-sm"
                    >
                      <Plus size={18} /> Add Image
                    </button>
                  )}

                  <div className="h-px bg-slate-800 flex-grow mx-8 hidden lg:block opacity-50"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryImages.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800/80 hover:border-[#9b87f5]/40 transition-all duration-500"
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Normal hover overlay */}
                      {!isEditorMode && (
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                          <span className="text-white text-sm font-medium">{item.alt}</span>
                        </div>
                      )}

                      {/* Editor mode overlay */}
                      {isEditorMode && (
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                          <div className="flex items-center gap-2 text-white/60 text-xs">
                            <GripVertical size={14} /> Drag to reorder
                          </div>
                          <button
                            onClick={() => deleteImage(item.id)}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-500/90 text-white text-sm font-bold hover:bg-rose-500 transition-colors"
                          >
                            <X size={14} /> Remove
                          </button>
                        </div>
                      )}

                      {/* Editor mode badge */}
                      {isEditorMode && (
                        <div className="absolute top-2 left-2 bg-[#9b87f5] text-white text-[10px] font-bold px-2 py-1 rounded-full opacity-80">
                          EDITOR
                        </div>
                      )}
                    </motion.div>
                  ))}

                  {/* Add placeholder card in editor mode */}
                  {isEditorMode && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onClick={() => openUploader(category.id)}
                      className="aspect-[4/3] rounded-2xl border-2 border-dashed border-slate-700 hover:border-[#9b87f5]/60 hover:bg-[#9b87f5]/5 transition-all duration-300 flex flex-col items-center justify-center gap-3 text-slate-600 hover:text-[#9b87f5]"
                    >
                      <Plus size={32} />
                      <span className="text-sm font-semibold">Add Image</span>
                    </motion.button>
                  )}
                </div>

                {categoryImages.length === 0 && !isEditorMode && (
                  <div className="text-center py-16 text-slate-600">
                    <p>No images yet in this category.</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Uploader Modal */}
      <AnimatePresence>
        {uploaderOpen && (
          <CloudinaryUploader
            category={uploadCategory}
            onClose={() => setUploaderOpen(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
