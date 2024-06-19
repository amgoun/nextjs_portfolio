'use client'
import {
  KeyframeOptions,
  animate,
  useInView,
  useIsomorphicLayoutEffect
} from 'framer-motion'
import { useRef } from 'react'

type AnimatedCounterProps = {
  from: number
  to: number
  animationOptions?: KeyframeOptions
}

export default function AnimatedCounter({
  from,
  to,
  animationOptions
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inview = useInView(ref, { once: true })

  useIsomorphicLayoutEffect(() => {
    const element = ref.current
    if (!element) return
    if (!inview) return

    element.textContent = String(from)
    const controls = animate(from, to, {
      duration: 1.5,
      ease: 'easeOut',
      delay: 0.6,
      ...animationOptions,
      onUpdate(value) {
        element.textContent = value.toFixed(0)
      }
    })
    return () => {
      controls.stop
    }
  }, [ref, inview, from, to])

  return <span ref={ref} />
}
