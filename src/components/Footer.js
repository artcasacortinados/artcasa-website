import * as React from "react"
import logoImage from "../images/logo.png"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src={logoImage} alt="Art'Casa Logo" className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-gray-400 font-bold">
              Especialistas em decoração de interiores.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-black mb-4 uppercase tracking-wide">Produtos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/estores" className="hover:text-[#B5720A] transition-colors">Estores</a></li>
              <li><a href="/texteis-lar" className="hover:text-[#B5720A] transition-colors">Têxteis Lar</a></li>
              <li><a href="/tapetes" className="hover:text-[#B5720A] transition-colors">Tapetes</a></li>
              <li><a href="/papel-parede" className="hover:text-[#B5720A] transition-colors">Papel de Parede</a></li>
              <li><a href="/estofos" className="hover:text-[#B5720A] transition-colors">Estofos</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-black mb-4 uppercase tracking-wide">Contactos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📧 Artcasa.cortinados@gmail.com</li>
              <li>📞 +351 913 329 907</li>
              <li>📍 Rua de Freixieiro nº 289, 4640-174 Baião</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-black mb-4 uppercase tracking-wide">Horário</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Segunda - Sexta: 9h-18h</li>
              <li>Sábado: 9h-13h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Art'Casa. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
