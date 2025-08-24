document.addEventListener('DOMContentLoaded', () => {

  // Hamburger menu toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      hamburger.classList.toggle('active');
    });
  }

  // Timeline animation
  const timelineEvents = document.querySelectorAll('.event');

  const animateTimeline = () => {
    const windowBottom = window.scrollY + window.innerHeight;
    timelineEvents.forEach(event => {
      const eventTop = event.offsetTop + 50; // start animation a bit early
      if (windowBottom > eventTop) {
        event.classList.add('visible');
      }
    });
  };

  // Run once and on scroll
  animateTimeline();
  window.addEventListener('scroll', animateTimeline);

  // Footer icons hover effect
  document.querySelectorAll('.footer-contacts img').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      icon.style.transform = "scale(1.2)";
      icon.style.boxShadow = "0 4px 12px rgba(255,255,255,0.5)";
    });
    icon.addEventListener('mouseleave', () => {
      icon.style.transform = "scale(1)";
      icon.style.boxShadow = "none";
    });
  });

  // Back to top button
  const footerBottom = document.querySelector('.footer-bottom');
  if (footerBottom) {
    const btn = document.createElement('button');
    btn.textContent = "↑ Back to Top";
    Object.assign(btn.style, {
      padding:"8px 12px",
      marginTop:"10px",
      backgroundColor:"#FFD700",
      border:"none",
      borderRadius:"5px",
      cursor:"pointer",
      fontWeight:"bold",
      color:"#8B0000"
    });
    btn.addEventListener('click', () => {
      window.scrollTo({ top:0, behavior:'smooth' });
    });
    footerBottom.appendChild(btn);
  }

  // Dynamic copyright year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
