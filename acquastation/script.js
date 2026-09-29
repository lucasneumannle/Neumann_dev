const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");
const menuLabel = menuToggle?.querySelector(".sr-only");

const setMenuState = (open) => {
  if (!menuToggle || !menu) return;

  menuToggle.setAttribute("aria-expanded", String(open));
  menu.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);

  if (menuLabel) {
    menuLabel.textContent = open ? "Fechar menu" : "Abrir menu";
  }
};

window.toggleMenu = () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  setMenuState(!isOpen);
};

menu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuState(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle?.getAttribute("aria-expanded") === "true") {
    setMenuState(false);
    menuToggle.focus();
  }
});

window.addEventListener(
  "scroll",
  () => header?.classList.toggle("is-scrolled", window.scrollY > 20),
  { passive: true },
);

const currentYear = new Date().getFullYear();
document.querySelectorAll("[data-year]").forEach((item) => {
  item.textContent = String(currentYear);
});

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll(".reveal, .reveal-visual");

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
  );

  revealItems.forEach((item) => observer.observe(item));
}

const campaign = new URLSearchParams(window.location.search).get("utm_campaign");

if (campaign) {
  const cleanCampaign = campaign.replace(/[^\p{L}\p{N} _-]/gu, "").slice(0, 60);
  if (cleanCampaign) {
    document.querySelectorAll(".js-whatsapp").forEach((link) => {
      const url = new URL(link.href);
      const currentMessage = url.searchParams.get("text") || "Olá, gostaria de ajuda com minha piscina.";
      url.searchParams.set("text", `${currentMessage} Campanha: ${cleanCampaign}.`);
      link.href = url.toString();
    });
  }
}

