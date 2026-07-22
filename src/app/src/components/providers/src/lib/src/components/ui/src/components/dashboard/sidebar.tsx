'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, PhoneCall, Calendar, Users, Bot, Settings } from 'lucide-react'
const navItems = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Calls', href: '/dashboard/calls', icon: PhoneCall },
  { name: 'Appointments', href: '/dashboard/appointments', icon: Calendar },
  { name: 'Leads', href: '/dashboard/leads', icon: Users },
  { name: 'Agents', href: '/dashboard/agents', icon: Bot },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
]
export default function DashboardSidebar() {
  const pathname = usePathname()
  return (
    <div className="flex flex-col h-full">
      <div className="h-16 flex items-center px-6 border-b border-border-soft"><span className="font-display font-bold text-lg">ROS</span></div>
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => { const isActive = pathname === item.href; return (<Link key={item.name} href={item.href} className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${isActive ? 'bg-card text-text' : 'text-text-3 hover:text-text hover:bg-card/50'}`}><item.icon className="h-4 w-4" />{item.name}</Link>) })}
      </nav>
    </div>
  )
}
