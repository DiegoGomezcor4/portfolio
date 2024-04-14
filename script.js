var language = "english";

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
    switch (element.textContent) {
        case "My Portfolio":
            element.textContent = "Mi Portafolio";
            break;
        case "About Me":
            element.textContent = "Acerca de Mí";
            break;
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
    language = "spanish";
}

function switchToEnglish(element) {
    switch (element.textContent) {
        case "Mi Portafolio":
            element.textContent = "My Portfolio";
            break;
        case "Acerca de Mí":
            element.textContent = "About Me";
            break;
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
    language = "english";
}
