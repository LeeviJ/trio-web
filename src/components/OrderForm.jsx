import { useState } from 'react'

const periods = [
  { value: '12', label: '12 kuukautta — 120 €', price: '120 €' },
  { value: '6', label: '6 kuukautta — 65 €', price: '65 €' },
  { value: '1', label: '1 kuukausi — 12 €', price: '12 €' },
]

export default function OrderForm() {
  const [form, setForm] = useState({ email: '', period: '12' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/.netlify/functions/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ period: form.period, email: form.email }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Jokin meni pieleen. Yritä uudelleen.')
      }

      window.location.href = data.url
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  const selectedPeriod = periods.find((p) => p.value === form.period)

  return (
    <section id="order" className="py-20 px-6">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tilaa TrioLasku</h2>
          <p className="text-gray-500 leading-relaxed">
            Täytä sähköpostisi ja valitse tilausjakso. Sinut ohjataan turvalliseen Stripe-maksuun.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-8 space-y-6">
          <div className="space-y-2">
            <label htmlFor="order-email" className="block text-sm font-medium text-gray-700">
              Sähköposti
            </label>
            <input
              id="order-email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="matti@yritys.fi"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <p className="text-xs text-gray-400">
              Lisenssi ja käyttöönotto-ohjeet lähetetään tähän osoitteeseen.
            </p>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Tilausjakso</label>
            <div className="space-y-2">
              {periods.map((p) => (
                <label
                  key={p.value}
                  className={`flex items-center gap-3 border rounded-xl px-4 py-3 cursor-pointer transition-colors ${
                    form.period === p.value
                      ? 'border-primary bg-green-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="period"
                    value={p.value}
                    checked={form.period === p.value}
                    onChange={handleChange}
                    className="accent-primary"
                  />
                  <span className="text-sm font-medium text-gray-700">{p.label}</span>
                </label>
              ))}
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-primary-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-colors text-base"
          >
            {loading ? 'Ohjataan maksuun...' : `Siirry maksamaan — ${selectedPeriod.price}`}
          </button>

          <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>Turvallinen maksu — Stripe</span>
          </div>

          <p className="text-xs text-gray-400 text-center">
            Hinnat ALV 0 % — pienyritystoiminta (AVL 3 §)
          </p>
        </form>
      </div>
    </section>
  )
}
