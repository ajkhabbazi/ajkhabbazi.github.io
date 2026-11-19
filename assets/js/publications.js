// Publications page: filter the list by kind (journal, conference, ...), and fade entries in.
// The kind comes from each entry's own label, so new papers need no change here.
(function () {
  var page = document.querySelector(".publications--page");
  var bar = document.querySelector(".pub-filters");
  if (!page || !bar) return;

  var items = Array.prototype.slice.call(page.querySelectorAll("ol.bibliography > li"));
  var counts = {};
  items.forEach(function (li) {
    var label = li.querySelector(".pub-kind");
    var kind = label ? label.textContent.trim().toLowerCase() : "";
    li.setAttribute("data-pub-kind", kind);
    counts[kind] = (counts[kind] || 0) + 1;
  });

  var buttons = Array.prototype.slice.call(bar.querySelectorAll(".pub-filter"));
  buttons.forEach(function (button) {
    var kind = button.getAttribute("data-pub-filter");
    var n = kind === "all" ? items.length : counts[kind] || 0;
    if (kind !== "all" && n === 0) {
      button.hidden = true;
      return;
    }
    button.textContent = button.textContent.trim() + " (" + n + ")";
  });

  bar.addEventListener("click", function (event) {
    var button = event.target.closest(".pub-filter");
    if (!button) return;
    var selected = button.getAttribute("data-pub-filter");

    buttons.forEach(function (other) {
      var active = other === button;
      other.classList.toggle("pub-filter--active", active);
      other.setAttribute("aria-pressed", active ? "true" : "false");
    });

    items.forEach(function (li) {
      li.hidden = selected !== "all" && li.getAttribute("data-pub-kind") !== selected;
    });

    // A year stays only while one of its entries is showing.
    page.querySelectorAll("ol.bibliography").forEach(function (list) {
      var any = false;
      Array.prototype.forEach.call(list.children, function (li) {
        if (!li.hidden) any = true;
      });
      list.hidden = !any;
      var heading = list.previousElementSibling;
      if (heading && heading.tagName === "H2") heading.hidden = !any;
    });
  });

  // Fade entries in as they scroll into view, a short step apart when several arrive together.
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if ("IntersectionObserver" in window && !reduceMotion) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        var step = 0;
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var li = entry.target;
          li.style.transitionDelay = step * 60 + "ms";
          step += 1;
          li.classList.add("is-visible");
          revealObserver.unobserve(li);
          // The delay must not linger, or it would also hold back the hover tint.
          window.setTimeout(function () {
            li.style.transitionDelay = "";
          }, 1200);
        });
      },
      { threshold: 0.05 }
    );
    items.forEach(function (li) {
      li.classList.add("pub-reveal");
      revealObserver.observe(li);
    });
  }
})();
