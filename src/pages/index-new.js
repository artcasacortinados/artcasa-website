import * as React from "react"

const IndexPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-black">
                Art<span className="text-yellow-600">Casa</span>
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-black hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">Início</a>
                <a href="#products" className="text-black hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">Produtos</a>
                <a href="#projects" className="text-black hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">Projetos</a>
                <a href="#testimonials" className="text-black hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">Opiniões</a>
                <a href="#contact" className="text-black hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">Contacto</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Transforme a sua casa num
              <span className="block text-yellow-600">lar de sonho</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Especialistas em decoração de interiores. 
              Criamos ambientes únicos e personalizados para o seu conforto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors">
                Orçamento Gratuito
              </button>
              <button className="border-2 border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors">
                Ver Projetos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Os Nossos <span className="text-yellow-600">Produtos</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubra a nossa ampla gama de produtos para decoração de interiores
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Estores", description: "Estores de rolo, venezianas e plissados de alta qualidade" },
              { name: "Cortinados", description: "Cortinas elegantes e funcionais para todos os espaços" },
              { name: "Tapetes", description: "Tapetes premium que complementam qualquer decoração" },
              { name: "Papel de Parede", description: "Papéis de parede modernos e clássicos" },
              { name: "Têxteis Lar", description: "Almofadas, colchas e outros têxteis decorativos" },
              { name: "Estofos", description: "Revestimentos e estofados personalizados" }
            ].map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-gray-50 rounded-lg p-8 hover:bg-yellow-50 transition-colors border border-gray-100 hover:border-yellow-200">
                  <div className="h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-6 group-hover:from-yellow-100 group-hover:to-yellow-200 transition-colors"></div>
                  <h3 className="text-xl font-semibold text-black mb-3">{category.name}</h3>
                  <p className="text-gray-600">{category.description}</p>
                  <div className="mt-4">
                    <span className="text-yellow-600 font-medium hover:underline">Saber mais →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects/Services Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Projetos & <span className="text-yellow-600">Serviços</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Veja alguns dos nossos trabalhos recentes e os serviços que oferecemos
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Os Nossos Serviços</h3>
              <div className="space-y-4">
                {[
                  "Consulta domiciliária gratuita",
                  "Medições e orçamentos sem compromisso",
                  "Instalação profissional",
                  "Projetos personalizados",
                  "Assistência pós-venda"
                ].map((service, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mr-4"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg"></div>
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg"></div>
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg"></div>
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              O Que Dizem os Nossos <span className="text-yellow-600">Clientes</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                text: "Excelente atendimento e qualidade. Transformaram completamente a nossa sala de estar!",
                rating: 5
              },
              {
                name: "João Santos",
                text: "Profissionais muito competentes. Recomendo vivamente os serviços da ArtCasa.",
                rating: 5
              },
              {
                name: "Ana Costa",
                text: "Desde a consulta até à instalação, tudo foi perfeito. Muito satisfeita com o resultado.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-600 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-black">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Entre em <span className="text-yellow-600">Contacto</span>
            </h2>
            <p className="text-lg text-gray-600">
              Teremos todo o gosto em criar um orçamento personalizado para si
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Localidade</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                <textarea rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent" placeholder="Conte-nos sobre o seu projeto..."></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors">
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Art<span className="text-yellow-600">Casa</span>
              </h3>
              <p className="text-gray-400">
                Especialistas em decoração de interiores.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Produtos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-600 transition-colors">Estores</a></li>
                <li><a href="#" className="hover:text-yellow-600 transition-colors">Cortinados</a></li>
                <li><a href="#" className="hover:text-yellow-600 transition-colors">Tapetes</a></li>
                <li><a href="#" className="hover:text-yellow-600 transition-colors">Papel de Parede</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contactos</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📧 Artcasa.cortinados@gmail.com</li>
                <li>📞 +351 913 329 907</li>
                <li>📍 Rua de Freixieiro nº 289, 4640-174 Baião</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Horário</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Segunda - Sexta: 9h-18h</li>
                <li>Sábado: 9h-13h</li>
                <li>Domingos e Feriados: Fechado</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ArtCasa. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>ArtCasa - Decoração de Interiores</title>
