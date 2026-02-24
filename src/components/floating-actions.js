export function renderFloatingActions(element) {
  element.innerHTML = `
    <div class="floating-actions reveal-up">
      <a href="tel:+919820633642" class="fab fab-call" aria-label="Call G. D. Traders">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      </a>
      <a href="https://wa.me/919820633642?text=Hi%20G.D.%20Traders%2C%20I%20am%20interested%20in%20your%20products." class="fab fab-whatsapp" aria-label="Chat on WhatsApp" target="_blank" rel="noopener">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </div>
  `

  const style = document.createElement('style')
  style.textContent = `
    .floating-actions {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      z-index: 999;
    }

    .fab {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      box-shadow: 0 4px 16px rgba(0,0,0,0.25);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      will-change: transform;
    }

    .fab:hover {
      transform: scale(1.1);
    }

    .fab-call {
      background: var(--color-accent);
      color: var(--color-primary);
    }

    .fab-call:hover {
      box-shadow: 0 6px 24px rgba(245, 158, 11, 0.5);
    }

    .fab-whatsapp {
      background: #25D366;
      color: #fff;
    }

    .fab-whatsapp:hover {
      box-shadow: 0 6px 24px rgba(37, 211, 102, 0.5);
    }

    @media (max-width: 640px) {
      .floating-actions {
        bottom: 1.25rem;
        right: 1.25rem;
      }

      .fab {
        width: 50px;
        height: 50px;
      }

      .fab svg { width: 22px; height: 22px; }
    }
  `
  document.head.appendChild(style)
}
