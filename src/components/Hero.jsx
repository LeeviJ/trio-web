export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Yrityksen arki,{' '}
          <span className="text-primary">yksinkertaistettuna</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Trio-tuoteperhe automatisoi laskutuksen, matkakulut ja
          yritysagenttien työn — sinä keskityt olennaiseen.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="#products"
            className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-base"
          >
            Tutustu tuotteisiin
          </a>
          <a
            href="#pricing"
            className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-8 py-3.5 rounded-xl transition-colors text-base"
          >
            Katso hinnat
          </a>
        </div>
      </div>
    </section>
  )
}
