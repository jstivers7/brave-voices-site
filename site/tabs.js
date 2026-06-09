/* Brave Voices — shared tab behavior
   Activates a tab on click, arrow-key navigation, and URL hash match.
   Usage: any element with role="tablist" containing role="tab" buttons
   whose aria-controls points at a matching tab panel ID. */
(function () {
  var tablists = document.querySelectorAll('[role="tablist"]');
  if (!tablists.length) return;

  function activate(list, tab, focus) {
    var tabs = list.querySelectorAll('[role="tab"]');
    tabs.forEach(function (t) {
      var selected = t === tab;
      t.setAttribute('aria-selected', selected ? 'true' : 'false');
      t.setAttribute('tabindex', selected ? '0' : '-1');
      var panel = document.getElementById(t.getAttribute('aria-controls'));
      if (panel) panel.hidden = !selected;
    });
    if (focus) tab.focus();
  }

  // Initialize: re-assert the markup-declared default on every page load so
  // the buttons' aria-selected state and the panels' hidden state can never
  // drift apart. We pick the tab marked aria-selected="true" if present,
  // otherwise fall back to the first tab in the list.
  tablists.forEach(function (list) {
    var tabs = list.querySelectorAll('[role="tab"]');
    if (!tabs.length) return;
    var defaultTab = list.querySelector('[role="tab"][aria-selected="true"]') || tabs[0];
    activate(list, defaultTab, false);
  });

  tablists.forEach(function (list) {
    var tabs = list.querySelectorAll('[role="tab"]');
    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { activate(list, tab, true); });
      tab.addEventListener('keydown', function (e) {
        var next = null;
        if (e.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
        else if (e.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length];
        else if (e.key === 'Home') next = tabs[0];
        else if (e.key === 'End') next = tabs[tabs.length - 1];
        if (next) { e.preventDefault(); activate(list, next, true); }
      });
    });
  });

  // Hash-driven activation: when the URL hash matches a tab's ID (or the ID
  // of any element inside a tab panel), activate that tab.
  function activateFromHash() {
    var hash = window.location.hash.slice(1);
    if (!hash) return;
    var target = document.getElementById(hash);
    if (!target) return;

    // If the hash points directly at a tab, activate it.
    if (target.getAttribute('role') === 'tab') {
      var list = target.closest('[role="tablist"]');
      if (list) {
        activate(list, target, false);
        // Scroll the tablist into view without jumping
        list.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    // Otherwise, if the hash points at an element inside a tab panel,
    // activate that panel's controlling tab.
    var panel = target.closest('[role="tabpanel"]');
    if (panel) {
      var controllingTab = document.querySelector('[aria-controls="' + panel.id + '"]');
      if (controllingTab) {
        var list2 = controllingTab.closest('[role="tablist"]');
        if (list2) activate(list2, controllingTab, false);
      }
    }
  }

  window.addEventListener('hashchange', activateFromHash);
  // Run once on load in case the page was opened with a hash
  activateFromHash();
})();
