'use client'

import React, { useRef, useState, MouseEvent } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import styles from './ComparisonSlider.module.css'

export default function ComparisonSlider() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [sliderPos, setSliderPos] = useState(50)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
    const percent = (x / rect.width) * 100
    
    gsap.to(containerRef.current, {
      '--clip': `${percent}%`,
      duration: 0.2,
      ease: 'power2.out'
    })
    setSliderPos(percent)
  }

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>Concept to Reality</h2>
        <p>From 3D render to tactile completion. Drag to compare.</p>
      </div>

      <div 
        className={styles.container} 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        data-cursor="DRAG"
      >
        <div className={styles.imageBefore}>
          <Image src="/modern.jpg" alt="Concept" fill className={styles.image} />
          <div className={styles.label}>Concept</div>
        </div>
        
        <div className={styles.imageAfter}>
          <Image src="/japandi.jpg" alt="Reality" fill className={styles.image} />
          <div className={styles.label}>Reality</div>
        </div>
        
        <div className={styles.sliderLine} style={{ left: `${sliderPos}%` }}>
          <div className={styles.sliderHandle}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
