const GEMINI_API_KEY = process.env.GEMINI_API_KEY

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) }
  }

  if (!GEMINI_API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'GEMINI_API_KEY is not configured' }),
    }
  }

  try {
    const { product, audience } = JSON.parse(event.body)

    if (!product || !product.trim()) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Product/service description is required' }),
      }
    }

    const prompt = `Olet suomalainen markkinointiasiantuntija nimeltä TrioPromote. Tehtäväsi on luoda myyvä markkinointiteksti pienyrittäjälle.

Tuote/palvelu: ${product.trim()}
Kohderyhmä: ${audience?.trim() || 'pienyrittäjät ja kuluttajat'}

Luo NELJÄ erillistä markkinointitekstiä. Kirjoita ne täsmälleen tässä muodossa:

---FACEBOOK---
(Facebook-postaus: myyvä, emoji-rikas, kutsu toimintaan, 2-4 kappaletta, hashtagit lopussa)

---INSTAGRAM---
(Instagram-postaus: visuaalinen, emoji-rikas, lyhyet kappaleet, hashtagit lopussa, "Linkki biossa")

---LINKEDIN---
(LinkedIn-postaus: ammattimainen, asiantunteva, tarinamuotoinen, ei liikaa emojeja)

---EMAIL---
(Sähköposti: aloita "Aihe:"-rivillä, sitten tervehdys, 2-3 kappaletta, toimintakehotus, allekirjoitus [Yrityksesi nimi])

Kirjoita kaikki suomeksi. Tee teksteistä aitoja, inhimillisiä ja myyviä — ei geneeristä markkinointijargonia. Käytä suomalaista kontekstia.`

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.9,
            maxOutputTokens: 2048,
          },
        }),
      }
    )

    if (!res.ok) {
      const errData = await res.text()
      console.error('Gemini API error:', res.status, errData)
      return {
        statusCode: 502,
        body: JSON.stringify({ error: 'Tekoälypalvelu ei vastannut. Yritä hetken kuluttua uudelleen.' }),
      }
    }

    const data = await res.json()
    const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text || ''

    if (!rawText) {
      return {
        statusCode: 502,
        body: JSON.stringify({ error: 'Tekoäly ei tuottanut vastausta. Yritä uudelleen.' }),
      }
    }

    // Parse the four sections
    const sections = {}
    const markers = [
      { key: 'facebook', start: '---FACEBOOK---' },
      { key: 'instagram', start: '---INSTAGRAM---' },
      { key: 'linkedin', start: '---LINKEDIN---' },
      { key: 'email', start: '---EMAIL---' },
    ]

    for (let i = 0; i < markers.length; i++) {
      const startIdx = rawText.indexOf(markers[i].start)
      if (startIdx === -1) continue

      const contentStart = startIdx + markers[i].start.length
      const nextMarkerIdx = i + 1 < markers.length
        ? rawText.indexOf(markers[i + 1].start)
        : -1

      const content = nextMarkerIdx > -1
        ? rawText.slice(contentStart, nextMarkerIdx)
        : rawText.slice(contentStart)

      sections[markers[i].key] = content.trim()
    }

    // Fallback: if parsing failed, return the raw text as facebook
    if (Object.keys(sections).length === 0) {
      sections.facebook = rawText.trim()
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ results: sections }),
    }
  } catch (error) {
    console.error('Generate marketing error:', error.message)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Jokin meni pieleen. Yritä uudelleen.' }),
    }
  }
}
