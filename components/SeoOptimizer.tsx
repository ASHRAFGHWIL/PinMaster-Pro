import React, { useState } from 'react';
import { generatePinStrategy } from '../services/gemini';
import { AiSuggestion } from '../types';
import { Search, Sparkles, Copy, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const SeoOptimizer: React.FC = () => {
  const { t, language } = useLanguage();
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AiSuggestion | null>(null);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    setError('');
    try {
      const data = await generatePinStrategy(topic, language);
      setResult(data);
    } catch (err) {
      setError(t.seo.errorMsg);
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
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-pinterest-dark dark:text-white mb-4">{t.seo.title}</h2>
        <p className="text-gray-600 dark:text-gray-300">
          {t.seo.subtitle}
        </p>
      </div>

      {/* Input Section */}
      <div className="bg-white dark:bg-dark-card p-2 rounded-full shadow-lg border border-gray-200 dark:border-dark-border flex items-center mb-12 max-w-2xl mx-auto transition-colors">
        <div className="p-3 bg-gray-100 dark:bg-dark-input rounded-full me-2 transition-colors">
            <Search className="text-gray-500 dark:text-gray-400 w-5 h-5" />
        </div>
        <input 
          type="text" 
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder={t.seo.placeholder}
          className="flex-1 p-3 outline-none text-gray-700 dark:text-gray-200 bg-transparent placeholder-gray-400"
          onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
        />
        <button 
          onClick={handleGenerate}
          disabled={loading}
          className="bg-pinterest-red text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-all disabled:opacity-50 flex items-center gap-2 whitespace-nowrap"
        >
          {loading ? t.seo.generating : <><Sparkles className="w-4 h-4" /> {t.common.generate}</>}
        </button>
      </div>

      {error && <div className="text-red-500 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg text-center mb-6 border border-red-200 dark:border-red-900/50">{error}</div>}

      {/* Results Section */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
          {/* Titles Card */}
          <div className="bg-white dark:bg-dark-card p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-dark-border transition-colors">
            <h3 className="font-bold text-xl mb-4 text-pinterest-dark dark:text-white">{t.seo.resultsTitle}</h3>
            <div className="space-y-3">
              {result.titles.map((title, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-dark-input rounded-lg group hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                  <span className="text-gray-800 dark:text-gray-200">{title}</span>
                  <button 
                    onClick={() => copyToClipboard(title, `title-${idx}`)}
                    className="text-gray-400 dark:text-gray-500 hover:text-pinterest-red dark:hover:text-red-400"
                  >
                    {copied === `title-${idx}` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Description Card */}
          <div className="bg-white dark:bg-dark-card p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-dark-border transition-colors">
            <h3 className="font-bold text-xl mb-4 text-pinterest-dark dark:text-white flex justify-between">
                {t.seo.descTitle}
                <button 
                    onClick={() => copyToClipboard(result.description, 'desc')}
                    className="text-sm text-pinterest-red dark:text-red-400 hover:underline flex items-center gap-1"
                >
                    {copied === 'desc' ? t.common.copied : t.seo.copyText}
                </button>
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-dark-input p-4 rounded-lg text-sm border-s-4 border-pinterest-red transition-colors">
              {result.description}
            </p>
            
            <div className="mt-6">
                <h4 className="font-bold text-sm mb-2 text-gray-600 dark:text-gray-400">{t.seo.hashtags}</h4>
                <div className="flex flex-wrap gap-2">
                    {result.hashtags.map((tag, i) => (
                        <span key={i} className="text-blue-600 dark:text-blue-400 text-sm bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-md">#{tag.replace('#', '')}</span>
                    ))}
                </div>
            </div>
          </div>

          {/* Pro Tip Card */}
          <div className="col-span-1 md:col-span-2 bg-gradient-to-l from-gray-900 to-gray-800 dark:from-black dark:to-gray-900 p-6 rounded-2xl shadow-lg text-white border border-gray-800 dark:border-gray-700">
             <div className="flex items-start gap-4">
                 <div className="bg-white/20 p-3 rounded-full">
                     <Sparkles className="w-6 h-6 text-yellow-300" />
                 </div>
                 <div>
                     <h3 className="font-bold text-lg text-yellow-300 mb-2">{t.seo.proTip}</h3>
                     <p className="leading-relaxed opacity-90 text-gray-100">{result.strategyTip}</p>
                 </div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};