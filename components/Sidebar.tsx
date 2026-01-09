import React from 'react';
import { Tab } from '../types';
import { LayoutDashboard, PenTool, Search, Calendar, Moon, Sun, Rocket, Zap } from 'lucide-react';

interface SidebarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  isMobileOpen: boolean;
  toggleMobile: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  activeTab, 
  setActiveTab, 
  isMobileOpen, 
  toggleMobile, 
  isDarkMode, 
  toggleDarkMode 
}) => {
  const menuItems = [
    { id: Tab.STRATEGY, label: 'الاستراتيجية', icon: <LayoutDashboard size={20} /> },
    { id: Tab.POST_GENERATOR, label: 'مولد المنشورات', icon: <Zap size={20} /> },
    { id: Tab.HIGH_CONVERTING, label: 'خطة التحويل', icon: <Rocket size={20} /> },
    { id: Tab.BUILDER, label: 'مصمم الدبابيس', icon: <PenTool size={20} /> },
    { id: Tab.SEO, label: 'محسن SEO', icon: <Search size={20} /> },
    { id: Tab.CALENDAR, label: 'التقويم', icon: <Calendar size={20} /> },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-black/50 z-20 md:hidden" onClick={toggleMobile}></div>
      )}

      {/* Sidebar Container */}
      <div className={`
        fixed top-0 right-0 h-full bg-white dark:bg-dark-card w-64 shadow-xl z-30 transition-all duration-300 transform 
        ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 md:static md:shadow-none border-l border-gray-100 dark:border-dark-border
      `}>
        <div className="p-6 flex items-center justify-between border-b border-gray-100 dark:border-dark-border">
           <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-pinterest-red rounded-full flex items-center justify-center text-white font-bold">P</div>
             <h1 className="text-xl font-bold text-gray-800 dark:text-white tracking-tight">PinMaster</h1>
           </div>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                if(window.innerWidth < 768) toggleMobile();
              }}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium
                ${activeTab === item.id 
                  ? 'bg-red-50 dark:bg-pinterest-red/20 text-pinterest-red dark:text-red-400 shadow-sm' 
                  : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-dark-input hover:text-gray-900 dark:hover:text-white'}
              `}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-6 border-t border-gray-100 dark:border-dark-border space-y-4">
            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleDarkMode}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-dark-input text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="text-sm font-medium flex items-center gap-2">
                {isDarkMode ? <Moon size={16} /> : <Sun size={16} />}
                {isDarkMode ? 'الوضع الليلي' : 'الوضع النهاري'}
              </span>
              <div className={`w-8 h-4 rounded-full relative transition-colors ${isDarkMode ? 'bg-pinterest-red' : 'bg-gray-300'}`}>
                <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all ${isDarkMode ? 'left-0.5' : 'right-0.5'}`}></div>
              </div>
            </button>

            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-100 dark:border-green-900/50">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">حالة الاشتراك</p>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-bold text-gray-800 dark:text-gray-200">نسخة المحترفين</span>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};