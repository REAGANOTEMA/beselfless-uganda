// ===================== HAMBURGER MENU =====================
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("show");
  });
}

// Close menu when clicking a link (mobile UX improvement)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("show");
  });
});

// ===================== FOOTER YEAR AUTO UPDATE =====================
const yearSpan = document.getElementById("currentYear");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ===================== BUTTON HOVER ANIMATION =====================
const btn = document.querySelector('.btn');
if (btn) {
  btn.addEventListener('mouseover', () => {
    btn.style.boxShadow = "0 6px 15px rgba(0,0,0,0.3)";
  });
  btn.addEventListener('mouseout', () => {
    btn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
  });
}

// ===================== FADE-IN ANIMATION FOR CONTAINER =====================
window.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  if (container) {
    container.style.opacity = "0";
    container.style.transform = "translateY(30px)";
    setTimeout(() => {
      container.style.transition = "all 1s ease";
      container.style.opacity = "1";
      container.style.transform = "translateY(0)";
    }, 200);
  }
});
