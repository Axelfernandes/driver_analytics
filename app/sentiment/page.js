"use client";

import {
    MessageSquare,
    Smile,
    Meh,
    Frown,
    Search,
    Filter,
    TrendingUp,
    MapPin
} from 'lucide-react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell
} from 'recharts';

const sentimentTrend = [
    { month: 'Aug', score: 65, volume: 450 },
    { month: 'Sep', score: 68, volume: 520 },
    { month: 'Oct', score: 62, volume: 480 },
    { month: 'Nov', score: 72, volume: 600 },
    { month: 'Dec', score: 75, volume: 550 },
    { month: 'Jan', score: 82, volume: 720 },
];

const topicDistribution = [
    { name: 'Payment Speed', value: 400, color: '#f4bf00' },
    { name: 'App Usability', value: 300, color: '#121212' },
    { name: 'Site Access', value: 200, color: '#2d2d2d' },
    { month: 'Support', value: 100, color: '#e5e7eb' },
];

const feedbackData = [
    {
        id: 1,
        driver: "M. Ramirez",
        rating: "Positive",
        comment: "The new Instant Pay feature is a lifesaver. Had a flat tire and was able to get funds immediately.",
        topic: "Payment",
        date: "2h ago",
        location: "TX - Dallas"
    },
    {
        id: 2,
        driver: "J. Chen",
        rating: "Neutral",
        comment: "Job site entry codes sometimes expire before I arrive. Had to wait 20 mins for a refresh.",
        topic: "Site Access",
        date: "5h ago",
        location: "CA - Los Angeles"
    },
    {
        id: 3,
        driver: "T. Wilson",
        rating: "Negative",
        comment: "Heavy traffic in downtown Phoenix isn't factored into the estimated delivery time. Feels stressful.",
        topic: "Dispatch",
        date: "1d ago",
        location: "AZ - Phoenix"
    },
    {
        id: 4,
        driver: "A. Smith",
        rating: "Positive",
        comment: "Support was actually helpful for once. Resolved my issue in under 5 minutes.",
        topic: "Support",
        date: "1d ago",
        location: "GA - Atlanta"
    }
];

const keywords = [
    { word: "Instant Pay", count: 124, trend: "+15%" },
    { word: "Wait Times", count: 88, trend: "-5%" },
    { word: "App Crash", count: 12, trend: "-60%" },
    { word: "Safety", count: 45, trend: "+10%" },
    { word: "Fuel Prices", count: 210, trend: "+30%" },
];

export default function SentimentPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-extrabold text-secondary tracking-tight">Driver Sentiment</h1>
                    <p className="text-gray-500 mt-1">Qualitative analysis and voice-of-the-driver mapping.</p>
                </div>
                <div className="flex gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        <input
                            type="text"
                            placeholder="Search feedback..."
                            className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                        <Filter size={16} />
                        Filter
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 curri-card bg-white p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-lg text-secondary">Sentiment Score Trend</h3>
                        <div className="flex items-center gap-2 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                            <TrendingUp size={14} />
                            +14% vs Last Year
                        </div>
                    </div>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={sentimentTrend}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f1f1" />
                                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#999' }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#999' }} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                />
                                <Line type="monotone" dataKey="score" stroke="#f4bf00" strokeWidth={3} dot={{ r: 6, fill: '#f4bf00', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 8 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="curri-card">
                    <h3 className="font-bold text-lg text-secondary mb-6">Feedback Topics</h3>
                    <div className="h-[240px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={topicDistribution}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {topicDistribution.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="mt-4 space-y-2">
                        {topicDistribution.map((topic, i) => (
                            <div key={i} className="flex justify-between items-center text-xs">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: topic.color }}></div>
                                    <span className="text-gray-600 font-medium">{topic.name}</span>
                                </div>
                                <span className="text-secondary font-bold">{topic.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-3 space-y-6">
                    <h3 className="font-bold text-lg text-secondary">Recent Feedback</h3>
                    <div className="grid grid-cols-1 gap-4">
                        {feedbackData.map((fb) => (
                            <div key={fb.id} className="curri-card hover:translate-y-0 hover:shadow-md transition-all border border-transparent hover:border-primary/20">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${fb.rating === 'Positive' ? 'bg-green-100 text-green-600' :
                                                fb.rating === 'Negative' ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'
                                            }`}>
                                            {fb.rating === 'Positive' ? <Smile size={20} /> : fb.rating === 'Negative' ? <Frown size={20} /> : <Meh size={20} />}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-secondary">{fb.driver}</p>
                                            <div className="flex items-center gap-2 text-[10px] text-gray-400">
                                                <MapPin size={10} />
                                                {fb.location}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-[10px] bg-secondary/5 text-secondary px-2 py-1 rounded font-bold uppercase tracking-wider">{fb.topic}</span>
                                        <p className="text-[10px] text-gray-400 mt-1">{fb.date}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">&quot;{fb.comment}&quot;</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="font-bold text-lg text-secondary">Trending Keywords</h3>
                    <div className="curri-card space-y-4">
                        {keywords.map((kw, i) => (
                            <div key={i} className="flex justify-between items-center group cursor-pointer">
                                <div>
                                    <p className="text-sm font-bold text-secondary group-hover:text-primary transition-colors">{kw.word}</p>
                                    <p className="text-[10px] text-gray-400">{kw.count} mentions</p>
                                </div>
                                <span className={`text-[10px] font-bold ${kw.trend.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>
                                    {kw.trend}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="curri-card bg-secondary text-white">
                        <h4 className="font-bold text-sm mb-2">Strategy Note</h4>
                        <p className="text-[10px] text-gray-400 leading-relaxed border-l border-primary pl-2">
                            Fuel price mentions are up 30%. This is likely impacting load acceptance in lower-margin routes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
