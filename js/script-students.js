// ===================== Ensure DOM Ready =====================
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

  // ===================== Animate Student Cards on Scroll =====================
  const students = document.querySelectorAll('.student');
  function animateStudents() {
    const scrollY = window.scrollY + window.innerHeight;
    students.forEach(st => {
      if (st.offsetTop < scrollY - 50) st.classList.add('visible');
    });
  }
  window.addEventListener('scroll', animateStudents);
  animateStudents();

  // Hover effect for smoother perf
  students.forEach(st => {
    st.addEventListener('mouseenter', () => st.classList.add('hovered'));
    st.addEventListener('mouseleave', () => st.classList.remove('hovered'));
  });

  // ===================== Footer Contact Icons Hover =====================
  document.querySelectorAll('.footer-contacts a img').forEach(icon => {
    icon.addEventListener('mouseenter', () => icon.classList.add('hovered'));
    icon.addEventListener('mouseleave', () => icon.classList.remove('hovered'));
  });

  // ===================== Smooth Scroll for Footer Links =====================
  document.querySelectorAll('footer a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // ===================== Back to Top Button =====================
  const footerBottom = document.querySelector('.footer-bottom');
  if (footerBottom && !footerBottom.querySelector('.back-to-top')) {
    const backToTop = document.createElement('button');
    backToTop.textContent = '↑ Back to Top';
    backToTop.className = 'back-to-top';
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    footerBottom.appendChild(backToTop);
  }

  // ===================== Dynamic Year Update =====================
  const yearEl = document.querySelector('#currentYear') || document.querySelector('.footer-bottom p span');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ===================== Hero Slideshow (every 3s) =====================
  const slides = document.querySelectorAll('.hero-slideshow .hero-slide');
  if (slides.length) {
    let current = 0;
    slides.forEach((s, i) => s.classList.toggle('active', i === 0));
    setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 3000);
  }

  // ===================== Hero Apply Button Effects =====================
  const heroBtn = document.getElementById('hero-btn');
  if (heroBtn) {
    // Fade effect every 2s
    setInterval(() => {
      heroBtn.classList.toggle('fade');
    }, 2000);

    // Shake effect every 4s
    setInterval(() => {
      heroBtn.classList.add('shake');
      setTimeout(() => heroBtn.classList.remove('shake'), 600);
    }, 4000);

    // Glow effect every 5s
    setInterval(() => {
      heroBtn.classList.add('glow');
      setTimeout(() => heroBtn.classList.remove('glow'), 800);
    }, 5000);
  }
});
