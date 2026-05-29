import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 md:pt-44 pb-20 px-6 md:px-10">
        <div className="max-w-[1300px] mx-auto grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7">
            <p className="eyebrow">About Patti</p>
            <h1 className="font-display text-5xl md:text-7xl mt-6 leading-[0.96] text-ink-900 tracking-tightest">
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

          <div className="md:col-span-5 relative flex justify-center md:justify-start">
            <div className="relative w-64 md:w-72">
              <img src="/PattiPortrait.jpeg" alt="Patti portrait" className="w-full aspect-[3/4] object-cover object-top" />
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
            <p className="font-mono text-xs text-cream-100/60 tracking-widest">STORY ONE</p>
            <p className="font-display text-7xl text-ochre-400 mt-4 leading-none">I.</p>
            <p className="italic-fraunces text-cream-100/80 mt-4 max-w-[200px] leading-relaxed">
              The one with the IRS, the $1,900, and the refund.
            </p>
          </aside>

          <div className="md:col-span-9 reveal">
            <h2 className="font-display text-5xl md:text-7xl leading-[0.98] tracking-tightest">
              "Ignorance{' '}
              <span className="italic-fraunces text-ochre-400">is not an excuse."</span>
            </h2>
            <p className="text-sm text-cream-100/60 mt-3 italic-fraunces">
              the IRS agent, across the interrogation desk
            </p>

            <div className="mt-10 space-y-6 text-cream-100/90 text-lg md:text-xl leading-relaxed max-w-2xl">
              <p>
                In my early twenties, my husband received a 1099 for some side work he'd done. Everything he was paid went straight back out to the expenses that work cost. I figured the money came in and went right back out, so there was nothing to report and nothing to file. So I didn't.
              </p>
              <p>
                The IRS doesn't see it that way. More than a year later, a letter arrived saying I needed to appear. The agent who sat across the interrogation desk told me I likely owed{' '}
                <span className="font-display text-ochre-400 italic-fraunces tabnum">$1,900</span> in taxes and penalties. I explained my reasoning. He told me that's not how it works. I lowered my head and said I didn't know. His response has stuck with me ever since:
              </p>
              <p className="font-display italic-fraunces text-2xl md:text-3xl text-ochre-400 my-4">
                "Ignorance is not an excuse."
              </p>
              <p>
                Here's the part I love: I had every record &mdash; albeit all of it in a shoe box. Check stubs for every payment received, matched to the 1099. Every receipt accounted for. Even the mileage to and from. If I'd known how to keep books back then, it would've been logged instead of loose in a box. When we worked through what was earned versus what was an expense, the number didn't go in the direction the agent expected.
              </p>
              <p className="text-ochre-400 italic-fraunces font-display text-2xl md:text-3xl leading-snug">
                I walked out with the IRS owing us a refund.
              </p>
              <p>
                I've never forgotten that either. It's the whole reason I do this work the way I do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY 2: Geometry, pull quote */}
      <section className="relative py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1300px] mx-auto grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 reveal">
            <p className="font-mono text-xs text-forest-600 tracking-widest">STORY TWO</p>
            <p className="font-display text-7xl text-forest-800 mt-4 leading-none">II.</p>
            <h2 className="font-display italic-fraunces text-3xl md:text-4xl mt-6 text-forest-800 leading-tight tracking-tightest">
              The high-school geometry story, which is also the whole philosophy.
            </h2>
          </div>
          <div className="md:col-span-7 reveal">
            <div className="card-paper p-10 md:p-14">
              <p className="text-ink-700 text-lg leading-relaxed">
                I consistently got the right answers on my geometry homework and tests. I also consistently got an "F." The bottom-line answer was always correct. I didn't understand.
              </p>
              <p className="mt-5 text-ink-700 text-lg leading-relaxed">
                I asked my teacher, "What am I doing wrong? My answer is always right." He said I was failing because I didn't show my work &mdash; there's a process to get to the answer, and skipping it made the answer wrong. My response, which I still believe, was this:
              </p>
              <blockquote className="font-display text-3xl md:text-5xl text-ink-900 mt-8 leading-[1.05] tracking-tightest">
                "The only thing that matters is{' '}
                <span className="scribble">the bottom line.</span>"
              </blockquote>
              <p className="mt-10 text-ink-700 text-base leading-relaxed">
                Here's how that translates: I don't attach the laws or guidelines to every bookkeeping entry, even though every entry is based on them. I produce the reports your CPA, the IRS, and your bank need &mdash; and I don't make you sit through how I got there. I answer any question you have so you understand your books your way.
              </p>
              <p className="mt-3 text-ink-700 text-base leading-relaxed">
                You see clarity. I do the meticulous part in the background, where it belongs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY 3: the aptitude test (mortician vs. accountant) */}
      <section className="relative py-24 md:py-32 px-6 md:px-10 bg-cream-50 border-y border-ink-700/10">
        <div className="max-w-[1300px] mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4 reveal">
            <p className="font-mono text-xs text-forest-600 tracking-widest">STORY THREE</p>
            <p className="font-display text-7xl text-forest-800 mt-4 leading-none">III.</p>
            <h2 className="font-display italic-fraunces text-3xl md:text-4xl mt-6 text-forest-800 leading-tight tracking-tightest">
              How I ended up an accountant instead of a mortician.
            </h2>
          </div>
          <div className="md:col-span-8 reveal text-ink-700 text-lg md:text-xl leading-relaxed space-y-6">
            <p>
              I started college later than most. In one of my first classes, I took an aptitude test meant to point you toward the career that fit your personality.
            </p>
            <p>
              It came back with several options, but the top two tied: mortician or accountant.
            </p>
            <p className="italic-fraunces text-forest-800 font-display text-2xl md:text-3xl">
              Dead bodies give me the heebie-jeebies. That left exactly one option &mdash; and here we are.
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
            <span className="italic-fraunces text-forest-800">simpler</span>{' '}
            for everyone else.
          </h2>
          <Link to="/contact" className="btn-primary mt-12">
            Let's have a conversation
            <span className="arrow">→</span>
          </Link>
        </div>
      </section>
    </>
  )
}
