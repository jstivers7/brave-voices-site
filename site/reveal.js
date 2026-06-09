/* Brave Voices — subtle scroll reveal.
   Auto-tags content blocks with .reveal, then uses IntersectionObserver to
   add .is-visible when each one enters the viewport. A tiny stagger between
   siblings makes rows of cards/items feel organic rather than synchronized.
   Skipped entirely for prefers-reduced-motion. */
(function () {
  // Bail out for users who prefer reduced motion — CSS will also bail, but
  // this avoids unnecessary observer setup.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;

  // Top-level content blocks to reveal. Excludes nav, footer, tab-panels
  // (which have their own visibility logic), and hero media layers.
  var blockSelector = [
    '.hero .container > *',
    '.section .container > *:not(.tabs):not(.tab-panel)'
  ].join(', ');

  // Second-level reveal for grid/row children — gives a staggered feel.
  var childSelector = [
    '.cards > *',
    '.split > *',
    '.checklist > li',
    '.tab-panel > *'
  ].join(', ');

  var blocks = document.querySelectorAll(blockSelector);
  var children = document.querySelectorAll(childSelector);

  // Tag everything that should animate.
  blocks.forEach(function (el) { el.classList.add('reveal'); });
  children.forEach(function (el) { el.classList.add('reveal'); });

  // Apply a small cascading delay to siblings so rows feel organic.
  function stagger(list) {
    var parentDelays = new Map();
    list.forEach(function (el) {
      var parent = el.parentElement;
      if (!parent) return;
      var idx = parentDelays.get(parent) || 0;
      // Cap stagger at 6 siblings so long lists don't feel sluggish.
      if (idx > 5) return;
      el.style.transitionDelay = (idx * 80) + 'ms';
      parentDelays.set(parent, idx + 1);
    });
  }
  stagger(children);

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, {
    // Fire slightly before the element is fully in view so the animation
    // completes around the time the user actually focuses on it.
    threshold: 0.1,
    rootMargin: '0px 0px -8% 0px'
  });

  blocks.forEach(function (el) { io.observe(el); });
  children.forEach(function (el) { io.observe(el); });

  // Safety: if a tab becomes active later, make sure its children reveal
  // even if they were hidden when first observed.
  document.addEventListener('click', function (e) {
    var tab = e.target.closest('[role="tab"]');
    if (!tab) return;
    var panelId = tab.getAttribute('aria-controls');
    if (!panelId) return;
    var panel = document.getElementById(panelId);
    if (!panel) return;
    panel.querySelectorAll('.reveal:not(.is-visible)').forEach(function (el, i) {
      setTimeout(function () { el.classList.add('is-visible'); }, i * 60);
    });
  });
})();
