export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <span>© {new Date().getFullYear()} Trio. Kaikki oikeudet pidätetään.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-600 transition-colors">Tietosuoja</a>
          <a href="#" className="hover:text-gray-600 transition-colors">Käyttöehdot</a>
          <a href="#" className="hover:text-gray-600 transition-colors">Yhteystiedot</a>
        </div>
      </div>
    </footer>
  )
}
