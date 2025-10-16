'use client'

import {useEffect, useRef, useState} from 'react'

interface UseIntersectionObserverOptions {
    threshold?: number
    rootMargin?: string
    triggerOnce?: boolean
}

export function useIntersectionObserver(options: UseIntersectionObserverOptions = {}) {
    const [isInView, setIsInView] = useState(false)
    const [hasBeenInView, setHasBeenInView] = useState(false)
    const elementRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const element = elementRef.current
        if (!element) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const inView = entry.isIntersecting
                    setIsInView(inView)

                    if (inView && !hasBeenInView) {
                        setHasBeenInView(true)
                    }
                })
            },
            {
                threshold: options.threshold ?? 0.3,
                rootMargin: options.rootMargin ?? '0px',
            },
        )

        observer.observe(element)
        return () => observer.disconnect()
    }, [hasBeenInView, options.threshold, options.rootMargin])

    return {elementRef, isInView, hasBeenInView}
}