'use client'
import { useEffect } from 'react'
import { useApp } from '@/components/providers/app-providers'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Building2, Users, CreditCard } from 'lucide-react'
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useApp()
  const router = useRouter()
  useEffect(() => { if (!isAuthenticated) router.push('/login') }, [isAuthenticated, router])
  if (!isAuthenticated) return null
  return (
    <div className="h-screen flex bg-bg overflow-hidden">
      <aside className="w-64 border-r border-border-soft bg-panel hidden lg:flex flex-col p-4">
        <h2 className="font-display font-bold text-lg mb-8 px-3">ROS Admin</h2>
        <nav className="flex flex-col gap-1 text-sm">
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2 rounded text-text-2 hover:bg-card hover:text-text transition-colors"><Building2 className="h-4 w-4" /> Clients</Link>
          <Link href="/admin/users" className="flex items-center gap-3 px-3 py-2 rounded text-text-2 hover:bg-card hover:text-text transition-colors"><Users className="h-4 w-4" /> Users</Link>
          <Link href="/admin/billing" className="flex items-center gap-3 px-3 py-2 rounded text-text-2 hover:bg-card hover:text-text transition-colors"><CreditCard className="h-4 w-4" /> Billing</Link>
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto p-8">{children}</main>
    </div>
  )
}
