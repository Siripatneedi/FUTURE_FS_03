/* =====================================
   RESTAURANT WEBSITE JAVASCRIPT
===================================== */

// Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// Sticky Header

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "#000";
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";

    } else {

        header.style.background = "#111";
        header.style.boxShadow = "none";

    }

});

// Reservation Form

const reservationForm = document.getElementById("reservationForm");

if (reservationForm) {

    reservationForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("✅ Table Reserved Successfully!\n\nThank you for choosing Delicious Bites.");

        reservationForm.reset();

    });

}

// Contact Form

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("📩 Your message has been sent successfully!");

        contactForm.reset();

    });

}

// Scroll Animation

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", revealSections);

function revealSections() {

    sections.forEach(section => {

        const position = section.getBoundingClientRect().top;

        const screen = window.innerHeight;

        if (position < screen - 100) {

            section.style.opacity = "1";

            section.style.transform = "translateY(0)";

        }

    });

}

sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(40px)";

    section.style.transition = "all 0.8s ease";

});

revealSections();

// Current Year in Footer

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML = footer.innerHTML.replace("2026", new Date().getFullYear());

}

// Welcome Message

window.onload = function () {

    console.log("Welcome to Delicious Bites Restaurant!");

};