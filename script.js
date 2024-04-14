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
    console.log(element.textContent.trim()); // Imprime el contenido de element.textContent después de recortar los espacios en blanco
    switch (element.textContent.trim()) {
       
        case "Projects":
            element.textContent = "Proyectos";
            break;
        case "Contact":
            element.textContent = "Contacto";
            break;
        case "Project 1":
            element.textContent = "Proyecto 1";
            break;
        case "Project 2":
            element.textContent = "Proyecto 2";
            break;
        case "Description of project 1.":
            element.textContent = "Descripción del proyecto 1.";
            break;
        case "Description of project 2.":
            element.textContent = "Descripción del proyecto 2.";
            break;
        case "You can contact me via [your email] or on my social media:":
            element.textContent = "Puedes contactarme a través de [tu correo electrónico] o en mis redes sociales:";
            break;
        case "LinkedIn":
            element.textContent = "LinkedIn";
            break;
        case "GitHub":
            element.textContent = "GitHub";
            break;
    }
    // Titulo
    var parrafo = document.getElementById('portfolio-title');
    parrafo.textContent = "Mi Portafolio";

    // About Titulo
    var parrafo = document.getElementById('about-title');
    parrafo.textContent = "Acerca de Mí";

     // Acerca de mi parrafo
     var parrafo = document.getElementById('about-me');
     parrafo.textContent = "Hola soy Diego Desarrollador web y apasionado por la programacion.";


    // Cambia el idioma a español
    language = "spanish";
}

function switchToEnglish(element) {
    switch (element.textContent.trim()) {
    
        case "Proyectos":
            element.textContent = "Projects";
            break;
        case "Contacto":
            element.textContent = "Contact";
            break;
        case "Proyecto 1":
            element.textContent = "Project 1";
            break;
        case "Proyecto 2":
            element.textContent = "Project 2";
            break;
        case "Descripción del proyecto 1.":
            element.textContent = "Description of project 1.";
            break;
        case "Descripción del proyecto 2.":
            element.textContent = "Description of project 2.";
            break;
        case "Puedes contactarme a través de [tu correo electrónico] o en mis redes sociales:":
            element.textContent = "You can contact me via [your email] or on my social media:";
            break;
        case "LinkedIn":
            element.textContent = "LinkedIn";
            break;
        case "GitHub":
            element.textContent = "GitHub";
            break;
    }

    // Titulo
    var parrafo = document.getElementById('portfolio-title');
    parrafo.textContent = "My Portfolio";

     // About Titulo
     var parrafo = document.getElementById('about-title');
     parrafo.textContent = "About Me";

    // acerca de mi parrafo español-->ingles
    var parrafo = document.getElementById('about-me');
    parrafo.textContent = "Hello, I'm Diego, web developer and passionate about programming."


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
