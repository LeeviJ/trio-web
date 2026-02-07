import Hero from './components/Hero'
import Products from './components/Products'
import Pricing from './components/Pricing'
import OrderForm from './components/OrderForm'
import Footer from './components/Footer'
import ThankYou from './components/ThankYou'

const isPaymentSuccess = new URLSearchParams(window.location.search).get('payment') === 'success'

export default function App() {
  if (isPaymentSuccess) {
    return <ThankYou />
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ALV 13,5 % -banneri */}
      <div className="bg-primary text-white text-center text-sm py-2 px-4">
        Olemme valmiina: TrioLasku tukee nyt uutta 13,5&nbsp;% ALV-kantaa.
      </div>

      <nav className="sticky top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight">
            <span className="text-primary">Trio</span>Tools
          </span>
          <div className="hidden sm:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#triolasku" className="hover:text-gray-900 transition-colors">TrioLasku</a>
            <a href="#pricing" className="hover:text-gray-900 transition-colors">Hinnoittelu</a>
            <a href="#order" className="hover:text-gray-900 transition-colors">Tilaa</a>
          </div>
          <a
            href="#order"
            className="bg-primary hover:bg-primary-dark text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Tilaa nyt
          </a>
        </div>
      </nav>

      <Hero />
      <Products />
      <Pricing />
      <OrderForm />
      <Footer />
    </div>
  )
}
