import React from 'react';
import { useNavigate } from 'react-router-dom';
import { flights } from '../mockData';
import BottomNav from '../components/BottomNav';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const navItems = [
    { icon: 'dashboard', label: 'Home', path: '/', active: true },
    { icon: 'flight_takeoff', label: 'Flights', path: '/airport-detail' },
    { icon: 'groups', label: 'Pax', path: '/passengers' },
    { icon: 'forum', label: 'Handover', path: '/handover' },
    { icon: 'bar_chart', label: 'Stats', path: '/performance' },
  ];

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden max-w-md mx-auto bg-white dark:bg-[#101922] shadow-2xl pb-24">
      {/* Top App Bar */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center p-4 justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-alert-red text-white p-2 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">flight_takeoff</span>
            </div>
            <div>
              <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-tight">Gate Agent Portal</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Last updated: 14:32:05</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <span className="material-symbols-outlined text-[#111418] dark:text-white">filter_list</span>
            </button>
            <button onClick={() => navigate('/handover')} className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <span className="material-symbols-outlined text-[#111418] dark:text-white">notifications</span>
            </button>
          </div>
        </div>
        {/* Summary Bar */}
        <div className="flex gap-3 px-4 pb-4 overflow-x-auto no-scrollbar">
          <div onClick={() => navigate('/global-analytics')} className="flex cursor-pointer flex-col min-w-[100px] flex-1 gap-1 rounded-xl p-3 bg-alert-red/10 border border-alert-red/20">
            <p className="text-alert-red text-[10px] font-bold uppercase tracking-wider">Critical</p>
            <p className="text-alert-red text-2xl font-bold leading-none">3</p>
          </div>
          <div onClick={() => navigate('/performance')} className="flex cursor-pointer flex-col min-w-[100px] flex-1 gap-1 rounded-xl p-3 bg-primary/10 border border-primary/20">
            <p className="text-primary text-[10px] font-bold uppercase tracking-wider">On Time</p>
            <p className="text-primary text-2xl font-bold leading-none">12</p>
          </div>
          <div className="flex flex-col min-w-[100px] flex-1 gap-1 rounded-xl p-3 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400 text-[10px] font-bold uppercase tracking-wider">Total</p>
            <p className="text-gray-800 dark:text-gray-200 text-2xl font-bold leading-none">15</p>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="px-4 pt-6 pb-2">
          <h3 className="text-[#111418] dark:text-white text-base font-bold uppercase tracking-wide">High Priority Recovery</h3>
        </div>
        {/* Red Alert Flight Cards */}
        {flights.filter(f => f.status === 'critical').map((flight) => (
          <div key={flight.id} className="p-4 pt-0 mb-4">
            <div className="flex flex-col gap-4 rounded-xl bg-white dark:bg-gray-900 border-2 border-alert-red shadow-lg overflow-hidden relative">
              <div className="absolute top-0 right-0 bg-alert-red text-white px-3 py-1 rounded-bl-lg font-bold text-[10px] tracking-widest uppercase">
                CRITICAL DELAY
              </div>
              <div className="p-4 pb-0 flex items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl font-black text-gray-900 dark:text-white tabular-nums">{flight.flightNumber}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600 dark:text-gray-300 font-semibold uppercase">{flight.destination} ({flight.destinationCode})</span>
                  </div>
                  <div className="flex flex-wrap gap-y-2 gap-x-4">
                    <div className="flex items-center gap-1.5 text-alert-red font-bold">
                      <span className="material-symbols-outlined text-[18px]">schedule</span>
                      <span className="text-sm">Delay: {flight.delay}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 font-medium">
                      <span className="material-symbols-outlined text-[18px]">door_open</span>
                      <span className="text-sm">Gate {flight.gate}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 font-medium">
                      <span className="material-symbols-outlined text-[18px]">group</span>
                      <span className="text-sm">{flight.passengers} Pax</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4">
                <div
                  className="h-[120px] w-full rounded-lg bg-cover bg-center border border-gray-100 dark:border-gray-800"
                  style={{ backgroundImage: `url("${flight.imageUrl}")` }}
                ></div>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50">
                <button
                  onClick={() => navigate('/recovery')}
                  className="w-full flex cursor-pointer items-center justify-center rounded-lg h-12 bg-alert-red hover:bg-alert-red/90 text-white gap-2 text-base font-bold transition-all shadow-sm active:scale-[0.98]"
                >
                  <span className="material-symbols-outlined">health_and_safety</span>
                  <span>Manage Recovery</span>
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Normal Delayed Flight */}
        <div className="px-4 pt-2">
          <h3 className="text-[#111418] dark:text-white text-base font-bold uppercase tracking-wide">Moderate Delays</h3>
        </div>
        {flights.filter(f => f.status === 'moderate').map((flight) => (
          <div key={flight.id} className="p-4">
            <div className="flex flex-col gap-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden relative">
              <div className="p-4 flex items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">{flight.flightNumber}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600 dark:text-gray-300 font-medium uppercase">{flight.destination} ({flight.destinationCode})</span>
                  </div>
                  <div className="flex flex-wrap gap-y-2 gap-x-4">
                    <div className="flex items-center gap-1.5 text-primary font-bold">
                      <span className="material-symbols-outlined text-[18px]">schedule</span>
                      <span className="text-sm">Delay: {flight.delay}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 font-medium">
                      <span className="material-symbols-outlined text-[18px]">door_open</span>
                      <span className="text-sm">Gate {flight.gate}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 font-medium">
                      <span className="material-symbols-outlined text-[18px]">group</span>
                      <span className="text-sm">{flight.passengers} Pax</span>
                    </div>
                  </div>
                </div>
                <button className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg text-gray-500">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="h-20"></div>
      </main>
      <BottomNav items={navItems} />
    </div>
  );
};

export default Dashboard;