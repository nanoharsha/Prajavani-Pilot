# Adilabad Decentralised Prajavani — Evidence from the Pilot

A web report on the **Adilabad Decentralised Prajavani Pilot** (Jan 2025 – Apr 2026) — a grievance redress reform initiative by the Adilabad District Administration, SSAAT, Kisan Mitra, and SAFAR India.

**Live site:** https://nanoharsha.github.io/Prajavani-Pilot/ (enable GitHub Pages — see below)

## Files

| File | Purpose |
|---|---|
| `index.html` | Main web report — loads React + `sections.jsx` in the browser |
| `sections.jsx` | All section components (edit content here) |
| `print.html` | Print / PDF-optimised static version (A4) |
| `uploads/` | Source materials (context brief, report outline, dataset, pitch deck) |

## Editing content

All report copy lives in **`sections.jsx`** — numbers, titles, case stories, partner list, recommendations, etc. Open it in any editor and change the JavaScript literals. Save, then refresh the browser.

The hero stat strip and nav are in `index.html`.

## Running locally

Because `sections.jsx` is loaded via Babel in the browser, you need a local HTTP server (opening `file://` may be blocked by CORS):

```bash
# From the project folder
python -m http.server 8000
# or
npx http-server .
```

Then open http://localhost:8000/

## Deploying on GitHub Pages

1. Push this folder to `nanoharsha/Prajavani-Pilot` (main branch)
2. On GitHub: **Settings → Pages → Source: `Deploy from a branch` → Branch: `main` / `(root)`**
3. Wait ~1 minute. Site goes live at `https://nanoharsha.github.io/Prajavani-Pilot/`

## Design

- Palette: navy `#0d2137`, amber `#c47d2e`, warm cream `#f7f4ef`
- Fonts: Libre Baskerville (serif headings), Source Sans 3 (body)
- Responsive: hamburger nav on mobile; all multi-column layouts collapse to single column under ~320px width
- Live tweaks panel: background tone, accent colour, section visibility (dev affordance)

## Attribution

A collaborative initiative of the Adilabad District Administration, SSAAT, Kisan Mitra, and SAFAR India. Grounded in Articles 14, 21 & 38 of the Indian Constitution. Data cut-off: 31 January 2026.

May be reproduced freely with attribution to SAFAR India.
