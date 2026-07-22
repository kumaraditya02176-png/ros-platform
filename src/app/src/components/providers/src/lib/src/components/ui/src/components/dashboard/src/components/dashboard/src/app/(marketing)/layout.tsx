import Link from 'next/link'
import { Button } from '@/components/ui/button'
export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="h-16 border-b border-border-soft bg-panel/80 backdrop-blur-md sticky top-0 z-40 flex items-center px-6">
        <Link href="/" className="font-display font-bold text-lg">ROS</Link>
        <nav className="ml-12 hidden md:flex items-center gap-8 text-sm text-text-2">
          <Link href="/solutions" className="hover:text-text transition-colors">Solutions</Link>
          <Link href="/industries" className="hover:text-text transition-colors">Industries</Link>
          <Link href="/case-studies" className="hover:text-text transition-colors">Case Studies</Link>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <Link href="/login" className="text-sm text-text-2 hover:text-text transition-colors">Login</Link>
          <Button asChild><Link href="/contact">Book Demo</Link></Button>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border-soft py-12 px-6 text-text-3 text-sm"><div className="max-w-7xl mx-auto flex justify-between"><span>© 2024 Revenue Operating System. All rights reserved.</span><span>Enterprise AI Infrastructure</span></div></footer>
    </div>
  )
}
