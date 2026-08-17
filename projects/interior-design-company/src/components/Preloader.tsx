'use client'

import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let ctx = gsap.context(() => {
      const obj = { val: 0 }
      
      gsap.to(obj, {
        val: 100,
        duration: 2.5,
        ease: 'power3.inOut',
        onUpdate: () => {
          setProgress(Math.floor(obj.val))
        },
        onComplete: () => {
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 1.2,
            ease: 'power4.inOut',
            onComplete: onComplete
          })
        }
      })
    }, containerRef)
    
    return () => ctx.revert()
  }, [onComplete])

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'var(--bg-canvas)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '2rem 4vw',
        color: 'var(--text-dark)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <h1 style={{ fontSize: '10vw', fontFamily: 'var(--font-heading)', fontWeight: 500, lineHeight: 0.9, letterSpacing: '-0.02em', color: 'var(--text-dark)' }}>
          RAVI
        </h1>
        <div ref={counterRef} style={{ fontSize: '4vw', fontFamily: 'var(--font-body)', fontWeight: 300 }}>
          {progress}%
        </div>
      </div>
    </div>
  )
}
