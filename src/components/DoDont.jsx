const doList = [
  'Strategic bookkeeping',
  'Catch-up & cleanup',
  'Monthly close',
  'QuickBooks setup & maintenance',
  'Reports you can actually read',
  'Pickup-the-phone communication',
]

const dontList = [
  { item: 'Tax strategy or tax filing', why: 'That\'s a CPA\'s job, and I\'ll point you to a good one.' },
  { item: 'CFO work', why: 'I do the numbers; I don\'t do strategy at that altitude.' },
  { item: 'Business consulting', why: 'I won\'t pretend I know your industry better than you do.' },
  { item: 'Anything I haven\'t done a hundred times', why: 'I stay in my lane on purpose.' },
]

export default function DoDont() {
  return (
    <section className="relative py-28 md:py-36 px-6 md:px-10">
      <div className="max-w-[1300px] mx-auto">
        <div className="mb-16 reveal">
          <p className="eyebrow">Scope of work</p>
          <h2 className="font-display text-5xl md:text-7xl mt-5 leading-[1] text-ink-900 tracking-tightest max-w-4xl">
            What I do.{' '}
            <span className="italic-fraunces text-forest-900">And what I won't pretend to do.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-ink-700 text-lg">
            I'm strict about my scope, for your sake and mine. Knowing exactly what you're getting (and what you're not) is half the value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {/* DO */}
          <div className="reveal relative bg-forest-800 text-cream-50 p-10 md:p-14 overflow-hidden">
            <div className="absolute top-6 right-6 font-display italic-fraunces text-cream-100/70">
              I do this.
            </div>
            <h3 className="font-display text-3xl md:text-4xl mt-4 leading-tight tracking-tightest">
              The work I show up for, every time.
            </h3>
            <ul className="mt-8 space-y-1">
              {doList.map((d, i) => (
                <li key={d} className="group flex items-start gap-4 py-4 border-t border-cream-100/15 first:border-t-0">
                  <span className="font-mono text-xs text-cream-100/50 tabnum mt-1.5">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-cream-50 text-lg leading-snug">{d}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DON'T */}
          <div className="reveal relative bg-cream-50 border border-ink-700/15 p-10 md:p-14">
            <div className="absolute top-6 right-6 font-display italic-fraunces text-terra-500/80">
              Not my lane.
            </div>
            <h3 className="font-display text-3xl md:text-4xl mt-4 leading-tight tracking-tightest text-ink-900">
              And the things I'll send you to the right person for.
            </h3>
            <ul className="mt-8 space-y-1">
              {dontList.map((d, i) => (
                <li key={d.item} className="py-4 border-t border-ink-700/15 first:border-t-0">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs text-terra-500 tabnum mt-1.5">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <p className="text-ink-900 text-lg leading-snug">{d.item}</p>
                      <p className="margin-note mt-1">{d.why}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
