import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pencil, X, Plus, LogOut, Upload, Download } from 'lucide-react';
import { useAdmin } from './AdminContext';
import { CloudinaryUploader } from './CloudinaryUploader';

export function EditorToolbar() {
  const { isEditorMode, exitEditorMode, images } = useAdmin();
  const [uploaderOpen, setUploaderOpen] = useState(false);
  const [uploadCategory, setUploadCategory] = useState<'ad-creatives' | 'web-designs'>('ad-creatives');

  const openUploader = (category: 'ad-creatives' | 'web-designs') => {
    setUploadCategory(category);
    setUploaderOpen(true);
  };

  const exportConfig = () => {
    const config = { images };
    const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolio-config.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <AnimatePresence>
        {isEditorMode && (
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="fixed top-0 left-0 right-0 z-[90] bg-gradient-to-r from-[#9b87f5] via-[#7c5cbf] to-[#9b87f5] text-white shadow-xl shadow-[#9b87f5]/20"
          >
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
              {/* Left: Status */}
              <div className="flex items-center gap-3">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                </div>
                <div className="flex items-center gap-2">
                  <Pencil size={14} />
                  <span className="font-bold text-sm">Editor Mode Active</span>
                </div>
              </div>

              {/* Center: Actions */}
              <div className="hidden sm:flex items-center gap-2">
                <button
                  onClick={() => openUploader('ad-creatives')}
                  className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-sm font-semibold transition-colors"
                >
                  <Plus size={14} /> Add Ad Creative
                </button>
                <button
                  onClick={() => openUploader('web-designs')}
                  className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-sm font-semibold transition-colors"
                >
                  <Upload size={14} /> Add Web Design
                </button>
                <button
                  onClick={exportConfig}
                  className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-sm font-semibold transition-colors"
                >
                  <Download size={14} /> Export Config
                </button>
              </div>

              {/* Right: Exit */}
              <button
                onClick={exitEditorMode}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-sm font-semibold transition-colors"
              >
                <LogOut size={14} />
                <span className="hidden sm:inline">Exit Editor</span>
                <X size={14} className="sm:hidden" />
              </button>
            </div>

            {/* Mobile actions bar */}
            <div className="sm:hidden flex items-center gap-2 px-4 pb-3 overflow-x-auto">
              <button
                onClick={() => openUploader('ad-creatives')}
                className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-xs font-semibold transition-colors"
              >
                <Plus size={12} /> Ad Creative
              </button>
              <button
                onClick={() => openUploader('web-designs')}
                className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-xs font-semibold transition-colors"
              >
                <Upload size={12} /> Web Design
              </button>
              <button
                onClick={exportConfig}
                className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-xs font-semibold transition-colors"
              >
                <Download size={12} /> Export
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cloudinary Uploader Modal */}
      <AnimatePresence>
        {uploaderOpen && (
          <CloudinaryUploader
            category={uploadCategory}
            onClose={() => setUploaderOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
