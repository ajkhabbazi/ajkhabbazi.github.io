// Initialize medium zoom.
$(document).ready(function () {
  medium_zoom = mediumZoom("[data-zoomable]", {
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for trasparency.
    margin: 40, // keep the whole figure in view with some space around it
  });

  // The library zooms by scaling a thumbnail-sized copy of the picture. Safari on iPhone and
  // iPad draws that copy at its thumbnail size and stretches the result, so a small thumbnail
  // opens blurry. Once the zoom has opened, give the copy its real size on the page in place
  // of the scale, so the browser draws it from the full file. Before it closes, put the scale
  // back so the closing animation runs as usual.
  var saved = null;

  function zoomedCopy() {
    return document.querySelector("body > img.medium-zoom-image--opened");
  }

  medium_zoom.on("opened", function () {
    var copy = zoomedCopy();
    if (!copy || saved) return;
    var box = copy.getBoundingClientRect();
    if (!box.width || !box.height) return;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || 0;
    saved = {
      copy: copy,
      top: copy.style.top,
      left: copy.style.left,
      width: copy.style.width,
      height: copy.style.height,
      transform: copy.style.transform,
    };
    copy.style.setProperty("transition", "none", "important");
    copy.style.top = box.top + scrollTop + "px";
    copy.style.left = box.left + scrollLeft + "px";
    copy.style.width = box.width + "px";
    copy.style.height = box.height + "px";
    copy.style.transform = "none";
  });

  medium_zoom.on("close", function () {
    if (!saved) return;
    var s = saved;
    saved = null;
    var copy = s.copy;
    // Back to the thumbnail-sized copy with the zoom scale, with no animation...
    copy.style.setProperty("transition", "none", "important");
    copy.style.top = s.top;
    copy.style.left = s.left;
    copy.style.width = s.width;
    copy.style.height = s.height;
    copy.style.transform = s.transform;
    void copy.offsetWidth; // apply it now
    // ...then let the library's own closing animation run from there.
    copy.style.removeProperty("transition");
    copy.style.transform = "";
  });
});
