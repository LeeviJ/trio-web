export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="grid sm:grid-cols-3 gap-8 text-sm text-gray-500">
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900">Kyyränkoski Tmi</h4>
            <p>Y-tunnus: 1437272-9</p>
            <p>Kylänpääntie 54, 61450 Kylänpää</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900">Tietoa</h4>
            <p>Hinnat sisältävät ALV:n.</p>
            <p>Kaikki tuotteet ja palvelut myydään ALV-velvollisena 1.2.2026 alkaen.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900">Asiakaspalvelu</h4>
            <a href="#contact" className="block hover:text-gray-900 transition-colors">Ota yhteyttä</a>
            <a href="#" className="block hover:text-gray-900 transition-colors">Tietosuoja</a>
            <a href="#" className="block hover:text-gray-900 transition-colors">Käyttöehdot</a>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} TrioTools — Kyyränkoski Tmi. Kaikki oikeudet pidätetään.
        </div>
      </div>
    </footer>
  )
}
