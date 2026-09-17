---
version: alpha
name: Herbs-and-Brews-design-system
description: A premium, editorial interpretation of Herbs & Brews' design language — a heritage Indian pantry brand whose surface is a warm ivory canvas broken by a single restrained terracotta accent and a rare brass hairline, serif display type paired with quiet sans body copy, and asymmetric-radius product photography that reads like a boutique grocer's catalogue, not a template.

colors:
  primary: "#A8462A"
  primary-soft: "#C97456"
  primary-deep: "#7A2F1B"
  on-primary: "#FAF6EF"
  gold: "#A6832E"
  gold-soft: "#C7AD73"
  forest: "#384433"
  forest-soft: "#5C6B52"
  ink: "#211D18"
  ink-strong: "#14110D"
  body: "#5B5347"
  mute: "#8C8373"
  hairline: "#DED4C4"
  hairline-soft: "#EDE6D9"
  canvas: "#FAF6EF"
  canvas-soft: "#F1EAE0"
  canvas-deep: "#EAE1D2"

typography:
  display-xl:
    fontFamily: Fraunces, Georgia, serif
    fontSize: 64px
    fontWeight: 380
    lineHeight: 68px
    letterSpacing: -0.5px
  display-lg:
    fontFamily: Fraunces, Georgia, serif
    fontSize: 40px
    fontWeight: 420
    lineHeight: 46px
    letterSpacing: -0.4px
  display-md:
    fontFamily: Fraunces, Georgia, serif
    fontSize: 28px
    fontWeight: 500
    lineHeight: 34px
    letterSpacing: -0.2px
  display-sm:
    fontFamily: Fraunces, Georgia, serif
    fontSize: 22px
    fontWeight: 500
    lineHeight: 28px
  accent-italic:
    fontFamily: Fraunces, Georgia, serif
    fontStyle: italic
    fontWeight: 450
    letterSpacing: -0.2px
  eyebrow-uppercase:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 13px
    fontWeight: 600
    lineHeight: 18px
    letterSpacing: 2.2px
  body-lg:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 29px
  body-md:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 26px
  body-md-strong:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px
  body-sm:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 22px
  caption:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: 0.2px
  button-md:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 15px
    fontWeight: 600
    lineHeight: 20px
    letterSpacing: 0.1px

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 10px
  lg: 24px
  signature-tl: 4px 32px 4px 32px
  pill: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  3xl: 48px
  4xl: 64px
  5xl: 96px
  6xl: 128px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.md} {spacing.3xl}"
  nav-link:
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.xl}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.xl}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary-deep}"
    typography: "{typography.button-md}"
    padding: "{spacing.sm} {spacing.md}"
  badge-pill:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.forest}"
    borderColor: "{colors.hairline}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
  card-product:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  card-testimonial:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-sm}"
    padding: "{spacing.3xl}"
  image-frame:
    rounded: "{rounded.signature-tl}"
    borderColor: "transparent"
  gold-divider:
    backgroundColor: "{colors.canvas}"
    borderColor: "{colors.gold}"
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas-soft}"
    typography: "{typography.body-sm}"
    padding: "{spacing.4xl} {spacing.3xl}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.5xl} {spacing.3xl}"
  content-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.5xl} {spacing.3xl}"
  content-band-inverted:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.canvas}"
    typography: "{typography.display-lg}"
    padding: "{spacing.5xl} {spacing.3xl}"
---

## Overview

Herbs & Brews is a heritage Indian pantry brand — dry fruits, spices, dates, and hand-blended masala teas — and the design system's job is to make an everyday local shop feel like a considered, boutique grocer without losing warmth. The page runs on a single warm ivory `{colors.canvas}` (`#FAF6EF`) surface with no stark white and no dark mode; the only saturated colour on the page is a single restrained terracotta `{colors.primary}` (`#A8462A`), reserved for CTAs and key accent moments, with a rarer brass `{colors.gold}` (`#A6832E`) hairline used only as a quiet mark of quality — a divider, a small quality-seal detail — never a fill.

The decorative system is editorial, not decorative-for-its-own-sake. There is no bright gradient, no cutesy pastel wash, no stock "wellness" iconography. Instead, the brand leans on typographic contrast — a large-scale serif display (Fraunces) paired with an occasional italic accent word in terracotta, set against clean sans body copy (Inter) — and a signature asymmetric image-corner treatment (`{rounded.signature-tl}`) that appears on every product and story photograph, giving the whole site one consistent, recognisable visual signature rather than uniform rounded rectangles everywhere.

Photography carries real weight here — this is a grocer, and the product photography (nuts, spice bowls, tea) is the brand's actual content, not decoration layered on top of generic UI. Every image gets the asymmetric-radius frame and sits on a slightly recessed `{colors.canvas-soft}` card, never a hard white box.

**Key Characteristics:**

- A single terracotta accent `{colors.primary}` (`#A8462A`) carries every CTA and every headline accent word. No second saturated colour competes with it.
- A rare brass `{colors.gold}` (`#A6832E`) hairline appears only as a divider or small quality mark — never a background fill, never on more than one element per section.
- Warm ivory canvas (`{colors.canvas}` `#FAF6EF`) is the only page surface; a deep forest `{colors.forest}` (`#384433`) band is used sparingly to invert one section (e.g. the map/visit-us band) for rhythm.
- A signature asymmetric image-radius (`4px 32px 4px 32px`) appears on every photograph in the site — the brand's one repeated, recognisable shape move.
- Fraunces (serif, light-to-medium weight) carries every headline, with an italic accent word in terracotta marking the emotional beat of each heading; Inter carries everything else.
- Buttons are tight 4 px rounded rectangles, never pills — pills are reserved for small status/rating badges only.

## Colors

### Brand & Accent

- **Terracotta** (`{colors.primary}` — `#A8462A`): The single brand accent. Every primary CTA, every italic headline accent word, the "Order on WhatsApp" button. Reserved — never used as a large background fill.
- **Terracotta Soft** (`{colors.primary-soft}` — `#C97456`): Hover states, secondary accent marks, subtle icon fills.
- **Terracotta Deep** (`{colors.primary-deep}` — `#7A2F1B`): Link colour in body copy, ghost-button text.
- **Brass / Gold** (`{colors.gold}` — `#A6832E`): The brand's quality mark. Used only for thin dividers, a small seal/badge outline, or a single underline stroke beneath a hero accent word. Never a fill, never repeated more than once per section.

### Surface

- **Canvas** (`{colors.canvas}` — `#FAF6EF`): The default warm-ivory page background. The brand's only light surface.
- **Canvas Soft** (`{colors.canvas-soft}` — `#F1EAE0`): Product cards, form inputs, and any surface that needs to sit just slightly recessed from the page.
- **Canvas Deep** (`{colors.canvas-deep}` — `#EAE1D2`): Rare tertiary surface — category ticker bands, footer dividers.
- **Forest** (`{colors.forest}` — `#384433`): The brand's one inverted band colour — used for a single section (map/visit-us, or footer) to create rhythm against the ivory canvas.
- **Hairline** (`{colors.hairline}` — `#DED4C4`): 1 px borders on cards, inputs, and dividers between rows.
- **Hairline Soft** (`{colors.hairline-soft}` — `#EDE6D9`): Lighter internal dividers within a card.

### Text

- **Ink** (`{colors.ink}` — `#211D18`): Default text colour — warm near-black, never pure black.
- **Ink Strong** (`{colors.ink-strong}` — `#14110D`): Hero headline weight, highest-emphasis copy.
- **Body** (`{colors.body}` — `#5B5347`): Secondary text — supporting paragraphs, nav links.
- **Mute** (`{colors.mute}` — `#8C8373`): Captions, fine print, timestamps.

### Semantic

No bright error/success palette is exposed on the marketing surface — this is a single-location retail brand, not a transactional app. Where a confirmation state is needed (e.g. "message sent"), use `{colors.forest}` for success and `{colors.primary}` for attention — never introduce a new saturated red or blue.

## Typography

### Font Family

Two faces carry the system:

1. **Fraunces** for every display headline and the italic accent-word treatment. Use optical-size variants where available; weights 380–500 are the working set — never above 500, the brand's headlines stay calm and editorial, not heavy or shouty.
2. **Inter** for every body, button, nav, and caption role. Weights 400 / 500 / 600 are the working set.

### Hierarchy

| Token                            | Size             | Weight     | Line Height | Letter Spacing | Use                                                                                 |
| -------------------------------- | ---------------- | ---------- | ----------- | -------------- | ----------------------------------------------------------------------------------- |
| `{typography.display-xl}`        | 64px             | 380        | 68px        | -0.5px         | Hero headline.                                                                      |
| `{typography.display-lg}`        | 40px             | 420        | 46px        | -0.4px         | Section headlines.                                                                  |
| `{typography.display-md}`        | 28px             | 500        | 34px        | -0.2px         | Card-group titles, "About" sub-headings.                                            |
| `{typography.display-sm}`        | 22px             | 500        | 28px        | 0              | Testimonial quotes, product-card names.                                             |
| `{typography.accent-italic}`     | inherits context | 450 italic | inherits    | -0.2px         | Headline accent word ("well chosen", "with purpose"), always in `{colors.primary}`. |
| `{typography.eyebrow-uppercase}` | 13px             | 600        | 18px        | 2.2px          | UPPERCASE eyebrow tags above section headlines.                                     |
| `{typography.body-lg}`           | 18px             | 400        | 29px        | 0              | Lead paragraphs (hero subhead, About intro).                                        |
| `{typography.body-md}`           | 16px             | 400        | 26px        | 0              | Default body paragraph.                                                             |
| `{typography.body-md-strong}`    | 16px             | 600        | 24px        | 0              | Bolded inline body, price labels.                                                   |
| `{typography.body-sm}`           | 14px             | 400        | 22px        | 0              | Secondary body, nav links, product descriptions.                                    |
| `{typography.caption}`           | 12px             | 500        | 16px        | 0.2px          | Fine print, badge-pill labels, timestamps.                                          |
| `{typography.button-md}`         | 15px             | 600        | 20px        | 0.1px          | Button labels.                                                                      |

### Principles

- **Fraunces at light-to-medium weight is the brand's counter to "loud" grocery marketing.** A calm serif at 64 px reads considered, not shouty.
- **The italic terracotta accent word is the brand's signature typographic move** — one per headline, never more. It's what makes each heading feel written, not templated.
- **Sans/serif contrast carries the editorial voice.** Fraunces for anything emotional or scene-setting; Inter for anything functional (prices, buttons, nav, descriptions).

### Note on Font Substitutes

- **Serif** — _Fraunces_ is the brand's actual face; _Source Serif 4_ or _Lora_ (italic-capable) are the best free substitutes if self-hosting isn't available.
- **Sans** — _Inter_ is the working face; _General Sans_ or _Satoshi_ are close substitutes with a slightly warmer character.

## Layout

### Spacing System

- **Base unit**: 4 px, doubling toward larger section gaps — premium editorial layouts read as premium partly through generous whitespace, not density.
- **Tokens**: `{spacing.xxs}` 2 px · `{spacing.xs}` 4 px · `{spacing.sm}` 8 px · `{spacing.md}` 12 px · `{spacing.lg}` 16 px · `{spacing.xl}` 24 px · `{spacing.2xl}` 32 px · `{spacing.3xl}` 48 px · `{spacing.4xl}` 64 px · `{spacing.5xl}` 96 px · `{spacing.6xl}` 128 px.
- **Section padding**: hero + content bands use `{spacing.5xl}` 96 px top/bottom — generous breathing room is part of the "premium, not vibe-coded" signal.
- **Card interior padding**: product cards sit at `{spacing.xl}` 24 px; testimonial cards at `{spacing.3xl}` 48 px.

### Grid & Container

- Marketing container centres at roughly 1200–1320 px; horizontal gutters of `{spacing.3xl}` on desktop, `{spacing.lg}` on mobile.
- Product-card grids: 4-up desktop, 2-up tablet, 1-up mobile — matches the existing "Favourites, freshly packed" layout.

### Responsive Strategy

#### Breakpoints

| Name    | Width      | Key Changes                                                                     |
| ------- | ---------- | ------------------------------------------------------------------------------- |
| Mobile  | < 768px    | Hero 64→36 px; cards 1-up; nav hamburger; sticky WhatsApp button pinned bottom. |
| Tablet  | 768–1023px | Cards 2-up; nav stays horizontal.                                               |
| Desktop | ≥ 1024px   | Full 4-up product grids.                                                        |

#### Touch Targets

Buttons render at ~48 px tall (12 px vertical padding + 24 px content). Meets WCAG AAA at all breakpoints — important for an older/family customer base browsing on mobile.

#### Collapsing Strategy

Nav collapses to hamburger at mobile; the sticky "Order on WhatsApp" button stays pinned regardless of scroll position. Product grids drop to 1-up; hero typography scales fluidly rather than stepping.

#### Image Behaviour

Every photograph — hero, product, story — renders inside the signature asymmetric-radius frame (`{rounded.signature-tl}`). No image ever uses a plain rectangle or a uniform rounded-rectangle; this asymmetry is the brand's one repeated shape signature and should never be applied inconsistently within the same section.

## Elevation & Depth

| Level                 | Treatment                                                         | Use                                                      |
| --------------------- | ----------------------------------------------------------------- | -------------------------------------------------------- |
| Level 0 — Flat        | No shadow, no border.                                             | Full-bleed ivory or forest bands.                        |
| Level 1 — Hairline    | 1 px solid `{colors.hairline}` border on `{colors.canvas-soft}`.  | Default for product cards, inputs.                       |
| Level 2 — Soft Lift   | `0 12px 32px rgba(33, 29, 24, 0.08)` diffused, warm-toned shadow. | Hovering product cards, floating WhatsApp button.        |
| Level 3 — Modal Stack | `0 24px 64px rgba(20, 17, 13, 0.22)` heavier diffused shadow.     | Modal / lightbox surfaces (e.g. enlarged product photo). |

### Decorative Depth

- Hairline cards on ivory are the default elevation mode — reserve shadows for interactive/hover states only, never as a static resting state (a resting shadow reads as generic template chrome).
- A single 1 px brass `{colors.gold}` line marks the "quality" divider — beneath the hero eyebrow, or above the footer. Never more than one per page section.
- The signature asymmetric image-radius substitutes for a shadow as the brand's primary depth cue on photography.

## Shapes

### Border Radius Scale

| Token                    | Value             | Use                                                                      |
| ------------------------ | ----------------- | ------------------------------------------------------------------------ |
| `{rounded.none}`         | 0px               | Full-bleed bands.                                                        |
| `{rounded.xs}`           | 2px               | Inline badge borders.                                                    |
| `{rounded.sm}`           | 4px               | Buttons, inputs — tight, precise, not soft.                              |
| `{rounded.md}`           | 10px              | Product/testimonial card chrome.                                         |
| `{rounded.lg}`           | 24px              | Large decorative surfaces (rare).                                        |
| `{rounded.signature-tl}` | 4px 32px 4px 32px | Every photograph on the site — the brand's one repeated shape signature. |
| `{rounded.pill}`         | 9999px            | Rating/status badges only.                                               |

## Components

### Buttons

**`button-primary`** — the terracotta CTA ("Order on WhatsApp", "Explore the pantry").

- Background `{colors.primary}`, text `{colors.on-primary}` (warm ivory), label `{typography.button-md}`, padding `{spacing.md} {spacing.xl}`, shape `{rounded.sm}` 4 px.

**`button-outline`** — the ink-hairline secondary button.

- Transparent background, text `{colors.ink}`, 1 px solid `{colors.ink}` border, same typography/padding/shape.

**`button-ghost`** — text-only, terracotta-deep label, for tertiary actions ("Enquire on WhatsApp" links inside product cards).

- Transparent background, text `{colors.primary-deep}`, no border, no background even on hover — only an underline reveal.

**`badge-pill`** — rating badge, "Women-owned" tag, category filter chips.

- Background `{colors.canvas-soft}`, text `{colors.forest}`, hairline border, body in `{typography.caption}`, shape `{rounded.pill}`.

### Cards & Containers

**`card-product`** — the default product card.

- Background `{colors.canvas-soft}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border (resting), `{rounded.md}` chrome, photo inside using `{rounded.signature-tl}`. On hover: Level 2 soft-lift shadow, image scales 1.03x.

**`card-testimonial`** — the review quote block.

- Background `{colors.canvas}`, no border, generous `{spacing.3xl}` padding, quote set in `{typography.display-sm}` Fraunces italic, attribution in `{typography.body-sm}`.

### Inputs & Forms

**`text-input`** — standard input (if a contact/enquiry form is added).

- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}`, body `{typography.body-sm}`, shape `{rounded.sm}`.

### Navigation

**`nav-bar`** — the sticky top nav on ivory.

- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.md} {spacing.3xl}`; on scroll, add a 1 px `{colors.hairline}` bottom border rather than a shadow.

**`nav-link`** — link items in nav, set in `{typography.body-sm}`, colour `{colors.body}`, hover state moves to `{colors.ink}` with a thin terracotta underline reveal.

**`footer`** — the inverted forest-green footer band.

- Background `{colors.forest}` (or `{colors.ink}` as an alternate), text `{colors.canvas-soft}`, padding `{spacing.4xl} {spacing.3xl}`.

### Signature Components

**`hero-band`** — the ivory hero with the 64-px Fraunces headline and one terracotta italic accent word.

- Background `{colors.canvas}`, headline text `{colors.ink-strong}`, accent word in `{typography.accent-italic}` + `{colors.primary}`. Eyebrow above in `{typography.eyebrow-uppercase}`.

**`content-band`** — standard ivory content band hosting product grids and story sections.

- Background `{colors.canvas}`, text `{colors.ink}`, section headline in `{typography.display-lg}` with one accent-italic word.

**`content-band-inverted`** — the single forest-green inverted band (recommended for the "Visit Us"/map section) that breaks the ivory rhythm once per page.

- Background `{colors.forest}`, text `{colors.canvas}`, same headline treatment with accent word rendered in `{colors.gold}` instead of terracotta for variety within the inverted band only.

**`gold-divider`** — the brand's rare chromatic divider.

- 1 px solid `{colors.gold}`, used once per major section boundary at most — beneath a hero eyebrow, or above the footer. This is the brand's only "precious" decorative line; overusing it cheapens the effect.

## Do's and Don'ts

### Do

- Reserve `{colors.primary}` (`#A8462A`) for CTAs and the one italic accent word per headline. Consistency of this single move is what reads as "designed," not "decorated."
- Use `{colors.gold}` only as a hairline divider or small badge outline — never as a fill, never more than once per section.
- Apply the signature asymmetric image radius (`{rounded.signature-tl}`) to every photograph, consistently, so it reads as an intentional brand mark rather than a one-off flourish.
- Keep card elevation at rest to hairline-only; introduce the soft warm shadow only on hover/interaction.
- Pair Fraunces (headlines, italic accents) with Inter (everything else) — the contrast between the two faces is what carries the "boutique grocer" voice.
- Use the forest-green inverted band exactly once on the page for rhythm — more than that and the ivory canvas loses its calm, continuous feel.

### Don't

- Don't introduce a second saturated accent colour (no bright green, no blue) — terracotta is the brand's one chromatic signature; gold is its one precious accent.
- Don't use a uniform rounded-rectangle on photography. The asymmetric signature radius is the brand's differentiator from generic templates.
- Don't add a resting drop-shadow to cards — it's the single fastest way to make a premium ivory-and-serif site look like a default Tailwind template.
- Don't set headline type in Fraunces above weight 500. The brand's calm, editorial voice depends on restraint at the display level.
- Don't italicise more than one word per headline. One accent word reads as considered; several reads as decorative overkill.
- Don't fill large surfaces with `{colors.gold}` — it exists to be rare. A gold background band or gold button will read as "generic luxury template" rather than "hand-chosen quality mark."
