"use client";

import {
    ClipboardList,
    ChevronRight,
    Layers,
    Milestone,
    History,
    TrendingUp,
    ArrowUpRight
} from 'lucide-react';

const roadmapItems = [
    {
        quarter: "Q1 2026",
        title: "Regional Hub Expansion",
        status: "In Progress",
        description: "Establishing localized support hubs in High-Growth regions (TX, FL) to improve driver physical touchpoints.",
        priority: "High"
    },
    {
        quarter: "Q2 2026",
        title: "Predictive Capacity Tool",
        status: "Planning",
        description: "Launch of internal tools to predict driver churn before it happens based on app engagement patterns.",
        priority: "Medium"
    },
    {
        quarter: "Q3 2026",
        title: "Tiered Loyalty Program",
        status: "Backlog",
        description: "Moving from 0 → 1 on a gamified driver loyalty system to reward tenure and reliability.",
        priority: "High"
    }
];

const historyLogs = [
    {
        date: "Jan 12, 2026",
        auth: "Strata-Lead",
        action: "Policy Shift",
        summary: "Standardized wait-time reimbursement criteria across all construction job sites.",
        impact: "+4% Driver Loyalty Store"
    },
    {
        date: "Dec 15, 2025",
        auth: "Ops-Manager",
        action: "Pilot Approval",
        summary: "Approved TX 'Instant Pay' pilot scale-up from 100 to 500 drivers.",
        impact: "Active Pilots +1"
    },
    {
        date: "Nov 22, 2025",
        auth: "Systems-Eng",
        action: "App Logic Update",
        summary: "Deployed new dispatch distance calculation to favor high-tenure drivers.",
        impact: "-1.2m Latency"
    }
];

export default function StrategyPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-extrabold text-secondary tracking-tight">Strategy & Roadmap</h1>
                    <p className="text-gray-500 mt-1">Foundational planning and historical impact logging.</p>
                </div>
                <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                        <History size={16} />
                        View Change History
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <h3 className="font-bold text-lg text-secondary flex items-center gap-2">
                        <Milestone size={20} className="text-primary" />
                        Operational Roadmap
                    </h3>

                    <div className="space-y-4">
                        {roadmapItems.map((item, i) => (
                            <div key={i} className="curri-card flex gap-6 items-start">
                                <div className="shrink-0 flex flex-col items-center">
                                    <div className="w-12 h-12 bg-secondary text-primary rounded-xl flex items-center justify-center font-bold text-xs">
                                        {item.quarter.split(' ')[0]}
                                    </div>
                                    <div className="w-px h-full bg-gray-100 mt-2"></div>
                                </div>
                                <div className="flex-1 space-y-2">
                                    <div className="flex justify-between items-start">
                                        <h4 className="text-lg font-bold text-secondary">{item.title}</h4>
                                        <span className={`text-[10px] font-bold px-2 py-1 rounded ${item.status === 'In Progress' ? 'bg-blue-50 text-blue-600' :
                                                item.status === 'Planning' ? 'bg-[#f4bf00]/10 text-[#f4bf00]' : 'bg-gray-50 text-gray-400'
                                            }`}>
                                            {item.status}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                                    <div className="pt-4 flex items-center gap-4">
                                        <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Priority: <span className="text-secondary">{item.priority}</span></span>
                                        <button className="text-xs font-bold text-primary hover:underline flex items-center gap-1 ml-auto">
                                            Review Plan <ArrowUpRight size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="font-bold text-lg text-secondary flex items-center gap-2">
                        <ClipboardList size={20} className="text-secondary" />
                        Impact Registry
                    </h3>

                    <div className="curri-card p-0 overflow-hidden divide-y divide-gray-50">
                        {historyLogs.map((log, i) => (
                            <div key={i} className="p-4 hover:bg-gray-50 transition-colors group cursor-pointer">
                                <div className="flex justify-between text-[10px] font-bold text-gray-400 mb-2">
                                    <span>{log.date}</span>
                                    <span className="text-secondary">{log.auth}</span>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-secondary group-hover:text-primary transition-colors flex items-center justify-between">
                                        {log.action}
                                        <ChevronRight size={14} className="text-gray-200 group-hover:text-primary" />
                                    </p>
                                    <p className="text-[11px] text-gray-500 leading-normal">{log.summary}</p>
                                    <div className="pt-2">
                                        <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                                            <TrendingUp size={10} />
                                            {log.impact}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="curri-card bg-secondary/5 border-dashed border-2 border-primary/20 flex flex-col items-center justify-center p-8 text-center space-y-3">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-primary">
                            <Layers size={20} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-secondary">Strategy Archive</p>
                            <p className="text-xs text-gray-400">View performance of 2025 initiatives.</p>
                        </div>
                        <button className="text-xs font-bold text-secondary underline">Access Vault</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
