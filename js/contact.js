// ===================== Hamburger Toggle =====================
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('active');
});

// Optional: Animate hamburger lines
hamburger.addEventListener('click', () => {
    hamburger.querySelectorAll('div').forEach((line, index) => {
        line.classList.toggle(`line${index + 1}-active`);
    });
});

// ===================== Header Shadow on Scroll =====================
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
    } else {
        header.style.boxShadow = "none";
    }
});

// ===================== Animate elements on scroll =====================
const animatedElements = document.querySelectorAll('.visible, .student, .center, .event, .feature');

const animateOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    animatedElements.forEach(el => {
        const elTop = el.getBoundingClientRect().top;
        if (elTop < triggerBottom) {
            el.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// ===================== Contact Form =====================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        const feedback = document.getElementById('formFeedback');

        feedback.textContent = '';
        feedback.style.color = 'red';

        if (!name || !email || !subject || !message) {
            feedback.textContent = "Please fill all fields.";
            return;
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            feedback.textContent = "Enter a valid email.";
            return;
        }

        feedback.style.color = 'green';
        feedback.textContent = `Thank you ${name}, your message has been sent successfully!`;
        this.reset();
    });
}

// ===================== Donation Form =====================
const donationForm = document.getElementById('donationForm');
if (donationForm) {
    donationForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('donorName').value.trim();
        const email = document.getElementById('donorEmail').value.trim();
        const amount = document.getElementById('amount').value;
        const feedback = document.getElementById('donationFeedback');

        feedback.textContent = '';
        feedback.style.color = 'red';

        if (!name || !email || !amount) {
            feedback.textContent = "Please fill all fields.";
            return;
        }

        feedback.style.color = 'green';
        feedback.textContent = `Thank you ${name}! Your donation of $${amount} has been received.`;
        this.reset();
    });
}

// ===================== Smooth Scroll for Anchor Links =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
