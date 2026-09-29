const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 48);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

navToggle?.addEventListener('click', () => {
  const open = header.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  document.body.style.overflow = open ? 'hidden' : '';
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  header.classList.remove('nav-open');
  navToggle?.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
document.querySelectorAll('.reveal, .media-reveal').forEach(el => revealObserver.observe(el));

const solutionImage = document.querySelector('[data-solution-image]');
const solutionNumber = document.querySelector('[data-solution-number]');
document.querySelectorAll('.solution-item').forEach((item, index) => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.solution-item').forEach(other => {
      other.classList.remove('is-active');
      other.setAttribute('aria-pressed', 'false');
    });
    item.classList.add('is-active');
    item.setAttribute('aria-pressed', 'true');
    const figure = solutionImage?.closest('figure');
    figure?.classList.add('is-changing');
    window.setTimeout(() => {
      if (solutionImage) solutionImage.src = item.dataset.image;
      if (solutionNumber) solutionNumber.textContent = String(index + 1).padStart(2, '0');
      figure?.classList.remove('is-changing');
    }, 180);
  });
});

if (!reducedMotion && window.innerWidth > 760) {
  const immersive = document.querySelector('.immersive');
  const onParallax = () => {
    if (!immersive) return;
    const rect = immersive.getBoundingClientRect();
    if (rect.bottom > 0 && rect.top < window.innerHeight) {
      immersive.style.setProperty('--parallax', `${Math.max(-90, Math.min(0, rect.top * .1))}px`);
    }
  };
  window.addEventListener('scroll', onParallax, { passive: true });
}

document.querySelector('[data-year]').textContent = new Date().getFullYear();
