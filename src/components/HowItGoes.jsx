const steps = [
  {
    n: '01',
    title: 'The first conversation',
    body: 'At least thirty minutes on the phone. You tell me what\'s going on. I ask questions. We decide together if I\'m the right fit. If I\'m not, I\'ll say so.',
  },
  {
    n: '02',
    title: 'The cleanup',
    body: 'I get into your books, reconcile everything against the bank, and find what\'s been missed. You\'ll hear exactly what I found and what I\'m fixing. No surprises. No jargon.',
  },
  {
    n: '03',
    title: 'A steady rhythm',
    body: 'After the cleanup, I keep your books on a regular cadence. This is hands-on, ongoing bookkeeping, not a review of someone else\'s work. You\'ll hear from me on a predictable schedule. Never a surprise, never a scramble at tax time.',
  },
  {
    n: '04',
    title: 'A monthly check-in',
    body: 'A financial report every month in plain English. What you made, what you spent, what\'s worth paying attention to. Need management reporting too? I can do that. The reports aren\'t always short, but they\'re always clear.',
  },
]

export default function HowItGoes() {
  return (
    <section className="relative py-28 md:py-36 px-6 md:px-10">
      <div className="max-w-[1300px] mx-auto">
        <div className="mb-20 reveal">
          <p className="eyebrow">How working with me actually goes</p>
          <h2 className="font-display text-5xl md:text-7xl mt-5 leading-[1] text-ink-900 tracking-tightest">
            Calm, steady, and{' '}
            <span className="italic-fraunces text-forest-800">on a schedule.</span>
          </h2>
        </div>

        <ol className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="reveal relative flex gap-5 sm:gap-6 md:gap-8 items-start"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="shrink-0 font-display text-7xl md:text-8xl text-forest-900 tracking-tightest tabnum leading-none -mt-3">
                {s.n}
              </span>
              <div className="min-w-0 pt-1">
                <h3 className="font-display text-2xl md:text-3xl text-ink-900 tracking-tightest">
                  {s.title}
                </h3>
                <p className="mt-4 text-ink-700 text-base md:text-lg leading-relaxed max-w-md">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
