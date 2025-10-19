'use client'

import {useEffect, useMemo, useRef, useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {Menu, X} from 'lucide-react'
import {portfolioData} from '@/data/portfolio'

interface NavigationProps {
    currentSection?: string
}

export default function Navigation({currentSection = 'hero'}: NavigationProps) {
    const [activeSection, setActiveSection] = useState(currentSection)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const observer = useRef<IntersectionObserver>(null)

    const navItems = useMemo(() => {
        const navItems = [
            {id: 'hero', label: 'About'},
            {id: 'experience', label: 'Experience'},
            {id: 'projects', label: 'Projects'},
            {id: 'skills', label: 'Technologies'},
            {id: 'contact', label: 'Contact'},
        ]
        return navItems.filter(
            item => item.id !== 'projects' || portfolioData.projects.length > 0,
        )
    }, [])

    useEffect(() => {
        observer.current = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { /*root: containerRef.current, */threshold: 0.3},
        )
        navItems.map(item => document.getElementById(item.id))
            .filter(element => {
                return !!element
            })
            .forEach(element => observer.current!.observe(element))
        return () => observer.current?.disconnect()
    }, [navItems])


    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({behavior: 'smooth', block: 'start'})
        }
        setIsMobileMenuOpen(false)
    }

    return (
        <>
            {/* Desktop Sidebar */}
            <nav
                className="fixed left-0 top-0 z-50 hidden h-full w-(--navigation-width) bg-navy-900/95 backdrop-blur-sm lg:flex">
                <div className="flex h-full w-full flex-col justify-center px-6">
                    <div className="mb-12">
                        <motion.h3
                            className="text-3xl font-bold text-teal-400"
                            initial={{opacity: 0, x: -20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.5}}
                        >
                            MS
                        </motion.h3>
                    </div>
                    <ul className="space-y-0.5">
                        {navItems.map((item, index) => (
                            <motion.li
                                key={item.id}
                                initial={{opacity: 0, x: -20}}
                                animate={{opacity: 1, x: 0}}
                                transition={{duration: 0.5, delay: index * 0.1}}
                            >
                                <button
                                    onClick={() => scrollToSection(item.id)}
                                    className={`group relative text-left text-lg font-medium transition-colors duration-300 hover:bg-teal-300/10 py-3 px-4 rounded-r-md ${
                                        activeSection === item.id
                                            ? 'text-teal-400 bg-teal-300/10 border-l-teal-300 border-l-3'
                                            : 'text-gray-400 hover:text-white'
                                    }`}
                                >
                                    <span className="relative z-10">{item.label}</span>
                                </button>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
                className="fixed right-6 top-6 z-50 flex size-12 items-center justify-center rounded-full bg-navy-800/90 backdrop-blur-sm lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{scale: 0.95}}
            >
                {isMobileMenuOpen ? (
                    <X className="size-6 text-white"/>
                ) : (
                    <Menu className="size-6 text-white"/>
                )}
            </motion.button>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 bg-navy-900/95 backdrop-blur-sm lg:hidden"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.2}}
                    >
                        <div className="flex h-full items-center justify-center">
                            <motion.ul
                                className="space-y-8 text-center"
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                exit={{opacity: 0, y: 20}}
                                transition={{duration: 0.3, delay: 0.1}}
                            >
                                {navItems.map((item, index) => (
                                    <motion.li
                                        key={item.id}
                                        initial={{opacity: 0, y: 20}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 0.3, delay: 0.2 + index * 0.1}}
                                    >
                                        <button
                                            onClick={() => scrollToSection(item.id)}
                                            className={`text-2xl font-medium transition-colors duration-300 ${
                                                activeSection === item.id
                                                    ? 'text-teal-400'
                                                    : 'text-gray-400 hover:text-white'
                                            }`}
                                        >
                                            {item.label}
                                        </button>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}