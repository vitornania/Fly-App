import React from 'react';
import { useNavigate } from 'react-router-dom';
import { topAgents } from '../mockData';
import BottomNav from '../components/BottomNav';

const AirportDetail: React.FC = () => {
    const navigate = useNavigate();
    
    const navItems = [
      { icon: 'dashboard', label: 'Home', path: '/' },
      { icon: 'flight_takeoff', label: 'Flights', path: '/airport-detail', active: true },
      { icon: 'groups', label: 'Pax', path: '/passengers' },
      { icon: 'forum', label: 'Handover', path: '/handover' },
      { icon: 'bar_chart', label: 'Stats', path: '/performance' },
    ];

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden pb-24 font-display max-w-md mx-auto">
      {/* Top App Bar */}
      <div className="sticky top-0 z-20 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 pb-2 justify-between border-b border-slate-200 dark:border-slate-800">
        <button onClick={() => navigate(-1)} className="text-primary flex size-10 shrink-0 items-center justify-center cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <div className="flex flex-col items-center">
          <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">JFK - New York</h2>
          <span className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-bold">Terminal 4 • Live</span>
        </div>
        <div className="flex w-10 items-center justify-end">
          <button className="flex items-center justify-center rounded-full size-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <span className="material-symbols-outlined text-[20px]">calendar_today</span>
          </button>
        </div>
      </div>
      {/* Performance KPIs */}
      <div className="flex flex-wrap gap-3 p-4">
        <div className="flex min-w-[150px] flex-1 flex-col gap-1 rounded-xl p-5 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 shadow-sm">
          <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">Sentiment Score</p>
          <div className="flex items-baseline gap-2 mt-1">
            <p className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">84%</p>
            <p className="text-emerald-500 text-sm font-bold flex items-center">
              <span className="material-symbols-outlined text-sm">trending_up</span> 5.2%
            </p>
          </div>
        </div>
        <div className="flex min-w-[150px] flex-1 flex-col gap-1 rounded-xl p-5 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 shadow-sm">
          <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">Avg Resolution</p>
          <div className="flex items-baseline gap-2 mt-1">
            <p className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">12m</p>
            <p className="text-orange-500 text-sm font-bold flex items-center">
              <span className="material-symbols-outlined text-sm">trending_down</span> 2m
            </p>
          </div>
        </div>
      </div>
      {/* Recovery Type Distribution */}
      <div className="px-4 py-2">
        <h3 className="text-slate-900 dark:text-white text-base font-bold mb-3 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">analytics</span>
          Recovery Type Mix
        </h3>
        <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
          <div className="flex h-4 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700 mb-4">
            <div className="h-full bg-primary" style={{ width: '40%' }}></div>
            <div className="h-full bg-sky-400" style={{ width: '30%' }}></div>
            <div className="h-full bg-indigo-400" style={{ width: '20%' }}></div>
            <div className="h-full bg-slate-400" style={{ width: '10%' }}></div>
          </div>
          <div className="grid grid-cols-2 gap-y-3 gap-x-4">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-primary"></div>
              <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">Vouchers (40%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-sky-400"></div>
              <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">Wi-Fi Passes (30%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-indigo-400"></div>
              <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">Lounge Access (20%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-slate-400"></div>
              <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">Other (10%)</span>
            </div>
          </div>
        </div>
      </div>
      {/* Top Performing Agents */}
      <div className="px-4 pt-6 pb-2">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-slate-900 dark:text-white text-base font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-yellow-500">military_tech</span>
            Top Recovery Agents
          </h3>
          <span className="text-primary text-xs font-semibold cursor-pointer">View All</span>
        </div>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          {topAgents.map((agent, i) => (
            <div key={i} className="flex min-w-[130px] flex-col items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-4">
              <div className="relative">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-14 ring-2 ring-primary ring-offset-2 dark:ring-offset-slate-900" style={{ backgroundImage: `url("${agent.img}")` }}></div>
                <div className="absolute -bottom-1 -right-1 bg-yellow-400 rounded-full p-0.5 border-2 border-white dark:border-slate-900">
                  <span className="material-symbols-outlined text-[12px] text-white font-bold">star</span>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-slate-900 dark:text-white text-sm font-bold leading-tight">{agent.name}</h4>
                <p className="text-primary text-[11px] font-bold mt-1">Score: {agent.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Live Gate Status Feed */}
      <div className="mt-4 px-4 pb-8">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-slate-900 dark:text-white text-base font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-red-500 animate-pulse">emergency_home</span>
            Live Gate Status: Red Alerts
          </h3>
          <span className="bg-red-500/10 text-red-500 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">3 High Priority</span>
        </div>
        <div className="space-y-3">
          <div 
            onClick={() => navigate('/recovery')}
            className="flex items-center justify-between gap-4 p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 shadow-sm active:scale-[0.98] transition-transform cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-center justify-center size-12 rounded-lg bg-red-500 text-white font-bold shadow-md shadow-red-500/20">
                <span className="text-[10px] leading-none mb-1 opacity-80 uppercase">Gate</span>
                <span className="text-lg leading-none">B12</span>
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold text-sm">UA 241 — <span className="text-red-500">Delayed</span></h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs">JFK to Heathrow (LHR)</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="material-symbols-outlined text-[12px] text-slate-400">schedule</span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">+90m Departure Delay</span>
                </div>
              </div>
            </div>
            <button className="size-8 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-red-500 border border-red-100 dark:border-slate-700">
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>
          </div>
           <div 
             onClick={() => navigate('/recovery')}
             className="flex items-center justify-between gap-4 p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 shadow-sm active:scale-[0.98] transition-transform cursor-pointer"
           >
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-center justify-center size-12 rounded-lg bg-red-500 text-white font-bold shadow-md shadow-red-500/20">
                <span className="text-[10px] leading-none mb-1 opacity-80 uppercase">Gate</span>
                <span className="text-lg leading-none">C04</span>
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold text-sm">DL 108 — <span className="text-red-500">Canceled</span></h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs">JFK to Paris (CDG)</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="material-symbols-outlined text-[12px] text-slate-400">group</span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">210 passengers unassigned</span>
                </div>
              </div>
            </div>
            <button className="size-8 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-red-500 border border-red-100 dark:border-slate-700">
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
      <BottomNav items={navItems} />
    </div>
  );
};

export default AirportDetail;