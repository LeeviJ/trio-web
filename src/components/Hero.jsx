export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-2">
          Laskutusohjelma pienyrittäjille
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Laskuta{' '}
          <span className="text-primary">ammattimaisesti</span>,{' '}
          aloita heti
        </h1>
        <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          TrioLasku luo PDF-laskut viivakoodeineen muutamalla napautuksella.
          Tukee uutta 13,5&nbsp;% ALV-kantaa ja käyttäjä hallitsee ALV-prosentit itse
          — ohjelma on valmis tuleviin veromuutoksiin.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="#order"
            className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-base"
          >
            Tilaa TrioLasku
          </a>
          <a
            href="#triolasku"
            className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-8 py-3.5 rounded-xl transition-colors text-base"
          >
            Lue lisää
          </a>
        </div>
      </div>
    </section>
  )
}
