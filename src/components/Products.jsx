const products = [
  {
    name: 'TrioLasku',
    tagline: 'Laskutus ilman tuskaa',
    description:
      'Luo ammattimaiset laskut sekunneissa. Asiakasrekisteri, tuotekatalogi, PDF-vienti ja viivakoodit — kaikki yhdessä sovelluksessa.',
    features: ['PDF-laskujen luonti', 'Asiakas- ja tuotehallinta', 'Viivakoodi & IBAN', 'Varmuuskopiointi'],
    color: 'bg-blue-50',
    accent: 'text-blue-600',
    border: 'border-blue-100',
  },
  {
    name: 'TrioLog',
    tagline: 'Ajokilometrit ja kuitit talteen',
    description:
      'GPS-pohjainen ajopäiväkirja ja kuitinlukija. Skannaa kuitit, yhdistä ne matkoihin ja laske verokorvaukset automaattisesti.',
    features: ['GPS-seuranta', 'OCR-kuitinluku', 'Verottajan km-korvaukset', 'Ajoprofiilit'],
    color: 'bg-green-50',
    accent: 'text-green-600',
    border: 'border-green-100',
  },
]

export default function Products() {
  return (
    <section id="products" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Tuotteet</h2>
        <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">
          Kaksi sovellusta, jotka hoitavat yrittäjän hallinnollisen arjen.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((p) => (
            <div
              key={p.name}
              className={`${p.color} border ${p.border} rounded-2xl p-8 space-y-4`}
            >
              <div>
                <h3 className={`text-2xl font-bold ${p.accent}`}>{p.name}</h3>
                <p className="text-sm font-medium text-gray-500 mt-1">{p.tagline}</p>
              </div>
              <p className="text-gray-600 leading-relaxed">{p.description}</p>
              <ul className="grid grid-cols-2 gap-2 pt-2">
                {p.features.map((f) => (
                  <li key={f} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${p.accent.replace('text-', 'bg-')}`} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
