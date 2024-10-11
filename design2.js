document.addEventListener('DOMContentLoaded', function() {
    // 1. Smooth Scrolling for Navbar Links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 60,  // Adjust for navbar height
                behavior: 'smooth'
            });
        });
    });

    // 2. Scroll to Top Button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.textContent = "↑";
    scrollToTopBtn.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 3. Navbar Highlight on Scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 80;
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // 4. Typing Effect for Hero Section
    const typedText = document.querySelector('.typed-text');
    const words = ["a passionate data scientist.", "a web developer.", "an AI enthusiast."];
    let wordIndex = 0;
    let letterIndex = 0;
    let currentWord = '';
    let isDeleting = false;
    
    function type() {
        const fullWord = words[wordIndex];
        
        if (isDeleting) {
            currentWord = fullWord.substring(0, letterIndex--);
        } else {
            currentWord = fullWord.substring(0, letterIndex++);
        }

        typedText.textContent = currentWord;

        if (!isDeleting && letterIndex === fullWord.length) {
            setTimeout(() => (isDeleting = true), 1000); // Pause before deleting
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(type, isDeleting ? 100 : 150);
    }
    
    type(); // Start typing effect

    // 5. Toggle Menu for Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('open');
    });
});
