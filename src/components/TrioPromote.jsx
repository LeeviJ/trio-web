import { useState } from 'react'

const channelLabels = {
  facebook: 'Facebook',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  email: 'Sähköposti / Uutiskirje',
}

const channelColors = {
  facebook: 'bg-blue-600',
  instagram: 'bg-pink-500',
  linkedin: 'bg-blue-700',
  email: 'bg-gray-700',
}

const quickPicks = [
  {
    label: 'TrioLasku + ALV 13,5 %',
    product: 'TrioLasku — laskutusohjelma pienyrittäjille. Tukee uutta 13,5 % ALV-kantaa, luo PDF-laskut viivakoodilla, sisältää asiakas- ja tuoterekisterin. Toimii selaimessa kaikilla laitteilla. Hinta alkaen 10 €/kk.',
    audience: 'suomalaiset pienyrittäjät, toiminimet ja freelancerit',
  },
  {
    label: 'Kesäkampanja',
    product: 'Kesäale — valikoidut tuotteet ja palvelut alennettuun hintaan kesän kunniaksi',
    audience: 'nykyiset ja potentiaaliset asiakkaat',
  },
  {
    label: 'Uusi palvelu',
    product: 'Uuden palvelun lanseeraus — kerro asiakkaille mitä uutta on tarjolla ja miksi se helpottaa heidän arkeaan',
    audience: 'pienyrittäjät ja yritysasiakkaat',
  },
]

export default function TrioPromote() {
  const [product, setProduct] = useState('')
  const [audience, setAudience] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState('')

  const handleGenerate = async (e) => {
    e.preventDefault()
    if (!product.trim()) return
    setLoading(true)
    setError('')
    setResult(null)

    try {
      const res = await fetch('/.netlify/functions/gemini-proxy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          product: product.trim(),
          audience: audience.trim(),
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Jokin meni pieleen.')
      }

      setResult(data.results)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleQuickPick = (pick) => {
    setProduct(pick.product)
    setAudience(pick.audience)
    setResult(null)
    setError('')
  }

  const handleCopy = (channel, text) => {
    navigator.clipboard.writeText(text)
    setCopied(channel)
    setTimeout(() => setCopied(''), 2000)
  }

  return (
    <section id="triopromote" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block bg-purple-50 text-purple-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Kokeile ilmaiseksi
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            TrioPromote — tekoäly markkinoi puolestasi
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Kerro mitä haluat markkinoida ja kenelle, niin TrioPromote luo valmiit tekstit Facebookiin,
            Instagramiin, LinkedIniin ja sähköpostiin. Suomalaista osaamista — ei amerikkalaista hehkutusta.
          </p>
        </div>

        {/* Ominaisuudet */}
        <div className="grid sm:grid-cols-3 gap-6 mb-14">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-2 hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-900">Some-postaukset sekunneissa</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Facebook, Instagram ja LinkedIn — kaikki yhdellä kertaa. Kopioi ja julkaise.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-2 hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-900">Myyvät sähköpostit</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Uutiskirjeet, tarjousviestit ja kampanjat — valmiina lähetettäväksi.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-2 hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-900">Suomalainen sävy</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Luotettavaa ja suoraa puhetta — ei tyhjää hehkutusta. Pienyrittäjältä pienyrittäjälle.
            </p>
          </div>
        </div>

        {/* AI-lomake */}
        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-8 sm:p-10 space-y-6">
          <h3 className="text-xl font-bold text-purple-800 text-center">
            Kokeile TrioPromotea
          </h3>

          {/* Pikavalinnat */}
          <div className="space-y-2">
            <p className="text-xs font-medium text-purple-600 uppercase tracking-wide">Pikavalinnat</p>
            <div className="flex flex-wrap gap-2">
              {quickPicks.map((pick) => (
                <button
                  key={pick.label}
                  onClick={() => handleQuickPick(pick)}
                  className="bg-white border border-purple-200 hover:border-purple-400 hover:bg-purple-50 text-purple-700 text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                >
                  {pick.label}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleGenerate} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="promote-product" className="block text-sm font-medium text-purple-700">
                Mitä haluat mainostaa?
              </label>
              <input
                id="promote-product"
                type="text"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                placeholder="esim. TrioLasku, melontaretki, kesäale..."
                required
                className="w-full border border-purple-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="promote-audience" className="block text-sm font-medium text-purple-700">
                Kenelle?
              </label>
              <input
                id="promote-audience"
                type="text"
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
                placeholder="esim. pienyrittäjät, perheet, luontoharrastajat..."
                className="w-full border border-purple-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
              />
              <p className="text-xs text-purple-400">
                Valinnainen — auttaa tekoälyä kohdentamaan viestin.
              </p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !product.trim()}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-colors text-base"
            >
              {loading ? 'Tekoäly kirjoittaa...' : 'Luo markkinointiteksti'}
            </button>
          </form>

          {/* Tulokset */}
          {result && (
            <div className="space-y-4 pt-4">
              {Object.entries(result).map(([channel, text]) => (
                <div key={channel} className="bg-white rounded-xl border border-purple-100 overflow-hidden">
                  <div className={`${channelColors[channel] || 'bg-gray-600'} text-white text-xs font-bold px-4 py-1.5 flex items-center justify-between`}>
                    <span>{channelLabels[channel] || channel}</span>
                    <button
                      onClick={() => handleCopy(channel, text)}
                      className="text-white/80 hover:text-white text-xs font-medium"
                    >
                      {copied === channel ? 'Kopioitu!' : 'Kopioi'}
                    </button>
                  </div>
                  <pre className="p-4 text-sm text-gray-700 whitespace-pre-wrap font-sans leading-relaxed">
                    {text}
                  </pre>
                </div>
              ))}
            </div>
          )}

          <p className="text-xs text-purple-400 text-center">
            Powered by Google Gemini — suomenkielinen markkinointiassistentti pienyrittäjille.
          </p>
        </div>
      </div>
    </section>
  )
}
