'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
export type IndustryKey = 'hvac' | 'roofing' | 'solar' | 'plumbing' | 'electrical'
interface AppContextType { isAuthenticated: boolean; login: () => void; logout: () => void; activeIndustry: IndustryKey; setActiveIndustry: (ind: IndustryKey) => void; tenantName: string; }
const AppContext = createContext<AppContextType | undefined>(undefined)
export function AppProviders({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeIndustry, setActiveIndustry] = useState<IndustryKey>('hvac')
  const router = useRouter()
  useEffect(() => { const auth = localStorage.getItem('ros_auth'); if (auth === 'true') setIsAuthenticated(true) }, [])
  const login = () => { localStorage.setItem('ros_auth', 'true'); setIsAuthenticated(true); router.push('/dashboard') }
  const logout = () => { localStorage.removeItem('ros_auth'); setIsAuthenticated(false); router.push('/') }
  return (<AppContext.Provider value={{ isAuthenticated, login, logout, activeIndustry, setActiveIndustry, tenantName: 'Smith Johnson HVAC' }}>{children}</AppContext.Provider>)
}
export function useApp() { const ctx = useContext(AppContext); if (!ctx) throw new Error('useApp must be used within AppProviders'); return ctx }
