AOS.init({
    duration: 1000,
    once:true
});

//Typing Effect
const typed = new Typed('#typing', {
    strings: ["Medical Doctor.", "Graphic Designer.", "Creative.", "Beautiful."],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 1000,
    loop: true
});

// Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = document.querySelector('i');

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtn.setAttribute("clsss", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("clsss", "ri-menu-line"); 
});

document.addEventListener("DOMContentLoaded", function() {
    var mixer = mixitup('.portfolio-grid', {
        selectors: {
            target: '.mix'
        },
        animation: {
            duration: 300
        }
    });
});

//back to top button
const btn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
});
btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});