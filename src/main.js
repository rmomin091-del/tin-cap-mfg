import './style.css'
import { renderNavbar } from './components/navbar.js'
import { renderHero } from './components/hero.js'
import { renderAbout } from './components/about.js'
import { renderProducts } from './components/products.js'
import { renderTrusted } from './components/trusted.js'
import { renderFooter } from './components/footer.js'
import { renderFloatingActions } from './components/floating-actions.js'
import { initTilt } from './utils/tilt.js'

document.addEventListener('DOMContentLoaded', () => {
  // Create Progress Bar
  const progressBar = document.createElement('div')
  progressBar.id = 'progress-bar'
  document.body.prepend(progressBar)

  renderNavbar(document.querySelector('#header'))
  renderHero(document.querySelector('#hero'))
  renderAbout(document.querySelector('#about'))
  renderProducts(document.querySelector('#products'))
  renderTrusted(document.querySelector('#trusted'))
  renderFooter(document.querySelector('#footer'))
  renderFloatingActions(document.querySelector('#floating-actions'))

  // Initialize 3D Tilt Effect
  setTimeout(() => initTilt(), 500)

  // Advanced Scroll Handling (Throttled)
  let lastScrollY = window.scrollY
  let ticking = false

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        // 1. Scroll Progress
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrolled = (winScroll / height) * 100
        progressBar.style.width = scrolled + "%"

        // 2. Parallax (Gentle)
        const parallaxEls = document.querySelectorAll('.parallax')
        parallaxEls.forEach(el => {
          const speed = el.dataset.speed || 0.1
          const y = window.scrollY * speed
          el.style.transform = `translate3d(0, ${y}px, 0)`
        })

        ticking = false
      })
      ticking = true
    }
  }, { passive: true })

  // Optimized Scroll Reveal with Automatic Staggering
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target

        // Handle Staggering if part of a group
        if (el.classList.contains('reveal-group-item')) {
          const parent = el.parentElement
          const index = Array.from(parent.children).indexOf(el)
          el.style.transitionDelay = `${index * 0.1}s`
        }

        el.classList.add('visible')
        revealObserver.unobserve(el)
      }
    })
  }, observerOptions)

  document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
    revealObserver.observe(el)
  })

  // Smooth scroll for anchors
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]')
    if (!anchor) return
    const id = anchor.getAttribute('href')
    if (id === '#' || id === '') return
    const target = document.querySelector(id)
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
})
