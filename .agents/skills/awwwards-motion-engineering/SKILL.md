---
name: awwwards-motion-engineering
description: Engineering Awwwards-winning creative web animations, GSAP ScrollTrigger timelines, Lenis smooth inertia scrolling, SVG path morphing, clip-path reveals, magnetic spring physics, and WebGL shader distortions.
---

# Awwwards Motion Engineering & Creative Frontend Mastery

This skill equips the agent with industry-leading frontend animation techniques inspired by top Awwwards "Site of the Day" winners and creative coding masters (e.g. Olivier Larose, Hyperplexed, Codegrid, Yuri Artiukh, Juxtopposed).

---

## 1. Core Physics & Easing Mathematics

Avoid generic CSS transitions (`ease`, `ease-in-out`). Use cubic-bezier curves with high deceleration or spring physics:

```css
:root {
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-out-circ: cubic-bezier(0, 0.55, 0.45, 1);
  --ease-out-back: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-in-out-expo: cubic-bezier(0.87, 0, 0.13, 1);
  --spring-snappy: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
```

### GSAP Custom Easings
```javascript
gsap.to(element, {
  y: 0,
  opacity: 1,
  duration: 1.2,
  ease: "power4.out",
  stagger: 0.08
});
```

---

## 2. Lenis Smooth Inertia Scrolling & GSAP Integration

Never let scrolling feel jerky or disjointed. Always synchronize smooth scroll physics with GSAP ScrollTrigger:

```javascript
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  wheelMultiplier: 1,
  orientation: 'vertical',
  gestureOrientation: 'vertical'
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
```

---

## 3. Scrollytelling, Pinned Sections & SVG Vehicle Dispatch

1. **Pinned Narratives**: Pin the screen while the user scrolls through milestones, rotating or advancing a visual focal point (such as a 3D model, vehicle, or journal).
2. **SVG Path Tracing & Car Following**:
   ```javascript
   const path = document.getElementById('road-svg-path');
   const pathLength = path.getTotalLength();
   
   ScrollTrigger.create({
     trigger: '.scrollytelling-section',
     start: 'top top',
     end: 'bottom bottom',
     scrub: 1,
     onUpdate: (self) => {
       const point = path.getPointAtLength(self.progress * pathLength);
       const nextPoint = path.getPointAtLength(Math.min(pathLength, (self.progress + 0.01) * pathLength));
       const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI);
       
       gsap.set('#vehicle', {
         x: point.x,
         y: point.y,
         rotation: angle,
         transformOrigin: "center center"
       });
     }
   });
   ```

---

## 4. Magnetic Physics & Interactive Spotlights (Hyperplexed Style)

Buttons, badges, and icons should gravitate toward the cursor when hovered:

```javascript
document.querySelectorAll('.magnetic-target').forEach((btn) => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
    
    gsap.to(btn, {
      x: x,
      y: y,
      duration: 0.4,
      ease: "power2.out"
    });
  });

  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1.2, 0.4)"
    });
  });
});
```

---

## 5. Kinetic Typography & Clip-Path Text Masking

Award-winning headline reveals use staggered line-by-line clipping with `overflow: hidden` containers:

```html
<div class="line-mask"><span class="line-text">CRAFTING SPACES</span></div>
<div class="line-mask"><span class="line-text">THAT TRANSCEND</span></div>
```

```css
.line-mask {
  overflow: hidden;
  display: block;
}
.line-text {
  display: inline-block;
  transform: translateY(115%);
  transition: transform 1.2s var(--ease-out-expo);
}
.reveal-active .line-text {
  transform: translateY(0%);
}
```

---

## 7. Motion Primitives & Haikei Vector Design References

- **Motion Primitives** (`https://motion-primitives.com` & `https://github.com/ibelick/motion-primitives`):
  - Pre-built animated UI primitives, spring-animated dialogs, text shimmer, magnetic pull buttons, border trails, and morphing card layouts.
- **Haikei Vector Generator** (`https://haikei.app`):
  - Generative SVG wave scenes, organic blob scatters, layered stacked waves, polygon grids, and mesh gradients for lightweight, scalable web backgrounds.

