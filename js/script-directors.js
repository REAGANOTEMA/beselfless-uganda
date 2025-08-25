/* ===================== Hamburger Toggle ===================== */
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    hamburger.classList.toggle("active");
  });
}

/* ===================== Hero Slides ===================== */
const slides = document.querySelectorAll(".hero-slide");
let currentSlide = 0;

function changeSlide() {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[currentSlide].classList.add("active");
  currentSlide = (currentSlide + 1) % slides.length;
}
if (slides.length > 0) {
  setInterval(changeSlide, 3000); // every 3s
}

/* ===================== Hero Background Images ===================== */
const hero = document.querySelector(".hero");
const heroImages = [
  "images/g-medal1.jpg",
  "images/graduation-students.jpg",
  "images/hero4.jpg",
  "images/g-medal-girlsstudents.jpg",
  "images/marakaandwife.jpg",
  "images/byu-tower.jpg",
  "images/managers-table.jpg"
];
let currentBg = 0;

function changeHeroBg() {
  currentBg = (currentBg + 1) % heroImages.length;
  hero.style.backgroundImage = `url('${heroImages[currentBg]}')`;
}
if (hero) {
  hero.style.backgroundImage = `url('${heroImages[0]}')`;
  setInterval(changeHeroBg, 3000); // sync with slides
}

/* ===================== Scroll Animations ===================== */
const directorImg = document.querySelector(".director-profile img");
const journeySection = document.querySelector(".start-your-journey");
const heroHeader = document.querySelector(".hero h2");

function animateOnScroll() {
  const scrollY = window.scrollY + window.innerHeight;

  // Director image animation
  if (directorImg && directorImg.offsetTop < scrollY - 50) {
    directorImg.style.transform = "scale(1.05)";
    directorImg.style.opacity = "1";
    directorImg.style.transition = "all 1s ease";
  }

  // Hero header parallax sliding
  if (heroHeader) {
    const offset = window.scrollY / 3;
    heroHeader.style.transform = `translateY(${offset}px)`;
  }

  // Fade-in Start Your Journey section
  if (journeySection && journeySection.offsetTop < scrollY - 100) {
    journeySection.style.opacity = "1";
    journeySection.style.transform = "translateY(0) scale(1)";
    journeySection.style.transition = "all 1s ease-out";
  }
}

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

/* ===================== Director Image Hover ===================== */
if (directorImg) {
  directorImg.addEventListener("mouseenter", () => {
    directorImg.style.transform = "scale(1.1)";
    directorImg.style.transition = "transform 0.5s ease";
  });
  directorImg.addEventListener("mouseleave", () => {
    directorImg.style.transform = "scale(1.05)";
    directorImg.style.transition = "transform 0.5s ease";
  });
}

/* ===================== Smooth Scroll for Anchor Links ===================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* ===================== Footer Contact & Social Icons Hover ===================== */
const footerIcons = document.querySelectorAll(".footer-contacts a i, .social-icons a i");
footerIcons.forEach(icon => {
  icon.addEventListener("mouseenter", () => {
    icon.style.transform = "scale(1.2)";
    icon.style.color = "#FFD700";
    icon.style.transition = "transform 0.3s ease, color 0.3s ease";
  });
  icon.addEventListener("mouseleave", () => {
    icon.style.transform = "scale(1)";
    icon.style.color = "#fff";
  });
});

/* ===================== Back to Top Button ===================== */
const footerBottom = document.querySelector(".footer-bottom");
if (footerBottom) {
  const backToTop = document.createElement("button");
  backToTop.textContent = "↑ Back to Top";
  backToTop.style.padding = "8px 14px";
  backToTop.style.marginTop = "12px";
  backToTop.style.backgroundColor = "#FFD700";
  backToTop.style.border = "none";
  backToTop.style.borderRadius = "5px";
  backToTop.style.cursor = "pointer";
  backToTop.style.fontWeight = "bold";
  backToTop.style.color = "#8B0000";
  backToTop.style.transition = "all 0.3s ease";

  backToTop.addEventListener("mouseenter", () => {
    backToTop.style.backgroundColor = "#fff176";
  });
  backToTop.addEventListener("mouseleave", () => {
    backToTop.style.backgroundColor = "#FFD700";
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  footerBottom.appendChild(backToTop);
}

/* ===================== Dynamic Year Update ===================== */
const yearEl = document.getElementById("currentYear");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
