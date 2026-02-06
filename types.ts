export interface Flight {
  id: string;
  flightNumber: string;
  destination: string;
  destinationCode: string;
  delay: string;
  gate: string;
  passengers: number;
  status: 'critical' | 'moderate' | 'ontime' | 'canceled' | 'service_alert';
  imageUrl: string;
  sentiment?: string; // e.g., "Low Sentiment: Catering Issue"
  unassignedPassengers?: number;
}

export interface Passenger {
  id: string;
  name: string;
  seat: string;
  tier: string;
  frustrationScore: number;
  issue: string;
  avatarUrl: string;
  groupSize?: number;
  isFamily?: boolean;
}

export interface LogEntry {
  id: string;
  agentName: string;
  time: string;
  action: string;
  highlightedText: string;
  highlightColor: string;
  flightNumber: string;
  tag: string;
  icon: string;
  iconColorClass: string;
  iconBgClass: string;
}

export interface NavItem {
  icon: string;
  label: string;
  path: string;
  active?: boolean;
}

export interface KpiMetric {
  label: string;
  value: string;
  trend: string;
  trendDirection: 'up' | 'down';
  trendColor: string;
}
