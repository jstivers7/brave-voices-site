Brave Voices — Asset Naming Guide
=================================

The site is wired up to look for image and video files at exact paths inside
`assets/` (and its subfolders). Drop files in with the exact names below and
they'll appear automatically. Until you do, each spot shows a branded
teal->rose gradient fallback so the page never looks broken.


Logo (top nav + footer on every page)
-------------------------------------
  logo.png          The Brave Voices wordmark — shows in the top nav (52px
                    tall) and in the footer (96px tall). If missing, a styled
                    text "BraveVoices" fallback appears. PNG with transparent
                    background recommended. Aim for ~600-1000px wide.


Favicon (browser tab icon on every page)
----------------------------------------
  favicon.svg       An SVG approximation of the teal-and-quotes icon is
                    already in place and loads in modern browsers.
  favicon.png       Optional. If you save the original PNG (the teal square
                    with white opening quotes) as `assets/favicon.png`, Safari
                    on iOS and older browsers will prefer it. 512x512 PNG
                    recommended.


Home (index.html) — video background
------------------------------------
  hero.mp4          The main looping video (required to show video).
  hero-poster.jpg   Still image shown before the video loads (optional).


Inner pages — hero image (right side of the gradient header)
------------------------------------------------------------
The five inner pages each have a brand-gradient header (turquoise → pink)
with the page title on the left and an image on the right. The image cell
is landscape 4:3, so use a landscape or square image — portrait will be
cropped to fit. Aim for ~1200x900 (4:3).

  learn-hero.jpg          Hero image for learn.html
  listen-hero.jpg         Hero image for listen.html
  take-action-hero.jpg    Hero image for take-action.html
  contact-hero.jpg        Hero image for contact.html
  donate-hero.jpg         Hero image for donate.html


CTA sections — image background (one per page)
----------------------------------------------
  cta-home.jpg            "Start where you are." on index.html
  cta-learn.jpg           Bottom CTA on learn.html
  cta-listen.jpg          Bottom CTA on listen.html
  cta-take-action.jpg     "Thank you for being brave." on take-action.html
  cta-contact.jpg         Bottom CTA on contact.html
  cta-donate.jpg          "Thank you for standing with us." on donate.html


Learn page — Tab images (assets/tabs/)
--------------------------------------
Every tab on the Learn page has an image element on the right side of the
tab content (it sticks below the nav as you scroll). 16:9 ratio works best
(e.g., 1280x720). All files live under `assets/tabs/`.

  Tools for the conversation (3 tabs):
    sex-positive-families.jpg     Sex-Positive Families
    nvc.jpg                       Nonviolent Communication
    uncomfortable-conversation.jpg An uncomfortable conversation

  Video & Audio Resources (10 tabs):
    jane-epstein.jpg              Jane Epstein
    nssa-conference.jpg           NSSA Conference 2022
    rena-romano.jpg               Rena Romano
    yvette-erasmus.jpg            Dr. Yvette Erasmus
    feather-berkower.jpg          Feather Berkower
    sarri-gillman.jpg             Sarri Gillman
    ladonna-silva.jpg             LaDonna Silva
    rachael-herron.jpg            Rachael Herron
    nvc-academy.jpg               NVC Academy
    practice-groups.jpg           Practice Groups (free/donation-based)
    podcasts.jpg                  Podcasts


Listen page — Featured stories tab images (assets/tabs/)
--------------------------------------------------------
The Featured stories section on listen.html uses the same tab pattern as
the Learn page. Six tabs, each with a 16:9 image on the right.

    brave-voice-story.jpg         A Brave Voice (anonymous man's story)
    cheryle-gail-story.jpg        Cheryle Gail's story
    guerry-glover.jpg             Guerry Glover's 2014 survivor story
    david-moody.jpg               David Moody's 2014 survivor story
    jameela-jamil.jpg             Jameela Jamil — "How Lolita Freed Me…"
    after-neverland.jpg           After Neverland (Wade Robson & James Safechuck with Oprah)


Listen page — StoryCorps interviews tab images (assets/tabs/)
-------------------------------------------------------------
The StoryCorps interviews section on listen.html uses the same tab pattern.
Four tabs, each with a 16:9 image on the right.

    cheryle-storycorps.jpg        Cheryle's full StoryCorps interview
    cheryle-debrief.jpg           Debrief with Cheryle after her interview
    hollis-wilder.jpg             Hollis Wilder decompression video
    laura-davis.jpg               Laura Davis interviewed by Cheryle Gail Grace


Listen page — "I Am A Survivor" short film
------------------------------------------
The "I Am A Survivor" short-film section on listen.html shows a single
image on the right (split layout, like the "How to listen well" section).
Use a still or poster from the film. 16:9 ratio (640x360 or larger,
e.g., 1280x720) works best.

  i-am-a-survivor.jpg       Poster / still for the short film section


Learn page — Book covers (assets/books/)
----------------------------------------
The Reading section on learn.html shows a grid of 8 book cards. Each card
expects a portrait cover image (2:3 ratio works best, e.g., 600x900). All
files live under `assets/books/`.

  healing-shame.jpg         Healing the Shame That Binds You — John Bradshaw
  transform-boundaries.jpg  Transform Your Boundaries — Sarri Gilman
  compassion-book.jpg       The Compassion Book — Thom Bond
  pathways-nvc.jpg          Pathways to Nonviolent Communication — Jim Manske
  piece-of-cake.jpg         A Piece of Cake — Cupcake Brown
  let-love.jpg              Let Love Have the Last Word — Common
  you-have-no-idea.jpg      You Have No Idea — Vanessa & Helen Williams
  burning-light.jpg         The Burning Light of Two Stars — Laura Davis


Learn page — Handouts column image
----------------------------------
  handouts-image.jpg        Decorative image that sits in the empty cell
                            of the Handouts & further reading grid (next
                            to the "Write your story" column on full
                            screens). It sticks below the nav as you
                            scroll. 4:6 (portrait) ratio works best —
                            e.g., 800x1200.


Speak page — video preview
--------------------------
  share-story-preview.png   Preview image for the "Speak Up" video in the
                            Share Your Story tab. Clicking opens the video
                            on YouTube. If missing, falls back to YouTube's
                            own thumbnail. 16:9 ratio, 1280x720 or larger.


Speak page — Tab images (assets/tabs/)
--------------------------------------
The "Two paths, one movement" tabs on take-action.html use the same
sticky right-rail image pattern as the Learn page. The Share Your Story
tab uses share-story-preview.png (above) as its tab image — clicking it
opens the YouTube video. The Build Community tab uses:

  build-community.jpg       Image for the Build Community tab. 16:9 ratio
                            (1280x720 is plenty). Lives under
                            `assets/tabs/` to match the Learn page tabs.


Contact page — founders figure
------------------------------
  founders.jpg              Photo of Cheryle (right) and Beth (left)
                            beneath the contact form copy, with caption.
                            Landscape orientation works best. If missing,
                            the figure is hidden and the surrounding copy
                            reflows.


Recommended specs
-----------------
Video (hero.mp4)
  - H.264 MP4, 10-20 seconds, seamless loop
  - 1920x1080 or 1280x720, under ~8 MB
  - No audio (it will be muted anyway)
  - Gentle, slow-moving footage works best under text — avoid hard cuts

Hero / CTA images (.jpg)
  - Hero images: 1920x1080 or larger
  - CTA-section images: 1600x900 is plenty (they appear shorter on the page)
  - JPG or WebP, under ~400 KB each (use tinyjpg.com or squoosh.app)
  - Compose with the center clear so the headline stays legible
  - A slight teal or warm tint pairs best with the brand overlay

Tab images (.jpg in assets/tabs/)
  - 16:9 ratio (1280x720 is plenty)
  - Under ~150 KB each — these stack up fast across 13 tabs
  - Choose imagery that nods to the speaker / topic without being on-the-nose

Book covers (.jpg in assets/books/)
  - Use the actual cover images from publisher sites or Amazon
  - 2:3 portrait ratio (600x900 is plenty)
  - Trim any white background to the cover edges so they sit cleanly in
    the grid


Notes
-----
- The CSS applies a brand-colored overlay and a soft vignette on top of
  any media you provide, so images don't need to be pre-tinted.
- If any file is missing, the gradient fallback shows — no broken image
  icon, no layout shift.
- File names are case-sensitive on most production hosts. Stick to
  lowercase + hyphens exactly as listed above.


Previewing the donate page
--------------------------
The Givebutter donation form on donate.html will NOT render when the site
is opened via `file://` (e.g., double-clicking the HTML from your C drive).
Givebutter's widget script requires an http/https origin to boot.

To preview the donate form locally:
  1. Open a terminal in the `Brave Voices website` folder.
  2. Run:  python -m http.server 8000
  3. Visit: http://localhost:8000/donate.html

Or just deploy to a staging URL (Netlify, Vercel, GitHub Pages, etc.) and
check there. Once the site is on a real host, the form renders automatically.
