export default function Marquee() {
  const items = [
    'First-person, always',
    'QuickBooks ProAdvisor',
    'No hype. No jargon.',
    "I pick up my own phone",
    'Strategic bookkeeping',
    'Records your future self will thank you for',
    'Meticulous by nature',
  ]
  const list = [...items, ...items]

  return (
    <section className="relative bg-cream-100/80 border-y border-ink-700/10 py-6 overflow-hidden">
      <div className="marquee-track">
        {list.map((s, i) => (
          <div key={i} className="flex items-center gap-10 shrink-0">
            <span className="font-display italic-fraunces text-2xl md:text-3xl text-forest-800 whitespace-nowrap">
              {s}
            </span>
            <span className="w-2 h-2 rounded-full bg-ochre-500" />
          </div>
        ))}
      </div>
    </section>
  )
}
