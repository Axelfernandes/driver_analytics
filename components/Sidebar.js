"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  BarChart3, 
  Users, 
  MessageSquare, 
  ClipboardList, 
  Settings, 
  LayoutDashboard,
  Truck
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Driver Sentiment', href: '/sentiment', icon: MessageSquare },
  { name: 'Engagement KPIs', href: '/engagement', icon: Users },
  { name: 'Experiment Tracker', href: '/experiments', icon: BarChart3 },
  { name: 'Strategy Logs', href: '/strategy', icon: ClipboardList },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-[260px] bg-[#121212] text-white flex flex-col z-50">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-[#f4bf00] rounded-lg flex items-center justify-center">
          <Truck className="text-secondary w-6 h-6" />
        </div>
        <span className="text-xl font-extrabold tracking-tighter uppercase">Curri<span className="text-[#f4bf00]">Ops</span></span>
      </div>

      <nav className="flex-1 px-4 py-8 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                isActive 
                  ? "bg-[#f4bf00] text-[#121212] font-semibold" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 mt-auto border-t border-white/5">
        <div className="px-4 py-3 rounded-lg bg-white/5 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-600"></div>
          <div className="flex flex-col">
            <span className="text-xs font-medium text-white">Strategy Lead</span>
            <span className="text-[10px] text-gray-500">Operation Dept.</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
