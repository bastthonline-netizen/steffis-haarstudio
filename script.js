// Steffi's Haarstudio – mobile Navigation + Scroll-Reveal

(function () {
  "use strict";

  // ---- Mobile-Navigation ----
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("navMenu");

  if (toggle && menu) {
    var closeMenu = function () {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Menü öffnen");
    };

    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
    });

    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") closeMenu();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  // ---- Scroll-Reveal ----
  var items = document.querySelectorAll(".reveal");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("is-in"); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });

  items.forEach(function (el) { io.observe(el); });

  // ---- Hero-Animation pausieren, wenn außerhalb des Sichtfelds ----
  var hero = document.querySelector(".hero");
  if (hero) {
    var heroIO = new IntersectionObserver(function (entries) {
      hero.classList.toggle("is-paused", !entries[0].isIntersecting);
    }, { threshold: 0 });
    heroIO.observe(hero);
  }
})();
