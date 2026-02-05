export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-block bg-green-50 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-2">
          Ohjelmistot pienyrittäjille
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          <span className="text-primary">TrioTools</span> — yrittäjän{' '}
          <span className="text-primary">työkalupakki</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          TrioTools-tuoteperhe automatisoi laskutuksen, ajopäiväkirjan ja
          kuitinhallinnan — sinä keskityt olennaiseen.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="#products"
            className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-base"
          >
            Selaa tuotteita
          </a>
          <a
            href="#testers"
            className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-8 py-3.5 rounded-xl transition-colors text-base"
          >
            Tule testaajaksi
          </a>
        </div>
      </div>
    </section>
  )
}
