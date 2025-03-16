import { motion, useAnimationControls } from 'framer-motion'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

const AnimatedDots = () => {
  return (
    <>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 3,
          times: [0, 0.2, 0.9, 1],
          repeat: Infinity
        }}
      >
        .
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 3,
          times: [0, 0.4, 0.9, 1],
          repeat: Infinity
        }}
      >
        .
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 3,
          times: [0, 0.6, 0.9, 1],
          repeat: Infinity
        }}
      >
        .
      </motion.span>
    </>
  )
}

interface LoaderProps {
  duration?: number // animation duration in seconds
  text?: string // text to display below the loader
  onComplete?: () => void // callback when animation completes
}

export const Loader = ({ duration = 5, text, onComplete }: LoaderProps) => {
  const [percent, setPercent] = useState(1)
  const controls = useAnimationControls()

  useEffect(() => {
    const startTime = Date.now()

    const animateLoader = async () => {
      await controls.start({
        strokeDasharray: '0 100',
        pathLength: 1,
        transition: {
          duration: duration,
          ease: 'linear'
        }
      })
    }

    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime
      const progress = Math.min(100, 1 + (elapsedTime / (duration * 1000)) * 99)

      if (progress >= 100) {
        clearInterval(interval)
        setPercent(100)
        onComplete?.()
      } else {
        setPercent(Math.round(progress))
      }
    }, 100)

    animateLoader()

    return () => clearInterval(interval)
  }, [duration, controls, onComplete])

  return (
    <div className={styles.loader}>
      <div className={styles.loader__animation}>
        <svg viewBox='0 0 252 252' className={styles.loader__circle}>
          <circle
            cx='126'
            cy='126'
            r='120'
            fill='none'
            strokeWidth='12'
            className={styles.loader__circle_background}
          />
          <motion.circle
            cx='126'
            cy='126'
            r='120'
            fill='none'
            strokeWidth='12'
            className={styles.loader__circle_progress}
            initial={{ pathLength: 0 }}
            animate={controls}
          />
        </svg>
        <p className={styles.loader__percent}>{Math.round(percent)}%</p>
      </div>
      {text && (
        <div className={styles.loader__text}>
          <p>
            {text}
            <AnimatedDots />
          </p>
        </div>
      )}
    </div>
  )
}
