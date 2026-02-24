export function renderAbout(element) {
  element.innerHTML = `
    <div class="container">
      <div class="about-grid">
        <div class="about-image-col reveal-left">
          <div class="about-image-wrapper">
            <img src="/images/factory-floor.webp" alt="G. D. Traders manufacturing facility" class="about-img parallax" data-speed="0.05" loading="lazy" width="600" height="450" />
            <div class="about-badge">
              <span class="badge-number">70+</span>
              <span class="badge-text">Years of<br>Trust</span>
            </div>
          </div>
        </div>
        <div class="about-content reveal-right">
          <span class="section-tag">About Us</span>
          <h2 class="section-title">Decades of <span class="text-gradient">Excellence</span> in Metal Closures</h2>
          <p class="about-lead">Founded in <strong>1955</strong> with the vision to become a leading name in the tin components industry, <strong>G.D. Traders</strong> has been consistently fulfilling customer needs with high-quality products. We are recognized as one of the trusted manufacturers and suppliers in the industry, serving both <strong>Domestic</strong> and <strong>International</strong> markets.</p>
          <p class="about-lead">Our strict commitment to quality standards has helped us build a strong and trusted reputation. Our continuous efforts to provide <strong>cost-effective solutions with superior quality</strong> have helped us serve a wide network of clients across the globe.</p>
          <div class="values-list">
            <div class="value-item reveal" style="transition-delay: 0.1s">
              <div class="value-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <strong>Reputed Market Presence</strong>
                <p>Serving both Domestic and International markets with a wide network of clients who trust our consistency and quality.</p>
              </div>
            </div>
            <div class="value-item reveal" style="transition-delay: 0.15s">
              <div class="value-icon value-icon-green">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <div>
                <strong>Strict Quality Standards</strong>
                <p>Our firm commitment to quality at every step of manufacturing has earned us a strong and trusted reputation in the industry.</p>
              </div>
            </div>
            <div class="value-item reveal" style="transition-delay: 0.2s">
              <div class="value-icon value-icon-red">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <div>
                <strong>Comprehensive Product Range</strong>
                <p>Manufacturing All types of Necks, 1 Litre & 4 Litre Caps, D.T. Rings / Lids, Brush-in-Can, Dual Caps, Integrated Round & Rectangular Tops, and customized components in various shapes and sizes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `

  const style = document.createElement('style')
  style.textContent = `
    #about {
      background: var(--color-white);
      padding: var(--spacing-xl) 0;
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1.1fr;
      gap: 5rem;
      align-items: center;
    }

    .about-lead {
      font-size: 1.1rem;
      color: var(--color-text-light);
      margin-bottom: 2.5rem;
      line-height: 1.8;
    }

    .about-image-wrapper {
      position: relative;
      border-radius: var(--radius-lg);
      overflow: hidden;
    }

    .about-img {
      width: 100%;
      border-radius: var(--radius-lg);
      aspect-ratio: 4/3;
      object-fit: cover;
    }

    .about-badge {
      position: absolute;
      bottom: 1.5rem;
      right: 1.5rem;
      background: var(--gradient-gold);
      color: var(--color-primary);
      padding: 1rem 1.25rem;
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      gap: 0.75rem;
      box-shadow: var(--shadow-xl);
    }

    .badge-number {
      font-family: var(--font-heading);
      font-size: 2.5rem;
      font-weight: 800;
      line-height: 1;
    }

    .badge-text {
      font-size: 0.8rem;
      font-weight: 600;
      line-height: 1.3;
    }

    .values-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .value-item {
      display: flex;
      gap: 1rem;
      align-items: flex-start;
      padding: 1.25rem;
      border-radius: var(--radius-md);
      transition: background 0.2s ease;
    }

    .value-item:hover {
      background: var(--color-bg);
    }

    .value-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 46px;
      height: 46px;
      background: rgba(245, 158, 11, 0.1);
      color: var(--color-accent);
      border-radius: var(--radius-sm);
      flex-shrink: 0;
    }

    .value-icon-green { background: rgba(34, 197, 94, 0.1); color: #22c55e; }
    .value-icon-red { background: rgba(239, 68, 68, 0.1); color: #ef4444; }

    .value-item strong {
      display: block;
      margin-bottom: 0.2rem;
      color: var(--color-primary);
      font-size: 1.02rem;
    }

    .value-item p {
      color: var(--color-text-light);
      font-size: 0.9rem;
      margin: 0;
    }

    @media (max-width: 960px) {
      .about-grid { grid-template-columns: 1fr; gap: 3rem; }
    }
  `
  document.head.appendChild(style)
}
