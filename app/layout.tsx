import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "../styles/global.scss";
import './globals.css';
import GoogleAnalytics from './GoogleAnalytics';
import SchemaOrg from '@/components/SchemaOrg';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rock Steady - Digital',
  description: "We help SMEs and Start-ups in their digital transformation and requirements. We can enhance your company's existing digital capabilities through website and social media development, e-commerce implementations, and digital transformations.",
  openGraph: {
    title: 'Rock Steady - Digital',
    description: "We help SMEs and Start-ups in their digital transformation and requirements. We can enhance your company's existing digital capabilities through website and social media development, e-commerce implementations, and digital transformations.",
    type: 'website',
    url: 'https://www.rocksteadydigital.com.au/',
    siteName: 'Rock Steady',
    images: [
      {
        url: 'https://www.rocksteadydigital.com.au/assets/main-screen.png',
        width: 800,
        height: 600,
        alt: 'Innovative Digital Solutions to Rock your World!',
      },
    ],
    locale: 'en_AU',
  },
  twitter: {
    site: '@RockSteadyDigi',
    title: 'Rock Steady - Digital',
    description: "We help SMEs and Start-ups in their digital transformation and requirements. We can enhance your company's existing digital capabilities through website and social media development, e-commerce implementations, and digital transformations.",
    images: 'https://www.rocksteadydigital.com.au/assets/main-screen.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <SchemaOrg />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
