'use client'
import { useApp } from '@/components/providers/app-providers'
import { INDUSTRY_CONFIG } from '@/lib/industry-data'
export default function DashboardOverview() {
  const { activeIndustry } = useApp()
  const data = INDUSTRY_CONFIG[activeIndustry]
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border-soft border border-border-soft rounded-lg overflow-hidden">
        {data.kpis.map((kpi: any) => (<div key={kpi.label} className="bg-panel p-4 flex flex-col gap-1"><span className="text-[10px] font-mono uppercase tracking-wider text-text-3">{kpi.label}</span><span className="text-2xl font-display font-bold text-text">{kpi.value}</span><span className={`text-xs font-mono ${kpi.type === 'ok' ? 'text-success' : 'text-warning'}`}>{kpi.delta}</span></div>))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-panel border border-border-soft rounded-lg p-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-text-2 mb-4">AI Agents</h3>
          <div className="space-y-4">
            {data.agents.map((agent: any) => (<div key={agent.name} className="flex items-start gap-3"><div className={`mt-1 h-2 w-2 rounded-full ${agent.status === 'working' ? 'bg-success animate-pulse' : agent.status === 'busy' ? 'bg-warning' : 'bg-text-4'}`} /><div><div className="text-sm font-medium text-text">{agent.name}</div><div className="text-xs text-text-3 font-mono">{agent.task}</div></div></div>))}
          </div>
        </div>
        <div className="bg-panel border border-border-soft rounded-lg p-6 lg:col-span-2">
          <h3 className="text-xs font-mono uppercase tracking-wider text-text-2 mb-6">Operational Workflow</h3>
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {data.workflow.map((stage: string, i: number) => (<div key={stage} className="flex items-center gap-2"><div className={`flex flex-col items-center gap-2`}><div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-mono border ${i === 0 ? 'bg-accent/10 border-accent text-accent' : i === 1 ? 'bg-success/10 border-success text-success' : 'bg-card border-border text-text-3'}`}>{i + 1}</div><span className="text-[10px] text-text-3 whitespace-nowrap">{stage}</span></div>{i < data.workflow.length - 1 && (<div className={`h-px w-8 ${i < 1 ? 'bg-success' : 'bg-border'}`} />)}</div>))}
          </div>
        </div>
      </div>
    </div>
  )
}
