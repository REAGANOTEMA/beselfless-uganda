// ===================== FAQ Toggle =====================
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});

// ===================== Logo & Header Animation =====================
window.addEventListener('load', () => {
    const logo = document.querySelector('.top-ribbon .logo img');
    const headers = document.querySelectorAll('.moto-header');
    if (logo) logo.style.transform = 'scale(1.05)';
    headers.forEach(h => h.style.opacity = '1');
});

// ===================== Footer Icon Hover =====================
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

// ===================== Smooth Scroll =====================
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

// ===================== Red Ribbon CTA Button Animation =====================
const ctaButton = document.querySelector('.cta-button');

if (ctaButton) {
    // Glow effect every 3 seconds
    setInterval(() => {
        ctaButton.classList.add('glow');
        setTimeout(() => {
            ctaButton.classList.remove('glow');
        }, 1000); // Glow lasts 1 second
    }, 3000);

    // Shake effect every 5 seconds
    setInterval(() => {
        ctaButton.classList.add('shake');
        setTimeout(() => {
            ctaButton.classList.remove('shake');
        }, 500); // Shake lasts 0.5 seconds
    }, 5000);
}
