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
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden max-w-md mx-auto bg-white dark:bg-background-dark shadow-2xl pb-24 font-display">
      {/* Top App Bar */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-all">
        <div className="flex items-center p-4 justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary text-white p-2.5 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">flight_takeoff</span>
            </div>
            <div>
              <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight">Gate Agent Portal</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium flex items-center gap-1">
                 <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                 System Online
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button 
                onClick={() => navigate('/rules')}
                className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-white"
            >
              <span className="material-symbols-outlined">tune</span>
            </button>
            <button 
                onClick={() => navigate('/handover')} 
                className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-white relative"
            >
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-alert-red rounded-full border-2 border-white dark:border-background-dark"></span>
            </button>
          </div>
        </div>
        {/* Summary Bar */}
        <div className="flex gap-3 px-4 pb-4 overflow-x-auto no-scrollbar">
          <div onClick={() => navigate('/recovery')} className="flex cursor-pointer flex-col min-w-[100px] flex-1 gap-1 rounded-2xl p-3 bg-alert-red/5 border border-alert-red/20 active:scale-95 transition-transform">
            <p className="text-alert-red text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">warning</span> Critical
            </p>
            <p className="text-alert-red text-2xl font-bold leading-none">3</p>
          </div>
          <div onClick={() => navigate('/performance')} className="flex cursor-pointer flex-col min-w-[100px] flex-1 gap-1 rounded-2xl p-3 bg-primary/5 border border-primary/20 active:scale-95 transition-transform">
            <p className="text-primary text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                 <span className="material-symbols-outlined text-[14px]">check_circle</span> On Time
            </p>
            <p className="text-primary text-2xl font-bold leading-none">12</p>
          </div>
          <div className="flex flex-col min-w-[100px] flex-1 gap-1 rounded-2xl p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400 text-[10px] font-bold uppercase tracking-wider">Total</p>
            <p className="text-gray-800 dark:text-gray-200 text-2xl font-bold leading-none">15</p>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="px-4 pt-6 pb-3">
          <h3 className="text-gray-900 dark:text-white text-sm font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="w-1 h-4 bg-alert-red rounded-full"></span>
            High Priority Recovery
          </h3>
        </div>
        {/* Red Alert Flight Cards */}
        {flights.filter(f => f.status === 'critical').map((flight) => (
          <div key={flight.id} className="px-4 mb-6">
            <div className="flex flex-col gap-0 rounded-3xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden relative group">
              <div className="absolute top-0 right-0 bg-alert-red text-white px-4 py-1.5 rounded-bl-2xl font-bold text-[10px] tracking-widest uppercase shadow-md z-10">
                Critical Delay
              </div>
              <div className="p-5 flex items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl font-black text-gray-900 dark:text-white tabular-nums tracking-tighter">{flight.flightNumber}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                     <span className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-bold uppercase tracking-wide">JFK</span>
                     <span className="material-symbols-outlined text-gray-400 text-sm">arrow_forward</span>
                     <span className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-bold uppercase tracking-wide">{flight.destinationCode}</span>
                  </div>
                  <div className="flex flex-wrap gap-y-2 gap-x-4">
                    <div className="flex items-center gap-1.5 text-alert-red font-bold bg-alert-red/5 px-2 py-1 rounded-lg">
                      <span className="material-symbols-outlined text-[18px]">schedule</span>
                      <span className="text-sm">+{flight.delay}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 font-medium px-2 py-1">
                      <span className="material-symbols-outlined text-[18px]">door_open</span>
                      <span className="text-sm">Gate {flight.gate}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Image Section */}
              <div className="px-5 pb-5">
                <div
                  className="h-[140px] w-full rounded-2xl bg-cover bg-center border border-gray-100 dark:border-gray-800 relative overflow-hidden group-hover:shadow-lg transition-all"
                  style={{ backgroundImage: `url("${flight.imageUrl}")` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                        <p className="text-white font-bold text-lg flex items-center gap-2">
                            <span className="material-symbols-outlined">location_on</span>
                            {flight.destination}
                        </p>
                    </div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-800/50">
                <button
                  onClick={() => navigate('/recovery')}
                  className="w-full flex cursor-pointer items-center justify-center rounded-2xl h-14 bg-alert-red hover:bg-alert-red/90 text-white gap-2 text-base font-bold transition-all shadow-lg shadow-alert-red/20 active:scale-[0.98]"
                >
                  <span className="material-symbols-outlined">health_and_safety</span>
                  <span>Manage Recovery</span>
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Moderate Delayed Flight */}
        <div className="px-4 pt-2 pb-3">
          <h3 className="text-gray-900 dark:text-white text-sm font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="w-1 h-4 bg-urgent-amber rounded-full"></span>
            Moderate Delays
          </h3>
        </div>
        {flights.filter(f => f.status === 'moderate').map((flight) => (
          <div key={flight.id} className="px-4 mb-4">
            <div 
                onClick={() => navigate('/recovery')}
                className="flex flex-col gap-4 rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden relative active:scale-[0.99] transition-transform cursor-pointer hover:border-primary/30"
            >
              <div className="p-5 flex items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">{flight.flightNumber}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600 dark:text-gray-300 font-bold uppercase text-sm">{flight.destination}</span>
                  </div>
                  <div className="flex flex-wrap gap-y-2 gap-x-4 mt-3">
                    <div className="flex items-center gap-1.5 text-urgent-amber font-bold bg-urgent-amber/10 px-2 py-1 rounded-lg">
                      <span className="material-symbols-outlined text-[16px]">schedule</span>
                      <span className="text-xs">+{flight.delay}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 font-medium px-2 py-1">
                      <span className="material-symbols-outlined text-[16px]">door_open</span>
                      <span className="text-xs">Gate {flight.gate}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 font-medium px-2 py-1">
                      <span className="material-symbols-outlined text-[16px]">group</span>
                      <span className="text-xs">{flight.passengers} Pax</span>
                    </div>
                  </div>
                </div>
                <div className="h-10 w-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-400">
                  <span className="material-symbols-outlined">chevron_right</span>
                </div>
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