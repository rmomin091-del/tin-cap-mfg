export function getLogoSVG(className = "logo-icon") {
    return `
    <svg class="${className}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGradient" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stop-color="#0ea5e9"/>
          <stop offset="100%" stop-color="#3b82f6"/>
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <!-- Cap Top -->
      <circle cx="50" cy="50" r="45" stroke="url(#logoGradient)" stroke-width="8" fill="rgba(14, 165, 233, 0.1)"/>
      <!-- Inner Detail (Ripples) -->
      <circle cx="50" cy="50" r="30" stroke="currentColor" stroke-width="3" opacity="0.5"/>
      <circle cx="50" cy="50" r="15" stroke="currentColor" stroke-width="3" opacity="0.8"/>
      <!-- Metallic Shine -->
      <path d="M20 50 Q 50 20 80 50" stroke="white" stroke-width="2" opacity="0.6" stroke-linecap="round"/>
    </svg>
  `
}
