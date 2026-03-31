import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import type { ReactNode } from 'react';

export interface CreativeImage {
  id: string;
  src: string;
  alt: string;
  category: 'ad-creatives' | 'web-designs';
}

interface AdminContextType {
  isEditorMode: boolean;
  enterEditorMode: () => void;
  exitEditorMode: () => void;
  images: CreativeImage[];
  addImage: (image: Omit<CreativeImage, 'id'>) => void;
  deleteImage: (id: string) => void;
  reorderImages: (images: CreativeImage[]) => void;
}

const AdminContext = createContext<AdminContextType | null>(null);

const DEFAULT_IMAGES: CreativeImage[] = [
  { id: 'ad-1', src: '/creatives/1.png', alt: 'Ad Creative 1', category: 'ad-creatives' },
  { id: 'ad-2', src: '/creatives/2.png', alt: 'Ad Creative 2', category: 'ad-creatives' },
  { id: 'ad-3', src: '/creatives/creatives image 1.png', alt: 'Ad Creative 3', category: 'ad-creatives' },
  { id: 'ad-4', src: '/creatives/creatives image 2.png', alt: 'Ad Creative 4', category: 'ad-creatives' },
  { id: 'ad-5', src: '/creatives/creatives image 3.png', alt: 'Ad Creative 5', category: 'ad-creatives' },
  { id: 'web-1', src: '/creatives/Website Created 1.png', alt: 'Web Design 1', category: 'web-designs' },
  { id: 'web-2', src: '/creatives/Website Created 2.png', alt: 'Web Design 2', category: 'web-designs' },
  { id: 'web-3', src: '/creatives/Website Created 3.png', alt: 'Web Design 3', category: 'web-designs' },
  { id: 'web-4', src: '/creatives/Website Created 4.png', alt: 'Web Design 4', category: 'web-designs' },
];

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isEditorMode, setIsEditorMode] = useState(false);
  const [images, setImages] = useState<CreativeImage[]>(() => {
    try {
      const saved = localStorage.getItem('portfolio_images');
      return saved ? JSON.parse(saved) : DEFAULT_IMAGES;
    } catch {
      return DEFAULT_IMAGES;
    }
  });

  useEffect(() => {
    localStorage.setItem('portfolio_images', JSON.stringify(images));
  }, [images]);

  const enterEditorMode = useCallback(() => setIsEditorMode(true), []);
  const exitEditorMode = useCallback(() => setIsEditorMode(false), []);

  const addImage = useCallback((image: Omit<CreativeImage, 'id'>) => {
    const newImage: CreativeImage = { ...image, id: `img-${Date.now()}` };
    setImages(prev => [...prev, newImage]);
  }, []);

  const deleteImage = useCallback((id: string) => {
    setImages(prev => prev.filter(img => img.id !== id));
  }, []);

  const reorderImages = useCallback((newImages: CreativeImage[]) => {
    setImages(newImages);
  }, []);

  return (
    <AdminContext.Provider value={{
      isEditorMode, enterEditorMode, exitEditorMode,
      images, addImage, deleteImage, reorderImages,
    }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error('useAdmin must be used inside AdminProvider');
  return ctx;
}
