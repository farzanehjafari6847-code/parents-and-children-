# Parenting Course

A multilingual parenting course prototype built around a relationship-first design. The project keeps parent-child connection as the primary learning path, while digital parenting is treated as a useful supporting layer that grows out of healthy family communication, boundaries, and trust.

## Goals

- build a practical learning experience for parents and caregivers
- keep the emotional and relational core of parenting central
- integrate digital parenting in a way that supports healthy family dynamics
- create an extensible architecture for future language support and content growth

## Base structure

```text
parenting-course/
├── README.md
├── index.html
├── styles.css
├── app.js
├── content-map.md
├── data/
│   └── routes.js
├── assets/
│   └── icons/
├── docs/
│   ├── content-architecture.md
│   └── technical-guides.md
└── .gitignore
```

## Current architecture

- Core path: parenting and relationship
- Support path: digital parenting
- Child path: ages 7–12
- Family path: family agreements and recurring plans

## Current content focus

- generational gap and communication
- parent-child connection
- boundaries and emotional safety
- conflict and repair after conflict
- self-esteem and comparison
- school stress and family pressure
- caregiver burnout and support
- digital safety and family rules

## Run locally

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```
