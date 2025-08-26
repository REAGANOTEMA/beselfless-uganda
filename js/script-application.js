// ===================== Hamburger Toggle =====================
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        hamburger.classList.toggle('active');
    });
}

// Close menu when a link is clicked (mobile friendly)
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
            hamburger.classList.remove('active');
        }
    });
});

// ===================== Animate Form on Scroll =====================
const applicationForm = document.querySelector('.application-form');

function animateForm() {
    if (!applicationForm) return;

    const scrollPosition = window.scrollY + window.innerHeight;
    const formTop = applicationForm.getBoundingClientRect().top + window.scrollY;

    if (scrollPosition > formTop + 50) {
        applicationForm.classList.add('visible');
        window.removeEventListener('scroll', animateForm);
    }
}

window.addEventListener('load', animateForm);
window.addEventListener('scroll', animateForm);

// ===================== Formspree Submission =====================
const form = document.getElementById('applicationForm');
const feedback = document.getElementById('formFeedback');

if (form && feedback) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        feedback.textContent = "⏳ Submitting...";
        feedback.className = "loading";

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                feedback.textContent = "✅ Thanks! Your application has been received.";
                feedback.className = "success";
                form.reset();
            } else {
                const data = await response.json();
                feedback.textContent = data.errors
                    ? data.errors.map(err => err.message).join(", ")
                    : "❌ Submission failed. Please try again.";
                feedback.className = "error";
            }
        } catch (error) {
            feedback.textContent = "❌ Network error. Please check your internet and retry.";
            feedback.className = "error";
            console.error(error);
        }
    });
}

// ===================== Footer Icons Hover Animation =====================
const footerIcons = document.querySelectorAll('.footer-contacts a i, .footer-social a i');
footerIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = "scale(1.3)";
        icon.style.color = "#FFD700";
    });
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = "scale(1)";
        icon.style.color = "#fff";
    });
});

// ===================== Smooth Scroll for Footer Anchors =====================
document.querySelectorAll('footer a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ===================== Back to Top Button =====================
(function() {
    const footerBottom = document.querySelector('.footer-bottom');
    if (!footerBottom) return;

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
        transition: background 0.3s ease;
    `;
    backToTop.addEventListener('mouseenter', () => backToTop.style.backgroundColor = "#FFC300");
    backToTop.addEventListener('mouseleave', () => backToTop.style.backgroundColor = "#FFD700");

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    footerBottom.appendChild(backToTop);
})();

// ===================== Dynamic Year Update =====================
document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.querySelector('#currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// ===================== Go Back Homepage Button Animation =====================
(function() {
    const goBackBtn = document.querySelector('.go-back-btn');
    if (!goBackBtn) return;

    setInterval(() => {
        goBackBtn.style.boxShadow = "0 0 15px #FFD700";
        setTimeout(() => goBackBtn.style.boxShadow = "0 0 0px #FFD700", 1000);
    }, 2000);
})();
// ===================== Download Button Light-Up Animation =====================
(function() {
    const downloadBtn = document.querySelector('.download-btn');
    if (!downloadBtn) return;

    setInterval(() => {
        // Light up
        downloadBtn.style.boxShadow = "0 0 15px #FFD700";
        // Remove light after 1 second
        setTimeout(() => {
            downloadBtn.style.boxShadow = "0 0 0px #FFD700";
        }, 1000);
    }, 4000); // Every 4 seconds
})();
