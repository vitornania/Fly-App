import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FlightRecovery: React.FC = () => {
  const navigate = useNavigate();
  const [slidePosition, setSlidePosition] = useState(0);
  const [isAuthorizing, setIsAuthorizing] = useState(false);

  useEffect(() => {
      if (slidePosition > 200 && !isAuthorizing) {
          setIsAuthorizing(true);
          setTimeout(() => {
              navigate('/log');
          }, 1000);
      } else if (slidePosition <= 200 && !isAuthorizing && slidePosition > 0) {
          // Snap back
          const timer = setTimeout(() => setSlidePosition(0), 300);
          return () => clearTimeout(timer);
      }
  }, [slidePosition, isAuthorizing, navigate]);


  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden max-w-md mx-auto bg-white dark:bg-background-dark shadow-2xl">
      {/* Top App Bar */}
      <div className="flex items-center bg-white dark:bg-background-dark p-4 pb-2 justify-between border-b dark:border-white/10">
        <div onClick={() => navigate(-1)} className="text-[#111418] dark:text-white flex size-12 shrink-0 items-center justify-start cursor-pointer">
          <span className="material-symbols-outlined text-2xl">arrow_back_ios</span>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-[#111418] dark:text-white text-base font-bold leading-tight">Flight AA1234 Recovery</h2>
          <p className="text-xs text-[#617589] font-medium">LHR → JFK • Gate B12</p>
        </div>
        <div className="flex w-12 items-center justify-end">
          <span className="material-symbols-outlined text-[#111418] dark:text-white">more_horiz</span>
        </div>
      </div>
      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto pb-32">
        {/* Status Banner */}
        <div className="bg-red-50 dark:bg-red-950/30 p-4 border-b border-red-100 dark:border-red-900/50">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400">
              <span className="material-symbols-outlined">warning</span>
            </div>
            <div>
              <p className="text-sm font-bold text-red-700 dark:text-red-400 leading-tight">+135m Delay Detected</p>
              <p className="text-xs text-red-600 dark:text-red-400/80">184 Passengers impacted at gate.</p>
            </div>
          </div>
        </div>
        <div className="px-4 pt-6">
          <h2 className="text-[#111418] dark:text-white text-2xl font-bold tracking-tight">Issue Digital Vouchers</h2>
          <p className="text-[#617589] dark:text-slate-400 text-sm mt-1 leading-normal">
            Empower your passengers instantly. Select a recovery option to dispatch to all mobile boarding passes.
          </p>
        </div>
        {/* Recovery Cards Container */}
        <div className="p-4 flex flex-col gap-4">
          {/* Meal Voucher Card */}
          <div className="flex flex-col rounded-xl border border-gray-100 dark:border-white/10 shadow-sm bg-white dark:bg-white/5 overflow-hidden">
            <div className="p-4 flex flex-col gap-3">
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400">
                    <span className="material-symbols-outlined text-3xl">restaurant</span>
                  </div>
                  <div>
                    <p className="text-[#111418] dark:text-white text-lg font-bold leading-tight">$20 Meal Voucher</p>
                    <p className="text-[#617589] dark:text-slate-400 text-sm mt-0.5">Valid at all terminal concessions</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400 px-2 py-1 rounded">High Priority</span>
              </div>
              <div className="flex gap-2 pt-2">
                <button className="flex-1 flex h-11 items-center justify-center rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 active:scale-95 transition-transform">
                  Send to All
                </button>
                <button className="flex size-11 items-center justify-center rounded-lg border border-gray-200 dark:border-white/10 text-[#111418] dark:text-white">
                  <span className="material-symbols-outlined">group_add</span>
                </button>
              </div>
            </div>
          </div>
          {/* Wi-Fi Card */}
          <div className="flex flex-col rounded-xl border border-gray-100 dark:border-white/10 shadow-sm bg-white dark:bg-white/5 overflow-hidden">
            <div className="p-4 flex flex-col gap-3">
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400">
                    <span className="material-symbols-outlined text-3xl">wifi_tethering</span>
                  </div>
                  <div>
                    <p className="text-[#111418] dark:text-white text-lg font-bold leading-tight">Free Premium Wi-Fi</p>
                    <p className="text-[#617589] dark:text-slate-400 text-sm mt-0.5">Unlimited high-speed (24h)</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                <button className="flex-1 flex h-11 items-center justify-center rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 active:scale-95 transition-transform">
                  Send to All
                </button>
                <button className="flex size-11 items-center justify-center rounded-lg border border-gray-200 dark:border-white/10 text-[#111418] dark:text-white">
                  <span className="material-symbols-outlined">group_add</span>
                </button>
              </div>
            </div>
          </div>
          {/* Lounge Access Card */}
          <div className="flex flex-col rounded-xl border border-gray-100 dark:border-white/10 shadow-sm bg-white dark:bg-white/5 overflow-hidden">
            <div className="p-4 flex flex-col gap-3">
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400">
                    <span className="material-symbols-outlined text-3xl">meeting_room</span>
                  </div>
                  <div>
                    <p className="text-[#111418] dark:text-white text-lg font-bold leading-tight">Lounge Access</p>
                    <p className="text-[#617589] dark:text-slate-400 text-sm mt-0.5">Airline Club Entry - Gate B4</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                <button className="flex-1 flex h-11 items-center justify-center rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 active:scale-95 transition-transform">
                  Send to All
                </button>
                <button className="flex size-11 items-center justify-center rounded-lg border border-gray-200 dark:border-white/10 text-[#111418] dark:text-white">
                  <span className="material-symbols-outlined">group_add</span>
                </button>
              </div>
            </div>
          </div>
          {/* Custom Recovery Action */}
          <div className="flex items-center gap-4 bg-white dark:bg-white/5 border border-dashed border-gray-300 dark:border-white/20 px-4 h-16 rounded-xl justify-between cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="text-[#617589] flex items-center justify-center rounded-lg bg-gray-100 dark:bg-white/10 size-10">
                <span className="material-symbols-outlined">add_box</span>
              </div>
              <p className="text-[#617589] dark:text-slate-400 text-base font-medium leading-normal flex-1 truncate">Custom Recovery Action</p>
            </div>
            <span className="material-symbols-outlined text-gray-400">chevron_right</span>
          </div>
        </div>
      </div>
      {/* Footer Action (Slide to Confirm) */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white dark:bg-background-dark border-t dark:border-white/10 backdrop-blur-md pb-8">
        <div className="relative flex items-center h-16 w-full rounded-full bg-gray-100 dark:bg-white/10 p-1 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center z-0">
                <p className={`text-sm font-bold text-[#111418] dark:text-white transition-opacity ${isAuthorizing ? 'opacity-0' : 'opacity-100'}`}>Slide to Authorize Recovery</p>
            </div>
            {isAuthorizing && (
                <div className="absolute inset-0 flex items-center justify-center z-0 bg-success-green transition-all duration-300">
                    <p className="text-sm font-bold text-white flex items-center gap-2"><span className="material-symbols-outlined">check</span> Authorized</p>
                </div>
            )}
            <div
                className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg cursor-grab active:cursor-grabbing touch-none"
                style={{ transform: `translateX(${slidePosition}px)`, transition: isAuthorizing ? 'transform 0.5s ease' : 'none' }}
                onMouseDown={(e) => {
                    if (isAuthorizing) return;
                    const startX = e.clientX;
                    const handleMouseMove = (ev: MouseEvent) => {
                        const diff = ev.clientX - startX;
                        setSlidePosition(Math.max(0, Math.min(240, diff)));
                    };
                    const handleMouseUp = () => {
                        window.removeEventListener('mousemove', handleMouseMove);
                        window.removeEventListener('mouseup', handleMouseUp);
                        // Logic handled in useEffect
                        if (slidePosition <= 200) setSlidePosition(0);
                    };
                    window.addEventListener('mousemove', handleMouseMove);
                    window.addEventListener('mouseup', handleMouseUp);
                }}
                onTouchStart={(e) => {
                    if (isAuthorizing) return;
                    const startX = e.touches[0].clientX;
                    const handleTouchMove = (ev: TouchEvent) => {
                        const diff = ev.touches[0].clientX - startX;
                        setSlidePosition(Math.max(0, Math.min(240, diff)));
                    };
                    const handleTouchEnd = () => {
                        window.removeEventListener('touchmove', handleTouchMove);
                        window.removeEventListener('touchend', handleTouchEnd);
                        if (slidePosition <= 200) setSlidePosition(0);
                    };
                    window.addEventListener('touchmove', handleTouchMove);
                    window.addEventListener('touchend', handleTouchEnd);
                }}
            >
                <span className="material-symbols-outlined">double_arrow</span>
            </div>
        </div>
        <div className="mt-4 flex justify-center gap-4 opacity-50">
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-xs">history</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Logs</span>
          </div>
          <div className="flex items-center gap-1 text-primary">
            <span className="material-symbols-outlined text-xs">shield</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Secure Access</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightRecovery;
