import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, X, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { useAdmin } from './AdminContext';
import type { CreativeImage } from './AdminContext';

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'dvbgohxka';
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || 'portfolio_uploads';

interface CloudinaryUploaderProps {
  category: 'ad-creatives' | 'web-designs';
  onClose: () => void;
}

type UploadStatus = 'idle' | 'uploading' | 'success' | 'error';

export function CloudinaryUploader({ category, onClose }: CloudinaryUploaderProps) {
  const { addImage } = useAdmin();
  const [status, setStatus] = useState<UploadStatus>('idle');
  const [dragOver, setDragOver] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [altText, setAltText] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const uploadToCloudinary = async (file: File) => {
    setStatus('uploading');
    setErrorMsg('');

    // Create local preview
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target?.result as string);
    reader.readAsDataURL(file);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', UPLOAD_PRESET);
      formData.append('folder', 'portfolio/creatives');

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        { method: 'POST', body: formData }
      );

      if (!res.ok) throw new Error('Upload failed');

      const data = await res.json();
      setUploadedUrl(data.secure_url);
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg('Upload failed. Check your Cloudinary preset settings.');
    }
  };

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setErrorMsg('Please upload an image file.');
      return;
    }
    uploadToCloudinary(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleAddToGallery = () => {
    if (!uploadedUrl) return;
    const imageData: Omit<CreativeImage, 'id'> = {
      src: uploadedUrl,
      alt: altText || `${category === 'ad-creatives' ? 'Ad Creative' : 'Web Design'} ${Date.now()}`,
      category,
    };
    addImage(imageData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[200] flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#030712] border border-slate-800 rounded-3xl w-full max-w-lg p-8 shadow-2xl"
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-xl font-bold text-white">Upload Image</h3>
            <p className="text-slate-500 text-sm mt-1">
              To: <span className="text-[#9b87f5]">
                {category === 'ad-creatives' ? 'Ad Creatives' : 'Web Design'}
              </span>
            </p>
          </div>
          <button onClick={onClose} className="text-slate-500 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Upload Area */}
        {status === 'idle' && (
          <div
            onDrop={handleDrop}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onClick={() => inputRef.current?.click()}
            className={`border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 ${
              dragOver
                ? 'border-[#9b87f5] bg-[#9b87f5]/10'
                : 'border-slate-700 hover:border-[#9b87f5]/50 hover:bg-slate-900/50'
            }`}
          >
            <Upload size={40} className="text-slate-500 mx-auto mb-4" />
            <p className="text-white font-semibold mb-2">Drag & drop or click to upload</p>
            <p className="text-slate-500 text-sm">PNG, JPG, WebP supported</p>
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleInputChange}
            />
          </div>
        )}

        {/* Uploading State */}
        {status === 'uploading' && (
          <div className="text-center py-12">
            {preview && (
              <img src={preview} alt="preview" className="w-32 h-24 object-cover rounded-xl mx-auto mb-6 opacity-60" />
            )}
            <Loader2 size={36} className="text-[#9b87f5] mx-auto mb-4 animate-spin" />
            <p className="text-white font-semibold">Uploading to Cloudinary...</p>
            <p className="text-slate-500 text-sm mt-1">This will be optimized and CDN-served</p>
          </div>
        )}

        {/* Success State */}
        {status === 'success' && uploadedUrl && (
          <div className="space-y-5">
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <img src={uploadedUrl} alt="uploaded" className="w-full h-full object-cover" />
              <div className="absolute top-3 right-3 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <CheckCircle size={12} /> Uploaded
              </div>
            </div>

            <div>
              <label className="text-sm text-slate-400 mb-2 block">Alt text / caption <span className="text-slate-600">(optional)</span></label>
              <input
                type="text"
                value={altText}
                onChange={e => setAltText(e.target.value)}
                placeholder="e.g. Obvi Burn Ad Creative"
                className="w-full bg-slate-800/80 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#9b87f5] transition-colors"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleAddToGallery}
                className="flex-1 py-4 rounded-2xl bg-[#9b87f5] text-white font-bold hover:bg-[#8570e6] transition-all hover:-translate-y-0.5"
              >
                Add to Gallery
              </button>
              <button
                onClick={() => { setStatus('idle'); setPreview(null); setUploadedUrl(null); }}
                className="px-5 py-4 rounded-2xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                Replace
              </button>
            </div>
          </div>
        )}

        {/* Error State */}
        {status === 'error' && (
          <div className="text-center py-8">
            <AlertCircle size={40} className="text-rose-400 mx-auto mb-4" />
            <p className="text-white font-semibold mb-2">Upload Failed</p>
            <p className="text-slate-500 text-sm mb-6">{errorMsg}</p>
            <button
              onClick={() => { setStatus('idle'); setErrorMsg(''); }}
              className="px-8 py-3 rounded-2xl bg-slate-800 text-white hover:bg-slate-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
