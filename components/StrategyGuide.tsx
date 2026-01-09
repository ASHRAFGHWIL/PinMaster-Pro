import React from 'react';
import { BookOpen, TrendingUp, Layout, Clock, Target, CheckCircle2, BarChart3, Link2, Hash } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const StrategyGuide: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-12">
      
      {/* Hero Section */}
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-pinterest-dark dark:text-white mb-4">{t.strategy.title}</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {t.strategy.subtitle}
        </p>
      </div>

      {/* The 6 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Pillar 1: Visuals */}
        <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-sm border-t-4 border-pinterest-red hover:shadow-md transition-all flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-xl">
                <Layout className="w-8 h-8 text-pinterest-red" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">1. {t.strategy.pillar1}</h3>
          </div>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300 flex-1">
            <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>2:3 Ratio (1000x1500px).</span>
            </li>
            <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>High Res Images.</span>
            </li>
            <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>Branding / Logo placement.</span>
            </li>
          </ul>
        </div>

        {/* Pillar 2: Keywords */}
        <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-sm border-t-4 border-blue-500 hover:shadow-md transition-all flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-xl">
                <Target className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">2. {t.strategy.pillar2}</h3>
          </div>
           <p className="mb-4 text-gray-600 dark:text-gray-300 text-sm">Pinterest is a Search Engine (SEO). Place keywords in:</p>
           <div className="bg-gray-50 dark:bg-dark-input p-4 rounded-lg border border-gray-200 dark:border-dark-border flex-1">
               <div className="grid grid-cols-1 gap-2 text-sm text-gray-700 dark:text-gray-300">
                   <span className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> Profile Name & Bio</span>
                   <span className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> Board Titles & Desc</span>
                   <span className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> Pin Title & Desc</span>
               </div>
           </div>
        </div>

        {/* Pillar 3: Timing */}
        <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-sm border-t-4 border-yellow-500 hover:shadow-md transition-all flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-xl">
                <Clock className="w-8 h-8 text-yellow-600 dark:text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">3. {t.strategy.pillar3}</h3>
          </div>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300 flex-1">
            <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>45-60 Days Rule (Post early).</span>
            </li>
            <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>Consistency (5-10 pins/day).</span>
            </li>
             <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>Don't dump all at once.</span>
            </li>
          </ul>
        </div>

         {/* Pillar 4: 10x Content */}
        <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-sm border-t-4 border-purple-500 hover:shadow-md transition-all flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-xl">
                <TrendingUp className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">4. {t.strategy.pillar4}</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
              Create <strong>5 to 10 unique designs</strong> for a single URL/Article to maximize reach.
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-bold text-white flex-1 content-start">
              <span className="bg-purple-500 px-3 py-1 rounded-full">Infographic</span>
              <span className="bg-purple-500 px-3 py-1 rounded-full">Checklist</span>
              <span className="bg-purple-500 px-3 py-1 rounded-full">Quote</span>
              <span className="bg-purple-500 px-3 py-1 rounded-full">Product Shot</span>
              <span className="bg-purple-500 px-3 py-1 rounded-full">Video</span>
          </div>
        </div>

        {/* Pillar 5: Trends (New) */}
        <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-sm border-t-4 border-pink-500 hover:shadow-md transition-all flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-xl">
                <BarChart3 className="w-8 h-8 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">5. {t.strategy.pillar5}</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex-1">
             {t.strategy.pillar5Desc}
          </p>
          <a href="https://trends.pinterest.com" target="_blank" rel="noopener noreferrer" className="mt-4 text-pink-500 text-sm font-bold hover:underline">trends.pinterest.com →</a>
        </div>

        {/* Pillar 6: Rich Pins (New) */}
        <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-sm border-t-4 border-teal-500 hover:shadow-md transition-all flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-teal-50 dark:bg-teal-900/20 p-3 rounded-xl">
                <Link2 className="w-8 h-8 text-teal-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">6. {t.strategy.pillar6}</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-1">
             {t.strategy.pillar6Desc}
          </p>
          <div className="flex gap-2">
             <span className="text-[10px] bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-2 py-1 rounded">Article</span>
             <span className="text-[10px] bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-2 py-1 rounded">Recipe</span>
             <span className="text-[10px] bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-2 py-1 rounded">Product</span>
          </div>
        </div>

      </div>

      {/* Hashtag Pro Tip Box */}
      <div className="mt-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px] rounded-2xl animate-fade-in shadow-lg">
          <div className="bg-white dark:bg-[#18181b] rounded-2xl p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Hash className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white relative z-10">{t.strategy.hashtagTipTitle}</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-2 relative z-10">{t.strategy.hashtagTipIntro}</p>
              <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 mb-6 relative z-10">
                  {t.strategy.hashtagTipRule}
              </p>
              <div className="inline-flex flex-wrap justify-center gap-3 relative z-10">
                  <div className="bg-gray-100 dark:bg-gray-800 px-6 py-3 rounded-xl font-bold text-gray-800 dark:text-white shadow-inner border border-gray-200 dark:border-gray-700">
                      {t.strategy.hashtagTipFormula}
                  </div>
              </div>
          </div>
      </div>

      {/* Advanced Tips Section */}
      <div className="bg-gray-900 dark:bg-black text-white rounded-3xl p-10 mt-12 overflow-hidden relative border border-gray-800 dark:border-gray-700 shadow-2xl">
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
                  <div className="mt-4 p-4 bg-white/5 rounded-xl border border-white/10">
                      <h5 className="font-bold text-sm mb-2 text-pinterest-red">⚠️ Important Rule:</h5>
                      <p className="text-xs text-gray-400">Do not repin the same image to the same board more than once every 3-4 months.</p>
                  </div>
              </div>
              <div>
                   <h4 className="text-lg font-bold text-yellow-400 mb-2">{t.strategy.solutionMindset}</h4>
                   <p className="text-gray-300 leading-relaxed">
                       {t.strategy.solutionMindsetDesc}
                   </p>
                   <ul className="mt-4 space-y-2 text-sm text-gray-400">
                       <li className="flex items-center gap-2">❌ "Buy this blue sofa"</li>
                       <li className="flex items-center gap-2">✅ "How to style a blue sofa for a modern look"</li>
                   </ul>
              </div>
          </div>
      </div>
    </div>
  );
};