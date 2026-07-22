import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['var(--font-inter)'], mono: ['var(--font-plex-mono)'], display: ['var(--font-montserrat)'] },
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)', panel: 'rgb(var(--panel) / <alpha-value>)', card: 'rgb(var(--card) / <alpha-value>)',
        border: { DEFAULT: 'rgb(var(--border) / <alpha-value>)', soft: 'rgb(var(--border-soft) / <alpha-value>)' },
        text: { DEFAULT: 'rgb(var(--text) / <alpha-value>)', 2: 'rgb(var(--text-2) / <alpha-value>)', 3: 'rgb(var(--text-3) / <alpha-value>)', 4: 'rgb(var(--text-4) / <alpha-value>)' },
        success: 'rgb(var(--success) / <alpha-value>)', warning: 'rgb(var(--warning) / <alpha-value>)', error: 'rgb(var(--error) / <alpha-value>)', accent: 'rgb(var(--accent) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
export default config
