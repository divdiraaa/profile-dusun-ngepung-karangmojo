/* ==========================================================
   DESA NGEPUNG — MAIN.JS
   Dark Glassmorphism Design System
========================================================== */

/* ── Global CSS ─────────────────────────────────────────────── */
import './css/style.css';
import './css/overrides.css';


/* ── Bootstrap ──────────────────────────────────────────────── */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

/* ── Libraries ──────────────────────────────────────────────── */
import 'animate.css';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'glightbox/dist/css/glightbox.min.css';

/* ── Library JS ─────────────────────────────────────────────── */
import AOS from 'aos';
import { Swiper } from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import GLightbox from 'glightbox';

/* ── Components ─────────────────────────────────────────────── */
import Preloader from './components/preloader';
import Navbar    from './components/navbar';
import Hero      from './components/hero';
import Tentang   from './components/tentang';
import Services  from './components/services';
import Potensi   from './components/potensi';
import Statistik from './components/statistik';
import Berita    from './components/berita';
import Agenda    from './components/agenda';
import Galeri    from './components/galeri';
import Maps      from './components/maps';
import Footer    from './components/footer';

/* ── Render ─────────────────────────────────────────────────── */
const app = document.getElementById('app');

app.innerHTML = `
  ${Preloader()}
  ${Navbar()}
  <main>
    ${Hero()}
    ${Tentang()}
    ${Services()}
    ${Potensi()}
    ${Statistik()}
    ${Berita()}
    ${Agenda()}
    ${Galeri()}
    ${Maps()}
  </main>
  ${Footer()}
`;

/* ── Init: AOS ──────────────────────────────────────────────── */
AOS.init({ duration: 800, once: true, offset: 80, easing: 'ease-out-cubic' });

window.addEventListener('resize', () => AOS.refresh());

/* ── Init: GLightbox ────────────────────────────────────────── */
GLightbox({ selector: '.galeri-item', touchNavigation: true });

/* ── Init: Swiper Agenda ────────────────────────────────────── */
new Swiper('.agendaSwiper', {
  modules: [Navigation, Pagination, Autoplay],
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: { delay: 3500, disableOnInteraction: false },
  navigation: { nextEl: '.agenda-next', prevEl: '.agenda-prev' },
  pagination: { el: '.agenda-pagination', clickable: true, type: 'bullets' },
  breakpoints: {
    640:  { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});

/* ── Navbar: Scroll Behavior ────────────────────────────────── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  let lastY = 0;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;

    // Scrolled state
    navbar.classList.toggle('scrolled', y > 60);

    // Hide on scroll down, show on scroll up
    if (y > 120) {
      navbar.style.transform = y > lastY ? 'translateY(-100%)' : 'translateY(0)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }

    lastY = y;
  });
}

initNavbar();

/* ── Navbar: Active Link ────────────────────────────────────── */
function initActiveMenu() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 180) current = s.id;
    });
    navLinks.forEach(l => {
      l.classList.remove('active');
      if (l.getAttribute('href') === '#' + current) l.classList.add('active');
    });
  });
}

initActiveMenu();

/* ── Navbar: Mobile Toggle ──────────────────────────────────── */
function initMobileMenu() {
  const toggle = document.getElementById('navToggle');
  const mobile = document.getElementById('navMobile');
  if (!toggle || !mobile) return;

  toggle.addEventListener('click', () => {
    mobile.classList.toggle('open');
    const icon = toggle.querySelector('i');
    icon.className = mobile.classList.contains('open') ? 'bi bi-x-lg' : 'bi bi-list';
  });

  // Close on link click
  mobile.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobile.classList.remove('open');
      const icon = toggle.querySelector('i');
      icon.className = 'bi bi-list';
    });
  });
}

initMobileMenu();

/* ── Smooth Scroll ──────────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

initSmoothScroll();

/* ── Progress Bar ───────────────────────────────────────────── */
function initProgressBar() {
  const bar = document.getElementById('progressBar');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    bar.style.width = pct + '%';
  });
}

initProgressBar();

/* ── Counter Animation ──────────────────────────────────────── */
function startCounters() {
  document.querySelectorAll('.counter').forEach(el => {
    const target = +el.dataset.target;
    const suffix = el.dataset.suffix || '';
    let cur = 0;
    const step = Math.ceil(target / 80);

    const tick = () => {
      cur += step;
      if (cur >= target) { el.textContent = target; return; }
      el.textContent = cur;
      requestAnimationFrame(tick);
    };
    tick();
  });
}

const statsSection = document.querySelector('#statistik');
if (statsSection) {
  new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { startCounters(); } });
  }, { threshold: 0.4 }).observe(statsSection);
}

/* ── Back to Top ────────────────────────────────────────────── */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('show', window.scrollY > 500));
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

initBackToTop();

/* ── Preloader ──────────────────────────────────────────────── */
function initPreloader() {
  const pl = document.getElementById('preloader');
  if (!pl) return;
  window.addEventListener('load', () => {
    setTimeout(() => {
      pl.classList.add('hide');
      setTimeout(() => pl.remove(), 700);
    }, 900);
  });
}

initPreloader();

/* ── Hero Scroll Arrow ──────────────────────────────────────── */
const heroScroll = document.querySelector('.hero-scroll');
if (heroScroll) {
  heroScroll.addEventListener('click', () => {
    document.querySelector('#tentang')?.scrollIntoView({ behavior: 'smooth' });
  });
}

/* ── Lazy Images ────────────────────────────────────────────── */
document.querySelectorAll('img').forEach(img => {
  img.loading = 'lazy';
  img.decoding = 'async';
});

/* ── Error Handler ──────────────────────────────────────────── */
window.addEventListener('error', e => console.warn('[Desa Ngepung]', e.message));

/* ── Console Brand ──────────────────────────────────────────── */
console.log('%c Desa Ngepung ', 'background:#ff5e00;color:#fff;font-weight:bold;font-size:16px;border-radius:4px;padding:4px 12px;');
console.log('%c Gunung Kidul · UNESCO Geopark Gunung Sewu ', 'color:#ff5e00;font-size:12px;');