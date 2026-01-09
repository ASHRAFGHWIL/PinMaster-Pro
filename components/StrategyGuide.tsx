import React from 'react';
import { BookOpen, TrendingUp, Layout, Clock, Target, CheckCircle2 } from 'lucide-react';

export const StrategyGuide: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-12">
      
      {/* Hero Section */}
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-pinterest-dark dark:text-white mb-4">الدليل الشامل للنجاح على بينتريست</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          استراتيجيات مثبتة لتحويل حسابك من مجرد لوحة صور إلى آلة لجلب الزيارات والمبيعات.
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
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">1. الأساس البصري</h3>
          </div>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span><strong>الأبعاد المثالية:</strong> استخدم دائماً النسبة الطولية 2:3 (1000×1500 بكسل). الصور الأفقية تضيع في التصفح.</span>
            </li>
            <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span><strong>تراكب النص (Text Overlay):</strong> أضف نصاً واضحاً على الصورة يخبر المستخدم بالفائدة التي سيحصل عليها.</span>
            </li>
            <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span><strong>العلامة التجارية:</strong> ضع شعارك بشكل خفي ولكن واضح للحفاظ على الحقوق وبناء الوعي.</span>
            </li>
          </ul>
        </div>

        {/* Pillar 2 */}
        <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-sm border-t-4 border-blue-500 hover:shadow-md transition-all">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-xl">
                <Target className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">2. استراتيجية الكلمات المفتاحية</h3>
          </div>
           <p className="mb-4 text-gray-600 dark:text-gray-300">بينتريست هو محرك بحث وليس منصة تواصل. الكلمات المفتاحية هي الأكسجين لحسابك.</p>
           <div className="bg-gray-50 dark:bg-dark-input p-4 rounded-lg border border-gray-200 dark:border-dark-border">
               <h4 className="font-bold mb-2 dark:text-gray-200">أين تضع الكلمات المفتاحية؟</h4>
               <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
                   <span className="flex items-center gap-1"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> اسم الحساب (Bio)</span>
                   <span className="flex items-center gap-1"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> عناوين اللوحات</span>
                   <span className="flex items-center gap-1"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> عنوان الدبوس</span>
                   <span className="flex items-center gap-1"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> اسم ملف الصورة</span>
               </div>
           </div>
        </div>

        {/* Pillar 3 */}
        <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-sm border-t-4 border-yellow-500 hover:shadow-md transition-all">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-xl">
                <Clock className="w-8 h-8 text-yellow-600 dark:text-yellow-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">3. التوقيت والجدولة</h3>
          </div>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span><strong>قاعدة 45-60 يوماً:</strong> انشر المحتوى الموسمي قبل الحدث بشهرين على الأقل. المستخدمون يخططون مبكراً.</span>
            </li>
            <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span><strong>الاستمرارية:</strong> الخوارزمية تحب النشر اليومي. استخدم أدوات مثل Tailwind لجدولة 5-10 دبابيس يومياً.</span>
            </li>
          </ul>
        </div>

         {/* Pillar 4 */}
        <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-sm border-t-4 border-purple-500 hover:shadow-md transition-all">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-xl">
                <TrendingUp className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">4. قاعدة 10x للمحتوى</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
              لا تنشئ تصميماً واحداً لرابط واحد. اصنع <strong>5 إلى 10 تصاميم مختلفة</strong> لنفس المقال أو المنتج.
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-bold text-white">
              <span className="bg-purple-500 px-3 py-1 rounded-full">إنفوجرافيك</span>
              <span className="bg-purple-500 px-3 py-1 rounded-full">قائمة مرجعية</span>
              <span className="bg-purple-500 px-3 py-1 rounded-full">اقتباس</span>
              <span className="bg-purple-500 px-3 py-1 rounded-full">صورة منتج</span>
              <span className="bg-purple-500 px-3 py-1 rounded-full">فيديو قصير</span>
          </div>
        </div>

      </div>

      {/* Advanced Tips Section */}
      <div className="bg-gray-900 dark:bg-black text-white rounded-3xl p-10 mt-12 overflow-hidden relative border border-gray-800 dark:border-gray-700">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pinterest-red opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 relative z-10">
              <BookOpen className="w-6 h-6" />
              الخلطة السرية (Fresh Pins)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div>
                  <h4 className="text-lg font-bold text-yellow-400 mb-2">ما هي الدبابيس الطازجة؟</h4>
                  <p className="text-gray-300 leading-relaxed">
                      خوارزمية بينتريست تكره التكرار. "الدبوس الطازج" هو صورة جديدة لم يرها النظام من قبل، حتى لو كانت تشير لنفس الرابط القديم. تغيير الألوان، العنوان، أو زاوية الصورة يجعل الدبوس "طازجاً".
                  </p>
              </div>
              <div>
                   <h4 className="text-lg font-bold text-yellow-400 mb-2">عقلية الحل وليس المنتج</h4>
                   <p className="text-gray-300 leading-relaxed">
                       لا تنشر صورة "خلاط كهربائي" وتكتب سعره. بدلاً من ذلك، انشر صورة "عصير صحي للصباح" واكتب "أسهل وصفة عصير في 3 دقائق". الرابط يقود للخلاط. أنت تبيع الحل، لا الأداة.
                   </p>
              </div>
          </div>
      </div>
    </div>
  );
};