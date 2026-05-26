import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-cream-100/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <span className={`font-display italic-fraunces text-2xl leading-none translate-y-[-1px] transition-colors ${scrolled ? 'text-forest-800' : 'text-cream-100'}`}>
            Accountable
          </span>
          <span className="hidden sm:inline-flex items-center gap-2">
            <span className={`font-display text-2xl leading-none tracking-tightest transition-colors ${scrolled ? 'text-ink-900' : 'text-cream-100'}`}>
              Allies
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `relative text-sm tracking-wide transition-colors ${
                  isActive
                    ? scrolled ? 'text-forest-800' : 'text-cream-100'
                    : scrolled ? 'text-ink-800 hover:text-forest-800' : 'text-cream-100/80 hover:text-cream-100'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{l.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-ochre-500" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className={`hidden md:inline-flex items-center gap-2 text-sm py-2.5 pl-5 pr-4 rounded-full border transition-all duration-500 ${
            scrolled
              ? 'bg-forest-800 border-forest-900 text-cream-50 hover:bg-forest-900 shadow-[0_1px_0_rgba(255,255,255,0.07)_inset,0_6px_18px_-8px_rgba(21,34,56,0.55)]'
              : 'bg-transparent border-cream-100/60 text-cream-100 hover:bg-cream-100/10'
          }`}
        >
          Schedule a conversation
          <span className="arrow">→</span>
        </Link>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
          className="md:hidden inline-flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
        >
          <span className={`block w-6 h-px transition-colors transition-transform ${scrolled ? 'bg-ink-900' : 'bg-cream-100'} ${open ? 'rotate-45 translate-y-[3px]' : ''}`} />
          <span className={`block w-6 h-px transition-colors transition-transform ${scrolled ? 'bg-ink-900' : 'bg-cream-100'} ${open ? '-rotate-45 -translate-y-[3px]' : ''}`} />
        </button>
      </div>

      {open && (
        <div id="mobile-nav-panel" className="md:hidden bg-cream-100 border-t border-ink-700/10 px-6 py-8">
          <nav className="flex flex-col gap-5">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className="font-display text-3xl text-ink-900"
              >
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-primary self-start mt-4">
              Schedule a conversation <span className="arrow">→</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
