/**
 * IMAD IBRAHIM — PORTFOLIO CLIENT ENGINE
 * Handles ambient background particle network, typewriter animation,
 * interactive project showcases, modals, CLI terminal, and toast alerts.
 */

// ==========================================
// 1. PROJECT DATA ARCHITECTURE
// ==========================================
const PROJECTS = [
  {
    id: 'flight-miles',
    title: 'Flight-Miles (Flightpoints-iOS)',
    category: 'ios',
    categoryLabel: 'Native iOS & SwiftUI',
    summary: 'Flagship native iOS application engineered with SwiftUI and modern MVVM. Integrates Adapty subscriptions & paywalls, Mixpanel, Microsoft Clarity, Firebase, and Meta tracking with deep flight search caching.',
    tags: ['SwiftUI', 'Adapty Paywalls', 'Mixpanel SDK', 'Microsoft Clarity', 'Firebase', 'MVVM'],
    github: 'https://github.com/imadibrahimk',
    architecture: `+-------------------------------------------------------------+
|                     SwiftUI View Layer                      |
| (WindowGroup, NavigationStack, PaywallView, FlightSearch)   |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
|                     MVVM Controllers                        |
|  - AdaptyUserManager (Purchases & Remote Paywall Payloads)  |
|  - AnalyticsManager (Mixpanel, Clarity, Firebase, Meta)     |
|  - AirportDataManager & FilterManager                       |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
|                 Services & Foundation Core                  |
|  - NetworkManager (REST API & Rate-limit Handling)          |
|  - Recursive Mixpanel Property Serializer                   |
|  - UserDefaults & Local Caching Engine                      |
+-------------------------------------------------------------+`,
    highlights: [
      'Engineered dynamic in-app purchase and subscription paywalls using Adapty SDK, enabling remote UI experiments without App Store reviews.',
      'Designed a multi-provider analytics architecture synchronizing telemetry across Mixpanel, Microsoft Clarity, Firebase, and Meta.',
      'Implemented custom recursive property serialization for Mixpanel to cleanly capture complex nested purchase arrays and checkout items.',
      'Constructed optimized local airport search caches for sub-10ms query response on device.'
    ]
  },
  {
    id: 'render-keepalive',
    title: 'RenderKeepAlive Daemon',
    category: 'cloud',
    categoryLabel: 'Cloud Resilience',
    summary: 'High-efficiency Deno and TypeScript daemon engineered to keep Render server instances awake 24/7, completely preventing cold-start spin-down penalties.',
    tags: ['Deno', 'TypeScript', 'Cloud Automation', 'Heartbeat', 'Uptime'],
    github: 'https://github.com/imadibrahimk/RenderKeepAlive',
    architecture: `[Cloud Scheduler / Deno Runtime]
         |
         +--> [Scheduled Ping Loop] (Configurable Interval)
         |            |
         |            +--> HTTP GET /healthz --> [Target Service]
         |            |                                |
         |            +<-- 200 OK Response <-----------+
         |
         +--> [Error Interceptor] --> (Exponential Backoff Alert)`,
    highlights: [
      'Eliminated 30-50 second cold-start delays on free/hobby container tiers across deployed services.',
      'Built with Deno and native TypeScript for ultra-low memory footprint (~12MB RSS).',
      'Configurable target URLs, interval timers, and error alerting mechanisms.'
    ]
  },
  {
    id: 'mongo-autocomplete',
    title: 'MongoDB Autocomplete Search',
    category: 'cloud',
    categoryLabel: 'Database & Backend',
    summary: 'Sub-50ms real-time autocomplete search engine utilizing Node.js, Express, and MongoDB Atlas aggregation pipelines to deliver fuzzy suggestion queries as users type.',
    tags: ['Node.js', 'Express', 'MongoDB Atlas', 'Fuzzy Search', 'Aggregations'],
    github: 'https://github.com/imadibrahimk/MongoDB-Autocomplete-Search',
    architecture: `[Client Search Input] 
         |  (Debounced Keystroke stream)
         v
[Express API Gateway] (/api/search?q=...)
         |
         v
[MongoDB Atlas Search Engine]
  - Compound Index (text + ngram)
  - Auto-suggest aggregation pipeline
  - Fuzzy tolerance (maxEdits: 2)
         |
         v
[Instant JSON Suggestion Response] (< 45ms latency)`,
    highlights: [
      'Leveraged MongoDB Atlas Search autocomplete operators and tokenization for typo-tolerant queries.',
      'Debounced frontend keystroke dispatcher preventing API flood.',
      'Engineered modular Express router designed for drop-in inclusion into enterprise catalogs.'
    ]
  },
  {
    id: 'stock-scraper',
    title: 'StockSymbolScraper Pipeline',
    category: 'tools',
    categoryLabel: 'Data Intelligence',
    summary: 'Automated Python data pipeline harvesting stock symbols, fundamental financial ratios, and market metrics from Screener.in with structured PDF and text output.',
    tags: ['Python', 'BeautifulSoup', 'Data Scraping', 'PDF Generation', 'Automation'],
    github: 'https://github.com/imadibrahimk/StockSymbolScraper',
    architecture: `[Screener.in Web Sources]
         |
         v
[Python BeautifulSoup Engine]
  - Session Headers & Throttling
  - HTML Table Parser
  - Financial Metric Normalization
         |
         v
[Export Pipelines]
  +--> Structured CSV/TXT Data
  +--> Formatted PDF Report Document`,
    highlights: [
      'Automated tedious manual data collection across hundreds of equity listings.',
      'Resilient DOM parsing capable of withstanding minor web structure adjustments.',
      'Integrated PDF rendering generating clean executive data summaries.'
    ]
  },
  {
    id: 'thanos-snap',
    title: 'Thanos Snap Particle Engine',
    category: 'tools',
    categoryLabel: 'Interactive Canvas',
    summary: 'Browser-based particle simulation replicating the cinematic Thanos disintegration effect using HTML5 Canvas pixel manipulation and physics calculations.',
    tags: ['JavaScript', 'HTML5 Canvas', 'Particle Simulation', 'Math/Physics'],
    github: 'https://github.com/imadibrahimk/thanos_snap',
    architecture: `[Source DOM Element]
         |
         v (html2canvas / rasterization)
[Pixel Matrix Analysis] (getImageData)
         |
         v (Slice into N canvas slices with Perlin-style noise)
[Individual Particle Physics]
  - dx, dy velocity vectors
  - Rotation & Opacity decay loop
         |
         v
[Smooth RequestAnimationFrame Canvas Render]`,
    highlights: [
      'Direct manipulation of ImageData buffer array for performant particle slicing.',
      'Organic dispersion simulation incorporating randomized velocity vectors and fading alpha.',
      'Zero external graphics library dependencies; 100% native Canvas 2D API.'
    ]
  },
  {
    id: 'social-book',
    title: 'Social Book Community Platform',
    category: 'tools',
    categoryLabel: 'Full-Stack Web',
    summary: 'Full-featured Python & Django social network application incorporating authenticated user feeds, profile customization, post timelines, and media attachments.',
    tags: ['Python', 'Django', 'SQLite/Postgres', 'Authentication', 'Full-Stack'],
    github: 'https://github.com/imadibrahimk/social_book',
    architecture: `[Django MVT Architecture]
  - Models: UserProfile, Post, Like, Follower
  - Views: Session Auth, Feed Algorithm, Media Uploads
  - Templates: Responsive HTML5/CSS3 Views
         |
         v
[Relational Database Storage]`,
    highlights: [
      'Robust session-based authentication and profile management workflows.',
      'Dynamic feed rendering featuring relational likes, comments, and follower streams.',
      'Secure media upload handlers and input validation sanitization.'
    ]
  }
];

// ==========================================
// 2. AMBIENT CANVAS BACKGROUND
// ==========================================
function initAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = Math.min(Math.floor(window.innerWidth / 22), 65);
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.8 + 0.6,
      alpha: Math.random() * 0.4 + 0.15
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
      ctx.fill();

      // Connect near particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(129, 140, 248, ${0.12 * (1 - dist / 130)})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(render);
  }

  render();
}

// ==========================================
// 3. TYPEWRITER EFFECT
// ==========================================
function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const roles = [
    'iOS Lead @ Lascade.',
    'SwiftUI & MVVM Architect.',
    'Monetization & Analytics Specialist.',
    'Creative Software Technologist.'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let delay = 100;

  function type() {
    const current = roles[roleIdx];

    if (isDeleting) {
      el.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      delay = 45;
    } else {
      el.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      delay = 95;
    }

    if (!isDeleting && charIdx === current.length) {
      delay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}

// ==========================================
// 4. PROJECT SHOWCASE & FILTERING
// ==========================================
function renderProjects(filter = 'all') {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const filtered = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  container.innerHTML = filtered.map(p => `
    <article class="project-card glass-panel" data-id="${p.id}">
      <div class="project-top-row">
        <span class="project-category-badge">${p.categoryLabel}</span>
        <div class="project-external-links">
          <a href="${p.github}" target="_blank" rel="noopener" class="project-link-icon" title="View Source on GitHub">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
        </div>
      </div>

      <h3 class="project-title">${p.title}</h3>
      <p class="project-description">${p.summary}</p>

      <div class="project-tech-stack">
        ${p.tags.map(t => `<span class="tech-chip">${t}</span>`).join('')}
      </div>

      <div class="project-footer-row">
        <button class="project-detail-btn" onclick="openProjectModal('${p.id}')">
          <span>Architecture & Details</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </article>
  `).join('');
}

function initProjectFilters() {
  const tabs = document.querySelectorAll('.filter-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.getAttribute('data-filter');
      renderProjects(filter);
    });
  });
}

// ==========================================
// 5. PROJECT DETAIL MODAL
// ==========================================
function openProjectModal(id) {
  const project = PROJECTS.find(p => p.id === id);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const content = document.getElementById('modal-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="modal-category">${project.categoryLabel}</div>
    <h2 class="modal-title">${project.title}</h2>
    <p class="modal-summary">${project.summary}</p>

    <div class="modal-section-h">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
      <span>System Architecture Blueprint</span>
    </div>
    <div class="arch-box">${project.architecture}</div>

    <div class="modal-section-h">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>Key Architectural Highlights & Innovations</span>
    </div>
    <ul class="modal-list">
      ${project.highlights.map(h => `<li>${h}</li>`).join('')}
    </ul>

    <div style="margin-top: 2rem; display: flex; gap: 1rem; align-items: center;">
      <a href="${project.github}" target="_blank" rel="noopener" class="btn btn-primary">
        <span>View on GitHub</span>
        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
      </a>
      <button class="btn btn-secondary" onclick="closeProjectModal()">Close</button>
    </div>
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Make globally accessible for inline onclick
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;

// ==========================================
// 6. CLI TERMINAL SYSTEM
// ==========================================
function initTerminal() {
  const drawer = document.getElementById('terminal-drawer');
  const toggleBtn = document.getElementById('terminal-btn');
  const mobileToggle = document.getElementById('mobile-terminal-btn');
  const closeBtn = document.getElementById('terminal-close-btn');
  const closeDot = document.getElementById('terminal-close-dot');
  const form = document.getElementById('terminal-form');
  const input = document.getElementById('terminal-input');
  const output = document.getElementById('terminal-output');

  if (!drawer || !form || !input || !output) return;

  function toggleTerminal() {
    drawer.classList.toggle('open');
    const isOpen = drawer.classList.contains('open');
    drawer.setAttribute('aria-hidden', !isOpen);
    if (isOpen) {
      setTimeout(() => input.focus(), 250);
    }
  }

  if (toggleBtn) toggleBtn.addEventListener('click', toggleTerminal);
  if (mobileToggle) mobileToggle.addEventListener('click', () => {
    document.getElementById('mobile-nav')?.classList.remove('open');
    toggleTerminal();
  });
  if (closeBtn) closeBtn.addEventListener('click', toggleTerminal);
  if (closeDot) closeDot.addEventListener('click', toggleTerminal);

  const COMMANDS = {
    help: () => `
Available commands:
  • <span class="term-cmd">about</span>       - Brief overview & engineering philosophy
  • <span class="term-cmd">experience</span>  - Career roadmap & roles (Lascade, Alforia)
  • <span class="term-cmd">projects</span>    - Catalog of featured apps and cloud tools
  • <span class="term-cmd">skills</span>      - Technical stack and core competencies
  • <span class="term-cmd">contact</span>     - Direct contact info & channels
  • <span class="term-cmd">hire</span>        - Open direct communication channel
  • <span class="term-cmd">clear</span>       - Clear the terminal console
`,
    about: () => `
Imad Ibrahim — iOS Lead at Lascade based in Kerala, India.
Specializes in high-performance native iOS architecture (SwiftUI, MVVM, Combine),
deep monetization telemetry (Adapty, Mixpanel, Clarity), and scalable full-stack services.
Core belief: "Coding is like playing games."
`,
    experience: () => `
[2025 - Present] iOS Lead @ Lascade
  - Architectural direction for flagship iOS apps.
  - Paywall & monetization optimization with Adapty.
  - Multi-provider analytics (Mixpanel, Clarity, Firebase, Meta).

[2023 - 2025] iOS Developer & Software Engineer @ Alforia Pvt Ltd
  - Native iOS product engineering & reusable UI design systems.
  - API networking client & persistent offline storage layers.

[2022 - Present] Independent Open-Source Creator
  - Over 25 GitHub repositories spanning Deno, Python, Node.js & Swift.
`,
    projects: () => `
1. Flight-Miles (Flightpoints-iOS) -> Flagship SwiftUI app with Adapty & Mixpanel
2. RenderKeepAlive                -> 24/7 Deno zero-cold-start cloud daemon
3. MongoDB-Autocomplete-Search    -> Sub-50ms fuzzy suggestions over Express
4. StockSymbolScraper             -> Screener.in financial parser & PDF engine
5. Thanos Snap Particle Engine    -> Canvas-based procedural pixel disintegration
6. Social Book Community          -> Django full-stack community application
`,
    skills: () => `
iOS & Mobile    : Swift 6.0, SwiftUI, UIKit, MVVM, Combine, CoreData, Xcode Instruments
Growth & Metrics: Adapty Paywalls, Mixpanel, MS Clarity, Firebase, Meta App Events
Cloud & Backend : Deno, TypeScript, Node.js, Express, MongoDB Atlas, Python, Django
Practices       : Git Flow, Clean Architecture, Performance Optimization, CI/CD
`,
    contact: () => `
Email        : imadibrahim164@gmail.com
GitHub       : https://github.com/imadibrahimk
LinkedIn     : https://www.linkedin.com/in/imadibrahimk/
StackOverflow: https://stackoverflow.com/users/19323608
Location     : Kerala, India (Remote worldwide)
`,
    hire: () => {
      window.location.href = 'mailto:imadibrahim164@gmail.com?subject=Engineering%20Opportunity';
      return 'Opening email client to imadibrahim164@gmail.com...';
    },
    sudo: () => 'Nice try! You already have root privileges as our guest.',
    clear: () => {
      output.innerHTML = '';
      return '';
    }
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const raw = input.value.trim();
    if (!raw) return;

    const cmd = raw.toLowerCase();
    input.value = '';

    // Append executed line
    const userLine = document.createElement('div');
    userLine.className = 'term-line';
    userLine.innerHTML = `<span class="term-prompt">imad@lascade:~$</span> ${escapeHTML(raw)}`;
    output.appendChild(userLine);

    if (COMMANDS[cmd]) {
      const res = COMMANDS[cmd]();
      if (res) {
        const resLine = document.createElement('div');
        resLine.className = 'term-line';
        resLine.innerHTML = res;
        output.appendChild(resLine);
      }
    } else {
      const errLine = document.createElement('div');
      errLine.className = 'term-line';
      errLine.style.color = '#fb7185';
      errLine.innerHTML = `command not found: ${escapeHTML(raw)}. Type <span class="term-cmd">help</span> for available commands.`;
      output.appendChild(errLine);
    }

    // Scroll to bottom
    const content = document.getElementById('terminal-content');
    if (content) content.scrollTop = content.scrollHeight;
  });
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

// ==========================================
// 7. TOAST & EMAIL COPY
// ==========================================
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3200);
}

function initCopyEmail() {
  const btn = document.getElementById('copy-email-btn');
  if (!btn) return;

  btn.addEventListener('click', async () => {
    const email = btn.getAttribute('data-email') || 'imadibrahim164@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      showToast('Email address copied to clipboard!');
    } catch {
      // Fallback
      showToast(`Email: ${email}`);
    }
  });
}

// ==========================================
// 8. CONTACT FORM HANDLER
// ==========================================
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name')?.value || '';
    const email = document.getElementById('contact-email')?.value || '';
    const subject = document.getElementById('contact-subject')?.value || 'Engineering Inquiry';
    const message = document.getElementById('contact-message')?.value || '';

    const body = encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`);
    const mailtoUrl = `mailto:imadibrahim164@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    window.location.href = mailtoUrl;
    showToast('Drafting your message to Imad Ibrahim...');
    form.reset();
  });
}

// ==========================================
// 9. NAVBAR SCROLL & MOBILE MENU
// ==========================================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  if (mobileBtn && mobileNav) {
    mobileBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });

    mobileNav.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
      });
    });
  }
}

// ==========================================
// 10. MODAL KEYBOARD & BACKDROP DISMISS
// ==========================================
function initModalListeners() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeProjectModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      document.getElementById('terminal-drawer')?.classList.remove('open');
    }
  });
}

// ==========================================
// BOOTSTRAP APPLICATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initAmbientCanvas();
  initTypewriter();
  renderProjects('all');
  initProjectFilters();
  initTerminal();
  initCopyEmail();
  initContactForm();
  initNavbar();
  initModalListeners();
});
