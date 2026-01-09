import React, { useState, useRef, useEffect, useCallback } from 'react';
import { PinData } from '../types';
import { Upload, Type, Eye, Palette, Download, Image as ImageIcon, MousePointer2, RotateCcw, RotateCw } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const PinBuilder: React.FC = () => {
  const { t } = useLanguage();

  const INITIAL_PIN: PinData = {
    title: '',
    description: '',
    brandName: '',
    cta: t.builder.ctaOptions[0],
    image: null,
    altText: ''
  };

  // History State Management
  const [history, setHistory] = useState<{
    past: PinData[];
    present: PinData;
    future: PinData[];
  }>({
    past: [],
    present: INITIAL_PIN,
    future: []
  });

  const [isDescExpanded, setIsDescExpanded] = useState(false);

  const { present: pin } = history;
  const canUndo = history.past.length > 0;
  const canRedo = history.future.length > 0;

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Update State Wrapper (pushes to history)
  const updatePin = (newPin: PinData) => {
    setHistory(prev => ({
      past: [...prev.past, prev.present],
      present: newPin,
      future: [] // Clear future on new change
    }));
  };

  // Undo Logic
  const handleUndo = useCallback(() => {
    setHistory(prev => {
      if (prev.past.length === 0) return prev;
      const newPresent = prev.past[prev.past.length - 1];
      const newPast = prev.past.slice(0, -1);
      return {
        past: newPast,
        present: newPresent,
        future: [prev.present, ...prev.future]
      };
    });
  }, []);

  // Redo Logic
  const handleRedo = useCallback(() => {
    setHistory(prev => {
      if (prev.future.length === 0) return prev;
      const newPresent = prev.future[0];
      const newFuture = prev.future.slice(1);
      return {
        past: [...prev.past, prev.present],
        present: newPresent,
        future: newFuture
      };
    });
  }, []);

  // Keyboard Shortcuts (Ctrl+Z, Ctrl+Y, Ctrl+Shift+Z)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'z') {
        if (e.shiftKey) {
          e.preventDefault();
          handleRedo();
        } else {
          e.preventDefault();
          handleUndo();
        }
      } else if ((e.metaKey || e.ctrlKey) && e.key === 'y') {
        e.preventDefault();
        handleRedo();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleUndo, handleRedo]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      updatePin({ ...pin, image: url });
    }
  };

  const handleDownload = () => {
    alert("In the full app, this would combine image and text into a downloadable PNG.");
  };

  // Dynamic font size calculator based on character count
  const getTitleFontSize = (text: string) => {
    const len = text.length;
    if (len <= 15) return 'text-4xl leading-tight'; // Very short
    if (len <= 35) return 'text-3xl leading-tight'; // Medium
    if (len <= 60) return 'text-2xl leading-snug';  // Long
    return 'text-lg leading-normal';                // Very long
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      {/* Editor Column */}
      <div className="bg-white dark:bg-dark-card p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-dark-border overflow-y-auto transition-colors flex flex-col">
        
        {/* Header with Undo/Redo */}
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-pinterest-dark dark:text-white flex items-center gap-2">
            <Palette className="w-6 h-6 text-pinterest-red" />
            {t.builder.title}
            </h2>
            
            <div className="flex items-center gap-2 bg-gray-50 dark:bg-dark-input p-1 rounded-lg border border-gray-200 dark:border-dark-border">
                <button 
                    onClick={handleUndo} 
                    disabled={!canUndo}
                    className="p-2 rounded-md hover:bg-white dark:hover:bg-gray-700 hover:shadow-sm disabled:opacity-30 disabled:cursor-not-allowed transition-all text-gray-600 dark:text-gray-300"
                    title={`${t.builder.undo} (Ctrl+Z)`}
                >
                    <RotateCcw className="w-4 h-4" />
                </button>
                <div className="w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
                <button 
                    onClick={handleRedo} 
                    disabled={!canRedo}
                    className="p-2 rounded-md hover:bg-white dark:hover:bg-gray-700 hover:shadow-sm disabled:opacity-30 disabled:cursor-not-allowed transition-all text-gray-600 dark:text-gray-300"
                    title={`${t.builder.redo} (Ctrl+Y)`}
                >
                    <RotateCw className="w-4 h-4" />
                </button>
            </div>
        </div>

        <div className="space-y-6">
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t.builder.imageLabel}</label>
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-gray-300 dark:border-dark-border rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-pinterest-red dark:hover:border-pinterest-red transition-colors bg-gray-50 dark:bg-dark-input h-48 group"
            >
              <Upload className="w-8 h-8 text-gray-400 dark:text-gray-500 group-hover:text-pinterest-red mb-2 transition-colors" />
              <span className="text-gray-500 dark:text-gray-400 text-sm">{t.builder.uploadPlaceholder}</span>
              <input 
                ref={fileInputRef} 
                type="file" 
                accept="image/*" 
                className="hidden" 
                onChange={handleImageUpload} 
              />
            </div>
          </div>

          {/* Text Fields */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t.builder.titleLabel}</label>
            <input 
              type="text" 
              value={pin.title} 
              onChange={(e) => updatePin({...pin, title: e.target.value})}
              placeholder={t.builder.titlePlaceholder}
              className="w-full p-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-pinterest-red focus:border-transparent outline-none bg-white dark:bg-dark-input text-gray-900 dark:text-white transition-colors"
            />
            <p className="text-xs text-gray-500 mt-1">{t.builder.titleHelp}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t.builder.brandLabel}</label>
            <input 
              type="text" 
              value={pin.brandName} 
              onChange={(e) => updatePin({...pin, brandName: e.target.value})}
              placeholder={t.builder.brandPlaceholder}
              className="w-full p-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-pinterest-red focus:border-transparent outline-none bg-white dark:bg-dark-input text-gray-900 dark:text-white transition-colors"
            />
          </div>

           <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t.builder.ctaLabel}</label>
             <select 
               value={pin.cta}
               onChange={(e) => updatePin({...pin, cta: e.target.value})}
               className="w-full p-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-pinterest-red outline-none bg-white dark:bg-dark-input text-gray-900 dark:text-white transition-colors"
             >
               {t.builder.ctaOptions.map(opt => <option key={opt}>{opt}</option>)}
             </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t.builder.descLabel}</label>
            <textarea 
              value={pin.description} 
              onChange={(e) => updatePin({...pin, description: e.target.value})}
              placeholder={t.builder.descPlaceholder}
              rows={4}
              className="w-full p-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-pinterest-red focus:border-transparent outline-none resize-none bg-white dark:bg-dark-input text-gray-900 dark:text-white transition-colors"
            />
          </div>

          <button 
            onClick={handleDownload}
            className="w-full bg-pinterest-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            {t.builder.export}
          </button>
        </div>
      </div>

      {/* Preview Column */}
      <div className="bg-gray-100 dark:bg-dark-input p-6 rounded-2xl flex flex-col items-center justify-center overflow-y-auto border border-transparent dark:border-dark-border transition-colors">
        <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-400 mb-4 flex items-center gap-2">
          <Eye className="w-5 h-5" />
          {t.builder.preview}
        </h3>
        
        {/* The Pin Itself - simulated Pinterest look */}
        <div className="w-[300px] bg-white dark:bg-[#252525] rounded-[32px] overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-[1.01] hover:shadow-3xl">
          {/* Image Container (2:3 aspect ratio approximately) */}
          <div className="relative w-full h-[450px] bg-gray-200 dark:bg-[#333] flex items-center justify-center overflow-hidden group">
            {pin.image ? (
              <img src={pin.image} alt="Pin Preview" className="w-full h-full object-cover" />
            ) : (
              <div className="text-gray-400 flex flex-col items-center p-6 text-center">
                <ImageIcon className="w-12 h-12 mb-2 opacity-50" />
                <span className="text-sm">{t.builder.noImage}</span>
              </div>
            )}
            
            {/* Dynamic Text Overlay */}
            {pin.title && (
                <div className="absolute inset-x-4 top-[20%] flex flex-col items-center justify-center text-center z-10">
                    <div className="bg-white/95 dark:bg-black/85 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20 w-full transform rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
                        <h2 
                          className={`${getTitleFontSize(pin.title)} font-black text-gray-900 dark:text-white tracking-tight`}
                          dir="auto"
                        >
                            {pin.title}
                        </h2>
                        
                        {/* CTA Button */}
                        {pin.cta && (
                             <div className="mt-4 group/cta">
                                <span className="inline-flex items-center gap-2 bg-pinterest-red text-white text-sm px-6 py-2.5 rounded-full font-bold shadow-lg hover:shadow-pinterest-red/40 hover:scale-105 transition-all duration-300 cursor-pointer border border-white/20 relative overflow-hidden">
                                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover/cta:translate-y-0 transition-transform duration-300"></span>
                                    <span className="relative z-10">{pin.cta}</span>
                                    <MousePointer2 className="w-4 h-4 relative z-10 fill-current opacity-90" />
                                </span>
                             </div>
                        )}
                    </div>
                </div>
            )}
            
            {/* Brand Watermark - Centered Bottom */}
            {pin.brandName && (
                <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
                    <div className="bg-black/30 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase border border-white/10 shadow-lg">
                        {pin.brandName}
                    </div>
                </div>
            )}
            
            {/* Overlay Gradient for readability if no background box used (optional, keeping minimal for now) */}
            {!pin.title && (
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/10 pointer-events-none"></div>
            )}
          </div>
          
          {/* Pin Meta Data (Below Image in Feed) */}
          <div className="p-4 bg-white dark:bg-[#252525]">
             <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1 truncate leading-snug">
               {pin.title || t.builder.title}
             </h3>
             <div 
               className="cursor-pointer group"
               onClick={() => setIsDescExpanded(!isDescExpanded)}
               title={isDescExpanded ? "Show less" : "Show more"}
             >
               <p className={`text-gray-600 dark:text-gray-400 text-xs leading-relaxed transition-all ${isDescExpanded ? '' : 'line-clamp-2'}`}>
                 {pin.description || t.builder.descPlaceholder}
               </p>
               {!isDescExpanded && (
                 <span className="text-[10px] font-bold text-gray-900 dark:text-gray-200 mt-1 inline-block hover:underline">
                   {t.builder.ctaOptions[0].includes('Read') ? 'More' : 'المزيد'}
                 </span>
               )}
             </div>
             <div className="mt-3 flex items-center gap-2">
                 <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-[8px] font-bold text-gray-500">
                    {pin.brandName ? pin.brandName.charAt(0).toUpperCase() : "U"}
                 </div>
                 <span className="text-xs font-medium text-gray-700 dark:text-gray-300 truncate max-w-[200px]">
                   {pin.brandName || "Brand"}
                 </span>
             </div>
          </div>
        </div>

        <p className="mt-6 text-xs text-gray-400 dark:text-gray-500 text-center max-w-xs leading-relaxed">
          {t.builder.previewNote}
        </p>
      </div>
    </div>
  );
};