# ShinsIO Design Guide (baseline v3)

This guide describes what `index.html` and `styles.css` actually implement. Every token below is a CSS custom property in `:root` in `styles.css`. When you change the code, update this file too.

## 1. Principles
- **Vertical first.** The page is one column, and the eye moves top to bottom: section label → one surface → next group. Sections are numbered (01 / …) so the reading order is obvious.
- **iOS-inspired, not iOS.** We borrow the structure: inset grouped lists, hairlines aligned to the text, capsule buttons, concentric radii, 44px touch targets, and a strict type scale. We don't borrow Apple assets, system colours, SF Pro/SF Symbols, or Apple naming.
- **Our own palette.** Palette D "Blue-Grey + Violet-Grey": cool grey page, blue-grey ink, slate accent, quiet cool tints. Never use iOS system colours (#0088FF, #F2F2F7 and so on).
- **Restraint.** One surface per section, no boxes inside boxes, flat fills instead of strokes or shadows, and emphasis from weight rather than extra sizes.

## 2. Tokens
### Colour — Palette D "Blue-Grey + Violet-Grey"
**Rationale.** One cohesive cool family instead of a purple accent with mixed pastels. Blue-grey (#373E4F → #535E7A) supplies depth for type, buttons and selection; violet-grey tints (#DDD9E6, #E7E4EE, #E0DDEA) add variation between sections without breaking the family; a rose whisper (#F2EBED) is used sparingly (one app hue only). Token names are legacy (`--purple`, `--lav`, …) and kept for stability; their values are below. No hard-coded colours outside `:root` except white-on-dark text and translucent white overlays.

| Token | Value | Use |
|---|---|---|
| `--offwhite` | #F1F3F6 | Page background (also `theme-color`) |
| `--white` | #FFFFFF | Cards/surfaces: tiles, package cards, packs, link list |
| `--charcoal` | #373E4F | Text, dark button, selected checkbox, logo outline |
| `--text-2` / `--text-3` / `--slate` | #505A72 | Secondary and tertiary text, section labels |
| `--line` / `--hairline` | #D9DEE7 | Separators (hairline rendered at 0.5px) |
| `--purple` | #535E7A | Accent: focus ring |
| `--purple-dk` | #373E4F | Button / pressed, selected package, totals, kicker |
| `--lav` (tint 01) | #E3E7EE | 01 card, summary, row tiles, thumbnails, selected chip, app card |
| `--blue` (tint 02) | #DDD9E6 | 02 card, "blue" app hue |
| `--green` (tint 03) | #E8ECF2 | 03 card, "green" app hue |
| `--mist` (tint 04) | #ECEEF2 | 05 card (flat) |
| `--peach` (tint 05) | #E7E4EE | "peach" app hue |
| `--rose` (tint 06) | #F2EBED | "rose" app hue — rose whisper, use sparingly |
| `--placeholder` / `--media-plain` | #DCE1EA | Placeholders on plain cards, depth dots |
| `--chip` | #E3E7EE | Chip fill |
| `--pill` | #E0DDEA | Badge pill bg (text #373E4F) |
| `--control` / `--chev` | #AEB5C4 | Unchecked radio/check borders, chevrons (decorative) |
| `--blue-dk` / `--green-dk` | #373E4F | Icons / text on tinted cards |
| `--media` | rgba(255,255,255,.55) | Placeholders on tinted cards |
| Logo gradient | #8090B0 → #373E4F | `#screenGrad` in index.html |
| Tutorials dividers | rgba(55,62,79,.10) | Subtle against #F1F3F6 |

**Contrast (WCAG ratio, AA ≥ 4.5 for body text)**

| Pair | Ratio |
|---|---|
| text/bg | 9.62:1 |
| text2/bg | 6.2:1 |
| text3/bg | 6.2:1 |
| text/surface | 10.69:1 |
| text2/surface | 6.89:1 |
| text/tint01 | 8.62:1 |
| text2/tint01 | 5.56:1 |
| text/tint02 | 7.71:1 |
| text2/tint02 | 4.97:1 |
| text/tint03 | 9.02:1 |
| text2/tint03 | 5.81:1 |
| text/tint04 | 9.2:1 |
| text2/tint04 | 5.93:1 |
| text/tint05 | 8.52:1 |
| text2/tint05 | 5.49:1 |
| text/tint06 | 9.1:1 |
| text2/tint06 | 5.87:1 |
| white/accent | 6.46:1 |
| white/accent-pressed(btn) | 10.69:1 |
| white/text(dark btn) | 10.69:1 |
| accent-dk/tint01(kicker) | 8.62:1 |
| accent-dk/surface | 10.69:1 |
| pill | 7.99:1 |
| text3/tint01 | 5.56:1 |

### Type scale (`font:` shorthand tokens, font = Inter → system-ui)
| Token | Value | Roles |
|---|---|---|
| `--t-large` (`--t-large-d` ≥760) | 700 34/41 (40/48) | `h1`, one per page |
| `--t-title1` (`--t-title1-d` ≥760) | 700 28/34 (32/38) | Section `h2`, summary total value |
| `--t-title2` | 700 22/28 | `.h-sub`, `.pkg-title`, `.app-card h3`, summary total label |
| `--t-title3` | 600 20/25 | `.note h3` |
| `--t-head` | 600 17/22 | Tile/feature `h3`, `.pack-title`, list-row label |
| `--t-body` | 400 17/24 | Card paragraphs, summary rows |
| `--t-sub` | 400 15/20 | Secondary lines: `.muted`, tile/feature/pack text, row secondary, chips (500), footer links, prices |
| `--t-foot` | 400 13/18 | `.eyebrow`, `.kicker` (600), `.fine`, `.depth`, `.pkg-foot`, footer tag/copy |
| `--t-cap` | 600 12/16 | `.status` pill |
Don't add new sizes. If something needs emphasis, change its weight. Avoid `!important`.

### Spacing
`--s-1` 4 · `--s-2` 8 · `--s-3` 12 · `--s-4` 16 · `--s-5` 20 · `--s-6` 24 · `--s-8` 32.
Semantic tokens: `--gutter` 16 (page side padding on mobile) · `--group-gap` 35 (between sections) · `--eyebrow-gap` 7 (label to surface) · `--card-pad` 20 on mobile, 32 at ≥760 · paragraph spacing 12 (`--s-3`).

### Radii (concentric: inner = parent − padding, with a floor)
`--r-card` 24 (section card) · `--r-group` 20 (grouped lists, package cards, summary, app card) · `--r-inner` 12 (tiles, trust box, placeholders) · `--r-icon` 7 (29px row tiles) · `--r-pill` 999 (buttons, chips, badge, status).

### Touch targets
`--touch` 44px is the minimum for chips, footer links and tabs. `--btn-h` 50px is the button height. List rows are at least 60px tall, and pack rows are full-row labels.

## 3. Components
**Section label**: `<p class="eyebrow">0N / Name</p>`, the first child of `<section class="section">`. Use footnote size, uppercase, `--text-3`, and a 16px inset. Leave a 7px gap to the surface.

**Section + pastel card**: `<section class="section" id aria-labelledby><p class="eyebrow">…</p><div class="card tint-lavender|tint-blue|tint-green|tint-mist">…</div></section>`. `.section` has no box of its own. The `.card` is the only surface (radius 24, padding `--card-pad`). `.card.plain` has no fill and 4px side padding, for transactional or list sections (04, 06). Use one tint per section and don't put a card inside a card.

**Grouped list + row anatomy** (06 `.link-list`; 04 `.packs` is the same pattern):
```html
<ul class="link-list"><li><a href="…"><span class="row-tile"><svg class="ico">…</svg></span>
  <span class="row-text"><strong>Label</strong><small>Secondary</small></span>
  <svg class="chev" viewBox="0 0 8 13" aria-hidden="true">…</svg></a></li></ul>
```
- The group is white, radius 20, `overflow:hidden`, with no borders.
- Rows are at least 60px tall, with 12/16 padding and a 15px gap. The tile is 29×29, radius 7, on `--lav`. The chevron is an SVG at 8×13 in `--chev`.
- The separator is a `li+li a::before` hairline that starts at the text (left 60px). There's no line above the first row or below the last.
- Pack rows: `label.pack` is a grid `24px 1fr auto` with a 15px column gap. The separator is `.pack+.pack::before` at left 55px. The trailing price (`.pack-price`) is secondary, spans both rows, and is centred vertically.
- Lists stay in one column, except packs at 760–959px, which use 2 columns on one surface.

**Pill button**: `.btn` plus `.btn-purple` (primary/hero) or `.btn-dark` (checkout). It's a capsule, 50px tall, with 24px side padding and 600 17px text. It's full width on mobile. At ≥760 the hero button is inline (auto width). This is the only button shape.

**Chips**: `button.chip` inside `.chips[role=tablist]`. JS generates them with `role=tab` and `aria-selected`, and arrow keys move between them. They're capsules at least 44px tall, 16px side padding, 500 15/20. Unselected chips are #E6E4EA, and the selected chip is `--lav-2` with `--purple-dk` text.

**Badge pill**: `<p class="badge">` uses sentence case, 600 13/18, 6/12 padding, capsule shape, a translucent blue-dk fill (12%), and `--blue-dk` text. It's a quiet footnote and should never be louder than the h2. `.status` is the caption version: 12px, at least 24px tall.

**Package selection card**:
```html
<label class="pkg"><input type="radio" name="package" value="A" data-price="3.00" data-name="…">
 <span class="pkg-body"><span class="media media-16x9 media-thumb" aria-hidden="true">…</span>
  <span class="pkg-title">Name</span><span class="pkg-aud">Audience</span><span class="pkg-desc">…</span>
  <span class="depth" aria-label="…"><i class="on"></i>…</span>
  <span class="pkg-foot"><span class="radio"></span><span class="pkg-code">Package A</span><span class="price">CA$3.00</span></span></span></label>
```
The hierarchy is name first (Title 2), then audience, then description, then depth, with a small footer that holds the price. It's white with radius 20 and no border. When selected it gets `box-shadow: inset 0 0 0 2px var(--purple-dk)` and the radio fills, with no outer glow. Pricing comes from `data-price` in `main.js`. Totals are package + packs at CA$4.00 each, with any two different packs CA$7.00 per pair and an unpaired pack at CA$4.00 (2 = CA$7, 3 = CA$11, 4 = CA$14; a "Two-add-on offer" saving row appears when the discount applies). Add-on and pair prices are the `ADDON` and `PAIR` constants in `main.js`. All prices CAD, formatted `CA$0.00`.

**Summary**: `.summary` uses `--lav` with radius 20. Value rows are `.row`, and the total row is `.row.total`. It sits inside `.research-aside` together with the checkout button and the fine print.

**Tutorials nav (frozen)**: `<nav class="tab-nav"><span class="tab">Tutorials</span><span class="tab"></span><span class="tab"></span><span class="tab"></span></nav>`. There are 4 equal grid positions. "Tutorials" is plain text in the first. The other three are empty. There are 3 subtle vertical dividers (`.tab+.tab` 1px rgba(31,31,31,.12)). It has no box, border, background, fill or shadow, and each tab is 44px tall. **Don't restyle it or turn it into a segmented control** until it's deliberately redesigned.

**Footer**: `.site-footer` contains `.foot-top` (small brand + `.foot-tag`), then `nav.foot-links` (links at least 44px tall, `--t-sub`), then `.copy` (footnote). It has a 16px inset and no surface.

**Info pages (footer-only)**: `about.html`, `research.html`, `disclaimer.html`, `privacy.html`, `terms.html`, `contact.html`. These are quiet background pages reached only from the footer. Don't add a top nav, hamburger or home-page section for them. Shell: `header.site-header` (the logo links to `index.html`; no tab-nav), then one `section.section` with an eyebrow (`Info / Name`) and a single `article.card.doc`. That's a white surface capped at 760px, with `h1`, a `.fine` "Last updated" line, a `.lede`, `h2` at Title 2, lists, an optional `dl.labels` (rows with inset hairlines) and `.tbc` (lav, radius 12) for owner items still to be confirmed. Below the card is one `.doc-back` link home, then the shared footer. The footer marks the current page with `aria-current="page"` (600 weight). These pages don't load `main.js`.

**Footer links** (all pages): About · Research approach · Disclaimer · Privacy · Terms · Contact.

**Image placeholder**: `<div class="media media-1x1|media-4x3|media-16x9" aria-hidden="true"><svg class="media-glyph">…</svg></div>`. It's a neutral tinted block with radius 12 and a faint image glyph. It's `display:none` below 960px. In 05 it also holds a `.media-phone` 9:16 crop, and its fill follows the selected app hue (`:has()`).

## 4. Desktop rules
| Breakpoint | Layout |
|---|---|
| < 760 | Single column, max 560, 16px gutter, card padding 20, no placeholders |
| 760–959 | Max 860 with 32px padding, card padding 32, tiles 4 across, packages 2-up, packs 2-column group, hero button inline |
| ≥ 960 | Page cap 1064 incl. padding (≈1000 content). Two-column cards with placeholders |

The two-column card is `.card.has-media`, a 1fr 1fr grid with a 32px gap. `.card-text` holds the copy, `.media` sits beside it, and `.card-full` spans both columns below. `.flip` puts the media on the left.

| Section | Media side | Ratio | Notes |
|---|---|---|---|
| 01 Hook | Right | 1:1 | |
| 02 Hidden costs | Left (`flip`) | 4:3 | Tiles 2×2 under the text; `hr` + note + badge in `.card-full` |
| 03 Approach | Right | 1:1 | Trust box in `.card-full` |
| 04 Research | none | 16:9 thumbs in each `.pkg-body` | `.research-grid` 1.4fr/1fr: main column + sticky `.research-aside` (summary, CTA, note). Packs become 1 column here because the main column is too narrow for 2 |
| 05 App family | Left (`flip`) | 1:1 + 9:16 phone crop | Takes the app hue |
| 06 Explore further | Right | 4:3 (max 420px) | Link list full width in `.card-full` |
| Footer | none | — | |
The sides alternate R, L, R, —, L, R so the eye zig-zags down one spine.

## 5. Do / Don't
| Do | Don't |
|---|---|
| Use one surface per section, with a label above it | Wrap cards in bordered boxes, or nest cards |
| Use tokens for size, space, radius and colour | Add new font sizes, hard-coded radii or `!important` |
| Use capsule buttons and chips with targets ≥ 44px | Mix rectangle and pill CTAs |
| Start hairlines at the text, and don't add lines on the outer edges | Run full-width borders between list rows |
| Use fill contrast for state (inset ring when selected) | Stack borders, glows and drop shadows |
| Use the ShinsIO palette and our own SVG icons | Use iOS system colours, SF Symbols, or Apple names in branding |
| Hide placeholders on mobile and make them `aria-hidden` | Let decorative media push content below the fold on phones |
| Leave the Tutorials nav exactly as it is | Add a box or fill to it, or make it a segmented control |

## 6. Building a new page: checklist
1. Start from the page shell: `.page` → `header.site-header` → `nav.tab-nav` (copied verbatim) → `main` → `footer.site-footer`.
2. Each section is `section.section[id][aria-labelledby]` with an `.eyebrow` (numbered) and one `.card` (tint or `plain`).
3. One `h1` per page (`--t-large`), then an `h2` per section. Pick every other text size from the type scale.
4. Lists of links or options use the grouped-list pattern (white, radius 20, inset hairlines, 29px tile, SVG chevron).
5. Actions use `.btn` (capsule, 50px). Filters and selectors use `.chip`, with ARIA tab semantics if they switch content.
6. Inner radii are concentric: card 24, group 20, inner 12, icon 7, pill 999.
7. On desktop, add `.has-media`, `.card-text`, `.media`, and `.card-full` if needed. Alternate `.flip` and use the ratio table.
8. Check at 390, 820 and 1280: no horizontal scroll, targets ≥ 44px, `prefers-reduced-motion` respected, focus rings visible.
