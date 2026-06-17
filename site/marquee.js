(function () {
  'use strict';

  var track = document.querySelector('.marquee__track');
  if (!track) return;

  // Must match the animation-duration in styles.css
  var DURATION_S = 25;

  var startX      = 0;
  var baseOffset  = 0;
  var liveOffset  = 0;
  var half        = 0;

  function getTranslateX() {
    var m = new DOMMatrix(window.getComputedStyle(track).transform);
    return m.m41;
  }

  function clamp(px) {
    // Keep offset within [-half, 0)
    var r = px % -half;
    if (r > 0) r -= half;
    return r;
  }

  track.addEventListener('touchstart', function (e) {
    half       = track.scrollWidth / 2;
    baseOffset = getTranslateX();
    liveOffset = baseOffset;
    startX     = e.touches[0].clientX;

    // Freeze animation at its current position
    track.style.animation = 'none';
    track.style.transform = 'translateX(' + baseOffset + 'px)';
  }, { passive: true });

  track.addEventListener('touchmove', function (e) {
    var dx  = e.touches[0].clientX - startX;
    liveOffset = clamp(baseOffset + dx);
    track.style.transform = 'translateX(' + liveOffset + 'px)';
  }, { passive: true });

  track.addEventListener('touchend', function () {
    // Calculate where we are as a fraction of the loop, then use a negative
    // animation-delay to resume from exactly that position.
    var progress = Math.abs(liveOffset) / half;          // 0 → 1
    var delay    = -(progress * DURATION_S).toFixed(3);  // e.g. -12.500

    track.style.transform      = '';
    track.style.animationDelay = delay + 's';
    track.style.animation      =
      'marquee-scroll ' + DURATION_S + 's ' + delay + 's linear infinite';
  }, { passive: true });
}());
