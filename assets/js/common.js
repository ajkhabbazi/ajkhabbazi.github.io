$(document).ready(function () {
  // add toggle functionality to abstract, award and bibtex buttons
  // Publication toggles: each button opens its own block and closes the others.
  var pubToggles = ["abstract", "award", "bibtex", "ga"];
  pubToggles.forEach(function (name) {
    $("a." + name).click(function () {
      var entry = $(this).parent().parent();
      pubToggles.forEach(function (other) {
        if (other === name) {
          entry.find("." + other + ".hidden").toggleClass("open");
        } else {
          entry.find("." + other + ".hidden.open").toggleClass("open");
        }
      });
    });
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });

  // shadow under the top bar once the page has scrolled
  var navbar = document.getElementById("navbar");
  if (navbar) {
    var markScrolled = function () {
      navbar.classList.toggle("navbar-scrolled", window.scrollY > 8);
    };
    markScrolled();
    window.addEventListener("scroll", markScrolled, { passive: true });
  }
});
