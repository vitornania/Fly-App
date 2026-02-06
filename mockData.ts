import { Flight, Passenger, LogEntry, KpiMetric } from './types';

export const flights: Flight[] = [
  {
    id: '1',
    flightNumber: 'AA1234',
    destination: 'London',
    destinationCode: 'LHR',
    delay: '03h 45m',
    gate: 'B12',
    passengers: 184,
    status: 'critical',
    imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '2',
    flightNumber: 'UA882',
    destination: 'Tokyo',
    destinationCode: 'HND',
    delay: '04h 12m',
    gate: 'C04',
    passengers: 212,
    status: 'critical',
    imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '3',
    flightNumber: 'DL4410',
    destination: 'Paris',
    destinationCode: 'CDG',
    delay: '01h 10m',
    gate: 'A02',
    passengers: 156,
    status: 'moderate',
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop'
  }
];

export const priorityPassengers: Passenger[] = [
  {
    id: 'p1',
    name: 'Benjamin Sterling',
    seat: '12C',
    tier: 'Executive Platinum',
    frustrationScore: 9.2,
    issue: '3rd consecutive delay this month. Missed wedding anniversary dinner in London.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 'p2',
    name: 'The Miller Family (4)',
    seat: '34A-D',
    tier: 'Silver Status',
    frustrationScore: 6.8,
    issue: 'Traveling with 2 infants. Connection tight for Disney Cruise transfer.',
    avatarUrl: '',
    groupSize: 4,
    isFamily: true
  },
  {
    id: 'p3',
    name: 'Elena Rodriguez',
    seat: '2A',
    tier: 'Concierge Key',
    frustrationScore: 3.1,
    issue: '',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 'p4',
    name: 'Dr. Aris Thorne',
    seat: '4F',
    tier: 'Gold Status',
    frustrationScore: 7.5,
    issue: 'Tight connection to Berlin (BER). < 45 mins.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 'p5',
    name: 'Sarah & Tom',
    seat: '18E-F',
    tier: 'Member',
    frustrationScore: 4.2,
    issue: 'Missed meal service on previous leg.',
    avatarUrl: '',
    groupSize: 2,
    isFamily: true
  }
];

export const resolutionLogs: LogEntry[] = [
  {
    id: 'l1',
    agentName: 'Sarah J.',
    time: '10:45 AM',
    action: 'Issued Meal Vouchers',
    highlightedText: '150 Meal Vouchers',
    highlightColor: 'text-primary',
    flightNumber: 'AC201',
    tag: 'Mechanical',
    icon: 'confirmation_number',
    iconColorClass: 'text-primary',
    iconBgClass: 'bg-blue-100 dark:bg-blue-900/30'
  },
  {
    id: 'l2',
    agentName: 'Mike T.',
    time: '09:12 AM',
    action: 'Granted Lounge Access',
    highlightedText: 'Lounge Access (12 pax)',
    highlightColor: 'text-purple-600',
    flightNumber: 'AC305',
    tag: 'Overbooking',
    icon: 'meeting_room',
    iconColorClass: 'text-purple-600',
    iconBgClass: 'bg-purple-100 dark:bg-purple-900/30'
  },
  {
    id: 'l3',
    agentName: 'Sarah J.',
    time: '08:30 AM',
    action: 'Processed Upgrades',
    highlightedText: '4 Cabin Upgrades',
    highlightColor: 'text-green-600',
    flightNumber: 'AC201',
    tag: '',
    icon: 'upgrade',
    iconColorClass: 'text-green-600',
    iconBgClass: 'bg-green-100 dark:bg-green-900/30'
  },
  {
    id: 'l4',
    agentName: 'System',
    time: '04:00 AM',
    action: 'Automatic Hotel Voucher',
    highlightedText: 'Hotel Voucher',
    highlightColor: 'text-orange-600',
    flightNumber: 'AC112',
    tag: 'Canceled',
    icon: 'hotel',
    iconColorClass: 'text-orange-600',
    iconBgClass: 'bg-orange-100 dark:bg-orange-900/30'
  }
];

export const globalKpis: KpiMetric[] = [
  { label: 'Comp. Issued', value: '$450k', trend: '5.2% vs LW', trendDirection: 'up', trendColor: 'text-emerald-500' },
  { label: 'Avg. Resolution', value: '14.2m', trend: '-2.1m improvement', trendDirection: 'down', trendColor: 'text-rose-500' }
];

export const topAgents = [
    { name: 'Sarah J.', score: 98, img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop' },
    { name: 'Mark R.', score: 95, img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop' },
    { name: 'Elena W.', score: 92, img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop' }
];