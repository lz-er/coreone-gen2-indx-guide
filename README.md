# CORE One → CORE One+ (Gen 2) INDX build guide

A single-file, self-hosted checklist for converting a Prusa CORE One into a
CORE One+ (Gen 2) INDX.

`build.mjs` merges the official Prusa **INDX conversion guide** and the
**CORE One+ (Gen 2) upgrade guide** into one re-ordered, de-duplicated sequence
of 16 phases, following the switching order from Prusa's combined article, and
folds in community notes from the guide/article comments and r/prusa3d.

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

## Disclaimer

Unofficial and assembled for one specific build. Always cross-check against the
linked original Prusa step if something looks wrong.
