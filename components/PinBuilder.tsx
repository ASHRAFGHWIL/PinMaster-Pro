import React, { useState, useRef } from 'react';
import { PinData } from '../types';
import { Upload, Type, Eye, Palette, Download, Image as ImageIcon } from 'lucide-react';

export const PinBuilder: React.FC = () => {
  const [pin, setPin] = useState<PinData>({
    title: '',
    description: '',
    brandName: '',
    cta: 'اقرأ المزيد',
    image: null,
    altText: ''
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPin(prev => ({ ...prev, image: url }));
    }
  };

  const handleDownload = () => {
    alert("في التطبيق الكامل، سيتم دمج الصورة والنص وتنزيلها كملف PNG.");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      {/* Editor Column */}
      <div className="bg-white dark:bg-dark-card p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-dark-border overflow-y-auto transition-colors">
        <h2 className="text-2xl font-bold mb-6 text-pinterest-dark dark:text-white flex items-center gap-2">
          <Palette className="w-6 h-6 text-pinterest-red" />
          مصمم الدبابيس (Pin Builder)
        </h2>

        <div className="space-y-6">
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">الصورة (نسبة 2:3 مثالية)</label>
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-gray-300 dark:border-dark-border rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-pinterest-red dark:hover:border-pinterest-red transition-colors bg-gray-50 dark:bg-dark-input h-48 group"
            >
              <Upload className="w-8 h-8 text-gray-400 dark:text-gray-500 group-hover:text-pinterest-red mb-2 transition-colors" />
              <span className="text-gray-500 dark:text-gray-400 text-sm">اضغط لرفع صورة (1000x1500)</span>
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
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">العنوان الرئيسي</label>
            <input 
              type="text" 
              value={pin.title} 
              onChange={(e) => setPin({...pin, title: e.target.value})}
              placeholder="مثال: 5 طرق لتنسيق ديكور المنزل"
              className="w-full p-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-pinterest-red focus:border-transparent outline-none bg-white dark:bg-dark-input text-gray-900 dark:text-white transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">اسم العلامة التجارية / الموقع</label>
            <input 
              type="text" 
              value={pin.brandName} 
              onChange={(e) => setPin({...pin, brandName: e.target.value})}
              placeholder="mywebsite.com"
              className="w-full p-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-pinterest-red focus:border-transparent outline-none bg-white dark:bg-dark-input text-gray-900 dark:text-white transition-colors"
            />
          </div>

           <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">الدعوة لاتخاذ إجراء (CTA)</label>
             <select 
               value={pin.cta}
               onChange={(e) => setPin({...pin, cta: e.target.value})}
               className="w-full p-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-pinterest-red outline-none bg-white dark:bg-dark-input text-gray-900 dark:text-white transition-colors"
             >
               <option>اقرأ المزيد</option>
               <option>تسوق الآن</option>
               <option>حمل الدليل</option>
               <option>سجل الآن</option>
             </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">وصف الدبوس (SEO)</label>
            <textarea 
              value={pin.description} 
              onChange={(e) => setPin({...pin, description: e.target.value})}
              placeholder="اكتب وصفاً غنياً بالكلمات المفتاحية..."
              rows={4}
              className="w-full p-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-pinterest-red focus:border-transparent outline-none resize-none bg-white dark:bg-dark-input text-gray-900 dark:text-white transition-colors"
            />
          </div>

          <button 
            onClick={handleDownload}
            className="w-full bg-pinterest-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            تصدير التصميم
          </button>
        </div>
      </div>

      {/* Preview Column */}
      <div className="bg-gray-100 dark:bg-dark-input p-6 rounded-2xl flex flex-col items-center justify-center overflow-y-auto border border-transparent dark:border-dark-border transition-colors">
        <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-400 mb-4 flex items-center gap-2">
          <Eye className="w-5 h-5" />
          معاينة حية (Live Preview)
        </h3>
        
        {/* The Pin Itself - Keep white/neutral to simulate standard pin look, but text adapts */}
        <div className="w-[300px] bg-white dark:bg-[#252525] rounded-[32px] overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-[1.02]">
          {/* Image Container (2:3 aspect ratio approximately) */}
          <div className="relative w-full h-[450px] bg-gray-200 dark:bg-[#333] flex items-center justify-center overflow-hidden group">
            {pin.image ? (
              <img src={pin.image} alt="Pin Preview" className="w-full h-full object-cover" />
            ) : (
              <div className="text-gray-400 flex flex-col items-center">
                <ImageIcon className="w-12 h-12 mb-2" />
                <span>المعاينة</span>
              </div>
            )}
            
            {/* Overlay Text */}
            {pin.title && (
                <div className="absolute bottom-10 left-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm p-4 rounded-xl shadow-lg transition-colors">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white leading-tight text-center">{pin.title}</h2>
                    {pin.cta && (
                         <div className="mt-2 text-center">
                            <span className="inline-block bg-pinterest-red text-white text-xs px-3 py-1 rounded-full font-semibold">{pin.cta}</span>
                         </div>
                    )}
                </div>
            )}
            
            {/* Brand Watermark */}
            {pin.brandName && (
                <div className="absolute top-4 left-4 bg-black/40 text-white px-3 py-1 rounded-full text-xs backdrop-blur-md">
                    {pin.brandName}
                </div>
            )}
          </div>
          
          {/* Pin Meta Data (Below Image in Feed) */}
          <div className="p-4">
             <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1 truncate">{pin.title || "عنوان الدبوس"}</h3>
             <p className="text-gray-600 dark:text-gray-400 text-xs line-clamp-2">{pin.description || "سيظهر الوصف هنا..."}</p>
             <div className="mt-3 flex items-center gap-2">
                 <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-600"></div>
                 <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{pin.brandName || "اسم الحساب"}</span>
             </div>
          </div>
        </div>

        <p className="mt-6 text-xs text-gray-500 dark:text-gray-400 text-center max-w-xs">
          * هذه محاكاة لكيفية ظهور الدبوس في الخلاصة. تأكد من أن النصوص داخل الصورة واضحة ومقروءة.
        </p>
      </div>
    </div>
  );
};