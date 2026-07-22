import './globals.css'
import { Inter, Montserrat, IBM_Plex_Mono } from 'next/font/google'
import { AppProviders } from '@/components/providers/app-providers'
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['700', '800'], variable: '--font-montserrat' })
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-plex-mono' })
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${plexMono.variable}`}>
      <body><AppProviders>{children}</AppProviders></body>
    </html>
  )
}
