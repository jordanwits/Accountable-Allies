const phrases = [
  "I think we're profitable, but…",
  "I'll catch up before tax time, I hope.",
  "QuickBooks says one thing. I'm not sure if it's true.",
  "I don't want to deal with it.",
]

export default function SignalLanguage() {
  return (
    <section className="relative py-28 md:py-36 px-6 md:px-10 paper">
      <div className="max-w-[1300px] mx-auto">
        <div className="mb-16 reveal">
          <p className="eyebrow">Does this sound like you?</p>
          <h2 className="font-display text-5xl md:text-7xl mt-5 leading-[1] tracking-tightest text-ink-900">
            If you've ever said any of these{' '}
            <span className="italic-fraunces text-forest-800">out loud,</span>{' '}
            we should talk.
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-7">
            <ol>
              {phrases.map((p, i) => (
                <li
                  key={i}
                  className={`reveal relative grid grid-cols-[2.5rem_1fr] md:grid-cols-[4rem_1fr] gap-x-4 md:gap-x-8 items-baseline py-8 md:py-10 ${
                    i > 0 ? 'border-t border-ink-700/15' : ''
                  }`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <span className="font-mono text-xs tabnum text-ochre-600 self-start mt-2 tracking-[0.18em]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="font-display text-2xl md:text-4xl text-ink-900 leading-[1.18] tracking-tightest">
                    <span aria-hidden="true" className="italic-fraunces text-ochre-500/80 mr-1">
                      &ldquo;
                    </span>
                    {p}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-12 reveal">
              <p className="text-ink-700 text-lg max-w-2xl">
                That's what I call <em className="italic-fraunces text-forest-800">the hard way</em>. The good news is it's not where you have to stay.
              </p>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center md:justify-end reveal" style={{ transitionDelay: '200ms' }}>
            <div className="relative">
              <div className="relative bg-cream-50 p-3 pb-12 rotate-[1.5deg] shadow-2xl max-w-[280px]">
                <img src="/PattiAndHusband.png" alt="Patti and her husband" className="w-full aspect-[5/6] object-cover" />
                <p className="italic-fraunces text-ink-700 text-center mt-3 text-sm">
                  Patti and her Husband
                </p>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-ochre-400/70 rotate-[-3deg] border border-ochre-500/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
