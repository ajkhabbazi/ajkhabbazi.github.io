module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  // Keep the "completed" status styles even when no page uses them. The CSS
  // cache-bust hash comes from the Sass sources, so if these rules came and went
  // with the HTML, browsers would keep a stale main.css under the same URL.
  safelist: { standard: [/--done$/] },
};
