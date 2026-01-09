import React from 'react';
import { CalendarDays, Sun, Snowflake, Leaf, Flower } from 'lucide-react';

export const ContentCalendar: React.FC = () => {
  const seasons = [
    { name: 'يناير', event: 'بداية التخطيط للربيع', icon: <Snowflake className="text-blue-400" />, tip: 'ابدأ بنشر محتوى الربيع وتنظيف المنزل' },
    { name: 'فبراير', event: 'يوم الحب / تجهيزات رمضان', icon: <HeartIcon />, tip: 'هدايا، وصفات، ديكورات رمضانية مبكرة' },
    { name: 'مارس', event: 'بداية الربيع / عيد الأم', icon: <Flower className="text-pink-400" />, tip: 'أزياء الربيع، هدايا الأمهات' },
    { name: 'أبريل', event: 'تجهيزات الصيف', icon: <Sun className="text-yellow-500" />, tip: 'خطط السفر، ملابس السباحة، المشروبات الباردة' },
    { name: 'مايو', event: 'ذروة نشر الصيف', icon: <Sun className="text-orange-500" />, tip: 'أنشطة خارجية، حفلات شواء' },
    { name: 'يونيو', event: 'العودة للمدارس (مبكر)', icon: <BookIcon />, tip: 'نعم، ابدأ التفكير في العودة للمدارس الآن' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-pinterest-dark dark:text-white mb-4 flex justify-center items-center gap-3">
            <CalendarDays className="w-8 h-8 text-pinterest-red" />
            تقويم المحتوى (Seasonal Planner)
        </h2>
        <p className="text-gray-600 dark:text-gray-300 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-900/50 inline-block px-4 py-2 rounded-full">
            قاعدة ذهبية: انشر قبل الموسم بـ 45-60 يوماً
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {seasons.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-dark-card p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-dark-border relative overflow-hidden group hover:-translate-y-1 transition-all">
                <div className="absolute top-0 left-0 w-2 h-full bg-gray-100 dark:bg-dark-border group-hover:bg-pinterest-red transition-colors"></div>
                <div className="flex justify-between items-start mb-4 pl-4">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{item.name}</h3>
                    <div className="p-2 bg-gray-50 dark:bg-dark-input rounded-lg border border-gray-100 dark:border-dark-border">{item.icon}</div>
                </div>
                <div className="mb-2">
                    <span className="text-xs font-bold text-pinterest-red uppercase tracking-wider">الحدث الرئيسي</span>
                    <p className="font-medium text-gray-900 dark:text-gray-200">{item.event}</p>
                </div>
                <div className="pt-4 border-t border-gray-100 dark:border-dark-border mt-4">
                    <span className="text-xs text-gray-400 block mb-1">ماذا تنشر؟</span>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-snug">{item.tip}</p>
                </div>
            </div>
        ))}
      </div>
      
      <div className="mt-12 bg-white dark:bg-dark-card p-8 rounded-2xl border border-dashed border-gray-300 dark:border-dark-border text-center transition-colors">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">هل تريد النجاح المستمر؟</h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              اخلط بين <strong>المحتوى الموسمي</strong> (المرتبط بوقت) و <strong>المحتوى دائم الخضرة (Evergreen)</strong> الذي يبحث عنه الناس طوال العام (مثل: نصائح العناية بالبشرة، تنظيم الوقت).
          </p>
      </div>
    </div>
  );
};

// Simple icon components for internal use
const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
)
const BookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2c1.77 0 3.22.62 4.3 1.5 1.08.88 1.2 2.5 1.2 2.5v15s-.12-1.62-1.2-2.5c-1.08-.88-2.53-1.5-4.3-1.5a2.5 2.5 0 0 0-2.5 2.5z"/><path d="M12 4v16"/><path d="M20 19.5v-15A2.5 2.5 0 0 0 17.5 2c-1.77 0-3.22.62-4.3 1.5-1.08.88-1.2 2.5-1.2 2.5v15s.12-1.62 1.2-2.5c1.08-.88 2.53-1.5 4.3-1.5a2.5 2.5 0 0 1 2.5 2.5z"/></svg>
)
