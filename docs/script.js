document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Verhindert das Standard-Submit-Verhalten
        alert("Danke für deine Nachricht!");
        
        // Form zurücksetzen
        form.reset();
    });

    // Scroll-Effekte für die Navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Hintergrundeffekte für die Sektionen
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#f0f8ff';
        });
        section.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#fff';
        });
    });

    // Modal Logik
    const modals = document.querySelectorAll('.modal');
    const modalLinks = document.querySelectorAll('[href^="#"]');
    const closeButtons = document.querySelectorAll('.modal-close');

    modalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.hash === '#impressum' || link.hash === '#datenschutz') {
                e.preventDefault();
                document.querySelector(link.hash).style.display = 'flex';
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.modal').style.display = 'none';
        });
    });
    
    // Cookie Banner Logik
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookies = document.getElementById('accept-cookies');
    
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.style.display = 'block';
    }
    
    acceptCookies.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.style.display = 'none';
    });
});
