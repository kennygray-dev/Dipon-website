# Omai Villas — Design System

An ultra-luxury villa-rental and hospitality brand. Private, architectural, deeply considered — closer to a private members' club or an art-world brand than a commercial rental site. The system is monochromatic warm-neutral with proprietary serif/geometric type; **all colour lives in photography**.

> **Source:** built from `uploads/DESIGN.md` (a two-layer spec: a brand-agnostic Core Design System + the Omai Villas Brand Theme). No codebase or Figma was attached — DESIGN.md is the single source of truth. Anyone iterating should read it alongside this readme.

---

## CONTENT FUNDAMENTALS

**Voice:** quiet rather than loud, confident rather than promotional. It *implies*; it does not shout. Unhurried, declarative sentences. Reads like an architecture monograph, not a booking site.

**Audience:** ultra-high-net-worth, 38–65, Paris-adjacent lean. They already know five-star and want something architectural, personal, location-specific.

**Casing & person:** mostly third-person and impersonal ("Houses that belong to their landscape"); "we" used sparingly for the studio. Sentence case in prose; UPPERCASE only for the tracked label face (eyebrows, nav, buttons, meta).

**Vocabulary:** "rarefied", "fabled", "effortlessly elevated", "impeccably appointed". Lead with credibility signals — architect names, design-studio provenance, year — over feature lists.

**Hard copy rules:**
- **No prices, ever.**
- **No "Book now."** Only "Enquire", "Explore", "Discover".
- Short, declarative, unhurried sentences.
- **No emoji. No exclamation marks.** No marketing urgency.

**Examples:** Eyebrow → "ST BARTHÉLEMY · IBIZA". Headline → "Houses that belong to their landscape." CTA → "Explore the collection". Meta → "Six bedrooms · Studio KO" (never a nightly rate).

---

## VISUAL FOUNDATIONS

**Colour** — fully monochromatic warm-neutral: a single ramp from sand (`#F5F4F1`) through stone and taupe to espresso (`#2C2927`), plus two warm dark browns (`#5F514B`, `#7D6D67`) for inverse sections. **No blue, no green, no chromatic accent** (`--color-accent` is deliberately `transparent`). The only saturated colour is `#D45656`, reserved exclusively for form-validation errors. Colour otherwise enters *only* through photography.

**Type** — "literary meets architectural": an ultra-thin display serif (Canela Text, weight **250**) in tension with a spaced geometric uppercase label face (DecagramRegular), over a light reading face (SilvanaTextLight). Display is set large and airy; labels are small, uppercase, tracked +1.0–1.3px. *(Fonts are proprietary — substituted here; see Iconography/Fonts note below.)*

**Spacing** — one 4px base unit. A single macro vertical-rhythm token, `--space-section-y: 180px` ("space to breathe"), separates every top-level section. Two gutters only (60px desktop / 20px mobile); components never set their own page-edge padding. Content widths are named caps (`--container-xs…lg`), never magic numbers.

**Backgrounds** — full-bleed photography is *the* primary visual element; everything else supports it. Dark sections use the warm browns. No gradients-as-decoration, no textures, no patterns. (Placeholder gradients in this build are stand-ins for real photography.)

**Corner radii** — **0px everywhere.** `--radius-sm/md/button` are all zero. Square corners are a deliberate, architectural brand decision.

**Shadows / elevation** — **none.** `--shadow-sm/md` are `none`. Depth comes only from photography, z-index layering, and colour contrast — never drop shadows.

**Cards** — anatomy is media → title → metadata → arrow. No border-radius, no shadow; a hairline border at most. The media block is the focus; chrome is minimal.

**Borders** — hairline `0.67px` solid `--color-border-default` (`#CEC9C4`) on forms and ghost buttons. `--color-border-strong` (`#9C938C`) for dividers only — never as text on the light background (fails contrast).

**Layout** — editorial asymmetric offset: on two-column sections text begins ~30% from the left, leaving magazine-style whitespace. Header is fixed, transparent over hero imagery, switching to solid `--color-bg-page` on scroll.

**Transparency / blur** — minimal. Scrim layers over full-bleed media (opacity tokenised at `--scrim-opacity: 0.32`, never assumed) for legibility; no glass/blur effects.

**Motion** — one easing curve (`cubic-bezier(0.4,0,0.2,1)`) and one duration (`0.2s`), reused everywhere. Fades and small translations only — no bounces, no infinite loops. Respects `prefers-reduced-motion`.

**Hover states** — subtle: cards drop to `opacity: 0.9`; the arrow glyph scales `1.1` / nudges right; ghost-button borders darken to `--color-border-strong`. **Press states** are simply the resting state with reduced opacity — no shrink, no colour pop.

**Focus** — mandatory visible outline (`1px solid currentColor`, offset 3px). Never `outline: none` without a replacement.

---

## ICONOGRAPHY

**This brand is almost entirely icon-free.** The spec is explicit: zero decorative icons or illustration. The only graphic elements are:

1. **The wordmark** — typographic (Canela Text / Cormorant substitute), *never* an image logo. See `assets/wordmark.svg` (dark) and `assets/wordmark-light.svg` (on dark).
2. **A single arrow glyph** — `assets/arrow.svg`, a thin square-cap line + chevron. Used on cards and CTAs; scales `1.1` / translates on hover. This is the *only* recurring iconographic element.
3. **A minimal menu glyph** (two hairlines) inside the `Header` component for mobile.

No icon font, no SVG icon set, no emoji, no unicode-as-icon. If a future surface genuinely needs UI icons (e.g. an app), use a **thin (1px) line set** to match the arrow's weight — e.g. Feather/Lucide at `stroke-width: 1` — and flag it, because it is a departure from the source brand's icon-free stance.

---

## FONTS — substitution flag ⚠️

The three brand faces are **proprietary, self-hosted `.woff2` files not available to this build**. They are substituted via Google Fonts (`tokens/fonts.css`):

| Brand face | Role | Substitute |
|---|---|---|
| **Canela Text** (thin display serif, wt 250) | display | **Cormorant Garamond** (300) |
| **DecagramRegular** (geometric uppercase) | label | **Jost** |
| **SilvanaTextLight** (light reading face) | body | **Mulish** |

These are *close, not exact*. To make the system pixel-faithful, supply the real `.woff2` files — replace the `@import` in `tokens/fonts.css` with `@font-face` rules and update the `--font-*` variables in `tokens/typography.css`. **This is the top iteration ask.**

---

## INDEX / MANIFEST

**Root**
- `styles.css` — global entry point (consumers link this one file); `@import`s everything below.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill wrapper for use in Claude Code.

**`tokens/`** — `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `shape.css` · `motion.css`

**`assets/`** — `wordmark.svg` · `wordmark-light.svg` · `arrow.svg`

**`components/`** (namespace `OmaiVillasDesignSystem_92bcf5`)
- `core/` — **Button** (primary/secondary/ghost), **Eyebrow**
- `forms/` — **Input** (+ multiline textarea skin)
- `content/` — **VillaCard**, **SectionHeading**
- `navigation/` — **Header** (transparent/solid, three-zone)

**`ui_kits/omai-villas-web/`** — full homepage recreation (Hero · Philosophy · Collection · Destinations · Studio · Enquiry · Footer). Entry: `index.html`.

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

---

## USING THE SYSTEM
Link `styles.css`, load `_ds_bundle.js`, then `const { Button, VillaCard, … } = window.OmaiVillasDesignSystem_92bcf5`. Reference visual values **only** through CSS custom properties — never hardcode a colour, font, radius, or shadow. Keep to the three button roles, the named spacing/container tokens, and the icon-free stance. When in doubt: quieter, larger type, more whitespace, and let photography carry the colour.
