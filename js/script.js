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
        'stat.experience': 'Hands-on automation experience',
        'stat.experience.value': '6 months',
        'stat.projects': 'Key projects',
        'stat.specialty': 'Backend Specialty',

        // Projects Section
        'section.projects.label': '02 / Projects',
        'section.projects.title': 'Things I\'ve built',
        'section.projects.subtitle': 'One case in depth plus two supporting pieces. Each one: my role, the technical decisions, and the outcome.',
        'project.featured': 'Featured case · Backend',
        'project.garage.title': 'Garage API (Backend)',
        'project.garage.role': 'Role: end-to-end design & build — FastAPI + PostgreSQL',
        'project.garage.desc': 'Problem: tracking vehicle maintenance (vehicles, services, history) in a clean, secure API instead of scattered records. Decision: async FastAPI, JWT auth with Bcrypt, strict Pydantic validation, and versioned Alembic migrations.',
        'project.garage.o1': 'JWT auth + Bcrypt hashing: protected routes, credentials never in plain text',
        'project.garage.o2': 'Pydantic contracts: bad data caught before touching the DB',
        'project.garage.o3': 'Alembic: schema evolves with reversible migrations',
        'project.garage.note': 'Documented with FastAPI auto-generated OpenAPI/Swagger.',
        'project.respira-cali.title': 'Respira Cali',
        'project.respira-cali.role': 'Role: frontend + public API consumption',
        'project.respira-cali.desc': 'Queries and visualizes Cali air quality from a public REST API. My contribution: frontend architecture, loading/error states, and clear data presentation.',
        'project.respira-cali.o1': 'REST consumption with error handling and retries',
        'project.respira-cali.o2': 'UI that explains the data, not just displays it',
        'project.vehicle-management-frontend.title': 'Garage Frontend (SPA)',
        'project.vehicle-management-frontend.role': 'Role: Vanilla JS SPA wired to Garage API',
        'project.vehicle-management-frontend.desc': 'Garage API client: vehicle and preventive-maintenance management with next-service calculation per owner manual.',
        'project.vehicle-management-frontend.o1': 'Framework-free SPA: own routing and state',
        'project.vehicle-management-frontend.o2': 'Consumes the API JWT and mirrors its rules',
        'project.view_code': 'View Code on GitHub',

        // Stack Section
        'section.stack.label': '03 / Stack',
        'section.stack.title': 'Tools I use',
        'section.stack.subtitle': 'Technologies I use in my projects and learning process, organized by technical category.',
        'stack.languages': 'Languages & Core',
        'stack.backend': 'Backend & Databases',
        'stack.focus': 'Security & Tools',

        // About Section
        'section.about.label': '04 / About me',
        'section.about.title': 'Professional profile',
        'about.security': 'Security Focus',
        'about.security.value': 'JWT authentication, password hashing and security best practices',
        'status.active': 'SEEKING OPPORTUNITIES',
        'status.desc': 'I am a Technologist in Software Development and a seventh-semester Systems Engineering student. Currently seeking my first job opportunity in the sector as a Software Developer or Technical Support. I have six months of experience in the administrative area, where I also supported a project on the automation of repetitive task workflows.',
        'status.role': 'Desired role:',
        'status.role.value': 'Junior Backend Developer / IT Support',
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
        'stat.experience': 'Experiencia práctica en automatización',
        'stat.experience.value': '6 meses',
        'stat.projects': 'Proyectos principales',
        'stat.specialty': 'Especialidad Backend',

        // Projects Section
        'section.projects.label': '02 / Proyectos',
        'section.projects.title': 'Cosas que he construido',
        'section.projects.subtitle': 'Un caso a fondo y dos piezas de apoyo. En cada uno: mi rol, las decisiones técnicas y el resultado.',
        'project.featured': 'Caso destacado · Backend',
        'project.garage.title': 'Garage API (Backend)',
        'project.garage.role': 'Rol: diseño y construcción end-to-end — FastAPI + PostgreSQL',
        'project.garage.desc': 'Problema: llevar el control de mantenimiento vehicular (vehículos, servicios, historial) a una API ordenada y segura en vez de registros sueltos. Decisión: FastAPI asíncrono, autenticación JWT con Bcrypt, validación estricta con Pydantic y migraciones versionadas con Alembic.',
        'project.garage.o1': 'Auth JWT + hash Bcrypt: rutas protegidas y credenciales nunca en claro',
        'project.garage.o2': 'Contratos Pydantic: errores de datos detectados antes de tocar la BD',
        'project.garage.o3': 'Alembic: esquema evoluciona con migraciones reversibles',
        'project.garage.note': 'Documentada con OpenAPI/Swagger autogenerado por FastAPI.',
        'project.respira-cali.title': 'Respira Cali',
        'project.respira-cali.role': 'Rol: frontend + consumo de API pública',
        'project.respira-cali.desc': 'Consulta y visualiza la calidad del aire de Cali consumiendo una API REST. Mi aporte: arquitectura del frontend, manejo de estados de carga/error y presentación clara del dato.',
        'project.respira-cali.o1': 'Consumo REST con manejo de errores y reintentos',
        'project.respira-cali.o2': 'UI que explica el dato, no solo lo muestra',
        'project.vehicle-management-frontend.title': 'Garage Frontend (SPA)',
        'project.vehicle-management-frontend.role': 'Rol: SPA en Vanilla JS conectada a Garage API',
        'project.vehicle-management-frontend.desc': 'Cliente de Garage API: gestión de vehículos y mantenimientos preventivos con cálculo de próximos servicios según manual del propietario.',
        'project.vehicle-management-frontend.o1': 'SPA sin framework: routing y estado propios',
        'project.vehicle-management-frontend.o2': 'Consume JWT de la API y refleja sus reglas',
        'project.view_code': 'Ver Código en GitHub',

        // Stack Section
        'section.stack.label': '03 / Stack',
        'section.stack.title': 'Herramientas que uso',
        'section.stack.subtitle': 'Tecnologías que utilizo en mis proyectos y proceso de formación, organizadas por categoría técnica.',
        'stack.languages': 'Lenguajes & Core',
        'stack.backend': 'Backend & BD',
        'stack.focus': 'Seguridad & Herramientas',

        // About Section
        'section.about.label': '04 / Sobre mí',
        'section.about.title': 'Perfil profesional',
        'about.security': 'Enfoque de Seguridad',
        'about.security.value': 'Autenticación JWT, hash de contraseñas y buenas prácticas de seguridad',
        'status.active': 'BUSCANDO OPORTUNIDADES',
        'status.desc': 'Soy Tecnólogo en Desarrollo de Software y estudiante de séptimo semestre de Ingeniería de Sistemas. Actualmente busco mi primera oportunidad laboral en el sector como Desarrollador de Software o Soporte Técnico. Tengo seis meses de experiencia en el área administrativa, donde además apoyé en un proyecto de automatización de flujos de tareas repetitivas.',
        'status.role': 'Rol deseado:',
        'status.role.value': 'Junior Backend Developer / Soporte TI',
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
    if (window._navInit) return;
    window._navInit = true;
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

    // Throttle vía rAF: evita recalcular layout en cada evento de scroll
    let queued = false;
    function update() {
        queued = false;
        const total = document.documentElement.scrollHeight - window.innerHeight;
        const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
        bar.style.transform = `scaleX(${progress / 100})`;
    }
    bar.style.transformOrigin = '0 50%';
    bar.style.width = '100%';
    window.addEventListener('scroll', () => {
        if (!queued) { queued = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
}

// ========================================
// TERMINAL ANIMATION
// ========================================
function initTerminal() {
    const body = document.getElementById('terminalBody');
    if (!body) return;
    // Guard: evita doble ejecución (el bug de líneas duplicadas)
    if (body.dataset.initialized === '1') return;
    body.dataset.initialized = '1';

    // Limpia timeouts previos si existieran (HMR / doble llamada)
    if (body._timers) body._timers.forEach(clearTimeout);
    body._timers = [];

    let idx = 0;
    body.innerHTML = '';

    function later(fn, ms) {
        const id = setTimeout(fn, ms);
        body._timers.push(id);
    }

    function addLine() {
        // Si el nodo fue reemplazado, aborta
        if (!document.contains(body)) return;
        if (idx >= terminalLines.length) {
            const end = document.createElement('div');
            end.className = 'terminal-line';
            end.innerHTML = '<span class="terminal-prompt-char">$</span><span class="terminal-cursor-block"></span>';
            body.appendChild(end);
            return;
        }
        const line = terminalLines[idx];
        const div = document.createElement('div');
        div.className = 'terminal-line';
        if (line.type === 'cmd') {
            const p = document.createElement('span');
            p.className = 'terminal-prompt-char';
            p.textContent = '$';
            const c = document.createElement('span');
            c.className = 'terminal-command';
            c.textContent = line.text;
            div.append(p, document.createTextNode(' '), c);
        } else if (line.type === 'out-ok') {
            const o = document.createElement('span');
            o.className = 'terminal-output';
            const ok = document.createElement('span');
            ok.className = 'ok';
            ok.textContent = line.text;
            o.appendChild(ok);
            div.appendChild(o);
        } else {
            const o = document.createElement('span');
            o.className = 'terminal-output';
            o.textContent = line.text;
            div.appendChild(o);
        }
        body.appendChild(div);
        idx++;
        later(addLine, line.type === 'cmd' ? 550 : 320);
    }

    later(addLine, 700);
}

// ========================================
// TYPEWRITER (CYCLING)
// ========================================
function initTypewriter() {
    const el = document.getElementById('typewriter');
    if (!el) return;
    // Guard: evita dos loops escribiendo a la vez
    if (el.dataset.initialized === '1') return;
    el.dataset.initialized = '1';
    if (el._timer) clearTimeout(el._timer);

    let phraseIdx = 0, charIdx = 0, isDeleting = false;

    function tick() {
        if (!document.contains(el)) return;
        // Pausa el ciclo con la pestaña oculta (ahorra CPU/batería)
        if (document.hidden) {
            el._timer = setTimeout(tick, 800);
            return;
        }
        const key = typewriterKeys[phraseIdx];
        const current = t(key) || '';

        if (isDeleting) {
            charIdx--;
        } else {
            charIdx++;
        }

        el.textContent = current.substring(0, charIdx);

        let delay = isDeleting ? 30 : 65;

        if (!isDeleting && charIdx >= current.length) {
            charIdx = current.length;
            delay = 2000;
            isDeleting = true;
        } else if (isDeleting && charIdx <= 0) {
            charIdx = 0;
            isDeleting = false;
            phraseIdx = (phraseIdx + 1) % typewriterKeys.length;
            delay = 400;
        }

        el._timer = setTimeout(tick, delay);
    }

    el._timer = setTimeout(tick, 600);
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
// SINGLE INITIALIZATION (se eliminó el bloque duplicado
// que causaba doble terminal / typewriter / navbar)
// ========================================

// ========================================
// THEME TOGGLE (DARK/LIGHT MODE) — FASES LUNARES
// dark = Luna llena · light = Luna nueva
// ========================================
function getMoonPhaseLabel(theme) {
    if (theme === 'light') {
        return currentLang === 'en' ? 'New moon · stealth mode' : 'Luna nueva · modo sigiloso';
    }
    return currentLang === 'en' ? 'Full moon · stable signal' : 'Luna llena · señal estable';
}

function updateMoonPhase(theme) {
    const label = document.getElementById('moonPhaseLabel');
    if (label) label.textContent = getMoonPhaseLabel(theme);
    const toggle = document.getElementById('themeToggle');
    if (toggle) {
        toggle.setAttribute('aria-label', theme === 'light'
            ? (currentLang === 'en' ? 'Switch to full moon' : 'Cambiar a luna llena')
            : (currentLang === 'en' ? 'Switch to new moon' : 'Cambiar a luna nueva'));
    }
}

function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle ? themeToggle.querySelector('i') : null;
    
    // Load saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme, icon);
    updateMoonPhase(savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme, icon);
            updateMoonPhase(newTheme);
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

        // Sin backend configurado (Formspree pendiente): fallback a email directo
        if (!form.action || form.action.includes('YOUR_FORM_ID')) {
            const name = (formData.get('name') || '').toString().trim();
            const email = (formData.get('email') || '').toString().trim();
            const message = (formData.get('message') || '').toString().trim();
            const subject = encodeURIComponent(`Portfolio · ${name || 'Contacto'}`);
            const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
            statusEl.textContent = t('form.mailto', 'Abriendo tu app de correo para enviar el mensaje…');
            statusEl.className = 'form-status success';
            window.location.href = `mailto:pipetimoty@gmail.com?subject=${subject}&body=${body}`;
            return;
        }
        
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
// LUNA INMERSIVA — starfield + parallax
// ========================================
function initStarfield() {
    const canvas = document.getElementById('starCanvas');
    if (!canvas) return;
    if (canvas.dataset.initialized === '1') return;
    canvas.dataset.initialized = '1';
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    let stars = [];
    let shooting = [];
    let w = 0, h = 0, raf = null;
    let mx = 0, my = 0;
    const DPR = Math.min(window.devicePixelRatio || 1, 1.5);

    function resize() {
        w = window.innerWidth;
        h = window.innerHeight;
        canvas.width = w * DPR;
        canvas.height = h * DPR;
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
        const count = Math.min(190, Math.floor((w * h) / 9500));
        stars = Array.from({ length: count }, () => ({
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 1.4 + 0.3,
            base: Math.random() * 0.55 + 0.25,
            speed: Math.random() * 1.4 + 0.3,
            depth: Math.random() * 0.8 + 0.2,
            phase: Math.random() * Math.PI * 2
        }));
    }

    function spawnShooting() {
        shooting.push({
            x: Math.random() * w * 0.8 + w * 0.1,
            y: Math.random() * h * 0.3,
            vx: -(Math.random() * 5 + 5),
            vy: Math.random() * 2.5 + 1.5,
            life: 1
        });
        setTimeout(spawnShooting, 6000 + Math.random() * 7000);
    }

    function frame(time) {
        ctx.clearRect(0, 0, w, h);
        const t = time / 1000;
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';

        for (const s of stars) {
            const tw = s.base + Math.sin(t * s.speed + s.phase) * 0.28;
            const alpha = isLight ? tw * 0.25 : tw;
            ctx.beginPath();
            ctx.arc(s.x + mx * 14 * s.depth, s.y + my * 10 * s.depth, s.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(226, 232, 255, ${alpha.toFixed(3)})`;
            ctx.fill();
        }

        // Destellos en cruz para las más grandes
        for (let i = 0; i < stars.length; i += 23) {
            const s = stars[i];
            if (!s) continue;
            const a = isLight ? 0.08 : 0.22 + Math.sin(t * 1.2 + s.phase) * 0.1;
            if (a <= 0.02) continue;
            ctx.strokeStyle = `rgba(220,228,255,${a.toFixed(3)})`;
            ctx.lineWidth = 1;
            const L = 7;
            ctx.beginPath();
            ctx.moveTo(s.x - L, s.y); ctx.lineTo(s.x + L, s.y);
            ctx.moveTo(s.x, s.y - L); ctx.lineTo(s.x, s.y + L);
            ctx.stroke();
        }

        shooting = shooting.filter(p => p.life > 0);
        for (const p of shooting) {
            p.x += p.vx; p.y += p.vy; p.life -= 0.016;
            const grad = ctx.createLinearGradient(p.x, p.y, p.x - p.vx * 8, p.y - p.vy * 8);
            grad.addColorStop(0, `rgba(255,255,255,${(0.85 * p.life).toFixed(3)})`);
            grad.addColorStop(1, 'rgba(255,255,255,0)');
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x - p.vx * 8, p.y - p.vy * 8);
            ctx.stroke();
        }

        raf = requestAnimationFrame(frame);
    }

    window.addEventListener('mousemove', (e) => {
        mx = (e.clientX / w - 0.5) * 2;
        my = (e.clientY / h - 0.5) * 2;
        document.documentElement.style.setProperty('--mx', mx.toFixed(3));
        document.documentElement.style.setProperty('--my', my.toFixed(3));
    }, { passive: true });

    window.addEventListener('scroll', () => {
        const y = Math.min(window.scrollY, window.innerHeight);
        document.documentElement.style.setProperty('--scrollY', (y * 0.12).toFixed(1) + 'px');
    }, { passive: true });

    document.addEventListener('visibilitychange', () => {
        if (document.hidden && raf) { cancelAnimationFrame(raf); raf = null; }
        else if (!document.hidden && !raf) { raf = requestAnimationFrame(frame); }
    });

    window.addEventListener('resize', () => {
        clearTimeout(window._starResizeT);
        window._starResizeT = setTimeout(resize, 200);
    });
    resize();
    raf = requestAnimationFrame(frame);
    setTimeout(spawnShooting, 3500);
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

    // Language buttons (refrescan también la fase lunar)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.getAttribute('data-lang'));
            setTimeout(() => {
                const theme = document.documentElement.getAttribute('data-theme') || 'dark';
                updateMoonPhase(theme);
            }, 60);
        });
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
    initStarfield();
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
translations.en['form.mailto'] = 'Opening your mail app to send the message…';

translations.es['form.name'] = 'Nombre';
translations.es['form.email'] = 'Email';
translations.es['form.message'] = 'Mensaje';
translations.es['form.submit'] = 'Enviar Mensaje';
translations.es['form.sending'] = 'Enviando...';
translations.es['form.success'] = '¡Mensaje enviado con éxito!';
translations.es['form.error'] = 'Error al enviar. Intenta de nuevo.';
translations.es['form.mailto'] = 'Abriendo tu app de correo para enviar el mensaje…';
translations.en['hero.scroll'] = 'Scroll to explore the orbit';
translations.es['hero.scroll'] = 'Desliza para explorar la órbita';

// ========================================
// DOSSIER TRANSLATIONS
// ========================================
translations.en['project.stamp'] = 'Featured ★';
translations.en['project.meta.role'] = 'Role';
translations.en['project.meta.state'] = 'Status';
translations.en['project.meta.core'] = 'Core';
translations.en['project.garage.frole'] = 'End-to-end backend';
translations.en['project.garage.fstate'] = 'Done · documented';
translations.en['project.garage.fcore'] = 'FastAPI · PostgreSQL';
translations.en['project.respira-cali.frole'] = 'Frontend + public API';
translations.en['project.respira-cali.fstate'] = 'Done';
translations.en['project.respira-cali.fcore'] = 'JS · REST';
translations.en['project.vehicle-management-frontend.frole'] = 'Framework-free SPA';
translations.en['project.vehicle-management-frontend.fstate'] = 'Done';
translations.en['project.vehicle-management-frontend.fcore'] = 'Vanilla JS · JWT';

translations.es['project.stamp'] = 'Destacado ★';
translations.es['project.meta.role'] = 'Rol';
translations.es['project.meta.state'] = 'Estado';
translations.es['project.meta.core'] = 'Núcleo';
translations.es['project.garage.frole'] = 'Backend end-to-end';
translations.es['project.garage.fstate'] = 'Completado · documentado';
translations.es['project.garage.fcore'] = 'FastAPI · PostgreSQL';
translations.es['project.respira-cali.frole'] = 'Frontend + API pública';
translations.es['project.respira-cali.fstate'] = 'Completado';
translations.es['project.respira-cali.fcore'] = 'JS · REST';
translations.es['project.vehicle-management-frontend.frole'] = 'SPA sin framework';
translations.es['project.vehicle-management-frontend.fstate'] = 'Completado';
translations.es['project.vehicle-management-frontend.fcore'] = 'Vanilla JS · JWT';
