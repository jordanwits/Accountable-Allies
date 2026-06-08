import { useMemo, useState } from 'react'

/*
 * Booking scheduler — UI flow only.
 *
 * Calendly integration seam: the three functions below (monthAvailability,
 * slotsForDay, createBooking) are the only places that touch "data". Swap their
 * mock bodies for Calendly API calls and the rest of the component is unchanged.
 *
 *   - monthAvailability(year, month, today) -> Set<dateString> of bookable days
 *   - slotsForDay(date)                     -> [{ id, label, iso }] of open times
 *   - createBooking({ date, slot, ...form }) -> Promise resolving on success
 */

const WEEKDAY_LABELS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]
const FULL_WEEKDAYS = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
]

const key = (d) => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`
const stripTime = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate())

// --- MOCK DATA (replace with Calendly) -----------------------------------
function monthAvailability(year, month, today) {
  const days = new Set()
  const t = stripTime(today)
  const total = new Date(year, month + 1, 0).getDate()
  for (let day = 1; day <= total; day++) {
    const date = new Date(year, month, day)
    if (stripTime(date) < t) continue // no past days
    const dow = date.getDay()
    if (dow === 0 || dow === 6) continue // weekends closed
    if (day % 6 === 0) continue // pretend a few weekdays are fully booked
    days.add(key(date))
  }
  return days
}

const BASE_SLOTS = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM',
]
function slotsForDay(date) {
  if (!date) return []
  const seed = date.getDate()
  return BASE_SLOTS
    .filter((_, i) => (seed + i) % 3 !== 0)
    .map((label, i) => ({ id: `${key(date)}-${i}`, label }))
}

function createBooking(details) {
  // Replace with Calendly scheduling API call.
  return new Promise((resolve) => setTimeout(resolve, 700))
}
// -------------------------------------------------------------------------

const TZ = (() => {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'your local time'
  } catch {
    return 'your local time'
  }
})()

function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}
function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

export default function Scheduler() {
  const today = useMemo(() => new Date(), [])
  const [view, setView] = useState({ year: today.getFullYear(), month: today.getMonth() })
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [step, setStep] = useState('pick') // 'pick' | 'details' | 'done'
  const [form, setForm] = useState({ name: '', email: '', note: '' })
  const [busy, setBusy] = useState(false)
  const [hp, setHp] = useState('')

  const availability = useMemo(
    () => monthAvailability(view.year, view.month, today),
    [view, today],
  )
  const slots = useMemo(() => slotsForDay(selectedDate), [selectedDate])

  const isCurrentMonth =
    view.year === today.getFullYear() && view.month === today.getMonth()

  // Build the calendar grid (leading blanks + day numbers).
  const cells = useMemo(() => {
    const firstDow = new Date(view.year, view.month, 1).getDay()
    const total = new Date(view.year, view.month + 1, 0).getDate()
    const out = []
    for (let i = 0; i < firstDow; i++) out.push(null)
    for (let d = 1; d <= total; d++) out.push(new Date(view.year, view.month, d))
    return out
  }, [view])

  function shiftMonth(delta) {
    setView((v) => {
      const m = v.month + delta
      return { year: v.year + Math.floor(m / 12), month: ((m % 12) + 12) % 12 }
    })
  }

  function pickDate(date) {
    setSelectedDate(date)
    setSelectedSlot(null)
  }

  async function confirm(e) {
    e.preventDefault()
    if (hp) return
    setBusy(true)
    await createBooking({ date: selectedDate, slot: selectedSlot, ...form })
    setBusy(false)
    setStep('done')
  }

  function reset() {
    setSelectedDate(null)
    setSelectedSlot(null)
    setForm({ name: '', email: '', note: '' })
    setStep('pick')
  }

  const longDate = selectedDate
    ? `${FULL_WEEKDAYS[selectedDate.getDay()]}, ${MONTH_NAMES[view.month]} ${selectedDate.getDate()}`
    : null

  return (
    <div className="card-paper p-6 sm:p-8 md:p-10">
      <p className="eyebrow">Book a call</p>
      <h2 className="font-display text-3xl md:text-4xl mt-4 leading-tight tracking-tightest text-ink-900">
        Pick a time that{' '}
        <span className="italic-fraunces text-forest-800">suits you.</span>
      </h2>
      <p className="margin-note mt-4">
        A relaxed 30-minute call. You tell me what&rsquo;s going on, I ask a few questions, and we decide together if I&rsquo;m the right fit.
      </p>

      {step === 'done' ? (
        <div className="mt-10 py-10 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest-800 text-cream-50">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <p className="font-display text-4xl md:text-5xl text-forest-800 italic-fraunces mt-6">
            You&rsquo;re booked.
          </p>
          <p className="mt-5 text-ink-700 text-lg">
            {longDate} at {selectedSlot?.label}
          </p>
          <p className="mt-1 text-ink-500 text-sm">
            A calendar invite is on its way to {form.email || 'your inbox'}.
          </p>
          <button onClick={reset} className="btn-ghost mt-8 mx-auto">
            Book another time
          </button>
        </div>
      ) : step === 'details' ? (
        <form className="mt-10 space-y-8" onSubmit={confirm}>
          <div className="flex items-center gap-3 rounded bg-cream-100 border border-ink-700/10 px-4 py-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
              className="text-forest-800 shrink-0" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <div className="min-w-0">
              <p className="text-ink-900 font-medium leading-tight">
                {longDate} · {selectedSlot?.label}
              </p>
              <p className="text-ink-500 text-xs mt-0.5">30 minutes · {TZ}</p>
            </div>
            <button
              type="button"
              onClick={() => setStep('pick')}
              className="ml-auto text-sm text-forest-800 hover:text-forest-900 transition-colors shrink-0"
            >
              Change
            </button>
          </div>

          <input
            type="text"
            name="company-website"
            value={hp}
            onChange={(e) => setHp(e.target.value)}
            style={{ position: 'absolute', left: '-9999px' }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <label className="block">
            <span className="field-label">Your name *</span>
            <input
              className="field"
              type="text"
              required
              autoComplete="name"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            />
          </label>

          <label className="block">
            <span className="field-label">Email *</span>
            <input
              className="field"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            />
          </label>

          <label className="block">
            <span className="field-label">Anything I should know first?</span>
            <textarea
              className="field resize-none"
              rows={3}
              value={form.note}
              onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))}
              placeholder="Optional — a sentence on where things stand."
            />
          </label>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <button type="submit" className="btn-primary" disabled={busy}>
              {busy ? 'Booking…' : 'Confirm call'}
              {!busy && <span className="arrow">→</span>}
            </button>
            <button
              type="button"
              onClick={() => setStep('pick')}
              className="text-sm text-ink-500 hover:text-ink-800 transition-colors"
            >
              Back
            </button>
          </div>
        </form>
      ) : (
        <div className="mt-8 grid md:grid-cols-[1.2fr_1fr] gap-8 md:gap-10">
          {/* Calendar */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <p className="font-display text-xl text-ink-900 tracking-tightest">
                {MONTH_NAMES[view.month]} {view.year}
              </p>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => shiftMonth(-1)}
                  disabled={isCurrentMonth}
                  aria-label="Previous month"
                  className="flex h-9 w-9 items-center justify-center rounded-full text-ink-700 transition-colors hover:bg-cream-100 disabled:opacity-25 disabled:hover:bg-transparent disabled:cursor-not-allowed"
                >
                  <ChevronLeft />
                </button>
                <button
                  type="button"
                  onClick={() => shiftMonth(1)}
                  aria-label="Next month"
                  className="flex h-9 w-9 items-center justify-center rounded-full text-ink-700 transition-colors hover:bg-cream-100"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
              {WEEKDAY_LABELS.map((d) => (
                <div
                  key={d}
                  className="text-center text-[0.7rem] font-medium uppercase tracking-wider text-ink-400 py-1"
                >
                  {d}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {cells.map((date, i) => {
                if (!date) return <div key={`b${i}`} />
                const available = availability.has(key(date))
                const isSelected = selectedDate && key(date) === key(selectedDate)
                const isToday = key(date) === key(today)
                return (
                  <button
                    type="button"
                    key={key(date)}
                    disabled={!available}
                    onClick={() => pickDate(date)}
                    className={[
                      'relative aspect-square flex items-center justify-center rounded-full text-sm tabnum transition-all duration-200',
                      isSelected
                        ? 'bg-forest-800 text-cream-50 font-medium shadow-[0_6px_18px_-8px_rgba(21,34,56,0.55)]'
                        : available
                          ? 'text-ink-900 hover:bg-cream-100 hover:-translate-y-px cursor-pointer'
                          : 'text-ink-400/50 cursor-not-allowed',
                      isToday && !isSelected ? 'font-semibold text-forest-800' : '',
                    ].join(' ')}
                  >
                    {date.getDate()}
                    {available && !isSelected && (
                      <span className="absolute bottom-1.5 h-1 w-1 rounded-full bg-ochre-500" />
                    )}
                  </button>
                )
              })}
            </div>

            <p className="mt-5 flex items-center gap-2 text-xs text-ink-500">
              <span className="h-1.5 w-1.5 rounded-full bg-ochre-500" />
              Times shown in {TZ}
            </p>
          </div>

          {/* Time slots */}
          <div className="md:border-l md:border-ink-700/10 md:pl-8">
            {!selectedDate ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10 md:py-0">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  className="text-ink-400 mb-3" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <polyline points="12 7 12 12 15 14" />
                </svg>
                <p className="margin-note">Pick a day to see open times.</p>
              </div>
            ) : (
              <div>
                <p className="font-display text-lg text-ink-900 tracking-tightest mb-1">
                  {longDate}
                </p>
                <p className="text-ink-500 text-xs mb-5">
                  {slots.length} {slots.length === 1 ? 'time' : 'times'} available
                </p>
                {slots.length === 0 ? (
                  <p className="margin-note">No times left this day — try another.</p>
                ) : (
                  <div className="grid grid-cols-2 gap-2 max-h-[18rem] overflow-y-auto pr-1 -mr-1">
                    {slots.map((slot) => {
                      const active = selectedSlot?.id === slot.id
                      return (
                        <button
                          type="button"
                          key={slot.id}
                          onClick={() => setSelectedSlot(slot)}
                          className={[
                            'rounded-full border py-2.5 text-sm tabnum transition-all duration-200',
                            active
                              ? 'border-forest-900 bg-forest-800 text-cream-50 font-medium'
                              : 'border-ink-700/20 text-ink-800 hover:border-forest-800 hover:-translate-y-px',
                          ].join(' ')}
                        >
                          {slot.label}
                        </button>
                      )
                    })}
                  </div>
                )}

                <button
                  type="button"
                  disabled={!selectedSlot}
                  onClick={() => setStep('details')}
                  className="btn-primary mt-7 w-full justify-center disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[0_1px_0_rgba(255,255,255,0.07)_inset,0_6px_18px_-8px_rgba(21,34,56,0.55)]"
                >
                  Continue
                  <span className="arrow">→</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
