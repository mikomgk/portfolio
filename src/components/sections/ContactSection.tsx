'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Check, Github, Linkedin, Mail } from 'lucide-react'
import React, { useCallback, useState } from 'react'
import Section from './Section'
import Link from '@/components/ui/Link'

interface SocialLink {
    name: string
    href: string
    icon: React.FC<React.SVGProps<SVGSVGElement>>
    class: string
    onClick?: (socialLink: SocialLink) => Promise<void>
}

export default function ContactSection() {
    const [showToast, setShowToast] = useState(false)

    const handleEmailClick = useCallback(async (socialLink: SocialLink) => {
        try {
            await navigator.clipboard.writeText(socialLink.name)
            setShowToast(true)
            setTimeout(() => setShowToast(false), 3000)
        } catch (err) {
            console.error('Failed to copy email:', err)
        }
    }, [])

    const socialLinks: SocialLink[] = [
        {
            name: 'mikojob22@gmail.com',
            href: 'mailto:mikojob22@gmail.com',
            icon: Mail,
            class: 'hover:text-red-400',
            onClick: handleEmailClick,
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/miko-stern-087262169',
            icon: Linkedin,
            class: 'hover:text-blue-400',
        },
        {
            name: 'GitHub',
            href: 'https://github.com/mikomgk',
            icon: Github,
            class: 'hover:text-gray-300',
        },
    ]

    return (
        <Section id="contact"
                 title="Get In Touch"
                 classList="mx-auto max-w-2xl text-center">
            <motion.p
                className="mb-12 text-lg leading-relaxed text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                I&#39;m currently looking for new opportunities and would love to hear from you.
                Whether you have a question or just want to say hi, feel free to reach out!
            </motion.p>

            <motion.div
                className="flex justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
            >
                {socialLinks.map((link, index) => (
                    <motion.a
                        key={link.name}
                        href={link.href}
                        target={link.onClick ? undefined : '_blank'}
                        rel={link.onClick ? undefined : 'noopener noreferrer'}
                        title={link.name}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                            e.preventDefault()
                            link.onClick?.(link)
                        }}
                        className={`flex size-13 items-center justify-center rounded-full bg-navy-800 text-gray-400 ${link.class}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 + index * 0.1 } }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <link.icon className="size-6"/>
                    </motion.a>
                ))}
            </motion.div>

            <motion.div
                className="mt-16 pt-8 border-t border-navy-800"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
            >
                <p className="text-sm text-gray-500">
                    © 2025 Miko Stern. Built with <Link href="https://nextjs.org/">Next.js</Link> and <Link
                    href="https://tailwindcss.com/">Tailwind</Link>, deployed with <Link
                    href="https://vercel.com/">Vercel</Link>.<br/>
                    View on <Link href="https://github.com/mikomgk/portfolio">GitHub</Link>
                </p>
            </motion.div>

            {/* Toast Notification */}
            <AnimatePresence>
                {showToast && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.3 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 rounded-lg bg-teal-500 px-6 py-4 text-white shadow-2xl"
                    >
                        <div className="flex size-6 items-center justify-center rounded-full bg-white/20">
                            <Check className="size-4"/>
                        </div>
                        <div>
                            <p className="font-semibold">Email copied!</p>
                            <p className="text-sm opacity-90">mikojob22@gmail.com</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    )
}