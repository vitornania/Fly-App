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
    <div className="relative flex h-screen w-full flex-col max-w-md mx-auto bg-background-light dark:bg-[#101922] shadow-2xl overflow-hidden">
      <header className="sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center h-10 w-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <span className="material-symbols-outlined text-gray-700 dark:text-white">account_circle</span>
          </button>
          <div>
            <h1 className="text-base font-bold leading-tight text-gray-900 dark:text-white">Performance</h1>
            <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Agent ID: GA-7729</p>
          </div>
        </div>
        <div className="flex bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">
            {(['today', 'week', 'month'] as TimeRange[]).map((r) => (
                <button 
                    key={r}
                    onClick={() => setRange(r)}
                    className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase transition-all ${
                        range === r 
                        ? 'bg-white dark:bg-gray-700 text-primary shadow-sm' 
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900'
                    }`}
                >
                    {r}
                </button>
            ))}
        </div>
      </header>
      <main className="flex-1 overflow-y-auto no-scrollbar pb-24">
        <section className="mt-6 px-4 flex flex-col items-center">
          <div className="bg-white dark:bg-gray-900 w-full p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col items-center relative overflow-hidden">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">Recovery Budget ({range})</h3>
            
            <div className="relative flex flex-col items-center justify-center pt-4">
              <svg className="w-64 h-32" viewBox="0 0 100 55">
                <defs>
                    <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
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
                        stroke="#f1f5f9" 
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
                    />
                </g>
                <text x="10" y="55" fontSize="4" fill="#94a3b8" fontWeight="bold">0%</text>
                <text x="90" y="55" fontSize="4" fill="#94a3b8" fontWeight="bold" textAnchor="end">100%</text>
              </svg>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-2 text-center">
                <span className="text-3xl font-black text-gray-900 dark:text-white tabular-nums tracking-tight block">
                    ${currentStats.budget.toLocaleString()}
                </span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Spent</span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 w-full gap-4 pt-4 border-t border-gray-50 dark:border-gray-800">
              <div className="text-center">
                <p className="text-[10px] uppercase font-bold text-gray-400">Remaining</p>
                <p className="text-lg font-bold text-success-green">${(currentStats.total - currentStats.budget).toLocaleString()}</p>
              </div>
              <div className="text-center border-l border-gray-100 dark:border-gray-800">
                <p className="text-[10px] uppercase font-bold text-gray-400">Avg. Per Pax</p>
                <p className="text-lg font-bold text-gray-700 dark:text-gray-200">$42</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-4 px-4">
          <div className="bg-white dark:bg-gray-900 p-5 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm transition-all">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Passenger Sentiment</h3>
                <p className="text-xs text-gray-500">Real-time gate feedback</p>
              </div>
              <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter ${currentStats.nps > 80 ? 'bg-success-green/10 text-success-green' : 'bg-urgent-amber/10 text-urgent-amber'}`}>
                  {currentStats.nps > 80 ? 'Excellent' : 'Average'}
              </span>
            </div>
            <div className="flex items-end gap-3 mb-4">
              <span className="text-5xl font-black text-gray-900 dark:text-white transition-all duration-500">{currentStats.nps}</span>
              <div className="flex-1 pb-1">
                <div className="h-3 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-alert-red via-urgent-amber to-success-green transition-all duration-1000 ease-out" 
                    style={{ width: `${currentStats.nps}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="flex justify-between text-[11px] font-semibold text-gray-400">
              <span>CRITICAL</span>
              <span>NEUTRAL</span>
              <span>EXCELLENT</span>
            </div>
          </div>
        </section>
        <section className="mt-6 px-4">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1 mb-3">Your Impact</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col gap-2 hover:scale-[1.02] transition-transform">
              <div className="bg-primary/10 w-10 h-10 rounded-xl flex items-center justify-center mb-1">
                <span className="material-symbols-outlined text-primary text-xl">psychology</span>
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">{currentStats.tensions}</span>
              <p className="text-[11px] font-semibold text-gray-500 uppercase leading-tight">Tensions Defused</p>
              <div className="mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-success-green text-xs">arrow_upward</span>
                <span className="text-[10px] text-success-green font-bold">+12%</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col gap-2 hover:scale-[1.02] transition-transform">
              <div className="bg-alert-red/10 w-10 h-10 rounded-xl flex items-center justify-center mb-1">
                <span className="material-symbols-outlined text-alert-red text-xl">loyalty</span>
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">{currentStats.retention}</span>
              <p className="text-[11px] font-semibold text-gray-500 uppercase leading-tight">Retention Score</p>
              <div className="mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-success-green text-xs">trending_up</span>
                <span className="text-[10px] text-success-green font-bold">Top 5%</span>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-6 px-4">
          <div className="bg-gradient-to-br from-indigo-600 to-primary p-4 rounded-2xl text-white shadow-lg shadow-primary/30 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">Daily Rank</span>
                <span className="material-symbols-outlined text-yellow-400">emoji_events</span>
              </div>
              <p className="text-xl font-bold">4th in Terminal B</p>
              <p className="text-xs opacity-80 mt-1">280 points to reach 3rd place</p>
            </div>
            <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-white/10 text-8xl rotate-12">workspace_premium</span>
          </div>
        </section>
      </main>
      <BottomNav items={navItems} />
    </div>
  );
};

export default Performance;