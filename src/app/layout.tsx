import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ['latin'] })

const title = 'Miko Stern - Senior Full Stack Developer'
const description = 'Senior Full Stack Developer with 7+ years experience'
export const metadata: Metadata = {
    metadataBase: new URL(process.env.PUBLIC_SITE_URL || ''),
    title: 'Miko Stern',
    description: 'Senior Full Stack Developer specializing in Spring Boot, React, and modern web technologies',
    keywords: 'Full Stack Developer, Spring Boot, React, TypeScript, Java, AWS',
    authors: [{ name: 'Miko Stern' }],
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title,
        description,
        url: process.env.PUBLIC_SITE_URL,
        siteName: 'Miko Stern Portfolio',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/favicon/web-app-manifest-512x512.png',
                width: 192,
                height: 192,
                alt: 'Miko Stern Portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary',
        title,
        description,
        images: ['/favicon/web-app-manifest-512x512.png'],
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
    },
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
        <body className={`${inter.className} bg-navy-950 text-gray-100 antialiased`}>
        {children}
        <SpeedInsights/>
        <Analytics/>
        </body>
        </html>
    )
}
