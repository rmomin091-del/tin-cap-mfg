export function renderNavbar(element, options = {}) {
  const { alwaysDark = false, basePath = '' } = options

  element.innerHTML = `
    <nav class="navbar${alwaysDark ? ' scrolled' : ''}">
      <div class="container navbar-container">
        <a href="${basePath}/" class="logo">
          <span class="logo-monogram">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 20C8 13.3726 13.3726 8 20 8H32V12H20C15.5817 12 12 15.5817 12 20C12 24.4183 15.5817 28 20 28H24V20H20V16H28V28C28 30.2091 26.2091 32 24 32H20C13.3726 32 8 26.6274 8 20Z" fill="url(#logo-grad)"/>
              <path d="M32 20V28H28V32H32C34.2091 32 36 30.2091 36 28V12C36 9.79086 34.2091 8 32 8H28V12H32V20Z" fill="url(#logo-grad)" opacity="0.5"/>
              <defs>
                <linearGradient id="logo-grad" x1="8" y1="8" x2="36" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#d4af37"/>
                  <stop offset="0.5" stop-color="#fcd34d"/>
                  <stop offset="1" stop-color="#b4941f"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span class="logo-text">G. D. <span class="highlight">Traders</span></span>
        </a>
        <button class="menu-toggle" aria-label="Toggle Menu">
          <span class="hamburger"></span>
        </button>
        <ul class="nav-links">
          <li><a href="${basePath}/#hero">Home</a></li>
          <li><a href="${basePath}/#about">About</a></li>
          <li><a href="${basePath}/#products">Products</a></li>
          <li><a href="${basePath}/#trusted">Certifications</a></li>
          <li><a href="${basePath}/#footer" class="btn btn-nav">Get Quote</a></li>
        </ul>
      </div>
    </nav>
  `

  const style = document.createElement('style')
  style.textContent = `
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      padding: 1rem 0;
      background: transparent;
      transition: padding 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
    }

    .navbar.scrolled {
      padding: 0.6rem 0;
      background-color: rgba(10, 15, 26, 0.97);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      box-shadow: 0 4px 20px rgba(0,0,0,0.25);
      border-bottom: 1px solid rgba(255,255,255,0.05);
    }

    .navbar-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-family: var(--font-heading);
      font-size: 1.4rem;
      font-weight: 800;
      display: flex;
      align-items: center;
      gap: 0.6rem;
      color: var(--color-white);
      text-decoration: none;
    }

    .logo-monogram { display: flex; align-items: center; }
    .logo-text { letter-spacing: 0.02em; }
    .logo .highlight { color: var(--color-accent); }

    .nav-links {
      display: flex;
      gap: 2rem;
      align-items: center;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .nav-links a:not(.btn) {
      font-weight: 500;
      font-size: 0.9rem;
      color: rgba(255,255,255,0.75);
      position: relative;
      transition: color 0.2s ease;
      text-decoration: none;
    }

    .nav-links a:not(.btn):hover { color: var(--color-white); }

    .nav-links a:not(.btn)::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -6px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--color-accent);
      transition: width 0.25s ease;
    }

    .nav-links a:not(.btn):hover::after { width: 100%; }

    .btn-nav {
      display: inline-flex;
      align-items: center;
      padding: 0.6rem 1.5rem;
      background: var(--gradient-gold, linear-gradient(135deg, #d4af37 0%, #b4941f 50%, #997b19 100%));
      color: #0f172a !important;
      border-radius: 9999px;
      font-weight: 700;
      font-size: 0.85rem;
      transition: all 0.25s ease;
      box-shadow: 0 4px 15px rgba(212,175,55,0.3);
      text-decoration: none;
    }

    .btn-nav:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(212,175,55,0.5);
    }

    .btn-nav::after { display: none !important; }

    /* ── HAMBURGER ── */
    .menu-toggle {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      z-index: 1100;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
    }

    .hamburger,
    .hamburger::before,
    .hamburger::after {
      display: block;
      width: 24px;
      height: 2px;
      background: var(--color-white, #fff);
      border-radius: 2px;
      transition: transform 0.3s ease, opacity 0.3s ease;
    }

    .hamburger {
      position: relative;
    }

    .hamburger::before,
    .hamburger::after {
      content: '';
      position: absolute;
      left: 0;
    }

    .hamburger::before { top: -8px; }
    .hamburger::after  { top:  8px; }

    .menu-toggle.active .hamburger { background: transparent; }
    .menu-toggle.active .hamburger::before { transform: rotate(45deg) translate(0, 8px); }
    .menu-toggle.active .hamburger::after  { transform: rotate(-45deg) translate(0, -8px); }

    /* ── MOBILE ── */
    @media (max-width: 768px) {
      .menu-toggle { display: flex; }

      .nav-links {
        position: fixed;
        top: 0;
        right: 0;
        width: 280px;
        height: 100vh;
        height: 100dvh;
        background-color: rgba(10, 15, 26, 0.99);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        flex-direction: column;
        justify-content: center;
        padding: 2rem;
        gap: 1.75rem;
        transform: translateX(100%);
        transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        will-change: transform;
        border-left: 1px solid rgba(255,255,255,0.06);
        z-index: 1050;
      }

      .nav-links.active { transform: translateX(0); }

      .nav-links li { width: 100%; }

      .nav-links a:not(.btn) {
        font-size: 1.15rem;
        color: rgba(255,255,255,0.85);
        display: block;
        padding: 0.25rem 0;
      }

      .btn-nav {
        display: block;
        text-align: center;
        width: 100%;
        padding: 0.85rem 1.5rem;
        font-size: 1rem;
        margin-top: 0.5rem;
      }
    }
  `
  document.head.appendChild(style)

  const toggle = element.querySelector('.menu-toggle')
  const navLinks = element.querySelector('.nav-links')

  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active')
    toggle.classList.toggle('active')
    // prevent background scroll when menu open
    document.body.style.overflow = isOpen ? 'hidden' : ''
  })

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active')
      toggle.classList.remove('active')
      document.body.style.overflow = ''
    })
  })

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active') &&
        !navLinks.contains(e.target) &&
        !toggle.contains(e.target)) {
      navLinks.classList.remove('active')
      toggle.classList.remove('active')
      document.body.style.overflow = ''
    }
  })

  // Scroll handler — skip if alwaysDark
  if (!alwaysDark) {
    let ticking = false
    const navbar = element.querySelector('.navbar')
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          navbar.classList.toggle('scrolled', window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }, { passive: true })
  }
}