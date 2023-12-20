import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';
import GoogleAnalytics from './GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rock Steady - 2023',
  description: 'Blockchain. Metaverse. Digital Consulting. Create Solutions to Transform L.I.F.E. Living In Freedom Everyday',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
