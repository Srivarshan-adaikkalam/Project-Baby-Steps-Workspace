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
│       ├── 3d-book-physics/              
│       ├── awwwards-motion-engineering/  
│       ├── luxury-creative-craftsmanship/
│       ├── uiverse-micro-interactions/   # Pure CSS Uiverse component playbook
│       └── ui-ux-pro-max-skill/          
├── AGENTS.md                             # Primary agent behavior rules & orientation guide
├── PREFERENCES.md                        # Global developer preferences, design tool map, likes/dislikes
├── WORKSPACE_MAP.md                      # Active project registry and workspace tree (THIS file)
├── graphify-out/                         # Graphify Knowledge Graph database (graph.json, GRAPH_REPORT.md)
└── projects/                             # Active client & personal website projects
    ├── auto-sales-service-hub/           
    ├── interior-design-company/
    ├── interior-design-studio/           
    └── srivarshan-portfolio/             
```

## 📚 Global Skills Registry & Installation Protocol
The following skills represent the core intelligence of this workspace. **All agents MUST verify these skills are present** in `.agents/skills/` or `scratch/`. If they are missing, the agent MUST clone them immediately before starting work.

| Skill Name | Purpose | GitHub/Source Link |
| :--- | :--- | :--- |
| `antigravity-skills` | Foundational Antigravity AI agent skills | `https://github.com/rmyndharis/antigravity-skills.git` |
| `agentic-awesome-skills` | 2,000+ specialized dev & security playbooks | `https://github.com/sickn33/agentic-awesome-skills.git` |
| `uiverse-micro-interactions`| Custom pure CSS component guidelines | *(Local to workspace)* |
| `ui-ux-pro-max-skill` | Master AI-driven design intelligence playbook | *(Local to workspace)* |
| `awwwards-motion-engineering`| GSAP, Lenis, and WebGL physics standards | *(Local to workspace)* |

## 📂 Project Registry

| Project Name | Client / Theme | Architecture | Status | Repository | Link |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Aura & Dakshin Interiors Studio** | Warm Earth & Cream Luxury (`#FAF7F2`) | Single-Page Canvas | Live & Pushed | [`aura-dakshin-interior-studio`](https://github.com/Srivarshan-adaikkalam/aura-dakshin-interior-studio) | `projects/interior-design-studio` |
| **Interior Design Company (New)** | Warm Earth & Cream Luxury | SSR (Next.js) | Active | [`great-interior-design`](https://github.com/Srivarshan-adaikkalam/great-interior-design) | `projects/interior-design-company` |
| **Srivarshan Portfolio** | Warm Cream Luxury Theme (`#FDFBF7`) | Single-Page Canvas | Active | Local Development | `projects/srivarshan-portfolio` |
| **Velocity Toyota** | Anaamalais Toyota Light Theme | Multi-Page | Completed | [`AutoSales-Multipage-Website`](https://github.com/Srivarshan-adaikkalam/AutoSales-Multipage-Website) | `projects/auto-sales-service-hub` |

## 🚀 Getting Started
To start a new client project:
1. Prompt user: *"Would you prefer a Multi-Page Site or a Single-Page Site?"*.
2. Initialize project under `projects/`.
3. Register the project in the table above and update `WORKSPACE_MAP.md`.
