# Parenting Course

A multilingual parenting course prototype with a relationship-first architecture. The project keeps parent-child connection as the core learning path, while digital parenting is treated as a supporting layer and practical application of the same skills.

## Project goal

This project helps parents and caregivers:

- understand children and adolescents
- work through generational gaps and relationship friction
- set boundaries without shame or control
- manage digital parenting with calmer, more consistent tools
- support healthier family communication and stronger trust

## Architecture

- Core path: Parent relationship and guidance
- Supporting path: Digital parenting and device safety
- Child path: ages 7–12
- Family plan: printable family agreement and digital safety plan

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

## Local run

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Roadmap

- Phase 1: base structure, navigation, route architecture, multi-language support
- Phase 2: parent path pages and core relationship content
- Phase 3: digital parenting and technical guides
- Phase 4: child path and family plan
- Phase 5: localization and content expansion

## Notes

- The default language is Persian (fa).
- The app is designed to support RTL/LTR layout switching
- The project is built for subsequent extension without a full rewrite.
