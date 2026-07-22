'use client'
import { useEffect } from 'react'
import { useApp } from '@/components/providers/app-providers'
import { useRouter } from 'next/navigation'
import DashboardSidebar from '@/components/dashboard/sidebar'
import DashboardTopbar from '@/components/dashboard/topbar'
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useApp()
  const router = useRouter()
  useEffect(() => { if (!isAuthenticated) router.push('/login') }, [isAuthenticated, router])
  if (!isAuthenticated) return null
  return (
    <div className="h-screen flex bg-bg overflow-hidden">
      <aside className="w-64 border-r border-border-soft bg-panel hidden lg:flex flex-col"><DashboardSidebar /></aside>
      <div className="flex-1 flex flex-col overflow-hidden"><DashboardTopbar /><main className="flex-1 overflow-y-auto bg-bg">{children}</main></div>
    </div>
  )
}
