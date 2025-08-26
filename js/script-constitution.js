// ===================== JS: script-constitution.js =====================

// ===== HAMBURGER MENU TOGGLE =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');   // Animate hamburger
  navLinks.classList.toggle('active');  // Show/hide nav links
});

// ===== SMOOTH SCROLL FOR NAV LINKS =====
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if(targetElement){
      window.scrollTo({
        top: targetElement.offsetTop - 70, // adjust for header height
        behavior: 'smooth'
      });
    }
    // Close menu after click on mobile
    if(navLinks.classList.contains('active')){
      navLinks.classList.remove('active');
      hamburger.classList.remove('open');
    }
  });
});

// ===== CURRENT YEAR IN FOOTER =====
document.getElementById("currentYear").textContent = new Date().getFullYear();

// ===== GO BACK TO HOMEPAGE BUTTON EFFECT =====
const backHomeBtn = document.querySelector('.back-home-btn');

if(backHomeBtn){
  backHomeBtn.addEventListener('mouseenter', () => {
    backHomeBtn.style.transform = "scale(1.05)";
  });

  backHomeBtn.addEventListener('mouseleave', () => {
    backHomeBtn.style.transform = "scale(1)";
  });
}

// ===== OPTIONAL: AUTOMATIC GLOW + SHAKE LOOP =====
// Already handled via CSS animations in back-home-btn class
