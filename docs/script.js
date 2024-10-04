document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
	    // Formulardaten
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
	    // Simple Validierung
    if (name && email && message) {
        document.getElementById('success-message').innerText = 'Danke, Ihre Nachricht wurde gesendet!';
        document.getElementById('contact-form').reset(); // Formular zurücksetzen
    } else {
        document.getElementById('success-message').innerText = 'Bitte füllen Sie alle Felder aus.';
    }
});
