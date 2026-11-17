---
name: Lereng Asri Nature Sanctuary
colors:
  surface: '#f9faf6'
  surface-dim: '#dadad6'
  surface-bright: '#f9faf6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f0'
  surface-container: '#eeeeea'
  surface-container-high: '#e8e8e4'
  surface-container-highest: '#e2e3df'
  on-surface: '#1a1c1a'
  on-surface-variant: '#414844'
  inverse-surface: '#2f312f'
  inverse-on-surface: '#f1f1ed'
  outline: '#717973'
  outline-variant: '#c1c8c2'
  surface-tint: '#3f6653'
  primary: '#012d1d'
  on-primary: '#ffffff'
  primary-container: '#1b4332'
  on-primary-container: '#86af99'
  inverse-primary: '#a5d0b9'
  secondary: '#2c694e'
  on-secondary: '#ffffff'
  secondary-container: '#aeeecb'
  on-secondary-container: '#316e52'
  tertiary: '#3e1e00'
  on-tertiary: '#ffffff'
  tertiary-container: '#5e3000'
  on-tertiary-container: '#f48c24'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c1ecd4'
  primary-fixed-dim: '#a5d0b9'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#274e3d'
  secondary-fixed: '#b1f0ce'
  secondary-fixed-dim: '#95d4b3'
  on-secondary-fixed: '#002114'
  on-secondary-fixed-variant: '#0e5138'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#f9faf6'
  on-background: '#1a1c1a'
  surface-variant: '#e2e3df'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses the serene, community-rooted warmth of rural mountain hospitality in Indonesia. The visual tone is grounded, welcoming, and restorative—evoking dewy mornings among volcanic hillsides, terraced bamboo pathways, and artisanal local warmth. 

The aesthetic is an organic modernism pairing rich botanical depth with comfortable, human-centered readability. Interfaces prioritize breathable negative space, unhurried pacing, clear wayfinding, and tactile responsiveness. The UI welcomes eco-travelers, cultural retreat seekers, and local explorers with a sense of place and dependable utility, balancing immersive eco-storytelling with frictionless mobile booking and direct local communication.

## Colors

The palette draws directly from the volcanic soil, lush highland vegetation, and sun-dried clay of the village:

- **Primary (`#1b4332`)**: Deep Forest Pine. Used for critical surfaces, high-emphasis text, primary action containers, and signature structural elements.
- **Secondary (`#2d6a4f`)**: Lush Emerald Mountain. Used for active navigation accents, secondary interactive affordances, active chips, and botanical highlights.
- **Tertiary (`#d97706`)**: Warm Honey Terracotta. Provides golden-hour contrast for availability badges, curated highlights, ratings, and promotional alerts. An accompanying warm terracotta tone (`#e76f51`) serves as a contextual alert and festive micro-accent.
- **Neutral (`#fbfbf7`)**: Organic Parchment. Serves as the primary canvas, supported by `#f4f1ea` for subtle container nesting, cards, and recessed divider areas. This soft cream foundation reduces glare under outdoor sunlight.
- **Supportive Neutrals**: `#1f2421` for crisp body copy (maintaining high readability against light parchment) and `#6e776e` for secondary botanical-tinted text.

## Typography

Typographic scale is structured around `Plus Jakarta Sans`, selected for its contemporary geometry, welcoming humanist curves, and high legibility on hand-held mobile devices under varied sunlight conditions. 

- Large display weights use tight letter-spacing to evoke boutique editorial travel journals.
- Body text retains generous leading to ensure long-form village stories, trail guides, and accommodation specs remain readable.
- Small labels and tags adopt slight letter-spacing to maintain structural legibility at compact dimensions.

## Layout & Spacing

A mobile-first fluid layout standard governs the design system, anchoring core touch experiences within ergonomic thumb zones.

- **Mobile Viewports (<640px)**: A 4-column responsive layout with 16px (`1rem`) outer margins and gutters. Single-column card flows dominate, with horizontal swipeable rails for attractions, homestays, and tour packages.
- **Tablet (640px - 1024px)**: An 8-column layout utilizing 32px (`2rem`) outer margins and 16px gutters, allowing split-pane itinerary exploration and 2-column card decks.
- **Desktop (>1024px)**: A 12-column grid maxing out at 1200px width with 48px (`3rem`) outer margins and 24px (`1.5rem`) gutters, creating centered, editorial-style destination profiles.
- **Touch Ergonomics**: All interactive elements must maintain a minimum touch target of 48px × 48px to accommodate one-handed outdoor usage along village trails.

## Elevation & Depth

Visual hierarchy uses warm, diffuse ambient elevation that mimics soft indirect morning light, avoiding cold industrial drop shadows.

- **Surface Tiers**:
  - `Base`: Canvas neutral (`#fbfbf7`).
  - `Layer 1 (Cards, Modules)`: Soft paper tint (`#ffffff` or `#f4f1ea`) supported by a warm shadow: `0px 4px 20px -2px rgba(45, 67, 50, 0.06), 0px 2px 6px -1px rgba(217, 119, 6, 0.04)`.
  - `Layer 2 (Modals, Action Sheets, Sticky Navigation)`: `0px 12px 32px -4px rgba(27, 67, 50, 0.12), 0px 4px 12px -2px rgba(45, 106, 79, 0.06)`.
- **Special Elevation**: The WhatsApp floating action trigger carries a signature organic emerald glow: `0px 8px 24px rgba(45, 106, 79, 0.32), 0px 2px 8px rgba(27, 67, 50, 0.2)`.
- **Outlines**: Fine borders (`1px`) use a delicate organic line (`rgba(45, 106, 79, 0.12)`) on flat cards to delineate boundaries when elevation is omitted.

## Shapes

The design system embraces deep organic curvature (Pill-shaped level 3) reminiscent of river stones, bamboo poles, and rolled palm leaves.

- **Standard Elements (Buttons, Inputs, Badges)**: Fully rounded pill contours (`1rem` / `9999px`) provide an inviting, thumb-friendly feel.
- **Cards and Containers (`rounded-2xl`)**: Feature generous corner radiuses (`2rem`) to frame homestay photos, cultural schedules, and excursion packages with a soft, natural border.
- **Feature Sheets & Hero Banners (`rounded-3xl`)**: Boast deep `3rem` curves on upper borders during bottom-sheet slide-ups and image card headers.

## Components

### Buttons
- **Primary**: Deep Forest Pine (`#1b4332`) container with pure white text, 52px height, full pill shape, and subtle forward chevron. Active state transitions to `#2d6a4f`.
- **Secondary**: Clear container with 1.5px solid border in `#2d6a4f`, forest green text, and soft cream tap-highlight.
- **Accent (Terracotta/Honey)**: `#d97706` background with white text for booking CTAs and instant reservations.
- **Touch Target**: Minimum height 48px, horizontal interior padding 24px (`space-lg`).

### Floating WhatsApp Action Trigger
- **Style**: Circular 56px × 56px FAB pinned to bottom-right (20px off-screen edges).
- **Appearance**: Emerald green gradient background (`#2d6a4f` to `#1b4332`), white WhatsApp icon, elevated with a green atmospheric glow (`rgba(45, 106, 79, 0.35)`).
- **Micro-interaction**: Gentle rhythmic pulse badge indicating active local tour guide availability.

### Nature Badges & Chips
- **Status & Categories**: Fully rounded pill tags (32px height) using `#f4f1ea` background, emerald text, and 8px interior horizontal padding.
- **Ecosystem Tags**: Organic icons (sprout, mountain, water, culture) prepended with 4px gap.
- **Terracotta Highlights**: Subtle `#fef3c7` container with `#d97706` text for verified ecotourism certifications and season openings.

### Homestay & Activity Cards
- **Structure**: White or ivory card canvas with `rounded-2xl` corners, 16px padding, and soft ambient shadow.
- **Imagery**: 16:10 or 1:1 image containers rounded to `1.5rem` with contextual bottom-left price badge overlay and top-right eco-badge.

### Form Inputs & Selectors
- **Fields**: 52px minimum height, pill-rounded, parchment background (`#f4f1ea`), interior 1px outline in muted green tint (`rgba(45, 106, 79, 0.2)`).
- **Focus State**: Deep Forest Pine border (`#1b4332`) with 3px subtle outer glow (`rgba(45, 106, 79, 0.15)`).

### Selection Controls (Checkboxes & Radios)
- **Checkboxes**: 24px × 24px soft rounded squares (8px border radius); Forest Pine fill when checked with white organic checkmark.
- **Radio Buttons**: 24px × 24px concentric circles with Forest Pine outer rim and Terracotta inner dot when selected.

### Village Weather & Elevation Header Module
- **Compact Bar**: Translucent parchment bar displaying real-time mountain altitude, ambient mountain temperature, and air quality index using miniature botanical icons.