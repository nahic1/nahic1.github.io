<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Professionelle Synchronsprecher-Dienstleistungen">
    <title>Synchronsprecher Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <!-- Header -->
    <header>
        <div class="container">
            <h1>Dein Name - Professioneller Synchronsprecher</h1>
            <nav>
                <ul>
                    <li><a href="#about">Über mich</a></li>
                    <li><a href="#services">Dienstleistungen</a></li>
                    <li><a href="#demos">Demos</a></li>
                    <li><a href="#contact">Kontakt</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Über mich -->
    <section id="about" class="about">
        <div class="container">
            <h2>Über mich</h2>
            <p>Ich bin ein professioneller Synchronsprecher mit langjähriger Erfahrung in der Vertonung von Filmen, Animationen und Werbespots. Meine Stimme passt sich flexibel den Bedürfnissen Ihrer Projekte an und bietet eine breite Palette von Emotionen und Stilen.</p>
        </div>
    </section>

    <!-- Dienstleistungen -->
    <section id="services" class="services">
        <div class="container">
            <h2>Meine Dienstleistungen</h2>
            <ul>
                <li>Film- und TV-Synchronisation</li>
                <li>Werbespots und Radiospots</li>
                <li>Animationen und Cartoons</li>
                <li>Videospiele</li>
            </ul>
        </div>
    </section>

    <!-- Demos -->
    <section id="demos" class="demos">
        <div class="container">
            <h2>Demovideos</h2>
            <div class="video-gallery">
                <div class="video">
                    <video controls>
                        <source src="demo1.mp4" type="video/mp4">
                        Ihr Browser unterstützt das Video-Tag nicht.
                    </video>
                    <p>Film-Synchronisation</p>
                </div>
                <div class="video">
                    <video controls>
                        <source src="demo2.mp4" type="video/mp4">
                        Ihr Browser unterstützt das Video-Tag nicht.
                    </video>
                    <p>Werbespot</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Kontakt -->
    <section id="contact" class="contact">
        <div class="container">
            <h2>Kontakt</h2>
            <form id="contact-form">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">E-Mail:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="message">Nachricht:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Senden</button>
            </form>
            <p id="success-message"></p>
        </div>
    </section>

    <script src="script.js"></script>
</body>
</html>
