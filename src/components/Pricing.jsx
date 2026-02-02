const plans = [
  {
    name: 'Kokeile ilmaiseksi',
    price: null,
    description: 'Perusominaisuudet ilman rekisteröitymistä. Pilvivarmuuskopiot vaativat Ammattilainen-tilauksen (9 €/kk).',
    features: ['TrioLasku — laskujen luonti', 'TrioLog — ajopäiväkirja ja kuitit', 'Paikallinen tallennus laitteellesi', 'Ei aikarajaa'],
    cta: 'Aloita nyt',
    highlighted: false,
  },
  {
    name: 'Täysi työkalupakki',
    price: '9',
    period: '/ kk',
    description: 'Kaikki ominaisuudet ja automaatio.',
    features: ['Kaikki ilmaiset ominaisuudet', 'AI-agenttipalvelut', 'Automaattiset sähköpostivarmuuskopiot', 'Prioriteettituki'],
    cta: 'Valitse Ammattilainen',
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
              {plan.price ? (
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">{plan.price} €</span>
                  <span className={`text-sm ${plan.highlighted ? 'text-green-100' : 'text-gray-400'}`}>
                    {plan.period}
                  </span>
                </div>
              ) : (
                <div className="text-4xl font-extrabold">Aloita maksutta</div>
              )}
              <ul className="space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className={`text-sm flex items-center gap-2 ${plan.highlighted ? 'text-green-50' : 'text-gray-600'}`}>
                    <span>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href={plan.highlighted ? '#' : '#testers'}
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
