import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "../styles/global.scss";
import './globals.css';
import GoogleAnalytics from './GoogleAnalytics';
import SchemaOrg from '@/components/SchemaOrg';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rocksteadydigital.com.au'),
  title: {
    default: 'Rock Steady Digital | Digital Transformation and Delivery',
    template: '%s | Rock Steady Digital',
  },
  description: "We help SMEs and Start-ups in their digital transformation and requirements. We can enhance your company's existing digital capabilities through website and social media development, e-commerce implementations, and digital transformations.",
  keywords: [
    'digital transformation',
    'website development',
    'social media strategy',
    'e-commerce implementation',
    'agile program delivery',
    'Australia digital consultancy',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  authors: [{ name: 'Rock Steady Digital' }],
  creator: 'Rock Steady Digital',
  publisher: 'Rock Steady Digital',
  openGraph: {
    title: 'Rock Steady Digital | Digital Transformation and Delivery',
    description: "We help SMEs and Start-ups in their digital transformation and requirements. We can enhance your company's existing digital capabilities through website and social media development, e-commerce implementations, and digital transformations.",
    type: 'website',
    url: '/',
    siteName: 'Rock Steady Digital',
    images: [
      {
        url: 'https://www.rocksteadydigital.com.au/assets/main-screen.png',
        width: 1200,
        height: 630,
        alt: 'Innovative Digital Solutions to Rock your World!',
      },
    ],
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@RockSteadyDigi',
    creator: '@RockSteadyDigi',
    title: 'Rock Steady Digital | Digital Transformation and Delivery',
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
      <body className={inter.className}>
        <GoogleAnalytics />
        <SchemaOrg />
        {children}
      </body>
    </html>
  )
}
