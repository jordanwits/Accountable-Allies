import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import SignalLanguage from '../components/SignalLanguage.jsx'
import BeforeAfter from '../components/BeforeAfter.jsx'
import HowItGoes from '../components/HowItGoes.jsx'
import Tiers from '../components/Tiers.jsx'
import AboutBlock from '../components/AboutBlock.jsx'
import DoDont from '../components/DoDont.jsx'
import Marquee from '../components/Marquee.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <SignalLanguage />
      <BeforeAfter />
      <div id="how-it-works" className="scroll-mt-20 md:scroll-mt-24">
        <HowItGoes />
      </div>
      <div id="pricing" className="scroll-mt-20 md:scroll-mt-24">
        <Tiers />
      </div>
      <AboutBlock />
      <DoDont />

      {/* Closing CTA */}
      <section className="relative py-32 px-6 md:px-10 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center reveal">
          <p className="eyebrow text-ink-500">One more thing</p>
          <h2 className="font-display text-5xl md:text-7xl mt-6 leading-[1.02] text-ink-900 tracking-tightest">
            If you're not sure we're a fit,{' '}
            <span className="italic-fraunces text-forest-800">that's exactly what the first conversation is for.</span>
          </h2>
          <p className="mt-8 text-ink-700 text-lg max-w-xl mx-auto">
            At least thirty minutes. No pressure. I'll listen, ask a few questions, and tell you honestly whether I'm the right person to help.
          </p>
          <Link to="/contact" className="btn-primary mt-10">
            Schedule a conversation
            <span className="arrow">→</span>
          </Link>
          <p className="margin-note mt-8">
            For CPAs, financial advisors, lenders & insurance agents. Referrals always welcome.
          </p>
        </div>
      </section>
    </>
  )
}
