// Research page: links that open a card, count-up stats, fade-in on scroll.
// Everything here is an enhancement. The page reads fully without it.
(function () {
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var canObserve = "IntersectionObserver" in window;

  // Open the card a link or the address bar points to, e.g. /research/#phase-2
  function openCard(id, scroll) {
    if (!id) return false;
    var el = document.getElementById(id);
    if (!el || el.tagName !== "DETAILS") return false;
    el.open = true;
    if (scroll) el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    return true;
  }

  // Wheel thirds and any other in-page link to a card
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (event) {
      var id = a.getAttribute("href").slice(1);
      if (openCard(id, true)) {
        event.preventDefault();
        if (window.history && window.history.replaceState) window.history.replaceState(null, "", "#" + id);
      }
    });
  });

  window.addEventListener("hashchange", function () {
    openCard(window.location.hash.slice(1), true);
  });
  openCard(window.location.hash.slice(1), true);

  // Count-up numbers, run when a stat first becomes visible (after its card opens)
  function countUp(el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    var suffix = el.getAttribute("data-suffix") || "";
    var start = null;
    var duration = 900;
    function frame(now) {
      if (start === null) start = now;
      var t = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  if (canObserve && !reduceMotion) {
    var statObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            countUp(entry.target);
            statObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    document.querySelectorAll(".research-stat-num[data-count]").forEach(function (el) {
      statObserver.observe(el);
    });

    // Fade sections in
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    document.querySelectorAll(".research-section").forEach(function (el) {
      el.classList.add("research-reveal");
      revealObserver.observe(el);
    });
  }
})();
