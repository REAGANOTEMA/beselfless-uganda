// ===================== Hamburger Toggle =====================
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('active');

    // Animate hamburger lines
    const lines = hamburger.querySelectorAll('div');
    lines[0].classList.toggle('line1');
    lines[1].classList.toggle('line2');
    lines[2].classList.toggle('line3');
});

// ===================== Animate Director Image on Scroll =====================
const directorImg = document.querySelector('.director-profile img');
const heroHeader = document.querySelector('.hero h2');
const journeySection = document.querySelector('.start-your-journey');

const animateOnScroll = () => {
    const scrollY = window.scrollY + window.innerHeight;

    // Director image animation
    if (directorImg && directorImg.offsetTop < scrollY - 50) {
        directorImg.style.transform = "scale(1.05)";
        directorImg.style.opacity = "1";
        directorImg.style.transition = "all 1s ease";
    }

    // Hero header parallax sliding
    if (heroHeader) {
        const offset = window.scrollY / 3; // slower movement
        heroHeader.style.transform = `translateY(${offset}px)`;
    }

    // Fade-in Start Your Journey section
    if (journeySection && journeySection.offsetTop < scrollY - 100) {
        journeySection.style.opacity = "1";
        journeySection.style.transform = "translateY(0) scale(1)";
        journeySection.style.transition = "all 1s ease-out";
    }
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// ===================== Smooth Hover Effect on Director Image =====================
directorImg.addEventListener('mouseenter', () => {
    directorImg.style.transform = "scale(1.1)";
    directorImg.style.transition = "transform 0.5s ease";
});
directorImg.addEventListener('mouseleave', () => {
    directorImg.style.transform = "scale(1.05)";
    directorImg.style.transition = "transform 0.5s ease";
});

// ===================== Smooth Scroll for Anchor Links =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ===================== Hero Slide Text Functionality =====================
const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

setInterval(() => {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');
    currentSlide = (currentSlide + 2) % slides.length;
}, 1000); // slide every 1 second

// ===================== Hero Background Image Slider =====================
const hero = document.querySelector('.hero');
const heroImages = [
    'images/cakes-cutting.jpg',
    'images/meetingroom1.jpg',
    'images/pathwayconnect-students.jpg',
    'images/graduation-students.jpg',
    'images/marakaandwife.jpg',
    'images/byu-tower.jpg',
    'images/abraback.png'
];
let currentBg = 0;

setInterval(() => {
    currentBg = (currentBg + 1) % heroImages.length;
    hero.style.backgroundImage = `url('${heroImages[currentBg]}')`;
}, 1000); // change image every 1 second

// ===================== Hero Header Color Change =====================
const heroHeaders = document.querySelectorAll('.hero-slide h2');
const colors = ['#FFD700', '#FF4500', '#00FFFF', '#ADFF2F', '#FF69B4'];
let colorIndex = 0;

setInterval(() => {
    heroHeaders.forEach(h => h.style.color = colors[colorIndex]);
    colorIndex = (colorIndex + 1) % colors.length;
}, 3000); // change color every 3 seconds

// ===================== Footer JS =====================
// Animate Contact Icons on Hover
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

// Smooth Scroll for Footer Links
document.querySelectorAll('footer a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Back to Top Button
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
document.getElementById('currentYear').textContent = new Date().getFullYear();
