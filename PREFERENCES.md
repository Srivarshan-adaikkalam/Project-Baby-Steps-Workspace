# Developer Preferences & Vibe Coding Style

> [!NOTE]
> This file outlines the core preferences, coding styles, tech stack choices, design skills ecosystem, and communication guidelines for Srivarshan's client website projects. All AI models taking over this workspace MUST read and adhere strictly to these guidelines.
> **Continuous Intelligence System**: Agents must autonomously append newly discovered UI/UX patterns, bug fixes, and deployment architectures to this document to ensure the workspace grows more intelligent and robust over time.

---

## 🛠️ Preferred Tech Stack & Tool Map
*   **Core**: Vanilla HTML5, modern ES6+ JavaScript.
*   **Styling**: Vanilla CSS3 (curated modern color palettes, CSS variables, CSS grid/flexbox, 3D preserve-3d transforms, cubic-bezier physics). Avoid Tailwind CSS unless specifically requested.
*   **Card Architecture & Rounded Form Factors**: Heavy usage of sleek Bento-style modular cards with generous, smooth rounded edges (`border-radius: 20px - 32px` on cards/containers, `50px` pill badges, organic curves).
*   **Motion & Physics-Based Animations**: GSAP (ScrollTrigger, Flip), Lenis Smooth Scroll, Canvas Web Audio API (Synthesized organic soundscapes), Three.js / WebGL. Minimal external packages; prefer native, high-performance implementations.
*   **Design Skills Ecosystem**:
    1. [`ui-ux-pro-max-skill`](file:///c:/Users/NC25936-Srivarshan%20A/.gemini/antigravity-ide/scratch/Project-Baby-Steps/.agents/skills/ui-ux-pro-max-skill/SKILL.md) — Master AI-driven design intelligence and luxury motion guidelines.
    2. [`awwwards-motion-engineering`](file:///c:/Users/NC25936-Srivarshan%20A/.gemini/antigravity-ide/scratch/Project-Baby-Steps/.agents/skills/awwwards-motion-engineering/SKILL.md) — Awwwards Site of the Day techniques, Lenis smooth scrolling, SVG path tracking, kinetic typography, and magnetic cursor physics.
    3. [`luxury-creative-craftsmanship`](file:///c:/Users/NC25936-Srivarshan%20A/.gemini/antigravity-ide/scratch/Project-Baby-Steps/.agents/skills/luxury-creative-craftsmanship/SKILL.md) — Architectural tactile skeuomorphism, 3D hinged covers, brass/walnut material science, chrono telemetries, and Web Audio haptic feedback.

---

## 🎨 Srivarshan's Design Philosophy & Creative Standards

### 👍 Critical Likes & Signature Mandates
1. **Generous Rounded Edges & Card-Based Layouts**:
   - Every major section, content group, and feature must be structured in modern elevated cards (Bento grids, luxury floating panels).
   - Generous, organic rounded corners (`border-radius: 24px - 32px`), pill CTAs (`border-radius: 50px`), and subtle glassmorphic card borders.
2. **Laws of Motion, Flow & 60FPS Physics**:
   - Zero animation lag or stutter. All animations must strictly run on GPU-accelerated properties (`transform: translate3d/rotate3d`, `opacity`, `will-change: transform`).
   - Animation curves must adhere to real Newtonian physics: inertia, momentum, anticipation, spring overshoot, and deceleration.
   - Lenis smooth inertia scrolling synchronized with GSAP ScrollTrigger to eliminate choppy native scroll.
   - **Masonry Grid Filters**: Never re-trigger `fromTo` opacity/scale animations on grid items that are *already* visible during a filter state change; instantly hide non-matching items with `display: none`, and only animate the newly appearing ones.
3. **Realistic 3D Flip Book Engine (Zero-Lag Fluid Physics)**:
   - **True 3D Dual-Sided Page Mesh**: Realistic page-turn simulation where the page curls and flips over a central spine (`transform-origin: left center` for right page, `transform-origin: right center` for left page).
   - **Dynamic Lighting & Shadow Flow**: Cast dynamic page-curl gradient shadows across the spine and underbelly during the flip to create authentic optical depth.
   - **Hinged Cover Hover**: Physical 3D cover tilt with magnetic cursor tracking and smooth hinge opening.
4. **Scrollytelling & Pinned Road Drivers**: Immersive scrollytelling sequences with fixed ScrollTrigger pinning (`pinSpacing: true`) triggered by user scrolling (e.g. SVG path vehicle drivers with dynamic rotation tangents, glowing waypoint nodes, and scroll progress telemetry bars).
5. **Multi-State Micro-Interactions & Lottie Vector Animations**: MANDATORY signature feature. Use multi-state animations and LottieFiles micro-animations (`https://lottiefiles.com/free-animations`) for 60fps vector icons, badge pulses, enquiry submission sweeps, and scroll hints.
6. **Chrono Telemetry Popovers**: Never rely on plain native input controls. Date & Time selectors must be sleek click-to-open popovers (`.chrono-popover-trigger`) featuring custom calendar grids and interactive telemetry clock dials.
7. **Silent & Lag-Free Visual Performance**: Remove intrusive haptic audio sounds; prioritize ultra-responsive 60fps GPU-accelerated CSS and GSAP animations (`transform: translate3d/rotate3d`, `will-change: transform`).
8. **Exaggerated Typography & High-Impact Copy**: Clean modern typography (Outfit / Inter). Use **Cormorant Garamond (italicized, semi-bold)** for heritage luxury tags, polaroid captions, and premium accents rather than messy handwriting fonts. Never use generic placeholders (lorem ipsum).
9. **Interactive Hero Bento Showcase Switcher**: Hero Bento Card B must feature an interactive glassmorphic room/work switcher (e.g. Living, Bedroom, Lounge) that crossfades high-res showcase photography and location metadata smoothly without layout shift.
10. **Dense, Realistic Content Curation**: Every section (Services, 4-Stage Studio Process Workflow, Gallery Exhibitions, Consultation Form) must feature rich, realistic, professional copy, micro-highlight chips, budget tiers, and detailed specifications. No empty cards or placeholder content.
11. **Tamil Nadu Regional Heritage & Material Synthesis**: For Tamil Nadu clients, blend international luxury aesthetics (Japandi, Art Deco, Neo-Classical) with local material heritage (Athangudi tiles, Chettinad teak joinery, Tanjore bronze hardware, Erode handloom silks, and biophilic Thinnai courtyards).
12. **Instant Native Pointer**: Default to smooth native browser mouse cursor performance (`cursor: default` / `cursor: pointer`). Never force heavy JS trail elements that introduce input lag.
13. **Right-Side Studio Bookshelf & Flying Book Exchange**: Arrange books inside a vertical 3D wooden library rack on the right side of the scrollytelling section (`.right-bookshelf-rack`). As scroll triggers waypoints, the current book flies back to its shelf slot while the new book pulls out of its shelf slot, flies in a 3D arc across the screen, and lands on the pedestal.
14. **Sequential Services Grid Order (01 → 02 → 03 → 04)**: Ensure feature grids are laid out in strictly sequential numeric order (01 Top-Left, 02 Top-Right, 03 Bottom-Left, 04 Bottom-Right) with compact padding and bullet feature tags.
15. **Interactive & Explorable Leadership Showcase**: Provide interactive profile tabs and 3D cards for studio leaders (e.g. Meera Nair, K. Sundaram, S. Anbarasan, R. Thenmozhi) directly above the gallery and consultation form.
16. **Studio Envelope Seal Submission Engine**: Form submission buttons MUST feature custom progress sweep and seal confirmation animations.
17. **Fixed Unclipped Chrono Telemetry Modal**: Render popover calendar date pickers inside a high z-index fixed viewport modal (`.chrono-modal-overlay`) to prevent calendar cropping regardless of form container dimensions.
18. **Mobile-First Luxury Responsiveness**: All components (Header Drawer, Scrollytelling Road View, Bookshelf, Book Modal Spread, Bento Grids, Gallery) MUST adapt seamlessly to mobile viewports (< 768px, < 480px) with touch-optimized controls and stacked layouts.
19. **Motion Primitives, MotionSites AI & Haikei Vector Design Scaffolding**: Draw architectural motion graphics, prompt engineering systems, and background textures from MotionSites AI (`https://motionsites.ai`), Motion Primitives (`https://motion-primitives.com`, `https://github.com/ibelick/motion-primitives`), and Haikei (`https://haikei.app`) for generative SVG waves, morphing dialogs, text shimmer, and liquid card transitions.
20. **Top-Right Expand Icon Button Mandate**: Expandable cards MUST feature a sleek glassmorphic expand icon button ONLY AND ONLY on the top-right corner (`top: 16px; right: 16px`) as `<button class="card-expand-btn"><i class="fa-solid fa-expand"></i></button>`. Do NOT render inline text buttons inside card bodies.
21. **No Automatic Browser Subagent Check**: NEVER automatically launch `browser_subagent` after making updates or completing code edits. ONLY launch `browser_subagent` when the USER explicitly asks for a visual browser check.

### 👎 Explicit Dislikes & Anti-Patterns
*   ❌ **Zero Static Interfaces**: Plain, non-animated layouts are strictly unacceptable.
*   ❌ **No Sharp / Boxy Grids**: Sharp 0px border-radius boxes are banned; always use smooth rounded cards.
*   ❌ **No Laggy / Stuttering Transitions**: Animations must never lag or block the main thread.
*   ❌ **No Flat Generic Colors**: Avoid plain primaries (plain red, plain blue, plain green). Use tailored HSL luxury tones.
*   ❌ **No Native Open Date Pickers**: Never render raw browser inputs (`<input type="date">`).
*   ❌ **No Unstyled Modals**: All modals must feel like physical luxury artifacts with backdrop blur and depth.
*   ❌ **No Automatic Git Push**: Never push code to remote repositories without an explicit user command.

---

## 🧠 Thinking & Communication Style
*   **Mandatory Site Architecture Choice**: ALWAYS ask the user at the start of any website project: *"Would you prefer a Multi-Page Site or a Single-Page Site?"* before writing code.
*   **Multi-Page Site Architecture Rules**: When building a Multi-Page site, engineer rich connection points between pages (e.g. shared persistent headers/footers, smooth page transition animations, cross-page state preservation, dedicated subpages for features like `/showroom.html`, `/services.html`, `/trade-in.html`, breadcrumbs, scrollytelling sequences, and micro-interactions on every page).
*   **Category-First Template Research & Reference Workflow**:
    - Before writing code for any client website or niche project, agents **MUST** search Framer (`framer.com/templates`) and other accessible design marketplaces for free/popular templates in that exact category.
    - Leverage these pre-structured, professionally defined template layouts as architectural reference scaffolds.
    - Adapt and elevate the structured templates by applying Srivarshan's custom aesthetics: generous rounded Bento cards (`24px-32px`), 60FPS fluid physics, 3D flip-books, scrollytelling sequences, multi-state micro-interactions, and custom Chrono telemetries.
*   **Vibe Coding / Interactive**: Think out loud. Break down complex designs before writing code.
*   **Incremental & Verified**: Make changes incrementally, and verify step-by-step using local browser subagents to prevent compound bugs.
*   **Concise but Thorough**: Responses should be direct, clean, and use proper Markdown structure.

---

## 🐙 Version Control & GitHub Protocol
*   **Push Protocol**: DO NOT automatically push changes to GitHub. Git must be initialized directly inside the target client project directory (e.g. `projects/interior-design-studio/` or `projects/auto-sales-service-hub/`) so that ONLY the specific client's web application files (`index.html`, `css/`, `js/`, `assets/`) are pushed. **CRITICAL MANDATE**: **NEVER EVER** push changes to GitHub or call any GitHub push tool/command unless the USER explicitly requests/commands a push in their prompt! Local commits can be created during development, but pushing to remote GitHub must strictly await explicit user instruction.

---

## 🕸️ Universal Graphify Knowledge Graph Layer
*   **Tool Engine**: [`Graphify-Labs/graphify`](https://github.com/Graphify-Labs/graphify)
*   **Knowledge Graph Data**: [`graphify-out/graph.json`](file:///c:/Users/NC25936-Srivarshan%20A/.gemini/antigravity-ide/scratch/Project-Baby-Steps/graphify-out/graph.json)
*   **Knowledge Graph Report**: [`graphify-out/GRAPH_REPORT.md`](file:///c:/Users/NC25936-Srivarshan%20A/.gemini/antigravity-ide/scratch/Project-Baby-Steps/graphify-out/GRAPH_REPORT.md)
*   **Universal Persistence**: All AI assistants MUST consult the Graphify Knowledge Graph to parse extracted and inferred developer preferences across client domains, themes, budget tiers, site architectures, and Git protocols.
