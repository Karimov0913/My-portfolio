# Javlonbek Karimov — Portfolio 2026

A high-performance personal portfolio combining restrained classical typography with subtle Liquid Glass surfaces and modern interaction design.

**Live:** https://karimov0913.github.io/My-portfolio/

## Design direction

- Warm graphite / ivory palette with one muted botanical accent
- Editorial serif typography paired with a precise sans-serif UI system
- Liquid Glass used selectively for navigation, capability cards and contact surfaces
- Motion supports hierarchy and respects `prefers-reduced-motion`
- No framework, no build step and no decorative dependency bloat

## Features

- Responsive art direction from 320 px to ultrawide screens
- Dark and light appearance with persistent preference
- English / Russian interface with local persistence
- Keyboard command palette via `Ctrl/⌘ + K`
- Accessible project case-study dialogs
- Scroll progress and active navigation
- Pointer-aware tilt and magnetic interactions
- Honest contact flow using the visitor's email client
- PWA manifest and offline service worker
- Semantic HTML, keyboard support and reduced-motion mode
- SEO / Open Graph metadata, sitemap and robots rules

## Structure

```text
.
├── index.html
├── css/
│   └── main.css
├── js/
│   └── app.js
├── assets/
│   ├── icon.svg
│   └── images/
├── manifest.webmanifest
├── sw.js
├── robots.txt
└── sitemap.xml
```

## Local preview

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Quality principles

1. Content remains readable without JavaScript.
2. Every important action works with a keyboard.
3. Animation is optional and never blocks navigation.
4. The contact form does not fake a successful server submission.
5. The project list links only to real public repositories and deployments.

© 2026 Javlonbek Karimov.
