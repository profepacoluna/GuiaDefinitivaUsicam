/* ══════════════════════════════════════════════
   EduGuía USICAMM · script.js
   Prof. Francisco de Jesús Luna Benítez
   ══════════════════════════════════════════════

   ┌─────────────────────────────────────────┐
   │  CONFIGURACIÓN — edita SOLO esta zona   │
   └─────────────────────────────────────────┘ */

/**
 * SIMULADORES
 * ──────────────────────────────────────────
 * Agrega aquí un objeto por cada simulador HTML.
 * - file   : ruta relativa al archivo HTML dentro del repo
 * - title  : nombre que se mostrará en la tarjeta
 * - icon   : emoji o SVG como string
 * - desc   : descripción breve (opcional)
 * - tag    : etiqueta de categoría (opcional)
 *
 * EJEMPLO:
 *   { file: "simuladores/promocion-horizontal.html",
 *     title: "Promoción Horizontal",
 *     icon: "📊",
 *     desc: "30 preguntas con retroalimentación inmediata.",
 *     tag: "Carrera docente" }
 */
const SIMULADORES = [

  // ── NEM y Marco Curricular ──────────────────────────────────
  {
    file:  "simuladores/simulador_NEM_2022.html",
    title: "Nueva Escuela Mexicana 2022",
    icon:  "🏛️",
    desc:  "Domina los fundamentos, principios y estructura curricular de la NEM y el Plan de Estudios 2022.",
    tag:   "Marco curricular"
  },
  {
    file:  "simuladores/simulador_acuerdo_17_05_25.html",
    title: "Acuerdo 17/05/25",
    icon:  "⚖️",
    desc:  "Reactivos sobre el Acuerdo 17/05/25 y su aplicación normativa en educación básica.",
    tag:   "Normativa"
  },
  {
    file:  "simuladores/simulador_fase3_luna.html",
    title: "Programa Sintético Fase 3",
    icon:  "📋",
    desc:  "Evalúa tu comprensión del Programa Sintético de la Fase 3 del Plan de Estudios 2022.",
    tag:   "Marco curricular"
  },

  // ── Planeación y Programación ───────────────────────────────
  {
    file:  "simuladores/simulador_programa_analitico.html",
    title: "Programa Analítico",
    icon:  "📑",
    desc:  "Preguntas sobre la elaboración, estructura y elementos del Programa Analítico escolar.",
    tag:   "Planeación"
  },
  {
    file:  "simuladores/simulador_planeacion_didactica.html",
    title: "Planeación Didáctica",
    icon:  "🗂️",
    desc:  "Pon a prueba tus conocimientos sobre el diseño de situaciones didácticas alineadas a la NEM.",
    tag:   "Planeación"
  },
  {
    file:  "simuladores/simulador_planificacion_didactica.html",
    title: "Arquitectura de la Planificación Didáctica",
    icon:  "🏗️",
    desc:  "Profundiza en los componentes estructurales de la planificación didáctica en educación básica.",
    tag:   "Planeación"
  },
  {
    file:  "simuladores/simulador_pmc.html",
    title: "Proceso de Mejora Continua (PMC)",
    icon:  "📈",
    desc:  "30 preguntas sobre el PMC para escuelas de Educación Básica con retroalimentación inmediata.",
    tag:   "Gestión escolar"
  },

  // ── Consejos Técnicos ───────────────────────────────────────
  {
    file:  "simuladores/simulador_CTE.html",
    title: "Consejo Técnico Escolar (CTE)",
    icon:  "🏫",
    desc:  "Evalúa tu conocimiento sobre el funcionamiento, fases y productos del CTE.",
    tag:   "Gestión escolar"
  },
  {
    file:  "simuladores/simulador_CTE_CA.html",
    title: "CTE – Comunidad de Aprendizaje",
    icon:  "👥",
    desc:  "Preguntas sobre el CTE como espacio de comunidad profesional de aprendizaje entre docentes.",
    tag:   "Gestión escolar"
  },

  // ── Evaluación y Aprendizaje ────────────────────────────────
  {
    file:  "simuladores/simulador_evaluacion_formativa.html",
    title: "Evaluación Formativa",
    icon:  "📝",
    desc:  "Reactivos sobre instrumentos, estrategias y propósitos de la evaluación formativa en el aula.",
    tag:   "Evaluación"
  },
  {
    file:  "simuladores/simulador_ecosistema_aprendizaje.html",
    title: "El Ecosistema del Aprendizaje",
    icon:  "🌱",
    desc:  "Teorías del aprendizaje adaptativo y su aplicación práctica en el aula contemporánea.",
    tag:   "Aprendizaje"
  },

  // ── Ciencia y STEAM ─────────────────────────────────────────
  {
    file:  "simuladores/simulador_STEAM.html",
    title: "Educación STEAM",
    icon:  "🔬",
    desc:  "Preguntas sobre el enfoque STEAM integrado al currículo de educación básica.",
    tag:   "STEAM"
  },
  {
    file:  "simuladores/simulador_ciencia_escolar.html",
    title: "La Ciencia Escolar en Secundaria",
    icon:  "🧪",
    desc:  "Domina los fundamentos del pensamiento científico escolar en el nivel secundaria.",
    tag:   "STEAM"
  },

  // ── Convivencia y Valores ───────────────────────────────────
  {
    file:  "simuladores/simulador_acoso_escolar.html",
    title: "Anatomía del Acoso Escolar",
    icon:  "🛡️",
    desc:  "Identifica tipos, actores e intervenciones ante el acoso escolar según la normativa vigente.",
    tag:   "Convivencia"
  },
  {
    file:  "simuladores/simulador_convivencia.html",
    title: "El Laboratorio de la Convivencia",
    icon:  "🤝",
    desc:  "Reactivos sobre estrategias de convivencia pacífica y resolución de conflictos en la escuela.",
    tag:   "Convivencia"
  },
  {
    file:  "simuladores/simulador_cultura_paz.html",
    title: "Cultura de Paz y Educación Inclusiva",
    icon:  "☮️",
    desc:  "Evalúa tus conocimientos sobre inclusión, equidad y cultura de paz en el entorno escolar.",
    tag:   "Convivencia"
  },
  {
    file:  "simuladores/simulador_equidad.html",
    title: "Construyendo Equidad",
    icon:  "⚖️",
    desc:  "Preguntas sobre equidad de género, inclusión y diversidad en la práctica docente.",
    tag:   "Convivencia"
  },

  // ── Desarrollo y Psicología ─────────────────────────────────
  {
    file:  "simuladores/simulador_mente_infantil.html",
    title: "El Plano de la Mente Infantil",
    icon:  "🧠",
    desc:  "30 reactivos sobre los grandes teóricos del desarrollo: Piaget, Vygotsky, Erikson y más.",
    tag:   "Psicología educativa"
  },
  {
    file:  "simuladores/simulador_comunicacion_expresion.html",
    title: "Comunicación y Expresión Comunitaria",
    icon:  "🗣️",
    desc:  "Explora los fundamentos de la comunicación y la expresión en contextos educativos comunitarios.",
    tag:   "Lenguaje"
  },

  // ── Salud ───────────────────────────────────────────────────
  {
    file:  "simuladores/simulador_vida_saludable.html",
    title: "Estrategia Nacional Vida Saludable",
    icon:  "❤️",
    desc:  "Reactivos sobre la Estrategia Nacional de Vida Saludable y su implementación escolar.",
    tag:   "Salud"
  }

  // ── Normativa y Marco Legal ─────────────────────────────────
  {
    file:  "simuladores/simulador_art3_art4.html",
    title: "Artículos 3° y 4° Constitucionales",
    icon:  "📜",
    desc:  "Evalúa tu dominio de los artículos 3° y 4° de la Constitución Política de los Estados Unidos Mexicanos.",
    tag:   "Normativa"
  },
  {
    file:  "simuladores/simulador_lge.html",
    title: "Ley General de Educación (LGE)",
    icon:  "⚖️",
    desc:  "Reactivos sobre los principios, derechos y obligaciones establecidos en la Ley General de Educación.",
    tag:   "Normativa"
  },
  {
    file:  "simuladores/simulador_lgdnna.html",
    title: "LGDNNA – Derechos de Niñas, Niños y Adolescentes",
    icon:  "👧",
    desc:  "Preguntas sobre la Ley General de los Derechos de Niñas, Niños y Adolescentes y su aplicación escolar.",
    tag:   "Normativa"
  },
  {
    file:  "simuladores/simulador_acoso_escolar_14_12_23.html",
    title: "Acuerdo 14/12/23 – Acoso Escolar",
    icon:  "🛡️",
    desc:  "Normativa y protocolos del Acuerdo 14/12/23 para la prevención y atención del acoso escolar.",
    tag:   "Normativa"
  },

  // ── Psicología educativa (ampliación) ───────────────────────
  {
    file:  "simuladores/simulador_vygotsky.html",
    title: "Vygotsky y las Herramientas de la Mente",
    icon:  "🧠",
    desc:  "Profundiza en la teoría sociocultural de Vygotsky: ZDP, herramientas psicológicas y mediación.",
    tag:   "Psicología educativa"
  },

  // ── Convivencia y salud escolar (ampliación) ─────────────────
  {
    file:  "simuladores/simulador_ecosistema_escolar.html",
    title: "Ecosistema Escolar Saludable",
    icon:  "🌿",
    desc:  "Estrategias y dimensiones para construir un ecosistema escolar inclusivo, seguro y saludable.",
    tag:   "Salud"
  }

  /* ── Añade más simuladores aquí debajo ── */
];

/**
 * VIDEOS DE TIKTOK
 * ──────────────────────────────────────────
 * Pega el enlace de cada video de TikTok.
 * Para cada video necesitas el VIDEO ID (número largo al final de la URL).
 *
 * URL de ejemplo:
 *   https://www.tiktok.com/@profefrancisco/video/7312345678901234567
 *   ID ────────────────────────────────────────────────────────────────► 7312345678901234567
 *
 * - id    : ID del video (sólo el número)
 * - title : título descriptivo del video
 * - desc  : descripción breve (opcional)
 */
const VIDEOS = [

  {
    id:    "7626972730247761160",
    title: "Video educativo – @profelunamx",
    desc:  "Contenido de preparación docente por el Prof. Francisco de Jesús Luna Benítez."
  },
  {
    id:    "7626591319414033672",
    title: "Video educativo – @profelunamx",
    desc:  "Contenido de preparación docente por el Prof. Francisco de Jesús Luna Benítez."
  },
  {
    id:    "7625756315356237064",
    title: "Video educativo – @profelunamx",
    desc:  "Contenido de preparación docente por el Prof. Francisco de Jesús Luna Benítez."
  },
  {
    id:    "7625669127683722503",
    title: "Video educativo – @profelunamx",
    desc:  "Contenido de preparación docente por el Prof. Francisco de Jesús Luna Benítez."
  },
  {
    id:    "7625297055128292616",
    title: "Video educativo – @profelunamx",
    desc:  "Contenido de preparación docente por el Prof. Francisco de Jesús Luna Benítez."
  },
  {
    id:    "7625311676635598087",
    title: "Video educativo – @profelunamx",
    desc:  "Contenido de preparación docente por el Prof. Francisco de Jesús Luna Benítez."
  }

  /* ── Añade más videos aquí debajo ── */
];

/* ══════════════════════════════════════════════
   FIN DE LA ZONA DE CONFIGURACIÓN
   No es necesario editar debajo de esta línea
   a menos que quieras personalizar el código.
══════════════════════════════════════════════ */


// ── Iconos de respaldo según palabras clave ──
const ICON_MAP = [
  { keys: ["horizontal","carrera","promocion"], icon: "📊" },
  { keys: ["admision","básica","basica","servicio"], icon: "🏫" },
  { keys: ["hora","adicional","tiempo"], icon: "⏰" },
  { keys: ["matemat","numero","calculo"], icon: "🔢" },
  { keys: ["psicolog","mente","cognitiv"], icon: "🧠" },
  { keys: ["lectura","comprension","lengua"], icon: "📖" },
  { keys: ["evaluacion","examen","evaluac"], icon: "📝" },
  { keys: ["historia","social","humanidades"], icon: "🌎" },
  { keys: ["ciencia","biolog","quimic","fisic"], icon: "🔬" },
  { keys: ["acoso","bullying","convivencia"], icon: "🤝" },
  { keys: ["salud","saludable","vida"], icon: "❤️‍🔥" },
  { keys: ["reglamento","norma","acuerdo","ley"], icon: "⚖️" },
  { keys: ["tecnolog","digital","comput"], icon: "💻" },
];

function guessIcon(title) {
  const t = title.toLowerCase();
  for (const { keys, icon } of ICON_MAP) {
    if (keys.some(k => t.includes(k))) return icon;
  }
  return "🎓";
}

// ── COLORES de gradiente para las tarjetas (ciclo) ──
const CARD_COLORS = [
  ["#1d6fe8","#38bdf8"],
  ["#38bdf8","#818cf8"],
  ["#6366f1","#a78bfa"],
  ["#0ea5e9","#22d3ee"],
  ["#8b5cf6","#d946ef"],
  ["#0284c7","#38bdf8"],
];

// ── Referencia a DOM ──
const simGrid    = document.getElementById("sim-grid");
const simEmpty   = document.getElementById("sim-empty");
const countBadge = document.getElementById("sim-count-badge");
const heroSimCnt = document.getElementById("sim-count-hero");
const heroVidCnt = document.getElementById("vid-count-hero");
const vidGrid    = document.getElementById("vid-grid");
const vidEmpty   = document.getElementById("vid-empty");

let allCards = []; // para el filtro de búsqueda

// ════════════════════════════════════════
// RENDER SIMULADORES
// ════════════════════════════════════════
function renderSimuladores() {
  heroSimCnt.textContent = SIMULADORES.length;
  countBadge.textContent = `${SIMULADORES.length} simulador${SIMULADORES.length !== 1 ? "es" : ""}`;

  if (SIMULADORES.length === 0) {
    simEmpty.style.display = "block";
    simEmpty.querySelector("p").textContent =
      "Aún no hay simuladores registrados. Agrega archivos HTML en la carpeta «simuladores/» y configúralos en script.js.";
    simEmpty.querySelector(".empty-icon").textContent = "📂";
    return;
  }

  SIMULADORES.forEach((sim, i) => {
    const icon  = sim.icon || guessIcon(sim.title);
    const [c1, c2] = CARD_COLORS[i % CARD_COLORS.length];
    const delay = (i * 80) + "ms";

    const card = document.createElement("div");
    card.className = "sim-card";
    card.dataset.title = sim.title.toLowerCase();
    card.dataset.tag   = (sim.tag || "").toLowerCase();
    card.style.animationDelay = delay;

    card.innerHTML = `
      <span class="card-num">${String(i + 1).padStart(2,"0")}</span>

      <div class="card-icon-wrap" style="background:linear-gradient(135deg,${c1}18,${c2}28);border-color:${c1}22">
        <span style="font-size:1.5rem">${icon}</span>
      </div>

      ${sim.tag ? `<span style="font-size:.72rem;font-weight:700;color:${c1};text-transform:uppercase;letter-spacing:.06em">${sim.tag}</span>` : ""}

      <div class="card-title">${sim.title}</div>

      ${sim.desc ? `<div class="card-subtitle">${sim.desc}</div>` : ""}

      <div class="card-meta">
        <span class="card-dot"></span>
        Simulador interactivo · HTML
      </div>

      <a href="${sim.file}" class="card-btn" target="_blank" rel="noopener">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
        Abrir Simulador
      </a>`;

    simGrid.appendChild(card);
    allCards.push(card);
  });
}

// ════════════════════════════════════════
// FILTRO: búsqueda + categoría combinados
// ════════════════════════════════════════
let activeCat = ""; // categoría activa

function filterSimuladores() {
  const q     = (document.getElementById("sim-search").value || "").trim().toLowerCase();
  const cat   = activeCat.toLowerCase();
  const clearBtn = document.getElementById("clear-btn");
  clearBtn.style.display = (q || cat) ? "block" : "none";

  let visible = 0;
  allCards.forEach(card => {
    const matchQ   = !q   || card.dataset.title.includes(q) || card.dataset.tag.includes(q);
    const matchCat = !cat || card.dataset.tag.toLowerCase() === cat;
    const show = matchQ && matchCat;
    card.style.display = show ? "" : "none";
    if (show) visible++;
  });

  countBadge.textContent = `${visible} simulador${visible !== 1 ? "es" : ""}`;
  simEmpty.style.display  = visible === 0 ? "block" : "none";
}

function clearSearch() {
  document.getElementById("sim-search").value = "";
  activeCat = "";
  document.querySelectorAll(".cat-item").forEach(el => el.classList.remove("active"));
  document.querySelector(".cat-item[data-cat='']").classList.add("active");
  document.getElementById("cat-label").textContent = "Todas las categorías";
  closeCatMenu();
  filterSimuladores();
  document.getElementById("sim-search").focus();
}

// ════════════════════════════════════════
// DROPDOWN DE CATEGORÍAS
// ════════════════════════════════════════
function toggleDropdown() {
  const dd   = document.getElementById("cat-dropdown");
  const menu = document.getElementById("cat-menu");
  dd.classList.toggle("open");
  menu.classList.toggle("open");
}

function closeCatMenu() {
  document.getElementById("cat-dropdown").classList.remove("open");
  document.getElementById("cat-menu").classList.remove("open");
}

function selectCat(el) {
  activeCat = el.dataset.cat;
  document.querySelectorAll(".cat-item").forEach(i => i.classList.remove("active"));
  el.classList.add("active");

  // Actualizar label (quitar el emoji del texto visible)
  const raw = el.textContent.trim();
  document.getElementById("cat-label").textContent =
    activeCat === "" ? "Todas las categorías" : raw;

  closeCatMenu();
  filterSimuladores();
}

// Cerrar dropdown al hacer clic fuera
document.addEventListener("click", e => {
  const wrap = document.getElementById("cat-dropdown")?.closest(".cat-dropdown-wrap");
  if (wrap && !wrap.contains(e.target)) closeCatMenu();
});

// ════════════════════════════════════════
// RENDER VIDEOS TIKTOK
// ════════════════════════════════════════
function renderVideos() {
  heroVidCnt.textContent = VIDEOS.length;

  if (VIDEOS.length === 0) {
    vidEmpty.style.display = "block";
    return;
  }

  VIDEOS.forEach((vid, i) => {
    const card = document.createElement("div");
    card.className = "vid-card";
    card.style.animationDelay = (i * 100) + "ms";

    // URL del embed de TikTok
    const embedUrl = `https://www.tiktok.com/embed/v2/${vid.id}`;
    const directUrl = `https://www.tiktok.com/video/${vid.id}`;

    card.innerHTML = `
      <div class="vid-embed-wrap">
        <iframe
          src="${embedUrl}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          loading="lazy"
          title="${vid.title || 'Video educativo'}"
        ></iframe>
      </div>
      <div class="vid-info">
        <div class="vid-platform">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
          </svg>
          TikTok
        </div>
        <div class="vid-title">${vid.title || "Video educativo"}</div>
        ${vid.desc ? `<div class="vid-desc">${vid.desc}</div>` : ""}
        <a href="${directUrl}" target="_blank" rel="noopener" class="vid-open-btn">
          Ver en TikTok
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
      </div>`;

    vidGrid.appendChild(card);
  });
}

// ════════════════════════════════════════
// ANIMACIONES DE SCROLL (IntersectionObserver)
// ════════════════════════════════════════
function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll(".reveal, .reveal-right").forEach(el => observer.observe(el));
}

// ════════════════════════════════════════
// NAVBAR — cambio al hacer scroll
// ════════════════════════════════════════
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const links  = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);

    // Active link
    let current = "";
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    links.forEach(l => {
      l.classList.toggle("active", l.getAttribute("href") === "#" + current);
    });
  }, { passive: true });
}

// ════════════════════════════════════════
// HAMBURGER (móvil)
// ════════════════════════════════════════
function initHamburger() {
  const btn  = document.getElementById("hamburger");
  const menu = document.getElementById("mobile-menu");
  const spans = btn.querySelectorAll("span");

  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    // Animación hamburger → X
    if (open) {
      spans[0].style.transform = "rotate(45deg) translate(5px,5px)";
      spans[1].style.opacity   = "0";
      spans[2].style.transform = "rotate(-45deg) translate(5px,-5px)";
    } else {
      spans.forEach(s => { s.style.transform = ""; s.style.opacity = ""; });
    }
  });

  // Cerrar al elegir enlace
  menu.querySelectorAll(".mob-link").forEach(l => l.addEventListener("click", () => {
    menu.classList.remove("open");
    spans.forEach(s => { s.style.transform = ""; s.style.opacity = ""; });
  }));
}

// ════════════════════════════════════════
// CANVAS DE PARTÍCULAS
// ════════════════════════════════════════
function initParticles() {
  const canvas = document.getElementById("particles-canvas");
  const ctx    = canvas.getContext("2d");
  let particles = [];
  const COUNT  = 55;

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize, { passive: true });

  for (let i = 0; i < COUNT; i++) {
    particles.push({
      x:  Math.random() * canvas.width,
      y:  Math.random() * canvas.height,
      r:  Math.random() * 2 + .5,
      vx: (Math.random() - .5) * .3,
      vy: (Math.random() - .5) * .3,
      a:  Math.random() * .5 + .1,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Líneas entre partículas cercanas
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(29,111,232,${.08 * (1 - dist / 120)})`;
          ctx.lineWidth = .8;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Puntos
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(56,189,248,${p.a})`;
      ctx.fill();

      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    });

    requestAnimationFrame(draw);
  }
  draw();
}

// ════════════════════════════════════════
// INIT
// ════════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
  renderSimuladores();
  renderVideos();
  initScrollReveal();
  initNavbar();
  initHamburger();
  initParticles();

  // Si no hay videos, ocultar grid vacío al inicio
  if (VIDEOS.length === 0) vidEmpty.style.display = "block";
});
