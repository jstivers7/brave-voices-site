/* Brave Voices — simple accessible carousel.
   One slide visible at a time. Prev/next arrows, clickable dots,
   keyboard (left/right), touch swipe. No autoplay. */
(function () {
  var carousels = document.querySelectorAll('[data-carousel]');
  if (!carousels.length) return;

  carousels.forEach(function (car) {
    var track = car.querySelector('.carousel__track');
    if (!track) return;
    var slides = Array.prototype.slice.call(track.children);
    var total = slides.length;
    if (!total) return;

    var viewport = car.querySelector('.carousel__viewport');
    var prevBtn = car.querySelector('.carousel__btn--prev');
    var nextBtn = car.querySelector('.carousel__btn--next');
    var dotsWrap = car.querySelector('.carousel__dots');

    // Build dot indicators matching the number of slides.
    var dots = [];
    if (dotsWrap) {
      dotsWrap.innerHTML = '';
      for (var i = 0; i < total; i++) {
        var dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'carousel__dot';
        dot.setAttribute('role', 'tab');
        dot.setAttribute('aria-label', 'Show testimonial ' + (i + 1));
        dot.dataset.index = String(i);
        dotsWrap.appendChild(dot);
        dots.push(dot);
      }
    }

    var idx = 0;
    function resizeToActive() {
      if (!viewport) return;
      var active = slides[idx];
      if (!active) return;
      viewport.style.height = active.offsetHeight + 'px';
    }
    function go(n) {
      idx = ((n % total) + total) % total;
      track.style.transform = 'translateX(-' + (idx * 100) + '%)';
      resizeToActive();
      for (var i = 0; i < slides.length; i++) {
        slides[i].setAttribute('aria-hidden', i === idx ? 'false' : 'true');
      }
      for (var j = 0; j < dots.length; j++) {
        dots[j].setAttribute('aria-selected', j === idx ? 'true' : 'false');
        dots[j].setAttribute('tabindex', j === idx ? '0' : '-1');
      }
    }

    // Recalculate heights on resize (content reflows at different widths).
    var resizeTicking = false;
    window.addEventListener('resize', function () {
      if (!resizeTicking) {
        window.requestAnimationFrame(function () {
          resizeToActive();
          resizeTicking = false;
        });
        resizeTicking = true;
      }
    });
    // Remeasure once fonts/images have loaded — initial offsetHeight can be off.
    window.addEventListener('load', resizeToActive);

    if (prevBtn) prevBtn.addEventListener('click', function () { go(idx - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { go(idx + 1); });
    dots.forEach(function (d, i) {
      d.addEventListener('click', function () { go(i); });
    });

    // Keyboard — left/right arrow keys when carousel region has focus.
    car.setAttribute('tabindex', '0');
    car.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(idx - 1); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); go(idx + 1); }
      else if (e.key === 'Home') { e.preventDefault(); go(0); }
      else if (e.key === 'End') { e.preventDefault(); go(total - 1); }
    });

    // Touch swipe for mobile.
    var startX = null;
    var startY = null;
    track.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });
    track.addEventListener('touchend', function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      var dy = e.changedTouches[0].clientY - startY;
      // Only treat as swipe if horizontal movement dominates.
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
        go(dx < 0 ? idx + 1 : idx - 1);
      }
      startX = null;
      startY = null;
    });

    go(0);
  });
})();
