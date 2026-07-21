const doList = [
  { item: 'Strategic bookkeeping', why: 'Turning your financial data into meaningful insights, not just tidy records.' },
  { item: 'Catch-up & cleanup', why: 'Inaccurate numbers, unrecorded sales, and unreliable data leave you unsure and unsteady. I fix that.' },
  { item: 'Monthly close', why: 'Standardized month-end procedures that keep your books accurate and consistent.' },
  { item: 'QuickBooks setup & maintenance', why: 'Set up right and kept current, so the software works for you, not against you.' },
  { item: 'Payroll & the tax filings that come with it', why: 'I make sure your employees are paid accurately and on time.' },
  { item: 'Reports you can actually read', why: 'Clear, detailed financial reports with insights you can actually act on.' },
  { item: 'Pickup-the-phone communication', why: 'Questions, concerns, ideas? Call me. I\'ll answer, and we\'ll strategize together.' },
]

const dontList = [
  { item: 'Income tax — strategy or filing', why: 'That\'s a CPA\'s job, and I\'ll point you to a good one.' },
  { item: 'CFO work', why: 'I do the numbers, not the strategy.' },
  { item: 'Business consulting', why: 'I won\'t pretend I know your industry better than you do.' },
  { item: 'Anything I haven\'t done a hundred times', why: 'I stay in my lane on purpose.' },
]

export default function DoDont() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 px-6 md:px-10">
      <div className="max-w-[1300px] mx-auto">
        <div className="mb-16 reveal">
          <p className="eyebrow">Scope of work</p>
          <h2 className="font-display text-5xl md:text-7xl mt-5 leading-[1] text-ink-900 tracking-tightest max-w-4xl">
            What I do.{' '}
            <span className="italic-fraunces text-forest-900">And what I don't pretend to do.</span>
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
              {doList.map((d) => (
                <li key={d.item} className="py-4 border-t border-cream-100/15 first:border-t-0">
                  <div className="flex items-start gap-4">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-ochre-500 shrink-0" />
                    <div>
                      <p className="text-cream-50 text-lg leading-snug">{d.item}</p>
                      <p className="font-display italic text-[0.95rem] text-cream-100/70 leading-normal mt-1">{d.why}</p>
                    </div>
                  </div>
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
              {dontList.map((d) => (
                <li key={d.item} className="py-4 border-t border-ink-700/15 first:border-t-0">
                  <div className="flex items-start gap-4">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-terra-500 shrink-0" />
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

        <p className="reveal mt-12 md:mt-16 text-center font-display italic-fraunces text-2xl md:text-3xl text-forest-800 leading-snug max-w-3xl mx-auto">
          Tailored bookkeeping, designed to scale with your business as you grow.
        </p>
      </div>
    </section>
  )
}
