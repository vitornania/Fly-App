import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FlightRecovery: React.FC = () => {
  const navigate = useNavigate();
  const [slidePosition, setSlidePosition] = useState(0);
  const [isAuthorizing, setIsAuthorizing] = useState(false);
  const [actionStates, setActionStates] = useState<{[key: string]: boolean}>({});

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

  const handleSendToAll = (id: string) => {
      setActionStates(prev => ({...prev, [id]: true}));
      // Reset after 3 seconds so they can send again if needed? Or keep sent.
      setTimeout(() => {
         setActionStates(prev => ({...prev, [id]: false}));
      }, 3000);
  };


  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden max-w-md mx-auto bg-white dark:bg-background-dark shadow-2xl font-display">
      {/* Top App Bar */}
      <div className="flex items-center bg-white dark:bg-background-dark p-4 pb-2 justify-between border-b border-gray-100 dark:border-gray-800">
        <div onClick={() => navigate(-1)} className="text-gray-900 dark:text-white flex size-12 shrink-0 items-center justify-start cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full transition-colors -ml-2 pl-2">
          <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-gray-900 dark:text-white text-base font-bold leading-tight">Flight AA1234 Recovery</h2>
          <p className="text-xs text-gray-500 font-medium">LHR → JFK • Gate B12</p>
        </div>
        <div className="flex w-12 items-center justify-end">
          <button className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white transition-colors">
             <span className="material-symbols-outlined">more_horiz</span>
          </button>
        </div>
      </div>
      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto pb-48 no-scrollbar">
        {/* Status Banner */}
        <div className="bg-alert-red/5 dark:bg-alert-red/10 p-5 border-b border-alert-red/10 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-xl bg-alert-red/10 text-alert-red shadow-sm">
              <span className="material-symbols-outlined text-2xl">warning</span>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 dark:text-white leading-tight">+135m Delay Detected</p>
              <p className="text-xs text-alert-red font-medium mt-0.5">184 Passengers impacted at gate.</p>
            </div>
          </div>
        </div>
        <div className="px-4 pt-6">
          <h2 className="text-gray-900 dark:text-white text-2xl font-bold tracking-tight">Issue Digital Vouchers</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 leading-relaxed">
            Empower your passengers instantly. Select a recovery option to dispatch to all mobile boarding passes.
          </p>
        </div>
        {/* Recovery Cards Container */}
        <div className="p-4 flex flex-col gap-4">
          {/* Meal Voucher Card */}
          <div className="flex flex-col rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm bg-white dark:bg-surface-dark overflow-hidden transition-transform hover:scale-[1.01]">
            <div className="p-5 flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-urgent-amber/10 text-urgent-amber shadow-sm">
                    <span className="material-symbols-outlined text-3xl">restaurant</span>
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white text-lg font-bold leading-tight">$20 Meal Voucher</p>
                    <p className="text-gray-500 text-sm mt-1">Valid at all terminal concessions</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-urgent-amber/10 text-urgent-amber px-2 py-1 rounded-lg">High Priority</span>
              </div>
              <div className="flex gap-3 pt-1">
                <button 
                    onClick={() => handleSendToAll('meal')}
                    className={`flex-1 flex h-12 items-center justify-center rounded-xl text-sm font-bold shadow-lg transition-all active:scale-95 gap-2 ${
                        actionStates['meal'] 
                        ? 'bg-success-green text-white shadow-success-green/20' 
                        : 'bg-primary text-white shadow-primary/20 hover:bg-primary/90'
                    }`}
                >
                  {actionStates['meal'] ? (
                      <>
                        <span className="material-symbols-outlined text-lg">check</span>
                        Sent to Queue
                      </>
                  ) : (
                      'Send to All'
                  )}
                </button>
                <button className="flex size-12 items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <span className="material-symbols-outlined">group_add</span>
                </button>
              </div>
            </div>
          </div>
          {/* Wi-Fi Card */}
          <div className="flex flex-col rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm bg-white dark:bg-surface-dark overflow-hidden transition-transform hover:scale-[1.01]">
            <div className="p-5 flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500 shadow-sm">
                    <span className="material-symbols-outlined text-3xl">wifi_tethering</span>
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white text-lg font-bold leading-tight">Free Premium Wi-Fi</p>
                    <p className="text-gray-500 text-sm mt-1">Unlimited high-speed (24h)</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 pt-1">
                <button 
                    onClick={() => handleSendToAll('wifi')}
                    className={`flex-1 flex h-12 items-center justify-center rounded-xl text-sm font-bold shadow-lg transition-all active:scale-95 gap-2 ${
                        actionStates['wifi'] 
                        ? 'bg-success-green text-white shadow-success-green/20' 
                        : 'bg-primary text-white shadow-primary/20 hover:bg-primary/90'
                    }`}
                >
                   {actionStates['wifi'] ? (
                      <>
                        <span className="material-symbols-outlined text-lg">check</span>
                        Sent to Queue
                      </>
                  ) : (
                      'Send to All'
                  )}
                </button>
                <button className="flex size-12 items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <span className="material-symbols-outlined">group_add</span>
                </button>
              </div>
            </div>
          </div>
          {/* Lounge Access Card */}
          <div className="flex flex-col rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm bg-white dark:bg-surface-dark overflow-hidden transition-transform hover:scale-[1.01]">
            <div className="p-5 flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-500 shadow-sm">
                    <span className="material-symbols-outlined text-3xl">meeting_room</span>
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white text-lg font-bold leading-tight">Lounge Access</p>
                    <p className="text-gray-500 text-sm mt-1">Airline Club Entry - Gate B4</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 pt-1">
                <button 
                    onClick={() => handleSendToAll('lounge')}
                    className={`flex-1 flex h-12 items-center justify-center rounded-xl text-sm font-bold shadow-lg transition-all active:scale-95 gap-2 ${
                        actionStates['lounge'] 
                        ? 'bg-success-green text-white shadow-success-green/20' 
                        : 'bg-primary text-white shadow-primary/20 hover:bg-primary/90'
                    }`}
                >
                   {actionStates['lounge'] ? (
                      <>
                        <span className="material-symbols-outlined text-lg">check</span>
                        Sent to Queue
                      </>
                  ) : (
                      'Send to All'
                  )}
                </button>
                <button className="flex size-12 items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <span className="material-symbols-outlined">group_add</span>
                </button>
              </div>
            </div>
          </div>
          {/* Custom Recovery Action */}
          <div className="flex items-center gap-4 bg-gray-50 dark:bg-surface-dark border border-dashed border-gray-300 dark:border-gray-700 px-5 h-20 rounded-2xl justify-between cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <div className="flex items-center gap-4">
              <div className="text-gray-500 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 size-10">
                <span className="material-symbols-outlined">add</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-base font-medium flex-1 truncate">Custom Recovery Action</p>
            </div>
            <span className="material-symbols-outlined text-gray-400">chevron_right</span>
          </div>
        </div>
      </div>
      {/* Footer Action (Slide to Confirm) */}
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-white/90 dark:bg-background-dark/95 border-t border-gray-100 dark:border-gray-800 backdrop-blur-xl pb-10 z-20">
        <div className="relative flex items-center h-16 w-full rounded-full bg-gray-100 dark:bg-surface-dark p-1 overflow-hidden shadow-inner">
            <div className="absolute inset-0 flex items-center justify-center z-0">
                <p className={`text-sm font-bold text-gray-900 dark:text-white transition-opacity tracking-wide ${isAuthorizing ? 'opacity-0' : 'opacity-100'}`}>Slide to Authorize Recovery</p>
            </div>
            {isAuthorizing && (
                <div className="absolute inset-0 flex items-center justify-center z-0 bg-success-green transition-all duration-300">
                    <p className="text-sm font-bold text-white flex items-center gap-2"><span className="material-symbols-outlined">check_circle</span> Authorized</p>
                </div>
            )}
            <div
                className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg cursor-grab active:cursor-grabbing touch-none"
                style={{ transform: `translateX(${slidePosition}px)`, transition: isAuthorizing ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none' }}
                onMouseDown={(e) => {
                    if (isAuthorizing) return;
                    const startX = e.clientX;
                    const handleMouseMove = (ev: MouseEvent) => {
                        const diff = ev.clientX - startX;
                        setSlidePosition(Math.max(0, Math.min(260, diff)));
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
                        setSlidePosition(Math.max(0, Math.min(260, diff)));
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
        <div className="mt-4 flex justify-center gap-6 opacity-60">
          <div className="flex items-center gap-1.5 cursor-pointer hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined text-xs">history</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">View Logs</span>
          </div>
          <div className="flex items-center gap-1.5 text-primary">
            <span className="material-symbols-outlined text-xs">lock</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Secure Access</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightRecovery;