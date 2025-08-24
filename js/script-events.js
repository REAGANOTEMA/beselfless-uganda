// ===================== Hamburger Toggle =====================
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        hamburger.classList.toggle('active'); // optional hamburger animation
    });
}

// ===================== Hero Slider =====================
const slides = document.querySelectorAll('.hero-slider .slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
    });
}

// Start slider if slides exist
if (slides.length > 0) {
    showSlide(currentSlide);
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 10000); // 10 seconds
}

// ===================== Animate Event Images on Scroll =====================
const events = document.querySelectorAll('.event-card');

const animateEvents = () => {
    const triggerBottom = window.innerHeight * 0.85;
    events.forEach(ev => {
        const img = ev.querySelector('img');
        if (img && ev.getBoundingClientRect().top < triggerBottom) {
            img.style.transform = "scale(1.05)";
            img.style.opacity = "1";
            img.style.transition = "all 1s ease";
        }
    });
};

window.addEventListener('scroll', animateEvents);
window.addEventListener('load', animateEvents);

// ===================== Animate Top Cards on Scroll =====================
const topCards = document.querySelectorAll('.event-card');

const animateTopCards = () => {
    const triggerBottom = window.innerHeight * 0.85;
    topCards.forEach(card => {
        if (card.getBoundingClientRect().top < triggerBottom) {
            card.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', animateTopCards);
window.addEventListener('load', animateTopCards);

// ===================== Smooth Hover Effect for Event Images =====================
[...events, ...topCards].forEach(item => {
    const img = item.querySelector('img');
    if (img) {
        img.addEventListener('mouseenter', () => img.style.transform = "scale(1.1)");
        img.addEventListener('mouseleave', () => img.style.transform = "scale(1.05)");
    }
});

// ===================== Footer Icon Hover Animation =====================
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
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ===================== Back to Top Button =====================
const footerBottom = document.querySelector('.footer-bottom');
if (footerBottom) {
    const backToTop = document.createElement('button');
    backToTop.textContent = "↑ Back to Top";
    backToTop.style.cssText = `
        padding: 8px 12px;
        margin-top: 10px;
        background-color: #FFD700;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-weight: bold;
        color: #8B0000;
        transition: all 0.3s ease;
    `;
    backToTop.addEventListener('mouseenter', () => backToTop.style.transform = "scale(1.1)");
    backToTop.addEventListener('mouseleave', () => backToTop.style.transform = "scale(1)");
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
