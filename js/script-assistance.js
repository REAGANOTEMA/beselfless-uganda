// ===================== Hamburger Toggle =====================
const hamburger=document.getElementById('hamburger');
const navLinks=document.querySelector('.nav-links');

if(hamburger&&navLinks){
    hamburger.addEventListener('click',()=>{
        navLinks.classList.toggle('show');
        hamburger.classList.toggle('active');
        hamburger.querySelectorAll('div').forEach((line,index)=>{
            line.classList.toggle(`line${index+1}-active`);
        });
    });
}

// ===================== Animate Images on Scroll =====================
const animateImages=document.querySelectorAll('.assistance-profile img, .leader-card img, .leader-with-students img, .achievement-img-wrapper img');
const observerOptions={threshold:0.1};

const animateOnScroll=(entries,observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="scale(1.05)";
            entry.target.style.transition="all 0.8s ease-out";
            observer.unobserve(entry.target);
        }
    });
};

const imgObserver=new IntersectionObserver(animateOnScroll,observerOptions);
animateImages.forEach(img=>{
    img.style.opacity="0";
    img.style.transform="translateY(20px)";
    imgObserver.observe(img);
});

// ===================== Smooth Hover Effect for Images =====================
animateImages.forEach(img=>{
    img.addEventListener('mouseenter',()=>{
        img.style.transform="scale(1.1)";
        img.style.transition="transform 0.3s ease, box-shadow 0.3s ease";
        img.style.boxShadow="0 6px 18px rgba(0,0,0,0.3)";
    });
    img.addEventListener('mouseleave',()=>{
        img.style.transform="scale(1.05)";
        img.style.boxShadow="none";
    });
});

// ===================== Footer Icons Animation =====================
const footerIcons=document.querySelectorAll('.footer-contacts a i, .social-icons a i');
footerIcons.forEach(icon=>{
    icon.addEventListener('mouseenter',()=>{
        icon.style.transform="scale(1.2)";
        icon.style.transition="transform 0.3s ease, color 0.3s ease";
        icon.style.color="#FFD700";
    });
    icon.addEventListener('mouseleave',()=>{
        icon.style.transform="scale(1)";
        icon.style.color="rgba(255,255,255,0.9)";
    });
});

// ===================== Smooth Scroll for Footer Links =====================
document.querySelectorAll('footer a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click',function(e){
        e.preventDefault();
        const target=document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({behavior:'smooth'});
        }
    });
});

// ===================== Back to Top Button =====================
const footerBottom=document.querySelector('.footer-bottom');
if(footerBottom){
    const backToTop=document.createElement('button');
    backToTop.textContent="↑ Back to Top";
    Object.assign(backToTop.style,{
        padding:"8px 12px",
        marginTop:"10px",
        backgroundColor:"#FFD700",
        border:"none",
        borderRadius:"5px",
        cursor:"pointer",
        fontWeight:"bold",
        color:"#8B0000",
        position:"relative",
        transition:"transform 0.3s ease"
    });

    backToTop.addEventListener('mouseenter',()=>backToTop.style.transform="scale(1.05)");
    backToTop.addEventListener('mouseleave',()=>backToTop.style.transform="scale(1)");
    backToTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

    footerBottom.appendChild(backToTop);
}

// ===================== Dynamic Year Update =====================
const currentYear=new Date().getFullYear();
const copyrightEl=document.querySelector('.footer-bottom p:first-child');
if(copyrightEl){
    copyrightEl.innerHTML=`&copy; ${currentYear} Be Selfless Uganda. All rights reserved.`;
}

// ===================== Close Mobile Menu on Link Click =====================
document.querySelectorAll('.nav-links li a').forEach(link=>{
    link.addEventListener('click',()=>{
        if(navLinks.classList.contains('show')){
            navLinks.classList.remove('show');
            hamburger.classList.remove('active');
            hamburger.querySelectorAll('div').forEach((line,index)=>{
                line.classList.remove(`line${index+1}-active`);
            });
        }
    });
});
