# Source Material Index

This folder contains every primary source that informed the Yanik Silver personal brand site. Quotes, voice, testimonials, planning docs, and architecture. If you need to ground a design decision in what Yanik actually said or what the project actually requires, this is where you start.

All files live at `yanik-design-handoff/source-material/` on the `jamesguldan-site` repo. Raw URL pattern:

`https://raw.githubusercontent.com/guldanjaMAX/jamesguldan-site/main/yanik-design-handoff/source-material/{filename}`

## How to use this folder

Three lenses. Pick the one that matches what you are designing.

**If you are designing copy or voice,** start with `yanik-60min-transcript.vtt`. That is Yanik in his own words for 60 minutes. It is the single best source for rhythm, word choice, and emotional tone. Grep for recurring phrases. He repeats core ideas the same way across contexts, and those repetitions are the brand.

**If you are designing a testimonial or social proof section,** start with `MASTER_TESTIMONIALS_CATALOG.txt`. 92 named testimonials, organized by event. `TESTIMONIALS_SUMMARY.txt` and `TESTIMONIALS_INDEX.txt` give you the count, the event breakdown, and the name list without the full quotes.

**If you are designing structure, sections, or the system,** read `YANIK-PROJECT-HANDOFF.md` first, then `YANIK-IMPLEMENTATION-PLAN.md`, then `yanik-site-architecture-and-plan.md`. Those three tell you what has been decided, what is still open, and why.

## The 13 files

### Voice and transcripts

`yanik-60min-transcript.vtt` (61 KB, 1,582 lines). One hour Zoom between James Guldan and Yanik Silver. Covers Yanik's origin, the cosmic sloth story, the 1000 Suns idea, the Galactic Game, his tattoos, his journal practice, and what he wants the site to feel like. Confidence: this is the highest value file in the folder for capturing Yanik's voice. 98.

`Maverick-Call-2026-02-16.txt` (73 KB, 730 lines). Longer strategy call with Yanik, Sophia Umanski, and James. Goes into offer structure and Maverick1000 business strategy. Not about site design directly, but useful for understanding community voice, how Yanik talks about his members, and tone on topics like "choose your own adventure." Skip the offer pricing debate in the first third. Confidence: 72 for site relevance.

### Testimonials

`MASTER_TESTIMONIALS_CATALOG.txt` (34 KB, 854 lines). Every named testimonial extracted from 42 source documents. Organized by event: General Maverick1000, Camp Maverick, M3 Summit, Necker Island, Mastermind, Membership. This is the pool to pull from for Section 04 Brightest Suns. Confidence: 96.

`TESTIMONIALS_SUMMARY.txt` (6.4 KB). Executive summary of the catalog. Counts by event, source file list, extraction methodology. Start here if you want the shape before diving into the full text.

`TESTIMONIALS_INDEX.txt` (8.3 KB). Quick name index across all 92 testimonials. Good for scanning to find a specific person.

`VIDEO_TESTIMONIALS_CATALOG.md` (9.3 KB). 139 video testimonials inventoried across 10 event categories, 14.7 GB total. The videos themselves are not in this folder, but the catalog tells you who said what on video. If a hero testimonial needs to link to a clip, start here.

### Project plans and architecture

`YANIK-PROJECT-HANDOFF.md` (21 KB, 393 lines). The single best orientation doc. Status, key file locations, what is delivered, what is blocking, and the three HTML deliverables already shipped. Read this first if you are new. Confidence: 99.

`YANIK-ASSET-INVENTORY.md` (11 KB, 176 lines). Catalog of all 99 assets in the Photos folder. The folder structure that organizes doodles, portraits, tattoos, and logos. Tells you what exists so you can plan what to use. Note that the folder structure described here is the source folder. On GitHub, these same assets are flattened into `/images/` with `ASSETS-README.md` as the map. Confidence: 95.

`YANIK-IMPLEMENTATION-PLAN.md` (14 KB, 294 lines). Three sprint build plan across ten working days. Maps every new asset to a specific place on the site, with confidence scores. The "Living Pages" brand direction at 92 confidence is the spine. Skim the guiding principles at the top, they are load bearing. Confidence: 93.

`yanik-personal-brand-site-brief.md` (33 KB, 590 lines). The original brief. Goals, audience, positioning, tone, differentiation. Converted from the .docx. Confidence: 88.

`yanik-site-architecture-and-plan.md` (32 KB, 900 lines). Earlier architecture plan. Section breakdowns, navigation model, content logic, responsive approach. Converted from the .docx. Some of this has been superseded by the A+ deck direction, but the information architecture thinking is still the foundation. Confidence: 82.

`yanik-doodle-capture-plan.md` (12 KB, 192 lines). The six step pipeline for digitizing Yanik's doodles: scan, clean, vectorize, catalog, place, reuse. Also the exact message template to send Yanik when you need a new asset from him. Confidence: 90.

### Maverick context

`Maverick_Welcome_Overview.txt` (5.6 KB, 95 lines). Short Maverick1000 intro document. Useful for understanding what the community is, who it is for, and the language it uses. Mostly community positioning rather than site design, but helps anchor the tone. Confidence: 78.

## Guardrails

Three things the plans say over and over. Treat these as non negotiable.

First, the cosmic sloth origin is the Bribri tribe of Costa Rica, not Cebu. Earlier drafts had this wrong. If you see "Cebu" anywhere, it is a bug.

Second, the site reads like flipping through Yanik's journal. Paper textures, his handwriting, his colors. Not a glossy corporate site.

Third, every visual element earns its spot. There are now more great assets than the site can hold. The risk is overloading. Curate ruthlessly.

## What is intentionally not here

A few files were skipped because they are private, duplicative, or not site relevant.

The 2026-04-21 Meeting Prep doc has billing discussion and stays out.

The Necker Offer Strategy notes are internal event planning.

The 2024-12-19 Chris Plow collaboration notes are about a partnership, not the site.

If any of those turn out to be needed, ask and they can be added with redactions.
