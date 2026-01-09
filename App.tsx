import React, { useState, useEffect } from 'react';
import { Tab } from './types';
import { Sidebar } from './components/Sidebar';
import { PinBuilder } from './components/PinBuilder';
import { SeoOptimizer } from './components/SeoOptimizer';
import { StrategyGuide } from './components/StrategyGuide';
import { ContentCalendar } from './components/ContentCalendar';
import { HighConvertingPin } from './components/HighConvertingPin';
import { Menu } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.STRATEGY);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Dark Mode State
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage or system preference on initial load
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      if (saved !== null) {
        return saved === 'true';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('darkMode', String(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const renderContent = () => {
    switch (activeTab) {
      case Tab.HIGH_CONVERTING:
        return <HighConvertingPin />;
      case Tab.BUILDER:
        return <PinBuilder />;
      case Tab.SEO:
        return <SeoOptimizer />;
      case Tab.CALENDAR:
        return <ContentCalendar />;
      case Tab.STRATEGY:
      default:
        return <StrategyGuide />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] dark:bg-dark-bg flex flex-col md:flex-row text-right transition-colors duration-300" dir="rtl">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isMobileOpen={isSidebarOpen}
        toggleMobile={() => setIsSidebarOpen(!isSidebarOpen)}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden bg-white dark:bg-dark-card p-4 shadow-sm flex items-center justify-between z-10 border-b border-gray-100 dark:border-dark-border">
           <h1 className="font-bold text-lg text-gray-800 dark:text-white">PinMaster Pro</h1>
           <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-gray-600 dark:text-gray-300">
             <Menu />
           </button>
        </header>

        {/* Content Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
