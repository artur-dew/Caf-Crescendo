/* =====================
   CAFÉ CRESCENDO — script.js
   Clean, modular, null-safe
===================== */

// ── Page load fade-in ─────────────────────────────────────────────
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
    revealOnScroll();

    const yearEl = document.getElementById("footer-year");
    if (yearEl) yearEl.textContent = `Copyright ${new Date().getFullYear()} | All Rights Reserved`;
});

// ── Navbar scroll shadow ──────────────────────────────────────────
const header = document.getElementById("header");
if (header) {
    window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 50);
        revealOnScroll();
    }, { passive: true });
}

// ── Burger menu ───────────────────────────────────────────────────
const menuToggle = document.getElementById("menu-toggle");
const navLinksEl = document.getElementById("nav-links");
const mobileOverlay = document.getElementById("mobile-overlay");

function openMenu() {
    navLinksEl?.classList.add("active");
    menuToggle?.classList.add("open");
    mobileOverlay?.classList.add("active");
    menuToggle?.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    navLinksEl?.classList.remove("active");
    menuToggle?.classList.remove("open");
    mobileOverlay?.classList.remove("active");
    menuToggle?.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
}

menuToggle?.addEventListener("click", () => {
    navLinksEl?.classList.contains("active") ? closeMenu() : openMenu();
});

mobileOverlay?.addEventListener("click", closeMenu);

// Close on nav link click + active link highlight
navLinksEl?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        closeMenu();
        navLinksEl.querySelectorAll("a").forEach(a => a.classList.remove("active"));
        link.classList.add("active");
    });
});

// Close menu on Escape
document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeMenu();
});

// ── Scroll reveal ─────────────────────────────────────────────────
const revealEls = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const threshold = window.innerHeight * 0.88;
    revealEls.forEach(el => {
        if (el.getBoundingClientRect().top < threshold) {
            el.classList.add("visible");
        }
    });
}

// Initial check
revealOnScroll();

// ── Newsletter form ───────────────────────────────────────────────
const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput?.value.trim();

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            emailInput?.focus();
            emailInput?.style.setProperty("border-color", "#e74c3c");
            return;
        }

        emailInput?.style.removeProperty("border-color");

        // EmailJS integration (replace keys before deploying)
        if (typeof emailjs !== "undefined") {
            emailjs.init("PUBLIC_KEY");
            emailjs
                .sendForm("SERVICE_ID", "TEMPLATE_ID", this)
                .then(() => {
                    alert("Subscribed successfully! Welcome to Café Crescendo ☕");
                    this.reset();
                })
                .catch(err => {
                    console.error("EmailJS error:", err);
                    alert("Something went wrong. Please try again.");
                });
        } else {
            // Fallback if EmailJS not loaded
            alert("Subscribed successfully! Welcome to Café Crescendo ☕");
            this.reset();
        }
    });
}

// ── Hero buttons ──────────────────────────────────────────────────
document.querySelectorAll(".hero-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const isGhost = btn.classList.contains("ghost-btn");
        alert(isGhost ? "Menu coming soon!" : "Welcome to Café Crescendo ☕");
    });
});

console.log("Café Crescendo loaded ✔");