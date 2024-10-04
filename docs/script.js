document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header');
    header.style.opacity = '0';
    header.style.transition = 'opacity 1s';

    setTimeout(() => {
        header.style.opacity = '1';
    }, 100);
});
