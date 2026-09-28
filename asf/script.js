const header = document.querySelector('[data-header]');
const reveals = document.querySelectorAll('.reveal');
const year = document.querySelector('[data-year]');

if (year) year.textContent = new Date().getFullYear();

const updateHeader = () => {
  header?.classList.toggle('scrolled', window.scrollY > 40);
};

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

  reveals.forEach((element) => observer.observe(element));
} else {
  reveals.forEach((element) => element.classList.add('is-visible'));
}

