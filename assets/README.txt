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


Home (index.html) — image background
------------------------------------
The home page hero is a still image with a brand-tinted gradient overlay
on top so the right-aligned headline stays readable. Drop your file at
the path below; if it's missing, the brand gradient shows instead.

  hero.svg          Main hero image, currently expected as an SVG with a
                    transparent background. Where the SVG is transparent,
                    the section's teal->rose brand gradient shows through.
                    A landscape viewBox (e.g., 1920x1080) is recommended
                    so it scales well via object-fit: cover.

                    Compose with the LEFT side of the frame as the focal
                    point — the headline and CTAs sit on the right and
                    have a darkening gradient behind them.


Inner pages — hero image (right side of the gradient header)
------------------------------------------------------------
The six inner pages each have a brand-gradient header (turquoise → pink)
with the page title on the left and an image on the right. The image cell
is landscape 4:3, so use a landscape or square image — portrait will be
cropped to fit. Aim for ~1200x900 (4:3).

  learn-hero.jpg          Hero image for learn.html
  listen-hero.jpg         Hero image for listen.html
  take-action-hero.jpg    Hero image for take-action.html
  who-we-are-hero.jpg     Hero image for who-we-are.html
  contact-hero.jpg        Hero image for contact.html
  donate-hero.jpg         Hero image for donate.html


CTA sections — image background (one per page)
----------------------------------------------
  cta-home.jpg            "Start where you are." on index.html
  cta-learn.jpg           Bottom CTA on learn.html
  cta-listen.jpg          Bottom CTA on listen.html
  cta-take-action.jpg     "Thank you for being brave." on take-action.html
  cta-who-we-are.jpg      "Want to be part of this?" on who-we-are.html
  cta-contact.jpg         Bottom CTA on contact.html
  cta-donate.jpg          "Thank you for standing with us." on donate.html


Learn page — Tab images (assets/tabs/)
--------------------------------------
Every tab on the Learn page has an image element on the right side of the
tab content (it sticks below the nav as you scroll). 16:9 ratio works best
(e.g., 1280x720). All files live under `assets/tabs/`.

Tabs marked [embedded video — image not used] now show the YouTube video
directly in the right column instead of a static image. You can skip those
slots entirely. The image-using tabs are listed alongside.

  Tools for the conversation (3 tabs):
    sex-positive-families.jpg     Sex-Positive Families
    nvc.jpg                       Nonviolent Communication
    uncomfortable-conversation.jpg An uncomfortable conversation

  Video & Audio Resources (10 tabs):
    jane-epstein.jpg              [embedded video — image not used]
    nssa-conference.jpg           NSSA Conference 2022
    rena-romano.jpg               [embedded video — image not used]
    yvette-erasmus.jpg            [embedded video — image not used]
    feather-berkower.jpg          Feather Berkower
    sarri-gillman.jpg             [embedded video — image not used]
    ladonna-silva.jpg             [embedded video — image not used]
    rachael-herron.jpg            [embedded video — image not used]
    nvc-academy.jpg               NVC Academy
    practice-groups.jpg           Practice Groups (free/donation-based)
    podcasts.jpg                  Podcasts


Listen page — Featured stories tab images (assets/tabs/)
--------------------------------------------------------
The Featured stories section on listen.html uses the same tab pattern as
the Learn page. Five tabs total. Tabs marked [embedded video — image not
used] now render a YouTube embed on the right; you can skip those slots.

    brave-voice-story.jpg         [embedded video — image not used]
    cheryle-gail-story.jpg        [embedded video — image not used]
    guerry-glover.jpg             [embedded video — image not used]
    david-moody.jpg               [embedded video — image not used]
    after-neverland.jpg           After Neverland (Wade Robson & James Safechuck with Oprah)


Listen page — StoryCorps interviews tab images (assets/tabs/)
-------------------------------------------------------------
The StoryCorps interviews section on listen.html uses the same tab pattern.
Five tabs total. Tabs marked [embedded video — image not used] now render
a YouTube embed on the right; you can skip those slots.

    cheryle-storycorps.jpg        Cheryle's full StoryCorps interview (Archive StoryCorps audio)
    cheryle-debrief.jpg           [embedded video — image not used]
    hollis-wilder.jpg             [embedded video — image not used]
    laura-davis.jpg               Laura Davis interviewed by Cheryle Gail Grace (Archive StoryCorps audio)
    storycorps-archive.jpg        "More on StoryCorps" tab — link to the full Brave Voices community archive


Listen page — "I Am A Survivor" short film
------------------------------------------
The "I Am A Survivor" section on listen.html now embeds the Vimeo video
directly in the right column — no static image is needed.

  i-am-a-survivor.jpg       [embedded video — image not used] Previously
                            used as a poster/still on the right; the
                            section now plays the Vimeo video in place.
                            File can be deleted.


Who We Are page — Founder + founding member section images (assets/team/)
-------------------------------------------------------------------------
The Founder's story section on who-we-are.html shows a 4:3 landscape
image above Cheryle's YouTube video. The Founding member section uses a
section-image on the right (4:5 portrait). Use clear photographs at the
sizes below or larger.

  cheryle.jpg               Cheryle Gail Grace — image above her video.
                            4:3 ratio works best (e.g., 1200x900). Until
                            you drop the file in, the brand teal->rose
                            gradient shows.
  beth.jpg                  Beth (founding member) — section image
                            (4:5 portrait, ~800x1000).


Who We Are page — Board, advisor, and staff cards (assets/team/)
----------------------------------------------------------------
The Board, Advisors, and Team sections on who-we-are.html show team cards
with a 1:1 (square) headshot on top and a name/role/bio underneath. Use
square headshots, around 800x800 or larger. Until you drop the file in,
each card shows the brand teal->rose gradient — never broken.

Update or add filenames as the team grows; the HTML uses these names by
default (replace as you replace the placeholder cards in who-we-are.html):

  Board:
    rowena-wahid.jpg        Rowena Wahid (CFO & Secretary)
    maureen-flannigan.jpg   Maureen Flannigan (Director & Producer)
    (Add more named files here as the board grows.)

  Advisors:
    cedric-de-brito.jpg     Cedric De Brito (Technical Advisor)
    ladonna-silva.jpg       LaDonna Silva, M.A., LMFT
    jean-morrison.jpg       Jean Morrison, M.A.

  Team / Staff:
    jeannie-stivers.jpg     Jeannie Stivers (Web Designer & Developer)
    lisa-frye.jpg           Lisa Frye (Social Media Manager)


Listen page — "In the public eye" portraits (assets/celebrities/)
-----------------------------------------------------------------
The "You are not the only one." section on listen.html shows nine cards,
each a portrait of a public figure with text overlaid on top. The cards
use a 3:4 portrait aspect ratio — use vertical/portrait headshots
(roughly 600x800 to 900x1200 each, JPG or WebP).

A dark gradient is layered over the bottom of each image so the text is
always readable, regardless of which photo you choose. Faces should sit
in the upper two-thirds of the frame so they aren't covered by the text.

Until you drop the image in, each card shows the brand teal->rose
gradient — never broken, just unphotographed.

  maya-angelou.jpg          Maya Angelou
  oprah-winfrey.jpg         Oprah Winfrey
  tyler-perry.jpg           Tyler Perry
  common.jpg                Common
  anthony-edwards.jpg       Anthony Edwards
  anthony-rapp.jpg          Anthony Rapp
  sally-field.jpg           Sally Field
  demi-moore.jpg            Demi Moore
  mary-j-blige.jpg          Mary J. Blige


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


Speak page — Tab images (assets/tabs/)
--------------------------------------
The "Two paths, one movement" tabs on take-action.html use the same
sticky right-rail pattern as the Learn page. The Share Your Story tab
now embeds the "Speak Up" YouTube video directly — no preview image
needed for that tab. The Build Community tab uses:

  build-community.jpg       Image for the Build Community tab. 16:9 ratio
                            (1280x720 is plenty). Lives under
                            `assets/tabs/` to match the Learn page tabs.

  share-story-preview.png   [embedded video — image not used] Previously
                            used as a clickable preview that opened the
                            video on YouTube; the tab now plays the video
                            in place. File can be deleted.


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


Previewing locally — the file:// gotcha
---------------------------------------
A few things on this site need a real http/https origin to work, and will
either show errors or quietly refuse to load when you open the HTML
directly from your hard drive (i.e. via `file://`):

  - The Givebutter donation form on donate.html
  - All embedded YouTube videos (a "Video configuration error" appears in
    each player on listen.html, learn.html, take-action.html)

These all behave normally once the site is hosted on a real URL. So if
you only see the issue when double-clicking the HTML on your computer,
nothing is broken — it's just a quirk of opening files directly.

To preview everything locally with a real origin:
  1. Open a terminal in the `Brave Voices website` folder.
  2. Run:  python -m http.server 8000
  3. Visit: http://localhost:8000/donate.html (or any other page).

Or just deploy to a staging URL (Netlify, Vercel, GitHub Pages, etc.).
Once the site is on a real host, the donate form and YouTube embeds both
work automatically.
