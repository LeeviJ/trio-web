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
  {
    title: 'Markkinointi-agentti',
    description:
      'Luo somesisältöä ja blogeja puolestasi — sinä hyväksyt, agentti julkaisee.',
  },
  {
    title: 'Inbox-agentti',
    description:
      'Tiivistää tärkeimmät viestit ja poistaa turhan kohinan, jotta keskityt olennaiseen.',
  },
]

export default function AgentServices() {
  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Tekoälyagentit liiketoimintasi tukena
        </h2>
        <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">
          AI-agentit työskentelevät taustalla ja hoitavat rutiinit — sinä keskityt kasvattamaan yritystäsi.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white border border-gray-200 rounded-2xl p-6 space-y-3 hover:shadow-lg transition-shadow"
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
