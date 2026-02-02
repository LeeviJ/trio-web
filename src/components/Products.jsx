const products = [
  {
    name: 'TrioLasku',
    tagline: 'Laskuta minuutissa, ei tunneissa',
    description:
      'Unohda Excel-taulukot ja monimutkaiset laskutusohjelmat. TrioLasku luo ammattimaisen laskun muutamalla napautuksella — aikaa säästyy joka viikko tärkeämpiin töihin.',
    features: ['PDF-laskut sekunneissa', 'Asiakas- ja tuotehallinta', 'Viivakoodi & IBAN', 'Varmuuskopiointi pilveen'],
    color: 'bg-blue-50',
    accent: 'text-blue-600',
    border: 'border-blue-100',
    ctaText: 'Kokeile TrioLaskua',
    ctaBg: 'bg-blue-600 hover:bg-blue-700',
    ctaUrl: 'https://trio-lasku.netlify.app',
  },
  {
    name: 'TrioLog',
    tagline: 'Ajokilometrit ja kuitit talteen yhdellä skannauksella',
    description:
      'Ei enää käsin kirjattuja kilometrejä tai kadonneita kuitteja. TrioLog seuraa ajosi automaattisesti ja lukee kuitit kameralla — veroilmoitus hoituu vaivatta.',
    features: ['GPS-ajopäiväkirja', 'OCR-kuitinluku', 'Kauppaprofiilit', 'Useat ajoprofiilit'],
    color: 'bg-green-50',
    accent: 'text-green-600',
    border: 'border-green-100',
    ctaText: 'Kokeile TrioLogia',
    ctaBg: 'bg-green-600 hover:bg-green-700',
    ctaUrl: 'https://triolog.netlify.app',
  },
]

const reasons = [
  {
    title: 'Ei kuukausimaksuja',
    description: 'Perusominaisuudet ovat ilmaisia — maksat vain, jos haluat lisäpalveluita.',
  },
  {
    title: 'Toimii kaikilla laitteilla',
    description: 'Käytä puhelimella, tabletilla tai tietokoneella. Selain riittää.',
  },
  {
    title: 'Tiedot ovat sinun hallussasi',
    description: 'Datasi tallennetaan laitteeseesi. Voit viedä ja varmuuskopioida kaiken milloin vain.',
  },
]

export default function Products() {
  return (
    <>
      <section id="products" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Tuotteet</h2>
          <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">
            Kaksi sovellusta, jotka säästävät yrittäjän aikaa joka viikko.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((p) => (
              <div
                key={p.name}
                className={`${p.color} border ${p.border} rounded-2xl p-8 space-y-4 flex flex-col`}
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
                <div className="pt-4 mt-auto">
                  <a
                    href={p.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block ${p.ctaBg} text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm`}
                  >
                    {p.ctaText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Miksi valita Trio-työkalut?
          </h2>
          <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">
            Rakennettu yrittäjille, jotka arvostavat yksinkertaisuutta.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            {reasons.map((r) => (
              <div key={r.title} className="text-center space-y-3">
                <h3 className="text-lg font-semibold">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
