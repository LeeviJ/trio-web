import { useState } from 'react'

const periods = [
  { value: '12', label: '12 kuukautta — 120 €', price: '120 €' },
  { value: '6', label: '6 kuukautta — 65 €', price: '65 €' },
  { value: '1', label: '1 kuukausi — 12 €', price: '12 €' },
]

export default function OrderForm() {
  const [form, setForm] = useState({ name: '', email: '', period: '12' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const selectedPeriod = periods.find((p) => p.value === form.period)

  if (submitted) {
    return (
      <section id="order" className="py-20 px-6">
        <div className="max-w-lg mx-auto text-center space-y-4">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
            ✓
          </div>
          <h2 className="text-2xl font-bold">Kiitos tilauksestasi!</h2>
          <p className="text-gray-500 leading-relaxed">
            Olemme vastaanottaneet tilauksesi. Lähetämme ohjeet sähköpostiisi{' '}
            <span className="font-medium text-gray-700">{form.email}</span> mahdollisimman pian.
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
            Täytä tietosi ja valitse tilausjakso. Otamme sinuun yhteyttä sähköpostitse.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-8 space-y-6">
          <div className="space-y-2">
            <label htmlFor="order-name" className="block text-sm font-medium text-gray-700">
              Nimi
            </label>
            <input
              id="order-name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Matti Meikäläinen"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

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

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 rounded-xl transition-colors text-base"
          >
            Tilaa — {selectedPeriod.price}
          </button>

          <p className="text-xs text-gray-400 text-center">
            Hinnat ALV 0 % — pienyritystoiminta (AVL 3 §)
          </p>
        </form>
      </div>
    </section>
  )
}
