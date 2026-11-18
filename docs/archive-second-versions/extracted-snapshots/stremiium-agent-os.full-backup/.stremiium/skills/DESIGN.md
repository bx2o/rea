# Design System Document: The Monolithic Gallery

## 1. Overview & Creative North Star

The Creative North Star for this design system is **"The Digital Curator."**

This is not a template; it is a spatial experience designed to mimic the atmosphere of a high-end, brutalist art gallery. We are moving away from the "web-standard" of soft buttons and friendly shadows. Instead, we embrace the tension between the raw, tactile nature of pottery and the cold, precise digital environment.

By utilizing a strictly monochromatic palette and a total rejection of rounded corners (0px radius across the entire system), we create a "Frame" for the work. The design system breaks the traditional grid through intentional asymmetry—placing a heavy `display-lg` headline against an expansive vacuum of `surface` space, or overlapping sharp-edged image containers to create a sense of physical depth without using shadows.

## 2. Colors: The High-Contrast Monolith

We operate in a world of absolute values. The interaction between `#000000` and `#FFFFFF` is used to create rhythm and focus.

- **Primary (#000000):** Used for absolute authority. It is the weight of the clay.
- **Surface (#f9f9f9):** Our "Gallery White." It provides a slightly softer base than pure #FFFFFF to allow the `surface-container-lowest` (#ffffff) to act as a source of "light."
- **The "No-Line" Rule:** Under no circumstances are 1px solid borders to be used for sectioning. Structural boundaries must be defined by shifting from `surface` (#f9f9f9) to `surface-container-low` (#f3f3f4) or through the stark juxtaposition of `primary` black blocks against white backgrounds.
- **Surface Hierarchy:** Use the hierarchy to "carve" the interface:
  - **Level 0 (Surface):** The main gallery floor.
  - **Level 1 (Surface-Container-Low):** Carved-out niches for secondary information.
  - **Level 2 (Surface-Container-Highest):** Deep contrast areas for high-priority metadata.

## 3. Typography: The Editorial Voice

Our typography pairing reflects the duality of the craft: the modern precision of the wheel (Montserrat/Epilogue) and the ancient tradition of the vessel (Lora/Noto Serif).

- **Headings (Epilogue/Montserrat):** These are our structural beams. Use `display-lg` for hero statements. Tracking should be set to -0.02em for a tighter, more architectural feel. All headings must be in `primary` (#000000).
- **Body (Noto Serif/Lora):** This provides the "human touch." Use `body-lg` for descriptions of artisanal techniques. The serif nature of the font connects the user to the history of pottery.
- **Labels (Epilogue):** Set in all-caps with increased letter spacing (+0.1em) to act as technical "spec sheets" for dimensions and materials.

## 4. Elevation & Depth: Tonal Layering

In this system, "Elevation" is a lie. We do not "lift" objects; we "layer" them.

- **The Layering Principle:** Depth is achieved by stacking sharp-edged blocks. A product detail card (`surface-container-lowest`) should sit on a background of `surface-container`. The 0px radius ensures these look like stacked sheets of heavy cardstock.
- **Zero Shadows:** Traditional box-shadows are strictly prohibited. To create a "floating" effect, use a `1px` "Ghost Border" using the `outline-variant` token at 10% opacity, or simply rely on the stark contrast between a black element and a white background.
- **Glassmorphism (The Glaze):** To mimic ceramic glazing, use `surface` colors at 80% opacity with a `backdrop-filter: blur(20px)`. This is reserved for navigation bars and modal overlays, allowing the texture of the pottery imagery to bleed through the UI.

## 5. Components: Sharp Precision

### Buttons

- **Primary:** Solid `primary` (#000000) background, `on-primary` (#e2e2e2) text. 0px border radius. Hover state: Inverse to `on-primary` background with a 2px `primary` internal stroke.
- **Tertiary:** Pure text with a 1px underline that expands to 2px on hover.

### Input Fields

- **Style:** No 4-sided boxes. Use a bottom-border only (`outline` token) to maintain the minimalist "architectural sketch" feel.
- **Focus State:** The bottom border increases from 1px to 3px. No "glow" or "halo" effects.

### Cards

- **Constraint:** Forbid the use of divider lines within cards. Use `spacing-scale` (e.g., 32px vertical gaps) to separate the product image from the price and title.
- **Layout:** Experiment with "Broken Grid" layouts where the image container is offset by -24px from the text container.

### Signature Component: The "Scale Indicator"

A vertical or horizontal bar (using `primary-fixed-dim`) that runs alongside product imagery to indicate the height/width of the ceramic piece, reinforcing the "geometric" and "precise" brand identity.

## 6. Do’s and Don’ts

### Do:

- **Do** use extreme negative space. If a section feels "empty," leave it. It emphasizes the "object" on the page.
- **Do** align text to a rigorous grid. If an image is 4 columns wide, the text must start exactly on the 5th column.
- **Do** use high-resolution textures in photography (clay grain, glaze crackle) to contrast against the perfectly flat UI.

### Don't:

- **Don't** use any radius. Even a 1px corner radius breaks the "Monolithic" aesthetic.
- **Don't** use grey text for body copy. Use `on-surface` (#1a1c1c) for maximum legibility and contrast.
- **Don't** use icons with rounded caps. All iconography must be "Sharp" or "Square" style to match the typography.
