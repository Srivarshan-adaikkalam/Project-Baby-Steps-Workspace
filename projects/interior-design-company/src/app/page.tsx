'use client'

import { useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import styles from './page.module.css'

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroImageRef = useRef<HTMLImageElement>(null)
  const headerRef = useRef<HTMLHeadingElement>(null)
  const archesRef = useRef<HTMLDivElement>(null)
  const archImagesRef = useRef<(HTMLImageElement | null)[]>([])

  useLayoutEffect(() => {
    // 1. The Camera Pull-Back Hero Reveal
    const tl = gsap.timeline()
    
    // Start with image scaled up and blurred
    gsap.set(heroImageRef.current, { scale: 1.3, filter: 'blur(10px)' })
    gsap.set(heroRef.current, { borderRadius: '0px', width: '100vw', height: '100vh' })
    gsap.set(headerRef.current, { y: 100, opacity: 0, rotateX: -45, transformPerspective: 1000 })

    tl.to(heroImageRef.current, {
      scale: 1,
      filter: 'blur(0px)',
      duration: 2,
      ease: 'expo.out'
    }, 0)
    .to(heroRef.current, {
      borderRadius: '24px',
      width: '90vw',
      height: '80vh',
      marginTop: '10vh',
      duration: 2,
      ease: 'expo.out'
    }, 0)
    .to(headerRef.current, {
      y: 0,
      opacity: 1,
      rotateX: 0,
      duration: 1.5,
      ease: 'power3.out'
    }, 0.5)

    // 2. The Arched Parallax Pan
    const archElements = gsap.utils.toArray('.arch-mask')
    
    ScrollTrigger.create({
      trigger: archesRef.current,
      start: 'top 80%',
      animation: gsap.from(archElements, {
        y: 150,
        opacity: 0,
        stagger: 0.1,
        duration: 1.5,
        ease: 'power3.out'
      })
    })

    archImagesRef.current.forEach((img, i) => {
      if (img) {
        gsap.to(img, {
          y: '20%', // Parallax down as we scroll down
          ease: 'none',
          scrollTrigger: {
            trigger: archElements[i] as Element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        })
      }
    })

  }, [])

  return (
    <main className={styles.main}>
      
      {/* Navbar Placeholder */}
      <nav className={styles.nav}>
        <div className={styles.logo}>Interior Hub</div>
        <div className={styles.links}>
          <span>Home</span>
          <span>About</span>
          <span>Portfolio</span>
          <span>Contact</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer} ref={heroRef}>
          <Image 
            src="/hero.jpg" 
            alt="3D Architectural Cross Section"
            fill
            className={styles.heroImage}
            ref={heroImageRef}
            priority
          />
          <div className={styles.heroOverlay}>
            <h1 ref={headerRef}>We organize your<br/>home in a creative way</h1>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statBox}>
          <h3>100%</h3>
          <p>Client Satisfaction</p>
        </div>
        <div className={styles.statBox}>
          <h3>1050+</h3>
          <p>Positive Reviews</p>
        </div>
        <div className={styles.statBox}>
          <h3>6000+</h3>
          <p>Successful Projects</p>
        </div>
      </section>

      {/* Arched Portfolio Section */}
      <section className={styles.portfolioSection} ref={archesRef}>
        <div className={styles.portfolioHeader}>
          <h2>Recent Projects</h2>
          <button className={styles.contactBtn}>Contact Us</button>
        </div>
        
        <div className={styles.archesContainer}>
          
          <div className={`${styles.archMask} arch-mask`}>
            <div className={styles.archImageWrapper}>
              <Image 
                src="/japandi.jpg" 
                alt="Japandi Living Room" 
                fill 
                className={styles.archImg}
                ref={el => { archImagesRef.current[0] = el }}
              />
            </div>
            <div className={styles.archLabel}>Japandi Minimalist</div>
          </div>

          <div className={`${styles.archMask} ${styles.archTall} arch-mask`}>
            <div className={styles.archImageWrapper}>
              <Image 
                src="/modern.jpg" 
                alt="Modern Minimalist" 
                fill 
                className={styles.archImg}
                ref={el => { archImagesRef.current[1] = el }}
              />
            </div>
            <div className={styles.archLabel}>Modern Elegance</div>
          </div>

          <div className={`${styles.archMask} arch-mask`}>
            <div className={styles.archImageWrapper}>
              <Image 
                src="/hero.jpg" 
                alt="Architectural Render" 
                fill 
                className={styles.archImg}
                ref={el => { archImagesRef.current[2] = el }}
              />
            </div>
            <div className={styles.archLabel}>Cross Section Studio</div>
          </div>

        </div>
      </section>

      {/* Footer Spacer */}
      <footer className={styles.footer}>
        <h2>Experience the Space</h2>
      </footer>

    </main>
  )
}
