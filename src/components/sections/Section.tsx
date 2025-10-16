'use client'

import {motion} from 'framer-motion'
import {ReactElement} from 'react'

type Props = {
    id: string,
    title: string,
    classList?: string,
    children: ReactElement | ReactElement[]
};

export default function Section(props: Props) {
    return (
        <section id={props.id} className="section flex items-center justify-center section-snap">
            <div className="container">
                <motion.div
                    className={props.classList}
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    viewport={{once: true}}
                >
                    <h2 className="mb-16 text-4xl font-bold text-white md:text-5xl">
                        {props.title}
                    </h2>

                    {props.children}
                </motion.div>
            </div>
        </section>
    )
}