'use client'
import { useApp } from '@/components/providers/app-providers'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
export default function LoginPage() {
  const { login } = useApp()
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg p-6">
      <div className="w-full max-w-md p-8 bg-panel border border-border-soft rounded-lg">
        <h1 className="font-display text-2xl font-bold mb-2">Sign in to ROS</h1>
        <p className="text-text-3 text-sm mb-8">Access your enterprise operations console.</p>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); login() }}>
          <div><label className="block text-xs font-mono uppercase tracking-wider text-text-3 mb-2">Email</label><input type="email" defaultValue="admin@smithjohnson.com" className="w-full bg-card border border-border rounded-md px-3 py-2 text-sm text-text focus:outline-none focus:border-accent" /></div>
          <div><label className="block text-xs font-mono uppercase tracking-wider text-text-3 mb-2">Password</label><input type="password" defaultValue="password" className="w-full bg-card border border-border rounded-md px-3 py-2 text-sm text-text focus:outline-none focus:border-accent" /></div>
          <Button type="submit" className="w-full">Enter Dashboard <ArrowRight className="ml-2 h-4 w-4" /></Button>
        </form>
      </div>
    </div>
  )
}
