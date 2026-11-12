// Research page: count-up stats, fade-in on scroll, progress highlighting, paper counts, deep links.
// Everything here is an enhancement. The page reads fully without it.
(function () {
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var canObserve = "IntersectionObserver" in window;

  // Paper counts on the toggles, e.g. "Papers (3)"
  document.querySelectorAll(".research-papers").forEach(function (box) {
    var n = box.querySelectorAll("ol.bibliography > li").length;
    var summary = box.querySelector("summary");
    if (n && summary) summary.textContent = (n === 1 ? "Paper" : "Papers") + " (" + n + ")";
  });

  // Count-up numbers
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
      { threshold: 0.08 }
    );
    document.querySelectorAll(".research-section").forEach(function (el) {
      el.classList.add("research-reveal");
      revealObserver.observe(el);
    });
  }

  // Highlight the current section in the progress bar
  var links = {};
  document.querySelectorAll("[data-research-spy]").forEach(function (a) {
    links[a.getAttribute("data-research-spy")] = a;
  });
  var ids = Object.keys(links);
  function setActive(id) {
    ids.forEach(function (key) {
      links[key].classList.toggle("is-active", key === id);
    });
  }
  function updateActive() {
    var current = null;
    ids.forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 140) current = id;
    });
    setActive(current);
  }
  if (ids.length) {
    var ticking = false;
    window.addEventListener(
      "scroll",
      function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () {
          updateActive();
          ticking = false;
        });
      },
      { passive: true }
    );
    updateActive();
  }

  // Deep links such as /research/#project-hydrogen open that card
  function openFromHash() {
    var id = window.location.hash.slice(1);
    if (!id) return;
    var el = document.getElementById(id);
    if (el && el.tagName === "DETAILS") {
      el.open = true;
      el.scrollIntoView();
    }
  }
  window.addEventListener("hashchange", openFromHash);
  openFromHash();
})();
