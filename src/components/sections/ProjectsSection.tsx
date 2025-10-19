'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'
import Section from './Section'
import { Project } from '@/types'
import Tag from '@/components/ui/Tag'

interface ProjectBlockProps {
    index: number,
    project: Project
}

function ProjectBlock({ index, project }: ProjectBlockProps) {
    return (
        <motion.div
            key={index}
            className="group relative overflow-hidden rounded-2xl bg-navy-900/50 p-8 backdrop-blur-sm hover:bg-navy-800/50 hover:border-teal-300 border-1 border-transparent hover:shadow-lg shadow-teal-300/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1 } }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
        >
            <div className="mb-6">
                <h3 className="mb-4 text-2xl font-bold text-white group-hover:text-teal-400 transition-colors">
                    {project.title}
                </h3>
                <p className="leading-relaxed text-gray-300">
                    {project.description}
                </p>
            </div>

            <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                        <Tag key={techIndex} tech={tech}/>
                    ))}
                </div>
            </div>

            <div className="flex gap-4">
                <motion.a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Github className="size-5"/>
                    <span className="text-sm font-medium">Code</span>
                </motion.a>

                <motion.a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-400 transition-colors hover:text-teal-400"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <ExternalLink className="size-5"/>
                    <span className="text-sm font-medium">Demo</span>
                </motion.a>
            </div>

            <motion.div
                className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-teal-400 to-teal-600"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    )
}

export default function ProjectsSection() {
    {
        if (portfolioData.projects.length === 0) return null
    }
    return (
        <Section id="projects" title="Featured Projects">
            <div className="grid gap-8 lg:grid-cols-2">
                {portfolioData.projects.map((project, index) => (
                    <ProjectBlock key={index} index={index} project={project}/>
                ))}
            </div>
        </Section>
    )
}