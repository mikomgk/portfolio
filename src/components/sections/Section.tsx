'use client'

import { motion } from 'framer-motion'
import { ReactElement } from 'react'

type SectionProps = {
    id: string,
    title: string,
    classList?: string,
    children: ReactElement | ReactElement[]
};

export default function Section({ id, title, classList, children }: SectionProps) {
    return (
        <section id={id} className="section flex items-center justify-center section-snap">
            <div className="container">
                <motion.div
                    className={classList}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="mb-16 text-4xl font-bold text-white md:text-5xl">
                        {title}
                    </h2>

                    {children}
                </motion.div>
            </div>
        </section>
    )
}