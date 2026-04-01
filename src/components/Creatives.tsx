import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Zap, Layout, X, Plus, GripVertical } from 'lucide-react';
import { useAdmin } from '../admin/AdminContext';
import type { CreativeImage } from '../admin/AdminContext';
import { CloudinaryUploader } from '../admin/CloudinaryUploader';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function SortableImageCard({ item }: { item: CreativeImage }) {
  const { isEditorMode, deleteImage } = useAdmin();
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: item.id,
    disabled: !isEditorMode,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : 1,
    opacity: isDragging ? 0.8 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} className={`touch-none ${isEditorMode ? 'relative' : ''}`}>
      <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800/80 hover:border-[#9b87f5]/40 transition-all duration-500">
        
        {/* Drag target area covering the image */}
        <div 
          {...attributes} 
          {...listeners} 
          className={`w-full h-full ${isEditorMode ? 'cursor-grab active:cursor-grabbing outline-none' : ''}`}
        >
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none select-none"
            draggable={false}
          />
        </div>

        {/* Normal hover overlay */}
        {!isEditorMode && (
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 pointer-events-none">
            <span className="text-white text-sm font-medium">{item.alt}</span>
          </div>
        )}

        {/* Editor mode overlay */}
        {isEditorMode && (
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 pointer-events-none">
            <div className="flex items-center gap-2 text-white/90 font-semibold text-xs bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm">
              <GripVertical size={14} /> Drag to reorder
            </div>
            
            {/* 
              We need pointer-events-auto here so the button is clickable,
              but we stop propagation so it doesn't trigger the drag event behind it 
            */}
            <button
              onPointerDown={(e) => e.stopPropagation()} 
              onClick={(e) => {
                e.stopPropagation();
                deleteImage(item.id);
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-500/90 text-white text-sm font-bold hover:bg-rose-500 transition-colors pointer-events-auto"
            >
              <X size={14} /> Remove
            </button>
          </div>
        )}

        {/* Editor mode badge */}
        {isEditorMode && (
          <div className="absolute top-2 left-2 bg-[#9b87f5] text-white text-[10px] font-bold px-2 py-1 rounded-full opacity-80 pointer-events-none">
            EDITOR
          </div>
        )}
      </div>
    </div>
  );
}

export default function Creatives() {
  const { images, categories, updateCategoryText, isEditorMode, reorderImages } = useAdmin();
  const [uploaderOpen, setUploaderOpen] = useState(false);
  const [uploadCategory, setUploadCategory] = useState<'ad-creatives' | 'web-designs'>('ad-creatives');

  // DND Sensors (require minimum distance of 5px to distinguish clicks from drags)
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const openUploader = (category: 'ad-creatives' | 'web-designs') => {
    setUploadCategory(category);
    setUploaderOpen(true);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id && over) {
      const oldIndex = images.findIndex((img) => img.id === active.id);
      const newIndex = images.findIndex((img) => img.id === over.id);
      reorderImages(arrayMove(images, oldIndex, newIndex));
    }
  };

  const handleTextBlur = (categoryId: 'ad-creatives' | 'web-designs', field: 'title' | 'description', e: React.FocusEvent<HTMLElement>) => {
    const newValue = e.currentTarget.innerText.trim();
    const cat = categories.find(c => c.id === categoryId);
    if (cat) {
      if (field === 'title' && newValue !== cat.title) {
        updateCategoryText(categoryId, newValue, cat.description);
      } else if (field === 'description' && newValue !== cat.description) {
        updateCategoryText(categoryId, cat.title, newValue);
      }
    }
  };

  const getIcon = (id: string) => {
    return id === 'ad-creatives' ? <Zap className="text-[#9b87f5]" /> : <Layout className="text-[#9b87f5]" />;
  };

  return (
    <section id="creatives" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#9b87f5]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        <div className="mb-20 text-center lg:text-left">
          <p className="text-[#9b87f5] font-semibold tracking-wider uppercase text-sm mb-3 flex items-center justify-center lg:justify-start gap-3">
            <span className="hidden lg:block w-8 h-px bg-[#9b87f5]"></span> Visual Identity
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Creatives <span className="text-[#9b87f5]/60">&amp; Design</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl leading-relaxed">
            A selection of strategic creatives and web solutions built for brands that value performance, clarity, and impact.
          </p>
        </div>

        {/* Wrap everything in DndContext so drags can theoretically happen across categories (though we sort inside contexts) */}
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <div className="space-y-24">
            {categories.map((category) => {
              const categoryImages = images.filter(img => img.category === category.id);
              
              return (
                <div key={category.id} className="relative">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-10 gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 flex items-center gap-3">
                        {getIcon(category.id)}
                        <span 
                          contentEditable={isEditorMode}
                          suppressContentEditableWarning
                          onBlur={(e) => handleTextBlur(category.id, 'title', e)}
                          className={`transition-colors outline-none ${isEditorMode ? 'hover:bg-slate-800/50 p-1 -ml-1 rounded-md min-w-[200px] border border-transparent focus:border-[#9b87f5]/50' : ''}`}
                        >
                          {category.title}
                        </span>
                      </h3>
                      <p 
                        contentEditable={isEditorMode}
                        suppressContentEditableWarning
                        onBlur={(e) => handleTextBlur(category.id, 'description', e)}
                        className={`text-slate-400 outline-none transition-colors ${isEditorMode ? 'hover:bg-slate-800/50 p-1 -ml-1 rounded-md min-w-[300px] border border-transparent focus:border-[#9b87f5]/50' : ''}`}
                      >
                        {category.description}
                      </p>
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
                  </div>

                  <SortableContext items={categoryImages.map(img => img.id)} strategy={rectSortingStrategy}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categoryImages.map((item) => (
                        <SortableImageCard key={item.id} item={item} />
                      ))}

                      {/* Add placeholder card in editor mode */}
                      {isEditorMode && (
                        <button
                          onClick={() => openUploader(category.id)}
                          className="aspect-[4/3] rounded-2xl border-2 border-dashed border-slate-700 hover:border-[#9b87f5]/60 hover:bg-[#9b87f5]/5 transition-all duration-300 flex flex-col items-center justify-center gap-3 text-slate-600 hover:text-[#9b87f5] h-full"
                        >
                          <Plus size={32} />
                          <span className="text-sm font-semibold">Add Image</span>
                        </button>
                      )}
                    </div>
                  </SortableContext>

                  {categoryImages.length === 0 && !isEditorMode && (
                    <div className="text-center py-16 text-slate-600">
                      <p>No images yet in this category.</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </DndContext>
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
