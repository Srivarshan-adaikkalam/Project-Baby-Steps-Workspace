'use client'

import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { audioEngine } from '@/lib/AudioEngine'

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

export default function MagneticButton({ children, className = '', ...props }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const btn = buttonRef.current
    if (!btn) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) * 0.35
      const y = (e.clientY - rect.top - rect.height / 2) * 0.35

      gsap.to(btn, {
        x: x,
        y: y,
        duration: 0.4,
        ease: 'power2.out'
      })
    }

    const handleMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: 'elastic.out(1.2, 0.4)'
      })
    }

    const handleMouseEnter = () => {
      audioEngine.playStoneClick()
    }

    btn.addEventListener('mousemove', handleMouseMove)
    btn.addEventListener('mouseleave', handleMouseLeave)
    btn.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      btn.removeEventListener('mousemove', handleMouseMove)
      btn.removeEventListener('mouseleave', handleMouseLeave)
      btn.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  return (
    <button ref={buttonRef} className={`magnetic-target ${className}`} {...props}>
      {children}
    </button>
  )
}
