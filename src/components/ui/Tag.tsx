'use client'

import { motion } from 'framer-motion'

interface TagProps {
    tech: string
}

export default function Tag({ tech }: TagProps) {
    return <motion.span
        className="rounded-lg bg-teal-400/10 px-3 py-1 text-sm font-medium text-teal-400"
        whileHover={{ scale: 1.05 }}
    >
        {tech}
    </motion.span>
}