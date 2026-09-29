(() => {
  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('.menu-toggle');
  const menuLinks = document.querySelectorAll('.main-nav a');
  const heroImage = document.querySelector('.hero-media img');
  const floatingCta = document.querySelector('.whatsapp-float');

  const setHeader = () => {
    header?.classList.toggle('scrolled', window.scrollY > 24);
    floatingCta?.classList.toggle('visible', window.scrollY > Math.min(window.innerHeight * 0.72, 640));
  };
  setHeader();
  window.addEventListener('scroll', setHeader, { passive: true });

  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    header.classList.toggle('menu-open', !open);
  });

  menuLinks.forEach((link) => link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    header?.classList.remove('menu-open');
  }));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && header?.classList.contains('menu-open')) {
      menuButton?.setAttribute('aria-expanded', 'false');
      header.classList.remove('menu-open');
      menuButton?.focus();
    }
  });

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
    reveals.forEach((item) => observer.observe(item));
    window.setTimeout(() => reveals.forEach((item) => item.classList.add('in-view')), 1600);
  } else {
    reveals.forEach((item) => item.classList.add('in-view'));
  }

  let framePending = false;
  const moveHero = () => {
    if (!heroImage || reducedMotion.matches || window.innerWidth < 820) return;
    const offset = Math.min(window.scrollY * 0.055, 42);
    heroImage.style.transform = `scale(1.03) translate3d(0, ${offset}px, 0)`;
  };
  window.addEventListener('scroll', () => {
    if (framePending) return;
    framePending = true;
    requestAnimationFrame(() => {
      moveHero();
      framePending = false;
    });
  }, { passive: true });

  const serviceContent = {
    agua: {
      image: 'assets/images/detail.webp',
      alt: 'Detalhe de água limpa refletindo a luz',
      kicker: 'Tratamento completo',
      title: 'A água bonita é consequência de parâmetros cuidados.',
      text: 'Correção dos parâmetros, decantação, higienização, escovação do fundo e das laterais.'
    },
    filtragem: {
      image: 'assets/images/water.webp',
      alt: 'Superfície de piscina com reflexos solares',
      kicker: 'Circulação e filtro',
      title: 'O que circula também precisa de uma rotina.',
      text: 'Limpeza de pré-filtro, retrolavagem, troca de areia do filtro e limpeza da casa de máquinas.'
    },
    equipamentos: {
      image: 'assets/images/hero.webp',
      alt: 'Piscina integrada a uma residência contemporânea',
      kicker: 'Sistema em funcionamento',
      title: 'Água e equipamento precisam trabalhar juntos.',
      text: 'Manutenção hidráulica e elétrica, conforme a necessidade identificada na avaliação.'
    },
    acompanhamento: {
      image: 'assets/images/immersive.webp',
      alt: 'Piscina clara em uma área externa residencial',
      kicker: 'Rotina profissional',
      title: 'Cuidado recorrente com registro do que foi feito.',
      text: 'Relatórios, serviços recorrentes e opções com fornecimento de produtos ou somente mão de obra.'
    }
  };

  const tabs = [...document.querySelectorAll('[role="tab"][data-service]')];
  const panel = document.querySelector('#service-panel');
  const serviceImage = panel?.querySelector('[data-service-image]');
  const serviceKicker = panel?.querySelector('[data-service-kicker]');
  const serviceTitle = panel?.querySelector('[data-service-title]');
  const serviceText = panel?.querySelector('[data-service-text]');

  const selectService = (tab) => {
    const data = serviceContent[tab.dataset.service];
    if (!data || !panel) return;
    tabs.forEach((item) => {
      const active = item === tab;
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
    });
    panel.setAttribute('aria-labelledby', tab.id);
    panel.classList.add('is-changing');
    window.setTimeout(() => {
      serviceImage.src = data.image;
      serviceImage.alt = data.alt;
      serviceKicker.textContent = data.kicker;
      serviceTitle.textContent = data.title;
      serviceText.textContent = data.text;
      panel.classList.remove('is-changing');
    }, reducedMotion.matches ? 0 : 180);
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectService(tab));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      let targetIndex = index;
      if (event.key === 'Home') targetIndex = 0;
      else if (event.key === 'End') targetIndex = tabs.length - 1;
      else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') targetIndex = (index - 1 + tabs.length) % tabs.length;
      else targetIndex = (index + 1) % tabs.length;
      tabs[targetIndex].focus();
      selectService(tabs[targetIndex]);
    });
  });

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
