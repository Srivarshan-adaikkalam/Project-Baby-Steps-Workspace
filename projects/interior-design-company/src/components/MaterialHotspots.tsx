'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import styles from './MaterialHotspots.module.css'

const hotspots = [
  { id: 'wood', label: 'Ash Wood', x: 25, y: 40, detailX: 10, detailY: 30, scale: 2.5, text: 'Sustainably sourced natural ash wood brings warmth and tactile softness to the space.' },
  { id: 'stone', label: 'Limestone', x: 65, y: 75, detailX: -10, detailY: -30, scale: 2, text: 'Italian limestone floors ground the architecture with subtle, organic texture.' },
  { id: 'light', label: 'Soft Light', x: 80, y: 25, detailX: -20, detailY: 20, scale: 1.8, text: 'Diffused natural light acts as a primary material, shaping the mood of the room.' }
]

export default function MaterialHotspots() {
  const [activeSpot, setActiveSpot] = useState<string | null>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (!imageRef.current) return

    if (activeSpot) {
      const spot = hotspots.find(h => h.id === activeSpot)
      if (spot) {
        gsap.to(imageRef.current, {
          scale: spot.scale,
          xPercent: spot.detailX,
          yPercent: spot.detailY,
          duration: 1.2,
          ease: 'power3.inOut'
        })
      }
    } else {
      gsap.to(imageRef.current, {
        scale: 1,
        xPercent: 0,
        yPercent: 0,
        duration: 1,
        ease: 'power3.inOut'
      })
    }
  }, [activeSpot])

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>Material Intelligence</h2>
        <p>Explore the physical layers that define the space.</p>
      </div>

      <div className={styles.container}>
        <div className={styles.imageWrapper} data-cursor={activeSpot ? "RESET" : ""}>
          <Image 
            ref={imageRef}
            src="/modern.jpg" 
            alt="Materials" 
            fill 
            className={styles.image} 
            onClick={() => setActiveSpot(null)}
          />
          
          {hotspots.map((spot) => (
            <div 
              key={spot.id}
              className={`${styles.hotspot} ${activeSpot === spot.id ? styles.active : ''} ${activeSpot && activeSpot !== spot.id ? styles.hidden : ''}`}
              style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
              onClick={() => setActiveSpot(spot.id)}
              data-cursor="VIEW"
            >
              <div className={styles.dot}></div>
              <div className={styles.label}>{spot.label}</div>
            </div>
          ))}
        </div>

        <div className={`${styles.infoPanel} ${activeSpot ? styles.infoActive : ''}`}>
          {hotspots.map(spot => (
            <div 
              key={`info-${spot.id}`} 
              className={styles.infoContent}
              style={{ display: activeSpot === spot.id ? 'block' : 'none' }}
            >
              <h3>{spot.label}</h3>
              <p>{spot.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
