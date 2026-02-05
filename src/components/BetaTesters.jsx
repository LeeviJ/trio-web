const steps = [
  {
    number: '1',
    title: 'Avaa TrioLog',
    description: 'Mene osoitteeseen triolog.netlify.app puhelimellasi.',
  },
  {
    number: '2',
    title: 'Skannaa kuitteja',
    description: 'Ota kuva erilaisista kuiteista — ruokakauppa, huoltoasema, rautakauppa. Mitä enemmän erilaisia, sen parempi.',
  },
  {
    number: '3',
    title: 'Tarkista tunnistus',
    description: 'Katso tunnistaako sovellus kaupan nimen, summan ja päivämäärän. Kerro meille, jos jokin menee pieleen.',
  },
  {
    number: '4',
    title: 'Tallenna toimittaja',
    description: 'Paina "Tallenna uutena toimittajana" — seuraavalla kerralla sama kauppa tunnistetaan automaattisesti.',
  },
]

const receiptTypes = [
  'S-Market / Prisma',
  'K-Citymarket / K-Market',
  'Lidl / Tokmanni',
  'ABC / Neste / Shell',
  'Ravintolat ja pikaruoka',
  'Rautakaupat (Motonet, Biltema)',
]

export default function BetaTesters() {
  return (
    <section id="testers" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block bg-orange-50 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Beta-testaajille
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Tule testaajaksi — opeta kuitinlukijaa!
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            TrioTools-kuittiskanneri oppii tunnistamaan kauppoja sitä paremmin, mitä enemmän
            erilaisia kuitteja sillä skannataan. Auta meitä tekemään siitä Suomen paras.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {steps.map((step) => (
            <div key={step.number} className="bg-white border border-gray-200 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                {step.number}
              </div>
              <h3 className="font-semibold text-lg">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 space-y-6">
          <h3 className="text-xl font-bold text-center">Testaa näillä kuiteilla</h3>
          <p className="text-gray-500 text-center text-sm max-w-lg mx-auto">
            Tarvitsemme mahdollisimman monipuolisia kuitteja. Kokeile erityisesti näitä:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
            {receiptTypes.map((type) => (
              <div key={type} className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 text-sm font-medium text-gray-700 border border-gray-200">
                <span className="w-2 h-2 bg-primary rounded-full shrink-0" />
                {type}
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="https://triolog.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-base text-center"
            >
              Avaa TrioLog
            </a>
            <a
              href="https://trio-lasku.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-base text-center"
            >
              Avaa TrioLasku
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
