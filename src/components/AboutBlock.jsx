import { Link } from 'react-router-dom'

export default function AboutBlock() {
  return (
    <section className="relative py-28 md:py-36 px-6 md:px-10 bg-cream-50 overflow-hidden">
      <div className="max-w-[1300px] mx-auto grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-5 reveal relative">
          <div className="relative">
            <img
              src="/ledger.jpg"
              alt="A handwritten ledger and a cup of tea"
              className="w-full aspect-[4/5] object-cover"
            />
            {/* Small floating credential card */}
            <div className="absolute -bottom-6 -right-6 bg-cream-50 px-5 py-4 shadow-xl border border-ink-700/10 max-w-[200px]">
              <p className="eyebrow text-ink-500">Credentialed</p>
              <p className="font-display text-xl text-ink-900 leading-tight mt-2">
                QuickBooks <span className="italic-fraunces">ProAdvisor</span>
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 md:pl-8 reveal">
          <p className="eyebrow">About Patti</p>
          <h2 className="font-display text-5xl md:text-6xl mt-5 leading-[1] text-ink-900 tracking-tightest">
            I once got audited.{' '}
            <span className="italic-fraunces text-forest-800">I walked out with a refund.</span>
          </h2>
          <p className="mt-6 text-ink-700 text-lg leading-relaxed">
            Long story short: careful records saved me. It's why I keep yours the way I do, and why the surprises in your business go in your favor, not the IRS's.
          </p>

          <Link to="/about#story-1" className="btn-ghost mt-10">
            Read the whole story
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
