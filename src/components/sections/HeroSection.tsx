'use client'

import {motion} from 'framer-motion'
import {ArrowRight, Download} from 'lucide-react'

export default function HeroSection() {
    const buttonVariants = {
        hover: {scale: 1.05},
        tap: {scale: 0.95},
    }

    const iconVariants = {
        hover: {y: [5, 0]},
        rest: {y: 0},
    }

    return (
        <section id="hero" className="section flex items-center justify-center section-snap">
            <div className="container">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                    >
                        <motion.p
                            className="mb-6 text-lg font-medium text-teal-400"
                            initial={{opacity: 0, x: -30}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.8, delay: 0.2}}
                        >
                            Hi, I&#39;m
                        </motion.p>

                        <motion.h1
                            className="mb-8 text-5xl font-bold text-white md:text-7xl lg:text-8xl"
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.3}}
                        >
                            Miko Stern
                        </motion.h1>

                        <motion.h2
                            className="mb-8 text-3xl font-bold text-gray-300 md:text-4xl lg:text-5xl"
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.4}}
                        >
                            Senior Full Stack Developer
                        </motion.h2>

                        <motion.p
                            className="mb-12 max-w-2xl text-lg leading-relaxed text-gray-400"
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.5}}
                        >
                            I&#39;m a passionate Full Stack (Back End focus) developer with over 7 years of experience
                            designing and scaling high-performance systems. Proven leader and mentor skilled in building
                            REST APIs, microservices, and distributed systems with strong technical and communication
                            skills. Over 5 years of successful remote collaboration across global time zones with
                            distributed international teams.
                        </motion.p>

                        <motion.div
                            className="flex flex-col gap-4 sm:flex-row"
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.6}}
                        >
                            <motion.a
                                href="#experience"
                                className="group flex items-center gap-2 rounded-lg border-2 border-teal-400 px-8 py-4 font-medium text-teal-400 transition-all duration-300 hover:bg-teal-400 hover:text-navy-900 backdrop-blur-sm"
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                            >
                                View My Work
                                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1"/>
                            </motion.a>

                            <motion.a
                                href="/Miko Stern CV.pdf"
                                download="Miko Stern CV.pdf"
                                className="group flex items-center gap-2 rounded-lg bg-navy-800 px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-navy-700"
                                variants={buttonVariants}
                                initial="rest"
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <motion.div
                                    variants={iconVariants}
                                    transition={{type: 'spring', stiffness: 300}}
                                >
                                    <Download className="size-5"/>
                                </motion.div>

                                Resume
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}