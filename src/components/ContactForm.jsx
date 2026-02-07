import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
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

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          name: form.name,
          email: form.email,
          message: form.message,
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

  if (submitted) {
    return (
      <section id="contact" className="py-20 px-6">
        <div className="max-w-lg mx-auto text-center space-y-4">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
            ✓
          </div>
          <h2 className="text-2xl font-bold">Viesti lähetetty!</h2>
          <p className="text-gray-500 leading-relaxed">
            Kiitos yhteydenotostasi. Vastaamme tiedusteluihin arkisin 24 tunnin sisällä.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ota yhteyttä</h2>
          <p className="text-gray-500 leading-relaxed">
            Kysy lisätietoja, pyydä tarjous tai kerro miten voimme auttaa.
          </p>
        </div>

        <div className="grid sm:grid-cols-5 gap-8">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="sm:col-span-3 bg-white border border-gray-200 rounded-2xl p-8 space-y-5"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div className="space-y-2">
              <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700">
                Nimi
              </label>
              <input
                id="contact-name"
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
              <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">
                Sähköposti
              </label>
              <input
                id="contact-email"
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
              <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700">
                Viesti
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Kerro miten voimme auttaa..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              />
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
              {loading ? 'Lähetetään...' : 'Lähetä viesti'}
            </button>
          </form>

          <div className="sm:col-span-2 flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">Kyyränkoski Tmi</h3>
              <p className="text-sm text-gray-500">Y-tunnus: 1437272-9</p>
              <p className="text-sm text-gray-500">Kylänpääntie 54, 61450 Kylänpää</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-sm text-green-700 leading-relaxed">
                Vastaamme tiedusteluihin arkisin 24 tunnin sisällä.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
