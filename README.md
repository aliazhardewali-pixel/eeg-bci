# EEG Brain–Computer Interface — MEDICO 2026

Single page for the project exhibited at MEDICO 2026, Erbil. English and Arabic, switchable
from a button in the header. Plain HTML, CSS and vanilla JavaScript — no framework, no build
step, no npm. The folder deploys exactly as it is.

See [TODO.md](TODO.md) for the few things still open.

---

## Live site

**https://eeg-bci.pages.dev/**

Served by Cloudflare Pages from the `main` branch, root folder — Cloudflare builds on its own
infrastructure, so a GitHub Actions outage cannot take the site down. That is the URL the QR
codes encode. If the Cloudflare project is ever renamed the URL changes and **every printed QR
code stops working** — regenerate them, see the end of TODO.md.

Cloudflare has a **25 MB limit per file**, which is why the video is on YouTube rather than
served from here.

## Publishing a change

```bash
git add -A
git commit -m "what changed"
git push
```

Cloudflare redeploys on its own, usually within a minute.

`.gitignore` keeps the source material out of the repository: `project_images/`,
`team images/`, `medico/` and `final report, presentation and design day things/` hold the
originals, around 190 MB of HEIC and PowerPoint files. Everything the site needs has already
been converted into the repository root. `PROJECT_BRIEF.md` and `TODO.md` are also excluded
as internal notes — delete those two lines from `.gitignore` if you want them published.

## The video

The first line of code in `script.js` holds the YouTube ID, and it is already set:

```js
const YOUTUBE_ID = 'R_bfxC4xN5M';
```

To swap in a different video, replace that one string with the new ID — the part after `v=` in
the watch URL — and nothing else. Setting it back to the literal `'YOUTUBE_ID'` returns the
poster to its "Video coming soon" state.

The video is **unlisted**, not private: private videos cannot be embedded at all, the player
just shows an error. "Allow embedding" must also stay on in YouTube Studio.

Nothing is fetched from youtube.com until a visitor taps the poster, which is the main reason
the page stays quick on exhibition wifi. The poster image is a real photo of the system, so
there is something to look at either way.

## The Arabic version

The switch in the header flips the whole page: `lang`, `dir="rtl"`, an Arabic system font
stack, and every string. The choice is remembered in `localStorage`, and a browser set to
Arabic gets Arabic on first visit.

English lives in `index.html`. Arabic lives in one object named `AR` at the top of
`script.js`. **To fix a translation, edit `AR` and nothing else** — the key names match the
`data-i18n` attributes in the HTML. Anything without an entry in `AR` simply stays English,
so a missing translation degrades quietly rather than breaking.

Layout mirroring is done with CSS logical properties, so nothing needs a second stylesheet.

## When you edit a file

Bump the cache-busting number in `index.html` so returning phones pick up the change:

```html
<link rel="stylesheet" href="style.css?v=11">
<script src="script.js?v=11" charset="utf-8" defer></script>
```

`v=11` becomes `v=12`, and so on — both lines together. Replacing a photo needs no bump.

## Notes

- **No web fonts.** System fonts in both languages, so text paints without waiting on a
  third party.
- **Colours** follow the MEDICO 2026 identity — `#37B44E`, sampled from the official logo,
  darkened to `#1F7434` where it needs to pass contrast on white.
- **Missing images never break.** A photo that fails to load becomes a labelled grey block;
  a missing logo hides its slot; a missing face photo falls back to initials.
- **The report link** only appears when `EEG-BCI-Report.pdf` really exists and the site is
  served over http(s). In a local `file://` preview it stays hidden.
- **Analytics** is GoatCounter at the bottom of `index.html`. Register the site code
  `eeg-bci` at goatcounter.com, or change the URL to whichever code you register.
- **Facts come from `PROJECT_BRIEF.md`** plus the hardware corrections you gave me. If a
  number changes, change it in the Technical details section and in `AR`.
