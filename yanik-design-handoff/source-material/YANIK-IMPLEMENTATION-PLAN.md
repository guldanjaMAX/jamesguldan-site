# Yanik Silver Personal Brand Site — Implementation Plan

**Last updated:** April 16, 2026
**Author:** James Guldan
**Companion docs:** YANIK ASSET INVENTORY 2026 04 16, YANIK PROJECT HANDOFF
**Dev site:** https://yanik silver dev.james d13.workers.dev

## Why this plan exists

Amy at Evolved Enterprise and Yanik just dropped 41 new assets into the Drive Doodles folder. That drop substantially resolves the blocking items that were on the prior ask list. This plan maps every new asset to a specific place on the site, sequences the work into three sprints, and gives confidence scores on each decision so we can move fast without second guessing.

## Headline takeaways

1. The new clean scans are a major upgrade. The prior plan was built around 11 phone HEICs. We now have 33 clean professional scans to choose from. Every page of the site can pull from a bigger, higher quality library.
2. The "Living Pages" brand direction from the earlier guide is the right call at **92 confidence**, up from 88. The new scans make this direction even stronger.
3. A v1 launch is achievable in **three build sprints over roughly ten working days**. Sprint 1 handles hero, nav, and the manifesto. Sprint 2 handles the Galactic Game reveal and gallery. Sprint 3 polishes and launches.
4. The only remaining blockers are the seven symbol standalone drawings, a flourishes page, and a three minute voice memo from Yanik. None are launch blockers for v1, only for v2 polish.

## Guiding principles (do not deviate)

These are the "do not regress" rules baked into every decision below.

1. **The site reads like flipping through Yanik's journal.** Paper textures, his handwriting, his colors. Not a glossy corporate site.
2. **Cosmic Sloth origin is Bribri tribe of Costa Rica, not Cebu.** Cacao ceremony.
3. **Every visual element should earn its spot.** We have so many great assets now that the risk is overloading. Curate ruthlessly.
4. **Mobile is not an afterthought.** Sprint 3 finishes responsive nav and touch interactions.
5. **Never permanently delete source assets.** Prune duplicates into a review folder.

## Site architecture

A single long form scroll home page with five anchor sections, plus three secondary pages reachable from the footer.

### Home page sections

1. **Hero / Opening Page** (scroll 1)
2. **Who is Yanik** (scroll 2)
3. **The 1000 Suns Manifesto** (scroll 3 and 4)
4. **Guide to the Galactic Game (Tattoos)** (scroll 5)
5. **The Vision / What's Next** (scroll 6)
6. **Footer with Aho signature**

### Secondary pages

1. **Journal Gallery** — grid of all doodles, click for large view
2. **Who He's Played With** — celebrity and mastermind orbit
3. **Ways to Connect** — contact, mastermind, speaking

## Section by section asset mapping

Every section below lists which new or existing asset powers it, the copy angle, and a confidence score.

### 1. Hero / Opening Page — confidence 94

**Primary image:** `02 Portraits & Cosmic Headshot/Yanik Cosmic Composite Headshot.png`. This is the money shot. Professional Yanik surrounded by his own cosmic art. It is the site in one image.

**Rotating backgrounds behind the name:** 3 variants pulled at random from:
- `D 00391 A Thousand Suns.jpg` (xmas lights across a page)
- `D 00157 Self activating field of suns.JPG` (formula page with sun field)
- `D 00448 The Nudge.jpg` (rainbow sunflower)

**Headline:** "Yanik Silver" (Fraunces display), with a scripted `Aho` in Caveat underneath.

**Subhead rotating quote:** One of
- "Synchronicities are a love letter from the universe, nudging you toward your greatest work."
- "Light ONE Thousand Suns who can each light 1000 Suns."
- "Play with infinite blooms = Ripples of Impact."

**Sun animation:** A single sun from the SVG library glows in the corner, color cycles through the 20 sun palette over 60 seconds.

**Confidence:** 94. Primary image is a 98. Rotating backgrounds are 95. Only uncertainty is tonal balance between portrait and journal art.

### 2. Who is Yanik — confidence 90

**Lead image:** `04 Tattoos/IMG_4732 Sun Face Inner Wrist.jpg` full bleed, desaturated slightly so text overlays cleanly.

**Copy angle:** Two paragraphs. First paragraph is origin and Maverick1000. Second is the cacao ceremony and the Cosmic Sloth story.

**Anchor doodle on the right:** `D 00125 You have to be sun #one yourself first.jpg`. Large purple sun with the Jan 11 2020 cacao ceremony story in Yanik's own hand. This directly tells the origin.

**Supporting character art:** Small `Cosmic Sloth UpdatedDec2025 final.png` placed at the end of paragraph two, captioned "The Cosmic Sloth, held together by cacao."

**Confidence:** 90. The copy matches the Bribri story we corrected. The images sell it.

### 3. The 1000 Suns Manifesto — confidence 93

This is the heart of the site. Tell the philosophy in Yanik's own hand by featuring the actual pages. Two scroll screens.

**Screen 3a — What is a 1000 Suns:**
- Background lightly tiled: the Sun SVG library, 20 colors, very low opacity
- Featured scan: `D 00157 Self activating field of suns.JPG` at large crop
- Pull quote in Caveat: "Play with infinite blooms = R.O.I. (Ripples of Impact)"

**Screen 3b — How Suns Light Suns:**
- Featured scan: `D 00169 How suns light suns.JPG` full page
- Below it: `D 00168 How will you light the world_.JPG` as a six archetype grid (spark, light, torch bearer, lighthouse, sun, suns lighting suns). Each archetype clickable for expansion.

**Supporting scans for rotating marginalia between screens:**
- `D 00018 Cosmic sloth of one thousand suns.jpg` (business card)
- `D 00075 The new visionary of one thousand suns.jpg`
- `D 00204 Wanted_ You.JPG` (playful recruit card)
- `suns all the way down & around.jpg` (ice cream cone)

**Confidence:** 93. This section does the narrative heavy lifting and we have the exact right pages for it.

### 4. Guide to the Galactic Game / Tattoos — confidence 97

This is arguably the strongest single asset in the entire library. `D 00414 Guide to the Galactic Game.jpg` is a fully illustrated legend explaining both arms, the symbols, and the philosophy. It deserves its own dedicated scroll moment.

**Build:**
- Hero image: `D 00414 Guide to the Galactic Game.jpg` at full width, scroll through with parallax
- Overlay reveal: hovering or tapping each arm region highlights the corresponding real tattoo photo from `04 Tattoos/`
  - Right arm hover reveals `IMG_3136 Cosmic Sloth Right Arm.heic` (converted to JPG)
  - Left arm hover reveals `IMG_3163 Mandala Left Arm Seeds Suns Blooms.jpg`
  - Sun face hover reveals `IMG_4732 Sun Face Inner Wrist.jpg`
  - Sacred geometry hover reveals `IMG_4734 Sacred Geometry Mandala Inner Forearm.jpg`

**Pull quote in the margin:** "Now there is no way to lose the map. It's tattooed on your arms (and heart)."

**Confidence:** 97. This is the clearest "wow" moment in the build. Yanik's philosophy literally inked on his skin with a key drawn in his own hand.

### 5. The Vision / What's Next — confidence 85

The "Idea Factory" brand universe moment. Maps what Yanik is building next.

**Anchor:** `IMG_3210 Idea Factory Brand Universe.heic` converted to JPG. Lists CosmicSloth.love, Sun Sparks School, Kosmic Kids Journal, Coleção Cósmica, etc.

**Layout:** Single column of named projects, each with a one sentence description Yanik writes later. Link placeholders to CosmicSloth.love domain.

**Playful note:** Include `Sticker GreatCosmicJoke.jpeg` as a sticker in the corner.

**Confidence:** 85. Content gap: Yanik still owes a single sentence description of each brand universe project.

### 6. Footer — confidence 96

**Signature block:** `Symbols and Signature.jpeg` cropped to just the Aho + his signature, placed centered at bottom.

**Sun strip:** Horizontal strip of all 20 sun SVGs, animating slightly.

**Links:** CosmicSloth.love, Maverick1000, email, Instagram.

**Copyright:** Hand lettered in Caveat.

### Secondary page: Journal Gallery — confidence 88

A grid of every clean scan doodle. Click any to open a lightbox. This is the catch all for every asset that did not make the main scroll.

- All 23 "1000 Suns Series" files
- The 8 "Galactic Game & Guides" files (minus the master already used above)
- Earlier Doodle Collection files as a separate row

**Filters:** By theme (1000 Suns, Galactic, Cosmic Sloth, Earlier). By color. By year.

**Confidence:** 88. Straightforward build, just needs the grid component.

### Secondary page: Who He's Played With — confidence 91

A photo strip of Yanik's world class orbit. Use the seven celebrity and notable files as a horizontal scroll with captions in Caveat.

**Include:**
- Branson leopard safari
- Branson showgirl stage
- Sara Blakely Spanx
- Blake Mycoskie + John Mackey
- Rich Teerlink Harley
- Wally Famous Amos cookie
- Frank McKinney

**Caption style:** Handwritten first name under each photo. Short one liner in Caveat about the moment.

**Confidence:** 91.

### Secondary page: Ways to Connect — confidence 75

A contact page with a "torn journal page" form (creative idea 20 from the earlier brief).

**Copy angle:** "Ask wonderfully wisely and whimsically" (pulled from `D 00179_ Ask wonderfully wisely & whimsically.JPG`).

**Confidence:** 75. Needs form backend decision (Formspree vs Cloudflare Worker vs Maverick CRM integration).

## Build sprint plan

Three sprints, roughly ten working days total if we move.

### Sprint 1 (days 1 to 3): Hero, Who, Manifesto

Build the top half of the home page.

**Tasks:**
1. Convert the 9 HEIC originals to JPG so they are usable (keep originals in `05 Journal HEIC Originals/`, drop JPGs into a new `05 Journal HEIC Originals/jpg exports/`).
2. Upload new clean scans to R2 at `assets.jamesguldan.com/yanik dev/doodles/clean/` so they load fast.
3. Build hero with rotating backgrounds.
4. Build "Who is Yanik" section with cacao story.
5. Build manifesto screen 3a (Self activating field of suns).

**Deliverable:** Updated dev site with scroll 1 through 3a complete. Share with Yanik for voice and copy review.

**Confidence in finishing Sprint 1 on schedule:** 88.

### Sprint 2 (days 4 to 7): Galactic Game, Gallery, Who He's Played With

Build the heart of the site.

**Tasks:**
1. Build manifesto screen 3b (How Suns Light Suns + archetypes grid).
2. Build Galactic Game tattoo reveal (the interactive highlight moment).
3. Build Journal Gallery secondary page.
4. Build Who He's Played With strip.
5. First accessibility pass on everything built so far.

**Deliverable:** Complete home page scroll. First fully navigable dev build.

**Confidence:** 85. The interactive tattoo reveal has the most unknown. If it takes too long, ship a simpler version and iterate.

### Sprint 3 (days 8 to 10): Vision section, footer, polish, mobile, launch

Finish and launch.

**Tasks:**
1. Build Vision / What's Next section.
2. Build footer with Aho signature and sun strip.
3. Build Ways to Connect contact page.
4. Mobile responsive pass. Tap targets, nav drawer, font scale.
5. Accessibility review using the `design:accessibility review` skill.
6. Performance pass. Lazy load images, WebP conversion where possible.
7. Lock production domain decision with Yanik (yaniksilver.com vs CosmicSloth.love vs subdomain).
8. Set up analytics (Cloudflare Analytics recommended, zero cost, privacy friendly).
9. Final copy sign off from Yanik.
10. Cut over to production.

**Deliverable:** Live public site.

**Confidence in launching on day 10:** 78. Realistically day 12 to 14 is more honest given the copy signoff loop with Yanik.

## Technical notes

Most of this is already nailed down in YANIK PROJECT HANDOFF section 3 and 8. Key additions for this sprint:

**Image pipeline:** All new clean scans are 5 to 12 MB JPEGs. We must resize and optimize.

Recommended workflow for each:
1. Resize longest edge to 2400px for retina hero use, 1600px for gallery, 900px for thumbnails.
2. Convert to WebP with 82 quality, keep JPG fallback.
3. Upload to R2 at `yanik dev/doodles/` (preserve subfolder structure).
4. Update image paths in worker HTML.

A helper script should sit at `/tmp/yanik resize and upload.py`.

**HEIC conversion:** For the tattoo HEICs, use ImageMagick:
```
convert IMG_3136.heic -resize 2000x IMG_3136.jpg
```

## Remaining asks for Yanik (post April 16 drop)

The original six asks have been partly resolved. Here is the updated list.

1. **Seven symbol standalone drawings** (sun, seed, bloom, cacao, water, air, fire) — still needed for a glossary component. Launch blocker for a v2 glossary, not for v1.
2. **Flourishes page** (stars, swirls, arrows, connectors) — still needed for section dividers and marginalia. Not a launch blocker.
3. **Three minute voice memo** walking through what each symbol means — nice to have, powers an audio toggle feature.
4. **One sentence description** for each brand universe project on the Vision section — launch blocker for Section 5. Email him this week.
5. **Production domain decision** — launch blocker. Needs to happen in Sprint 3.
6. **Sign off on final copy** for the Cosmic Sloth story and the cacao ceremony origin — launch blocker for Section 2.

## Confidence scores summary

| Decision | Confidence |
|----------|-----------|
| Living Pages brand direction is the right call | 92 |
| We can launch v1 in three sprints | 82 |
| Yanik Cosmic Composite Headshot is the hero photo | 98 |
| D 00414 Galactic Game is the interactive anchor | 97 |
| D 00157 Self activating field of suns anchors the manifesto | 95 |
| D 00169 How suns light suns anchors the philosophy | 93 |
| Home page scroll architecture is right | 90 |
| Sprint 1 finishes in 3 days | 88 |
| Sprint 3 finishes and launches in 10 days total | 78 |
| Gap items will not block v1 launch | 92 |

## What to do right now

If you are James picking this up tomorrow:

1. Read this plan and the asset inventory top to bottom. Allow 30 minutes.
2. Send Yanik a short email with (a) the one sentence brand universe descriptions ask, (b) the production domain question, (c) a link to the current dev site.
3. Start Sprint 1 with HEIC conversion and R2 upload.

If you are a fresh agent picking this up:

1. Read YANIK PROJECT HANDOFF 2026 04 16 first for infra and context.
2. Read YANIK ASSET INVENTORY 2026 04 16 for what is where.
3. Read this plan.
4. Start with the Sprint 1 task list.

End of plan.
