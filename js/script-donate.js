/* ===================== Hamburger Toggle ===================== */
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    hamburger.classList.toggle("active");
  });
}

/* ===================== Donate Hero Backgrounds ===================== */
const donateHero = document.querySelector(".donate-hero");
const donateHeroImages = [
  "images/donate-hero1.jpg",
  "images/donate-hero2.jpg",
  "images/donate-hero3.jpg"
];
let currentDonateBg = 0;

function changeDonateHeroBg() {
  currentDonateBg = (currentDonateBg + 1) % donateHeroImages.length;
  donateHero.style.backgroundImage = `url('${donateHeroImages[currentDonateBg]}')`;
}
if (donateHero) {
  donateHero.style.backgroundImage = `url('${donateHeroImages[0]}')`;
  setInterval(changeDonateHeroBg, 4000); // every 4s
}

/* ===================== Scroll Animations ===================== */
const donateSection = document.querySelector(".donate-section");

function animateOnScroll() {
  const scrollY = window.scrollY + window.innerHeight;

  if (donateSection && donateSection.offsetTop < scrollY - 80) {
    donateSection.style.opacity = "1";
    donateSection.style.transform = "translateY(0) scale(1)";
    donateSection.style.transition = "all 1s ease-out";
  }
}

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

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
