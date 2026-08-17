'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Menu, Search } from 'lucide-react'
import styles from './page.module.css'

import Preloader from '@/components/Preloader'
import MagneticButton from '@/components/MagneticButton'

import MaterialHotspots from '@/components/MaterialHotspots'
import ComparisonSlider from '@/components/ComparisonSlider'
import FaqAccordion from '@/components/FaqAccordion'

export default function Home() {
  const [loading, setLoading] = useState(true)

  const heroRef = useRef<HTMLDivElement>(null)
  const heroImageRef = useRef<HTMLImageElement>(null)
  const introTextRef = useRef<HTMLHeadingElement>(null)
  const philSectionRef = useRef<HTMLDivElement>(null)
  const philImgRef = useRef<HTMLImageElement>(null)
  const roadmapSectionRef = useRef<HTMLDivElement>(null)
  const roadmapContainerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (loading) return

    gsap.registerPlugin(ScrollTrigger)
    let ctx = gsap.context(() => {
      
      // 1. Hero Entrance (Cinematic Pull-In) & Scroll Push
      const tl = gsap.timeline()
      gsap.set(heroImageRef.current, { scale: 1.2, filter: 'blur(10px)' })
      gsap.set('.hero-title-mask', { yPercent: 115 })

      tl.to(heroImageRef.current, {
        scale: 1,
        filter: 'blur(0px)',
        duration: 2.5,
        ease: 'power3.out'
      }, 0.2)
      .to('.hero-title-mask', {
        yPercent: 0,
        stagger: 0.15,
        duration: 1.5,
        ease: 'expo.out'
      }, 0.8)

      // Hero Scroll Push-In
      gsap.to(heroImageRef.current, {
        scale: 1.5,
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      })

      gsap.to('.heroOverlay', {
        opacity: 0,
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      })

      // 2. Intro Text Stagger
      if (introTextRef.current) {
        const chars = introTextRef.current.querySelectorAll('.char')
        gsap.fromTo(chars, 
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.02,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: introTextRef.current,
              start: 'top 80%',
              end: 'bottom 60%',
              scrub: 0.5
            }
          }
        )
      }

      // 3. Details Asymmetrical Pinned Zoom
      if (philSectionRef.current) {
        // Pin the right image side while scrolling left text
        ScrollTrigger.create({
          trigger: philSectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: '.philRight',
          pinSpacing: false
        })

        // Pan and zoom the image based on scroll depth
        gsap.to('.detailsImage', {
          scale: 1.5,
          yPercent: 15,
          xPercent: -10,
          ease: 'none',
          scrollTrigger: {
            trigger: philSectionRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true
          }
        })
        
        // Highlight active text boxes
        const boxes = gsap.utils.toArray('.philContentBox')
        boxes.forEach((box: any) => {
          gsap.to(box, {
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: box,
              start: 'top 50%',
              end: 'bottom 50%',
              toggleActions: 'play reverse play reverse'
            }
          })
        })
      }

      // 4. Horizontal Roadmap
      if (roadmapSectionRef.current && roadmapContainerRef.current) {
        const steps = gsap.utils.toArray('.roadmapStep')
        
        // Background Parallax
        gsap.to('.roadmapBgImage', {
          xPercent: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: roadmapSectionRef.current,
            start: 'top top',
            end: () => "+=" + roadmapContainerRef.current?.offsetWidth,
            scrub: true
          }
        })

        // Horizontal scrolling of steps
        gsap.to(steps, {
          xPercent: -100 * (steps.length - 1.5),
          ease: 'none',
          scrollTrigger: {
            trigger: roadmapSectionRef.current,
            pin: true,
            scrub: 1,
            end: () => "+=" + roadmapContainerRef.current?.offsetWidth
          }
        })
        
        // Fade in/out steps based on position
        steps.forEach((step: any, i) => {
          gsap.fromTo(step, 
            { opacity: 0.2, scale: 0.9 },
            {
              opacity: 1,
              scale: 1,
              ease: 'power1.inOut',
              scrollTrigger: {
                trigger: roadmapSectionRef.current,
                start: () => `top top-=${i * (roadmapContainerRef.current!.offsetWidth / steps.length * 0.7)}`,
                end: () => `top top-=${(i + 1) * (roadmapContainerRef.current!.offsetWidth / steps.length * 0.7)}`,
                scrub: true,
                toggleActions: 'play reverse play reverse'
              }
            }
          )
        })
      }

    })
    
    return () => ctx.revert()
  }, [loading])

  // Helper to wrap characters for staggering
  const wrapChars = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} className="char">{char}</span>
    ))
  }

  // Handlers for opening projects
  const handleProjectClick = (title: string, location: string, imgSrc: string) => {
    setActiveProject({ title, location, imgSrc })
  }

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <ProjectOverlay isOpen={!!activeProject} onClose={() => setActiveProject(null)} project={activeProject} />
      
      <main className={styles.main} style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.8s ease' }}>
        
        {/* 1. HERO SECTION */}
        <section className={styles.heroSection}>
          <div className={styles.heroContainer} ref={heroRef}>
            <Image 
              src="/hero.jpg" 
              alt="Ravi Interiors Architecture"
              fill
              className={styles.heroImage}
              ref={heroImageRef}
              priority
              sizes="100vw"
            />
            <div className={styles.heroOverlay}>
              <h1 className={styles.heroTitle}>
                <div style={{ overflow: 'hidden' }}><span className="hero-title-mask" style={{ display: 'block' }}>SPACES DESIGNED</span></div>
                <div style={{ overflow: 'hidden' }}><span className="hero-title-mask" style={{ display: 'block' }}>TO FEEL LIKE <span>You.</span></span></div>
              </h1>
            </div>
          </div>
        </section>

        {/* 2. INTRODUCTION */}
        <section className={styles.introSection}>
          <h2 className={styles.introText} ref={introTextRef}>
            {wrapChars("We believe true luxury is tactile. By blending regional Indian craftsmanship with modern architectural precision, we create environments that ground you in reality while elevating your state of being.")}
          </h2>
        </section>

        {/* 3. IT'S IN THE DETAILS */}
        <section className={styles.detailsSection} ref={philSectionRef}>
          <div className={styles.detailsHeader}>
            <h2>It's in the Details.</h2>
          </div>
          <div className={styles.detailsContainer}>
            <div className={`${styles.detailsLeft} philLeft`}>
              <div className={`${styles.detailsContentBox} philContentBox`}>
                <h3>01 — Natural Light</h3>
                <p>Positioning windows and openings to maximize daylight and create shifting shadow play across the surfaces.</p>
              </div>
              <div className={`${styles.detailsContentBox} philContentBox`}>
                <h3>02 — Material Contrast</h3>
                <p>Warm wood balanced against cool stone and neutral surfaces, grounding the space in reality.</p>
              </div>
              <div className={`${styles.detailsContentBox} philContentBox`}>
                <h3>03 — Layered Lighting</h3>
                <p>Ambient, task, and accent lighting mapped precisely to create depth and atmosphere after dusk.</p>
              </div>
            </div>
            
            <div className={`${styles.detailsRight} philRight`}>
              <div className={styles.detailsImgWrapper} ref={philImgRef}>
                <Image 
                  src="/japandi.jpg" 
                  alt="Design Details" 
                  fill 
                  sizes="50vw" 
                  className={`${styles.detailsImage} detailsImage`}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 4. FEATURED PROJECTS */}
        <section className={styles.projectsSection}>
          <div className={styles.projectsHeader}>
            <h2>Selected Works</h2>
            <MagneticButton className={styles.contactBtn}>View Archive</MagneticButton>
          </div>
          
          <div className={styles.projectsGrid}>
            <div className={styles.projectCard} data-cursor="EXPLORE" onClick={() => handleProjectClick("The Courtyard Residence", "Chennai", "/modern.jpg")}>
              <div className={styles.projectImgWrapper}>
                <Image src="/modern.jpg" alt="Courtyard" fill sizes="(max-width: 768px) 100vw, 50vw" className={styles.projectImg} />
              </div>
              <div className={styles.projectMeta}>
                <h3>The Courtyard Residence</h3>
                <span>Chennai</span>
              </div>
            </div>
            
            <div className={styles.projectCard} data-cursor="EXPLORE" onClick={() => handleProjectClick("Warm Minimal Home", "Coimbatore", "/hero.jpg")}>
              <div className={styles.projectImgWrapper}>
                <Image src="/hero.jpg" alt="Minimal" fill sizes="(max-width: 768px) 100vw, 50vw" className={styles.projectImg} />
              </div>
              <div className={styles.projectMeta}>
                <h3>Warm Minimal Home</h3>
                <span>Coimbatore</span>
              </div>
            </div>

            <div className={styles.projectCard} data-cursor="EXPLORE" onClick={() => handleProjectClick("Heritage Contemporary", "Madurai", "/japandi.jpg")}>
              <div className={styles.projectImgWrapper}>
                <Image src="/japandi.jpg" alt="Heritage" fill sizes="100vw" className={styles.projectImg} />
              </div>
              <div className={styles.projectMeta}>
                <h3>Heritage Contemporary</h3>
                <span>Madurai</span>
              </div>
            </div>
          </div>
        </section>

        {/* 5. ROADMAP / PROCESS */}
        <section className={styles.roadmapSection} ref={roadmapSectionRef}>
          <div className={styles.roadmapBgWrapper}>
            <Image src="/modern.jpg" alt="Design Process" fill sizes="100vw" className={`${styles.roadmapBgImage} roadmapBgImage`} />
            <div className={styles.roadmapBgOverlay}></div>
          </div>
          <div className={styles.roadmapContainer} ref={roadmapContainerRef}>
            <div className={`${styles.roadmapStep} roadmapStep`}>
              <div className={styles.stepNumber}>01</div>
              <h3>Discover</h3>
              <p>Understanding your lifestyle, habits, and spatial needs through in-depth consultation.</p>
            </div>
            <div className={`${styles.roadmapStep} roadmapStep`}>
              <div className={styles.stepNumber}>02</div>
              <h3>Concept</h3>
              <p>Translating requirements into spatial flow, mood boards, and initial architectural geometry.</p>
            </div>
            <div className={`${styles.roadmapStep} roadmapStep`}>
              <div className={styles.stepNumber}>03</div>
              <h3>Design</h3>
              <p>Rigorous 3D visualization, material sourcing, and precise technical drafting.</p>
            </div>
            <div className={`${styles.roadmapStep} roadmapStep`}>
              <div className={styles.stepNumber}>04</div>
              <h3>Execute</h3>
              <p>On-site management and flawless execution by our master craftsmen.</p>
            </div>
            <div className={`${styles.roadmapStep} roadmapStep`}>
              <div className={styles.stepNumber}>05</div>
              <h3>Reveal</h3>
              <p>The handover of a space that is impeccably finished and ready for life.</p>
            </div>
          </div>
        </section>

        {/* 6. MATERIALS */}
        <MaterialHotspots />

        {/* 6.5 CONCEPT TO REALITY SLIDER */}
        <ComparisonSlider />

        {/* 7. SMART CONTACT & FAQ */}
        <section className={styles.contactSection}>
          <div className={styles.contactGrid}>
            <div className={styles.contactLeft}>
              <h2>Ready to begin?</h2>
              <p>Whether you have a fully formed vision or just a feeling of what you want your space to be, we are here to listen.</p>
              
              <div className={styles.contactForm}>
                <input type="text" placeholder="Your Name" className={styles.inputField} />
                <input type="email" placeholder="Your Email" className={styles.inputField} />
                <textarea placeholder="Tell us about your project..." className={styles.textArea}></textarea>
                <MagneticButton className={styles.submitBtn}>
                  Send Inquiry
                </MagneticButton>
              </div>
            </div>
            
            <div className={styles.contactRight}>
              <div className={styles.faqWrapper}>
                <h3 className={styles.faqTitle}>Frequently Asked</h3>
                <FaqAccordion />
              </div>
            </div>
          </div>
          
          <footer className={styles.footerBottom}>
            <div className={styles.footerLinks}>
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
              <a href="#">Pinterest</a>
            </div>
            <div className={styles.footerMeta}>
              <span>© 2026 Ravi Interiors</span>
              <span>Chennai, India</span>
            </div>
          </footer>
        </section>

      </main>
    </>
  )
}
