const plans = [
  {
    name: 'Starter',
    price: '0',
    period: 'ikuisesti',
    description: 'Aloita ilmaiseksi perusominaisuuksilla.',
    features: ['TrioLasku perusominaisuudet', 'TrioLog GPS-seuranta', 'Paikallinen varmuuskopiointi'],
    cta: 'Aloita ilmaiseksi',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '9',
    period: '/ kk',
    description: 'Kaikki ominaisuudet ja agentti-palvelut.',
    features: ['Kaikki Starter-ominaisuudet', 'AI-agentti-palvelut', 'Pilvivarmuuskopiointi', 'Prioriteettituki'],
    cta: 'Valitse Pro',
    highlighted: true,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Hinnoittelu</h2>
        <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">
          Yksinkertainen hinnoittelu ilman yllätyksiä.
        </p>
        <div className="grid sm:grid-cols-2 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 space-y-6 ${
                plan.highlighted
                  ? 'bg-primary text-white ring-2 ring-primary'
                  : 'bg-white border border-gray-200'
              }`}
            >
              <div>
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className={`text-sm mt-1 ${plan.highlighted ? 'text-green-100' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">{plan.price} €</span>
                <span className={`text-sm ${plan.highlighted ? 'text-green-100' : 'text-gray-400'}`}>
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className={`text-sm flex items-center gap-2 ${plan.highlighted ? 'text-green-50' : 'text-gray-600'}`}>
                    <span>✓</span> {f}
                  </li>
                ))}
              </ul>
              {/* Stripe checkout button placeholder — replace href with Stripe Checkout URL */}
              <a
                href="#"
                data-stripe-plan={plan.name.toLowerCase()}
                className={`block text-center font-semibold py-3 rounded-xl transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-primary hover:bg-green-50'
                    : 'bg-primary text-white hover:bg-primary-dark'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
