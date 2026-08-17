'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { X } from 'lucide-react'
import styles from './ProjectOverlay.module.css'
import MagneticButton from './MagneticButton'

interface ProjectOverlayProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    location: string
    imgSrc: string
  } | null
}

export default function ProjectOverlay({ isOpen, onClose, project }: ProjectOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      gsap.to(overlayRef.current, {
        autoAlpha: 1,
        duration: 0.5,
        ease: 'power2.out'
      })
      gsap.fromTo(contentRef.current, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'expo.out' }
      )
    } else {
      document.body.style.overflow = 'auto'
      gsap.to(overlayRef.current, {
        autoAlpha: 0,
        duration: 0.4,
        ease: 'power2.in'
      })
    }
  }, [isOpen])

  if (!project) return null

  return (
    <div ref={overlayRef} className={styles.overlay} style={{ visibility: 'hidden', opacity: 0 }}>
      <div className={styles.closeBtn} onClick={onClose} data-cursor="CLOSE">
        <X size={32} strokeWidth={1} />
      </div>

      <div className={styles.scrollContainer}>
        <div ref={contentRef} className={styles.content}>
          <div className={styles.hero}>
            <Image 
              src={project.imgSrc}
              alt={project.title}
              fill
              className={styles.heroImg}
            />
            <div className={styles.heroText}>
              <h1>{project.title}</h1>
              <span>{project.location}</span>
            </div>
          </div>

          <div className={styles.story}>
            <div className={styles.storyLeft}>
              <h2>The Concept</h2>
            </div>
            <div className={styles.storyRight}>
              <p>
                A study in restraint and tactile warmth. This space was designed to maximize natural 
                light while grounding the inhabitants with honest materials like Italian limestone and 
                natural ash wood. Every detail, from the custom joinery to the seamless floor transitions, 
                was meticulously crafted to create a sense of calm and permanence.
              </p>
            </div>
          </div>

          <div className={styles.gallery}>
            <div className={styles.galleryImgWrapper}>
              <Image src="/modern.jpg" alt="Detail 1" fill className={styles.galleryImg} />
            </div>
            <div className={styles.galleryImgWrapper}>
              <Image src="/japandi.jpg" alt="Detail 2" fill className={styles.galleryImg} />
            </div>
          </div>

          <div className={styles.nextProject} onClick={onClose} data-cursor="NEXT">
            <h3>Next Project</h3>
            <h2>Heritage Contemporary</h2>
            <div className={styles.nextImgWrapper}>
              <Image src="/japandi.jpg" alt="Next" fill className={styles.nextImg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
