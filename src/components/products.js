export function renderProducts(element) {
  const products = [
    {
      title: "Industrial Tin Necks",
      desc: "Precision-engineered necks for chemical and industrial metal containers.",
      features: ["High-grade tinplate", "Leak-proof threading", "Custom diameters"],
      image: "/images/tin-cap/PHOTO-2024-04-16-23-28-13%205.JPG",
      color: "#f59e0b"
    },
    {
      title: "Lever Lids & Rings",
      desc: "Secure sealing solutions for paint, ink, and coating cans.",
      features: ["Air-tight closure", "Standard sizes available", "Easy-to-open design"],
      image: "/images/tin-cap/PHOTO-2024-04-16-23-28-12%2013.JPG",
      color: "#0ea5e9"
    },
    {
      title: "Specialty Closures",
      desc: "Diverse range of caps and closures for 1L to 4L tin containers.",
      features: ["Tamper-evident", "Protective coating", "Precision fit"],
      image: "/images/tin-cap/PHOTO-2024-04-16-23-28-12.JPG",
      color: "#22c55e"
    },
    {
      title: "Customized Components",
      desc: "Bespoke D.T. rings, dual caps, and industrial tin fittings.",
      features: ["Tailored specifications", "Prototyping support", "Bulk manufacturing"],
      image: "/images/tin-cap/PHOTO-2024-04-16-23-28-13%208.JPG",
      color: "#8b5cf6"
    }
  ]

  element.innerHTML = `
    <div class="container section">
      <div class="text-center mb-16 reveal">
        <span class="section-tag">Products</span>
        <h2 class="section-title">Our Product <span class="text-gradient">Range</span></h2>
        <p class="section-subtitle">Engineered for security, safety, and shelf appeal.</p>
      </div>
      
      <div class="product-grid">
        ${products.map((product, i) => `
          <div class="product-card reveal-up reveal-group-item">
            <div class="product-img-wrapper">
              <img src="${product.image}" alt="${product.title}" class="product-img" loading="lazy" width="260" height="260" />
            </div>
            <div class="product-body">
              <div class="product-color-bar" style="background: ${product.color}"></div>
              <h3 class="product-title">${product.title}</h3>
              <p class="product-desc">${product.desc}</p>
              <ul class="product-features">
                ${product.features.map(f => `
                  <li>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="${product.color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>
                    ${f}
                  </li>
                `).join('')}
              </ul>
              <a href="#footer" class="card-link" style="color: ${product.color}">
                Request Specs
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="more-images-wrap reveal">
        <a href="/gallery.html" class="more-images-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
          View All Product Images
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
        <p class="more-images-sub">Browse our complete gallery of 20+ real product photos</p>
      </div>
    </div>
  `

  const style = document.createElement('style')
  style.textContent = `
    #products {
      background: linear-gradient(180deg, var(--color-bg) 0%, #eef2ff 100%);
    }

    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .product-card {
      background: var(--color-white);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-sm);
      transition: transform 0.25s ease, box-shadow 0.25s ease;
      will-change: transform;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      border: 1px solid rgba(0,0,0,0.04);
    }

    .product-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px -5px rgba(0,0,0,0.15);
      border-color: var(--color-accent-light);
    }

    .product-img-wrapper {
      padding: 2rem 2rem 0;
      display: flex;
      justify-content: center;
      background: linear-gradient(180deg, #f8fafc, #fff);
    }

    .product-img {
      width: 260px;
      height: 260px;
      object-fit: contain;
      transition: transform 0.35s ease;
      will-change: transform;
    }

    .product-card:hover .product-img {
      transform: scale(1.08);
    }

    .product-body {
      padding: 1.5rem 2rem 2rem;
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    .product-color-bar {
      width: 40px;
      height: 4px;
      border-radius: 2px;
      margin-bottom: 1rem;
    }

    .product-title {
      font-size: 1.35rem;
      margin-bottom: 0.5rem;
      color: var(--color-primary);
    }

    .product-desc {
      color: var(--color-text-light);
      font-size: 0.9rem;
      margin-bottom: 1.25rem;
      line-height: 1.6;
    }

    .product-features { margin-bottom: 1.5rem; padding: 0; }

    .product-features li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.85rem;
      color: var(--color-secondary);
      margin-bottom: 0.5rem;
    }

    .card-link {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-weight: 600;
      font-size: 0.9rem;
      transition: gap 0.2s ease;
      margin-top: auto;
    }

    .card-link:hover { gap: 0.7rem; }

    .more-images-wrap {
      text-align: center;
      margin-top: 3.5rem;
    }

    .more-images-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.65rem;
      padding: 1rem 2.2rem;
      background: linear-gradient(135deg, var(--color-primary), #1e3a5f);
      color: #fff;
      font-weight: 700;
      font-size: 1rem;
      border-radius: 14px;
      text-decoration: none;
      box-shadow: 0 8px 28px rgba(15,23,42,0.25);
      transition: transform 0.25s ease, box-shadow 0.25s ease;
      border: 1px solid rgba(255,255,255,0.08);
    }

    .more-images-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 14px 36px rgba(15,23,42,0.35);
    }

    .more-images-sub {
      margin-top: 0.9rem;
      font-size: 0.85rem;
      color: var(--color-text-light);
    }
  `
  document.head.appendChild(style)
}
