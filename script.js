// ========================================
// TRANSLATION SYSTEM
// ========================================
const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.projects': 'Projects',
        'nav.stack': 'Stack',
        'nav.about': 'About me',
        'nav.contact': 'Contact',

        // Hero
        'hero.badge': 'Available for new projects',
        'hero.tagline': 'Software developer focused on the construction of fast APIs and automated workflows. Passionate about cybersecurity, networks, and clean and secure architectures.',
        'hero.cta.projects': 'View projects',
        'hero.cta.contact': 'Contact me',
        'hero.cta.cv': 'Download CV',
        'stat.experience': 'Year of experience',
        'stat.projects': 'Key projects',
        'stat.specialty': 'Backend Specialty',

        // Projects Section
        'section.projects.label': '02 / Projects',
        'section.projects.title': 'Things I\'ve built',
        'section.projects.subtitle': 'My selection of personal projects where I designed architectures from scratch and built optimized, clean backends, always following best practices.',
        'project.garage.title': 'Garage API (Backend)',
        'project.garage.desc': 'Asynchronous RESTful API for vehicle maintenance management. Architected with FastAPI and PostgreSQL. Features a security and authentication system using JWT tokens and password hashing with Bcrypt. Includes database migration control with Alembic and strict data validation with Pydantic.',
        'project.respira-cali.title': 'Respira Cali (Backend/Frontend)',
        'project.respira-cali.desc': 'Web application developed with HTML, CSS and JavaScript to query and visualize air quality information in Cali. Built with complete understanding of the implemented logic, data consumption, and frontend structure.',
        'project.vehicle-management-frontend.title': 'Vehicle Management Frontend',
        'project.vehicle-management-frontend.desc': 'Interactive web interface (SPA) in Vanilla JS, HTML5, and CSS3 for vehicle management, preventive maintenance, and intelligent service calculation based on the owner\'s manual.',
        'project.view_code': 'View Code on GitHub',

        // Stack Section
        'section.stack.label': '03 / Stack',
        'section.stack.title': 'Tools I use',
        'section.stack.subtitle': 'Technologies I work with daily, organized by technical category.',
        'stack.languages': 'Languages & Core',
        'stack.backend': 'Backend & Databases',
        'stack.focus': 'Security & Tools',

        // About Section
        'section.about.label': '04 / About me',
        'section.about.title': 'Professional profile',
        'about.experience': 'Experience',
        'about.experience.value': 'Freelance Backend Dev (~1 year)',
        'about.security': 'Security Focus',
        'about.security.value': 'Encrypted Data Management & Secure Auth',
        'status.active': 'SEEKING OPPORTUNITIES',
        'status.desc': 'I am a student of Technology in Software Development (sixth semester) and I am transitioning to Systems Engineering. Currently seeking my first job opportunity in the sector as a Software Developer or Technical Support. I have six months of experience in the administrative area, where I also supported a project on the automation of repetitive task workflows.',
        'status.role': 'Desired role:',
        'status.modality': 'Modality:',
        'status.modality_val': 'Remote / Hybrid',
        'status.location': 'Location:',
        'status.core_stack': 'Core Stack:',

        // Contact Section
        'section.contact.label': '05 / Contact',
        'section.contact.title': 'Let\'s talk',
        'section.contact.subtitle': 'Have a project in mind or a job opportunity? Send me a direct message.',
        'contact.copy': 'Copy',
        'contact.copied': 'Copied!',

        // Footer
        'footer.built': 'Built with Clean & Responsive design'
    },
    es: {
        // Navigation
        'nav.home': 'Inicio',
        'nav.projects': 'Proyectos',
        'nav.stack': 'Stack',
        'nav.about': 'Sobre mí',
        'nav.contact': 'Contacto',

        // Hero
        'hero.badge': 'Disponible para nuevos proyectos',
        'hero.tagline': 'Desarrollador de software enfocado en la construcción de APIs rápidas y flujos de trabajo automatizados. Apasionado por la ciberseguridad, las redes y las arquitecturas limpias y seguras.',
        'hero.cta.projects': 'Ver proyectos',
        'hero.cta.contact': 'Contáctame',
        'hero.cta.cv': 'Descargar CV',
        'stat.experience': 'Año de experiencia',
        'stat.projects': 'Proyectos principales',
        'stat.specialty': 'Especialidad Backend',

        // Projects Section
        'section.projects.label': '02 / Proyectos',
        'section.projects.title': 'Cosas que he construido',
        'section.projects.subtitle': 'Mi selección de proyectos personales donde diseñé las arquitecturas desde cero y construí backends optimizados y limpios, siempre siguiendo buenas prácticas.',
        'project.garage.title': 'Garage API (Backend)',
        'project.garage.desc': 'API RESTful asíncrona para el control de mantenimiento vehicular. Arquitecturada con FastAPI y PostgreSQL. Cuenta con un sistema de seguridad y autenticación mediante Tokens JWT y encriptación de contraseñas con Bcrypt. Incluye control de migraciones de base de datos con Alembic y validación estricta de datos con Pydantic.',
        'project.respira-cali.title': 'Respira Cali (Backend/Frontend)',
        'project.respira-cali.desc': 'Aplicación web desarrollada con HTML, CSS y Javascript para consultar y visualizar información sobre la calidad del aire en Cali. El proyecto fue construido con comprensión completa de la lógica implementada, el consumo de datos y la estructura del frontend.',
        'project.vehicle-management-frontend.title': 'vehicle-management-frontend',
        'project.vehicle-management-frontend.desc': 'Interfaz web interactiva (SPA) en Vanilla JS, HTML5 y CSS3 para la gestión de vehículos, mantenimientos preventivos y cálculo inteligente de servicios según el manual del propietario.',
        'project.view_code': 'Ver Código en GitHub',

        // Stack Section
        'section.stack.label': '03 / Stack',
        'section.stack.title': 'Herramientas que uso',
        'section.stack.subtitle': 'Tecnologías con las que trabajo a diario, organizadas por categoría técnica.',
        'stack.languages': 'Lenguajes & Core',
        'stack.backend': 'Backend & BD',
        'stack.focus': 'Seguridad & Herramientas',

        // About Section
        'section.about.label': '04 / Sobre mí',
        'section.about.title': 'Perfil profesional',
        'about.experience': 'Experiencia',
        'about.experience.value': 'Desarrollador Backend Freelance (~1 año)',
        'about.security': 'Enfoque de Seguridad',
        'about.security.value': 'Gestión de Datos Encriptados & Autenticación Segura',
        'status.active': 'BUSCANDO OPORTUNIDADES',
        'status.desc': 'Soy estudiante de Tecnología en Desarrollo de Software (sexto semestre) y estoy pasando a Ingeniería de Sistemas. Actualmente busco mi primera oportunidad laboral en el sector como Desarrollador de Software o Soporte Técnico. Tengo seis meses de experiencia en el área administrativa, donde además apoyé en un proyecto de automatización de flujos de tareas repetitivas.',
        'status.role': 'Rol deseado:',
        'status.modality': 'Modalidad:',
        'status.modality_val': 'Remoto / Híbrido',
        'status.location': 'Ubicación:',
        'status.core_stack': 'Stack Principal:',

        // Contact Section
        'section.contact.label': '05 / Contacto',
        'section.contact.title': 'Hablemos',
        'section.contact.subtitle': '¿Tienes un proyecto en mente o una oportunidad laboral? Envíame un mensaje directo.',
        'contact.copy': 'Copiar',
        'contact.copied': '¡Copiado!',

        // Footer
        'footer.built': 'Diseñado con enfoque Clean & Responsive'
    }
};

// Typewriter phrases per language
const typewriterPhrases = {
    en: [
        'Building secure backend architectures',
        'Designing scalable APIs with FastAPI',
        'Automating workflows with Python',
        'Hardening systems with cybersecurity',
        'Python · FastAPI · Django · PostgreSQL'
    ],
    es: [
        'Construyendo arquitecturas backend seguras',
        'Diseñando APIs escalables con FastAPI',
        'Automatizando flujos complejos con Python',
        'Fortaleciendo sistemas con ciberseguridad',
        'Python · FastAPI · Django · PostgreSQL'
    ]
};

// Terminal lines
const terminalLines = [
    { type: 'cmd', text: 'whoami' },
    { type: 'out', text: 'backend developer @ andres.dev' },
    { type: 'cmd', text: 'cat stack.txt' },
    { type: 'out', text: 'Python · FastAPI · Django · PostgreSQL · Alembic' },
    { type: 'cmd', text: 'ls projects/' },
    { type: 'out', text: 'garage_api/  respira_cali/  vehicle_management_frontend/' },
    { type: 'cmd', text: './deploy --status' },
    { type: 'out-ok', text: '● Systems operational · Ready for hiring' }
];

let currentLang = localStorage.getItem('language') || 'es';

// ========================================
// EMAIL SYSTEM & COPY TO CLIPBOARD
// ========================================
function setupEmail() {
    const user = 'pipetimoty';
    const domain = 'gmail.com';
    const email = `${user}@${domain}`;

    document.querySelectorAll('.email-link').forEach(link => {
        link.setAttribute('href', `mailto:${email}`);
    });

    const copyBtn = document.getElementById('copyEmailBtn');
    const copyTooltip = document.getElementById('copyTooltip');

    if (copyBtn && copyTooltip) {
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(email).then(() => {
                copyBtn.classList.add('copied');
                copyTooltip.textContent = translations[currentLang]['contact.copied'] || '¡Copiado!';
                setTimeout(() => {
                    copyBtn.classList.remove('copied');
                    copyTooltip.textContent = translations[currentLang]['contact.copy'] || 'Copiar';
                }, 2000);
            }).catch(err => {
                console.error('Copy failed', err);
            });
        });
    }
}

// ========================================
// LANGUAGE SYSTEM
// ========================================
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

// ========================================
// NAVBAR — SCROLL SPY + MOBILE MENU
// ========================================
function initNavbar() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navToggle = document.getElementById('navToggle');
    const navLinksContainer = document.getElementById('navLinks');
    const sections = document.querySelectorAll('section[id]');

    // Mobile toggle
    if (navToggle && navLinksContainer) {
        navToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('open');
        });

        // Close menu on link click (mobile)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinksContainer.classList.remove('open');
            });
        });
    }

    // Smooth scroll for nav links & hero CTAs
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPos = target.offsetTop - navHeight + 10;
                window.scrollTo({ top: targetPos, behavior: 'smooth' });
            }
        });
    });

    // Scroll spy — update active link on scroll
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '-80px 0px -40% 0px'
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => scrollObserver.observe(section));
}

// ========================================
// SCROLL PROGRESS BAR
// ========================================
function initScrollProgress() {
    const bar = document.getElementById('scrollProgress');
    if (!bar) return;

    window.addEventListener('scroll', () => {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
        bar.style.width = progress + '%';
    }, { passive: true });
}

// ========================================
// TERMINAL ANIMATION
// ========================================
function initTerminal() {
    const body = document.getElementById('terminalBody');
    if (!body) return;

    let idx = 0;
    body.innerHTML = '';

    function addLine() {
        if (idx >= terminalLines.length) {
            body.innerHTML += '<div class="terminal-line"><span class="terminal-prompt-char">$</span><span class="terminal-cursor-block"></span></div>';
            return;
        }
        const line = terminalLines[idx];
        let html = '';
        if (line.type === 'cmd') {
            html = `<div class="terminal-line"><span class="terminal-prompt-char">$</span><span class="terminal-command">${line.text}</span></div>`;
        } else if (line.type === 'out-ok') {
            html = `<div class="terminal-line"><span class="terminal-output"><span class="ok">${line.text}</span></span></div>`;
        } else {
            html = `<div class="terminal-line"><span class="terminal-output">${line.text}</span></div>`;
        }
        body.innerHTML += html;
        idx++;
        setTimeout(addLine, 500);
    }

    setTimeout(addLine, 800);
}

// ========================================
// TYPEWRITER (CYCLING)
// ========================================
function initTypewriter() {
    const el = document.getElementById('typewriter');
    if (!el) return;

    let phraseIdx = 0, charIdx = 0, isDeleting = false;

    function tick() {
        const phrases = typewriterPhrases[currentLang] || typewriterPhrases.es;
        const current = phrases[phraseIdx];

        if (isDeleting) {
            charIdx--;
        } else {
            charIdx++;
        }

        el.textContent = current.substring(0, charIdx);

        let delay = isDeleting ? 30 : 65;

        if (!isDeleting && charIdx === current.length) {
            delay = 2000;
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            phraseIdx = (phraseIdx + 1) % phrases.length;
            delay = 400;
        }

        setTimeout(tick, delay);
    }

    setTimeout(tick, 600);
}

// ========================================
// REVEAL SYSTEM
// ========================================
function initReveal() {
    const elements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
}

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Language & Email Setup
    setLanguage(currentLang);
    setupEmail();

    // Language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
    });

    // Core functionality
    initNavbar();
    initScrollProgress();
    initTerminal();
    initTypewriter();
    initReveal();
});
