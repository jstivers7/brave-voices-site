/* Brave Voices — mobile nav (hamburger menu)
   Toggles the nav menu on small screens. Closes on outside click, Escape,
   and link click. Uses ARIA attributes so screen readers know the state. */
(function () {
  var toggles = document.querySelectorAll('.nav-toggle');
  if (!toggles.length) return;

  toggles.forEach(function (toggle) {
    var menuId = toggle.getAttribute('aria-controls');
    var menu = menuId && document.getElementById(menuId);
    if (!menu) return;

    function setOpen(open) {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      menu.setAttribute('data-open', open ? 'true' : 'false');
      // Update visible button label for screen readers
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }

    // Initialize closed
    setOpen(false);

    // Toggle on button click
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      setOpen(!isOpen);
    });

    // Close when a nav link is clicked (so navigating to a new section
    // doesn't leave a stale-open menu briefly visible)
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { setOpen(false); });
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });

    // Close when clicking anywhere outside the nav
    document.addEventListener('click', function (e) {
      if (toggle.getAttribute('aria-expanded') !== 'true') return;
      if (toggle.contains(e.target) || menu.contains(e.target)) return;
      setOpen(false);
    });
  });
})();
