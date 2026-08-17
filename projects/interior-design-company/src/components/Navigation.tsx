'use client'

import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Menu } from 'lucide-react'
import styles from './Navigation.module.css'

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Nav floating effect
    ScrollTrigger.create({
      start: 'top -50',
      end: 99999,
      onToggle: (self) => setIsScrolled(self.isActive)
    })

    // Scroll progress indicator
    gsap.to(progressRef.current, {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <>
      {/* Top Floating Navigation */}
      <nav ref={navRef} className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.logo} data-cursor="HOME">RAVI</div>
        
        <div className={styles.links}>
          <span data-cursor="VIEW">Studio</span>
          <span data-cursor="VIEW">Portfolio</span>
          <span data-cursor="VIEW">Journal</span>
        </div>

        <div className={styles.menuIcon} data-cursor="MENU">
          <Menu size={20} strokeWidth={1.5} />
        </div>
      </nav>

      {/* Global Scroll Progress */}
      <div className={styles.progressContainer}>
        <div className={styles.progressTrack}>
          <div ref={progressRef} className={styles.progressBar}></div>
        </div>
        <div className={styles.progressNumbers}>
          <span>01</span>
          <span>05</span>
        </div>
      </div>
    </>
  )
}
