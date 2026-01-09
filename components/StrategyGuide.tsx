import React from 'react';
import { BookOpen, TrendingUp, Layout, Clock, Target, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const StrategyGuide: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="max-w-5xl mx-auto space-y-12">
      
      {/* Hero Section */}
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-pinterest-dark dark:text-white mb-4">{t.strategy.title}</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {t.strategy.subtitle}
        </p>
      </div>

      {/* The 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Pillar 1 */}
        <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-sm border-t-4 border-pinterest-red hover:shadow-md transition-all">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-xl">
                <Layout className="w-8 h-8 text-pinterest-red" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">1. {t.strategy.pillar1}</h3>
          </div>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>2:3 Ratio (1000x1500px).</span>
            </li>
            <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>Text Overlay.</span>
            </li>
            <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>Branding / Logo.</span>
            </li>
          </ul>
        </div>

        {/* Pillar 2 */}
        <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-sm border-t-4 border-blue-500 hover:shadow-md transition-all">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-xl">
                <Target className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">2. {t.strategy.pillar2}</h3>
          </div>
           <p className="mb-4 text-gray-600 dark:text-gray-300">Pinterest is a Search Engine (SEO).</p>
           <div className="bg-gray-50 dark:bg-dark-input p-4 rounded-lg border border-gray-200 dark:border-dark-border">
               <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
                   <span className="flex items-center gap-1"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> Bio</span>
                   <span className="flex items-center gap-1"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> Board Titles</span>
                   <span className="flex items-center gap-1"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> Pin Title</span>
                   <span className="flex items-center gap-1"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> File Name</span>
               </div>
           </div>
        </div>

        {/* Pillar 3 */}
        <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-sm border-t-4 border-yellow-500 hover:shadow-md transition-all">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-xl">
                <Clock className="w-8 h-8 text-yellow-600 dark:text-yellow-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">3. {t.strategy.pillar3}</h3>
          </div>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>45-60 Days Rule (Post early).</span>
            </li>
            <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>Consistency (5-10 pins/day).</span>
            </li>
          </ul>
        </div>

         {/* Pillar 4 */}
        <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-sm border-t-4 border-purple-500 hover:shadow-md transition-all">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-xl">
                <TrendingUp className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">4. {t.strategy.pillar4}</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
              Create <strong>5 to 10 designs</strong> for a single URL.
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-bold text-white">
              <span className="bg-purple-500 px-3 py-1 rounded-full">Infographic</span>
              <span className="bg-purple-500 px-3 py-1 rounded-full">Checklist</span>
              <span className="bg-purple-500 px-3 py-1 rounded-full">Quote</span>
              <span className="bg-purple-500 px-3 py-1 rounded-full">Product Shot</span>
              <span className="bg-purple-500 px-3 py-1 rounded-full">Video</span>
          </div>
        </div>

      </div>

      {/* Advanced Tips Section */}
      <div className="bg-gray-900 dark:bg-black text-white rounded-3xl p-10 mt-12 overflow-hidden relative border border-gray-800 dark:border-gray-700">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pinterest-red opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 relative z-10">
              <BookOpen className="w-6 h-6" />
              {t.strategy.freshPins}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div>
                  <p className="text-gray-300 leading-relaxed">
                      {t.strategy.freshPinsDesc}
                  </p>
              </div>
              <div>
                   <h4 className="text-lg font-bold text-yellow-400 mb-2">{t.strategy.solutionMindset}</h4>
                   <p className="text-gray-300 leading-relaxed">
                       {t.strategy.solutionMindsetDesc}
                   </p>
              </div>
          </div>
      </div>
    </div>
  );
};