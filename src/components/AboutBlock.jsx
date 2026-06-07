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
            In my early twenties, my husband got a 1099 for side work that all went right back out to expenses, so I figured there was nothing to file. The IRS didn't see it that way. The agent told me I likely owed $1,900 and said the line I've never forgotten:{' '}
            <em className="italic-fraunces text-forest-800">"Ignorance is not bliss."</em>
          </p>
          <p className="mt-5 text-ink-700 text-lg leading-relaxed">
            But I had every record, even if it was all in a shoe box. When the dust settled, I walked out with the IRS{' '}
            <span className="italic-fraunces text-forest-800">owing us a refund</span>, not a bill.
          </p>
          <p className="mt-5 text-ink-700 text-lg leading-relaxed">
            That's the whole pitch, really. I keep your records the way I keep my own, so the surprises in your business come from your customers, not from your books.
          </p>

          <Link to="/about" className="btn-ghost mt-10">
            Read why I went accountant instead of mortician
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
