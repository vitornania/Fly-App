import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { priorityPassengers } from '../mockData';

const PassengerDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  
  // Find passenger or default to first if not found (for prototype robustness)
  const passenger = priorityPassengers.find(p => p.id === id) || priorityPassengers[0];

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => setLoading(false), 500);
  }, []);

  if (loading) {
      return (
          <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center">
              <span className="material-symbols-outlined animate-spin text-primary text-4xl">progress_activity</span>
          </div>
      );
  }

  return (
    <div className="relative min-h-screen bg-background-light dark:bg-background-dark pb-24 max-w-md mx-auto shadow-2xl overflow-hidden font-display">
       {/* Hero Header */}
       <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white pb-16">
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
                    <div className="h-24 w-24 rounded-full p-1 bg-gradient-to-tr from-loyalty-gold to-yellow-600">
                        <div className="h-full w-full rounded-full border-4 border-gray-900 overflow-hidden bg-gray-800">
                             {passenger.avatarUrl ? (
                                <img src={passenger.avatarUrl} alt={passenger.name} className="h-full w-full object-cover" />
                             ) : (
                                <div className="h-full w-full flex items-center justify-center text-3xl font-bold bg-gray-700">
                                    {passenger.name.charAt(0)}
                                </div>
                             )}
                        </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-loyalty-gold text-white text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-gray-900 uppercase tracking-wider">
                        {passenger.tier}
                    </div>
                </div>
                <h1 className="text-2xl font-bold">{passenger.name}</h1>
                <p className="text-gray-400 text-sm mt-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">flight</span>
                    Traveling to London (LHR)
                </p>
            </div>
       </div>

       {/* Stats Cards (Overlapping) */}
       <div className="relative z-20 px-4 -mt-10">
           <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 p-4 grid grid-cols-3 gap-4 divide-x divide-gray-100 dark:divide-gray-800">
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
           {passenger.issue && (
               <div className="space-y-2">
                   <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Active Issue</h3>
                   <div className="bg-alert-red/5 dark:bg-alert-red/10 border border-alert-red/20 rounded-xl p-4">
                       <div className="flex gap-3">
                           <div className="bg-alert-red/10 p-2 rounded-lg h-fit text-alert-red">
                               <span className="material-symbols-outlined">warning</span>
                           </div>
                           <div>
                               <p className="font-semibold text-gray-900 dark:text-white text-sm">High Frustration Risk</p>
                               <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{passenger.issue}</p>
                           </div>
                       </div>
                   </div>
               </div>
           )}

           {/* Journey Timeline */}
           <div className="space-y-3">
               <div className="flex justify-between items-center">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Itinerary</h3>
                    <span className="text-xs text-primary font-bold">PNR: HK882L</span>
               </div>
               <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-4 relative overflow-hidden">
                   {/* Connecting Line */}
                   <div className="absolute left-[29px] top-6 bottom-6 w-0.5 bg-gray-200 dark:bg-gray-700 border-l border-dashed border-gray-300"></div>
                   
                   {/* Flight 1 */}
                   <div className="relative flex gap-4 mb-6">
                       <div className="relative z-10 flex-none size-3 rounded-full bg-gray-300 dark:bg-gray-600 mt-1.5 ml-3 ring-4 ring-white dark:ring-gray-900"></div>
                       <div className="flex-1">
                           <div className="flex justify-between items-start">
                               <p className="font-bold text-gray-900 dark:text-white">New York (JFK)</p>
                               <p className="text-xs font-mono text-gray-500">14:30 EST</p>
                           </div>
                           <p className="text-xs text-gray-500">Terminal 4 • Gate B12</p>
                       </div>
                   </div>

                   {/* Flight 2 (Current) */}
                   <div className="relative flex gap-4 mb-6">
                       <div className="relative z-10 flex-none size-3 rounded-full bg-alert-red animate-pulse mt-1.5 ml-3 ring-4 ring-white dark:ring-gray-900"></div>
                       <div className="flex-1">
                           <div className="flex justify-between items-start">
                               <p className="font-bold text-gray-900 dark:text-white">In Flight (Delayed)</p>
                               <p className="text-xs font-mono text-alert-red font-bold">+3h 45m</p>
                           </div>
                           <p className="text-xs text-gray-500">Flight AA1234 • Seat {passenger.seat}</p>
                           <div className="mt-2 inline-flex items-center gap-1 px-2 py-1 rounded bg-alert-red/10 text-alert-red text-[10px] font-bold uppercase">
                                <span className="material-symbols-outlined text-[12px]">schedule</span>
                                Critical Delay
                           </div>
                       </div>
                   </div>

                   {/* Flight 3 */}
                   <div className="relative flex gap-4">
                       <div className="relative z-10 flex-none size-3 rounded-full bg-gray-300 dark:bg-gray-600 mt-1.5 ml-3 ring-4 ring-white dark:ring-gray-900"></div>
                       <div className="flex-1 opacity-50">
                           <div className="flex justify-between items-start">
                               <p className="font-bold text-gray-900 dark:text-white">London (LHR)</p>
                               <p className="text-xs font-mono text-gray-500">06:15 GMT</p>
                           </div>
                           <p className="text-xs text-gray-500">Terminal 2 • Connection Risk</p>
                       </div>
                   </div>
               </div>
           </div>

           {/* Recovery Actions */}
           <div className="space-y-3">
               <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Suggested Recovery</h3>
               <div className="grid grid-cols-2 gap-3">
                   <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-colors group">
                       <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                           <span className="material-symbols-outlined">hotel</span>
                       </div>
                       <span className="text-xs font-bold text-gray-700 dark:text-gray-200">Hotel Voucher</span>
                   </button>
                   <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-colors group">
                       <div className="h-10 w-10 rounded-full bg-urgent-amber/10 text-urgent-amber flex items-center justify-center group-hover:scale-110 transition-transform">
                           <span className="material-symbols-outlined">restaurant</span>
                       </div>
                       <span className="text-xs font-bold text-gray-700 dark:text-gray-200">Meal Credit</span>
                   </button>
                   <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-colors group">
                       <div className="h-10 w-10 rounded-full bg-success-green/10 text-success-green flex items-center justify-center group-hover:scale-110 transition-transform">
                           <span className="material-symbols-outlined">upgrade</span>
                       </div>
                       <span className="text-xs font-bold text-gray-700 dark:text-gray-200">Cabin Upgrade</span>
                   </button>
                   <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-colors group">
                       <div className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                           <span className="material-symbols-outlined">more_horiz</span>
                       </div>
                       <span className="text-xs font-bold text-gray-700 dark:text-gray-200">More</span>
                   </button>
               </div>
           </div>
       </div>

       {/* Floating Action Button */}
       <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 max-w-md mx-auto">
           <button className="w-full py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/25 active:scale-95 transition-transform flex items-center justify-center gap-2">
               <span className="material-symbols-outlined">check_circle</span>
               Mark Resolved
           </button>
       </div>
    </div>
  );
};

export default PassengerDetail;