'use client'

import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import styles from './CustomCursor.module.css'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [text, setText] = useState('')
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return
    }

    const cursor = cursorRef.current
    if (!cursor) return

    // Use GSAP quickTo for highly performant tracking
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.15, ease: 'power3' })
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.15, ease: 'power3' })

    const onMouseMove = (e: MouseEvent) => {
      xTo(e.clientX)
      yTo(e.clientY)
    }

    // Event delegation to check for data-cursor attributes
    const onMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('[data-cursor]') as HTMLElement
      if (target) {
        const cursorType = target.getAttribute('data-cursor') || ''
        setText(cursorType)
        setIsActive(true)
        gsap.to(cursor, { scale: 1, duration: 0.3, ease: 'power2.out' })
      } else {
        setIsActive(false)
        gsap.to(cursor, { scale: 0.2, duration: 0.3, ease: 'power2.out' })
        setText('')
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onMouseOver)

    // Initial small scale
    gsap.set(cursor, { scale: 0.2, xPercent: -50, yPercent: -50 })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
    }
  }, [])

  // Do not render on server to prevent hydration mismatch
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <div 
      ref={cursorRef} 
      className={`${styles.cursor} ${isActive ? styles.active : ''}`}
    >
      <div className={styles.cursorText}>{text}</div>
    </div>
  )
}
