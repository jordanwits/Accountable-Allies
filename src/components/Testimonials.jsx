const quotes = [
  {
    body: "I'd been ghosted by two online services in a row. Patti picked up on the first call. Eight months later, my books are the calmest part of my business.",
    name: 'Marcus T.',
    town: 'Bend, OR',
    biz: 'Auto repair, 9 employees',
  },
  {
    body: "She caught a $4,200 miscategorization from before she even started. Found it the first week. I didn't ask her to look. That's just how she works.",
    name: 'Renee K.',
    town: 'Spokane, WA',
    biz: 'Residential cleaning',
  },
  {
    body: 'I used to dread tax time. Now I just forward whatever the CPA needs and Patti has it ready. I haven\'t opened QuickBooks in a year.',
    name: 'Daniel P.',
    town: 'Boise, ID',
    biz: 'Handyman services',
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-28 md:py-36 px-6 md:px-10">
      <div className="max-w-[1300px] mx-auto">
        <div className="mb-16 reveal">
          <p className="eyebrow">In their words</p>
          <h2 className="font-display text-5xl md:text-6xl mt-5 leading-[1.02] text-ink-900 tracking-tightest max-w-3xl">
            People who used to lose sleep over their books, and{' '}
            <span className="italic-fraunces text-forest-800">don't anymore.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {quotes.map((q, i) => (
            <figure
              key={i}
              className="reveal card-paper p-8 md:p-9 flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="font-display italic-fraunces text-7xl text-ochre-500/40 leading-none">
                &ldquo;
              </span>
              <blockquote className="font-display text-xl md:text-[1.4rem] text-ink-900 leading-[1.3] mt-[-1rem] tracking-tightest">
                {q.body}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-ink-700/15 text-sm text-ink-700">
                <span className="font-medium text-ink-900">{q.name}</span> · {q.town}
                <div className="text-ink-500 mt-1">{q.biz}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
