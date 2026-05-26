import { Link } from 'react-router-dom'

const fourSteps = [
  { n: '01', title: 'Clean it up.', body: "Start with what's there. Sort through the categorizations, fix the misallocated entries, and stop the slow leaks." },
  { n: '02', title: 'Align everything with the bank.', body: "Reconcile to the dollar. If QuickBooks and the bank disagree, the bank wins. Always." },
  { n: '03', title: 'Build a simple system.', body: "Set up a routine that doesn't depend on heroics. Something that holds together when you're busy." },
  { n: '04', title: 'Keep it consistent.', body: "Show up every month. Same cadence. No catching-up-before-tax-time emergencies." },
]

const walkInto = [
  "Numbers don't match.",
  "Accounts aren't reconciled.",
  "Reports can't be trusted.",
]

const services = [
  {
    name: 'Cleanup & catch-up',
    inbox: 'A clear write-up of what was off, what I fixed, and what we\'re doing differently from here on out.',
    body: "If you've fallen behind (or you inherited a mess from a prior bookkeeper), this is the work that gets the books back to a place you can trust them. No guilt, no lecture. Just a fix.",
  },
  {
    name: 'Monthly bookkeeping',
    inbox: 'A short monthly note with what came in, what went out, and anything worth your attention. Read it in three minutes.',
    body: "Categorization, reconciliation, and a quiet rhythm you don't have to think about. Your CPA gets clean files when they need them. You get a calm inbox.",
  },
  {
    name: 'QuickBooks setup & maintenance',
    inbox: "A logged-in QuickBooks that reflects how your business actually runs, not how a generic template thinks it should.",
    body: 'New file or rebuilding an existing one. Chart of accounts tuned to your industry. Bank feeds wired up. The setup that makes everything afterward easier.',
  },
  {
    name: 'Reporting that\'s actually useful',
    inbox: 'A P&L and balance sheet that read like English, not accounting class. With a sentence or two about what to notice.',
    body: "Monthly or quarterly. Designed to be read, not just filed. If you can't answer 'how is the business doing?' in 60 seconds, the reports aren't doing their job.",
  },
]

export default function Services() {
  return (
    <>
      {/* HEADER */}
      <section className="relative pt-36 md:pt-44 pb-20 px-6 md:px-10">
        <div className="max-w-[1300px] mx-auto grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <p className="eyebrow">Services</p>
            <h1 className="font-display text-6xl md:text-8xl mt-6 leading-[0.96] text-ink-900 tracking-tightest">
              Four steps.{' '}
              <span className="italic-fraunces text-forest-800">In that order.</span>{' '}
              Every time.
            </h1>
            <p className="mt-8 text-ink-700 text-xl leading-relaxed max-w-2xl">
              This isn't about making things complicated. It's about making them simple enough that they stay manageable.
            </p>
          </div>
          <div className="md:col-span-4">
            <p className="margin-note text-right md:text-left">
              Patti, BNI talk
            </p>
          </div>
        </div>
      </section>

      {/* FOUR STEPS */}
      <section className="relative pb-24 md:pb-32 px-6 md:px-10">
        <div className="max-w-[1300px] mx-auto">
          <ol className="grid md:grid-cols-2 gap-x-12 gap-y-14">
            {fourSteps.map((s, i) => (
              <li key={s.n} className="reveal relative" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="flex items-start gap-6">
                  <span className="font-display text-7xl md:text-8xl text-ochre-500 tracking-tightest tabnum leading-none">
                    {s.n}
                  </span>
                  <div className="pt-2">
                    <h3 className="font-display text-3xl md:text-4xl text-ink-900 leading-tight tracking-tightest">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-ink-700 text-lg leading-relaxed max-w-md">
                      {s.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHAT I WALK INTO */}
      <section className="relative py-24 md:py-32 px-6 md:px-10 bg-forest-800 text-cream-50 overflow-hidden">
        <div
          className="absolute -left-32 -top-32 w-[500px] h-[500px] opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: 'url(/desk-coffee.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'screen',
          }}
        />
        <div className="relative max-w-[1300px] mx-auto grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 reveal">
            <p className="eyebrow text-ochre-400">What I usually walk into</p>
            <h2 className="font-display text-4xl md:text-5xl mt-5 leading-[1.05] tracking-tightest">
              The state of the books{' '}
              <span className="italic-fraunces text-ochre-400">on day one.</span>
            </h2>
          </div>
          <div className="md:col-span-7 reveal">
            <ul className="space-y-6">
              {walkInto.map((w, i) => (
                <li key={w} className="border-t border-cream-100/15 pt-6 flex items-baseline gap-6">
                  <span className="font-mono text-xs text-ochre-400 tabnum">0{i + 1}</span>
                  <span className="font-display text-3xl md:text-4xl text-cream-50 tracking-tightest leading-tight">
                    {w}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-10 italic-fraunces text-ochre-400 font-display text-xl">
              That's what I call the hard way.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="relative py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1300px] mx-auto">
          <div className="mb-16 reveal max-w-3xl">
            <p className="eyebrow">The four service areas</p>
            <h2 className="font-display text-5xl md:text-6xl mt-5 leading-[1] text-ink-900 tracking-tightest">
              What this looks like in your{' '}
              <span className="italic-fraunces text-forest-800">inbox.</span>
            </h2>
            <p className="mt-6 text-ink-700 text-lg">
              Each engagement is a mix of these. The "what it feels like" line is what you'll actually experience, because that's what you're really buying.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {services.map((s, i) => (
              <article
                key={s.name}
                className="reveal card-paper p-8 md:p-10 group hover:-translate-y-1 hover:shadow-xl transition-all duration-500"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p className="font-mono text-xs tracking-widest text-ochre-500">0{i + 1}</p>
                <h3 className="font-display text-3xl md:text-4xl mt-4 leading-tight tracking-tightest text-ink-900">
                  {s.name}
                </h3>
                <p className="mt-5 text-ink-700 text-base leading-relaxed">{s.body}</p>
                <div className="mt-6 pt-5 border-t border-ink-700/15">
                  <p className="eyebrow text-ink-500">What it feels like</p>
                  <p className="mt-3 italic-fraunces text-forest-800 text-lg leading-snug">
                    {s.inbox}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DO/DON'T reinforcement */}
      <section className="relative py-24 md:py-32 px-6 md:px-10 bg-cream-200/60">
        <div className="max-w-[1300px] mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5 reveal">
            <p className="eyebrow">A quick reminder</p>
            <h2 className="font-display text-4xl md:text-5xl mt-5 leading-[1.05] text-ink-900 tracking-tightest">
              I stay in my lane{' '}
              <span className="italic-fraunces text-terra-500">on purpose.</span>
            </h2>
          </div>
          <div className="md:col-span-7 reveal text-ink-700 text-lg leading-relaxed space-y-5">
            <p>
              I'm a strategic bookkeeper. I'm not a tax strategist, I'm not a CFO, and I'm not going to consult on what flavor your business should be next quarter.
            </p>
            <p>
              I'm the person who actually does the work, not a layer between you and someone else doing the work somewhere offshore.
            </p>
            <p className="italic-fraunces text-forest-800 font-display text-2xl">
              When you call, you get me.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center reveal">
          <h2 className="font-display text-5xl md:text-6xl leading-[1] text-ink-900 tracking-tightest">
            See if we're a fit{' '}
            <span className="italic-fraunces text-forest-800">in 20 minutes.</span>
          </h2>
          <Link to="/contact" className="btn-primary mt-10">
            Schedule a conversation
            <span className="arrow">→</span>
          </Link>
        </div>
      </section>
    </>
  )
}
