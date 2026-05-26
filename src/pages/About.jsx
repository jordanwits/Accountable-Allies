import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 md:pt-44 pb-20 px-6 md:px-10">
        <div className="max-w-[1300px] mx-auto grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <p className="eyebrow">About Patti</p>
            <h1 className="font-display text-6xl md:text-8xl mt-6 leading-[0.96] text-ink-900 tracking-tightest">
              The accountant{' '}
              <span className="italic-fraunces text-forest-800">who almost</span>{' '}
              became a mortician.
            </h1>
            <p className="mt-8 text-ink-700 text-xl md:text-2xl leading-relaxed max-w-2xl">
              In college, I took an aptitude test that said I'd be great as either a mortician or an accountant.
            </p>
            <p className="mt-5 text-ink-700 text-xl md:text-2xl leading-relaxed max-w-2xl">
              Dead bodies give me{' '}
              <em className="italic-fraunces text-forest-800">the heebie-jeebies.</em>
              <br />
              So here we are.
            </p>
          </div>

          <div className="md:col-span-5 relative">
            <div className="relative">
              <img src="/patti.jpg" alt="Patti at her desk" className="w-full aspect-[4/5] object-cover" />
              {/* corner stamp */}
              <div className="absolute -top-4 -left-4 bg-cream-50 border border-ink-700/20 px-4 py-3 shadow-lg rotate-[-3deg]">
                <p className="font-display text-2xl text-forest-800 leading-tight tracking-tightest">
                  Patti
                </p>
                <p className="text-xs eyebrow">Strategic bookkeeper</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "I've done life the hard way" intro */}
      <section className="relative py-24 px-6 md:px-10">
        <div className="max-w-3xl mx-auto reveal">
          <p className="eyebrow">The short version</p>
          <p className="font-display text-3xl md:text-4xl mt-6 leading-[1.2] text-ink-900 tracking-tightest">
            I open my BNI talk with this line, and I'll open this page with it too:
          </p>
          <p className="font-display italic-fraunces text-5xl md:text-7xl mt-8 text-forest-800 leading-[1.05] tracking-tightest">
            "I've done life the hard way."
          </p>
          <p className="mt-8 text-ink-700 text-lg leading-relaxed">
            What follows are the three stories that earn me the right to say that, and the reason I'm pretty good at making things easier for the people I work with.
          </p>
        </div>
      </section>

      {/* STORY 1: IRS Audit, centerpiece */}
      <section className="relative py-24 md:py-32 px-6 md:px-10 bg-forest-900 text-cream-50 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>\")",
            backgroundSize: '200px 200px',
          }}
        />

        <div className="relative max-w-[1300px] mx-auto grid md:grid-cols-12 gap-10">
          <aside className="md:col-span-3 md:sticky md:top-32 md:self-start">
            <p className="font-mono text-xs text-ochre-400 tracking-widest">STORY ONE</p>
            <p className="font-display text-7xl text-ochre-400/70 mt-4 leading-none">I.</p>
            <p className="italic-fraunces text-cream-100/80 mt-4 max-w-[200px] leading-relaxed">
              The one with the IRS, the $1,900, and the refund.
            </p>
          </aside>

          <div className="md:col-span-9 reveal">
            <h2 className="font-display text-5xl md:text-7xl leading-[0.98] tracking-tightest">
              "Ignorance{' '}
              <span className="italic-fraunces text-ochre-400">is not bliss."</span>
            </h2>
            <p className="text-sm text-cream-100/60 mt-3 italic-fraunces">
              the IRS agent, in my own office
            </p>

            <div className="mt-10 space-y-6 text-cream-100/90 text-lg md:text-xl leading-relaxed max-w-2xl">
              <p>
                Early in my career, my husband and I had a 1099 from a business that didn't make any money. I figured if there was nothing to report, there was nothing to file. So I didn't.
              </p>
              <p>
                The IRS doesn't see it that way. They audited me anyway. The agent who sat down across from me told me I likely owed{' '}
                <span className="font-display text-ochre-400 italic-fraunces tabnum">$1,900</span>, and then said the line I've never forgotten:
              </p>
              <p className="font-display italic-fraunces text-2xl md:text-3xl text-ochre-400 my-4">
                "Ignorance is not bliss."
              </p>
              <p>
                Here's the part of the story I love: my records were{' '}
                <em className="italic-fraunces">meticulous</em>. Every receipt accounted for. Every entry where it should be. When we worked through what I actually owed versus what I'd already paid in, the number didn't go in the direction the agent expected.
              </p>
              <p className="text-ochre-400 italic-fraunces font-display text-2xl md:text-3xl leading-snug">
                I walked out with a refund.
              </p>
              <p>
                I've never forgotten that either. It's the whole reason I do this work the way I do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY 2: Algebra, pull quote */}
      <section className="relative py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1300px] mx-auto grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 reveal">
            <p className="font-mono text-xs text-ochre-500 tracking-widest">STORY TWO</p>
            <p className="font-display text-7xl text-ochre-500/40 mt-4 leading-none">II.</p>
            <h2 className="font-display italic-fraunces text-3xl md:text-4xl mt-6 text-forest-800 leading-tight tracking-tightest">
              The high-school algebra story, which is also the whole philosophy.
            </h2>
          </div>
          <div className="md:col-span-7 reveal">
            <div className="card-paper p-10 md:p-14">
              <p className="text-ink-700 text-lg leading-relaxed">
                I consistently got the right answers on my algebra tests. I just didn't show my work. So I was failing.
              </p>
              <p className="mt-5 text-ink-700 text-lg leading-relaxed">
                I asked my teacher about it. He said the reason I was failing was because I wouldn't show my work. My response, which I still believe, was this:
              </p>
              <blockquote className="font-display text-3xl md:text-5xl text-ink-900 mt-8 leading-[1.05] tracking-tightest">
                "The only thing that matters is{' '}
                <span className="scribble">the bottom line.</span>"
              </blockquote>
              <p className="mt-10 text-ink-700 text-base leading-relaxed">
                Here's how that translates: I show my work for the IRS. I don't make you sit through it.
              </p>
              <p className="mt-3 text-ink-700 text-base leading-relaxed">
                You see clarity. I do the meticulous part in the background, where it belongs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY 3 was opener: short referral case study */}
      <section className="relative py-24 md:py-32 px-6 md:px-10 bg-cream-50 border-y border-ink-700/10">
        <div className="max-w-[1300px] mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4 reveal">
            <p className="eyebrow">A typical engagement</p>
            <h2 className="font-display text-4xl md:text-5xl mt-5 text-ink-900 leading-[1.05] tracking-tightest">
              What this{' '}
              <span className="italic-fraunces text-forest-800">actually looks like.</span>
            </h2>
          </div>
          <div className="md:col-span-8 reveal text-ink-700 text-lg md:text-xl leading-relaxed space-y-6">
            <p>
              I had a referral come to me thinking their books just needed a little attention. But once I got in, the numbers weren't lining up the way they should.
            </p>
            <p>
              We worked through it, cleaned everything up, and put a system in place to keep it consistent.
            </p>
            <p className="italic-fraunces text-forest-800 font-display text-2xl md:text-3xl">
              Now they're not avoiding their numbers anymore. They're actually using them.
            </p>
            <p className="text-ink-500 text-base">
              No client name. No specifics that would identify them. But this is what the work looks like, more often than not.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSER */}
      <section className="relative py-32 px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center reveal">
          <p className="eyebrow">The whole point</p>
          <h2 className="font-display text-5xl md:text-7xl mt-6 leading-[1] text-ink-900 tracking-tightest">
            Because I've done things{' '}
            <span className="italic-fraunces text-forest-800">the hard way,</span>
            <br />
            I've learned how to make them{' '}
            <span className="italic-fraunces text-ochre-500">simpler</span>{' '}
            for everyone else.
          </h2>
          <Link to="/contact" className="btn-primary mt-12">
            Let's have a 20-minute conversation
            <span className="arrow">→</span>
          </Link>
        </div>
      </section>
    </>
  )
}
