'use client'

import React, { useState, useRef } from 'react'
import gsap from 'gsap'
import styles from './FaqAccordion.module.css'

const faqs = [
  {
    q: 'What is your typical project timeline?',
    a: 'For a full-home interior architectural project, the timeline ranges from 4 to 8 months. This includes a 4-6 week rigorous design phase, followed by execution. We do not compromise on quality for speed.'
  },
  {
    q: 'Do you take on single-room renovations?',
    a: 'We specialize in cohesive, full-home transformations. However, we do accept select partial renovations if the scope aligns with our design philosophy and standard of craftsmanship.'
  },
  {
    q: 'Where do you source your materials?',
    a: 'We source globally and locally. Italian limestone, European oak, and local Chettinad teak. Our priority is authenticity—materials that patina beautifully and stand the test of time.'
  }
]

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

  const toggle = (index: number) => {
    if (openIndex === index) {
      gsap.to(contentRefs.current[index], { height: 0, opacity: 0, duration: 0.4, ease: 'power2.inOut' })
      setOpenIndex(null)
    } else {
      if (openIndex !== null) {
        gsap.to(contentRefs.current[openIndex], { height: 0, opacity: 0, duration: 0.4, ease: 'power2.inOut' })
      }
      setOpenIndex(index)
      gsap.to(contentRefs.current[index], { height: 'auto', opacity: 1, duration: 0.5, ease: 'power2.out' })
    }
  }

  return (
    <div className={styles.container}>
      {faqs.map((faq, i) => (
        <div key={i} className={styles.item} onClick={() => toggle(i)}>
          <div className={styles.question}>
            <h3>{faq.q}</h3>
            <div className={`${styles.icon} ${openIndex === i ? styles.openIcon : ''}`}>+</div>
          </div>
          <div 
            className={styles.answerWrapper} 
            ref={(el: HTMLDivElement | null) => { contentRefs.current[i] = el }}
            style={{ height: 0, opacity: 0, overflow: 'hidden' }}
          >
            <div className={styles.answerInner}>
              <p>{faq.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
