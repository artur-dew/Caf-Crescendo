// ======================
// NAVBAR SHADOW
// ======================

window.addEventListener("scroll", function () {

    let navbar = document.querySelector(".header");

    if (window.scrollY > 50) {

        navbar.classList.add("sticky");

    } else {

        navbar.classList.remove("sticky");

    }

});


// ======================
// MOBILE MENU
// ======================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// ======================
// HERO BUTTON
// ======================

const heroButton = document.querySelector(".hero-btn");

heroButton.addEventListener("click", function () {

    alert("Welcome to Café Crescendo!");

});


// ======================
// CATEGORY CARD ANIMATION
// ======================

const cards = document.querySelectorAll(".category-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", function () {

        this.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", function () {

        this.style.transform = "translateY(0px) scale(1)";

    });

});


// ======================
// USP CARD EFFECT
// ======================

const uspCards = document.querySelectorAll(".usp-card");

uspCards.forEach(card => {

    card.addEventListener("mouseenter", function () {

        this.style.boxShadow = "0 15px 40px rgba(0,0,0,0.15)";

    });

    card.addEventListener("mouseleave", function () {

        this.style.boxShadow = "none";

    });

});


// ======================
// BUTTON CLICK EFFECT
// ======================

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        this.style.transform = "scale(0.95)";

        setTimeout(() => {

            this.style.transform = "scale(1)";

        }, 150);

    });

});


// ======================
// IMAGE HOVER ZOOM
// ======================

const images = document.querySelectorAll("img");

images.forEach(image => {

    image.addEventListener("mouseenter", function () {

        this.style.transition = "0.4s";
        this.style.transform = "scale(1.03)";

    });

    image.addEventListener("mouseleave", function () {

        this.style.transform = "scale(1)";

    });

});


// ======================
// EMAILJS
// ======================

emailjs.init("PUBLIC_KEYING");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
        "SERVICE_IDING",
        "TEMPLATE_IDING",
        this
    )

        .then(() => {

            alert("Subscription successful!");

            form.reset();

        })

        .catch((error) => {

            alert("Failed to send!");

            console.log(error);

        });

});


// ======================
// SCROLL REVEAL EFFECT
// ======================

const revealElements = document.querySelectorAll(
    ".category-card, .usp-card, .new-section, .subscription-content, .cafe-section"
);

window.addEventListener("scroll", revealOnScroll);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0px)";

        }

    });

}


// INITIAL STYLE

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition = "all 0.8s ease";

});


// ======================
// NEWSLETTER INPUT EFFECT
// ======================

const input = document.querySelector(".newsletter-box input");

input.addEventListener("focus", function () {

    this.style.border = "2px solid #b57b45";
    this.style.boxShadow = "0 0 10px rgba(181,123,69,0.4)";

});

input.addEventListener("blur", function () {

    this.style.border = "1px solid #ccc";
    this.style.boxShadow = "none";

});


// ======================
// LOADING ANIMATION
// ======================

window.addEventListener("load", function () {

    document.body.style.opacity = "1";

});

document.body.style.opacity = "0";
document.body.style.transition = "1s";


// ======================
// FOOTER YEAR AUTO UPDATE
// ======================

const footerText = document.querySelector(".footer-bottom p");

const year = new Date().getFullYear();

footerText.innerHTML = `Copyright ${year} | All Rights Reserved`;


// ======================
// CONSOLE MESSAGE
// ======================

console.log("Cafe Crescendo Website Loaded Successfully!");