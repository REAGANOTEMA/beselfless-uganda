document.addEventListener('DOMContentLoaded', () => {

  // ===================== Hamburger Toggle =====================
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      hamburger.classList.toggle('active');
    });
  }

// Hero Slider
const slides = document.querySelectorAll('.hero-slider .slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

if (slides.length > 0) {
  showSlide(currentSlide);             // show first slide
  setInterval(nextSlide, 3000);        // auto-slide every 3s
}

  // ===================== Prophet & Student Animations =====================
  const prophetImg = document.querySelector('.prophet-img');
  const studentImg = document.querySelector('.student-img');

  if (prophetImg) {
    setInterval(() => {
      prophetImg.style.transform = 'scale(1.08)';
      prophetImg.style.transition = 'transform 0.8s ease';
      setTimeout(() => prophetImg.style.transform = 'scale(1)', 800);
    }, 3000);
  }

  if (studentImg) {
    studentImg.addEventListener('mouseenter', () => {
      studentImg.style.transform = 'scale(1.05)';
      studentImg.style.transition = 'transform 0.5s ease';
    });
    studentImg.addEventListener('mouseleave', () => {
      studentImg.style.transform = 'scale(1)';
    });
  }

  // ===================== Footer Icons Animation =====================
  const footerIcons = document.querySelectorAll('.footer-contacts img');
  footerIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      icon.style.transform = 'scale(1.2)';
      icon.style.boxShadow = '0 4px 12px rgba(255,255,255,0.5)';
      icon.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
    icon.addEventListener('mouseleave', () => {
      icon.style.transform = 'scale(1)';
      icon.style.boxShadow = 'none';
    });
  });

  // ===================== Back to Top =====================
  const footerBottom = document.querySelector('.footer-bottom');
  if (footerBottom) {
    const backToTop = document.createElement('button');
    backToTop.textContent = '↑ Back to Top';
    backToTop.style.cssText = `
      padding:8px 12px;
      margin-top:10px;
      background:#FFD700;
      border:none;
      border-radius:5px;
      cursor:pointer;
      font-weight:bold;
      color:#8B0000;
    `;
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    footerBottom.appendChild(backToTop);
  }

  // ===================== Dynamic Year =====================
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ===================== Apply Now Button =====================
  const nav = document.querySelector('.nav-links');
  if (nav) {
    const applyItem = document.createElement('li');
    applyItem.innerHTML = `<a href="https://apply.byupathway.edu/portal/user-profile/login" class="nav-apply-btn">Apply Now</a>`;
    nav.appendChild(applyItem);

    const btn = document.querySelector('.nav-apply-btn');
    setInterval(() => {
      btn.classList.add('shake');
      setTimeout(() => btn.classList.remove('shake'), 500);
    }, 2000);
  }

});
// Add dots dynamically
const dotsContainer = document.querySelector('.slider-dots');
if (dotsContainer) {
  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      currentSlide = i;
      showSlide(currentSlide);
    });
    dotsContainer.appendChild(dot);
  });
}

// Update dots on slide change
function showSlide(index) {
  slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
  const dots = document.querySelectorAll('.slider-dots .dot');
  dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
}
