'use strict';

const defaultMessage = 'Hola, vi la página de SCH Vidrios Planos y quisiera solicitar una cotización.';
document.querySelectorAll('[data-wa]').forEach(link => {
  link.href = `https://wa.me/573016997174?text=${encodeURIComponent(link.dataset.message || defaultMessage)}`;
});
document.getElementById('year').textContent = new Date().getFullYear();

const header = document.getElementById('header');
const toggle = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');
function closeMenu(returnFocus = false) {
  navigation.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Abrir menú');
  if (returnFocus) toggle.focus();
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  navigation.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
document.addEventListener('click', event => { if (!header.contains(event.target)) closeMenu(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
const desktopQuery = matchMedia('(min-width: 701px)');
desktopQuery.addEventListener('change', () => closeMenu());
let scrollQueued = false;
function updateHeader() {
  header.classList.toggle('scrolled', window.scrollY > 35);
  scrollQueued = false;
}
window.addEventListener('scroll', () => {
  if (!scrollQueued) { scrollQueued = true; requestAnimationFrame(updateHeader); }
}, { passive: true });
updateHeader();

const scene = document.querySelector('.glass-scene');
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) { scene.classList.add('clear'); observer.disconnect(); }
  }, { threshold: 0.35 });
  observer.observe(scene);
} else { scene.classList.add('clear'); }

const images = [...document.querySelectorAll('.gallery-item')];
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
let selectedImage = 0;
let lastImageButton;
function showImage(index) {
  selectedImage = (index + images.length) % images.length;
  const item = images[selectedImage];
  lightboxImage.src = item.dataset.image;
  lightboxImage.alt = item.querySelector('img').alt;
  lightboxCaption.textContent = `${selectedImage + 1} / ${images.length} · ${item.dataset.caption}`;
}
images.forEach((button, index) => button.addEventListener('click', () => {
  lastImageButton = button;
  showImage(index);
  lightbox.showModal();
  lightbox.querySelector('.lightbox-close').focus();
}));
document.getElementById('previous-image').addEventListener('click', () => showImage(selectedImage - 1));
document.getElementById('next-image').addEventListener('click', () => showImage(selectedImage + 1));
lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
lightbox.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') { event.preventDefault(); showImage(selectedImage - 1); }
  if (event.key === 'ArrowRight') { event.preventDefault(); showImage(selectedImage + 1); }
});
lightbox.addEventListener('close', () => lastImageButton?.focus());

const loadMap = document.getElementById('load-map');
loadMap.addEventListener('click', () => {
  const frame = document.createElement('iframe');
  frame.title = 'Ubicación de SCH Vidrios Planos en Sabaneta';
  frame.src = 'https://www.google.com/maps?q=SCH%20Vidrios%20Planos%20Cl.%2071%20Sur%2043A-68%20Sabaneta%20Antioquia&output=embed';
  frame.referrerPolicy = 'no-referrer-when-downgrade';
  frame.allowFullscreen = true;
  document.getElementById('map-panel').append(frame);
  frame.addEventListener('load', () => frame.focus(), { once: true });
});
