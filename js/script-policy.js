// ===================== MOBILE NAV TOGGLE =====================
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");

      // Animate hamburger bars
      hamburger.classList.toggle("open");
    });
  }

  // ===================== ACTIVE NAV LINK =====================
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.getAttribute("href") === currentPage || 
        (link.getAttribute("href") === "index.html" && currentPage === "")) {
      link.setAttribute("aria-current", "page");
    }
  });

  // ===================== FOOTER YEAR AUTO UPDATE =====================
  const yearSpan = document.querySelector("#year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
