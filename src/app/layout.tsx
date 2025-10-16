import type {Metadata, Viewport} from 'next'
import {Inter} from 'next/font/google'
import '../styles/globals.css'
import {SpeedInsights} from '@vercel/speed-insights/next'
import {Analytics} from '@vercel/analytics/next'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Miko Stern',
    description: 'Senior Full Stack Developer specializing in Spring Boot, React, and modern web technologies',
    keywords: 'Full Stack Developer, Spring Boot, React, TypeScript, Java, AWS',
    authors: [{name: 'Miko Stern'}],
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
