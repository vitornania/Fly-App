import React from 'react';
import { NavItem } from '../types';
import { useNavigate } from 'react-router-dom';

interface BottomNavProps {
  items: NavItem[];
}

const BottomNav: React.FC<BottomNavProps> = ({ items }) => {
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/90 dark:bg-[#101922]/95 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800/50 px-2 py-1 pb-6 flex justify-around items-center z-50 shadow-[0_-8px_30px_rgba(0,0,0,0.04)]">
      {items.map((item, index) => {
        const isActive = item.active;
        return (
          <button
            key={index}
            onClick={() => navigate(item.path)}
            className={`group relative flex flex-1 flex-col items-center gap-1 p-2 rounded-2xl transition-all duration-200 ${
              isActive 
                ? 'text-primary' 
                : 'text-gray-400 hover:text-gray-600 dark:text-slate-500 dark:hover:text-slate-300 hover:bg-gray-50 dark:hover:bg-white/5'
            }`}
          >
            <div className={`relative flex items-center justify-center transition-transform duration-200 ${isActive ? '-translate-y-0.5 scale-110' : 'group-hover:scale-105'}`}>
               <span 
                 className="material-symbols-outlined text-[26px]" 
                 style={{ 
                   fontVariationSettings: isActive ? "'FILL' 1, 'wght' 500" : "'FILL' 0, 'wght' 300" 
                 }}
               >
                {item.icon}
              </span>
            </div>
            <span className={`text-[10px] font-medium tracking-tight transition-opacity ${isActive ? 'opacity-100 font-bold' : 'opacity-80'}`}>
              {item.label}
            </span>
            {isActive && (
                <div className="absolute bottom-1 w-8 h-0.5 bg-primary/20 dark:bg-primary/40 rounded-full">
                    <div className="w-4 h-full bg-primary rounded-full mx-auto"></div>
                </div>
            )}
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;