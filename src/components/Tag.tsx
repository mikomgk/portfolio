'use client'

import {motion} from 'framer-motion'

export default function Tag(props: { tech: string }) {
    return <motion.span
        className="rounded-lg bg-teal-400/10 px-3 py-1 text-sm font-medium text-teal-400"
        whileHover={{scale: 1.05}}
    >
        {props.tech}
    </motion.span>
}