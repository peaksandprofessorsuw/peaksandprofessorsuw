// Builds the Our Team page and the individual profile pages from js/team.js.
// You shouldn't need to edit this file.
(function () {
  var T = window.TEAM;
  if (!T) return;
  var all = T.board.concat(T.leads);

  function esc(s) {
    return String(s || "").replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function initials(name) {
    var w = name.split(/\s+/).filter(Boolean);
    return ((w[0] || "")[0] + (w.length > 1 ? w[w.length - 1][0] : "")).toUpperCase();
  }
  function photo(p, cls) {
    return '<img class="' + cls + '" src="images/team/' + p.id + '.jpg" alt="' + esc(p.name) + '" data-initials="' + initials(p.name) + '">';
  }
  // Missing photo -> show initials instead
  function fixMissing(root) {
    root.querySelectorAll("img[data-initials]").forEach(function (img) {
      function swap() {
        var d = document.createElement("div");
        d.className = img.className + " initials";
        d.setAttribute("aria-hidden", "true");
        d.textContent = img.getAttribute("data-initials");
        img.replaceWith(d);
      }
      if (img.complete && img.naturalWidth === 0) swap();
      else img.addEventListener("error", swap);
    });
  }

  // ---------- Team list page ----------
  function card(p) {
    return '<li><a class="member" href="person.html?id=' + p.id + '">' +
      photo(p, "member-photo") +
      '<b>' + esc(p.name) + '</b>' +
      (p.role && p.role !== "P-Board" ? '<span>' + esc(p.role) + '</span>' : '') +
      '</a></li>';
  }
  var board = document.getElementById("team-board");
  if (board) {
    document.getElementById("team-board-title").textContent = T.boardTitle;
    board.innerHTML = T.board.map(card).join("");
    document.getElementById("team-leads").innerHTML = T.leads.map(card).join("");
    document.getElementById("team-alumni").innerHTML = T.alumni.map(function (a) {
      return '<div><h3>Grads of ' + esc(a[0]) + '</h3><p>' + esc(a[1]) + '</p></div>';
    }).join("");
    fixMissing(document);
  }

  // ---------- Single profile page ----------
  var box = document.getElementById("profile");
  if (box) {
    var id = new URLSearchParams(location.search).get("id");
    var p = all.filter(function (x) { return x.id === id; })[0];
    if (!p) {
      box.innerHTML = '<h1>Person not found</h1><p>This trip lead may have graduated. <a href="team.html">See the current team</a>.</p>';
      return;
    }
    document.title = p.name + " | Peaks and Professors UW";
    var bio = p.bio
      ? p.bio.split(/\n\s*\n/).map(function (para) { return "<p>" + esc(para) + "</p>"; }).join("")
      : '<p class="muted">Bio coming soon.</p>';
    var role = p.role && p.role !== "P-Board" ? p.role : (T.board.indexOf(p) > -1 ? "P-Board" : "Trip Lead");
    box.innerHTML =
      photo(p, "profile-photo") +
      '<div class="profile-text">' +
        '<p class="profile-role">' + esc(role) + '</p>' +
        '<h1>' + esc(p.name) + '</h1>' +
        (p.pronouns ? '<p class="profile-pronouns">' + esc(p.pronouns) + '</p>' : '') +
        '<div class="profile-bio">' + bio + '</div>' +
        '<a class="btn btn-outline" href="team.html">Back to the team</a>' +
      '</div>';
    fixMissing(box);
  }
})();
