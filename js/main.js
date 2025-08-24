// ===================== Hamburger Menu Toggle (Mobile) =====================
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Close menu when a link is clicked (better UX on mobile)
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('show')) {
                navLinks.classList.remove('show');
            }
        });
    });
}

// ===================== Animate Tech Center Cards on Scroll =====================
const centers = document.querySelectorAll('.center');

function animateCenters() {
    const scrollY = window.scrollY + window.innerHeight;
    centers.forEach(center => {
        if (center.offsetTop < scrollY - 50) {
            center.classList.add('visible');
        }
    });
}

// Run animation once on load for visible elements
window.addEventListener('load', animateCenters);

// Run animation on scroll
window.addEventListener('scroll', animateCenters);

// ===================== Footer Contact Icons Hover Effect =====================
const footerIcons = document.querySelectorAll('.footer-contacts a img');
footerIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = "scale(1.2)";
        icon.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
        icon.style.boxShadow = "0 4px 12px rgba(255,255,255,0.5)";
    });

    icon.addEventListener('mouseleave', () => {
        icon.style.transform = "scale(1)";
        icon.style.boxShadow = "none";
    });
});

// ===================== Smooth Scroll for Footer Links =====================
document.querySelectorAll('footer a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===================== Back to Top Button =====================
const footerBottom = document.querySelector('.footer-bottom');
if (footerBottom) {
    const backToTop = document.createElement('button');
    backToTop.textContent = "↑ Back to Top";
    backToTop.style.padding = "8px 12px";
    backToTop.style.marginTop = "10px";
    backToTop.style.backgroundColor = "#FFD700";
    backToTop.style.border = "none";
    backToTop.style.borderRadius = "5px";
    backToTop.style.cursor = "pointer";
    backToTop.style.fontWeight = "bold";
    backToTop.style.color = "#8B0000";
    backToTop.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
    backToTop.style.transition = "background-color 0.3s ease";

    backToTop.addEventListener('mouseenter', () => {
        backToTop.style.backgroundColor = "#e6c200";
    });
    backToTop.addEventListener('mouseleave', () => {
        backToTop.style.backgroundColor = "#FFD700";
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    footerBottom.appendChild(backToTop);
}

// ===================== Dynamic Year Update =====================
const copyrightYear = new Date().getFullYear();
const copyrightEl = document.querySelector('.footer-bottom p:first-child');
if (copyrightEl) {
    copyrightEl.innerHTML = `&copy; ${copyrightYear} Be Selfless Uganda. All rights reserved.`;
}
