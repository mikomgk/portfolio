'use client'

import {useCallback, useEffect, useRef, useState} from 'react'
import {portfolioData} from '@/data/portfolio'
import {Skill} from '@/types'
import {Ball, useBilliardPhysics} from '@/hooks/useBilliardPhysics'

export default function FloatingSkills() {
    const [balls, setBalls] = useState<Ball<Skill>[]>([])
    const {initializeBalls, startAnimation, stopAnimation} = useBilliardPhysics<Skill>()
    const containerRef = useRef<HTMLDivElement>(null)
    const [isInitialized, setIsInitialized] = useState(false)


    const updateBalls = useCallback((newBalls: Ball<Skill>[]) => {
        setBalls(newBalls)
    }, [])

    useEffect(() => {
        if (isInitialized || !containerRef.current) return

        const initialBalls = initializeBalls(portfolioData.skills, containerRef.current)

        if (initialBalls) {
            setBalls(initialBalls)
            setIsInitialized(true)
        }
    }, [initializeBalls, isInitialized, containerRef])

    useEffect(() => {
        if (!isInitialized) return

        startAnimation(updateBalls)

        return () => stopAnimation()
    }, [startAnimation, stopAnimation, updateBalls, isInitialized])

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 sm:left-(--navigation-width) overflow-hidden pointer-events-none z-0"
        >
            {balls.map((ball) => (
                <ball.data.icon
                    color="default"
                    key={ball.id}
                    className={`absolute pointer-events-none select-none opacity-20 ${ball.data.class}`}
                    style={{
                        width: ball.radius * 2,
                        height: ball.radius * 2,
                        transform: `translate(${ball.x - ball.radius}px, ${ball.y - ball.radius}px)`,
                        willChange: 'transform',
                    }}
                />
            ))}
        </div>
    )
}