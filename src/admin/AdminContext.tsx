import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import type { ReactNode } from 'react';
import { db, isFirebaseConfigured } from '../lib/firebase';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';

export interface CreativeImage {
  id: string;
  src: string;
  alt: string;
  category: 'ad-creatives' | 'web-designs';
}

export interface CategoryText {
  id: 'ad-creatives' | 'web-designs';
  title: string;
  description: string;
}

interface AdminContextType {
  isEditorMode: boolean;
  enterEditorMode: () => void;
  exitEditorMode: () => void;
  
  images: CreativeImage[];
  addImage: (image: Omit<CreativeImage, 'id'>) => void;
  deleteImage: (id: string) => void;
  reorderImages: (images: CreativeImage[]) => void;
  
  categories: CategoryText[];
  updateCategoryText: (id: 'ad-creatives' | 'web-designs', title: string, description: string) => void;
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

const DEFAULT_CATEGORIES: CategoryText[] = [
  {
    id: 'ad-creatives',
    title: 'Conversion-Driven Ad Creatives',
    description: 'Strategic visual assets built for high-performance paid social and search campaigns.',
  },
  {
    id: 'web-designs',
    title: 'Web Design & Solutions',
    description: 'Clean, conversion-optimized website mockups designed to scale businesses.',
  },
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

  const [categories, setCategories] = useState<CategoryText[]>(() => {
    try {
      const saved = localStorage.getItem('portfolio_categories');
      return saved ? JSON.parse(saved) : DEFAULT_CATEGORIES;
    } catch {
      return DEFAULT_CATEGORIES;
    }
  });

  // Listen for realtime Firebase updates if configured
  useEffect(() => {
    if (isFirebaseConfigured && db) {
      const unsubscribe = onSnapshot(doc(db, 'siteConfig', 'portfolioData'), (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.images) setImages(data.images);
          if (data.categories) setCategories(data.categories);
        }
      });
      return () => unsubscribe();
    }
  }, []);

  // Centralized persistence logic
  const persistChanges = useCallback(async (newImages: CreativeImage[], newCategories: CategoryText[]) => {
    setImages(newImages);
    setCategories(newCategories);
    
    // Save locally as a fallback
    localStorage.setItem('portfolio_images', JSON.stringify(newImages));
    localStorage.setItem('portfolio_categories', JSON.stringify(newCategories));
    
    // Save to Firebase securely if configured
    if (isFirebaseConfigured && db) {
      try {
        await setDoc(doc(db, 'siteConfig', 'portfolioData'), {
          images: newImages,
          categories: newCategories
        }, { merge: true });
      } catch (error) {
        console.error("Firebase save error:", error);
      }
    }
  }, []);

  const enterEditorMode = useCallback(() => setIsEditorMode(true), []);
  const exitEditorMode = useCallback(() => setIsEditorMode(false), []);

  const addImage = useCallback((image: Omit<CreativeImage, 'id'>) => {
    const newImage: CreativeImage = { ...image, id: `img-${Date.now()}` };
    persistChanges([...images, newImage], categories);
  }, [images, categories, persistChanges]);

  const deleteImage = useCallback((id: string) => {
    persistChanges(images.filter(img => img.id !== id), categories);
  }, [images, categories, persistChanges]);

  const reorderImages = useCallback((newImages: CreativeImage[]) => {
    persistChanges(newImages, categories);
  }, [categories, persistChanges]);

  const updateCategoryText = useCallback((id: 'ad-creatives' | 'web-designs', title: string, description: string) => {
    const newCategories = categories.map(cat => 
      cat.id === id ? { ...cat, title, description } : cat
    );
    persistChanges(images, newCategories);
  }, [images, categories, persistChanges]);

  return (
    <AdminContext.Provider value={{
      isEditorMode, enterEditorMode, exitEditorMode,
      images, addImage, deleteImage, reorderImages,
      categories, updateCategoryText
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
