export function renderNavbar(element) {
  element.innerHTML = `
    <nav class="navbar">
      <div class="container navbar-container">
        <a href="#" class="logo">
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
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#trusted">Certifications</a></li>
          <li><a href="#footer" class="btn btn-nav">Get Quote</a></li>
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
      background-color: rgba(10, 15, 26, 0.95);
      box-shadow: 0 4px 20px rgba(0,0,0,0.2);
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
    }

    .logo-monogram { display: flex; align-items: center; }

    .logo-text {
      letter-spacing: 0.02em;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    .nav-links a:not(.btn) {
      font-weight: 500;
      font-size: 0.9rem;
      color: rgba(255,255,255,0.75);
      position: relative;
      transition: color 0.2s ease;
    }

    .nav-links a:not(.btn):hover {
      color: var(--color-white);
    }

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

    .nav-links a:not(.btn):hover::after {
      width: 100%;
    }

    .btn-nav {
      padding: 0.6rem 1.5rem !important;
      font-size: 0.85rem !important;
    }

    .menu-toggle {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      z-index: 1001;
    }

    .hamburger {
      display: block;
      width: 24px;
      height: 2px;
      background: var(--color-white);
      position: relative;
      transition: background 0.2s;
    }

    .hamburger::before, .hamburger::after {
      content: '';
      position: absolute;
      width: 24px;
      height: 2px;
      background: var(--color-white);
      transition: transform 0.2s;
    }

    .hamburger::before { top: -8px; }
    .hamburger::after { bottom: -8px; }

    .menu-toggle.active .hamburger { background: transparent; }
    .menu-toggle.active .hamburger::before { transform: rotate(45deg) translate(5px, 6px); }
    .menu-toggle.active .hamburger::after { transform: rotate(-45deg) translate(5px, -6px); }

    @media (max-width: 768px) {
      .menu-toggle { display: block; }

      .nav-links {
        position: fixed;
        top: 0;
        right: 0;
        width: 280px;
        height: 100vh;
        background-color: rgba(10, 15, 26, 0.98);
        flex-direction: column;
        padding: 5rem 2rem 2rem;
        gap: 1.5rem;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        will-change: transform;
      }

      .nav-links.active {
        transform: translateX(0);
      }

      .nav-links a:not(.btn) {
        font-size: 1.1rem;
        color: rgba(255,255,255,0.8);
      }
    }
  `
  document.head.appendChild(style)

  const toggle = element.querySelector('.menu-toggle')
  const navLinks = element.querySelector('.nav-links')

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    toggle.classList.toggle('active')
  })

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active')
      toggle.classList.remove('active')
    })
  })

  let ticking = false
  const navbar = element.querySelector('.navbar')
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled')
        } else {
          navbar.classList.remove('scrolled')
        }
        ticking = false
      })
      ticking = true
    }
  }, { passive: true })
}
