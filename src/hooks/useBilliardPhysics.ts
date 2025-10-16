'use client'

import {useCallback, useRef} from 'react'

const BALL_SPEED = 1

export interface Ball<T> {
    id: number
    x: number
    y: number
    vx: number
    vy: number
    radius: number
    data: T
}

function normalize(vx: number, vy: number, speed = BALL_SPEED): [number, number] {
    const l = Math.hypot(vx, vy)
    return l === 0 ? [speed, 0] : [(vx / l) * speed, (vy / l) * speed]
}

export function useBilliardPhysics<T>() {
    const ballsMotion = useRef<Ball<T>[]>([])
    const animationRef = useRef<number | null>(null)
    const updateCallbackRef = useRef<((balls: Ball<T>[]) => void) | null>(null)
    const containerRef = useRef<HTMLElement>(null)
    const isAnimatingRef = useRef(false)

    const initializeBalls = useCallback((ballsData: T[], container: HTMLElement, ballRadius: number = 20): Ball<T>[] | null => {
        if (!container) return null
        containerRef.current = container
        const width = container?.clientWidth ?? 0
        const height = container?.clientHeight ?? 0
        if (width === 0 || height === 0) return null

        // Grid-based initial positioning to avoid overlaps
        const cols = Math.ceil(Math.sqrt(ballsData.length))
        const rows = Math.ceil(ballsData.length / cols)
        const cellWidth = width / cols
        const cellHeight = height / rows

        const newBalls: Ball<T>[] = ballsData.map((data, idx) => {
            const angle = Math.random() * Math.PI * 2
            const [vx, vy] = normalize(Math.cos(angle), Math.sin(angle))

            const col = idx % cols
            const row = Math.floor(idx / cols)
            const x = col * cellWidth + cellWidth / 2 + Math.random() * cellWidth - cellWidth / 2
            const y = row * cellHeight + cellHeight / 2 + Math.random() * cellHeight - cellHeight / 2

            return {
                id: idx,
                x: Math.max(ballRadius, Math.min(width - ballRadius, x)),
                y: Math.max(ballRadius, Math.min(height - ballRadius, y)),
                vx,
                vy,
                radius: ballRadius,
                data,
            }
        })
        ballsMotion.current = newBalls
        return newBalls
    }, [])

    const animate = useCallback(() => {
        if (!updateCallbackRef.current || !containerRef.current || !isAnimatingRef.current) return

        const width = containerRef.current.clientWidth
        const height = containerRef.current.clientHeight
        const currentBalls: Ball<T>[] = ballsMotion.current

        // Step 1: Move balls
        currentBalls.forEach(ball => {
            [ball.vx, ball.vy] = normalize(ball.vx, ball.vy)
            ball.x += ball.vx
            ball.y += ball.vy
        })

        for (let i = 0; i < currentBalls.length; i++) {
            const ball: Ball<T> = currentBalls[i]

            // Step 2: Handle wall collisions
            if (ball.x - ball.radius <= 0) {
                ball.x = ball.radius
                ball.vx = -ball.vx
            } else if (ball.x + ball.radius >= width) {
                ball.x = width - ball.radius
                ball.vx = -ball.vx
            }

            if (ball.y - ball.radius <= 0) {
                ball.y = ball.radius
                ball.vy = -ball.vy
            } else if (ball.y + ball.radius >= height) {
                ball.y = height - ball.radius
                ball.vy = -ball.vy
            }

            // Step 3: Handle ball-to-ball collisions
            for (let j = i + 1; j < currentBalls.length; j++) {
                const otherBall = currentBalls[j]
                const dx = otherBall.x - ball.x
                const dy = otherBall.y - ball.y
                const distance = Math.sqrt(dx * dx + dy * dy)
                const minDistance = ball.radius + otherBall.radius

                if (distance < minDistance && distance > 0) {
                    // Collision normal (unit vector)
                    const nx = dx / distance
                    const ny = dy / distance
                    const tx = -ny
                    const ty = nx

                    const p1 = ball.vx * nx + ball.vy * ny
                    const q1 = ball.vx * tx + ball.vy * ty
                    const p2 = otherBall.vx * nx + otherBall.vy * ny
                    const q2 = otherBall.vx * tx + otherBall.vy * ty

                    // Exchange normal velocities
                    const p1_prime = p2
                    const q1_prime = q1
                    const p2_prime = p1
                    const q2_prime = q2

                    ball.vx = p1_prime * nx + q1_prime * tx
                    ball.vy = p1_prime * ny + q1_prime * ty
                    otherBall.vx = p2_prime * nx + q2_prime * tx
                    otherBall.vy = p2_prime * ny + q2_prime * ty

                    // Separate overlapping balls
                    const overlap = minDistance - distance
                    const separation = overlap * 0.5 + 0.5
                    ball.x -= nx * separation
                    ball.y -= ny * separation
                    otherBall.x += nx * separation
                    otherBall.y += ny * separation
                }
            }
        }

        updateCallbackRef.current?.([...currentBalls])

        // Continue animation loop
        if (isAnimatingRef.current) {
            animationRef.current = requestAnimationFrame(animate)
        }
    }, [])

    const startAnimation = useCallback((onUpdate: (balls: Ball<T>[]) => void): void => {
        updateCallbackRef.current = onUpdate
        isAnimatingRef.current = true

        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current)
        }

        animationRef.current = requestAnimationFrame(animate)
    }, [animate])

    const stopAnimation = useCallback((): void => {
        isAnimatingRef.current = false

        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current)
            animationRef.current = null
        }
        updateCallbackRef.current = null
    }, [])

    return {
        initializeBalls,
        startAnimation,
        stopAnimation,
    }
}