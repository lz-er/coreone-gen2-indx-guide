# CORE One → CORE One+ (Gen 2) INDX build guide

A single-file, self-hosted checklist for converting a Prusa CORE One into a
CORE One+ (Gen 2) INDX.

`build.mjs` merges the official Prusa **INDX conversion guide** and the
**CORE One+ (Gen 2) upgrade guide** into one linear, de-duplicated sequence of
351 steps across 19 phases, following the switching order from Prusa's combined
article, and folds in community notes from the guide/article comments and
r/prusa3d.

**Live version:** <https://lz-er.github.io/coreone-gen2-indx-guide/>

Features: per-step checkboxes persisted in `localStorage`, global and per-phase
progress, a salvaged-parts inventory of everything the kits do *not* contain,
"keep this part" callouts on every teardown step, and a prep mode that filters
down to the steps needing no kit parts.

## Build

```sh
node build.mjs      # reads raw/*.html, writes index.html
```

No dependencies. `index.html` is committed, so it is always in sync with the
sources at the last commit.

| File | Purpose |
| --- | --- |
| `build.mjs` | Phase plan + HTML renderer |
| `extract.mjs` | Pulls step data out of the scraped Prusa guide pages |
| `tips.mjs` | Community notes and expanded article text, keyed by Prusa step id |
| `salvage.mjs` | Parts to keep from your own printer |
| `prep.mjs` | Steps doable before the kits arrive |
| `raw/` | Scraped guide pages (input for `extract.mjs`) |

## Viewing it

`index.html` is fully self-contained (only the photos are remote), so the
simplest route is to download it and open it locally. Progress is stored in
`localStorage`, so keep using the same file/URL.

Gitea deliberately serves raw `.html` as `text/plain` with `nosniff`, so the
raw URL will not render, and Gitea has no Pages feature. To serve it directly
from this instance, one of these one-time `app.ini` changes is needed
(admin-only, requires a restart):

**Render it inside the repo file view (recommended, sandboxed):**

```ini
[markup.html]
ENABLED = true
FILE_EXTENSIONS = .html,.htm
RENDER_COMMAND = "cat"
IS_INPUT_FILE = false
RENDER_CONTENT_MODE = iframe
RENDER_CONTENT_SANDBOX = allow-scripts allow-popups
```

Gitea then renders the file in a sandboxed iframe on its own repo page. Note
that a sandbox without `allow-same-origin` blocks `localStorage`, so the tick
boxes will not persist in that view.

**Or serve the raw file as real HTML (simpler, but disables Gitea's XSS
mitigation for every `.html` in every repo on the instance):**

```ini
[repository.mimetype_mapping]
.html = text/html
```

`raw/branch/main/index.html` then renders as a normal page, `localStorage`
included.

## GitHub Pages

`.github/workflows/pages.yml` publishes `index.html` (only) to GitHub Pages on
every push to `main`.

One-time setup: **Settings → Pages → Source → GitHub Actions**. The default
`GITHUB_TOKEN` is not allowed to enable Pages by itself, so the first workflow
run fails at `configure-pages` until this is set. Afterwards, re-run the
workflow from the Actions tab.

The scraped `raw/` sources are deliberately left out of the published site.

## Attribution

All step text and photographs are the work of Prusa Research a.s., taken from
the publicly published assembly guides on help.prusa3d.com. Every step in this
page links back to its original, and photos are loaded directly from
help.prusa3d.com rather than re-hosted. Community notes are quoted from the
public comment threads on those guides and from r/prusa3d, attributed to their
authors. This is an unofficial aid, not a replacement for the official guides,
and is not affiliated with or endorsed by Prusa Research.

## Disclaimer

Unofficial and assembled for one specific build. Always cross-check against the
linked original Prusa step if something looks wrong.
