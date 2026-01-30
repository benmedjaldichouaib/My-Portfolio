import React from "react"
import type { Metadata, Viewport } from 'next'

import { Analytics } from '@vercel/analytics/next'
import './globals.css'

import { Inter, Geist_Mono, Asap as V0_Font_Asap, Geist_Mono as V0_Font_Geist_Mono } from 'next/font/google'

// Initialize fonts
const _asap = V0_Font_Asap({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: 'Chouaib | Fullstack Web Developer',
  description: 'I build modern, responsive, and scalable web applications using modern technologies. Fullstack developer specializing in React, Next.js, and Tailwind CSS.',
  keywords: ['web developer', 'fullstack developer', 'react', 'next.js', 'tailwind css', 'javascript', 'python', 'portfolio'],
  authors: [{ name: 'Chouaib' }],
  creator: 'Chouaib',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
    title: 'Chouaib | Fullstack Web Developer',
    description: 'I build modern, responsive, and scalable web applications using modern technologies.',
    siteName: 'Chouaib Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chouaib | Fullstack Web Developer',
    description: 'I build modern, responsive, and scalable web applications using modern technologies.',
  },
  icons: {
  icon: [
    {
      url: '/favicon.ico',
    },
    {
      url: '/icon.svg',
      type: 'image/svg+xml',
    },
  ],
  apple: '/apple-touch-icon.png',
},




export const viewport: Viewport = {
  themeColor: '#1a1a2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
