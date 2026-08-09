import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="relative bg-forest-900 text-cream-100">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ochre-500/40 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <p className="eyebrow !text-cream-100/80">Accountable Allies, LLC</p>
          <h3 className="font-display text-3xl md:text-4xl mt-4 leading-[1.05] text-cream-50">
            You don't have to understand any of this.{' '}
            <span className="italic-fraunces text-ochre-400">That's what I'm here for.</span>
          </h3>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <p className="eyebrow !text-cream-100/80">Reach me directly</p>
          <ul className="mt-5 space-y-2 text-cream-100/90">
            <li>
              <a href="tel:+15309832596" className="text-cream-100/90 hover:text-cream-50 transition-colors tabnum">
                (530) 983-2596
              </a>
            </li>
            <li>
              <a href="mailto:Patti@accountablealliesllc.com" className="text-cream-100/90 hover:text-cream-50 transition-colors">
                Patti@accountablealliesllc.com
              </a>
            </li>
            <li className="text-cream-100/75 text-sm pt-2">I read every message myself.</li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="eyebrow !text-cream-100/80">Pages</p>
          <ul className="mt-5 space-y-2">
            <li><Link to="/" className="text-cream-100/90 hover:text-cream-50 transition-colors">Home</Link></li>
            <li><Link to="/#how-it-works" className="text-cream-100/90 hover:text-cream-50 transition-colors">How it works</Link></li>
            <li><Link to="/#pricing" className="text-cream-100/90 hover:text-cream-50 transition-colors">Services</Link></li>
            <li><Link to="/about" className="text-cream-100/90 hover:text-cream-50 transition-colors">About</Link></li>
            <li><Link to="/contact" className="text-cream-100/90 hover:text-cream-50 transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream-100/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 flex flex-col sm:flex-row gap-3 justify-between text-sm text-cream-100/75">
          <p>© {new Date().getFullYear()} Accountable Allies, LLC.</p>
          <p className="italic-fraunces text-cream-100/75">QuickBooks ProAdvisor · Decades of meticulous bookkeeping</p>
        </div>
      </div>
    </footer>
  )
}
