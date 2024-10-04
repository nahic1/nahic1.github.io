document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Verhindert das Standard-Submit-Verhalten
        alert("Danke für deine Nachricht!");
    });
});
