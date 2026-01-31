const services = [
  {
    title: 'Automaattinen kirjanpito',
    description:
      'AI-agentti lukee kuitit, luokittelee kulut ja valmistelee kirjanpitoaineiston puolestasi.',
  },
  {
    title: 'Matkaraportointi',
    description:
      'Agentti koostaa ajokilometrit, päivärahat ja kulukorvaukset valmiiksi raportiksi verottajalle.',
  },
  {
    title: 'Laskumuistutukset',
    description:
      'Seuraa avoimia laskuja ja lähettää automaattiset maksumuistutukset asiakkaillesi.',
  },
]

export default function AgentServices() {
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Agentti-palvelut
        </h2>
        <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">
          AI-agentit, jotka työskentelevät taustalla ja hoitavat rutiinit puolestasi.
        </p>
        <div className="grid sm:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="border border-gray-200 rounded-2xl p-6 space-y-3 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
