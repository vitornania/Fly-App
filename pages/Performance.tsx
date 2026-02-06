import React, { useState } from 'react';
import BottomNav from '../components/BottomNav';

type TimeRange = 'today' | 'week' | 'month';

const Performance: React.FC = () => {
    const [range, setRange] = useState<TimeRange>('today');
    
    const navItems = [
      { icon: 'dashboard', label: 'Home', path: '/' },
      { icon: 'flight_takeoff', label: 'Flights', path: '/airport-detail' },
      { icon: 'groups', label: 'Pax', path: '/passengers' },
      { icon: 'forum', label: 'Handover', path: '/handover' },
      { icon: 'bar_chart', label: 'Stats', path: '/performance', active: true },
    ];

    // Mock data based on range
    const stats = {
        today: { budget: 1200, total: 5000, nps: 84, tensions: 14, retention: '96%' },
        week: { budget: 8500, total: 35000, nps: 79, tensions: 42, retention: '94%' },
        month: { budget: 32000, total: 150000, nps: 81, tensions: 156, retention: '95%' }
    };
    
    const currentStats = stats[range];
    const budgetPercentage = Math.min(100, Math.max(0, (currentStats.budget / currentStats.total) * 100));
    
    // SVG Geometry
    // Radius 40. Semi-circle length = PI * 40 ≈ 125.66
    const radius = 40;
    const circumference = Math.PI * radius; 
    const dashOffset = circumference - (circumference * budgetPercentage) / 100;

  return (
    <div className="relative flex h-screen w-full flex-col max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-2xl overflow-hidden font-display">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 px-4 py-3 flex items-center justify-between transition-all">
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center h-10 w-10 rounded-full bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm ring-2 ring-transparent hover:ring-primary/20 transition-all">
            <span className="material-symbols-outlined text-gray-700 dark:text-gray-200">account_circle</span>
          </button>
          <div>
            <h1 className="text-base font-bold leading-tight text-gray-900 dark:text-white">Performance</h1>
            <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Agent ID: GA-7729</p>
          </div>
        </div>
        <div className="flex bg-gray-100 dark:bg-surface-dark p-1 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
            {(['today', 'week', 'month'] as TimeRange[]).map((r) => (
                <button 
                    key={r}
                    onClick={() => setRange(r)}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wide transition-all duration-300 ${
                        range === r 
                        ? 'bg-white dark:bg-gray-700 text-primary shadow-sm scale-105' 
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                >
                    {r}
                </button>
            ))}
        </div>
      </header>
      <main className="flex-1 overflow-y-auto no-scrollbar pb-24">
        <section className="mt-6 px-4 flex flex-col items-center">
          <div className="bg-white dark:bg-surface-dark w-full p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-glass flex flex-col items-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 mb-2 uppercase tracking-widest z-10">Recovery Budget ({range})</h3>
            
            <div className="relative flex flex-col items-center justify-center pt-4 z-10">
              <svg className="w-64 h-32" viewBox="0 0 100 55">
                <defs>
                    <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#818cf8" /> {/* Indigo 400 */}
                        <stop offset="100%" stopColor="#6366f1" /> {/* Indigo 500 */}
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>
                {/* 
                   Background Track 
                   Path: M 90 50 A 40 40 0 0 1 10 50 (U shape right-to-left)
                   Rotated 180 around 50,50 -> n shape left-to-right
                */}
                <g transform="rotate(180 50 50)">
                    <path 
                        d="M 90 50 A 40 40 0 0 1 10 50" 
                        fill="none" 
                        stroke="#f3f4f6" 
                        strokeWidth="8" 
                        strokeLinecap="round"
                        className="dark:stroke-gray-800"
                    />
                    <path 
                        className="gauge-fill transition-all duration-1000 ease-out" 
                        d="M 90 50 A 40 40 0 0 1 10 50" 
                        fill="none" 
                        stroke="url(#gaugeGradient)" 
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={dashOffset}
                        filter="url(#glow)"
                        opacity="0.9"
                    />
                </g>
                <text x="10" y="55" fontSize="4" fill="#9ca3af" fontWeight="bold" fontFamily="Plus Jakarta Sans">0%</text>
                <text x="90" y="55" fontSize="4" fill="#9ca3af" fontWeight="bold" textAnchor="end" fontFamily="Plus Jakarta Sans">100%</text>
              </svg>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-2 text-center">
                <span className="text-4xl font-black text-gray-900 dark:text-white tabular-nums tracking-tighter block drop-shadow-sm">
                    ${currentStats.budget.toLocaleString()}
                </span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1 block">Spent</span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 w-full gap-4 pt-5 border-t border-gray-50 dark:border-gray-800/50">
              <div className="text-center group-hover:transform group-hover:scale-105 transition-transform duration-300">
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Remaining</p>
                <p className="text-lg font-bold text-success-green drop-shadow-sm">${(currentStats.total - currentStats.budget).toLocaleString()}</p>
              </div>
              <div className="text-center border-l border-gray-100 dark:border-gray-800/50 group-hover:transform group-hover:scale-105 transition-transform duration-300 delay-75">
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Avg. Per Pax</p>
                <p className="text-lg font-bold text-gray-700 dark:text-gray-200">$42</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mt-4 px-4">
          <div className="bg-white dark:bg-surface-dark p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-glass transition-all hover:shadow-lg">
            <div className="flex justify-between items-start mb-5">
              <div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Passenger Sentiment</h3>
                <p className="text-xs text-gray-500 mt-0.5">Real-time AI analysis</p>
              </div>
              <span className={`text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border ${currentStats.nps > 80 ? 'bg-success-green/10 text-success-green border-success-green/20' : 'bg-urgent-amber/10 text-urgent-amber border-urgent-amber/20'}`}>
                  {currentStats.nps > 80 ? 'Excellent' : 'Average'}
              </span>
            </div>
            <div className="flex items-end gap-4 mb-5">
              <span className="text-6xl font-black text-gray-900 dark:text-white transition-all duration-500 tracking-tighter leading-none">{currentStats.nps}</span>
              <div className="flex-1 pb-2">
                <div className="h-4 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden p-0.5 box-content border border-gray-200 dark:border-gray-700">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-alert-red via-urgent-amber to-success-green transition-all duration-1000 ease-out shadow-sm" 
                    style={{ width: `${currentStats.nps}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <span>Critical</span>
              <span>Neutral</span>
              <span>Excellent</span>
            </div>
          </div>
        </section>
        
        <section className="mt-6 px-4">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1 mb-3">Your Impact</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-surface-dark p-5 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col gap-3 hover:scale-[1.02] transition-transform duration-300">
              <div className="bg-primary/10 dark:bg-primary/20 w-12 h-12 rounded-2xl flex items-center justify-center text-primary shadow-glow">
                <span className="material-symbols-outlined text-2xl">psychology</span>
              </div>
              <div>
                  <span className="text-3xl font-bold text-gray-900 dark:text-white block">{currentStats.tensions}</span>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Tensions Defused</p>
              </div>
              <div className="flex items-center gap-1.5 bg-success-green/5 w-fit px-2 py-1 rounded-lg">
                <span className="material-symbols-outlined text-success-green text-xs">arrow_upward</span>
                <span className="text-[10px] text-success-green font-bold">+12%</span>
              </div>
            </div>
            <div className="bg-white dark:bg-surface-dark p-5 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col gap-3 hover:scale-[1.02] transition-transform duration-300">
              <div className="bg-alert-red/10 dark:bg-alert-red/20 w-12 h-12 rounded-2xl flex items-center justify-center text-alert-red shadow-[0_0_20px_rgba(244,63,94,0.3)]">
                <span className="material-symbols-outlined text-2xl">loyalty</span>
              </div>
               <div>
                  <span className="text-3xl font-bold text-gray-900 dark:text-white block">{currentStats.retention}</span>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Retention Score</p>
               </div>
              <div className="flex items-center gap-1.5 bg-success-green/5 w-fit px-2 py-1 rounded-lg">
                <span className="material-symbols-outlined text-success-green text-xs">trending_up</span>
                <span className="text-[10px] text-success-green font-bold">Top 5%</span>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mt-6 px-4">
          <div className="bg-gradient-to-br from-indigo-600 to-violet-600 p-6 rounded-3xl text-white shadow-xl shadow-indigo-500/30 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-white/20 transition-colors duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-80 border border-white/20 px-2 py-1 rounded-lg bg-white/10 backdrop-blur-sm">Daily Rank</span>
                <div className="bg-yellow-400/20 p-2 rounded-full backdrop-blur-md">
                     <span className="material-symbols-outlined text-yellow-300">emoji_events</span>
                </div>
              </div>
              <p className="text-3xl font-bold tracking-tight">4th Place</p>
              <p className="text-sm font-medium opacity-90 mt-1">Terminal B Leaderboard</p>
              
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                  <div className="h-1.5 flex-1 bg-black/20 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-400 w-3/4 shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>
                  </div>
                  <span className="text-[10px] font-bold">280 pts to #3</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <BottomNav items={navItems} />
    </div>
  );
};

export default Performance;