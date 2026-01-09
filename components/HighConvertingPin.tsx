import React, { useState } from 'react';
import { generateHighConvertingPlan } from '../services/gemini';
import { HighConvertingPlan } from '../types';
import { Rocket, Target, Users, ArrowRight, Lightbulb, GraduationCap, ShoppingBag } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const HighConvertingPin: React.FC = () => {
  const { t, language } = useLanguage();
  const [topic, setTopic] = useState('');
  const [audience, setAudience] = useState('');
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<HighConvertingPlan | null>(null);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!topic.trim() || !audience.trim()) {
      setError(t.common.error);
      return;
    }
    setLoading(true);
    setError('');
    try {
      const result = await generateHighConvertingPlan(topic, audience, language);
      setPlan(result);
    } catch (err) {
      setError(t.common.error);
    } finally {
      setLoading(false);
    }
  };

  const getIconForIntent = (intent: string) => {
    if (intent.includes('Awareness') || intent.includes('Inspiration')) return <Lightbulb className="w-6 h-6 text-yellow-500" />;
    if (intent.includes('Consideration') || intent.includes('Education')) return <GraduationCap className="w-6 h-6 text-blue-500" />;
    return <ShoppingBag className="w-6 h-6 text-green-500" />;
  };

  const getColorForIntent = (intent: string) => {
     if (intent.includes('Awareness') || intent.includes('Inspiration')) return 'border-yellow-400 bg-yellow-50 dark:bg-yellow-900/10';
     if (intent.includes('Consideration') || intent.includes('Education')) return 'border-blue-400 bg-blue-50 dark:bg-blue-900/10';
     return 'border-green-400 bg-green-50 dark:bg-green-900/10';
  };

  return (
    <div className="max-w-5xl mx-auto pb-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-pinterest-dark dark:text-white mb-4 flex justify-center items-center gap-2">
            <Rocket className="w-8 h-8 text-pinterest-red" />
            {t.highConvert.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.highConvert.subtitle}
        </p>
      </div>

      {/* Input Section */}
      <div className="bg-white dark:bg-dark-card p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-dark-border mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4" /> {t.highConvert.topicLabel}
                </label>
                <input 
                    type="text" 
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder={t.seo.placeholder}
                    className="w-full p-3 border border-gray-300 dark:border-dark-border rounded-lg bg-gray-50 dark:bg-dark-input focus:ring-2 focus:ring-pinterest-red outline-none dark:text-white"
                />
            </div>
            <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" /> {t.highConvert.audienceLabel}
                </label>
                <input 
                    type="text" 
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                    placeholder="..."
                    className="w-full p-3 border border-gray-300 dark:border-dark-border rounded-lg bg-gray-50 dark:bg-dark-input focus:ring-2 focus:ring-pinterest-red outline-none dark:text-white"
                />
            </div>
        </div>
        <button 
            onClick={handleGenerate}
            disabled={loading}
            className="w-full mt-6 bg-pinterest-dark dark:bg-white text-white dark:text-pinterest-dark py-4 rounded-xl font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
            {loading ? t.highConvert.loading : t.highConvert.btn}
        </button>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>

      {/* Results Section */}
      {plan && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
            {plan.strategies.map((strategy, idx) => (
                <div key={idx} className={`relative p-6 rounded-2xl border-t-4 shadow-sm flex flex-col h-full ${getColorForIntent(strategy.intent)} dark:border-opacity-50 border-opacity-100`}>
                    
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white dark:bg-dark-card rounded-lg shadow-sm">
                            {getIconForIntent(strategy.intent)}
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 dark:text-white text-lg">{strategy.intent}</h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{strategy.goal}</p>
                        </div>
                    </div>

                    <div className="space-y-4 flex-1">
                        <div className="bg-white dark:bg-dark-card p-4 rounded-xl shadow-sm">
                            <span className="text-xs font-bold text-gray-400 uppercase block mb-1">{t.highConvert.visualHook}</span>
                            <p className="text-xl font-black text-pinterest-red leading-tight">"{strategy.textOverlay}"</p>
                        </div>

                        <div>
                            <span className="text-xs font-bold text-gray-500 dark:text-gray-400 block mb-1">{t.highConvert.imgDesc}</span>
                            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{strategy.visualHook}</p>
                        </div>

                        <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-2">
                             <span className="text-xs font-bold text-gray-500 dark:text-gray-400 block mb-1">{t.highConvert.seoTitle}</span>
                             <p className="font-bold text-gray-800 dark:text-gray-200 text-sm">{strategy.title}</p>
                        </div>

                        <div>
                             <span className="text-xs font-bold text-gray-500 dark:text-gray-400 block mb-1">{t.highConvert.keywords}</span>
                             <div className="flex flex-wrap gap-1">
                                {strategy.keywords.map((kw, i) => (
                                    <span key={i} className="text-[10px] bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-gray-700 dark:text-gray-300">{kw}</span>
                                ))}
                             </div>
                        </div>
                    </div>

                </div>
            ))}
        </div>
      )}
    </div>
  );
};