document.addEventListener("DOMContentLoaded", function () {
    // Add fade-in class to all sections for animation
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.classList.add("fade-in");
    });

    // Smooth scrolling navigation
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        });
    });

    // Fade-in animation on scroll
    const fadeInOnScroll = () => {
        const windowHeight = window.innerHeight;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;
            
            // Check if section is in viewport
            if (sectionTop < windowHeight * 0.85 && sectionBottom > 0) {
                section.classList.add("visible");
            }
        });
    };

    // Highlight active navigation based on scroll position
    const highlightNav = () => {
        let scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute("id");
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                document.querySelectorAll("nav ul li a").forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    };

    // Call functions on scroll and load
    window.addEventListener("scroll", () => {
        fadeInOnScroll();
        highlightNav();
    });
    
    // Trigger on page load
    fadeInOnScroll();
    highlightNav();
});