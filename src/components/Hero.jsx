import { useState } from 'react'
import { Link } from 'react-router-dom'

const HEADLINE_OPTIONS = [
  {
    greeting: "Hi, I'm Patti.",
    headline: <>You don't have to understand <span className="text-ochre-400">any of this.</span>{' '}
      <span className="relative underline decoration-ochre-400 decoration-wavy underline-offset-4 sm:no-underline sm:whitespace-nowrap">
        That's what I'm here for.
        <svg aria-hidden="true" viewBox="0 0 480 18" className="hidden sm:block absolute left-0 right-0 -bottom-3 w-full h-3 text-ochre-400" preserveAspectRatio="none">
          <path d="M2,12 Q120,2 240,8 T478,7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </span>
    </>,
    sub: "Strategic bookkeeping for owner-operators who'd rather not be doing this themselves.",
  },
  {
    greeting: "Hi, I'm Patti.",
    headline: <>Your books, calmly kept. By the <span className="text-ochre-400">same person</span>,{' '}
      <span className="relative underline decoration-ochre-400 decoration-wavy underline-offset-4 sm:no-underline sm:whitespace-nowrap">
        every month.
        <svg aria-hidden="true" viewBox="0 0 480 18" className="hidden sm:block absolute left-0 right-0 -bottom-3 w-full h-3 text-ochre-400" preserveAspectRatio="none">
          <path d="M2,12 Q120,2 240,8 T478,7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </span>
    </>,
    sub: "Strategic bookkeeping for owner-operators who'd rather not be doing this themselves.",
  },
]

export default function Hero() {
  const [idx, setIdx] = useState(0)
  const option = HEADLINE_OPTIONS[idx]
  const prev = () => setIdx((i) => (i - 1 + HEADLINE_OPTIONS.length) % HEADLINE_OPTIONS.length)
  const next = () => setIdx((i) => (i + 1) % HEADLINE_OPTIONS.length)

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/workspace.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Warm color overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(110deg, rgba(21,34,56,0.92) 0%, rgba(21,34,56,0.78) 38%, rgba(28,48,80,0.45) 65%, rgba(245,237,215,0.0) 100%)',
          }}
        />
        {/* Tint everything warmer */}
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{ background: 'linear-gradient(180deg, #141C30 0%, #152238 60%, transparent 100%)', opacity: 0.45 }}
        />
{/* Subtle grain */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='200' height='200' filter='url(%23n)' opacity='0.55'/></svg>\")",
            backgroundSize: '200px 200px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 min-h-[100svh] flex flex-col justify-start md:justify-center pt-28 pb-16 md:pt-0 md:pb-0">
        <div />

        {/* Main headline grid */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end">
          {/* Headline carousel */}
          <div className="md:col-span-8">
            <p className="font-display italic-fraunces text-cream-50/80 text-2xl md:text-3xl" key={`g-${idx}`}>
              {option.greeting}
            </p>
            <h1
              className="font-display text-cream-50 mt-3 md:mt-4 leading-[1.05] tracking-tightest"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 5.2rem)' }}
              key={`h-${idx}`}
            >
              {option.headline}
            </h1>

            {/* Arrow controls */}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={prev}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-cream-50/30 text-cream-50/70 hover:border-ochre-400 hover:text-ochre-400 transition-colors"
                aria-label="Previous option"
              >
                ←
              </button>
              <div className="flex gap-2">
                {HEADLINE_OPTIONS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${i === idx ? 'bg-ochre-400' : 'bg-cream-50/30'}`}
                    aria-label={`Option ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-cream-50/30 text-cream-50/70 hover:border-ochre-400 hover:text-ochre-400 transition-colors"
                aria-label="Next option"
              >
                →
              </button>
            </div>
          </div>

          {/* Right rail: Patti's portrait inset (placeholder) + meta */}
          <div className="md:col-span-4 flex flex-col gap-6 animate-fade-up" style={{ animationDelay: '400ms' }}>
            <div className="relative">
              {/* Polaroid-style frame */}
              <div className="relative bg-cream-50 p-3 pb-12 rotate-[1.5deg] shadow-2xl max-w-[240px] sm:max-w-[280px] mx-auto md:ml-auto md:mr-0">
                <img src="/PattiPortrait.jpeg" alt="Portrait of Patti" className="w-full aspect-[5/6] object-cover" />
                <p className="italic-fraunces text-ink-700 text-center mt-3 text-sm">
                  Patti at her desk in the morning
                </p>
                {/* Tape */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-ochre-400/70 rotate-[-3deg] border border-ochre-500/40" />
              </div>
            </div>

          </div>
        </div>

        {/* Subline */}
        <p className="text-cream-50/70 text-lg md:text-xl mt-8 max-w-xl" key={`s-${idx}`}>
          {option.sub}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 items-center mt-10 animate-fade-up" style={{ animationDelay: '550ms' }}>
          <Link to="/contact" className="btn-primary">
            Schedule a conversation
            <span className="arrow">→</span>
          </Link>
          <Link
            to="/about"
            className="text-cream-50 border-b border-cream-50/40 hover:border-ochre-400 pb-1 transition-colors text-sm"
          >
            Or read why I got audited (and ended up with a refund)
          </Link>
        </div>
      </div>
    </section>
  )
}
