import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [hp, setHp] = useState('')

  function onSubmit(e) {
    e.preventDefault()
    if (hp) return
    // In production this would POST to a backend endpoint.
    setSubmitted(true)
  }

  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 md:pt-44 pb-12 px-6 md:px-10">
        <div className="max-w-[1300px] mx-auto grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <p className="eyebrow">Get in touch</p>
            <h1 className="font-display text-6xl md:text-8xl mt-6 leading-[0.96] text-ink-900 tracking-tightest">
              I read every message{' '}
              <span className="italic-fraunces text-forest-800">myself.</span>
            </h1>
            <p className="mt-8 text-ink-700 text-xl leading-relaxed max-w-2xl">
              And I'll get back to you within one business day. Promise.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <p className="margin-note">
              For CPAs, financial advisors, lenders & insurance agents. Referrals always welcome.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT BODY */}
      <section className="relative py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[1300px] mx-auto grid md:grid-cols-12 gap-12">
          {/* LEFT: Direct contact */}
          <aside className="md:col-span-5 reveal">
            <p className="eyebrow">Reach me directly</p>
            <div className="mt-8 space-y-8">
              <div>
                <p className="text-sm text-ink-500">Phone</p>
                <a
                  href="tel:+15555219234"
                  className="font-display text-4xl md:text-5xl text-ink-900 tracking-tightest tabnum hover:text-forest-800 transition-colors"
                >
                  (555) 521-9234
                </a>
                <p className="margin-note mt-2">Yes, I actually pick up.</p>
              </div>
              <div>
                <p className="text-sm text-ink-500">Email</p>
                <a
                  href="mailto:patti@accountablealliesllc.com"
                  className="font-display text-2xl md:text-3xl text-ink-900 tracking-tightest hover:text-forest-800 transition-colors break-all"
                >
                  patti@accountable<wbr />alliesllc.com
                </a>
              </div>
              <div className="card-paper p-6 mt-8">
                <p className="eyebrow text-ink-500">Or, book directly</p>
                <p className="mt-3 text-ink-800 leading-relaxed">
                  Pick a 20-minute slot that works for you. No back-and-forth. I'll confirm by email the same day.
                </p>
                <a
                  href="#booking"
                  className="btn-ghost mt-4"
                >
                  Jump to my calendar
                  <span>→</span>
                </a>
              </div>
            </div>
          </aside>

          {/* RIGHT: Form */}
          <div className="md:col-span-7 reveal">
            <div className="bg-cream-50 border border-ink-700/15 p-8 md:p-12 relative">
              <p className="eyebrow">Or send a note</p>
              <h2 className="font-display text-3xl md:text-4xl mt-4 leading-tight tracking-tightest text-ink-900">
                Tell me what's going on.{' '}
                <span className="italic-fraunces text-forest-800">No essay required.</span>
              </h2>

              {submitted ? (
                <div className="mt-10 py-12 text-center">
                  <p className="font-display text-5xl text-forest-800 italic-fraunces">Got it.</p>
                  <p className="mt-6 text-ink-700 text-lg">
                    I'll be in touch within one business day.
                  </p>
                  <p className="mt-2 italic-fraunces text-ink-500">Patti</p>
                </div>
              ) : (
                <form className="mt-10 space-y-8" onSubmit={onSubmit}>
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="company-website"
                    value={hp}
                    onChange={(e) => setHp(e.target.value)}
                    style={{ position: 'absolute', left: '-9999px' }}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <div className="grid sm:grid-cols-2 gap-8">
                    <label className="block">
                      <span className="field-label">First name *</span>
                      <input className="field" type="text" required name="firstName" autoComplete="given-name" />
                    </label>
                    <label className="block">
                      <span className="field-label">Last name *</span>
                      <input className="field" type="text" required name="lastName" autoComplete="family-name" />
                    </label>
                  </div>

                  <label className="block">
                    <span className="field-label">Business name *</span>
                    <input className="field" type="text" required name="businessName" autoComplete="organization" />
                  </label>

                  <label className="block">
                    <span className="field-label">Email *</span>
                    <input className="field" type="email" required name="email" autoComplete="email" />
                  </label>

                  <label className="block">
                    <span className="field-label">What's on your mind? *</span>
                    <textarea
                      className="field resize-none"
                      rows={5}
                      required
                      name="message"
                      placeholder="Two sentences is plenty. We can dig in on the call."
                    />
                  </label>

                  <button type="submit" className="btn-primary">
                    Send it over
                    <span className="arrow">→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CALENDLY PLACEHOLDER */}
      <section id="booking" className="relative py-24 md:py-32 px-6 md:px-10 bg-forest-900 text-cream-50">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="eyebrow text-cream-100/60">Pick a time</p>
            <h2 className="font-display text-5xl md:text-6xl mt-5 leading-[1] tracking-tightest">
              Twenty minutes,{' '}
              <span className="italic-fraunces text-ochre-400">your choice.</span>
            </h2>
          </div>

          {/* Faux calendly preview frame */}
          <div className="max-w-3xl mx-auto bg-cream-50 text-ink-900 p-8 md:p-10 shadow-2xl border border-ochre-500/20 reveal">
            <div className="flex items-center justify-between border-b border-ink-700/15 pb-4">
              <div>
                <p className="font-display text-xl tracking-tightest">20-Minute Conversation with Patti</p>
                <p className="text-sm text-ink-500 mt-1">Phone or video. Your call.</p>
              </div>
              <span className="text-xs text-ink-500 uppercase tracking-widest">via Calendly</span>
            </div>

            <div className="grid grid-cols-7 gap-1 mt-8">
              {Array.from({ length: 28 }).map((_, i) => {
                const isAvailable = [3, 4, 7, 10, 11, 14, 17, 18, 21, 24, 25].includes(i)
                const isToday = i === 6
                return (
                  <button
                    key={i}
                    type="button"
                    disabled={!isAvailable}
                    className={`aspect-square text-sm font-medium rounded-sm transition-all tabnum ${
                      isToday
                        ? 'bg-forest-800 text-cream-50 ring-2 ring-ochre-500 ring-offset-2 ring-offset-cream-50'
                        : isAvailable
                        ? 'bg-ochre-400/15 text-forest-800 hover:bg-ochre-400/35 cursor-pointer'
                        : 'text-ink-500/40 cursor-default'
                    }`}
                  >
                    {i + 1}
                  </button>
                )
              })}
            </div>

            <p className="margin-note mt-6 text-center">
              ↑ Calendly embed lives here on the live site. Click a day; pick a time. Reminders included.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING NOTE */}
      <section className="relative py-24 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center reveal">
          <p className="font-display text-3xl md:text-4xl text-ink-900 italic-fraunces leading-snug">
            "You don't have to understand any of this. That's what I'm here for."
          </p>
          <p className="mt-6 text-ink-500">Patti</p>
        </div>
      </section>
    </>
  )
}
