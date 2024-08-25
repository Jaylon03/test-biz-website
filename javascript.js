document.addEventListener("DOMContentLoaded", function () {
    // Animate hero section
    gsap.to(".logo", { opacity: 1, duration: 0.6, delay: 0.2, ease: "power2.out" });
    gsap.to(".tagline", { opacity: 1, duration: 0.6, delay: 0.4, ease: "power2.out" });
    gsap.to(".button-container", { opacity: 1, duration: 0.6, delay: 0.6, ease: "power2.out" });

    // Animate services section
    gsap.to("#services .container", { opacity: 1, duration: 0.6, delay: 0.4, ease: "power2.out" });
    gsap.to("#services h2", { opacity: 1, duration: 0.6, delay: 0.5, ease: "power2.out" });
    gsap.fromTo(".service", { y: 20, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.5, delay: 0.7, ease: "power2.out", stagger: 0.1
    });

    // Animate contact section
    gsap.to("#contact", { opacity: 1, duration: 0.6, delay: 0.8, ease: "power2.out" });
    gsap.to("footer", { opacity: 1, y: 0, duration: 0.6, delay: 0.9, ease: "power2.out" });

    // Fade in header
    gsap.from("header", {
        opacity: 0,
        y: -50,
        duration: 0.4,  // Faster animation duration
        ease: "power1.out",
    });

    // Fade in services cards
    gsap.from("#services .service", {
        opacity: 0,
        y: 20,
        duration: 0.5,  // Faster animation duration
        ease: "power2.out",
        stagger: 0.1  // Slight stagger for a smoother appearance
    });

    // Animation for contact section
    gsap.from("#contact", {
        opacity: 0,
        y: 20,
        duration: 0.5,  // Faster animation duration
        ease: "power2.out",
    });

    // Dynamic Navbar Active Link Detection
    const sections = document.querySelectorAll("section"); // Assuming sections have IDs
    const navLinks = document.querySelectorAll("nav ul li a");

    // Function to update the active link
    const updateActiveLink = () => {
        let currentSectionId = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (pageYOffset >= sectionTop - 50 && pageYOffset < sectionTop + sectionHeight - 50) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSectionId)) {
                link.classList.add("active");
            }
        });
    };

    // Initial activation
    updateActiveLink();

    // Update on scroll
    window.addEventListener("scroll", updateActiveLink);
});
document.addEventListener("DOMContentLoaded", function () {
    // Get all the nav links
    const navLinks = document.querySelectorAll("nav ul li a");

    // Function to update active link
    const updateActiveLink = () => {
        const sections = document.querySelectorAll("section");
        let currentSectionId = "";

        // Determine which section is currently in view
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        // Update the active class on nav links
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSectionId)) {
                link.classList.add("active");
            }
        });
    };

    // Initial activation
    updateActiveLink();

    // Update active link on scroll
    window.addEventListener("scroll", updateActiveLink);
});
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");

    // Update active link based on scroll position
    const updateActiveLink = () => {
        const sections = document.querySelectorAll("section");
        let currentSectionId = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSectionId)) {
                link.classList.add("active");
            }
        });
    };

    // Initial activation
    updateActiveLink();

    // Update active link on scroll
    window.addEventListener("scroll", updateActiveLink);
});


function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
    document.querySelector('.mobile-menu').classList.toggle('open');
}


import axios from 'axios' 

const api_key = 'ebe16e9b-19bb-437b-bcac-0e25f3e98a6f' 
const assistant_id = '4beb5580-c40a-4e20-a550-03efdd0f7360' 
let session_id;

// Create a new chat session 
const chatSession = await axios.post(
   'https://agentivehub.com/api/chat',
 {
    "api_key": api_key,
     "assistant_id": "ff9a4dc0-0126-492a-bfb3-a354e0c136c2"
    }
)

session_id = chatSession.data.session_id;

 // Send a message to the chat session 
const chatReponse = {
 api_key,
 session_id,
 assistant_id,
 messages:[{ role: 'user',  content: 'Say Hello!' }]
 };

const chat = await axios.post(
   'https://agentivehub.com/api/chat',
 chatReponse
 );
    