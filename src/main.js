// ── THEME ──
let theme = localStorage.getItem('theme') || 'light';
document.body.setAttribute('data-theme', theme);

document.getElementById('themeBtn').addEventListener('click', () => {
    theme = theme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
});

// ── LANGUAGE ──
const translations = {
    en: {
        eyebrow: 'Backend Developer · Argentina',
        tagline: 'APIs · Databases · Cloud Infrastructure',
        aboutLabel: 'About',
        aboutText: 'Backend developer focused on building scalable systems in Java. I design databases, craft RESTful APIs, and work with distributed architectures and microservices. Currently exploring secret management and zero-trust security patterns.',
        projectsLabel: 'Projects',
        proj1Desc: 'Distributed authentication proof-of-concept built with Spring Boot 4 and WebFlux. Offloads all credential management and JWT cryptographic signing to OpenBao (a HashiCorp Vault fork), keeping the application itself fully stateless and secret-free. Fully containerized with Docker Compose — Postgres, OpenBao, and the app spin up with a single command.',
        proj2Desc: "CLI tool that auto-generates README documentation for any codebase using Claude AI. Runs repomix to extract the project's file tree and source, then streams a tailored response from Claude Haiku in three modes: concise overview, verbose per-method docs, or public-facing onboarding guide. Estimates token cost before sending.",
        contactLabel: 'Contact',
        emailLabel: 'Email',
        footerBuilt: 'Built with HTML — no frameworks',
    },
    es: {
        eyebrow: 'Desarrollador Backend · Argentina',
        tagline: 'APIs · Bases de Datos · Infraestructura Cloud',
        aboutLabel: 'Sobre mí',
        aboutText: 'Desarrollador backend especializado en sistemas escalables en Java. Diseño bases de datos, construyo APIs REST y trabajo con arquitecturas distribuidas y microservicios. Actualmente explorando gestión de secretos y patrones de seguridad zero-trust.',
        projectsLabel: 'Proyectos',
        proj1Desc: 'Prueba de concepto de autenticación distribuida con Spring Boot 4 y WebFlux. Delega la gestión de credenciales y la firma criptográfica de JWT a OpenBao, manteniendo la aplicación completamente sin estado. Todo containerizado con Docker Compose.',
        proj2Desc: 'Herramienta CLI que genera documentación README automáticamente usando Claude AI. Extrae el árbol de archivos con repomix y transmite una respuesta personalizada de Claude Haiku en tres modos: resumen conciso, docs detallados por método, o guía de incorporación pública.',
        contactLabel: 'Contacto',
        emailLabel: 'Correo',
        footerBuilt: 'Hecho con HTML — sin frameworks',
    }
};

let lang = localStorage.getItem('lang') || 'en';

function applyLang() {
    const t = translations[lang];
    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        if (t[key]) el.textContent = t[key];
    });
    document.documentElement.lang = lang;
}

document.getElementById('langBtn').addEventListener('click', () => {
    lang = lang === 'en' ? 'es' : 'en';
    localStorage.setItem('lang', lang);
    applyLang();
});

applyLang();

// ── SCROLL REVEAL ──
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('section').forEach(s => observer.observe(s));
