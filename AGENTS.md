# Agent Instructions & Guidelines

Welcome! This is the workspace for Srivarshan's client website projects.

---

## 🧭 Getting Oriented

All AI models taking over this workspace MUST perform the following orientation steps before taking action:

1. **Developer Preferences**: Read [`PREFERENCES.md`](file:///c:/Users/NC25936-Srivarshan%20A/.gemini/antigravity-ide/scratch/Project-Baby-Steps/PREFERENCES.md) to understand design style, tech stacks, and communication guidelines.
2. **Workspace State**: Read [`WORKSPACE_MAP.md`](file:///c:/Users/NC25936-Srivarshan%20A/.gemini/antigravity-ide/scratch/Project-Baby-Steps/WORKSPACE_MAP.md) for the visual directory tree, active client list, project status, and pending tasks.
3. **Graphify Knowledge Graph Layer**:
   - Query the knowledge graph at [`graphify-out/graph.json`](file:///c:/Users/NC25936-Srivarshan%20A/.gemini/antigravity-ide/scratch/Project-Baby-Steps/graphify-out/graph.json) or read [`graphify-out/GRAPH_REPORT.md`](file:///c:/Users/NC25936-Srivarshan%20A/.gemini/antigravity-ide/scratch/Project-Baby-Steps/graphify-out/GRAPH_REPORT.md) before writing code.
   - Use `graphify query "<question>"` or `graphify explain "<concept>"` to retrieve scoped context on Srivarshan's universal preferences.
4. **Continuous Intelligence Update**: 
   - Agents **MUST** continuously append newly discovered solutions, bug fixes, UI/UX patterns, and deployment knowledge directly into `PREFERENCES.md` and `AGENTS.md`. The workspace MUST grow more intelligent after every session. If the `graphify` CLI tool is unavailable, manually update `WORKSPACE_MAP.md` as the source of truth.

---

## 📝 Rules for Agent Behavior

*   **Mandatory Site Architecture Choice**: At the start of any new project or website request, you **MUST** prompt the user: *"Would you prefer a Multi-Page Site or a Single-Page Site?"* before building.
*   **Multi-Page Connection Points**: When building a Multi-Page site, engineer shared persistent headers/footers, smooth page fade transition animations (`.page-transitioning`), active menu indicators, breadcrumbs (`.breadcrumb-nav`), and scrollytelling sequences on all subpages.
*   **Signature Design Standards**: Always implement:
    1. **Immersive Scrollytelling**: Top scroll progress bar, scroll-triggered narrative cards, dynamic SVG energy/flow line animations.
    2. **Multi-State Micro-Interactions**: Idle → Magnetic Hover → Click Ripple → Vehicle Transporter Truck Dispatch Animation → Success Badge.
    3. **Popover Chrono Telemetry Picker**: Click-to-open popover calendar grid with interactive rotating telemetry clock hands (`.chrono-popover-trigger`). Never use plain native open input controls.
    4. **3D 360° Rotatable Studio Modal**: Drag-to-rotate canvas model viewer, live paint finish swatches, and technical spec drawer.
*   **Strict Git Push Protocol (Client Projects)**: **NEVER EVER** automatically push changes to GitHub or call any GitHub push tool/command unless the user explicitly types a direct command asking to push. Only create local files and commits during development. Always wait for explicit user command before pushing.
*   **Workspace Synchronization Protocol (Project-Baby-Steps)**: **EXCEPTION to the rule above**. Immediately after completing a major project closure or a significant project milestone, the agent MUST automatically commit and push the entire `Project-Baby-Steps` root directory (including all active skills, preferences, and knowledge graph data) to its central GitHub repository. This ensures the global workspace knowledge can be reliably replicated across other environments.
*   **Category-Specific Template & Animation Research Mandate**: Before building or redesigning any website, you **MUST** search for top-rated reference blueprints on MotionSites AI (`https://motionsites.ai`), Framer (`framer.com/templates`), LottieFiles (`https://lottiefiles.com/free-animations`), Motion Primitives (`https://motion-primitives.com` & `https://github.com/ibelick/motion-primitives`), and Haikei (`https://haikei.app`). Use these structured reference blueprints to engineer 60FPS fluid physics, generative SVG wave backdrops, morphing dialogs, 3D flip-books, scrollytelling, and mobile-first responsive layouts.
*   **Top-Right Expand Icon Button Mandate**: Expandable cards MUST feature a sleek glassmorphic expand icon button ONLY AND ONLY on the top-right corner (`top: 16px; right: 16px`) as `<button class="card-expand-btn"><i class="fa-solid fa-expand"></i></button>`. Do NOT render inline text buttons inside card bodies.
*   **No Automatic Browser Subagent Check Rule**: **NEVER** automatically launch `browser_subagent` after modifying files or completing tasks. ONLY run `browser_subagent` when the user explicitly requests a visual check in their prompt (e.g. "open browser agent and check...").
*   **Tamil Nadu Regional Heritage & Luxury Curation Rule**: For interior design clients located in Tamil Nadu (Chennai, Coimbatore, Madurai, Chettinad, Tiruchirappalli, Erode), seamlessly blend international luxury minimalist standards (Japandi, Art Deco, Neo-Classical) with rich regional heritage elements (Athangudi hand-pressed tiles, Chettinad teak pillar woodwork, Tanjore bronze accents, and traditional Thinnai courtyard biophilic layouts).
*   **Instant Native Pointer Mandate**: Always default to smooth native browser cursor behavior (`cursor: default` / `cursor: pointer`). Do NOT implement heavy JS custom cursor trail overlays that cause input lag.
*   **Studio Bookshelf & 3D Page Flip Engine**: When engineering project travel diaries, arrange books inside a 3D wooden library bookshelf on the right side of the scrollytelling stage (`.right-bookshelf-rack`). As scroll triggers waypoints, unsheathe and fly the active book smoothly across the screen (`x: 320px -> 0px`, `rotateY`) onto the reading pedestal, providing a dual-sided realistic 3D page flip modal overlay (`.agents/skills/3d-book-physics/SKILL.md`).
*   **Fixed Viewport Scrollytelling Pinning**: Scrollytelling sections (`#jrny-scroll`) MUST use GSAP ScrollTrigger pinning. **Critical Fix**: If the scroll container already has a fixed absolute height (e.g., `360vh`), use `pinSpacing: false` on the pinned element or dynamically calculate the exact target scroll offset using `ScrollTrigger.start` / `ScrollTrigger.end` instead of naive offset heights to prevent layout over-expansion and inaccurate scroll navigation.
*   **Fixed Unclipped Chrono Telemetry Calendar**: Calendar date/time pickers MUST render in an unclipped fixed viewport modal overlay (`.chrono-modal-overlay`) to guarantee zero edge cropping across all form container widths.
*   **Studio Envelope Seal Submission Engine**: Form submission buttons MUST feature custom animated progress sweep and seal confirmation interactions.
*   **Interactive Studio Gallery & Awards Showcase**: Websites MUST include a filterable gallery section (`#gallery`) with category filter buttons. **Critical Fix**: When filtering masonry/grid layouts, apply instant CSS `display: none` to non-matching elements BEFORE triggering GSAP scale/opacity animations. NEVER run `fromTo` shrink animations on already-visible elements to prevent jitter, flicker, and grid misalignment.
*   **Mobile-First Responsive Layout Mandate**: All website layouts, header drawers, bento cards, road vehicle scenes, 3D bookshelves, and modal spreads MUST be 100% responsive across mobile screen widths (< 768px, < 480px).
*   **Always-On Workspace Map Rule**: Any time you modify the structure of the workspace (creating new folders, files, or client directories) or change project status, you **MUST** update [`WORKSPACE_MAP.md`](file:///c:/Users/NC25936-Srivarshan%20A/.gemini/antigravity-ide/scratch/Project-Baby-Steps/WORKSPACE_MAP.md) immediately.
