export default function ThankYou() {
  const handleBack = () => {
    window.history.replaceState({}, '', '/')
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center space-y-8">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
          ✓
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold">Kiitos tilauksestasi!</h1>
          <p className="text-gray-500 leading-relaxed">
            Maksusi on vastaanotettu onnistuneesti. Saat sähköpostiisi lisenssin ja käyttöönotto-ohjeet.
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-left space-y-5">
          <h2 className="text-lg font-semibold text-gray-900 text-center">
            TrioLaskun käyttöönotto
          </h2>

          <ol className="space-y-4">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              <div>
                <p className="font-medium text-gray-900">Avaa TrioLasku</p>
                <p className="text-sm text-gray-500 mt-0.5">
                  Siirry osoitteeseen{' '}
                  <a
                    href="https://trio-lasku.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    trio-lasku.netlify.app
                  </a>
                </p>
              </div>
            </li>

            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              <div>
                <p className="font-medium text-gray-900">Syötä lisenssisi</p>
                <p className="text-sm text-gray-500 mt-0.5">
                  Tarkista sähköpostisi — saat lisenssiavaimen ja aktivointiohjeet hetken kuluessa.
                </p>
              </div>
            </li>

            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              <div>
                <p className="font-medium text-gray-900">Aloita laskutus</p>
                <p className="text-sm text-gray-500 mt-0.5">
                  Lisää yrityksesi tiedot, asiakkaat ja tuotteet — ja lähetä ensimmäinen laskusi.
                </p>
              </div>
            </li>
          </ol>
        </div>

        <div className="space-y-3">
          <p className="text-sm text-gray-400">
            Tarvitsetko apua?{' '}
            <a href="/#contact" className="text-primary hover:underline">
              Ota yhteyttä
            </a>
          </p>

          <button
            onClick={handleBack}
            className="text-sm text-primary hover:underline font-medium"
          >
            Takaisin etusivulle
          </button>
        </div>
      </div>
    </div>
  )
}
