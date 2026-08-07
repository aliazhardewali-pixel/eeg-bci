# EEG Brain–Computer Interface — MEDICO 2026

Single page for the project exhibited at MEDICO 2026, Erbil. English and Arabic, switchable
from a button in the header. Plain HTML, CSS and vanilla JavaScript — no framework, no build
step, no npm. The folder deploys exactly as it is.

See [TODO.md](TODO.md) for the few things still open.

---

## Live site

**https://aliazhardewali-pixel.github.io/eeg-bci/**

Served by GitHub Pages from the `main` branch, root folder. That is the URL `qr.svg`
encodes. If the repository is ever renamed, the Pages URL changes and **the QR code stops
working** — regenerate it, see the end of TODO.md.

## Publishing a change

```bash
git add -A
git commit -m "what changed"
git push
```

Pages redeploys on its own, usually within a minute.

`.gitignore` keeps the source material out of the repository: `project_images/`,
`team images/`, `medico/` and `final report, presentation and design day things/` hold the
originals, around 190 MB of HEIC and PowerPoint files. Everything the site needs has already
been converted into the repository root. `PROJECT_BRIEF.md` and `TODO.md` are also excluded
as internal notes — delete those two lines from `.gitignore` if you want them published.

## Where the YouTube ID goes

Open `script.js`. The first line of code is:

```js
const YOUTUBE_ID = 'YOUTUBE_ID';
```

Replace it with the video's ID — the part after `v=` in the watch URL, so
`https://www.youtube.com/watch?v=dQw4w9WgXcQ` becomes:

```js
const YOUTUBE_ID = 'dQw4w9WgXcQ';
```

That is the only edit. Until it is done the poster reads "Video coming soon" and tapping it
does nothing. Nothing is fetched from youtube.com until a visitor taps play, which is the
main reason the page stays quick on exhibition wifi.

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
<link rel="stylesheet" href="style.css?v=6">
<script src="script.js?v=6" charset="utf-8" defer></script>
```

`v=3` becomes `v=4`, and so on. Replacing a photo needs no bump.

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
