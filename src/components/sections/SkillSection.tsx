'use client'

import React, {useMemo, useState} from 'react'
import {motion} from 'framer-motion'
import {portfolioData} from '@/data/portfolio'
import {Skill} from '@/types'
import Section from '@/components/sections/Section'

interface SkillIconProps {
    skill: Skill
    index: number
    categoryIndex: number
}

function SkillIconWrapper({skill, index, categoryIndex}: SkillIconProps) {
    const [isHovered, setIsHovered] = useState(false)
    const Icon = skill.icon

    return (
        <motion.div
            className="relative flex flex-col items-center"
            initial={{opacity: 0, y: 20}}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.6,
                    delay: categoryIndex * 0.1 + index * 0.05,
                },
            }}
            viewport={{once: true}}
            whileHover={{scale: 1.1, y: -5}}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <div
                className="w-16 h-16 flex items-center justify-center bg-navy-800/50 rounded-2xl border border-teal-500/20 backdrop-blur-sm hover:bg-navy-700/70 hover:border-teal-400/40">
                <Icon color="default" style={{width: 40, height: 40}}/>
            </div>

            {isHovered && (
                <motion.div
                    initial={{opacity: 0, y: 10}}
                    animate={{opacity: 1, y: 0}}
                    className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 z-10"
                >
                    <div
                        className="bg-navy-800/90 text-teal-100 px-3 py-2 rounded-lg text-sm whitespace-nowrap backdrop-blur-sm border border-teal-500/30">
                        {skill.name}
                        <div
                            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-navy-800/90 rotate-45 border-l border-t border-teal-500/30"></div>
                    </div>
                </motion.div>
            )}
        </motion.div>
    )
}

interface SkillCategoryProps {
    category: string
    skills: Skill[]
    index: number
}

function SkillCategory({category, skills, index}: SkillCategoryProps) {
    return (
        <motion.div
            className="mb-3"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: index * 0.1}}
            viewport={{once: true, margin: '-50px'}}
        >
            <div className="flex items-center mb-3">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent"></div>
                <h3 className="px-6 text-xl font-semibold text-teal-300 bg-navy-950/50 rounded-full py-2 capitalize">
                    {category}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent"></div>
            </div>

            <div
                className="flex justify-center gap-6 flex-wrap">
                {skills.map((skill, skillIndex) => (
                    <SkillIconWrapper
                        key={skill.name}
                        skill={skill}
                        index={skillIndex}
                        categoryIndex={index}
                    />
                ))}
            </div>
        </motion.div>
    )
}

export default function SkillSection() {
    const skillCategories: [string, Skill[]][] = useMemo(() => {
        const categories: Record<string, Skill[]> = portfolioData.skills.reduce((acc, skill) => {
            acc[skill.category] = acc[skill.category] ? [...acc[skill.category], skill] : [skill]
            return acc
        }, {} as Record<string, Skill[]>)

        return Object.entries(categories).filter(([, skills]) => skills.length > 0)
    }, [])

    return (
        <Section id="skills" title="Technologies">
            <div className="container rounded-2xl bg-navy-900/50 p-8 backdrop-blur-sm mb-5">
                <motion.p
                    className="text-center mb-16 text-lg text-gray-300 max-w-2xl mx-auto"
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    viewport={{once: true}}
                >
                    A comprehensive overview of my technical expertise across different domains
                </motion.p>

                <div className="space-y-8">
                    {skillCategories.map(([category, skills], index) => (
                        <SkillCategory
                            key={category}
                            category={category}
                            skills={skills}
                            index={index}
                        />
                    ))}
                </div>

                <motion.div
                    className="mt-16 text-center"
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    viewport={{once: true}}
                >
                    <div className="inline-flex items-center space-x-2 text-teal-400">
                        <div className="w-8 h-px bg-teal-500"></div>
                        <span className="text-lg font-medium">Always learning, always growing</span>
                        <div className="w-8 h-px bg-teal-500"></div>
                    </div>
                </motion.div>
            </div>
        </Section>
    )
}