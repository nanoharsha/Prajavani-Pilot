# Adilabad Decentralised Prajavani — Evidence from the Pilot

A web report on the **Adilabad Decentralised Prajavani Pilot** (Jan 2025 – Apr 2026) — a grievance redress reform initiative by the Adilabad District Administration, SSAAT, Kisan Mitra, and SAFAR India.

**Live site:** https://nanoharsha.github.io/Prajavani-Pilot/

## Files

| File | Purpose |
|---|---|
| `index.html` | Main web report — loads React + the `app-*.jsx` modules in the browser |
| `app-core.jsx` | Shared utilities + Why Change / Pilot Journey sections |
| `app-model.jsx` | How It Works, Digital Technology, Follow-up Mechanism |
| `app-data.jsx` | Grievance Dashboard + Policy Issues |
| `app-stories.jsx` | Case Stories + Way Forward (Government Order) |
| `app-closing.jsx` | Documentary, Acknowledgements, Resources |
| `app-extras.jsx` | Grievance form demo, follow-up flow, receipt comparison |
| `i18n.jsx` | English / Telugu language toggle |
| `image-slot.js` | Drag-and-drop image placeholder component |
| `print.html` | Print / PDF-optimised static version |
| `Images/` | Photographs used in the report |

## Editing content

Report copy lives in the `app-*.jsx` files — numbers, titles, case stories, partner lists, recommendations. Each section has English + Telugu strings via the `t('English', 'తెలుగు')` helper. Edit the JavaScript literals, save, refresh the browser.

## Running locally

`app-*.jsx` files are loaded via Babel in the browser, so a local HTTP server is needed (opening `file://` may be blocked by CORS):

```bash
python -m http.server 8000
```

Then open http://localhost:8000/

## Deploying on GitHub Pages

GitHub Pages auto-deploys from the `main` branch — push, and the live site updates in ~30–60 seconds. Settings → Pages → Source: `Deploy from a branch`, Branch: `main` / `(root)`.

## Notes

- `uploads/` is **gitignored** — it contains source materials with personal citizen data (names, phone numbers) and large binaries. Never commit it.
- The previous single-file version is preserved in git history under the tag `v1-old-site`.

## Attribution

A collaborative initiative of the Adilabad District Administration, SSAAT, Kisan Mitra, and SAFAR India. Grounded in Articles 14, 21 & 38 of the Indian Constitution. May be reproduced freely with attribution to SAFAR India.
