"use client";

import {
    Rocket,
    Target,
    FlaskConical,
    CheckCircle2,
    ArrowRight,
    Plus,
    Clock,
    Zap,
    ShieldCheck,
    TrendingUp
} from 'lucide-react';

const activePilots = [
    {
        id: 1,
        title: "Instant Pay (Next-Day)",
        region: "Texas (Austin, Dallas)",
        status: "Scaling",
        progress: 85,
        goal: "Boost Day-30 Retention by 10%",
        currentImpact: "+12.4%",
        description: "Testing lower clearing times for payments to increase short-term driver commitment.",
        color: "bg-green-500",
        impactTheme: "text-green-600"
    },
    {
        id: 2,
        title: "Job Site Waiting Relief",
        region: "California (LA, Bay Area)",
        status: "Active",
        progress: 45,
        goal: "Reduce churn related to wait-time friction",
        currentImpact: "-8% churn risk",
        description: "Automated geofencing to detect wait times over 15 mins and offering immediate credits.",
        color: "bg-[#f4bf00]",
        impactTheme: "text-[#f4bf00]"
    },
    {
        id: 3,
        title: "Fleet Safety Bonus Program",
        region: "Florida (Miami, Orlando)",
        status: "Analyzing",
        progress: 20,
        goal: "Reduce safety report incidents by 15%",
        currentImpact: "Calculating...",
        description: "Monthly payout bonus for drivers with zero safety incidents and high load completion rates.",
        color: "bg-blue-500",
        impactTheme: "text-blue-600"
    }
];

const completedPilots = [
    {
        title: "Onboarding Flow V2",
        date: "Dec 2025",
        result: "SUCCESS",
        gain: "+22% Activation",
        outcome: "Scaled Nationwide"
    },
    {
        title: "Low-Margin Fuel Surcharge",
        date: "Nov 2025",
        result: "PARTIAL",
        gain: "+5% Acceptance",
        outcome: "Adjusted & Relaunched"
    }
];

const metrics = [
    { label: "Active Pilots", value: "3", icon: FlaskConical },
    { label: "Avg. Success Rate", value: "72%", icon: Target },
    { label: "0 to Scale (Avg)", value: "14 Days", icon: Rocket },
];

export default function ExperimentsPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-extrabold text-secondary tracking-tight">Experiment Tracker</h1>
                    <p className="text-gray-500 mt-1">Lifecycle management for operational pilots (0 → 1 scaling).</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-secondary rounded-lg text-sm font-bold hover:opacity-90 transition-all">
                    <Plus size={16} />
                    New Experiment
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {metrics.map((m, i) => (
                    <div key={i} className="curri-card">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-secondary/5 text-secondary rounded-lg">
                                <m.icon size={18} />
                            </div>
                            <span className="kpi-label">{m.label}</span>
                        </div>
                        <div className="text-3xl font-bold text-secondary">{m.value}</div>
                    </div>
                ))}
            </div>

            <div className="space-y-6">
                <h3 className="font-bold text-lg text-secondary flex items-center gap-2">
                    <Zap size={20} className="text-[#f4bf00]" />
                    Active Pilot Pipeline
                </h3>

                <div className="grid grid-cols-1 gap-6">
                    {activePilots.map((pilot) => (
                        <div key={pilot.id} className="curri-card overflow-hidden group">
                            <div className="flex flex-col lg:flex-row gap-6">
                                <div className="lg:w-2/3 space-y-4">
                                    <div className="flex items-center gap-2">
                                        <span className={`text-[10px] font-bold px-2 py-1 rounded text-white ${pilot.color}`}>
                                            {pilot.status.toUpperCase()}
                                        </span>
                                        <h4 className="text-xl font-bold text-secondary">{pilot.title}</h4>
                                    </div>
                                    <p className="text-sm text-gray-500">{pilot.description}</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                            <Target size={16} className="text-gray-400 mt-1" />
                                            <div>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase">Primary Goal</p>
                                                <p className="text-sm font-medium text-secondary">{pilot.goal}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border-l-4 border-l-primary">
                                            <TrendingUp size={16} className="text-primary mt-1" />
                                            <div>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase">Current Performance</p>
                                                <p className={`text-sm font-bold ${pilot.impactTheme}`}>{pilot.currentImpact}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:w-1/3 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gray-100 pt-6 lg:pt-0 lg:pl-6">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-end">
                                            <span className="text-xs font-bold text-secondary">Scale Progress</span>
                                            <span className="text-xs font-medium text-gray-400">{pilot.progress}%</span>
                                        </div>
                                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full transition-all duration-1000 ${pilot.color}`}
                                                style={{ width: `${pilot.progress}%` }}
                                            ></div>
                                        </div>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            <span className="flex items-center gap-1 text-[10px] text-gray-400 bg-gray-50 px-2 py-1 rounded">
                                                <Clock size={10} /> Day {Math.floor(pilot.progress / 5)}/30
                                            </span>
                                            <span className="flex items-center gap-1 text-[10px] text-gray-400 bg-gray-50 px-2 py-1 rounded uppercase font-bold tracking-tight">
                                                {pilot.region}
                                            </span>
                                        </div>
                                    </div>

                                    <button className="w-full mt-6 py-3 bg-white border border-gray-200 rounded-lg text-sm font-bold text-secondary hover:bg-gray-50 transition-all flex items-center justify-center gap-2 group-hover:border-primary">
                                        View Experiment Logs
                                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="curri-card bg-[#121212] text-white">
                <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                    <ShieldCheck size={20} className="text-[#f4bf00]" />
                    Historical Outcome Log
                </h3>
                <div className="space-y-4">
                    {completedPilots.map((p, i) => (
                        <div key={i} className="flex justify-between items-center p-4 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                            <div>
                                <p className="text-sm font-bold">{p.title}</p>
                                <div className="flex items-center gap-3 text-[10px] text-gray-500 mt-1">
                                    <span>{p.date}</span>
                                    <span className={`font-extrabold ${p.result === 'SUCCESS' ? 'text-green-500' : 'text-[#f4bf00]'}`}>{p.result}</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-bold text-[#f4bf00]">{p.gain}</p>
                                <p className="text-[10px] text-gray-500 mt-1">{p.outcome}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
