---
name: uiverse-micro-interactions
description: Master skill for utilizing pure CSS micro-interactions and animations from Uiverse.io for premium, lag-free UI components.
tags: [design, css, animation, uiverse, micro-interactions, ui]
version: 1.0.0
---

# Uiverse Micro-Interactions Skill

## Objective
This skill equips the agent to leverage Uiverse.io patterns for creating high-end, pure CSS micro-interactions (buttons, loaders, toggles, cards, inputs) that align with luxury design standards, avoiding JavaScript bloat and generic styles.

## Guidelines

1. **Source over Scratch:** Before writing complex CSS animations for small components, adapt pure CSS patterns inspired by Uiverse.io.
2. **Pure CSS/HTML Only:** Prioritize vanilla CSS and HTML components. Avoid Tailwind CSS unless explicitly requested. Do not use JavaScript for component-level hover effects.
3. **Adapt to Workspace Vibe:** 
   - Never use generic colors. Always replace them with the workspace's curated HSL luxury variables (e.g., `#FAF7F2` cream).
   - Enforce the workspace's rounded corner mandate (`24px-32px` for cards).
4. **Performance:** Utilize GPU-accelerated properties (`transform: translate3d`, `scale`, `opacity`) and cubic-bezier timing functions.
