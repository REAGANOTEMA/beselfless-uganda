document.addEventListener('DOMContentLoaded', () => {

  // ===================== Hamburger Menu Toggle =====================
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      hamburger.classList.toggle('active');
    });
  }

  // ===================== Hero Slider =====================
  const slides = document.querySelectorAll('.hero-slider .slide');
  const dotsContainer = document.querySelector('.slider-dots');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
    const dots = document.querySelectorAll('.slider-dots .dot');
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
  }

  // Create dots dynamically
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

  // Show first slide and auto-slide every 5s
  if (slides.length > 0) {
    showSlide(currentSlide);
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 5000);
  }

  // ===================== Apply Buttons =====================
  const applyButtons = document.querySelectorAll('.apply-btn, .nav-apply-btn');
  setInterval(() => {
    applyButtons.forEach(btn => {
      btn.classList.add('shake-btn');
      setTimeout(() => btn.classList.remove('shake-btn'), 500);
    });
  }, 4000);

  applyButtons.forEach(btn => {
    btn.addEventListener('mouseenter', () => btn.style.transform = 'scale(1.05)');
    btn.addEventListener('mouseleave', () => btn.style.transform = 'scale(1)');
  });

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

  // ===================== Footer Icons Hover =====================
  const footerIcons = document.querySelectorAll('.footer-contacts i, .footer-social i');
  footerIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      icon.style.transform = 'scale(1.2) rotate(5deg)';
      icon.style.transition = 'transform 0.3s ease';
      icon.style.color = '#FFD700';
    });
    icon.addEventListener('mouseleave', () => {
      icon.style.transform = 'scale(1) rotate(0deg)';
      icon.style.color = '#fff';
    });
  });

  // ===================== Back to Top Button =====================
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

});
