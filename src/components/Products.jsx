const triolaskuFeatures = [
  {
    title: 'PDF-laskut sekunneissa',
    description: 'Ammattimainen lasku viivakoodilla ja viitenumerolla — valmis lähetettäväksi.',
  },
  {
    title: 'Uusi 13,5 % ALV-tuki',
    description: 'Sisältää valmiiksi Suomen uudet ALV-kannat. Voit lisätä, muokata ja poistaa ALV-prosentteja itse.',
  },
  {
    title: 'Asiakas- ja tuoterekisteri',
    description: 'Tallenna asiakkaat ja tuotteet kertaalleen — ne ovat valmiina joka laskulla.',
  },
  {
    title: 'Toimii kaikilla laitteilla',
    description: 'Käytä puhelimella, tabletilla tai tietokoneella. Selain riittää, ei asennuksia.',
  },
  {
    title: 'Varmuuskopiointi',
    description: 'Lataa tiedot JSON-tiedostona tai lähetä varmuuskopio sähköpostiin yhdellä painalluksella.',
  },
  {
    title: 'Tulevaisuusvarma',
    description: 'ALV-prosentit, yksiköt ja asetukset ovat täysin käyttäjän hallinnassa — ei tarvitse odottaa päivityksiä.',
  },
]

const triologFeatures = [
  'GPS-ajopäiväkirja',
  'Kuittien skannaus ja tallennus',
  'Työ- ja yksityisajoprofiilit',
  'ALV-erittely kuiteista',
]

export default function Products() {
  return (
    <>
      {/* TrioLasku – Flagship */}
      <section id="triolasku" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Valmis ja heti käytettävissä
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              TrioLasku — laskutus, joka toimii
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Selkeä laskutusohjelma, joka on suunniteltu suomalaiselle pienyrittäjälle.
              Luo ammattimaiset PDF-laskut, hallitse asiakkaitasi ja tuotteitasi — kaikki yhdessä paikassa.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {triolaskuFeatures.map((f) => (
              <div
                key={f.title}
                className="bg-white border border-gray-200 rounded-2xl p-6 space-y-2 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-gray-900">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#order"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-base"
            >
              Tilaa TrioLasku
            </a>
          </div>
        </div>
      </section>

      {/* TrioLog – Coming soon */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold text-green-700">TrioLog</h3>
                  <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Tulossa pian
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Ajopäiväkirja ja kuittien hallinta yhdessä sovelluksessa.
                  GPS-seuranta, kuittien skannaus ja automaattinen raportointi — kaikki verottajaa varten.
                </p>
                <ul className="grid grid-cols-2 gap-2">
                  {triologFeatures.map((f) => (
                    <li key={f} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="bg-white border border-green-200 rounded-xl p-4 mt-4">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-semibold text-green-700">Päivityslupaus:</span>{' '}
                    Aloita TrioLaskulla — jos päivität myöhemmin laajempaan TrioLog-kokonaisuuteen,
                    hyvitämme TrioLaskun hinnan täysimääräisenä.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
