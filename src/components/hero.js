export function renderHero(element) {
  element.innerHTML = `
    <div class="hero-section">
      <div class="hero-bg-decor">
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
      </div>
      <div class="container hero-container">
        <div class="hero-content">
          <span class="hero-label reveal-up">
            <span class="label-dot"></span>
            Tin Can Manufacturers Mumbai, India
          </span>
          <h1 class="hero-title reveal-up" style="transition-delay: 0.1s">
            Pioneers of <span class="text-gradient">Top Quality</span> Tin Components
          </h1>
          <p class="hero-subtitle reveal-up" style="transition-delay: 0.2s">
            G.D. Traders is a leading Tin Can Manufacturing Company in Mumbai, established in 1955. We provide a one-stop solution for durable and high-quality tin containers.
          </p>
          <div class="hero-actions reveal-up" style="transition-delay: 0.3s">
            <a href="#products" class="btn">
              Explore Products
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a href="https://wa.me/919820633642?text=Hi%20G.D.%20Traders%2C%20I%20am%20interested%20in%20your%20products." class="btn btn-whatsapp" target="_blank" rel="noopener">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp Us
          </a>
        </div>
        <div class="hero-stats reveal-up" style="transition-delay: 0.4s">
          <div class="hero-stat">
            <div class="hero-stat-row"><span class="hero-stat-num" data-count="70">0</span><span class="hero-stat-suffix">+</span></div>
            <span class="hero-stat-label">Years of Trust</span>
          </div>
          <div class="hero-stat-divider"></div>
          <div class="hero-stat">
            <div class="hero-stat-row"><span class="hero-stat-num" data-count="1955">0</span></div>
            <span class="hero-stat-label">Founded</span>
          </div>
          <div class="hero-stat-divider"></div>
          <div class="hero-stat">
            <div class="hero-stat-row"><span class="hero-stat-num" data-count="2">0</span></div>
            <span class="hero-stat-label">Markets Served</span>
          </div>
          <div class="hero-stat-divider"></div>
          <div class="hero-stat">
            <div class="hero-stat-row"><span class="hero-stat-num" data-count="100">0</span><span class="hero-stat-suffix">%</span></div>
            <span class="hero-stat-label">Quality Tested</span>
          </div>
        </div>
      </div>
      <div class="hero-visual reveal-scale" style="transition-delay: 0.1s">
        <div class="hero-image-wrapper">
          <img src="/images/tin-cap/PHOTO-2024-04-16-23-29-44.JPG" alt="Premium tin caps and metal closures by G. D. Traders" class="hero-img" loading="eager" />
        </div>
      </div>
    </div>
  </div>
  `

  const style = document.createElement('style')
  style.textContent = `
    .hero-section {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding-top: 80px;
      background: var(--gradient-hero);
      overflow: hidden;
    }

    .hero-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 4rem;
      z-index: 2;
      position: relative;
    }

    .hero-content { max-width: 600px; }

    .hero-label {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.6rem 1.2rem;
      background: rgba(212, 175, 55, 0.1);
      border: 1px solid rgba(212, 175, 55, 0.2);
      color: var(--color-accent);
      border-radius: var(--radius-full);
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 2rem;
    }

    .label-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--color-accent);
    }

    .hero-title {
      font-size: clamp(2.5rem, 5vw, 4.5rem);
      margin-bottom: 1.5rem;
      color: var(--color-white);
      line-height: 1.08;
      letter-spacing: -0.02em;
    }

    .hero-subtitle {
      font-size: 1.15rem;
      color: #94a3b8;
      margin-bottom: 2.5rem;
      line-height: 1.7;
    }

    .hero-actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      margin-bottom: 3rem;
    }

    .btn-whatsapp {
      background: #25D366 !important;
      color: #ffffff !important;
      border-radius: 9999px !important;
      font-weight: 700 !important;
      box-shadow: 0 8px 20px rgba(37, 211, 102, 0.25);
      transition: all 0.25s var(--ease-expo) !important;
    }

    .btn-whatsapp:hover {
      background: #20BA56 !important;
      transform: translateY(-2px) scale(1.05) !important;
      box-shadow: 0 10px 25px rgba(37, 211, 102, 0.45) !important;
    }

    .hero-stats {
      display: flex;
      align-items: center;
      justify-content: space-between; /* distibute evenly without weird spacing */
      padding: 1.5rem 2rem;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: var(--radius-lg);
      flex-wrap: wrap; /* allow wrapping on small screens */
      gap: 1rem;
    }

    .hero-stat {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1; /* allow them to grow evenly */
      min-width: 100px; /* prevent getting too squished */
    }

    .hero-stat-row {
      display: flex;
      align-items: baseline;
      gap: 0.15rem;
    }

    .hero-stat-num, .hero-stat-suffix {
      font-family: var(--font-heading);
      font-size: 2rem;
      font-weight: 800;
      color: var(--color-accent);
      line-height: 1;
    }

    .hero-stat-label {
      font-size: 0.75rem;
      color: #e2e8f0; /* brighter label text for readability against dark bg */
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-top: 0.4rem;
      text-align: center;
    }

    .hero-stat-divider {
      width: 1px;
      height: 40px;
      background: rgba(255,255,255,0.1);
      flex-shrink: 0;
    }

    .hero-visual {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .hero-image-wrapper {
      position: relative;
      width: 100%;
      max-width: 650px;
      animation: float 5s ease-in-out infinite;
      will-change: transform;
    }

    .hero-img {
      width: 100%;
      border-radius: var(--radius-lg);
      box-shadow: 0 30px 60px rgba(0,0,0,0.4);
    }



    .hero-bg-decor {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 1;
    }

    .blob {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.15;
      animation: spin-slow 20s linear infinite;
    }

    .blob-1 {
      width: 400px;
      height: 400px;
      background: var(--color-accent);
      top: -100px;
      right: -100px;
    }

    .blob-2 {
      width: 300px;
      height: 300px;
      background: #3b82f6;
      bottom: -50px;
      left: -50px;
      animation-direction: reverse;
      animation-duration: 25s;
    }

    @media (max-width: 960px) {
      .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
        padding: 3rem 0;
      }
      .hero-content { margin: 0 auto; }
      .hero-actions { justify-content: center; }
      .hero-stats { justify-content: center; flex-wrap: wrap; }
      .hero-image-wrapper { max-width: 400px; margin: 0 auto; }

    }

    @media (max-width: 640px) {
      .hero-stats { flex-direction: column; gap: 1rem; }
      .hero-stat-divider { width: 40px; height: 1px; }
    }
  `
  document.head.appendChild(style)

  const counters = element.querySelectorAll('.hero-stat-num[data-count]')
  const animateCounter = (el) => {
    const target = parseInt(el.dataset.count)
    const duration = 1500
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      el.textContent = Math.round(target * (1 - Math.pow(1 - progress, 3)))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(c => animateCounter(c))
        observer.disconnect()
      }
    })
  }, { threshold: 0.3 })
  observer.observe(element)
}
