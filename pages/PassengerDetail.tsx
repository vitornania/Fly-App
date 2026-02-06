import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { priorityPassengers } from '../mockData';

const PassengerDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [resolving, setResolving] = useState(false);
  const [resolved, setResolved] = useState(false);
  const [actionStates, setActionStates] = useState<{[key: string]: 'idle' | 'loading' | 'success'}>({});

  // Find passenger or default to first if not found (for prototype robustness)
  const passenger = priorityPassengers.find(p => p.id === id) || priorityPassengers[0];

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => setLoading(false), 500);
  }, []);

  const handleRecoveryAction = (action: string) => {
    setActionStates(prev => ({ ...prev, [action]: 'loading' }));
    setTimeout(() => {
        setActionStates(prev => ({ ...prev, [action]: 'success' }));
    }, 1200);
  };

  const handleResolve = () => {
      setResolving(true);
      setTimeout(() => {
          setResolving(false);
          setResolved(true);
          // Navigate back after short delay
          setTimeout(() => navigate(-1), 1500);
      }, 1500);
  };

  if (loading) {
      return (
          <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center">
              <span className="material-symbols-outlined animate-spin text-primary text-4xl">progress_activity</span>
          </div>
      );
  }

  return (
    <div className="relative min-h-screen bg-background-light dark:bg-background-dark pb-32 max-w-md mx-auto shadow-2xl overflow-hidden font-display">
       {/* Hero Header */}
       <div className="relative bg-gradient-to-b from-surface-dark to-background-dark text-white pb-16">
            <div className="absolute top-0 right-0 p-32 bg-primary/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10 px-4 pt-4 pb-2 flex items-center justify-between">
                <button onClick={() => navigate(-1)} className="p-2 bg-white/10 rounded-full hover:bg-white/20 backdrop-blur-md transition-colors">
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <div className="flex gap-3">
                    <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 backdrop-blur-md transition-colors">
                        <span className="material-symbols-outlined">chat</span>
                    </button>
                    <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 backdrop-blur-md transition-colors">
                        <span className="material-symbols-outlined">more_vert</span>
                    </button>
                </div>
            </div>

            <div className="relative z-10 px-6 pt-4 text-center flex flex-col items-center">
                <div className="relative mb-3">
                    <div className="h-24 w-24 rounded-full p-1 bg-gradient-to-tr from-loyalty-gold to-yellow-600 shadow-xl shadow-loyalty-gold/20">
                        <div className="h-full w-full rounded-full border-4 border-background-dark overflow-hidden bg-gray-800">
                             {passenger.avatarUrl ? (
                                <img src={passenger.avatarUrl} alt={passenger.name} className="h-full w-full object-cover" />
                             ) : (
                                <div className="h-full w-full flex items-center justify-center text-3xl font-bold bg-gray-700">
                                    {passenger.name.charAt(0)}
                                </div>
                             )}
                        </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-loyalty-gold text-white text-[10px] font-bold px-3 py-1 rounded-full border-4 border-background-dark uppercase tracking-wider shadow-sm">
                        {passenger.tier}
                    </div>
                </div>
                <h1 className="text-2xl font-bold">{passenger.name}</h1>
                <p className="text-gray-400 text-sm mt-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">flight_takeoff</span>
                    Traveling to London (LHR)
                </p>
            </div>
       </div>

       {/* Stats Cards (Overlapping) */}
       <div className="relative z-20 px-4 -mt-10">
           <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-xl shadow-black/5 border border-gray-100 dark:border-gray-800 p-5 grid grid-cols-3 gap-4 divide-x divide-gray-100 dark:divide-gray-800">
               <div className="text-center">
                   <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">LTV</p>
                   <p className="text-lg font-bold text-gray-900 dark:text-white">High</p>
               </div>
               <div className="text-center">
                   <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Seat</p>
                   <p className="text-lg font-bold text-gray-900 dark:text-white">{passenger.seat}</p>
               </div>
               <div className="text-center">
                   <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Bag</p>
                   <p className="text-lg font-bold text-gray-900 dark:text-white">2 Checked</p>
               </div>
           </div>
       </div>

       <div className="px-4 mt-6 space-y-6">
           {/* Current Issue Section */}
           {passenger.issue && !resolved && (
               <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
                   <h3 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-widest pl-1">Active Issue</h3>
                   <div className="bg-alert-red/5 dark:bg-alert-red/10 border border-alert-red/20 rounded-2xl p-4">
                       <div className="flex gap-3">
                           <div className="bg-alert-red/10 p-2.5 rounded-xl h-fit text-alert-red">
                               <span className="material-symbols-outlined">warning</span>
                           </div>
                           <div>
                               <p className="font-bold text-gray-900 dark:text-white text-sm">High Frustration Risk</p>
                               <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">{passenger.issue}</p>
                           </div>
                       </div>
                   </div>
               </div>
           )}

           {/* Journey Timeline */}
           <div className="space-y-3">
               <div className="flex justify-between items-center pl-1">
                    <h3 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-widest">Itinerary</h3>
                    <span className="text-xs text-primary font-bold bg-primary/10 px-2 py-0.5 rounded-md">PNR: HK882L</span>
               </div>
               <div className="bg-white dark:bg-surface-dark rounded-3xl border border-gray-100 dark:border-gray-800 p-5 relative overflow-hidden">
                   {/* Connecting Line */}
                   <div className="absolute left-[33px] top-6 bottom-6 w-0.5 bg-gray-200 dark:bg-gray-700 border-l-2 border-dashed border-gray-300 dark:border-gray-600"></div>
                   
                   {/* Flight 1 */}
                   <div className="relative flex gap-4 mb-6">
                       <div className="relative z-10 flex-none size-3 rounded-full bg-gray-300 dark:bg-gray-600 mt-1.5 ml-3 ring-4 ring-white dark:ring-surface-dark"></div>
                       <div className="flex-1">
                           <div className="flex justify-between items-start">
                               <p className="font-bold text-gray-900 dark:text-white">New York (JFK)</p>
                               <p className="text-xs font-mono text-gray-500 font-medium">14:30 EST</p>
                           </div>
                           <p className="text-xs text-gray-500">Terminal 4 • Gate B12</p>
                       </div>
                   </div>

                   {/* Flight 2 (Current) */}
                   <div className="relative flex gap-4 mb-6">
                       <div className="relative z-10 flex-none size-3 rounded-full bg-alert-red animate-pulse mt-1.5 ml-3 ring-4 ring-white dark:ring-surface-dark shadow-[0_0_10px_rgba(244,63,94,0.5)]"></div>
                       <div className="flex-1">
                           <div className="flex justify-between items-start">
                               <p className="font-bold text-gray-900 dark:text-white">In Flight (Delayed)</p>
                               <p className="text-xs font-mono text-alert-red font-bold">+3h 45m</p>
                           </div>
                           <p className="text-xs text-gray-500">Flight AA1234 • Seat {passenger.seat}</p>
                           <div className="mt-2 inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-alert-red/10 text-alert-red text-[10px] font-bold uppercase tracking-wide">
                                <span className="material-symbols-outlined text-[14px]">schedule</span>
                                Critical Delay
                           </div>
                       </div>
                   </div>

                   {/* Flight 3 */}
                   <div className="relative flex gap-4">
                       <div className="relative z-10 flex-none size-3 rounded-full bg-gray-300 dark:bg-gray-600 mt-1.5 ml-3 ring-4 ring-white dark:ring-surface-dark"></div>
                       <div className="flex-1 opacity-50">
                           <div className="flex justify-between items-start">
                               <p className="font-bold text-gray-900 dark:text-white">London (LHR)</p>
                               <p className="text-xs font-mono text-gray-500 font-medium">06:15 GMT</p>
                           </div>
                           <p className="text-xs text-gray-500">Terminal 2 • Connection Risk</p>
                       </div>
                   </div>
               </div>
           </div>

           {/* Recovery Actions */}
           <div className="space-y-3">
               <h3 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-widest pl-1">Suggested Recovery</h3>
               <div className="grid grid-cols-2 gap-3">
                   {['hotel', 'meal', 'upgrade', 'more'].map((type) => {
                       const state = actionStates[type] || 'idle';
                       let icon = 'hotel';
                       let label = 'Hotel Voucher';
                       let colorClass = 'text-primary bg-primary/10';
                       
                       if (type === 'meal') { icon = 'restaurant'; label = 'Meal Credit'; colorClass = 'text-urgent-amber bg-urgent-amber/10'; }
                       if (type === 'upgrade') { icon = 'upgrade'; label = 'Cabin Upgrade'; colorClass = 'text-success-green bg-success-green/10'; }
                       if (type === 'more') { icon = 'more_horiz'; label = 'More'; colorClass = 'text-gray-500 bg-gray-100 dark:bg-gray-700'; }

                       return (
                           <button 
                                key={type}
                                onClick={() => handleRecoveryAction(type)}
                                disabled={state !== 'idle'}
                                className={`flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border transition-all duration-300 group relative overflow-hidden ${
                                    state === 'success' 
                                    ? 'bg-success-green border-success-green' 
                                    : 'bg-white dark:bg-surface-dark border-gray-200 dark:border-gray-700 hover:border-primary/50'
                                }`}
                           >
                               {state === 'loading' ? (
                                   <div className="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-surface-dark/80 z-10">
                                       <span className="material-symbols-outlined animate-spin text-primary">progress_activity</span>
                                   </div>
                               ) : null}
                               
                               {state === 'success' ? (
                                   <>
                                     <div className="h-10 w-10 rounded-full bg-white/20 text-white flex items-center justify-center scale-110">
                                       <span className="material-symbols-outlined">check</span>
                                     </div>
                                     <span className="text-xs font-bold text-white">Sent!</span>
                                   </>
                               ) : (
                                   <>
                                     <div className={`h-10 w-10 rounded-full ${colorClass} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                       <span className="material-symbols-outlined">{icon}</span>
                                     </div>
                                     <span className="text-xs font-bold text-gray-700 dark:text-gray-200">{label}</span>
                                   </>
                               )}
                           </button>
                       );
                   })}
               </div>
           </div>
       </div>

       {/* Floating Action Button */}
       <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-background-dark/90 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 max-w-md mx-auto z-50">
           <button 
                onClick={handleResolve}
                disabled={resolved || resolving}
                className={`w-full py-4 rounded-2xl font-bold shadow-lg flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 ${
                    resolved 
                    ? 'bg-success-green text-white shadow-success-green/30' 
                    : resolving 
                        ? 'bg-gray-200 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                        : 'bg-primary text-white shadow-primary/25 hover:bg-primary/90'
                }`}
           >
               {resolving ? (
                   <>
                    <span className="material-symbols-outlined animate-spin">refresh</span>
                    Resolving...
                   </>
               ) : resolved ? (
                   <>
                    <span className="material-symbols-outlined">check_circle</span>
                    Issue Resolved
                   </>
               ) : (
                   <>
                    <span className="material-symbols-outlined">check_circle</span>
                    Mark Resolved
                   </>
               )}
           </button>
       </div>
    </div>
  );
};

export default PassengerDetail;