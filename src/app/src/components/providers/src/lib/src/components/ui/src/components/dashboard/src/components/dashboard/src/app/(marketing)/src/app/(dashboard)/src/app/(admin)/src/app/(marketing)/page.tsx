import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
export default function LandingPage() {
  return (
    <div className="relative">
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-border-soft rounded-full text-xs font-mono text-text-3 mb-8"><span className="h-1.5 w-1.5 rounded-full bg-success" />ENTERPRISE AI INFRASTRUCTURE</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">The AI Revenue Operating System for Home Services.</h1>
          <p className="mt-8 text-lg text-text-2 max-w-2xl leading-relaxed">Automate lead qualification, customer communication, scheduling, and follow-up with enterprise AI purpose-built for HVAC, Roofing, Solar, Plumbing, and Electrical operators.</p>
          <div className="mt-10 flex flex-wrap gap-4"><Button asChild><Link href="/login">Login to Dashboard <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></div>
        </div>
      </section>
      <div className="fixed inset-0 -z-10 opacity-20" style={{ backgroundImage: 'linear-gradient(to right, #1F1F1F 1px, transparent 1px), linear-gradient(to bottom, #1F1F1F 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </div>
  )
}
