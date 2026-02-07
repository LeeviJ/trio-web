import { useState } from 'react'

// --- API-valmius: Vaihda tähän oikea avain kun tekoäly kytketään ---
// const API_KEY = import.meta.env.VITE_TRIOPROMOTE_API_KEY || ''
// const API_URL = import.meta.env.VITE_TRIOPROMOTE_API_URL || ''
// -------------------------------------------------------------------

const exampleOutputs = [
  {
    topic: 'kesäale',
    results: {
      facebook:
        '☀️ KESÄALE ON TÄÄLLÄ! Nappaa parhaat tarjoukset ennen kuin ne katoavat — jopa -40 % valikoiduista tuotteista. Tarjous voimassa vain tämän viikon! Klikkaa ja katso valikoima 👉\n\n#kesäale #tarjous #pienyrittäjä #suomalainen',
      instagram:
        '☀️ Kesä + ale = täydellinen yhdistelmä!\n\nVarastontyhjennys on alkanut — suosikit jopa -40 % 🔥\n\n🛒 Linkki biossa\n⏰ Vain tämän viikon!\n\n#kesäale #ale #yrittäjä #shoplocal #suomi',
      linkedin:
        'Pienyrittäjänä tiedän, kuinka tärkeää on pitää kassavirta liikkeessä. Siksi käynnistämme nyt kesäalen — valikoidut tuotteet jopa -40 %. Tavoitteena on tehdä tilaa syksyn uutuuksille ja tarjota asiakkaillemme aitoa vastinetta rahoille.\n\nTervetuloa tutustumaan!',
      email:
        'Aihe: ☀️ Kesäale alkaa — jopa -40 %\n\nHei!\n\nKesä on parhaimmillaan ja niin ovat tarjouksemmekin. Olemme valinneet suosituimmat tuotteemme kesäalennukseen — säästä jopa 40 %.\n\nTarjous on voimassa [päivämäärä] asti.\n\n→ Katso tarjoukset: [linkki]\n\nAurinkoisin terveisin,\n[Yrityksesi nimi]',
    },
  },
  {
    topic: 'uusi tuote',
    results: {
      facebook:
        '🚀 UUTUUS ON TÄÄLLÄ! Olemme työstäneet tätä pitkään ja nyt se on vihdoin valmis. Suunniteltu suomalaiselle yrittäjälle, testattu arjessa.\n\nTutustu ja kerro mitä mieltä olet! 👉\n\n#uutuus #tuotelanseeraus #suomalainentyö #yrittäjä',
      instagram:
        '🚀 Uutta kaupassa!\n\nKuukausia kehitystyötä — nyt se on valmis.\n\n✅ Suunniteltu Suomessa\n✅ Testattu oikeassa käytössä\n✅ Saatavilla NYT\n\n🔗 Linkki biossa!\n\n#uutuus #tuotelanseeraus #madeinfinland',
      linkedin:
        'Olen iloinen voidessani kertoa, että uusin tuotteemme on nyt julkaistu. Kehitystyö alkoi asiakaspalautteesta: markkinoilta puuttui ratkaisu, joka olisi sekä helppokäyttöinen että edullinen.\n\nUskon, että tämä vastaa tarpeeseen. Kokemuksia ja palautetta otetaan vastaan avosylin.',
      email:
        'Aihe: 🚀 Esittelyssä uusin tuotteemme\n\nHei!\n\nMeillä on ilo esitellä uusin tuotteemme. Se on suunniteltu vastaamaan juuri sinun tarpeitasi — yksinkertainen, tehokas ja edullinen.\n\nLue lisää ja tilaa ensimmäisten joukossa:\n→ [linkki]\n\nYstävällisin terveisin,\n[Yrityksesi nimi]',
    },
  },
  {
    topic: 'joulumyynti',
    results: {
      facebook:
        '🎄 JOULUMYYNTI ON AVATTU! Löydä täydelliset lahjat läheisillesi — huippuhintaan. Valikoimassa suomalaisia lahjaideoita jokaiselle budjetille.\n\nToimitamme tilauksesi jouluaattoon mennessä! 🎁\n\n#joulumyynti #joululahja #suomalainenlahja #yrittäjä',
      instagram:
        '🎄 Joulukauppa on avattu!\n\n🎁 Lahjaideat jokaiseen budjettiin\n📦 Toimitus ennen joulua\n🇫🇮 Suomalaista laatua\n\nLinkki biossa 👆\n\n#joulu #joululahja #lahjavinkki #suomalainen #shoplocal',
      linkedin:
        'Joulusesonki on pienyrittäjälle vuoden tärkein. Tänä vuonna olemme panostaneet erityisesti lahjapakkauksiin ja toimitusvarmuuteen — jokainen tilaus lähtee 24h sisällä.\n\nJos etsit laadukasta suomalaista lahjaa, tutustu valikoimaamme.',
      email:
        'Aihe: 🎄 Joulumyynti avattu — tilaa ennen ruuhkaa!\n\nHei!\n\nJoulu lähestyy ja olemme avanneet joulukaupan. Lahjaideat on valittu huolella — jokaiselle löytyy jotain.\n\n🎁 Tilaukset toimitetaan jouluaattoon mennessä\n📦 Ilmainen toimitus yli 50 € tilauksiin\n\n→ Tutustu valikoimaan: [linkki]\n\nJouluisin terveisin,\n[Yrityksesi nimi]',
    },
  },
]

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

function pickExample(input) {
  const lower = input.toLowerCase()
  if (lower.includes('joulu') || lower.includes('lahja')) return exampleOutputs[2]
  if (lower.includes('uusi') || lower.includes('tuote') || lower.includes('lanseeraus')) return exampleOutputs[1]
  return exampleOutputs[0]
}

// --- Tulevaisuudessa: oikea API-kutsu ---
// async function generateWithAI(prompt) {
//   const res = await fetch(API_URL, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${API_KEY}`,
//     },
//     body: JSON.stringify({
//       model: 'claude-sonnet-4-5-20250929',
//       max_tokens: 1024,
//       messages: [{ role: 'user', content: prompt }],
//     }),
//   })
//   return res.json()
// }
// -----------------------------------------

export default function TrioPromote() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState('')

  const handleGenerate = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    setLoading(true)
    setResult(null)

    // Simuloi lyhyt viive (kuin tekoäly kirjoittaisi)
    setTimeout(() => {
      const example = pickExample(input)
      setResult(example.results)
      setLoading(false)
    }, 1500)
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
            Early Access
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            TrioPromote — tekoäly markkinoi puolestasi
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Kerro mitä haluat markkinoida, niin TrioPromote luo valmiit tekstit Facebookiin,
            Instagramiin, LinkedIniin ja sähköpostiin. Suomalainen pienyrittäjä ansaitsee ammattimaisen markkinoinnin.
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
            <h3 className="font-semibold text-gray-900">Sesonkipohjat yrittäjille</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Joulu, kesäale, Black Friday — valmiit pohjat suomalaisen pienyrittäjän tarpeisiin.
            </p>
          </div>
        </div>

        {/* Demo */}
        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-8 sm:p-10 space-y-6">
          <h3 className="text-xl font-bold text-purple-800 text-center">
            Kokeile TrioPromotea
          </h3>

          <form onSubmit={handleGenerate} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="promote-input" className="block text-sm font-medium text-purple-700">
                Mitä haluat markkinoida tänään?
              </label>
              <input
                id="promote-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="esim. Kesäale, uusi tuote, joulumyynti..."
                className="w-full border border-purple-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
              />
            </div>
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-colors text-base"
            >
              {loading ? 'Tekoäly kirjoittaa...' : 'Luo tekstit'}
            </button>
          </form>

          {/* Tulokset */}
          {result && (
            <div className="space-y-4 pt-4">
              {Object.entries(result).map(([channel, text]) => (
                <div key={channel} className="bg-white rounded-xl border border-purple-100 overflow-hidden">
                  <div className={`${channelColors[channel]} text-white text-xs font-bold px-4 py-1.5 flex items-center justify-between`}>
                    <span>{channelLabels[channel]}</span>
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
            Demo-versio — täysi tekoälyversio tulossa pian. Varaa Early Access tilaamalla alla.
          </p>
        </div>
      </div>
    </section>
  )
}
