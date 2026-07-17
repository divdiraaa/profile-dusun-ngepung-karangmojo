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
import Navbar from './components/navbar';
import Hero from './components/hero';
import Tentang from './components/tentang';
import Youtube from './components/youtube';
import Aparatur from './components/aparatur';
import Potensi from './components/potensi';
import UMKM from './components/umkm';
import Galeri from './components/galeri';
import Maps from './components/maps';
import Footer from './components/footer';

/* ── Render ─────────────────────────────────────────────────── */
const app = document.getElementById('app');

app.innerHTML = `
  ${Preloader()}
  ${Navbar()}
  <main>
    ${Hero()}
    ${Tentang()}
    ${Youtube()}
    ${Aparatur()}
    ${Potensi()}
    ${UMKM()}
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

new Swiper('.potensi-slider', {
  modules: [Navigation, Pagination],
  slidesPerView: 1.15,
  centeredSlides: true,
  spaceBetween: 16,
  loop: true,
  navigation: { nextEl: '.potensi-next', prevEl: '.potensi-prev' },
  pagination: { el: '.potensi-pagination', clickable: true },
  breakpoints: {
    640: { slidesPerView: 2, centeredSlides: false, spaceBetween: 20 },
    1024: { slidesPerView: 3, centeredSlides: false, spaceBetween: 24 }
  }
});


new Swiper('.umkm-slider', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  navigation: { nextEl: '.umkm-next', prevEl: '.umkm-prev' },
  pagination: { el: '.umkm-pagination', clickable: true },
  breakpoints: {
    640: { slidesPerView: 2, centeredSlides: false, spaceBetween: 24 },
    1024: { slidesPerView: 3, centeredSlides: false, spaceBetween: 24 },
    1280: { slidesPerView: 4, centeredSlides: false, spaceBetween: 24 }
  }
});


/* ── Navbar: Scroll Behavior (with Top Bar) ─────────────────── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const topBar = document.getElementById('topBar');
  if (!navbar) return;

  let lastY = 0;
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const y = window.scrollY;

        // Top bar: hide on scroll down
        if (topBar) {
          if (y > 80) {
            topBar.classList.add('hidden');
            navbar.style.top = '0';
          } else {
            topBar.classList.remove('hidden');
            navbar.style.top = '';
          }
        }

        // Scrolled state
        navbar.classList.toggle('scrolled', y > 60);

        // Hide on scroll down, show on scroll up
        if (y > 200) {
          navbar.style.transform = y > lastY ? 'translateY(-100%)' : 'translateY(0)';
        } else {
          navbar.style.transform = 'translateY(0)';
        }

        lastY = y;
        ticking = false;
      });
      ticking = true;
    }
  });
}

initNavbar();

/* ── Navbar: Active Link ────────────────────────────────────── */
function initActiveMenu() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (!sections.length || !navLinks.length) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        let current = '';
        sections.forEach(s => {
          if (window.scrollY >= s.offsetTop - 180) current = s.id;
        });
        navLinks.forEach(l => {
          l.classList.remove('active');
          if (l.getAttribute('href') === '#' + current) l.classList.add('active');
        });
        ticking = false;
      });
      ticking = true;
    }
  });
}

initActiveMenu();

/* ── Navbar: Mobile Toggle ──────────────────────────────────── */
function initMobileMenu() {
  const toggle = document.getElementById('navToggle');
  const mobile = document.getElementById('navMobile');
  if (!toggle || !mobile) return;

  toggle.addEventListener('click', () => {
    const isOpen = mobile.classList.toggle('open');
    const icon = toggle.querySelector('i');
    icon.className = isOpen ? 'bi bi-x-lg' : 'bi bi-list';
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close on link click
  mobile.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobile.classList.remove('open');
      const icon = toggle.querySelector('i');
      icon.className = 'bi bi-list';
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

initMobileMenu();

/* ── Smooth Scroll ──────────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
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
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        bar.style.width = pct + '%';
        ticking = false;
      });
      ticking = true;
    }
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
    // Wait 1.2s for progress bar, then hide (curtain effect)
    setTimeout(() => {
      pl.classList.add('hide');
      // Remove from DOM after curtain transition (0.8s)
      setTimeout(() => pl.remove(), 900);
    }, 1200);
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

/* ── Magnetic Buttons ───────────────────────────────────────── */
function initMagneticButtons() {
  const magnets = document.querySelectorAll('.btn-accent, .btn-glass');

  if (window.matchMedia('(pointer: fine)').matches) {
    magnets.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }
}

initMagneticButtons();

/* ── Custom Cursor ──────────────────────────────────────────── */
function initCustomCursor() {
  const dot = document.getElementById('cursorDot');
  const outline = document.getElementById('cursorOutline');
  if (!dot || !outline) return;

  // Cek apakah device mendukung hover (bukan layar sentuh murni)
  if (window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      dot.style.left = `${posX}px`;
      dot.style.top = `${posY}px`;

      outline.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, { duration: 500, fill: "forwards" });
    });

    const addHoverClass = () => document.body.classList.add('cursor-hover');
    const removeHoverClass = () => document.body.classList.remove('cursor-hover');

    // Menerapkan efek hover ke semua elemen yang bisa diklik
    document.querySelectorAll('a, button, .btn-glass, .btn-accent, .nav-logo, input, textarea, select').forEach(el => {
      el.addEventListener('mouseenter', addHoverClass);
      el.addEventListener('mouseleave', removeHoverClass);
    });
  }
}

initCustomCursor();

/* ── Console Brand ──────────────────────────────────────────── */
console.log('%c Desa Ngepung ', 'background:#0ea5e9;color:#fff;font-weight:bold;font-size:16px;border-radius:4px;padding:4px 12px;');
console.log('%c Gunung Kidul · UNESCO Geopark Gunung Sewu ', 'color:#0ea5e9;font-size:12px;');