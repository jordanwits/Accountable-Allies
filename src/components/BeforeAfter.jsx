const before = ['Confusion', 'Avoidance', 'Guessing']
const after = ['Clarity', 'Confidence', 'Decisions']

export default function BeforeAfter() {
  return (
    <section className="relative py-28 md:py-36 px-6 md:px-10 bg-forest-900 text-cream-100 overflow-hidden">
      {/* Decorative ledger image, very subtle */}
      <div
        className="absolute inset-0 z-0 opacity-[0.11] pointer-events-none"
        style={{
          backgroundImage: 'url(/ledger.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'screen',
        }}
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>\")",
          backgroundSize: '200px 200px',
        }}
      />
      <div className="absolute inset-0 z-0 bg-cream-50/[0.05] pointer-events-none" />

      <div className="relative z-10 max-w-[1300px] mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="eyebrow !text-cream-100/80">The whole job, in one sentence</p>
          <h2 className="font-display text-5xl md:text-7xl mt-5 leading-[1] text-cream-50 tracking-tightest max-w-4xl mx-auto">
            My job is to move you from the{' '}
            <span className="italic-fraunces text-ochre-400">left</span> to the{' '}
            <span className="italic-fraunces text-ochre-400">right.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-0 relative">
          {/* BEFORE */}
          <div className="reveal relative bg-ink-900/60 border border-cream-100/10 p-10 md:p-14 md:rounded-l-sm">
            <p className="eyebrow !text-cream-100/50">Before</p>
            <ul className="mt-8 space-y-7">
              {before.map((b, i) => (
                <li key={b} className="flex items-baseline gap-5">
                  <span className="font-mono text-xs text-cream-100/40 tabnum">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-display text-4xl md:text-5xl text-cream-100/80 leading-none tracking-tightest">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-cream-100/60 italic-fraunces text-lg">
              Numbers that don't match. Reports you can't trust.
            </p>
          </div>

          {/* Arrow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center">
            <div className="bg-ochre-500 text-forest-900 rounded-full w-16 h-16 flex items-center justify-center font-display text-3xl shadow-2xl">
              →
            </div>
          </div>

          {/* AFTER */}
          <div className="reveal relative bg-gradient-to-br from-forest-700 to-forest-800 border border-ochre-500/30 p-10 md:p-14 md:rounded-r-sm">
            <div className="absolute top-6 right-6 font-display italic-fraunces text-ochre-400 text-sm">
              with Patti
            </div>
            <p className="eyebrow !text-ochre-400">After</p>
            <ul className="mt-8 space-y-7">
              {after.map((a, i) => (
                <li key={a} className="flex items-baseline gap-5">
                  <span className="font-mono text-xs text-ochre-400 tabnum">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-display text-4xl md:text-5xl text-cream-50 leading-none tracking-tightest">
                    {a}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-cream-100/85 italic-fraunces text-lg">
              Reports you can act on. Books that are caught up, and stay that way.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
