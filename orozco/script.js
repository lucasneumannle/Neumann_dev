/* Sin dependencias. Todo el contenido y los enlaces funcionan sin JavaScript. */
(() => {
  const header = document.querySelector('.header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#navigation');
  const setMenu = (open) => {
    header.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  };
  const scrollState = () => header.classList.toggle('scrolled', window.scrollY > 32);
  scrollState();
  window.addEventListener('scroll', scrollState, { passive: true });
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', (event) => { if (event.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { setMenu(false); toggle.focus(); }
  });
  window.matchMedia('(min-width: 761px)').addEventListener('change', (event) => { if (event.matches) setMenu(false); });
  document.querySelectorAll('[data-event]').forEach((link) => {
    link.addEventListener('click', () => {
      const payload = { event: link.dataset.event, channel: 'whatsapp', placement: link.dataset.event.replace('whatsapp_', '') };
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(payload);
      window.dispatchEvent(new CustomEvent('orozco:conversion', { detail: payload }));
      // Integración futura: añadir gtag o Meta Pixel únicamente con IDs reales y consentimiento aplicable.
    });
  });
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('reveal-in'); observer.unobserve(entry.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.section-heading, .bathroom-copy, .split-heading').forEach((element) => observer.observe(element));
  }
})();
