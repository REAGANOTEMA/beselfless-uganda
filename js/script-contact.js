// ===================== Hamburger Toggle =====================
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        hamburger.classList.toggle('active');
    });
}

// ===================== Animate Logo, Map, and Student Images on Scroll =====================
const studentImages = document.querySelectorAll('.student-image img');
const logoImage = document.querySelector('.top-ribbon .logo img');
const hqMap = document.querySelector('#headquarters iframe');

function animateOnScroll() {
    const windowHeight = window.innerHeight;

    // Animate student images
    studentImages.forEach(img => {
        const rect = img.getBoundingClientRect();
        if (rect.top < windowHeight - 100) {
            img.classList.add('visible');
        }
    });

    // Animate logo
    if (logoImage) {
        const rectLogo = logoImage.getBoundingClientRect();
        if (rectLogo.top < windowHeight - 50) {
            logoImage.classList.add('visible');
        }
    }

    // Animate headquarters map
    if (hqMap) {
        const rectMap = hqMap.getBoundingClientRect();
        if (rectMap.top < windowHeight - 100) {
            hqMap.classList.add('visible');
        }
    }
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// ===================== Contact Form Validation =====================
const contactForm = document.getElementById('contactUsForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('contactName')?.value.trim() || '';
        const email = document.getElementById('contactEmail')?.value.trim() || '';
        const message = document.getElementById('contactMessage')?.value.trim() || '';
        const feedback = document.getElementById('contactFeedback');

        if (!feedback) return;

        feedback.textContent = '';
        feedback.style.color = 'red';

        // Validate fields
        if (!name || !email || !message) {
            feedback.textContent = "Please fill all fields.";
            return;
        }

        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.match(emailPattern)) {
            feedback.textContent = "Please enter a valid email address.";
            return;
        }

        // Validation passed
        feedback.style.color = 'green';
        feedback.textContent = `Thank you ${name}, your message has been sent successfully!`;

        // Reset form
        this.reset();

        // Hide feedback after 5 seconds
        setTimeout(() => { feedback.textContent = ''; }, 5000);
    });
}

// ===================== Footer Icon Hover Animation =====================
// Now targets <i> icons instead of <img>
const footerIcons = document.querySelectorAll('.footer-contacts a i, .social-icons a i');
footerIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = "scale(1.3)";
        icon.style.transition = "transform 0.3s ease, color 0.3s ease";
        icon.style.color = "#FFD700";
    });
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = "scale(1)";
        icon.style.color = "#fff";
    });
});

// ===================== Smooth Scroll for Footer Links =====================
document.querySelectorAll('footer a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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
        padding: 6px 10px;
        margin-top: 10px;
        background-color: #FFD700;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-weight: bold;
        color: #8B0000;
        font-size: 0.85rem;
    `;
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    footerBottom.appendChild(backToTop);
}

// ===================== Dynamic Year Update =====================
const currentYear = new Date().getFullYear();
const yearSpan = document.getElementById('currentYear');
if (yearSpan) {
    yearSpan.textContent = currentYear;
}
