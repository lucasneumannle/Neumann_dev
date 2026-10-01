(() => {
  const header = document.getElementById('site-header');
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const setHeader = () => header.classList.toggle('scrolled', window.scrollY > 24);
  setHeader();
  window.addEventListener('scroll', setHeader, { passive: true });

  function closeMenu() {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
    menu.hidden = true;
    header.classList.remove('menu-active');
    document.body.classList.remove('menu-open');
  }

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) { closeMenu(); return; }
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Cerrar menú');
    menu.hidden = false;
    header.classList.add('menu-active');
    document.body.classList.add('menu-open');
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 900) closeMenu(); });

  // Punto único para conectar Meta Pixel o GA4 más adelante.
  document.querySelectorAll('.cta-track').forEach(link => {
    link.addEventListener('click', () => {
      const placement = link.dataset.cta || 'unknown';
      window.dispatchEvent(new CustomEvent('granimar:whatsapp-click', { detail: { placement } }));
      if (typeof window.gtag === 'function') window.gtag('event', 'whatsapp_click', { placement });
      if (typeof window.fbq === 'function') window.fbq('trackCustom', 'WhatsAppClick', { placement });
    });
  });
  document.getElementById('year').textContent = new Date().getFullYear();
})();
