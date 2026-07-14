/* ==========================================================
   WEBSITE DESA WISATA
   MAIN.JS
   VERSI PRODUCTION
========================================================== */

/* ==========================================================
   IMPORT CSS
========================================================== */

import "./css/style.css";
// import "./css/responsive.css";
// import "./css/animation.css";

/* ==========================================================
   BOOTSTRAP
========================================================== */

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

/* ==========================================================
   LIBRARY CSS
========================================================== */

import "animate.css";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "glightbox/dist/css/glightbox.min.css";

/* ==========================================================
   LIBRARY JS
========================================================== */

import AOS from "aos";

import { Swiper } from "swiper";

import {

  Navigation,

  Pagination,

  Autoplay

} from "swiper/modules";

import GLightbox from "glightbox";

/* ==========================================================
   COMPONENT
========================================================== */

import Preloader from "./components/preloader";

import Navbar from "./components/navbar";

import Hero from "./components/hero";

import Services from "./components/services";

import Tentang from "./components/tentang";

import Potensi from "./components/potensi";

import Berita from "./components/berita";

import Agenda from "./components/agenda";

import Statistik from "./components/statistik";

import Galeri from "./components/galeri";

import Maps from "./components/maps";

import Footer from "./components/footer";

/* ==========================================================
   RENDER WEBSITE
========================================================== */

const app = document.querySelector("#app");

app.innerHTML = `

${Preloader()}

${Navbar()}

${Hero()}

${Services()}

${Tentang()}

${Potensi()}

${Berita()}

${Agenda()}

${Statistik()}

${Galeri()}

${Maps()}

${Footer()}

`;

/* ==========================================================
   ELEMENT
========================================================== */

const navbar = document.querySelector(".navbar");

const hero = document.querySelector("#hero");

const heroImage = document.querySelector(".hero-image");

const preloader = document.getElementById("preloader");

const backToTop = document.getElementById("backToTop");

const counters = document.querySelectorAll(".counter");

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-link");

const progressBar = document.getElementById("progressBar");

/* ==========================================================
   INIT AOS
========================================================== */

AOS.init({

  duration: 1000,

  once: true,

  offset: 120,

  easing: "ease-in-out"

});

AOS.refresh();

/* ==========================================================
   INIT GLIGHTBOX
========================================================== */

GLightbox({

  selector: ".gallery"

});

/* ==========================================================
   INIT SWIPER
========================================================== */

new Swiper(".agendaSwiper", {

  modules: [

    Navigation,

    Pagination,

    Autoplay

  ],

  slidesPerView: 3,

  spaceBetween: 30,

  loop: true,

  autoplay: {

    delay: 3500,

    disableOnInteraction: false

  },

  navigation: {

    nextEl: ".agenda-next",

    prevEl: ".agenda-prev"

  },

  pagination: {

    el: ".agenda-pagination",

    clickable: true

  },

  breakpoints: {

    0: {

      slidesPerView: 1

    },

    768: {

      slidesPerView: 2

    },

    1200: {

      slidesPerView: 3

    }

  }

});

/* ==========================================================
   FUNCTION : NAVBAR SCROLL
========================================================== */

function initNavbar() {

  if (!navbar) return;

  window.addEventListener("scroll", () => {

    navbar.classList.toggle("scrolled", window.scrollY > 80);

  });

}

initNavbar();

/* ==========================================================
   FUNCTION : SMOOTH SCROLL
========================================================== */

function initSmoothScroll() {

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

      const target = document.querySelector(this.getAttribute("href"));

      if (!target) return;

      e.preventDefault();

      target.scrollIntoView({

        behavior: "smooth",

        block: "start"

      });

    });

  });

}

initSmoothScroll();

/* ==========================================================
   FUNCTION : PROGRESS BAR
========================================================== */

function initProgressBar() {

  if (!progressBar) return;

  window.addEventListener("scroll", () => {

    const totalHeight =

      document.documentElement.scrollHeight -

      window.innerHeight;

    const progress =

      (window.scrollY / totalHeight) * 100;

    progressBar.style.width = progress + "%";

  });

}

initProgressBar();

/* ==========================================================
   FUNCTION : ACTIVE MENU
========================================================== */

function initActiveMenu() {

  if (!sections.length || !navLinks.length) return;

  window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

      const sectionTop = section.offsetTop - 150;

      const sectionHeight = section.offsetHeight;

      if (

        window.scrollY >= sectionTop &&

        window.scrollY < sectionTop + sectionHeight

      ) {

        current = section.id;

      }

    });

    navLinks.forEach(link => {

      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + current) {

        link.classList.add("active");

      }

    });

  });

}

initActiveMenu();

/* ==========================================================
   FUNCTION : HERO PARALLAX
========================================================== */

function initHeroParallax() {

  if (!heroImage) return;

  window.addEventListener("scroll", () => {

    const offset = window.scrollY * 0.15;

    heroImage.style.transform = `translateY(${offset}px)`;

  });

}

initHeroParallax();

/* ==========================================================
   FUNCTION : COUNTER
========================================================== */

function startCounter() {

  counters.forEach(counter => {

    const target = Number(counter.dataset.target);

    const suffix = counter.dataset.suffix || "";

    let current = 0;

    const increment = Math.ceil(target / 100);

    function updateCounter() {

      current += increment;

      if (current >= target) {

        counter.textContent = target + suffix;

      } else {

        counter.textContent = current + suffix;

        requestAnimationFrame(updateCounter);

      }

    }

    updateCounter();

  });

}

const statistikSection = document.querySelector("#statistik");

if (statistikSection) {

  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        startCounter();

        observer.unobserve(statistikSection);

      }

    });

  });

  observer.observe(statistikSection);

}

/* ==========================================================
   FUNCTION : HERO FADE
========================================================== */

function initHeroFade() {

  if (!hero) return;

  window.addEventListener("scroll", () => {

    const opacity = 1 - window.scrollY / 800;

    hero.style.opacity = opacity > 0 ? opacity : 0;

  });

}

initHeroFade();

/* ==========================================================
   FUNCTION : LAZY IMAGE
========================================================== */

function initLazyImage() {

  document.querySelectorAll("img").forEach(img => {

    img.loading = "lazy";

    img.decoding = "async";

  });

}

initLazyImage();
/* ==========================================================
   FUNCTION : PRELOADER
========================================================== */

function initPreloader() {

  if (!preloader) return;

  window.addEventListener("load", () => {

    setTimeout(() => {

      preloader.classList.add("hide");

      setTimeout(() => {

        preloader.remove();

      }, 600);

    }, 800);

  });

}

initPreloader();

/* ==========================================================
   FUNCTION : BACK TO TOP
========================================================== */

function initBackToTop() {

  if (!backToTop) return;

  window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

      backToTop.classList.add("show");

    } else {

      backToTop.classList.remove("show");

    }

  });

  backToTop.addEventListener("click", () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth"

    });

  });

}

initBackToTop();

/* ==========================================================
   FUNCTION : HIDE NAVBAR
========================================================== */

function initHideNavbar() {

  if (!navbar) return;

  let lastScroll = 0;

  window.addEventListener("scroll", () => {

    const current = window.pageYOffset;

    if (current <= 100) {

      navbar.style.top = "0";

      return;

    }

    if (current > lastScroll) {

      navbar.style.top = "-100px";

    } else {

      navbar.style.top = "0";

    }

    lastScroll = current;

  });

}

initHideNavbar();

/* ==========================================================
   FUNCTION : REVEAL ANIMATION
========================================================== */

function initRevealAnimation() {

  const revealItems = document.querySelectorAll(".reveal");

  if (!revealItems.length) return;

  const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("active");

      }

    });

  }, {

    threshold: 0.15

  });

  revealItems.forEach(item => revealObserver.observe(item));

}

initRevealAnimation();

/* ==========================================================
   FUNCTION : DARK MODE
========================================================== */

function initDarkMode() {

  const toggle = document.getElementById("themeToggle");

  if (!toggle) return;

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

  }

  toggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    localStorage.setItem(

      "theme",

      document.body.classList.contains("dark-mode")

        ? "dark"

        : "light"

    );

  });

}

initDarkMode();

/* ==========================================================
   FUNCTION : PERFORMANCE
========================================================== */

function initPerformance() {

  document.querySelectorAll("img").forEach(img => {

    img.setAttribute("loading", "lazy");

    img.setAttribute("decoding", "async");

  });

}

initPerformance();

/* ==========================================================
   FUNCTION : ERROR HANDLER
========================================================== */

window.addEventListener("error", (e) => {

  console.warn("Website Error :", e.message);

});

/* ==========================================================
   FUNCTION : RESIZE
========================================================== */

window.addEventListener("resize", () => {

  AOS.refresh();

});

/* ==========================================================
   WEBSITE READY
========================================================== */

window.addEventListener("DOMContentLoaded", () => {

  console.log("====================================");
  console.log(" WEBSITE DESA WISATA ");
  console.log(" Production Version");
  console.log(" Vite");
  console.log(" Bootstrap 5");
  console.log(" Swiper");
  console.log(" AOS");
  console.log(" GLightbox");
  console.log("====================================");

});