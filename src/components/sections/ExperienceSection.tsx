'use client'

import {motion} from 'framer-motion'
import {Calendar} from 'lucide-react'
import {portfolioData} from '@/data/portfolio'
import Section from './Section'
import {Experience} from '@/types'

interface ExperienceBlockProps {
    index: number,
    job: Experience
}

function ExperienceBlock({index, job}: ExperienceBlockProps) {
    return <motion.div
        className="group relative rounded-xl bg-navy-900/50 p-8 backdrop-blur-sm hover:bg-navy-800/50 border-l-teal-300 border-l-3"
        initial={{opacity: 0, x: -30}}
        whileInView={{opacity: 1, x: 0, transition: {duration: 0.6, delay: index * 0.1}}}
        viewport={{once: true}}
        whileHover={{x: 10}}
    >
        <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors">
                {job.role}
            </h3>
            <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="size-4"/>
                <span className="text-sm font-medium">{job.period}</span>
            </div>
        </div>

        <h4 className="mb-4 text-lg font-semibold text-teal-400">
            {job.company}
        </h4>

        <p className="leading-relaxed text-gray-300">
            {job.description}
        </p>
    </motion.div>
}

export default function ExperienceSection() {
    return (
        <Section id="experience" title="Experience">
            <div className="space-y-12">
                {portfolioData.experience.map((job: Experience, index: number) => (
                    <ExperienceBlock key={index} index={index} job={job}/>
                ))}
            </div>
        </Section>
    )
}