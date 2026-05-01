/* Brave Voices — subtle parallax on CTA backgrounds and hero images.
   The image layer's vertical position shifts slowly as the section moves
   through the viewport. The gradient fallback layer stays put.
   Skips touch devices and anyone with reduced-motion preferences. */
(function () {
  var sections = document.querySelectorAll('.section--cta');
  var heroImages = document.querySelectorAll('.hero--media img.hero__media');
  if (!sections.length && !heroImages.length) return;

  // Disable on touch/narrow screens (rough motion) and for reduced-motion users.
  var noMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isTouch = window.matchMedia('(hover: none), (max-width: 820px)').matches;
  if (noMotion || isTouch) return;

  var ticking = false;

  function update() {
    ticking = false;
    var vh = window.innerHeight;

    sections.forEach(function (section) {
      var rect = section.getBoundingClientRect();
      // Skip if offscreen — no work to do.
      if (rect.bottom < -100 || rect.top > vh + 100) return;

      // progress: 0 when the section's top edge is at the bottom of the viewport
      // (just entering), 1 when its bottom edge is at the top (just leaving).
      var progress = (vh - rect.top) / (vh + rect.height);
      progress = Math.max(0, Math.min(1, progress));

      // Map progress to a ~40% background-position-y range — subtle, not dramatic.
      // Center is 50%; we move from 30% to 70%.
      var y = 30 + progress * 40;
      section.style.backgroundPosition = '50% ' + y + '%, 50% 50%';
    });

    heroImages.forEach(function (img) {
      var hero = img.parentElement;
      if (!hero) return;
      var rect = hero.getBoundingClientRect();
      // Skip if the hero is fully above the viewport.
      if (rect.bottom < 0 || rect.top > vh) return;

      // As the user scrolls down, the image shifts up slightly — subtle parallax.
      // Factor 0.2 stays within the 20% top/bottom buffer we gave the image in CSS.
      var offset = -rect.top * 0.2;
      img.style.transform = 'translateY(' + offset + 'px)';
    });
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
})();
