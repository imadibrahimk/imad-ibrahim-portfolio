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
    id: 'aswathy-achu-ai',
    title: 'Aswathy Achu — Kerala’s 1st Realistic AI Influencer & Virtual Model',
    category: 'ai',
    categoryLabel: 'Generative AI & Model Creation',
    summary: 'Led the generative AI pipeline as Head of AI Model Creation at Alforia to pioneer Kerala’s very first hyper-realistic AI influencer (@aswathy_achu.ai). Built automated local AI pipelines using Automatic1111 (A1111), custom LoRA models, ControlNet, and procedural video generation workflows.',
    tags: ['Automatic1111 (A1111)', 'Custom LoRA Training', 'Face Consistency', 'Stable Diffusion', 'AI Video Creation', 'Python Automation'],
    link: 'https://www.instagram.com/aswathy_achu.ai?utm_source=ig_web_button_share_sheet&xtok=ZDNlZDc0MzIxNw==',
    linkLabel: 'View on Instagram',
    isInstagram: true,
    architecture: `+-------------------------------------------------------------+
|              Head of AI Model Creation Pipeline             |
|   (Procedural Face Generation, Consistency & Identity)      |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
|            Automatic1111 (A1111) Local AI Engine            |
|  - Custom Trained LoRA Models for Distinct Facial Anatomy   |
|  - ControlNet Pose/Structure & Depth Preservation           |
|  - Latent High-Resolution Upscaling & Inpainting Passes     |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
|              Motion & Video Generation Systems              |
|  - Temporal Consistency Smoothing Pipelines                 |
|  - Automated Batch Generation & Social Media Asset Delivery |
|  - @aswathy_achu.ai Live Production Profile                 |
+-------------------------------------------------------------+`,
    highlights: [
      'Pioneered Kerala’s very first realistic AI influencer & virtual model (@aswathy_achu.ai), amassing thousands of engaged followers across social media.',
      'Constructed and orchestrated local generative AI pipelines leveraging Automatic1111 (A1111), ComfyUI, custom LoRA weights, and ControlNet.',
      'Mastered photorealistic facial and identity consistency across hundreds of dynamic lighting setups, camera angles, expressions, and attires.',
      'Engineered automated post-processing scripts and AI video synthesis pipelines for high-engagement reel content.'
    ]
  },
  {
    id: 'flight-miles',
    title: 'Flightpoints — Award Flights (App Store)',
    category: 'ios',
    categoryLabel: 'Native iOS • Live on App Store',
    summary: 'Flagship native iOS travel application published on the Apple App Store (ID: 6756680456). Engineered with SwiftUI, modern MVVM, dynamic Adapty paywalls, Mixpanel, Microsoft Clarity, Firebase, Meta tracking, and high-performance flight search caching.',
    tags: ['SwiftUI', 'UIKit', 'App Store Live', 'Adapty Paywalls', 'Mixpanel SDK', 'Microsoft Clarity', 'Firebase', 'MVVM'],
    link: 'https://apps.apple.com/app/id6756680456',
    linkLabel: 'View on App Store',
    isInstagram: false,
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
      'Published and actively maintained on the Apple App Store (ID: 6756680456) for award flight tracking and deal alerts.',
      'Engineered dynamic in-app purchase and subscription paywalls using Adapty SDK, enabling remote UI experiments without App Store reviews.',
      'Designed a multi-provider analytics architecture synchronizing telemetry across Mixpanel, Microsoft Clarity, Firebase, and Meta.',
      'Implemented custom recursive property serialization for Mixpanel to cleanly capture complex nested purchase arrays and checkout items.',
      'Constructed optimized local airport search caches for sub-10ms query response on device.'
    ]
  },
  {
    id: 'lascade-fleet',
    title: 'Lascade 15+ iOS App Store Fleet & Unified Design Space',
    category: 'ios',
    categoryLabel: 'Enterprise Fleet Architecture & Design System',
    summary: 'Architecting and managing 15+ live iOS travel apps on the Apple App Store (Hotel70, Rent80, Flights70, Flightpoints, etc.). Built the unified "Design Space" component architecture, and currently engineering sensory haptic feedback, fluid micro-interactions, and Adapty revenue optimization.',
    tags: ['15+ App Store Apps', 'Unified Design Space', 'SwiftUI', 'UIKit', 'Sensory Haptics', 'Adapty Revenue', 'Mixpanel', 'Travel Tech'],
    link: 'https://apps.apple.com/app/id6756680456',
    linkLabel: 'View Flightpoints on App Store',
    isInstagram: false,
    architecture: `+-------------------------------------------------------------+
|              Lascade Unified Design Space Architecture      |
|    (Shared Design Tokens, Typography, Themes, Brand Voice)  |
+-------------------------------------------------------------+
                              |
       +----------------------+----------------------+
       |                      |                      |
       v                      v                      v
+--------------+      +--------------+      +----------------+
|  Flights (5) |      |  Hotels (6)  |      | Car Rental (6) |
| - Flights70  |      | - Hotel70    |      | - Rent80       |
| - Low Fare   |      | - Discounts  |      | - Airport Rent |
| - Last Min   |      | - Deals      |      | - Near Me      |
+--------------+      +--------------+      +----------------+
       |                      |                      |
       +----------------------+----------------------+
                              |
                              v
+-------------------------------------------------------------+
|       Fluid UX, Sensory Haptic & Revenue Gateway Core        |
|  - UIImpactFeedbackGenerator / Sensory Touch Response       |
|  - 120Hz ProMotion Micro-Animations & Gesture Controls      |
|  - Adapty Remote Paywalls & In-App Purchase A/B Funnels     |
|  - Multi-Provider Telemetry (Mixpanel, Clarity, Firebase)   |
+-------------------------------------------------------------+`,
    highlights: [
      'Managing the architecture, release cadence, and performance across 15+ live iOS applications in the Apple App Store.',
      'Core focus applications live on App Store: Flightpoints (ID: 6756680456), Hotel70 (ID: 6498233255), Rent80 (ID: 6472572506), Flights70 (ID: 6479599821), and Hotel Discounts・Booking App.',
      'Spearheaded and successfully deployed the Unified Design Space, eliminating cross-app UI fragmentation with reusable SwiftUI/UIKit components.',
      'Currently engineering ultra-fluid micro-interactions and tactile sensory haptic feedback to maximize session engagement and user delight.',
      'Optimizing revenue conversion funnels with dynamic remote Adapty paywalls and deep multi-provider telemetry pipelines.'
    ]
  },
  {
    id: 'tinkerspace-digital',
    title: 'TinkerSpace Digital Display Kiosk',
    category: 'tools',
    categoryLabel: 'Open Source & Smart TV Signage (Community Maintained)',
    summary: 'Open-source digital display kiosk running 24/7 on Smart TV screens at TinkerSpace. Founded and architected during early learning days with Airtable integrations (26+ production PRs/commits) before transitioning to community contributors who now maintain and expand it.',
    tags: ['React', 'Smart TV Signage', 'Airtable', 'Founding Architect', 'Community Maintained', 'Netlify'],
    link: 'https://github.com/tinkerhub/tinkerspace_digital',
    linkLabel: 'View on GitHub',
    liveLink: 'https://tinkerspace-display.netlify.app/',
    isInstagram: false,
    architecture: `+-------------------------------------------------------------+
|              TinkerSpace Smart TV Kiosk Display             |
|   (Legacy WebKit Browser Polyfills, Room-Distance UI)       |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
|             React Display Orchestrator & State              |
|  - Kanban 7-Day Week Board & Auto-Scrolling Maker Cards     |
|  - Animated TinkerHub Mascot Behavior State Machine         |
|  - Local Storage Resilience & Retry Fallbacks               |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
|             Airtable & API Ingestion Pipelines              |
|  - Active Maker Check-in Feeds & Event Synchronizer         |
|  - Built-in Mock Server for Offline Development             |
|  - Automated Netlify Production CD                          |
+-------------------------------------------------------------+`,
    highlights: [
      'Founding contributor and initial architect: authored 26+ production pull requests and commits in tinkerhub/tinkerspace_digital.',
      'Built during early learning days by connecting Airtable before knowing React or Node, turning a learning curve into production kiosk software.',
      'Diagnosed and fixed fatal syntax crashes on older WebKit-based Smart TV browsers by stripping incompatible ES2020 features.',
      'Engineered an event-driven animated TinkerHub mascot with watchdog timers, heartbeat monitors, and progressive fallback states.',
      'Transitioned codebase to TinkerHub community contributors, who now actively maintain, extend, and deploy the project.'
    ]
  },
  {
    id: 'react-native-chat',
    title: 'Real-Time Chat App (React Native)',
    category: 'mobile',
    categoryLabel: 'Cross-Platform Mobile',
    summary: 'Engineered a real-time instant messaging application at Alforia using React Native, WebSocket connections, optimistic UI state updates, and modular component architecture.',
    tags: ['React Native', 'JavaScript', 'WebSockets', 'Real-Time Messaging', 'Mobile UI'],
    link: 'https://github.com/imadibrahimk',
    linkLabel: 'View on GitHub',
    isInstagram: false,
    architecture: `[React Native Mobile Client (iOS & Android)]
         |
         v
[WebSocket & REST Messaging Protocol]
  - Bidirectional Real-time Socket Connection
  - Optimistic UI State Dispatcher
  - Offline Message Queue & Local Cache
         |
         v
[Chat Gateway Microservice]`,
    highlights: [
      'Built cross-platform real-time chat application in React Native with responsive styling and fluid animations.',
      'Implemented low-latency WebSocket duplex communication for typing status, delivery receipts, and live messages.',
      'Engineered local caching and optimistic message rendering for instant perceived performance.'
    ]
  },
  {
    id: 'render-keepalive',
    title: 'RenderKeepAlive Daemon',
    category: 'cloud',
    categoryLabel: 'Cloud Resilience',
    summary: 'High-efficiency Deno and TypeScript daemon engineered to keep Render server instances awake 24/7, completely preventing cold-start spin-down penalties.',
    tags: ['Deno', 'TypeScript', 'Cloud Automation', 'Heartbeat', 'Uptime'],
    link: 'https://github.com/imadibrahimk/RenderKeepAlive',
    linkLabel: 'View on GitHub',
    isInstagram: false,
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
    link: 'https://github.com/imadibrahimk/MongoDB-Autocomplete-Search',
    linkLabel: 'View on GitHub',
    isInstagram: false,
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
    link: 'https://github.com/imadibrahimk/StockSymbolScraper',
    linkLabel: 'View on GitHub',
    isInstagram: false,
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
    link: 'https://github.com/imadibrahimk/thanos_snap',
    linkLabel: 'View on GitHub',
    isInstagram: false,
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
    link: 'https://github.com/imadibrahimk/social_book',
    linkLabel: 'View on GitHub',
    isInstagram: false,
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
    'Fleet Architect (15+ App Store Apps).',
    'Head of AI Model Creation.',
    'Unified Design Space & Haptic Engineer.',
    'SwiftUI & UIKit Master.'
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

  container.innerHTML = filtered.map(p => {
    const iconSvg = p.isInstagram
      ? `<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`
      : `<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`;

    return `
      <article class="project-card glass-panel" data-id="${p.id}">
        <div class="project-top-row">
          <span class="project-category-badge">${p.categoryLabel}</span>
          <div class="project-external-links">
            <a href="${p.link}" target="_blank" rel="noopener" class="project-link-icon" title="${p.linkLabel}">
              ${iconSvg}
            </a>
            ${p.liveLink ? `
              <a href="${p.liveLink}" target="_blank" rel="noopener" class="project-link-icon" title="View Live Display">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            ` : ''}
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
    `;
  }).join('');
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

  const actionIcon = project.isInstagram
    ? `<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`
    : `<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`;

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

    <div style="margin-top: 2rem; display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
      <a href="${project.link}" target="_blank" rel="noopener" class="btn btn-primary">
        <span>${project.linkLabel}</span>
        ${actionIcon}
      </a>
      ${project.liveLink ? `
        <a href="${project.liveLink}" target="_blank" rel="noopener" class="btn btn-glass">
          <span>View Live Display</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
      ` : ''}
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
  • <span class="term-cmd">about</span>       - Bio, engineering leadership & AI background
  • <span class="term-cmd">experience</span>  - Career roadmap (Lascade, Alforia)
  • <span class="term-cmd">projects</span>    - Featured iOS, AI influencer & cloud projects
  • <span class="term-cmd">skills</span>      - Mobile, AI model creation & backend stack
  • <span class="term-cmd">contact</span>     - Direct contact info & channels
  • <span class="term-cmd">hire</span>        - Open direct communication channel
  • <span class="term-cmd">clear</span>       - Clear the terminal console
`,
    about: () => `
Imad Ibrahim — iOS Lead @ Lascade (managing 15+ App Store travel apps) & former Head of AI Model Creation @ Alforia.
- Based in Kerala, India.
- Managing 15+ iOS Apps: Flightpoints, Hotel70, Rent80, Flights70, Hotel Discounts, etc.
- Unified Design Space: Established shared component architecture across 15+ apps.
- Fluid Haptics & Revenue: Engineering tactile sensory haptic UX & Adapty paywall monetization.
- Creator of Kerala's 1st realistic AI influencer/model @aswathy_achu.ai using Automatic1111 (A1111).
- Founding Architect of TinkerSpace Digital Display Kiosk (now maintained by community contributors).
Philosophy: "Coding is like playing games."
`,
    experience: () => `
[2025 - Present] iOS Lead — 15+ App Store Fleet @ Lascade
  - Managing architecture & release cadence for 15+ live iOS travel apps on the Apple App Store.
  - Core focus live on App Store: Flightpoints (ID: 6756680456), Hotel70 (ID: 6498233255), Rent80 (ID: 6472572506), Flights70 (ID: 6479599821).
  - Standardized the Unified Design Space (voice & shared UI components) across all 15+ apps.
  - Currently engineering ultra-fluid micro-interactions, sensory haptics, and Adapty revenue funnels.

[2023 - 2025] Head of AI Model Creation & Mobile Developer @ Alforia Pvt Ltd
  - Pioneered Aswathy Achu (@aswathy_achu.ai) — Kerala's 1st realistic virtual AI influencer.
  - Built local generative AI stacks with Automatic1111 (A1111), custom LoRAs & AI video.
  - Engineered cross-platform real-time Chat Applications in React Native with WebSockets.

[2023 - 2024] Founding Contributor & Architect — TinkerSpace Digital @ TinkerHub Foundation
  - Authored 26+ foundational PRs in tinkerhub/tinkerspace_digital for 24/7 Smart TV signage.
  - Started with Airtable before knowing React/Node; built mascot loops & TV WebKit polyfills.
  - Handed over to community contributors who now maintain and expand the project.

[2022 - Present] Independent Open-Source Creator
  - Over 25 GitHub repositories spanning Deno, Python, Node.js, and Swift.
`,
    projects: () => `
1. Flightpoints (App Store)      -> Flagship award travel app (App Store ID: 6756680456)
2. Hotel70 (App Store)           -> Core hotel booking app (App Store ID: 6498233255)
3. Rent80 (App Store)            -> Core car rental app (App Store ID: 6472572506)
4. Flights70 (App Store)         -> Core airfare search app (App Store ID: 6479599821)
5. Lascade 15+ App Store Fleet   -> Unified Design Space, fluid haptics & 15+ travel apps
6. Aswathy Achu AI               -> Kerala's 1st realistic virtual AI influencer (@aswathy_achu.ai)
7. TinkerSpace Digital Kiosk     -> Foundational Smart TV signage kiosk (now community maintained)
8. Real-Time Chat App            -> React Native WebSocket chat platform
9. RenderKeepAlive               -> 24/7 Deno zero-cold-start cloud daemon
10. MongoDB-Autocomplete-Search  -> Sub-50ms fuzzy suggestions over Express
11. StockSymbolScraper           -> Screener.in financial parser & PDF engine
`,
    skills: () => `
iOS & Fleet     : 15+ App Store Apps, SwiftUI, UIKit, Swift 6.0, MVVM, Combine, CoreData
Design Space    : Unified Component Systems, Shared Design Tokens, Multi-App Consistency
Sensory & Motion: UIImpactFeedbackGenerator, CoreHaptics, Fluid Micro-Interactions, 120Hz ProMotion
Generative AI   : Automatic1111 (A1111), LoRA Training, Stable Diffusion, Face Consistency, AI Video
Monetization    : Adapty Dynamic Paywalls, Subscription Funnels, IAP A/B Testing
Telemetry       : Mixpanel SDK (Custom Recursive Serializer), MS Clarity, Firebase, Meta
Cross-Platform  : React Native, WebSockets (Duplex), Instant Chat Protocols
Cloud & Backend : Deno, TypeScript, Node.js, Express, MongoDB Atlas, Python, Django
`,
    contact: () => `
Email        : imadibrahim164@gmail.com
GitHub       : https://github.com/imadibrahimk
LinkedIn     : https://www.linkedin.com/in/imadibrahimk/
Instagram    : https://instagram.com/_imad________
AI Project   : https://www.instagram.com/aswathy_achu.ai
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
