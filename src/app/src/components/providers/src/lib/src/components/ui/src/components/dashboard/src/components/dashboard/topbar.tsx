'use client'
import { useApp, IndustryKey } from '@/components/providers/app-providers'
import { LogOut } from 'lucide-react'
const INDUSTRY_LABELS: Record<IndustryKey, string> = { hvac: 'HVAC', roofing: 'Roofing', solar: 'Solar', plumbing: 'Plumbing', electrical: 'Electrical' }
export default function DashboardTopbar() {
  const { tenantName, activeIndustry, setActiveIndustry, logout } = useApp()
  return (
    <header className="h-14 border-b border-border-soft bg-panel flex items-center px-6 gap-6">
      <div className="flex flex-col"><span className="text-sm font-semibold text-text">{tenantName}</span><span className="text-[10px] font-mono text-text-4 uppercase tracking-wider">Powered by ROS</span></div>
      <div className="ml-auto flex items-center gap-2">
        {(Object.keys(INDUSTRY_LABELS) as IndustryKey[]).map((ind) => (<button key={ind} onClick={() => setActiveIndustry(ind)} className={`px-3 py-1.5 text-xs font-medium rounded border transition-colors ${activeIndustry === ind ? 'bg-card text-text border-border' : 'bg-transparent text-text-3 border-transparent hover:text-text hover:bg-card/50'}`}>{INDUSTRY_LABELS[ind]}</button>))}
      </div>
      <div className="flex items-center gap-2 text-xs font-mono"><span className="h-2 w-2 rounded-full bg-success animate-pulse" /><span className="text-success">LIVE</span></div>
      <button onClick={logout} className="text-text-3 hover:text-text transition-colors"><LogOut className="h-4 w-4" /></button>
    </header>
  )
}
