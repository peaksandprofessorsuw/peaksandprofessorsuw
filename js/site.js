// Mobile menu
(function () {
  var btn = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.textContent = open ? "Close" : "Menu";
    });
  }
})();

// Google Calendar embed (settings are in js/config.js)
(function () {
  var box = document.getElementById("calendar");
  if (!box) return;
  var ids = ((window.SITE && window.SITE.calendarIds) || []).filter(function (id) {
    return id && id.trim();
  });
  if (!ids.length) return; // keep the placeholder message

  var params = "ctz=America%2FLos_Angeles&mode=AGENDA&showTitle=0&showPrint=0&showTz=0&showCalendars=" + (ids.length > 1 ? 1 : 0);
  ids.forEach(function (id) { params += "&src=" + encodeURIComponent(id.trim()); });

  var frame = document.createElement("iframe");
  frame.className = "calendar-frame";
  frame.title = "Upcoming Peaks and Professors events";
  frame.loading = "lazy";
  frame.src = "https://calendar.google.com/calendar/embed?" + params;
  box.replaceWith(frame);
})();

// Team photos: if a photo file is missing, show the person's initials instead
(function () {
  document.querySelectorAll(".person img.avatar").forEach(function (img) {
    function fallback() {
      var name = img.alt || "";
      var w = name.split(/\s+/).filter(Boolean);
      var initials = ((w[0] || "")[0] || "") + (w.length > 1 ? w[w.length - 1][0] : "");
      initials = initials.toUpperCase();
      var div = document.createElement("div");
      div.className = "avatar";
      div.setAttribute("aria-hidden", "true");
      div.textContent = initials;
      img.replaceWith(div);
    }
    if (img.complete && img.naturalWidth === 0) fallback();
    else img.addEventListener("error", fallback);
  });
})();

// Gear checklist: print button
(function () {
  var p = document.getElementById("print-gear");
  if (p) p.addEventListener("click", function () { window.print(); });
})();
