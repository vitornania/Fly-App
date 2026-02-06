import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RecoveryRules: React.FC = () => {
  const navigate = useNavigate();
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
        setIsSaving(false);
        navigate(-1);
    }, 1500);
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col max-w-md mx-auto bg-ios-bg dark:bg-[#101922] shadow-2xl pb-24">
      <header className="sticky top-0 z-50 bg-ios-bg/80 dark:bg-background-dark/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center p-4">
          <button onClick={() => navigate(-1)} className="flex items-center text-primary font-medium hover:opacity-80 transition-opacity">
            <span className="material-symbols-outlined text-[28px]">chevron_left</span>
            <span>Back</span>
          </button>
          <h1 className="flex-1 text-center font-bold text-lg pr-12 text-gray-900 dark:text-white">Recovery Rules</h1>
        </div>
        <div className="px-4 pb-4">
          <p className="text-[13px] text-gray-500 dark:text-gray-400">Automate passenger compensation based on delay triggers. These rules will be applied globally to all active flights.</p>
        </div>
      </header>
      <main className="flex-1 px-4 py-6 space-y-6">
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 flex items-center justify-between shadow-sm border border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-lg">
              <span className="material-symbols-outlined text-primary">auto_mode</span>
            </div>
            <div>
              <p className="font-bold text-gray-900 dark:text-white">Automated Rules</p>
              <p className="text-xs text-gray-500">Enable system automation</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input defaultChecked type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-success-green"></div>
          </label>
        </div>

        <div className="space-y-3">
          <h3 className="text-[13px] font-semibold text-gray-500 uppercase tracking-wider px-1">Mild Delay Recovery</h3>
          <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="p-4 border-b border-gray-50 dark:border-gray-800 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">wifi</span>
                <span className="font-bold text-gray-900 dark:text-white">Free Wi-Fi Trigger</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input defaultChecked type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-success-green"></div>
              </label>
            </div>
            <div className="p-5 space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-gray-500">Delay Threshold</span>
                  <span className="text-primary font-bold">2 Hours</span>
                </div>
                <input className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer" type="range" min="30" max="240" step="30" defaultValue="120" />
                <div className="flex justify-between text-[10px] text-gray-400 font-bold uppercase">
                  <span>30m</span>
                  <span>1h</span>
                  <span>2h</span>
                  <span>3h</span>
                  <span>4h</span>
                </div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-xl border border-blue-100 dark:border-blue-800/50">
                <p className="text-xs text-blue-700 dark:text-blue-300 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">info</span>
                  Applies to all passengers on delayed flight.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-[13px] font-semibold text-gray-500 uppercase tracking-wider px-1">Severe Delay Recovery</h3>
          <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="p-4 border-b border-gray-50 dark:border-gray-800 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-orange-500 text-[20px]">restaurant</span>
                <span className="font-bold text-gray-900 dark:text-white">Meal Vouchers</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input defaultChecked type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-success-green"></div>
              </label>
            </div>
            <div className="p-5 space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-gray-500">Delay Threshold</span>
                  <span className="text-primary font-bold">4 Hours</span>
                </div>
                <input className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer" type="range" min="120" max="480" step="60" defaultValue="240" />
                <div className="flex justify-between text-[10px] text-gray-400 font-bold uppercase">
                  <span>2h</span>
                  <span>4h</span>
                  <span>6h</span>
                  <span>8h</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-gray-500">Voucher Value</span>
                  <span className="text-green-600 dark:text-green-400 font-bold">$15.00</span>
                </div>
                <input className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer" type="range" min="5" max="50" step="5" defaultValue="15" />
                <div className="flex justify-between text-[10px] text-gray-400 font-bold uppercase">
                  <span>$5</span>
                  <span>$15</span>
                  <span>$30</span>
                  <span>$50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/90 dark:bg-background-dark/90 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 p-4 z-50">
        <button 
            onClick={handleSave}
            disabled={isSaving}
            className={`w-full flex items-center justify-center gap-2 text-white font-bold py-4 rounded-2xl shadow-lg active:scale-[0.98] transition-all ${isSaving ? 'bg-primary/80 cursor-wait' : 'bg-primary hover:bg-primary/90'}`}
        >
          {isSaving ? (
            <>
              <span className="material-symbols-outlined animate-spin">progress_activity</span>
              Saving...
            </>
          ) : (
            'Save All Changes'
          )}
        </button>
      </div>
    </div>
  );
};

export default RecoveryRules;