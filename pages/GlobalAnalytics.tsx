import React from 'react';
import { globalKpis } from '../mockData';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const GlobalAnalytics: React.FC = () => {
    const navigate = useNavigate();

    const navItems = [
      { icon: 'analytics', label: 'Global', path: '/global-analytics', active: true },
      { icon: 'public', label: 'Network', path: '/airport-detail' },
      { icon: 'admin_panel_settings', label: 'Rules', path: '/rules' },
      { icon: 'settings', label: 'Config', path: '/rules' },
    ];

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display pb-24">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div onClick={() => navigate('/')} className="p-2 rounded-lg bg-primary/10 text-primary cursor-pointer">
            <span className="material-symbols-outlined">analytics</span>
          </div>
          <div>
            <h1 className="text-lg font-bold leading-none">Global Ops</h1>
            <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Manager Analytics</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">calendar_today</span>
          </button>
          <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">notifications</span>
          </button>
        </div>
      </nav>
      <main className="p-4 space-y-6">
        {/* Budget Utilization Card */}
        <section className="bg-white dark:bg-slate-900 rounded-xl p-5 shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Recovery Expenditure</h2>
              <p className="text-3xl font-bold mt-1 text-primary">$1.24M</p>
            </div>
            <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold px-2 py-1 rounded">
              +12.5%
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-slate-500">Budget Utilization</span>
              <span className="text-slate-900 dark:text-slate-100">62% of $2.0M</span>
            </div>
            <div className="h-2.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: '62%' }}></div>
            </div>
            <p className="text-[11px] text-slate-400 italic">Remaining quarterly allocation: $760,000</p>
          </div>
        </section>
        {/* KPI Grid */}
        <section className="grid grid-cols-2 gap-4">
          {globalKpis.map((kpi, index) => (
            <div key={index} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <p className="text-xs font-medium text-slate-500">{kpi.label}</p>
              <p className="text-xl font-bold mt-1">{kpi.value}</p>
              <div className={`flex items-center gap-1 mt-2 text-[10px] font-bold ${kpi.trendColor}`}>
                <span className="material-symbols-outlined text-sm">{kpi.trendDirection === 'up' ? 'trending_up' : 'trending_down'}</span>
                <span>{kpi.trend}</span>
              </div>
            </div>
          ))}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm col-span-2">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs font-medium text-slate-500">Passenger NPS Trend</p>
                <p className="text-2xl font-bold mt-1">72.4</p>
              </div>
              <div className="h-10 w-32 flex items-end gap-1">
                <div className="flex-1 bg-slate-100 dark:bg-slate-800 h-[40%] rounded-t-sm"></div>
                <div className="flex-1 bg-slate-100 dark:bg-slate-800 h-[60%] rounded-t-sm"></div>
                <div className="flex-1 bg-slate-100 dark:bg-slate-800 h-[55%] rounded-t-sm"></div>
                <div className="flex-1 bg-primary/40 h-[75%] rounded-t-sm"></div>
                <div className="flex-1 bg-primary h-full rounded-t-sm"></div>
              </div>
            </div>
          </div>
        </section>
        {/* High-Tension Airports Map */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-slate-800 dark:text-slate-200">High-Tension Airports</h3>
            <span className="text-xs text-primary font-semibold">View All</span>
          </div>
          <div className="relative w-full h-48 bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden mb-4 border border-slate-200 dark:border-slate-800">
            <div className="absolute inset-0 opacity-40 grayscale group-hover:grayscale-0 transition-all">
              <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfFduJhH5rUcCRhhazt0rIEYHkHAK-6tmzSNOTwuWNZ33oi0m6GDxj0gbjj7BL8qPCitqW7GhoDW0Fl8Qk-criMh2tiCREC2KmyPvDNo2P-EU-_rk-mDzTMVFP4rTYkr6iG0OXQpjY_14gjJz0j0LujdFOtJLpSKzT5fiYkV9KponbUR0wsuGR4jNAMqazOecwD_WfH8hSWjubUsztPSXIPcIzFDB3pXYo6wOnxUaQrPnYL9pPyksB5lWsiVGMb3p6tUyY63Xk-dEB" className="w-full h-full object-cover" alt="map" />
              </div>
            </div>
            <div className="absolute top-1/4 left-1/4 size-4 bg-rose-500 rounded-full animate-pulse ring-4 ring-rose-500/30"></div>
            <div className="absolute bottom-1/3 right-1/4 size-3 bg-amber-500 rounded-full ring-4 ring-amber-500/30"></div>
            <div className="absolute top-1/2 left-2/3 size-3 bg-rose-500 rounded-full animate-pulse ring-4 ring-rose-500/30"></div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 bg-rose-50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-900/20 rounded-lg cursor-pointer" onClick={() => navigate('/airport-detail')}>
              <div className="flex items-center gap-3">
                <span className="font-bold text-rose-600 dark:text-rose-400">LHR</span>
                <div className="h-4 w-px bg-rose-200 dark:bg-rose-800"></div>
                <span className="text-xs font-medium">London Heathrow</span>
              </div>
              <div className="flex items-center gap-1 text-rose-600">
                <span className="text-xs font-bold">Critical</span>
                <span className="material-symbols-outlined text-sm">warning</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg cursor-pointer" onClick={() => navigate('/airport-detail')}>
              <div className="flex items-center gap-3">
                <span className="font-bold text-slate-700 dark:text-slate-300">JFK</span>
                <div className="h-4 w-px bg-slate-200 dark:bg-slate-700"></div>
                <span className="text-xs font-medium">John F. Kennedy</span>
              </div>
              <div className="flex items-center gap-1 text-amber-500">
                <span className="text-xs font-bold">Elevated</span>
                <span className="material-symbols-outlined text-sm">error</span>
              </div>
            </div>
          </div>
        </section>
        {/* Recovery Cost by Hub Chart */}
        <section className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-6">Recovery Cost by Hub</h3>
          <div className="space-y-5">
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span>Atlanta (ATL)</span>
                <span>$342k</span>
              </div>
              <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span>Dubai (DXB)</span>
                <span>$210k</span>
              </div>
              <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-primary/70 rounded-full" style={{ width: '55%' }}></div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span>Singapore (SIN)</span>
                <span>$156k</span>
              </div>
              <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-primary/50 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
             <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span>Paris (CDG)</span>
                <span>$88k</span>
              </div>
              <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-primary/30 rounded-full" style={{ width: '22%' }}></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <BottomNav items={navItems} />
    </div>
  );
};

export default GlobalAnalytics;