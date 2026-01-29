"use client";

import {
  TrendingUp,
  Users,
  Star,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Target
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';

const data = [
  { name: 'Mon', retention: 85, engagement: 92 },
  { name: 'Tue', retention: 88, engagement: 90 },
  { name: 'Wed', retention: 87, engagement: 95 },
  { name: 'Thu', retention: 89, engagement: 88 },
  { name: 'Fri', retention: 92, engagement: 94 },
  { name: 'Sat', retention: 94, engagement: 97 },
  { name: 'Sun', retention: 91, engagement: 93 },
];

const sentimentData = [
  { name: 'Onboarding', value: 85, color: '#f4bf00' },
  { name: 'Payment', value: 92, color: '#121212' },
  { name: 'Dispatch', value: 78, color: '#f4bf00' },
  { name: 'Job Site', value: 65, color: '#121212' },
  { name: 'Support', value: 88, color: '#f4bf00' },
];

const kpis = [
  {
    label: 'Driver NPS',
    value: '72',
    change: '+12%',
    trend: 'up',
    icon: Star,
    description: 'Satisfied (Industry Avg: 45)'
  },
  {
    label: 'Weekly Retention',
    value: '94.2%',
    change: '+2.4%',
    trend: 'up',
    icon: Users,
    description: 'Active fleet growth'
  },
  {
    label: 'Avg. Load Acceptance',
    value: '88%',
    change: '-1.5%',
    trend: 'down',
    icon: Zap,
    description: 'High traffic impact'
  },
  {
    label: 'Time to App Store',
    value: '14m',
    change: '-3m',
    trend: 'up',
    icon: Clock,
    description: 'Faster turnaround'
  },
];

const experiments = [
  {
    name: 'Instant Pay Pilot (TX)',
    status: 'In Progress',
    metric: 'Retention',
    gain: '+8%',
    color: 'text-green-600'
  },
  {
    name: 'Construction Site Waiting Relief',
    status: 'Analyzing',
    metric: 'Satisfaction',
    gain: '+15%',
    color: 'text-[#f4bf00]'
  },
  {
    name: 'Regional Driver Roundtables',
    status: 'Scheduled',
    metric: 'Engagement',
    gain: 'TBD',
    color: 'text-gray-400'
  },
];

export default function Home() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-extrabold text-secondary tracking-tight">Fleet Overview</h1>
          <p className="text-gray-500 mt-1">Real-time driver engagement and operational health monitoring.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            Export Report
          </button>
          <button className="px-4 py-2 bg-primary text-secondary rounded-lg text-sm font-bold hover:opacity-90 transition-opacity flex items-center gap-2">
            <Target size={16} />
            Set New Pilot
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, i) => (
          <div key={i} className="curri-card curri-card-hover">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <kpi.icon className="text-secondary" size={20} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-bold ${kpi.trend === 'up' ? 'text-green-600' : 'text-red-500'}`}>
                {kpi.trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {kpi.change}
              </div>
            </div>
            <div className="kpi-value">{kpi.value}</div>
            <div className="kpi-label mt-1">{kpi.label}</div>
            <p className="text-[10px] text-gray-400 mt-2">{kpi.description}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 curri-card bg-white p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg text-secondary">Engagement Trends</h3>
            <div className="flex gap-4 text-xs font-medium text-gray-400">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary"></span> Retention</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-secondary"></span> Engagement</span>
            </div>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRet" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f4bf00" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#f4bf00" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f1f1" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#999' }} />
                <YAxis hide />
                <Tooltip
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="retention" stroke="#f4bf00" strokeWidth={3} fillOpacity={1} fill="url(#colorRet)" />
                <Area type="monotone" dataKey="engagement" stroke="#121212" strokeWidth={3} fillOpacity={0} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="curri-card">
          <h3 className="font-bold text-lg text-secondary mb-6">Sentiment by Flow</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sentimentData} layout="vertical">
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#666' }} width={100} />
                <Tooltip />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                  {sentimentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} fillOpacity={0.8} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom Insights and Pilots */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="curri-card">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="text-[#f4bf00]" size={20} />
            <h3 className="font-bold text-lg text-secondary">Strategic Insights</h3>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-primary/5 border-l-4 border-primary rounded-r-lg">
              <p className="text-sm font-semibold text-secondary">Attention Required: Job Site Sentiment</p>
              <p className="text-xs text-gray-500 mt-1">Feedback shows 45% of negative sentiment is tied to unrecorded wait times at construction sites. Recommendation: Pilot automated geofence wait-time tracking.</p>
            </div>
            <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
              <p className="text-sm font-semibold text-secondary">Retention Driver: Instant Pay</p>
              <p className="text-xs text-gray-500 mt-1">Texas pilot group shows 8% Day-30 retention lift compared to control. Preparing to scale to CA/NV markets in Q3.</p>
            </div>
          </div>
        </div>

        <div className="curri-card">
          <h3 className="font-bold text-lg text-secondary mb-4">Active Pilots (0 → 1)</h3>
          <div className="space-y-4">
            {experiments.map((exp, i) => (
              <div key={i} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div>
                  <p className="text-sm font-bold text-secondary">{exp.name}</p>
                  <p className="text-[10px] text-gray-400">{exp.status} • Goal: {exp.metric}</p>
                </div>
                <div className={`text-sm font-extrabold ${exp.gain.startsWith('+') ? 'text-green-600' : 'text-gray-400'}`}>
                  {exp.gain}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
