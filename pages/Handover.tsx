import React, { useState } from 'react';
import BottomNav from '../components/BottomNav';

const Handover: React.FC = () => {
    const [note, setNote] = useState('');
    const [isSending, setIsSending] = useState(false);

    const navItems = [
      { icon: 'dashboard', label: 'Home', path: '/' },
      { icon: 'flight_takeoff', label: 'Flights', path: '/airport-detail' },
      { icon: 'groups', label: 'Pax', path: '/passengers' },
      { icon: 'forum', label: 'Handover', path: '/handover', active: true },
      { icon: 'bar_chart', label: 'Stats', path: '/performance' },
    ];

    const handleSend = () => {
      if (!note.trim()) return;
      setIsSending(true);
      setTimeout(() => {
        setNote('');
        setIsSending(false);
      }, 600);
    };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden max-w-md mx-auto bg-white dark:bg-[#101922] shadow-2xl pb-24">
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center p-4 justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary text-white p-2 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">assignment_turned_in</span>
            </div>
            <div>
              <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-tight">Team Handover</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Shift: AM &rarr; PM Transition</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <span className="material-symbols-outlined text-[#111418] dark:text-white">history</span>
            </button>
            <button className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <span className="material-symbols-outlined text-[#111418] dark:text-white">search</span>
            </button>
          </div>
        </div>
        <div className="px-4 pb-3">
          <div className="bg-urgent-amber/10 border border-urgent-amber/30 rounded-xl p-3 flex items-start gap-3">
            <div className="bg-urgent-amber rounded-full p-1 text-white">
              <span className="material-symbols-outlined text-[16px] block">campaign</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-0.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-urgent-amber">Ops Update</span>
                <span className="text-[10px] text-gray-500 font-medium">08:45 AM</span>
              </div>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-snug">
                Severe weather warning for ORD. Ground stop possible after 16:00. Watch connections.
              </p>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="p-4 grid grid-cols-2 gap-3">
          <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-xl border border-gray-200 dark:border-gray-800">
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Station Status</p>
            <div className="flex items-center gap-2 mt-1">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm font-bold text-gray-900 dark:text-white">Normal Flow</span>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-xl border border-gray-200 dark:border-gray-800">
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Team On-Site</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm font-bold text-gray-900 dark:text-white">12 Agents</span>
              <div className="flex -space-x-2">
                <div className="h-5 w-5 rounded-full border border-white dark:border-gray-900 bg-blue-400"></div>
                <div className="h-5 w-5 rounded-full border border-white dark:border-gray-900 bg-red-400"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 pt-2 pb-2 flex justify-between items-center">
          <h3 className="text-[#111418] dark:text-white text-base font-bold uppercase tracking-wide">Gate Notes</h3>
          <button className="text-primary text-sm font-bold flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">add</span>
            New Note
          </button>
        </div>
        <div className="p-4 pt-2">
          <div className="flex flex-col gap-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm p-4">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">SR</div>
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Sarah Reynolds</p>
                  <p className="text-[10px] text-gray-500 font-medium">Gate B12 • 14:12</p>
                </div>
              </div>
              <span className="bg-alert-red/10 text-alert-red px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Urgent</span>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Flight <span className="font-bold text-gray-900 dark:text-white">AA123</span> passengers are particularly frustrated due to gate change. Extra supervision recommended during boarding.
            </p>
            <div className="flex items-center gap-4 border-t border-gray-100 dark:border-gray-800 pt-3">
              <button className="flex items-center gap-1.5 text-gray-500 text-xs font-semibold hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[18px]">reply</span>
                Acknowledge
              </button>
              <button className="flex items-center gap-1.5 text-gray-500 text-xs font-semibold hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[18px]">share</span>
                Forward
              </button>
            </div>
          </div>
        </div>
        <div className="p-4 pt-0">
          <div className="flex flex-col gap-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm p-4">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 font-bold text-xs">ML</div>
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Marcus Lee</p>
                  <p className="text-[10px] text-gray-500 font-medium">Service Desk • 14:02</p>
                </div>
              </div>
              <span className="bg-green-100 dark:bg-green-900/30 text-green-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Resolved</span>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Issue with Wi-Fi codes resolved at 14:00. New batch of vouchers printed and available at Terminal 2 kiosk.
            </p>
            <div className="flex items-center gap-4 border-t border-gray-100 dark:border-gray-800 pt-3">
              <button className="flex items-center gap-1.5 text-primary text-xs font-bold">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                Read by 4 agents
              </button>
            </div>
          </div>
        </div>
        <div className="px-4 pt-2">
          <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 p-2 rounded-2xl border border-gray-200 dark:border-gray-700 transition-all focus-within:ring-2 ring-primary/50">
            <button className="h-10 w-10 flex items-center justify-center text-gray-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">attach_file</span>
            </button>
            <input 
              className="bg-transparent border-none focus:ring-0 flex-1 text-sm text-gray-900 dark:text-white placeholder:text-gray-500" 
              placeholder="Type a note for the next shift..." 
              type="text" 
              value={note}
              onChange={(e) => setNote(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={handleSend}
              disabled={!note.trim() || isSending}
              className={`h-10 w-10 rounded-xl flex items-center justify-center transition-all ${note.trim() && !isSending ? 'bg-primary text-white shadow-md active:scale-90' : 'bg-gray-200 dark:bg-gray-700 text-gray-400'}`}
            >
              <span className="material-symbols-outlined">{isSending ? 'hourglass_empty' : 'send'}</span>
            </button>
          </div>
        </div>
      </main>
      <BottomNav items={navItems} />
    </div>
  );
};

export default Handover;