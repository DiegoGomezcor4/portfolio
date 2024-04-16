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
       
       
        case "Contact":
            element.textContent = "Contacto";
            break;
     
        case "You can contact me via [your email] or on my social media:":
            element.textContent = "Puedes contactarme a través de [tu correo electrónico] o en mis redes sociales:";
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

     //proyectos
     var proyectoTitulo = document.getElementById('projects-title');
     proyectoTitulo.textContent = "Proyectos";


    // Cambia el idioma a español
    language = "spanish";
}

function switchToEnglish(element) {
    switch (element.textContent.trim()) {
    
        
        case "Contacto":
            element.textContent = "Contact";
            break;
        case "Puedes contactarme a través de [tu correo electrónico] o en mis redes sociales:":
            element.textContent = "You can contact me via [your email] or on my social media:";
            break;
        

    // Titulo
    var parrafo = document.getElementById('portfolio-title');
    parrafo.textContent = "My Portfolio";

     // About Titulo
     var parrafo = document.getElementById('about-title');
     parrafo.textContent = "About Me";

    // acerca de mi parrafo español-->ingles
    var parrafo = document.getElementById('about-me');
    parrafo.textContent = "Hello, I'm Diego, web developer and passionate about programming."

    //proyectos
    var proyectoTitulo = document.getElementById('projects-title');
    proyectoTitulo.textContent = "Projects";


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
