import "./style.css";
import { initCalendly } from "./calendly.js";

// Mobile nav toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn?.addEventListener("click", () => {
  const expanded = menuBtn.getAttribute("aria-expanded") === "true";
  menuBtn.setAttribute("aria-expanded", String(!expanded));
  mobileMenu.classList.toggle("hidden");
});

// Close mobile menu on link click
mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Initialize Calendly widget
initCalendly();

// ── Scroll Reveal ────────────────────────────────────────
function initScrollReveal() {
  // Nav shadow on scroll
  const nav = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    nav?.classList.toggle("nav-scrolled", window.scrollY > 10);
  }, { passive: true });

  // Skip animations if user prefers reduced motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  const observe = (el) => {
    if (!el) return;
    el.classList.add("reveal");
    observer.observe(el);
  };

  const stagger = (els, delay = 0.12) => {
    [...els].forEach((el, i) => {
      el.classList.add("reveal");
      el.style.transitionDelay = `${(i * delay).toFixed(2)}s`;
      observer.observe(el);
    });
  };

  // Section headings
  document.querySelectorAll("section h2").forEach(observe);

  // What We Do — 4 feature cards
  stagger(document.querySelectorAll("section.py-10.bg-white .grid > div"));

  // Why Fractional CFO — two halves (text + image)
  const fracCFO = document.querySelector("section.py-16.bg-steel-light > div");
  if (fracCFO) stagger([...fracCFO.children], 0.15);

  // Services — 3 tier cards
  stagger(document.querySelectorAll("#services .mt-14.grid > div"));

  // Project-Based Advisory box
  observe(document.querySelector("#services .bg-steel-light.rounded-2xl"));

  // How It Works — 3 steps
  stagger(document.querySelectorAll("section.bg-paper .grid.gap-10 > div"), 0.15);
  observe(document.querySelector("section.bg-paper .mt-12"));

  // Stats — 24/7, FP&A, Strategic
  stagger(document.querySelectorAll("section.bg-charcoal .mt-14.grid > div"), 0.12);

  // About section content
  observe(document.querySelector("#about .mt-8"));

  // FAQ accordion items
  document.querySelectorAll("#faq details").forEach(observe);
}

initScrollReveal();
