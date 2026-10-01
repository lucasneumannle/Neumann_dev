(() => {
  const header = document.getElementById('site-header');
  const menuButton = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const syncHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  syncHeader();
  window.addEventListener('scroll', syncHeader, { passive: true });

  function closeMenu() {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menú');
    mobileNav.hidden = true;
    document.body.classList.remove('menu-open');
  }

  menuButton.addEventListener('click', () => {
    const opening = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(opening));
    menuButton.setAttribute('aria-label', opening ? 'Cerrar menú' : 'Abrir menú');
    mobileNav.hidden = !opening;
    document.body.classList.toggle('menu-open', opening);
  });

  mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !mobileNav.hidden) {
      closeMenu();
      menuButton.focus();
    }
  });
  window.matchMedia('(min-width: 821px)').addEventListener('change', (event) => {
    if (event.matches) closeMenu();
  });

  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    document.documentElement.classList.add('js-motion');
    const observer = new IntersectionObserver((entries, activeObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          activeObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
  }

  // Preparado para futura conexão com GA4 ou Meta Pixel: nenhum ID é carregado nesta prévia.
  document.querySelectorAll('[data-track]').forEach((link) => {
    link.addEventListener('click', () => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: link.dataset.track, channel: 'whatsapp' });
    });
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
