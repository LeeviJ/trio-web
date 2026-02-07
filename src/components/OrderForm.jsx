import { useState } from 'react'

const periods = [
  { value: '12', label: '12 kuukautta — 120 €', price: '120 €' },
  { value: '6', label: '6 kuukautta — 65 €', price: '65 €' },
  { value: '1', label: '1 kuukausi — 12 €', price: '12 €' },
]

export default function OrderForm() {
  const [form, setForm] = useState({ email: '', period: '12' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const selectedLabel = periods.find((p) => p.value === form.period)?.label || ''

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'triolasku-order',
          email: form.email,
          period: selectedLabel,
        }).toString(),
      })

      if (!res.ok) throw new Error('Lomakkeen lähetys epäonnistui.')
      setSubmitted(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const selectedPeriod = periods.find((p) => p.value === form.period)

  if (submitted) {
    return (
      <section id="order" className="py-20 px-6">
        <div className="max-w-lg mx-auto text-center space-y-4">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
            ✓
          </div>
          <h2 className="text-2xl font-bold">Hienoa!</h2>
          <p className="text-gray-500 leading-relaxed">
            Tilauksesi on vastaanotettu. Lähetämme vahvistuksen ja maksuohjeet osoitteeseen{' '}
            <span className="font-medium text-gray-700">{form.email}</span> hetken kuluttua.
          </p>
          <p className="text-sm text-gray-400">
            Käsittelemme tilaukset manuaalisesti 24h sisällä.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="order" className="py-20 px-6">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tilaa TrioLasku</h2>
          <p className="text-gray-500 leading-relaxed">
            Täytä sähköpostisi ja valitse tilausjakso. Otamme sinuun yhteyttä sähköpostitse.
          </p>
        </div>

        <form
          name="triolasku-order"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="bg-white border border-gray-200 rounded-2xl p-8 space-y-6"
        >
          <input type="hidden" name="form-name" value="triolasku-order" />

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
            {loading ? 'Lähetetään...' : `Tilaa — ${selectedPeriod.price}`}
          </button>

          <p className="text-xs text-gray-400 text-center">
            Käsittelemme tilaukset manuaalisesti 24h sisällä.
          </p>

          <p className="text-xs text-gray-400 text-center">
            Hinnat ALV 0 % — pienyritystoiminta (AVL 3 §)
          </p>
        </form>
      </div>
    </section>
  )
}
