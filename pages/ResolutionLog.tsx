import React from 'react';
import { useNavigate } from 'react-router-dom';
import { resolutionLogs } from '../mockData';
import BottomNav from '../components/BottomNav';

const ResolutionLog: React.FC = () => {
  const navigate = useNavigate();

  const navItems = [
    { icon: 'dashboard', label: 'Home', path: '/', active: true },
    { icon: 'flight_takeoff', label: 'Flights', path: '/airport-detail' },
    { icon: 'groups', label: 'Pax', path: '/passengers' },
    { icon: 'forum', label: 'Handover', path: '/handover' },
    { icon: 'bar_chart', label: 'Stats', path: '/performance' },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-white dark:bg-background-dark">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center p-4 justify-between">
          <button 
            onClick={() => navigate(-1)} 
            className="text-primary flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Resolution Log</h2>
          <div className="flex w-10 items-center justify-end">
            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-transparent text-[#111418] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
              <span className="material-symbols-outlined">ios_share</span>
            </button>
          </div>
        </div>
        {/* Search Bar */}
        <div className="px-4 pb-3">
          <label className="flex flex-col w-full">
            <div className="flex w-full items-stretch rounded-xl h-11 bg-gray-100 dark:bg-gray-800 border border-transparent focus-within:border-primary/50 transition-all group">
              <div className="text-[#617589] flex items-center justify-center pl-4 group-focus-within:text-primary transition-colors">
                <span className="material-symbols-outlined text-xl">search</span>
              </div>
              <input className="form-input flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 text-base placeholder:text-[#617589] dark:text-white pl-2" placeholder="Search by flight or agent" />
            </div>
          </label>
        </div>
        {/* Horizontal Filters */}
        <div className="flex gap-2 px-4 pb-4 overflow-x-auto no-scrollbar">
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-4 text-sm font-semibold shadow-sm">
            <span>All Actions</span>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 text-[#111418] dark:text-white px-4 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <span>Vouchers</span>
            <span className="material-symbols-outlined text-lg">keyboard_arrow_down</span>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 text-[#111418] dark:text-white px-4 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <span>Upgrades</span>
            <span className="material-symbols-outlined text-lg">keyboard_arrow_down</span>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 text-[#111418] dark:text-white px-4 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <span>Lounge</span>
            <span className="material-symbols-outlined text-lg">keyboard_arrow_down</span>
          </button>
        </div>
      </header>
      <main className="flex-1 pb-24">
        {/* Summary Stats */}
        <div className="flex flex-wrap gap-4 p-4">
          <div className="flex min-w-[140px] flex-1 flex-col gap-1 rounded-xl p-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm">
            <p className="text-[#617589] text-xs font-semibold uppercase tracking-wider">Total Actions</p>
            <p className="text-primary tracking-tight text-2xl font-bold">1,240</p>
          </div>
          <div className="flex min-w-[140px] flex-1 flex-col gap-1 rounded-xl p-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm">
            <p className="text-[#617589] text-xs font-semibold uppercase tracking-wider">Active Flights</p>
            <p className="text-[#111418] dark:text-white tracking-tight text-2xl font-bold">12</p>
          </div>
        </div>
        <div className="flex items-center justify-between px-4 pt-4 pb-2">
          <h3 className="text-[#111418] dark:text-white text-lg font-bold leading-tight">Today's Activity</h3>
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">Real-time</span>
        </div>
        {/* Feed Timeline */}
        <div className="flex flex-col px-4 relative">
          {/* Vertical Line Connector */}
          <div className="absolute left-[31px] top-8 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800"></div>
          {resolutionLogs.map((log) => (
            <div key={log.id} className="relative flex gap-4 pb-8 group last:pb-0">
              <div className={`relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full ${log.iconBgClass} ${log.iconColorClass} border-4 border-background-light dark:border-background-dark`}>
                <span className="material-symbols-outlined text-xl">{log.icon}</span>
              </div>
              <div className="flex flex-col flex-1 bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-sm font-bold text-[#111418] dark:text-white">{log.agentName}</span>
                  <span className="text-xs text-[#617589]">{log.time}</span>
                </div>
                <p className="text-sm text-[#111418] dark:text-gray-300 mb-3">
                  {log.action.split(' ').slice(0, 1).join(' ')} <span className={`font-bold ${log.highlightColor}`}>{log.highlightedText}</span> {log.action.split(' ').slice(1).join(' ').replace(log.highlightedText, '')}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <div className="flex items-center gap-1 rounded-md bg-gray-100 dark:bg-gray-800 px-2 py-1">
                    <span className="material-symbols-outlined text-xs">flight_takeoff</span>
                    <span className="text-[11px] font-bold text-gray-700 dark:text-gray-300">{log.flightNumber}</span>
                  </div>
                  {log.tag && (
                    <div className="flex items-center gap-1 rounded-md bg-gray-100 dark:bg-gray-800 px-2 py-1">
                      <span className="material-symbols-outlined text-xs">info</span>
                      <span className="text-[11px] font-medium text-gray-700 dark:text-gray-300">{log.tag}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <BottomNav items={navItems} />
    </div>
  );
};

export default ResolutionLog;