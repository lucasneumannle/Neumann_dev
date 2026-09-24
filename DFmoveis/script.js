// Substitua pelo número real, usando apenas dígitos: DDI + DDD + número.
const WHATSAPP_NUMBER = "";
const WHATSAPP_MESSAGE = "Olá! Vi a prévia da DF Móveis & Cia e gostaria de conhecer as opções de móveis.";

const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const notice = document.querySelector("[data-notice]");
let noticeTimer;

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 30);
}

function closeMenu() {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.querySelector(".sr-only").textContent = "Abrir menu";
}

function toggleMenu() {
  const willOpen = !nav.classList.contains("open");
  nav.classList.toggle("open", willOpen);
  menuButton.setAttribute("aria-expanded", String(willOpen));
  menuButton.querySelector(".sr-only").textContent = willOpen ? "Fechar menu" : "Abrir menu";
}

window.toggleMenu = toggleMenu;

nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    if (!WHATSAPP_NUMBER) {
      notice.textContent = "Prévia: configure WHATSAPP_NUMBER em script.js para ativar este contato.";
      notice.classList.add("show");
      clearTimeout(noticeTimer);
      noticeTimer = setTimeout(() => notice.classList.remove("show"), 4200);
      return;
    }
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });
});

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const reveals = document.querySelectorAll(".reveal");

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  reveals.forEach((element) => element.classList.add("visible"));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  reveals.forEach((element) => observer.observe(element));
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
