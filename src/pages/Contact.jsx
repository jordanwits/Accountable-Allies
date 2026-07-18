import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [hp, setHp] = useState('')

  function onSubmit(e) {
    e.preventDefault()
    if (hp) return
    setSubmitted(true)
  }

  return (
    <section className="relative min-h-screen pt-36 md:pt-48 pb-24 md:pb-32 px-6 md:px-10">
      <div className="max-w-[1300px] mx-auto grid md:grid-cols-12 gap-x-12 gap-y-14 items-start">

        {/* LEFT: Header + direct contact */}
        <aside className="md:col-span-5 reveal md:sticky md:top-32">
          <h1 className="font-display text-3xl md:text-4xl leading-tight tracking-tightest text-ink-900">
            I read every message{' '}
            <span className="italic-fraunces text-forest-800">myself.</span>
          </h1>
          <p className="mt-4 text-ink-600 leading-relaxed max-w-sm">
            I'll get back to you within one business day. Promise.
          </p>

          <div className="mt-10 space-y-8">
            <div>
              <p className="text-sm text-ink-500">Call or text</p>
              <a
                href="tel:+15309832596"
                className="font-display text-2xl md:text-3xl text-ink-900 tracking-tightest tabnum hover:text-forest-800 transition-colors"
              >
                (530) 983-2596
              </a>
            </div>

            <div className="rule" />

            <div>
              <p className="text-sm text-ink-500">Email</p>
              <a
                href="mailto:Patti@accountableallies.com"
                className="font-display text-xl md:text-2xl text-ink-900 tracking-tightest hover:text-forest-800 transition-colors break-all"
              >
                Patti@accountable<wbr />allies.com
              </a>
            </div>

            <div className="rule" />

            <p className="margin-note">
              For CPAs, financial advisors, lenders &amp; insurance agents. Referrals always welcome.
            </p>
          </div>
        </aside>

        {/* RIGHT: Form */}
        <div className="md:col-span-7 reveal space-y-10 md:space-y-12">
          <div className="card-paper p-8 md:p-12 relative">
            <p className="eyebrow">Send a note</p>
            <h2 className="font-display text-3xl md:text-4xl mt-4 leading-tight tracking-tightest text-ink-900">
              Tell me what's going on.{' '}
              <span className="italic-fraunces text-forest-800">No essay required.</span>
            </h2>
            <p className="margin-note mt-4">
              Rather write first? Tell me what's going on and we'll set up a call from there. No business is the same, so I don't cookie-cutter my work or my pricing.
            </p>

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
                    placeholder="Type your message here."
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
  )
}
