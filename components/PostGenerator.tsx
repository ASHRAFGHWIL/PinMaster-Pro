import React, { useState } from 'react';
import { generateSinglePin } from '../services/gemini';
import { GeneratedPin } from '../types';
import { Zap, Copy, Image as ImageIcon, AlignLeft, Hash, Check, Wand2 } from 'lucide-react';

export const PostGenerator: React.FC = () => {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GeneratedPin | null>(null);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!description.trim()) return;
    setLoading(true);
    setError('');
    setResult(null);
    try {
      const data = await generateSinglePin(description);
      setResult(data);
    } catch (err) {
      setError('حدث خطأ أثناء التوليد. الرجاء المحاولة مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-pinterest-dark dark:text-white mb-4 flex justify-center items-center gap-2">
            <Zap className="w-8 h-8 text-yellow-500" />
            مولد المنشورات الذكي
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            حول أي فكرة أو نص أو وصف منتج إلى منشور بينتريست احترافي وجاهز للنشر بضغطة زر.
        </p>
      </div>

      {/* Input Section */}
      <div className="bg-white dark:bg-dark-card p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-dark-border mb-8 transition-colors">
        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
            وصف المحتوى / المنتج / الفكرة
        </label>
        <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="مثال: مقال يتحدث عن فوائد شرب الماء، أو منتج كريم ترطيب للبشرة الجافة..."
            rows={5}
            className="w-full p-4 border border-gray-300 dark:border-dark-border rounded-xl focus:ring-2 focus:ring-pinterest-red focus:border-transparent outline-none resize-none bg-gray-50 dark:bg-dark-input text-gray-900 dark:text-white transition-colors"
        />
        <div className="mt-4 flex justify-end">
            <button 
                onClick={handleGenerate}
                disabled={loading || !description.trim()}
                className="bg-pinterest-red text-white px-8 py-3 rounded-xl font-bold hover:bg-red-700 transition-all disabled:opacity-50 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
                {loading ? 'جاري الصياغة...' : <><Wand2 className="w-5 h-5" /> توليد المنشور</>}
            </button>
        </div>
        {error && <div className="mt-4 text-red-500 text-sm text-center">{error}</div>}
      </div>

      {/* Result Section */}
      {result && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in">
            
            {/* Visual Preview Card */}
            <div className="bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-dark-border flex flex-col h-full">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 h-64 flex flex-col items-center justify-center p-6 text-center relative group">
                    <ImageIcon className="w-12 h-12 text-gray-400 mb-3" />
                    <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">{result.visualHook}</p>
                    
                    {/* Overlay Visualization */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[1px]">
                         <div className="bg-white/90 dark:bg-black/80 px-6 py-4 rounded-xl shadow-2xl transform rotate-[-2deg]">
                             <span className="text-xl font-black text-pinterest-red dark:text-white uppercase tracking-tight">
                                 {result.textOverlay}
                             </span>
                         </div>
                    </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="font-bold text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">النص على الصورة (Overlay)</h3>
                        <button onClick={() => copyToClipboard(result.textOverlay, 'overlay')} className="text-pinterest-red hover:bg-red-50 p-1 rounded">
                             {copied === 'overlay' ? <Check size={16} /> : <Copy size={16} />}
                        </button>
                    </div>
                    <p className="text-2xl font-black text-gray-800 dark:text-white mb-6 leading-tight">{result.textOverlay}</p>
                    
                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-dark-border">
                        <h3 className="font-bold text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider mb-2">فكرة الصورة (Prompt)</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 italic">"{result.visualHook}"</p>
                    </div>
                </div>
            </div>

            {/* Text & SEO Details */}
            <div className="space-y-6">
                
                {/* Title */}
                <div className="bg-white dark:bg-dark-card p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-dark-border group">
                    <div className="flex justify-between items-center mb-2">
                        <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">العنوان (Title)</label>
                        <button onClick={() => copyToClipboard(result.title, 'title')} className="text-gray-400 hover:text-pinterest-red transition-colors">
                            {copied === 'title' ? <Check size={16} /> : <Copy size={16} />}
                        </button>
                    </div>
                    <p className="text-lg font-bold text-gray-900 dark:text-white leading-snug">{result.title}</p>
                </div>

                {/* Description */}
                <div className="bg-white dark:bg-dark-card p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-dark-border group">
                    <div className="flex justify-between items-center mb-2">
                        <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">الوصف (Description)</label>
                        <button onClick={() => copyToClipboard(result.description, 'desc')} className="text-gray-400 hover:text-pinterest-red transition-colors">
                            {copied === 'desc' ? <Check size={16} /> : <Copy size={16} />}
                        </button>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">{result.description}</p>
                </div>

                {/* Hashtags & Alt Text */}
                <div className="grid grid-cols-1 gap-6">
                     <div className="bg-white dark:bg-dark-card p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-dark-border">
                        <div className="flex items-center gap-2 mb-3 text-blue-600 dark:text-blue-400">
                            <Hash size={18} />
                            <span className="font-bold text-sm">الهاشتاغات</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {result.hashtags.map((tag, i) => (
                                <span key={i} className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                     </div>

                     <div className="bg-white dark:bg-dark-card p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-dark-border">
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                                <AlignLeft size={18} />
                                <span className="font-bold text-sm">النص البديل (Alt Text)</span>
                            </div>
                            <button onClick={() => copyToClipboard(result.altText, 'alt')} className="text-gray-400 hover:text-green-600 transition-colors">
                                {copied === 'alt' ? <Check size={16} /> : <Copy size={16} />}
                            </button>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-snug">{result.altText}</p>
                     </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};