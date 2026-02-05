const plans = [
  {
    name: '1 kuukausi',
    price: '12',
    period: '€ / kk',
    description: 'Kokeile ilman sitoutumista.',
    highlighted: false,
  },
  {
    name: '12 kuukautta',
    price: '120',
    period: '€ / vuosi',
    perMonth: 'Vain 10 €/kk',
    badge: 'Suosituin',
    description: 'Paras hinta — koko vuosi kerralla.',
    highlighted: true,
  },
  {
    name: '6 kuukautta',
    price: '65',
    period: '€ / 6 kk',
    perMonth: '~10,83 €/kk',
    description: 'Hyvä kompromissi hinnan ja joustavuuden välillä.',
    highlighted: false,
  },
]

const features = [
  'TrioLasku — PDF-laskut viivakoodilla',
  'Uusi 13,5 % ALV-tuki',
  'Asiakas- ja tuoterekisteri',
  'Varmuuskopiointi (JSON + sähköposti)',
  'Toimii kaikilla laitteilla',
  'Käyttäjän hallitsemat ALV-prosentit ja yksiköt',
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Hinnoittelu</h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Yksinkertainen hinnoittelu ilman yllätyksiä. Valitse sinulle sopivin jakso.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 space-y-5 relative ${
                plan.highlighted
                  ? 'bg-primary text-white ring-2 ring-primary shadow-lg scale-[1.03]'
                  : 'bg-white border border-gray-200'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1 rounded-full">
                  {plan.badge}
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className={`text-sm mt-1 ${plan.highlighted ? 'text-green-100' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className={`text-sm ${plan.highlighted ? 'text-green-100' : 'text-gray-400'}`}>
                    {plan.period}
                  </span>
                </div>
                {plan.perMonth && (
                  <p className={`text-sm mt-1 font-medium ${plan.highlighted ? 'text-green-100' : 'text-gray-500'}`}>
                    {plan.perMonth}
                  </p>
                )}
              </div>
              <a
                href="#order"
                className={`block text-center font-semibold py-3 rounded-xl transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-primary hover:bg-green-50'
                    : 'bg-primary text-white hover:bg-primary-dark'
                }`}
              >
                Tilaa nyt
              </a>
            </div>
          ))}
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="font-semibold text-gray-900 mb-4 text-center">Kaikki tilaukset sisältävät</h3>
          <ul className="grid sm:grid-cols-2 gap-3">
            {features.map((f) => (
              <li key={f} className="text-sm text-gray-600 flex items-center gap-2">
                <span className="text-primary font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          Hinnat ALV 0 % — pienyritystoiminta (AVL 3 §)
        </p>
      </div>
    </section>
  )
}
