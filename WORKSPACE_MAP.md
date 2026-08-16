# Workspace Map & Project Registry

> [!IMPORTANT]
> **Instructions for incoming AI Models**: 
> 1. Read this map first to understand the current workspace layout, active projects, installed skills, and next steps.
> 2. Whenever you add, delete, or rename files/directories or start a new project, you **MUST** update this file to reflect the new structure and project states.

## 📁 Directory Structure
```text
Project-Baby-Steps/
├── .agents/
│   ├── rules/
│   │   └── graphify.md                   # Graphify AST maintenance rules
│   └── skills/                           # Installed Master Design Skills
│       ├── 3d-book-physics/              # 3D Bookshelf unsheathing, cover lift & dual-sided page flip mechanics
│       ├── awwwards-motion-engineering/  # GSAP, Lenis, SVG tracking, Hyperplexed/Olivier Larose techniques
│       ├── luxury-creative-craftsmanship/# 3D skeuomorphism, walnut/brass materials, Web Audio synthesizers
│       └── ui-ux-pro-max-skill/          # Master AI-driven design intelligence and UI/UX playbook
├── AGENTS.md                             # Primary agent behavior rules & orientation guide
├── PREFERENCES.md                        # Global developer preferences, design tool map, likes/dislikes
├── WORKSPACE_MAP.md                      # Active project registry and workspace tree (THIS file)
├── graphify-out/                         # Graphify Knowledge Graph database (graph.json, GRAPH_REPORT.md)
└── projects/                             # Active client & personal website projects
    ├── auto-sales-service-hub/           # Velocity Toyota Multi-Page Dealership Portal
    ├── interior-design-studio/           # Aura & Dakshin Luxury Studio Portfolio (Single-Page)
    │   ├── index.html                    # v7.0: Cinematic Hero Parallax, Unbroken Scrollytelling Highway, Detailed Mahogany Bookshelf, High-Contrast Book Spread Modal
    │   ├── css/styles.css                # v7.0: Parallax Architectural Backdrop, Mahogany 3D Library, Luxury Envelope Seal, Chrono Calendar Modal
    │   ├── js/main.js                    # v7.0: Unbroken Highway Viewport, Flying Book Arc, Chrono Calendar logic
    │   ├── assets/                       # hero.jpg, hero_bedroom.jpg, hero_lounge.jpg, hero_chettinad.jpg, about.jpg
    │   └── README.md                     # Comprehensive project documentation & Vercel deployment guide
    └── srivarshan-portfolio/             # Srivarshan Personal Cream-Themed Portfolio (Single-Page)
```

## 📂 Project Registry

| Project Name | Client / Theme | Architecture | Status | Repository | Link |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Aura & Dakshin Interiors Studio** | Warm Earth & Cream Luxury (`#FAF7F2`) | Single-Page Canvas | Live & Pushed (`v14.0` Perfect Alignment, Scrollytelling Tracking, Vercel Ready) | [`aura-dakshin-interior-studio`](https://github.com/Srivarshan-adaikkalam/aura-dakshin-interior-studio) | [`projects/interior-design-studio`](file:///c:/Users/NC25936-Srivarshan%20A/.gemini/antigravity-ide/scratch/Project-Baby-Steps/projects/interior-design-studio) |
| **Srivarshan Portfolio** | Warm Cream Luxury Theme (`#FDFBF7`) | Single-Page Canvas | Active | Local Development | [`projects/srivarshan-portfolio`](file:///c:/Users/NC25936-Srivarshan%20A/.gemini/antigravity-ide/scratch/Project-Baby-Steps/projects/srivarshan-portfolio) |
| **Velocity Toyota** | Anaamalais Toyota Light Theme | Multi-Page (`index`, `showroom`, `trade-in`, `services`, `contact`) | Completed | [`AutoSales-Multipage-Website`](https://github.com/Srivarshan-adaikkalam/AutoSales-Multipage-Website) | [`projects/auto-sales-service-hub`](file:///c:/Users/NC25936-Srivarshan%20A/.gemini/antigravity-ide/scratch/Project-Baby-Steps/projects/auto-sales-service-hub) |

## 🚀 Getting Started
To start a new client project:
1. Prompt user: *"Would you prefer a Multi-Page Site or a Single-Page Site?"*.
2. Initialize project under `projects/`.
3. Register the project in the table above and update `WORKSPACE_MAP.md`.
