---
name: Neelam Dental & Family Clinic (demo)
description: A clinic site laid as cool kashi tilework, where every free appointment is a glazed tile you can take.
colors:
  glaze: "#f5f7f2"
  glaze-raised: "#fcfdfa"
  ink: "#172b6b"
  lapis: "#1d3a8a"
  turq: "#1f9a95"
  turq-glaze-highlight: "#f4fbfa"
  turq-glaze-1: "#e3f4f1"
  turq-glaze-2: "#c4e9e4"
  turq-glaze-3: "#9fd9d1"
  turq-edge: "#6fc2b8"
  ochre: "#c9922e"
  ochre-glaze: "#f6e4bf"
  ochre-edge: "#d9ad5c"
  brick: "#9c4a2f"
  brick-matte: "#ead9cf"
  brick-edge: "#d2b2a3"
  grout: "#c7d1ca"
  grout-strong: "#a9b7ae"
typography:
  display:
    fontFamily: "'Rozha One', 'Iowan Old Style', Georgia, serif"
    fontSize: "clamp(2.4rem, 1.5rem + 2.6vw, 3.7rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  token:
    fontFamily: "'Rozha One', 'Iowan Old Style', Georgia, serif"
    fontSize: "clamp(2.5rem, 1.6rem + 3.6vw, 4.25rem)"
    fontWeight: 400
    lineHeight: 1
  headline:
    fontFamily: "'Rozha One', 'Iowan Old Style', Georgia, serif"
    fontSize: "clamp(2rem, 1.5rem + 2vw, 2.875rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  title:
    fontFamily: "'Rozha One', 'Iowan Old Style', Georgia, serif"
    fontSize: "clamp(1.5rem, 1.25rem + 1vw, 1.875rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  subtitle:
    fontFamily: "'Hind', 'Segoe UI', system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.25
  body:
    fontFamily: "'Hind', 'Segoe UI', system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "tnum"
  label:
    fontFamily: "'Hind', 'Segoe UI', system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
  urdu-name:
    fontFamily: "'Noto Nastaliq Urdu', serif"
    fontSize: "1.05rem"
    fontWeight: 600
    lineHeight: 2.2
rounded:
  small: "4px"
  tile: "6px"
  frame: "10px"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "5": "1.5rem"
  "6": "2rem"
  "7": "3rem"
  "8": "4.5rem"
  "9": "6.5rem"
components:
  button-glaze:
    backgroundColor: "{colors.turq-glaze-2}"
    textColor: "{colors.ink}"
    typography: "{typography.subtitle}"
    rounded: "{rounded.tile}"
    padding: "0 1.5rem"
    height: "48px"
  button-quiet:
    backgroundColor: "{colors.glaze-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tile}"
    padding: "0 1.5rem"
    height: "48px"
  doctor-chip:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    rounded: "{rounded.tile}"
    padding: "0.5rem 0.75rem"
    height: "48px"
  doctor-chip-selected:
    backgroundColor: "{colors.turq-glaze-1}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tile}"
  slot-free:
    backgroundColor: "{colors.turq-glaze-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tile}"
    padding: "0.5rem"
    height: "54px"
  slot-taken:
    backgroundColor: "{colors.brick-matte}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tile}"
    height: "54px"
  day-tile-last:
    backgroundColor: "{colors.ochre-glaze}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tile}"
    height: "76px"
  booking-token:
    backgroundColor: "{colors.lapis}"
    textColor: "{colors.glaze-raised}"
    typography: "{typography.token}"
    rounded: "{rounded.tile}"
    padding: "2rem 1.5rem 1.5rem"
  field:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    rounded: "{rounded.tile}"
    padding: "0 0.75rem"
    height: "48px"
  fee-board:
    backgroundColor: "{colors.glaze-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tile}"
    padding: "1.5rem"
---

# Design System: Neelam Dental & Family Clinic (demo)

## Overview

**Creative North Star: "The Glazed Appointment Wall"**

The clinic is laid as cool kashi tilework. The ground is white glaze, every word is set in one lapis ink, and anything a patient can take is a turquoise glazed tile with a bevelled edge. Availability is read the way a tiled wall is read: deep glaze is free, pale glaze is filling up, ochre glaze is the last few, and matte terracotta brick is taken. Thin grout lines join every caption to its tile, every fee to its price, every row to the next.

The signature object is the booking board: a white board framed by a pierced marble jali whose light falls across the top of the board and fades. Picking a slot sweeps a highlight across the tile like light on wet glaze, and confirming prints the one solid lapis object on the page, the booking token. The kashi tile itself (an eight point lapis star with turquoise corner quarters and an ochre heart) recurs as the brand mark, the fee board seal, the doctor medallion, the clinic pin on the map, and the painted frieze that bands the closing line.

Density is calm and specific rather than decorative: written fees, real looking timings, named doctors and their weeks. The world refuses the stock smiling-patient hero with a lone Book button and the grid of icon service cards.

**Key Characteristics:**
- White glaze ground, single lapis ink, no grey text.
- Turquoise glaze depth encodes availability; ochre is scarcity; matte brick is taken.
- Raised things are glazed tiles with a bevel; taken or absent things are flat and matte.
- Grout lines (1px) do the structural work instead of cards and boxes.
- One solid lapis object: the confirmed booking token.
- Rozha One for names, dates, times and headings; Hind for everything read.

## Colors

A cool glazed tile palette: white ground, lapis ink, turquoise glaze in four depths, and two warm earth signals.

### Primary
- **Lapis Ink** (`ink`): every line of text on the page, including labels, notes and table cells. There is no secondary grey.
- **Lapis** (`lapis`): the 2px button and selection edge, links, the 2px rule under fee board titles and table heads, the walking route on the map, and the solid fill of the booking token only.

### Secondary
- **Turquoise** (`turq`): the kashi tile's corner quarters, the text caret, and the tint of the glaze bevel.
- **Turquoise Glaze, three depths** (`turq-glaze-1`, `turq-glaze-2`, `turq-glaze-3`, lit from `turq-glaze-highlight`): the glaze of anything takeable. Buttons, free slots, free days and in-days on a doctor's week run a 165 degree gradient from the highlight to depth 2 or 3. Depth 1 is the quiet wash for selected chips, nav hover, today's row and step numbers.
- **Turquoise Edge** (`turq-edge`): the border of glazed tiles and the hover border of quiet controls.

### Tertiary
- **Ochre Glaze** (`ochre`, `ochre-glaze`, `ochre-edge`): scarcity and notice. Last few days, the demo notice strip, the kashi heart and medallion ring. Focus rings use the darker `--focus` (#8a5a12), never this light ochre.
- **Brick** (`brick`, `brick-matte`, `brick-edge`): taken. Taken slots and full days are matte brick with a brick edge and no bevel; brick text marks a field error and a 2px brick border marks an invalid input.

### Neutral
- **White Glaze** (`glaze`): the page ground and the bare (not in) day on a doctor's week.
- **Raised Glaze** (`glaze-raised`): boards, tables, the doctor wall tiles, the toast, and the text on the lapis token.
- **Grout** (`grout`): the 1px joint between rows, under headers and between reviews.
- **Strong Grout** (`grout-strong`): borders of boards, quiet buttons, chips, fields, the shared grout behind the doctor wall and the week strip, and the dashed outline of off days.

### Named Rules
**The One Lapis Moment Rule.** Lapis is ink and edge everywhere. It becomes a solid fill exactly once: the confirmed booking token. Buttons are never solid lapis.

**The Glaze Means Free Rule.** Only takeable things are glazed. The deeper the turquoise, the freer the day. Last few is ochre glaze. Taken is matte brick and is never glazed, bevelled or shadowed.

**The One Ink Rule.** All text is lapis ink on glaze. Hierarchy comes from size, weight and face, not from grey.

## Typography

**Display Font:** Rozha One (with Iowan Old Style, Georgia, serif)
**Body Font:** Hind 400 / 600 / 700 (with Segoe UI, system-ui, sans-serif)
**Name Font:** Noto Nastaliq Urdu 600, subset to the clinic's Urdu name only

**Character:** Rozha One is a high contrast Devanagari-rooted display face that reads like painted signage; Hind is its plain, sturdy companion for a phone screen. Nastaliq appears only as the clinic's name, the way it would be painted over the door.

All fonts are self-hosted woff2 with `font-display: swap`; Rozha One and Hind 400 are preloaded. Body numerals are tabular.

### Hierarchy
- **Display** (`display`): the hero promise only; 2.15rem on phones.
- **Token** (`token`): the booking token number. The number is the heading of the token.
- **Headline** (`headline`): section headings and the closing line, balanced, kept near 22ch in the closing band.
- **Title** (`title`): the board heading, fee board titles and doctor names. Rozha also sets the day date in day tiles, the earliest slot time (1.25rem) and the wordmark (1.9rem, 1.6rem on phones).
- **Subtitle** (`subtitle`): h3 in Hind 700 at 1.25rem; also section lede text at 1.25rem 400, FAQ questions at 700, and the address.
- **Body** (`body`): 1.125rem / 1.55, `text-wrap: pretty`.
- **Label** (`label`): 0.875rem at 400 to 700 for fact details, chip notes, legend, captions and doctor facts. Tile tags (Taken, Earliest, Last one) drop to 0.75rem 600; week strip days are 0.8125rem 700.

### Named Rules
**The Painted Name Rule.** Rozha One sets names, dates, times and headings: the things a sign painter would letter. Anything a patient reads as a sentence is Hind.

**The No Kicker Rule.** A heading stands alone. No eyebrow or small caps label above a heading; the token's number is its heading.

## Layout

A single centred column of `min(1180px, 100% - 2rem)`. The hero is a two column grid (5fr text, 7fr board) with the promise on the top left, the fact list below it, and the jali board spanning both rows on the right; under 1080px it stacks intro, board, details. Sections are spaced 6.5rem apart (4.5rem on phones) with a heading block capped at 44rem.

Content sits in grouts, not cards: fact rows, fee rows, steps, FAQ rows and reviews are divided by 1px grout lines. Fee rows join name to price with a grout leader line that flexes between them. The doctor wall is four tiles on shared grout (1px gap over strong grout), two under 1080px, one under 640px.

Inside the board the days run six across (three on phones), slots four across (three on phones), and the earliest free slot spans two columns (the full row on phones) and carries Book. Doctor chips wrap on desktop and become a two column grid on phones with Any dentist across the top.

Spacing runs on a nine step scale from 0.25rem to 6.5rem. Every tap target is at least 44px; buttons, chips and fields are 48px.

## Elevation & Depth

Depth is glaze, not float. A raised object is a glazed tile: a white top highlight and a turquoise bottom edge inset into the tile, over a small two layer lapis tinted shadow. Hover deepens the shadow to a lift; press scales to 0.97. Flat things (taken slots, full and off days, bare week days, tables, fee boards) carry no shadow at all. The jali frame is the one deep object: an inset lapis hairline plus the lift shadow.

### Shadow Vocabulary
- **Tile** (`box-shadow: 0 1px 2px rgb(23 43 107 / 0.1), 0 4px 10px -6px rgb(23 43 107 / 0.18)`): glazed tiles at rest.
- **Lift** (`box-shadow: 0 2px 4px rgb(23 43 107 / 0.1), 0 12px 24px -12px rgb(23 43 107 / 0.3)`): hover on tiles, the jali frame, the toast.
- **Glaze bevel** (`inset 0 1px 0 #fff, inset 0 -2px 0 rgb(31 154 149 / 0.2)`): the fired edge on buttons and free slots; day tiles use a lapis tinted bottom edge at 0.08.
- **Field well** (`inset 0 1px 2px rgb(23 43 107 / 0.08)`): text inputs and selects.

### Named Rules
**The Matte Is Taken Rule.** Losing the bevel and shadow is how the wall says no. Never give a taken or unavailable tile depth.

## Shapes

Tile corners are gently eased (6px) for buttons, chips, slots, days, fields, boards, the map and the photo. Small elements (role badges, the today tag, step numbers, the week strip) take 4px. The jali frame alone takes 10px. The booking token's top edge is perforated with a row of 6px half circles, like a tear-off ticket. Borders carry meaning: 1px grout for structure, 1px turquoise edge for glazed tiles, 2px lapis for actions and selection, dashed strong grout for days the doctor is not in.

## Components

### Buttons
Glazed tiles with a fired lapis edge.
- **Shape:** tile corners (6px), 48px tall, 1.5rem side padding, Hind 700.
- **Glaze (primary):** 2px lapis border, turquoise gradient from highlight through glaze 2 to glaze 3 at 165 degrees, lapis ink, glaze bevel over the tile shadow. Used for Book a visit, Confirm booking, Directions and See free times.
- **Hover / Press:** shadow deepens to lift over 200ms; press scales to 0.97 over 140ms on the ease out curve.
- **Quiet:** 1px strong grout border on a white to raised glaze gradient; hover turns the border turquoise edge and lifts. Used for Book with a doctor, WhatsApp, Call and Book another time.
- **Link button:** lapis 700 underlined text, used for Change time.

### Chips
- **Doctor chip:** white, 1px strong grout border, name in 700 over a 0.875rem note. Selected adds a 2px lapis border and the glaze 1 wash; padding compensates so nothing shifts.
- **Role badge:** glaze 1 wash, 1px turquoise edge, 4px corners, 0.875rem 700.

### Cards / Containers
- **Fee board:** raised glaze, 1px strong grout, 6px corners, 1.5rem padding, title in Rozha over a 2px lapis rule with a kashi tile seal.
- **Doctor wall tile:** raised glaze on shared grout, medallion with initials, role badge, the week strip, facts and a quiet Book button.
- **Week strip:** six day tiles on shared grout (1px gap); glazed turquoise when the doctor is in, bare white glaze and struck through when not.
- **Hours table:** raised glaze, 2px lapis rule under the head, today's row washed in glaze 1 with a lapis outlined Today tag.

### Inputs / Fields
- **Style:** white, 1px strong grout border, 6px corners, 48px tall, field well inset shadow, turquoise caret. Label above in 700, help and error below at 0.875rem.
- **Focus:** lapis border with the 3px dark ochre `--focus` ring (#8a5a12).
- **Error:** 2px brick border and a brick 700 message.

### Navigation
Four in-page links in Hind 600, 44px tall, 6px corners, glaze 1 wash on hover. Hidden under 860px, where the wordmark and the Book a visit button carry the header. The wordmark pairs the kashi tile, Neelam in Rozha, the clinic line in Hind 700 and the Urdu name in Nastaliq behind a grout divider (the Urdu hides under 640px).

### Booking Board (signature)
A pierced marble jali (white lattice of eight point stars with a thin carved lapis edge, `--jali-pattern`) laid over a turquoise radial wash, 28px cells and 28px padding on desktop, 20px on phones, with the inset hairline and lift shadow. Inside, a raised glaze board whose top carries the jali's light (`--jali-light`, 0.32 opacity, masked to fade over 220px). The board holds the doctor chips, the day tiles with their fill ladder, the slot tiles, a colour legend, the details form, and the token.
- **Day tile:** 76px, glaze depth by fill level; selected is a 2px lapis outline at 2px offset.
- **Slot tile:** 54px glazed tile; the earliest free slot spans two columns and reads Earliest, the time in Rozha, and Book with an arrow. Picked slots take a 2px lapis edge and deeper glaze, and a white highlight sweeps across in 720ms. Taken slots are matte brick, struck through; your own booking is raised glaze with a 2px lapis edge, marked Yours.
- **Booking token:** the solid lapis object. Perforated top edge, the token number in Rozha as its heading, Day / Time / Doctor / Fee facts between faint glaze rules, and a quiet button. It prints in with a 460ms top-down reveal.

### Kashi Frieze
One painted tile (lapis star, turquoise quarter rounds, ochre heart, `--kashi-frieze`) repeated as a 32px strip along the top and bottom of the closing band.

### Route Map
A drawn SVG street map in glaze and grout tones with one dotted lapis route that walks from Liberty Chowk to a kashi tile pin at the clinic door (stopped under reduced motion).

## Do's and Don'ts

### Do:
- **Do** make anything takeable a glazed tile: turquoise gradient, turquoise edge, glaze bevel, tile shadow.
- **Do** encode availability only through the ladder: glaze 3 free, glaze 1 filling, ochre glaze last few, matte brick taken, dashed grout not in.
- **Do** set every word in lapis ink on glaze; build hierarchy with Rozha, Hind weight and size.
- **Do** join captions, rows and prices with 1px grout lines and grout leaders instead of boxing them.
- **Do** keep tap targets at 44px minimum and controls at 48px.
- **Do** press with scale 0.97 on the ease out curve (`cubic-bezier(0.23, 1, 0.32, 1)`) and drop all motion to 1ms under reduced motion.
- **Do** label every made-up fact as demo where a visitor could mistake it for real, in the ochre notice strip or a plain caption.
- **Do** use the one stroke icon family (24 grid, 2px round strokes) inside small glazed icon tiles, and choose each icon for its meaning.

### Don't:
- **Don't** fill a button with solid lapis; solid lapis belongs to the booking token alone.
- **Don't** glaze, bevel or shadow anything taken or unavailable.
- **Don't** use grey or opacity-faded text for hierarchy.
- **Don't** put a kicker, eyebrow or small caps label above a heading.
- **Don't** lead with a stock smiling-patient hero and a lone Book button, and don't lay services out as a grid of icon cards; services are a written fee board.
- **Don't** use the light ochre (#c9922e) for focus rings: it falls under 3:1 on the glazes. Focus is the dark ochre `--focus` (#8a5a12), about 5.5:1 on white glaze and 3.8:1 on the deepest turquoise glaze.
