---
name: 3d-book-physics
description: Realistic GPU-accelerated 3D hinged book cover lift, bookshelf elevation, dual-sided 3D page-turn physics, and optical shadow gradients for web interfaces.
---

# 3D Book Physics & Bookshelf Scrollytelling Skill

This skill documents high-performance, GPU-accelerated 3D book physics for luxury web applications, scrollytelling journeys, and digital portfolio diaries.

## Core Principles

1. **Right-Side Bookshelf Flying Exchange**:
   - Books stand vertically inside a 3D wooden library shelf on the right side of the reading stage (`.right-bookshelf-rack`).
   - As scroll progress triggers a new milestone chapter, the active book on stage flies back into its shelf slot (`x: 320px`, `scale: 0.5`, `opacity: 0`), while the target book pulls out of its right shelf slot (`x: 320px -> 0px`), flies in a 3D arc across the stage (`scale: 1`), and opens its cover.

2. **Hinged Cover 3D Hover & Spring Physics**:
   - Hinge rotation axis set to spine: `transform-origin: left center` (for right-opening cover) or `transform-origin: right center` (for left-opening cover).
   - On hover, cover rotates `rotateY(-25deg)` using `elastic.out(1, 0.45)` physics with dynamic shadow cast.

3. **Dual-Sided Page Flip Engine**:
   - Each page sheet consists of a `.pg-front` and `.pg-back` with `backface-visibility: hidden`.
   - Flipping page sheet rotates `rotateY(-180deg)` over `0.8s` with `cubic-bezier(0.645, 0.045, 0.355, 1)`.
   - Dynamic dark gradient shadow overlay (`opacity` 0 -> 0.7 -> 0) sweeps across the page crease during rotation.

4. **Silent & 60FPS GPU-Accelerated Visual Physics**:
   - Zero audio stutter; all motion relies on high-60fps hardware accelerated CSS3 and GSAP transforms (`transform: translate3d/rotate3d`, `will-change: transform`).

```javascript
// Example 3D Page Turn Implementation
function flipPage(sheetEl, isForward) {
  const targetDeg = isForward ? -180 : 0;
  gsap.to(sheetEl, {
    rotateY: targetDeg,
    duration: 0.75,
    ease: 'power3.inOut',
    transformOrigin: 'left center',
  });
}
```
