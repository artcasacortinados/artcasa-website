import * as React from "react"
import logoImage from "../images/logo.png"

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isProductsOpen, setIsProductsOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen)
  }

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <a href="/">
                <img src={logoImage} alt="Art'Casa Logo" className="h-16 w-auto" />
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-gray-800 hover:text-[#B5720A] px-3 py-2 text-sm font-bold transition-colors uppercase tracking-wide">Início</a>
              <div className="relative">
                <button 
                  onClick={toggleProducts}
                  className="text-gray-800 hover:text-[#B5720A] px-3 py-2 text-sm font-bold transition-colors uppercase tracking-wide flex items-center"
                >
                  Produtos
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isProductsOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <a href="/estores" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-50 hover:text-[#B5720A] font-medium">Estores</a>
                    <a href="/cortinados" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-50 hover:text-[#B5720A] font-medium">Cortinados</a>
                    <a href="/texteis-lar" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-50 hover:text-[#B5720A] font-medium">Têxteis Lar</a>
                    <a href="/estofos" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-50 hover:text-[#B5720A] font-medium">Estofos</a>
                    <a href="/papel-parede" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-50 hover:text-[#B5720A] font-medium">Papel de Parede</a>
                    <a href="/tapetes" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-50 hover:text-[#B5720A] font-medium">Tapetes</a>
                    <a href="/#products" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-50 hover:text-[#B5720A] font-medium border-t border-gray-200">Ver Todos</a>
                  </div>
                )}
              </div>
              <a href="/projects" className="text-gray-800 hover:text-[#B5720A] px-3 py-2 text-sm font-bold transition-colors uppercase tracking-wide">Projetos</a>
              <a href="/quem-somos" className="text-gray-800 hover:text-[#B5720A] px-3 py-2 text-sm font-bold transition-colors uppercase tracking-wide">Quem Somos</a>
              <a href="/#testimonials" className="text-gray-800 hover:text-[#B5720A] px-3 py-2 text-sm font-bold transition-colors uppercase tracking-wide">Opiniões</a>
              <a href="/#contact" className="text-gray-800 hover:text-[#B5720A] px-3 py-2 text-sm font-bold transition-colors uppercase tracking-wide">Contacto</a>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-[#B5720A] focus:outline-none focus:text-[#B5720A] p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a href="/" className="block text-gray-800 hover:text-[#B5720A] px-3 py-2 text-base font-bold transition-colors uppercase tracking-wide" onClick={toggleMenu}>Início</a>
              <button 
                onClick={toggleProducts}
                className="w-full text-left text-gray-800 hover:text-[#B5720A] px-3 py-2 text-base font-bold transition-colors uppercase tracking-wide flex items-center justify-between"
              >
                Produtos
                <svg className={`h-4 w-4 transform transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isProductsOpen && (
                <div className="pl-6 space-y-1">
                  <a href="/estores" className="block text-gray-700 hover:text-[#B5720A] px-3 py-2 text-sm font-medium transition-colors" onClick={toggleMenu}>Estores</a>
                  <a href="/cortinados" className="block text-gray-700 hover:text-[#B5720A] px-3 py-2 text-sm font-medium transition-colors" onClick={toggleMenu}>Cortinados</a>
                  <a href="/texteis-lar" className="block text-gray-700 hover:text-[#B5720A] px-3 py-2 text-sm font-medium transition-colors" onClick={toggleMenu}>Têxteis Lar</a>
                  <a href="/estofos" className="block text-gray-700 hover:text-[#B5720A] px-3 py-2 text-sm font-medium transition-colors" onClick={toggleMenu}>Estofos</a>
                  <a href="/papel-parede" className="block text-gray-700 hover:text-[#B5720A] px-3 py-2 text-sm font-medium transition-colors" onClick={toggleMenu}>Papel de Parede</a>
                  <a href="/tapetes" className="block text-gray-700 hover:text-[#B5720A] px-3 py-2 text-sm font-medium transition-colors" onClick={toggleMenu}>Tapetes</a>
                  <a href="/#products" className="block text-gray-700 hover:text-[#B5720A] px-3 py-2 text-sm font-medium transition-colors border-t border-gray-200 mt-2 pt-2" onClick={toggleMenu}>Ver Todos</a>
                </div>
              )}
              <a href="/projects" className="block text-gray-800 hover:text-[#B5720A] px-3 py-2 text-base font-bold transition-colors uppercase tracking-wide" onClick={toggleMenu}>Projetos</a>
              <a href="/quem-somos" className="block text-gray-800 hover:text-[#B5720A] px-3 py-2 text-base font-bold transition-colors uppercase tracking-wide" onClick={toggleMenu}>Quem Somos</a>
              <a href="/#testimonials" className="block text-gray-800 hover:text-[#B5720A] px-3 py-2 text-base font-bold transition-colors uppercase tracking-wide" onClick={toggleMenu}>Opiniões</a>
              <a href="/#contact" className="block text-gray-800 hover:text-[#B5720A] px-3 py-2 text-base font-bold transition-colors uppercase tracking-wide" onClick={toggleMenu}>Contacto</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
