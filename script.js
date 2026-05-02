// ========================================
// TRANSLATION SYSTEM
// ========================================
const translations = {
    en: {
        'nav.introduction': 'Introduction',
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'sidebar.introduction': 'INTRODUCTION',
        'sidebar.dev_intro': 'Developer Introduction',
        'sidebar.skills': 'TECHNICAL SKILLS',
        'sidebar.languages': 'Languages',
        'sidebar.backend': 'Backend',
        'sidebar.frontend': 'Frontend',
        'sidebar.tools': 'Tools',
        'sidebar.projects': 'PROJECTS',
        'sidebar.portfolio': 'Portafolio Personal',
        'sidebar.touch': 'GET IN TOUCH',
        'sidebar.contact_link': 'Contact',
        'intro.title': 'Developer Introduction',
        'intro.p1': 'Andrés, Software Developer based in Cali, Colombia.',
        'intro.p2': 'Focused on designing efficient, secure, and scalable system architectures.',
        'intro.p3': 'Currently specializing in building robust APIs with FastAPI & Python, managing persistent data with SQL, and enhancing interfaces via JavaScript. Passionate about logic, security, and optimizing administrative workflows.',
        'intro.touch_btn': 'Get in Touch',
        'intro.resource_title': 'Resource: Developer Profile',
        'intro.name_label': 'NAME:',
        'intro.location_label': 'LOCATION:',
        'intro.status_label': 'STATUS:',
        'intro.status_value': 'Junior Developer',
        'intro.focus_label': 'FOCUS:',
        'intro.focus_value': 'Backend & System Design',
        'skills.title': 'Technical Skills',
        'skills.frameworks_title': 'Languages & Frameworks',
        'skills.frameworks_desc': 'I work with Python as my primary language, complemented by JavaScript for frontend development. I use FastAPI for building robust backend APIs and SQL for database management.',
        'skills.stack_title': 'Tech Stack',
        'skills.languages_label': 'LANGUAGES:',
        'skills.backend_label': 'BACKEND:',
        'skills.frontend_label': 'FRONTEND:',
        'skills.tools_label': 'TOOLS:',
        'projects.title': 'Featured Projects',
        'projects.portfolio_title': 'Portafolio Personal',
        'projects.portfolio_p1': 'A clean and modern portfolio website built with pure HTML and CSS. Features a responsive design and intuitive user experience to showcase projects and skills as a developer.',
        'projects.portfolio_p2': 'This project demonstrates my attention to detail, understanding of responsive design, and ability to create professional web experiences from scratch.',
        'projects.view_code': 'View Code',
        'projects.details_title': 'Project Details',
        'projects.type_label': 'TYPE:',
        'projects.type_value': 'Frontend Portfolio',
        'projects.stack_label': 'STACK:',
        'projects.features_label': 'FEATURES:',
        'projects.features_value': 'Responsive, Smooth Scroll',
        'projects.status_label': 'STATUS:',
        'projects.status_value': 'Completed',
        'contact.title': 'Get in Touch',
        'contact.p1': 'Currently open to Junior Developer opportunities. If you want to discuss a job opening, project, or collaboration, I\'d be happy to chat with you.',
        'contact.p2_start': 'Drop me a message at',
        'contact.p2_end': 'and I\'ll get back to you as soon as possible.',
        'contact.email_btn': 'Send Email',
        'contact.info_title': 'Contact Information',
        'contact.email_label': 'EMAIL:',
        'contact.github_label': 'GITHUB:',
        'contact.linkedin_label': 'LINKEDIN:',
        'contact.location_label': 'LOCATION:',
        'footer': 'Designed and built by Andrés Timote © 2024'
    },
    es: {
        'nav.introduction': 'Introducción',
        'nav.about': 'Acerca de',
        'nav.projects': 'Proyectos',
        'nav.contact': 'Contacto',
        'sidebar.introduction': 'INTRODUCCIÓN',
        'sidebar.dev_intro': 'Presentación de Desarrollador',
        'sidebar.skills': 'HABILIDADES TÉCNICAS',
        'sidebar.languages': 'Lenguajes',
        'sidebar.backend': 'Backend',
        'sidebar.frontend': 'Frontend',
        'sidebar.tools': 'Herramientas',
        'sidebar.projects': 'PROYECTOS',
        'sidebar.portfolio': 'Portafolio Personal',
        'sidebar.touch': 'PONTE EN CONTACTO',
        'sidebar.contact_link': 'Contacto',
        'intro.title': 'Presentación de Desarrollador',
        'intro.p1': 'Andrés, Desarrollador de Software basado en Cali, Colombia.',
        'intro.p2': 'Enfocado en diseñar arquitecturas de sistemas eficientes, seguras y escalables.',
        'intro.p3': 'Actualmente especializándome en construir APIs robustas con FastAPI y Python, gestionar datos persistentes con SQL y mejorar interfaces con JavaScript. Apasionado por la lógica, la seguridad y la optimización de flujos de trabajo administrativos.',
        'intro.touch_btn': 'Contáctame',
        'intro.resource_title': 'Recurso: Perfil de Desarrollador',
        'intro.name_label': 'NOMBRE:',
        'intro.location_label': 'UBICACIÓN:',
        'intro.status_label': 'ESTADO:',
        'intro.status_value': 'Desarrollador Junior',
        'intro.focus_label': 'ENFOQUE:',
        'intro.focus_value': 'Backend y Diseño de Sistemas',
        'skills.title': 'Habilidades Técnicas',
        'skills.frameworks_title': 'Lenguajes y Frameworks',
        'skills.frameworks_desc': 'Trabajo con Python como mi lenguaje principal, complementado con JavaScript para desarrollo frontend. Utilizo FastAPI para construir APIs backend robustas y SQL para gestión de bases de datos.',
        'skills.stack_title': 'Stack Técnico',
        'skills.languages_label': 'LENGUAJES:',
        'skills.backend_label': 'BACKEND:',
        'skills.frontend_label': 'FRONTEND:',
        'skills.tools_label': 'HERRAMIENTAS:',
        'projects.title': 'Proyectos Destacados',
        'projects.portfolio_title': 'Portafolio Personal',
        'projects.portfolio_p1': 'Un sitio web de portafolio limpio y moderno construido con HTML y CSS puro. Cuenta con un diseño responsivo y una experiencia de usuario intuitiva para mostrar proyectos y habilidades como desarrollador.',
        'projects.portfolio_p2': 'Este proyecto demuestra mi atención al detalle, comprensión del diseño responsivo y capacidad para crear experiencias web profesionales desde cero.',
        'projects.view_code': 'Ver Código',
        'projects.details_title': 'Detalles del Proyecto',
        'projects.type_label': 'TIPO:',
        'projects.type_value': 'Portafolio Frontend',
        'projects.stack_label': 'STACK:',
        'projects.features_label': 'CARACTERÍSTICAS:',
        'projects.features_value': 'Responsivo, Desplazamiento Suave',
        'projects.status_label': 'ESTADO:',
        'projects.status_value': 'Completado',
        'contact.title': 'Ponte en Contacto',
        'contact.p1': 'Actualmente abierto a oportunidades como Desarrollador Junior. Si quieres hablar sobre una vacante, proyecto o colaboración, estaré encantado de conversar contigo.',
        'contact.p2_start': 'Envíame un mensaje a',
        'contact.p2_end': 'y te responderé lo antes posible.',
        'contact.email_btn': 'Enviar Email',
        'contact.info_title': 'Información de Contacto',
        'contact.email_label': 'EMAIL:',
        'contact.github_label': 'GITHUB:',
        'contact.linkedin_label': 'LINKEDIN:',
        'contact.location_label': 'UBICACIÓN:',
        'footer': 'Diseñado y construido por Andrés Timote © 2024'
    }
};

// Get saved language or default to 'en'
let currentLang = localStorage.getItem('language') || 'en';

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    updateLanguageButtons();
});

// Function to set language
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    updateLanguageButtons();
}

// Update language button states
function updateLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === currentLang) {
            btn.classList.add('active');
        }
    });
}

// Add click listeners to language buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        setLanguage(btn.getAttribute('data-lang'));
    });
});

// ========================================
// EXISTING FUNCTIONALITY
// ========================================

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Highlight active section in sidebar
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.content-section');
    const sidebarLinks = document.querySelectorAll('.sidebar a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    sidebarLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
