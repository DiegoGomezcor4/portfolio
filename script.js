var language = "english"; // Inicialmente en inglés

function changeLanguage() {
    var elements = document.querySelectorAll('h1, h2, h3, p, li');
    elements.forEach(function(element) {
        if (language === "english") {
            switchToSpanish(element);
        } else {
            switchToEnglish(element);
        }
    });
}

function switchToSpanish(element) {
    var parrafo = document.getElementById('portfolio-title');
    parrafo.textContent = "Mi Portafolio";

    // About Titulo
    var parrafo = document.getElementById('about-title');
    parrafo.textContent = "Acerca de Mí";

     // Acerca de mi parrafo
     var parrafo = document.getElementById('about-me');
     parrafo.textContent = "Hola soy Diego Desarrollador web y apasionado por la programacion.";

     //proyectos
     var proyectoTitulo = document.getElementById('projects-title');
     proyectoTitulo.textContent = "Proyectos";

     //contactos
    var contacto = document.getElementById('contact-title');
    contacto.textContent = "Contacto";

    var parrafo = document.getElementById('contact-p');
    parrafo.innerHTML = "Puedes <a href='mailto:diegocor4@gmail.com'>enviarme un correo electrónico</a> o encontrarme en mis redes sociales:";


    // Cambia el idioma a español
    language = "spanish";
}

function switchToEnglish(element) {

    // Titulo
    var parrafo = document.getElementById('portfolio-title');
    parrafo.textContent = "My Portfolio";

     // About Titulo
     var parrafo = document.getElementById('about-title');
     parrafo.textContent = "About Me";

    // acerca de mi parrafo español-->ingles
    var parrafo = document.getElementById('about-me');
    parrafo.textContent = "Hello, I'm Diego, web developer and passionate about programming.";

    //proyectos
    var proyectoTitulo = document.getElementById('projects-title');
    proyectoTitulo.textContent = "Projects";

    //contactos
    var contacto = document.getElementById('contact-title');
    contacto.textContent = "Contact";

    var parrafo = document.getElementById('contact-p');
    parrafo.innerHTML = "You can <a href='mailto:diegocor4@gmail.com'>send me a mail</a> or on my social media:";


    // Cambia el idioma a inglés
    language = "english";
}


function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle('dark-mode');

    var projects = document.querySelectorAll('.project');

    projects.forEach(function(project) {
        project.classList.toggle('dark-mode');
    });

}
