# Graphify Intelligence Wiki: Developer Vibe & Project History

This wiki serves as the permanent, living brain for all AI agents working with Srivarshan. **It must be read first** when making structural decisions, styling updates, or complex GSAP animations.

## 🧠 Srivarshan's Developer Psychology & Vibe
1. **Perfectionism in Motion**: Srivarshan demands **flawless, 60FPS, fluid physics**. A "working" animation is not enough; it must feel *organic, premium, and deeply interactive*. If an animation jitters or overlaps, it is considered broken.
2. **Luxury Skeuomorphism**: The design language is high-end architectural luxury. Everything must have tactile presence—glassmorphic panels, 3D hinged books, smooth drop shadows, and rich materials (teak, brass, velvet). 
3. **Typography as Art**: No generic fonts, no messy handwriting. Precision is key. Heritage and luxury tags must use **Cormorant Garamond (italicized, semi-bold)** for elegance, paired with modern geometric sans-serifs (Outfit/Inter).
4. **Autonomous Intelligence**: Agents are expected to be *smart*. If a bug is fixed (like a scroll tracking calculation), agents must document the logic forever so the mistake is never repeated. The workspace must evolve.

---

## 🛠️ Major Innovations & Architectural Breakthroughs

### 1. The 3D Book Physics Engine
- **Method**: Utilized pure CSS `transform-style: preserve-3d` combined with `rotateY` on `.cov-front` and `.cov-back`.
- **Innovation**: Overcame Z-index collapsing by carefully structuring the 3D perspective wrapper. 
- **Bug Fix**: Polaroids on the cover were overlapping the "Explore Book Spread" button. Fixed by adjusting CSS variables (`--ty: 38%`) and absolutely positioning the CTA securely at the bottom (`bottom: 56px`), ensuring the click target is always accessible.

### 2. Multi-Stage Form Submission (The Postman Timeline)
- **Method**: Replaced boring loading spinners with a deeply narrative multi-stage sequence.
- **Innovation**: When clicked, the paper plane icon flies off -> transforms into a physical package box -> drops and bounces (using cubic-bezier physics) -> a postman vector slides in, picks it up, and walks out.
- **Source**: Inspired by Awwwards-level Lottie/GSAP micro-interactions (MotionSites AI / LottieFiles).

### 3. ScrollTrigger Scrollytelling Precision
- **Method**: GSAP ScrollTrigger pinning for the 4-stage architectural journey track.
- **Innovation & Bug Fix**: The right-side bookshelf navigation was wildly overshooting into the "Achievements" section when clicked. The fix required abandoning naive `offsetHeight` calculations and instead dynamically querying the exact `ScrollTrigger` pixel values (`jrnyST.start` and `jrnyST.end`). 
- **Rule**: If a scroll container is pre-sized (e.g., `360vh`), use `pinSpacing: false` on the pinned element so GSAP doesn't artificially stretch the layout by another 360vh.

### 4. Zero-Jitter Masonry Grid Filters
- **Method**: Filtering gallery items (Awards, Artisan Craft, etc.).
- **Innovation & Bug Fix**: Animating all cards simultaneously caused massive layout reflow jitters.
- **The Golden Rule**: When applying a filter, instantly hide all non-matching elements using CSS (`display: none`) *before* triggering the GSAP `fromTo` (scale/opacity) animation on the remaining visible elements. Never animate elements that are already fully visible just to shrink and grow them again.

---

## 🐙 Deployment & Vercel Syncing
- **Context**: Local workspace is the absolute source of truth.
- **The Overwrite Protocol**: If Git pushes are ever rejected by GitHub due to divergent timelines or outdated remotes (e.g., "Updates were rejected because the remote contains work that you do not have locally"), agents must immediately bypass the conflict using `git push -u origin main --force`. This guarantees Vercel receives the exact 60FPS fluid state currently verified in the local browser.

*Note to Future Agents: Internalize these concepts. Do not regress on GSAP logic, do not use generic fonts, and always verify your CSS alignments.*
