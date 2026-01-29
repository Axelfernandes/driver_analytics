"use client";

import {
    Users,
    UserPlus,
    UserMinus,
    Activity,
    AlertTriangle,
    ChevronRight,
    Download
} from 'lucide-react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell,
    ComposedChart,
    Area
} from 'recharts';

const retentionData = [
    { week: 'W1', retention: 100, engagement: 95 },
    { week: 'W2', retention: 92, engagement: 88 },
    { week: 'W3', retention: 85, engagement: 82 },
    { week: 'W4', retention: 80, engagement: 78 },
    { week: 'W5', retention: 76, engagement: 75 },
    { week: 'W6', retention: 74, engagement: 72 },
    { week: 'W7', retention: 73, engagement: 70 },
    { week: 'W8', retention: 72, engagement: 68 },
];

const riskSegments = [
    { name: 'Healthy', value: 65, color: '#10b981' },
    { name: 'At Risk', value: 20, color: '#f4bf00' },
    { name: 'Critical', value: 15, color: '#ef4444' },
];

const cohorts = [
    { month: 'Oct 2025', size: 120, r1: '92%', r3: '78%', r6: '65%' },
    { month: 'Nov 2025', size: 154, r1: '94%', r3: '82%', r6: '68%' },
    { month: 'Dec 2025', size: 188, r1: '95%', r3: '85%', r6: '-' },
    { month: 'Jan 2026', size: 210, r1: '97%', r3: '-', r6: '-' },
];

export default function EngagementPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-extrabold text-secondary tracking-tight">Engagement & Retention</h1>
                    <p className="text-gray-500 mt-1">Deep-dive cohort analysis and behavioral churn modeling.</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg text-sm font-bold hover:bg-secondary/90 transition-all">
                    <Download size={16} />
                    Download CSV
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="curri-card">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                            <UserPlus size={20} />
                        </div>
                        <span className="kpi-label uppercase">Activation Rate</span>
                    </div>
                    <div className="text-3xl font-bold text-secondary">88.4%</div>
                    <p className="text-[10px] text-gray-400 mt-2">Sign-up to first load completion (Avg: 85%)</p>
                </div>
                <div className="curri-card">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                            <Activity size={20} />
                        </div>
                        <span className="kpi-label uppercase">Weekly Active (WAU)</span>
                    </div>
                    <div className="text-3xl font-bold text-secondary">4,281</div>
                    <p className="text-[10px] text-gray-400 mt-2">+12% growth in last 30 days</p>
                </div>
                <div className="curri-card">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-red-100 text-red-600 rounded-lg">
                            <UserMinus size={20} />
                        </div>
                        <span className="kpi-label uppercase">Monthly Churn</span>
                    </div>
                    <div className="text-3xl font-bold text-secondary">4.2%</div>
                    <p className="text-[10px] text-gray-400 mt-2">-0.8% decrease since Dec &apos;25</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 curri-card bg-white p-6">
                    <h3 className="font-bold text-lg text-secondary mb-6">Retention Funnel (Day 1 - Day 60)</h3>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <ComposedChart data={retentionData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f1f1" />
                                <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#999' }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#999' }} unit="%" />
                                <Tooltip
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                />
                                <Area type="monotone" dataKey="retention" fill="#f4bf00" fillOpacity={0.1} stroke="#f4bf00" strokeWidth={3} />
                                <Bar dataKey="engagement" fill="#121212" barSize={12} radius={[4, 4, 0, 0]} />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="mt-6 flex gap-6 text-[10px]">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-[#f4bf00] rounded-sm"></div>
                            <span className="text-gray-500 font-medium">Retention (Completing at least 1 load/week)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-[#121212] rounded-sm"></div>
                            <span className="text-gray-500 font-medium">Engagement (Opening app at least 3x/week)</span>
                        </div>
                    </div>
                </div>

                <div className="curri-card flex flex-col">
                    <h3 className="font-bold text-lg text-secondary mb-6">Churn Risk Profiles</h3>
                    <div className="flex-1 flex flex-col justify-center gap-6">
                        {riskSegments.map((seg, i) => (
                            <div key={i} className="space-y-2">
                                <div className="flex justify-between text-xs font-bold">
                                    <span className="text-secondary">{seg.name}</span>
                                    <span className="text-gray-400">{seg.value}%</span>
                                </div>
                                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full transition-all duration-1000"
                                        style={{ width: `${seg.value}%`, backgroundColor: seg.color }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 p-4 bg-red-50 rounded-lg flex items-start gap-3">
                        <AlertTriangle className="text-red-500 shrink-0" size={18} />
                        <p className="text-[10px] text-red-800 leading-normal font-medium">
                            15% of fleet is in &apos;Critical Churn&apos; status (0 loads in 14 days). Targeted reactivation pilot suggested.
                        </p>
                    </div>
                </div>
            </div>

            <div className="curri-card">
                <h3 className="font-bold text-lg text-secondary mb-6">Cohort Analysis Table</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="py-4 text-xs font-bold text-gray-400 uppercase tracking-widest pl-4">Month Joined</th>
                                <th className="py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Driver Count</th>
                                <th className="py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">M1 Retention</th>
                                <th className="py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">M3 Retention</th>
                                <th className="py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">M6 Retention</th>
                                <th className="py-4"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {cohorts.map((cohort, i) => (
                                <tr key={i} className="group hover:bg-gray-50 transition-colors">
                                    <td className="py-4 text-sm font-bold text-secondary pl-4">{cohort.month}</td>
                                    <td className="py-4 text-sm text-gray-600 font-medium">{cohort.size}</td>
                                    <td className="py-4">
                                        <span className="text-xs font-bold px-2 py-1 bg-green-50 text-green-600 rounded">{cohort.r1}</span>
                                    </td>
                                    <td className="py-4 text-sm text-gray-600 font-medium">{cohort.r3}</td>
                                    <td className="py-4 text-sm text-gray-600 font-medium">{cohort.r6}</td>
                                    <td className="py-4 pr-4 text-right">
                                        <button className="p-1 hover:bg-white rounded-full group-hover:text-[#f4bf00] transition-all">
                                            <ChevronRight size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
