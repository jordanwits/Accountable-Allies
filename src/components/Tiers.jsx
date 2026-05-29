const tiers = [
  {
    name: 'Foundation',
    sub: 'For small business owners getting their footing.',
    desc: 'A clean set of books, reconciled to the bank, with a simple monthly rhythm. The work that should\'ve been done all along.',
    bullets: [
      'Monthly reconciliation',
      'Clean categorization',
      'Plain-English summary',
      'Regular check-in',
      'Tax-time-ready, always',
    ],
    feature: false,
  },
  {
    name: 'Ongoing Clarity',
    sub: 'For the business that needs to see itself clearly.',
    desc: 'Everything in Foundation, plus the monthly check-in conversation. You\'ll know your numbers, and what they\'re telling you.',
    bullets: [
      'Everything in Foundation',
      'Monthly check-in (30 min)',
      'Cash flow visibility',
      'Quarterly course correction',
    ],
    feature: true,
  },
  {
    name: 'Established',
    sub: 'For the operation with moving parts.',
    desc: 'For businesses with payroll, multiple revenue streams, or a CPA / financial advisor I\'m coordinating with on your behalf.',
    bullets: [
      'Everything in Ongoing Clarity',
      'Payroll coordination',
      'Multi-stream reporting',
      'CPA / advisor handoffs',
    ],
    feature: false,
  },
]

export default function Tiers() {
  return (
    <section className="relative py-28 md:py-36 px-6 md:px-10 bg-cream-50 border-y border-ink-700/10">
      <div className="max-w-[1300px] mx-auto">
        <div className="text-center mb-20 reveal">
          <p className="eyebrow">Services</p>
          <h2 className="font-display text-5xl md:text-7xl mt-5 leading-[1] text-ink-900 tracking-tightest">
            Three ways{' '}
            <span className="italic-fraunces text-forest-800">we can work together.</span>
          </h2>
          <p className="mt-6 text-ink-700 max-w-xl mx-auto">
            Pick the one that fits where you are now. You can always move up later. Either way, a regular check-in &mdash; monthly, and weekly in some cases &mdash; is part of how I work with everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((t, i) => (
            <article
              key={t.name}
              className={`reveal relative p-8 md:p-10 flex flex-col ${
                t.feature
                  ? 'bg-forest-800 text-cream-50 -my-4 z-10 shadow-2xl'
                  : 'bg-cream-50 text-ink-900 border border-ink-700/10'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {t.feature && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-ochre-500 text-forest-900 px-4 py-1 text-xs uppercase tracking-[0.18em] font-medium">
                  Most chosen
                </div>
              )}

              <p className={`eyebrow ${t.feature ? '!text-cream-100/85' : 'text-ink-500'}`}>{t.name}</p>
              <h3 className={`font-display text-3xl md:text-4xl mt-4 leading-[1.05] tracking-tightest ${t.feature ? 'text-cream-50' : 'text-ink-900'}`}>
                <span className="italic-fraunces">{t.sub}</span>
              </h3>
              <p className={`mt-5 text-base leading-relaxed ${t.feature ? 'text-cream-100/85' : 'text-ink-700'}`}>
                {t.desc}
              </p>

              <ul className={`mt-8 space-y-3 ${t.feature ? 'text-cream-100/90' : 'text-ink-800'}`}>
                {t.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${t.feature ? 'bg-azure-300' : 'bg-forest-700'}`} />
                    {b}
                  </li>
                ))}
              </ul>

              <div className={`mt-10 pt-6 border-t ${t.feature ? 'border-cream-100/15' : 'border-ink-700/15'}`}>
                <p className={`text-sm ${t.feature ? 'text-cream-100/70' : 'text-ink-500'}`}>
                  Custom-quoted. No surprise pricing. We'll talk before anything's set.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
