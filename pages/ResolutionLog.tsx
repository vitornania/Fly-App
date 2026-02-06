import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { resolutionLogs } from '../mockData';
import BottomNav from '../components/BottomNav';

const ResolutionLog: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const navItems = [
    { icon: 'dashboard', label: 'Home', path: '/', active: true },
    { icon: 'flight_takeoff', label: 'Flights', path: '/airport-detail' },
    { icon: 'groups', label: 'Pax', path: '/passengers' },
    { icon: 'forum', label: 'Handover', path: '/handover' },
    { icon: 'bar_chart', label: 'Stats', path: '/performance' },
  ];

  const filteredLogs = resolutionLogs.filter(log => 
      log.agentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.flightNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.action.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-background-light dark:bg-background-dark font-display">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="flex items-center p-4 justify-between">
          <button 
            onClick={() => navigate(-1)} 
            className="text-primary flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </button>
          <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Resolution Log</h2>
          <div className="flex w-10 items-center justify-end">
            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-transparent text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
              <span className="material-symbols-outlined">ios_share</span>
            </button>
          </div>
        </div>
        {/* Search Bar */}
        <div className="px-4 pb-3">
          <div className="flex w-full items-center rounded-2xl h-12 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 focus-within:ring-2 ring-primary/50 transition-all group shadow-sm">
              <div className="text-gray-400 flex items-center justify-center pl-4 group-focus-within:text-primary transition-colors">
                <span className="material-symbols-outlined text-xl">search</span>
              </div>
              <input 
                className="flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 text-sm placeholder:text-gray-400 text-gray-900 dark:text-white pl-2 h-full" 
                placeholder="Search by flight, agent, or action..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
          </div>
        </div>
        {/* Horizontal Filters */}
        <div className="flex gap-2 px-4 pb-4 overflow-x-auto no-scrollbar">
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-4 text-xs font-bold shadow-md shadow-primary/25">
            <span>All Actions</span>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-surface-dark text-gray-600 dark:text-gray-300 px-4 text-xs font-bold border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <span>Vouchers</span>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-surface-dark text-gray-600 dark:text-gray-300 px-4 text-xs font-bold border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <span>Upgrades</span>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-surface-dark text-gray-600 dark:text-gray-300 px-4 text-xs font-bold border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <span>Lounge</span>
          </button>
        </div>
      </header>
      <main className="flex-1 pb-24">
        {/* Summary Stats */}
        <div className="flex flex-wrap gap-3 p-4">
          <div className="flex min-w-[140px] flex-1 flex-col gap-1 rounded-2xl p-4 bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm">
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">Total Actions</p>
            <p className="text-primary tracking-tight text-2xl font-black">1,240</p>
          </div>
          <div className="flex min-w-[140px] flex-1 flex-col gap-1 rounded-2xl p-4 bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm">
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">Active Flights</p>
            <p className="text-gray-900 dark:text-white tracking-tight text-2xl font-black">12</p>
          </div>
        </div>
        <div className="flex items-center justify-between px-4 pt-2 pb-2">
          <h3 className="text-gray-900 dark:text-white text-base font-bold leading-tight">Activity Feed</h3>
          <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded-md uppercase tracking-wide">Real-time</span>
        </div>
        {/* Feed Timeline */}
        <div className="flex flex-col px-4 relative">
          {/* Vertical Line Connector */}
          <div className="absolute left-[31px] top-4 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 border-l border-dashed border-gray-300 dark:border-gray-700"></div>
          
          {filteredLogs.length === 0 && (
             <div className="py-8 text-center ml-8">
                 <p className="text-sm text-gray-500">No logs match your search.</p>
             </div>
          )}

          {filteredLogs.map((log) => (
            <div key={log.id} className="relative flex gap-4 pb-6 group last:pb-0 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className={`relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full ${log.iconBgClass} ${log.iconColorClass} border-4 border-background-light dark:border-background-dark shadow-sm`}>
                <span className="material-symbols-outlined text-lg">{log.icon}</span>
              </div>
              <div className="flex flex-col flex-1 bg-white dark:bg-surface-dark p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-[10px] font-bold text-gray-600 dark:text-gray-300">
                        {log.agentName.split(' ').map(n=>n[0]).join('')}
                      </div>
                      <span className="text-sm font-bold text-gray-900 dark:text-white">{log.agentName}</span>
                  </div>
                  <span className="text-[10px] font-medium text-gray-400 bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">{log.time}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                  {log.action.replace(log.highlightedText, '')} <span className={`font-bold ${log.highlightColor}`}>{log.highlightedText}</span>
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <div className="flex items-center gap-1 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 px-2 py-1">
                    <span className="material-symbols-outlined text-[14px] text-gray-400">flight</span>
                    <span className="text-[10px] font-bold text-gray-700 dark:text-gray-300">{log.flightNumber}</span>
                  </div>
                  {log.tag && (
                    <div className="flex items-center gap-1 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 px-2 py-1">
                      <span className="material-symbols-outlined text-[14px] text-gray-400">label</span>
                      <span className="text-[10px] font-bold text-gray-700 dark:text-gray-300">{log.tag}</span>
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