export function renderTrusted(element) {
  const certifications = [
    { name: "ISO 9001", abbr: "ISO", color: "#3b82f6", desc: "Quality Management" },
    { name: "HACCP", abbr: "HACCP", color: "#22c55e", desc: "Hazard Analysis" },
    { name: "FDA Approved", abbr: "FDA", color: "#ef4444", desc: "US Food Safety" },
    { name: "FSSC 22000", abbr: "FSSC", color: "#f59e0b", desc: "Food Safety System" },
    { name: "Sedex", abbr: "SEDEX", color: "#8b5cf6", desc: "Ethical Supply Chain" }
  ]

  element.innerHTML = `
    <div class="trusted-wrapper">
      
      <!-- Section 1: Why Choose Us (Dark) -->
      <div class="trust-section section-dark why-choose-bg">
        <div class="container">
          <div class="text-center mb-16 reveal">
            <span class="section-tag" style="background: rgba(245,158,11,0.15); color: #fbbf24">Quality First</span>
            <h2 class="section-title" style="color: var(--color-white)">Why Choose <span class="text-gradient">G. D. Traders?</span></h2>
            <p class="section-subtitle" style="color: rgba(255,255,255,0.7)">Setting the standard in metal container components with decades of expertise.</p>
          </div>

          <div class="why-choose-new-grid">
            <div class="why-card-new reveal-up reveal-group-item">
              <div class="why-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 class="why-card-title">Heritage of Excellence</h3>
              <p class="why-card-text">Manufacturing excellence since 1955, delivering reliability for over 70 years.</p>
            </div>

            <div class="why-card-new reveal-up reveal-group-item">
              <div class="why-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
              </div>
              <h3 class="why-card-title">Premium Materials</h3>
              <p class="why-card-text">We source only high-grade tinplate and certified raw materials for every component.</p>
            </div>

            <div class="why-card-new reveal-up reveal-group-item">
              <div class="why-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3 class="why-card-title">Competitive Value</h3>
              <p class="why-card-text">Optimized manufacturing processes allow us to offer institutional pricing without compromise.</p>
            </div>

            <div class="why-card-new reveal-up reveal-group-item">
              <div class="why-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <h3 class="why-card-title">Advanced Machinery</h3>
              <p class="why-card-text">State-of-the-art precision tooling and automated lines for consistent quality.</p>
            </div>

            <div class="why-card-new reveal-up reveal-group-item">
              <div class="why-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 2L3 12h9l-1 10 8-10h-9l1-10z"/></svg>
              </div>
              <h3 class="why-card-title">Bulk Capacity</h3>
              <p class="why-card-text">Equipped to handle high-volume industrial orders with rapid turnaround cycles.</p>
            </div>

            <div class="why-card-new reveal-up reveal-group-item">
              <div class="why-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              </div>
              <h3 class="why-card-title">On-Time Delivery</h3>
              <p class="why-card-text">Robust logistics network ensuring your production line never stops due to delays.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 2: Industries (Light) -->
      <div class="trust-section section-light">
        <div class="container">
          <div class="text-center mb-16 reveal">
            <span class="section-tag" style="background: rgba(15, 23, 42, 0.05); color: var(--color-primary)">Versatility</span>
            <h2 class="section-title">Industries <span class="text-gradient">We Served</span></h2>
            <p class="section-subtitle">Delivering specialized packaging solutions across diverse sectors.</p>
          </div>

          <div class="industries-grid">
            <div class="ind-card-new reveal-up reveal-group-item">
              <div class="ind-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l5 5"/><path d="M9 11l-4 4"/></svg>
              </div>
              <span class="ind-name">Paint Industry</span>
            </div>

            <div class="ind-card-new reveal-up reveal-group-item">
              <div class="ind-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v12"/><path d="M18 3v12"/><path d="M3 15h18c0 4.97-4.03 9-9 9s-9-4.03-9-9z"/><path d="M3 15C3 9.48 7.03 5 12 5s9 4.48 9 10"/></svg>
              </div>
              <span class="ind-name">Chemical Industry</span>
            </div>

            <div class="ind-card-new reveal-up reveal-group-item">
              <div class="ind-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 2 7 0 4.5-3.5 8-8 8h-2c-2.8 0-5 2.2-5 5"/><path d="m9 10 2 2 4-4"/></svg>
              </div>
              <span class="ind-name">Pesticide Industry</span>
            </div>

            <div class="ind-card-new reveal-up reveal-group-item">
              <div class="ind-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14"/><path d="M9 5V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/><path d="M10 9h4"/><path d="M10 13h4"/><path d="M10 17h4"/></svg>
              </div>
              <span class="ind-name">Shoe Polish</span>
            </div>

            <div class="ind-card-new reveal-up reveal-group-item">
              <div class="ind-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5s-3 3.5-3 5.5a7 7 0 0 0 7 7z"/></svg>
              </div>
              <span class="ind-name">Lubricants</span>
            </div>

            <div class="ind-card-new reveal-up reveal-group-item">
              <div class="ind-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"/><rect x="3" y="4" width="18" height="12" rx="2"/><circle cx="12" cy="10" r="2"/><line x1="2" y1="20" x2="22" y2="20"/></svg>
              </div>
              <span class="ind-name">Industrial Pkg</span>
            </div>

            <div class="ind-card-new reveal-up reveal-group-item">
              <div class="ind-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              </div>
              <span class="ind-name">FMCG Sector</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Section 3: Certifications (Refined) -->
      <div class="trust-section certification-section">
        <div class="cert-pattern"></div>
        <div class="container">
          <div class="text-center mb-12 reveal">
             <h2 class="certification-title">Certified for <span class="text-gradient">Quality</span></h2>
             <div class="certification-divider"></div>
          </div>
          <div class="cert-grid">
            ${certifications.map((cert, i) => `
              <div class="cert-card-new reveal" style="transition-delay: ${i * 0.08}s">
                <div class="cert-badge" style="--cert-color: ${cert.color}">
                  <span class="cert-abbr">${cert.abbr}</span>
                </div>
                <h4 class="cert-name-label">${cert.name}</h4>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

    </div>
  `

  const style = document.createElement('style')
  style.textContent = `
    .trust-section {
      padding: 6rem 0;
    }

    .section-dark {
      background: var(--gradient-dark);
      color: var(--color-white);
    }

    .section-light {
      background: #f8fafc;
      color: var(--color-primary);
      position: relative;
    }

    .section-light::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(0,0,0,0.05), transparent);
    }

    /* Why Choose Us Styles */
    .why-choose-bg {
      background: radial-gradient(circle at top right, #1e293b, #0f172a);
      position: relative;
    }

    .why-choose-bg::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
      opacity: 0.5;
    }

    .why-choose-new-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    .why-card-new {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      padding: 2.5rem 2rem;
      border-radius: 20px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      backdrop-filter: blur(10px);
    }

    .why-card-new:hover {
      background: rgba(255, 255, 255, 0.06);
      border-color: rgba(251, 191, 36, 0.3);
      transform: translateY(-8px);
      box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.3);
    }

    .why-icon-wrap {
      width: 54px;
      height: 54px;
      background: linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(245, 158, 11, 0.05));
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.5rem;
      color: #fbbf24;
      border: 1px solid rgba(251, 191, 36, 0.2);
    }

    .why-card-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--color-white);
      margin-bottom: 0.75rem;
    }

    .why-card-text {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.95rem;
      line-height: 1.6;
    }

    /* Certification Section Refinement */
    .certification-section {
      background: #0f172a;
      position: relative;
      padding: 6rem 0;
      overflow: hidden;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      border-bottom: 2px solid rgba(255, 255, 255, 0.03);
    }

    .cert-pattern {
      position: absolute;
      inset: 0;
      opacity: 0.15;
      background-image: radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.1) 1px, transparent 0);
      background-size: 24px 24px;
      pointer-events: none;
    }

    .certification-title {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--color-white);
      margin-bottom: 1.5rem;
      font-family: var(--font-heading);
    }

    .certification-divider {
      width: 80px;
      height: 4px;
      background: var(--gradient-gold);
      margin: 0 auto 3rem;
      border-radius: 2px;
    }

    .cert-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 2.5rem;
      max-width: 1000px;
      margin: 0 auto;
    }

    .cert-card-new {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.25rem;
      transition: all 0.3s ease;
    }

    .cert-badge {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.03);
      border: 2px solid var(--cert-color);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      transition: all 0.4s var(--ease-expo);
      box-shadow: 0 0 20px -5px var(--cert-color);
    }

    .cert-badge::after {
      content: '';
      position: absolute;
      inset: -6px;
      border-radius: 50%;
      border: 1px dashed var(--cert-color);
      opacity: 0.3;
      transition: all 0.4s var(--ease-expo);
    }

    .cert-abbr {
      font-size: 1.25rem;
      font-weight: 800;
      color: var(--cert-color);
      letter-spacing: 0.05em;
    }

    .cert-name-label {
      font-size: 0.95rem;
      font-weight: 600;
      color: #94a3b8;
      text-align: center;
      line-height: 1.4;
      transition: color 0.3s ease;
    }

    .cert-card-new:hover .cert-badge {
      transform: scale(1.1) rotate(5deg);
      background: rgba(255, 255, 255, 0.08);
      box-shadow: 0 0 30px -2px var(--cert-color);
    }

    .cert-card-new:hover .cert-badge::after {
      transform: scale(1.2) rotate(-10deg);
      opacity: 0.6;
    }

    .cert-card-new:hover .cert-name-label {
      color: var(--color-white);
    }

    @media (max-width: 640px) {
      .certification-title { font-size: 2rem; }
      .cert-grid { grid-template-columns: repeat(2, 1fr); gap: 2rem; }
    }

    /* Industries Styles */
    .industries-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .ind-card-new {
      background: var(--color-white);
      padding: 2.5rem 1.5rem;
      border-radius: 20px;
      border: 1px solid rgba(15, 23, 42, 0.04);
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 1.25rem;
      transition: all 0.4s var(--ease-expo);
      box-shadow: 0 4px 20px -5px rgba(15, 23, 42, 0.03);
    }

    .ind-icon-wrap {
      width: 60px;
      height: 60px;
      background: #f8fafc;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-primary);
      transition: all 0.3s ease;
      border: 1px solid rgba(15, 23, 42, 0.05);
    }

    .ind-name {
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--color-primary);
      font-family: var(--font-heading);
    }

    .ind-card-new:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px -10px rgba(15, 23, 42, 0.08);
      border-color: var(--color-accent-light);
    }

    .ind-card-new:hover .ind-icon-wrap {
      background: var(--color-primary);
      color: var(--color-accent);
      transform: rotate(8deg) scale(1.1);
    }

    /* Certifications Styles */
    .cert-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2rem;
    }

    .cert-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 1.5rem 2rem;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: var(--radius-lg);
      min-width: 150px;
      /* removed transition here to let tilt.js handle it */
    }

    .cert-card:hover { background: rgba(255,255,255,0.06); }

    .cert-icon {
      width: 64px;
      height: 64px;
      border: 3px solid;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 0.9rem;
      font-family: var(--font-heading);
    }

    .cert-name {
      font-size: 0.95rem;
      color: var(--color-white);
      font-weight: 600;
    }

    @media (max-width: 768px) {
      .cert-grid, .why-choose-grid { gap: 1rem; }
      .trust-section { padding: 4rem 0; }
    }
  `
  document.head.appendChild(style)
}
