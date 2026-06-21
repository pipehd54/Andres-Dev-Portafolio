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
        'hero.tagline': 'Developer focused on building fast APIs, efficient databases, and automated workflows. Passionate about cybersecurity, asynchronous code, and clean architectures.',
        'hero.cta.projects': 'View projects',
        'hero.cta.contact': 'Contact me',
        'stat.experience': 'Year of experience',
        'stat.projects': 'Projects completed',
        'stat.uptime': 'System uptime',
        // Sections
        'section.projects.label': '02 / Projects',
        'section.projects.title': 'Things I\'ve built',
        'section.projects.subtitle': 'A selection of projects where I designed architectures and built scalable backends.',
        'section.stack.label': '03 / Stack',
        'section.stack.title': 'Tools I use',
        'section.stack.subtitle': 'Technologies I work with daily, organized by category.',
        'section.about.label': '04 / About me',
        'section.about.title': 'Professional profile',
        'section.contact.label': '05 / Contact',
        'section.contact.title': 'Let\'s talk',
        'section.contact.subtitle': 'Have a project in mind or an interesting opportunity? Send me a message.',
        // Stack categories
        'stack.languages': 'Languages',
        'stack.focus': 'Focus',
        // About
        'about.experience': 'Experience',
        'about.experience.value': 'Freelance Backend Dev',
        'about.security': 'Security Focus',
        'about.security.value': 'Encrypted Data Management',
        'status.active': 'ACTIVE',
        'status.desc': '6th-semester Software Development student. Seeking my first opportunity as a Junior Backend Developer, backed by nearly a year of prior corporate experience.',
        // Project
        'project.garage.title': 'Garage API (Backend)',
        'project.garage.desc': 'Asynchronous RESTful API for vehicle maintenance management. Architected with FastAPI and PostgreSQL. Features a security and authentication system using JWT tokens and password hashing with Bcrypt. Includes database migration control with Alembic and strict data validation with Pydantic.',
        'project.view_code': 'View Source',
        // Contact
        'contact.email_btn': 'Send Email'
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
        'hero.tagline': 'Desarrollador enfocado en construir APIs rápidas, bases de datos eficientes y flujos automatizados. Apasionado por la ciberseguridad, el código asíncrono y las arquitecturas limpias.',
        'hero.cta.projects': 'Ver proyectos',
        'hero.cta.contact': 'Contáctame',
        'stat.experience': 'Año de experiencia',
        'stat.projects': 'Proyectos completados',
        'stat.uptime': 'Uptime del sistema',
        // Sections
        'section.projects.label': '02 / Proyectos',
        'section.projects.title': 'Cosas que he construido',
        'section.projects.subtitle': 'Una selección de proyectos donde diseñé arquitecturas y construí backends que escalan.',
        'section.stack.label': '03 / Stack',
        'section.stack.title': 'Herramientas que uso',
        'section.stack.subtitle': 'Tecnologías con las que trabajo a diario, organizadas por categoría.',
        'section.about.label': '04 / Sobre mí',
        'section.about.title': 'Perfil profesional',
        'section.contact.label': '05 / Contacto',
        'section.contact.title': 'Hablemos',
        'section.contact.subtitle': '¿Tienes un proyecto en mente o una oportunidad interesante? Envíame un mensaje.',
        // Stack categories
        'stack.languages': 'Lenguajes',
        'stack.focus': 'Enfoque',
        // About
        'about.experience': 'Experiencia',
        'about.experience.value': 'Desarrollador Backend Freelance',
        'about.security': 'Enfoque de Seguridad',
        'about.security.value': 'Gestión de Datos Encriptados',
        'status.active': 'ACTIVO',
        'status.desc': 'Estudiante de 6to semestre de Desarrollo de Software. Buscando mi primera oportunidad como Desarrollador Backend Junior, respaldado por casi un año de experiencia corporativa previa.',
        // Project
        'project.garage.title': 'Garage API (Backend)',
        'project.garage.desc': 'API RESTful asíncrona para el control de mantenimiento vehicular. Arquitecturada con FastAPI y PostgreSQL. Cuenta con un sistema de seguridad y autenticación mediante Tokens JWT y encriptación de contraseñas con Bcrypt. Incluye control de migraciones de base de datos con Alembic y validación estricta de datos con Pydantic.',
        'project.view_code': 'Ver Código',
        // Contact
        'contact.email_btn': 'Enviar Email'
    }
};

// Typewriter phrases per language
const typewriterPhrases = {
    en: [
        'Building secure backend architectures',
        'Designing scalable APIs with FastAPI',
        'Automating complex workflows with Python',
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
    { type: 'out', text: 'backend developer @ portfolio' },
    { type: 'cmd', text: 'cat stack.txt' },
    { type: 'out', text: 'Python · FastAPI · Django · PostgreSQL' },
    { type: 'cmd', text: 'ls projects/' },
    { type: 'out', text: 'garage_api/  security_tools/  api_services/' },
    { type: 'cmd', text: './deploy --status' },
    { type: 'out-ok', text: '● Systems operational · uptime 99.98%' }
];

let currentLang = localStorage.getItem('language') || 'en';

// ========================================
// EMAIL OBFUSCATION
// ========================================
function setupEmail() {
    const user = 'pipetimoty';
    const domain = 'gmail.com';
    const email = `${user}@${domain}`;

    document.querySelectorAll('.email-link').forEach(link => {
        link.setAttribute('href', `mailto:${email}`);
    });
}

// ========================================
// LANGUAGE SYSTEM
// ========================================
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
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

    // Smooth scroll on nav link click
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPos = target.offsetTop - navHeight;
                window.scrollTo({ top: targetPos, behavior: 'smooth' });
            }
        });
    });

    // Also handle the nav-logo click
    const navLogo = document.querySelector('.nav-logo');
    if (navLogo) {
        navLogo.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

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

    // Also handle the hero CTA buttons smooth scroll
    document.querySelectorAll('.hero-cta .btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = btn.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPos = target.offsetTop - navHeight;
                window.scrollTo({ top: targetPos, behavior: 'smooth' });
            }
        });
    });
}

// ========================================
// CUSTOM CURSOR
// ========================================
function initCursor() {
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.left = mouseX + 'px';
        dot.style.top = mouseY + 'px';
    });

    function animateRing() {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        ring.style.left = ringX + 'px';
        ring.style.top = ringY + 'px';
        requestAnimationFrame(animateRing);
    }
    animateRing();

    // Expand ring on interactive elements
    const interactiveSelector = 'a, button, .stack-item, .contact-card, .tag-mono, .project-card, .btn';
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest(interactiveSelector)) {
            ring.style.width = '50px';
            ring.style.height = '50px';
        }
    });
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest(interactiveSelector)) {
            ring.style.width = '36px';
            ring.style.height = '36px';
        }
    });
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
// PARTICLES WITH CONNECTION LINES
// ========================================
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let w, h;

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const count = Math.min(50, Math.floor((w * h) / 30000));
    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            r: Math.random() * 1.5 + 0.5
        });
    }

    function animate() {
        ctx.clearRect(0, 0, w, h);
        const accent = '#38bdf8';

        particles.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > w) p.vx *= -1;
            if (p.y < 0 || p.y > h) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = accent;
            ctx.globalAlpha = 0.35;
            ctx.fill();

            for (let j = i + 1; j < particles.length; j++) {
                const dx = p.x - particles[j].x;
                const dy = p.y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = accent;
                    ctx.globalAlpha = (1 - dist / 120) * 0.12;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        });
        ctx.globalAlpha = 1;
        requestAnimationFrame(animate);
    }
    animate();
}

// ========================================
// TILT ON INTERACTIVE CARDS
// ========================================
function initTilt() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;

    const tiltElements = document.querySelectorAll('.project-card, .stack-category, .status-card');
    tiltElements.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const cx = rect.width / 2;
            const cy = rect.height / 2;
            const rotateX = ((y - cy) / cy) * -2.5;
            const rotateY = ((x - cx) / cx) * 2.5;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
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
        setTimeout(addLine, 600);
    }

    setTimeout(addLine, 1000);
}

// ========================================
// TYPEWRITER (CYCLING)
// ========================================
function initTypewriter() {
    const el = document.getElementById('typewriter');
    if (!el) return;

    let phraseIdx = 0, charIdx = 0, isDeleting = false;

    function tick() {
        const phrases = typewriterPhrases[currentLang] || typewriterPhrases.en;
        const current = phrases[phraseIdx];

        if (isDeleting) {
            charIdx--;
        } else {
            charIdx++;
        }

        el.textContent = current.substring(0, charIdx);

        let delay = isDeleting ? 35 : 70;

        if (!isDeleting && charIdx === current.length) {
            delay = 2200;
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            phraseIdx = (phraseIdx + 1) % phrases.length;
            delay = 400;
        }

        setTimeout(tick, delay);
    }

    setTimeout(tick, 800);
}

// ========================================
// UPTIME COUNTER
// ========================================
function initUptimeCounter() {
    const element = document.getElementById('uptime-counter');
    if (!element) return;

    const deployDate = new Date('2024-01-15T00:00:00');

    function update() {
        const now = new Date();
        const diff = now - deployDate;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        element.textContent =
            `${days}d ${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
    }

    update();
    setInterval(update, 1000);
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
    }, { threshold: 0.12 });

    elements.forEach(el => observer.observe(el));
}

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Language & Email
    setLanguage(currentLang);
    setupEmail();

    // Language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
    });

    // Navigation
    initNavbar();

    // Effects
    initCursor();
    initParticles();
    initScrollProgress();
    initTerminal();
    initTypewriter();
    initTilt();
    initUptimeCounter();
    initReveal();
});
