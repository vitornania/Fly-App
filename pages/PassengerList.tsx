import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { priorityPassengers } from '../mockData';
import BottomNav from '../components/BottomNav';

type FilterType = 'all' | 'frequent' | 'family' | 'connection';

const PassengerList: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<FilterType>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  const navItems = [
    { icon: 'dashboard', label: 'Home', path: '/' },
    { icon: 'flight_takeoff', label: 'Flights', path: '/airport-detail' },
    { icon: 'groups', label: 'Pax', path: '/passengers', active: true },
    { icon: 'forum', label: 'Handover', path: '/handover' },
    { icon: 'bar_chart', label: 'Stats', path: '/performance' },
  ];

  const filteredPassengers = priorityPassengers.filter(p => {
    // Text Search
    const matchesSearch = 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        p.seat.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tier.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (!matchesSearch) return false;

    // Category Filter
    if (filter === 'all') return true;
    if (filter === 'frequent') return ['Executive Platinum', 'Concierge Key', 'Gold Status'].includes(p.tier);
    if (filter === 'family') return p.isFamily;
    if (filter === 'connection') return p.issue.toLowerCase().includes('connection');
    return true;
  });

  const handleAction = (id: string, action: string) => {
    if (action === 'view') {
        navigate(`/passenger/${id}`);
        return;
    }
    
    // Simulate API call for recovery action
    setActionLoading(id + action);
    setTimeout(() => {
        setActionLoading(null);
        setActionSuccess(id + action);
        // Reset success state after 2 seconds
        setTimeout(() => setActionSuccess(null), 2000);
    }, 1000);
  };

  const FilterButton = ({ type, label }: { type: FilterType, label: string }) => (
    <button 
        onClick={() => setFilter(type)}
        className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
            filter === type 
            ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-105' 
            : 'bg-white dark:bg-surface-dark text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'
        }`}
    >
        {label}
    </button>
  );

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-2xl pb-24 font-display">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 transition-all">
        <div className="flex items-center p-4 justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full p-2 transition-colors -ml-2 text-gray-600 dark:text-gray-300">
              <span className="material-symbols-outlined">arrow_back_ios_new</span>
            </button>
            <div>
              <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight">Priority Passengers</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Flight AA1234 • LHR</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                {filteredPassengers.length}
            </div>
          </div>
        </div>
        <div className="px-4 pb-4 space-y-3">
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl group-focus-within:text-primary transition-colors">search</span>
            <input 
                className="w-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-2xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/50 outline-none text-gray-900 dark:text-white transition-all shadow-sm placeholder:text-gray-400" 
                placeholder="Search name, seat, or tier..." 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 px-1">
            <FilterButton type="all" label="All Priority" />
            <FilterButton type="frequent" label="Frequent Flyers" />
            <FilterButton type="family" label="Families" />
            <FilterButton type="connection" label="Connections" />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="px-4 py-4 space-y-4">
          {filteredPassengers.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 text-center opacity-60">
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full mb-4">
                     <span className="material-symbols-outlined text-gray-400 text-4xl">person_search</span>
                  </div>
                  <h3 className="text-gray-900 dark:text-white font-bold text-lg">No passengers found</h3>
                  <p className="text-gray-500 text-sm mt-1 max-w-[200px]">Try adjusting your filters or search term.</p>
                  <button 
                    onClick={() => {setSearchTerm(''); setFilter('all');}}
                    className="mt-4 text-primary font-bold text-sm hover:underline"
                  >
                    Clear Filters
                  </button>
              </div>
          )}
          {filteredPassengers.map((p) => (
            <div key={p.id} className={`bg-white dark:bg-surface-dark rounded-3xl border ${p.frustrationScore > 8 ? 'border-alert-red/30 shadow-[0_4px_20px_rgba(244,63,94,0.1)]' : 'border-gray-100 dark:border-gray-800 shadow-sm'} overflow-hidden transition-all hover:scale-[1.01] active:scale-[0.99]`}>
              <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-4">
                    <div className="relative">
                        {p.avatarUrl ? (
                            <div className="h-14 w-14 rounded-2xl bg-gray-200 dark:bg-gray-700 overflow-hidden ring-2 ring-white dark:ring-gray-800 shadow-md">
                                <img alt="Passenger" src={p.avatarUrl} className="object-cover h-full w-full" />
                            </div>
                        ) : (
                             <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center ring-2 ring-white dark:ring-gray-800">
                                <span className="material-symbols-outlined text-primary text-2xl">{p.isFamily ? 'family_restroom' : 'person'}</span>
                             </div>
                        )}
                        {p.frustrationScore > 8 && (
                            <div className="absolute -top-1 -right-1 bg-alert-red h-5 w-5 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-900 shadow-sm animate-bounce">
                                <span className="material-symbols-outlined text-white text-[12px] font-bold">priority_high</span>
                            </div>
                        )}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-lg leading-tight">{p.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${['Executive Platinum', 'Concierge Key'].includes(p.tier) ? 'bg-loyalty-gold/10 text-loyalty-gold' : 'bg-gray-100 dark:bg-gray-800 text-gray-500'} uppercase tracking-wide`}>{p.tier}</span>
                        <span className="text-xs font-semibold text-gray-500">Seat {p.seat}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-[10px] font-bold ${p.frustrationScore > 8 ? 'text-alert-red' : p.frustrationScore > 5 ? 'text-urgent-amber' : 'text-gray-400'} uppercase tracking-wide`}>Risk Score</p>
                    <p className={`text-2xl font-black ${p.frustrationScore > 8 ? 'text-alert-red' : p.frustrationScore > 5 ? 'text-urgent-amber' : 'text-gray-400'} leading-none mt-0.5`}>{p.frustrationScore}</p>
                  </div>
                </div>
                {p.issue && (
                  <div className={`${p.frustrationScore > 8 ? 'bg-alert-red/5 dark:bg-alert-red/10 border-alert-red/20' : 'bg-urgent-amber/5 dark:bg-urgent-amber/10 border-urgent-amber/20'} border rounded-xl p-3 mb-5`}>
                    <p className={`text-xs ${p.frustrationScore > 8 ? 'text-alert-red' : 'text-urgent-amber'} font-semibold leading-relaxed flex gap-2`}>
                      <span className="material-symbols-outlined text-sm shrink-0">info</span>
                      <span>{p.issue}</span>
                    </p>
                  </div>
                )}
                <div className={`grid ${p.frustrationScore < 5 ? 'grid-cols-1' : 'grid-cols-2'} gap-3`}>
                  {p.frustrationScore > 5 && (
                      <button 
                        onClick={() => handleAction(p.id, 'comp')}
                        className={`flex items-center justify-center gap-2 py-3 rounded-xl border font-bold text-xs transition-all active:scale-95 ${
                            actionSuccess === p.id + 'comp'
                            ? 'bg-success-green border-success-green text-white'
                            : 'bg-white dark:bg-surface-dark border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
                        }`}
                      >
                         {actionLoading === p.id + 'comp' ? (
                            <span className="material-symbols-outlined animate-spin text-lg">progress_activity</span>
                        ) : actionSuccess === p.id + 'comp' ? (
                            <>
                                <span className="material-symbols-outlined text-lg">check_circle</span>
                                Offers Sent
                            </>
                        ) : (
                            <>
                                <span className="material-symbols-outlined text-lg">{p.isFamily ? 'restaurant' : 'chat_bubble'}</span>
                                {p.isFamily ? 'Issue Vouchers' : 'Apologize'}
                            </>
                        )}
                      </button>
                  )}
                  <button 
                    onClick={() => handleAction(p.id, 'view')}
                    className={`flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold transition-all active:scale-95 shadow-lg shadow-primary/20 hover:shadow-primary/30 ${
                        p.frustrationScore < 5 
                        ? 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 shadow-none' 
                        : 'bg-primary text-white hover:bg-primary/90'
                    }`}
                  >
                    <span className="material-symbols-outlined text-lg">{p.frustrationScore < 5 ? 'visibility' : (p.isFamily ? 'luggage' : 'upgrade')}</span>
                    {p.frustrationScore < 5 ? 'View Profile' : (p.isFamily ? 'Rebook Options' : 'Comp Upgrade')}
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="h-10"></div>
        </div>
      </main>
      <BottomNav items={navItems} />
    </div>
  );
};

export default PassengerList;