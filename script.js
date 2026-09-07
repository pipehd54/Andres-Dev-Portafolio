// ========================================
// TRANSLATION SYSTEM (OPTIMIZED)
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
        'footer.built': 'Built with Clean & Responsive design',

        // Typewriter
        'typewriter.0': 'Building secure backend architectures',
        'typewriter.1': 'Designing scalable APIs with FastAPI',
        'typewriter.2': 'Automating workflows with Python',
        'typewriter.3': 'Hardening systems with cybersecurity',
        'typewriter.4': 'Python · FastAPI · Django · PostgreSQL'
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
        'footer.built': 'Diseñado con enfoque Clean & Responsive',

        // Typewriter
        'typewriter.0': 'Construyendo arquitecturas backend seguras',
        'typewriter.1': 'Diseñando APIs escalables con FastAPI',
        'typewriter.2': 'Automatizando flujos complejos con Python',
        'typewriter.3': 'Fortaleciendo sistemas con ciberseguridad',
        'typewriter.4': 'Python · FastAPI · Django · PostgreSQL'
    }
};

// Typewriter phrases (now in translations for consistency)
const typewriterKeys = [
    'typewriter.0',
    'typewriter.1',
    'typewriter.2',
    'typewriter.3',
    'typewriter.4'
];

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
                copyTooltip.textContent = t('contact.copied', '¡Copiado!');
                setTimeout(() => {
                    copyBtn.classList.remove('copied');
                    copyTooltip.textContent = t('contact.copy', 'Copiar');
                }, 2000);
            }).catch(err => {
                console.error('Copy failed', err);
            });
        });
    }
}

// ========================================
// LANGUAGE SYSTEM (OPTIMIZED)
// ========================================
let i18nElements = null;
let i18nCache = new Map();

function collectI18nElements() {
    if (i18nElements) return i18nElements;
    
    i18nElements = Array.from(document.querySelectorAll('[data-i18n]')).map(el => {
        const key = el.getAttribute('data-i18n');
        const attr = el.getAttribute('data-i18n-attr');
        return { el, key, attr: attr || 'textContent' };
    });
    return i18nElements;
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);

    const dict = translations[lang] || translations.es;
    const elements = collectI18nElements();

    requestAnimationFrame(() => {
        elements.forEach(({ el, key, attr }) => {
            const translation = dict[key];
            if (translation !== undefined) {
                if (attr === 'textContent') {
                    el.textContent = translation;
                } else {
                    el.setAttribute(attr, translation);
                }
            }
        });

        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        document.documentElement.lang = lang;
    });
}

function t(key, fallback = '') {
    const dict = translations[currentLang] || translations.es;
    return dict[key] ?? fallback;
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
        const key = typewriterKeys[phraseIdx];
        const current = t(key);

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
            phraseIdx = (phraseIdx + 1) % typewriterKeys.length;
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

// ========================================
// THEME TOGGLE (DARK/LIGHT MODE)
// ========================================
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle ? themeToggle.querySelector('i') : null;
    
    // Load saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme, icon);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme, icon);
        });
    }
}

function updateThemeIcon(theme, icon) {
    if (!icon) return;
    
    if (theme === 'light') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ========================================
// CONTACT FORM HANDLING
// ========================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    const statusEl = document.getElementById('formStatus');
    
    if (!form || !statusEl) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Disable button during submission
        submitBtn.disabled = true;
        submitBtn.textContent = t('form.sending', 'Enviando...');
        statusEl.textContent = '';
        statusEl.className = 'form-status';
        
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });
            
            if (response.ok) {
                statusEl.textContent = t('form.success', '¡Mensaje enviado con éxito!');
                statusEl.classList.add('success');
                form.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Form error:', error);
            statusEl.textContent = t('form.error', 'Error al enviar. Intenta de nuevo.');
            statusEl.classList.add('error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            
            setTimeout(() => {
                statusEl.textContent = '';
                statusEl.className = 'form-status';
            }, 5000);
        }
    });
}

// ========================================
// ACCESSIBILITY ENHANCEMENTS
// ========================================
function initAccessibility() {
    // Focus visible for keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-nav');
    });
    
    // Skip to main content link (add dynamically if not present)
    if (!document.querySelector('.skip-link')) {
        const skipLink = document.createElement('a');
        skipLink.href = '#hero';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Saltar al contenido principal';
        document.body.insertBefore(skipLink, document.body.firstChild);
    }
}

// ========================================
// UPDATED INITIALIZATION
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
    
    // New features
    initThemeToggle();
    initContactForm();
    initAccessibility();
});

// ========================================
// FORM TRANSLATIONS (added to translations object)
// ========================================
translations.en['form.name'] = 'Name';
translations.en['form.email'] = 'Email';
translations.en['form.message'] = 'Message';
translations.en['form.submit'] = 'Send Message';
translations.en['form.sending'] = 'Sending...';
translations.en['form.success'] = 'Message sent successfully!';
translations.en['form.error'] = 'Error sending. Please try again.';

translations.es['form.name'] = 'Nombre';
translations.es['form.email'] = 'Email';
translations.es['form.message'] = 'Mensaje';
translations.es['form.submit'] = 'Enviar Mensaje';
translations.es['form.sending'] = 'Enviando...';
translations.es['form.success'] = '¡Mensaje enviado con éxito!';
translations.es['form.error'] = 'Error al enviar. Intenta de nuevo.';
