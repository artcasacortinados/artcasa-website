import * as React from "react"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import CallToAction from "../components/CallToAction"
import { useGalleryData } from "../hooks/useGalleryData"

const QuemSomosPage = () => {
  const galleryData = useGalleryData()
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-black leading-none mb-6">
            <span className="block text-[#B5720A]">QUEM SOMOS</span>
          </h1>
          <div className="w-32 h-2 bg-black mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 leading-relaxed font-medium max-w-3xl mx-auto">
            Conheça a história, os valores e toda a equipa que envolve a Art'Casa - uma empresa que se dedica exclusivamente à decoração e design de interiores.
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-black mb-6 uppercase tracking-wide">
                A Nossa História
              </h2>
              <div className="w-24 h-2 bg-[#B5720A] mb-8"></div>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Fundada há mais de 15 anos, a Art'Casa nasceu da paixão por transformar espaços em ambientes únicos e acolhedores. Começámos como uma pequena empresa familiar e hoje somos uma referência no setor de decoração e design de interiores.
                </p>
                <p>
                  Ao longo dos anos, especializámo-nos em soluções completas de estores, cortinados, têxteis lar, tapetes, estofos e papel de parede, sempre com foco na qualidade e no atendimento personalizado.
                </p>
                <p>
                  A nossa experiência e dedicação permitiram-nos crescer e evoluir, mantendo sempre os valores fundamentais que nos definem: qualidade, inovação e satisfação total do cliente.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={(() => {
                  // Get image from Notion database for "quem-somos" category, fallback to hardcoded image
                  const quemSomosData = galleryData['quem-somos'] || []
                  if (quemSomosData.length > 0 && quemSomosData[0] && quemSomosData[0].processedImages && quemSomosData[0].processedImages[0]) {
                    return quemSomosData[0].processedImages[0]
                  } else if (quemSomosData.length > 0 && quemSomosData[0] && quemSomosData[0].images && quemSomosData[0].images[0]) {
                    return quemSomosData[0].images[0]
                  }
                  return "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                })()} 
                alt="Interior design showcase"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#B5720A] rounded-lg opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-6 uppercase tracking-wide">
              Os Nossos Valores
            </h2>
            <div className="w-24 h-2 bg-[#B5720A] mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Missão */}
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-[#B5720A] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-black mb-4 uppercase tracking-wide">Missão</h3>
              <p className="text-gray-700 leading-relaxed">
                Transformar espaços em ambientes únicos. Oferecer soluções completas aos nossos clientes, juntando um bom design, qualidade e um atendimento personalizado.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-[#B5720A] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-black mb-4 uppercase tracking-wide">Visão</h3>
              <p className="text-gray-700 leading-relaxed">
                Trabalhar com ética, transparência e compromisso em cada projeto. Valorizar a qualidade, a criatividade e a atenção ao detalhe para superar as expectativas dos nossos clientes.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-[#B5720A] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-black mb-4 uppercase tracking-wide">Valores</h3>
              <p className="text-gray-700 leading-relaxed">
                Qualidade, inovação e compromisso com os nossos clientes são os pilares da nossa empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Números Section */}
      <section className="py-20 bg-gradient-to-br from-[#B5720A]/10 to-[#B5720A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-black mb-6 uppercase tracking-wide">
              <span className="text-[#B5720A]">OS NOSSOS</span> NÚMEROS
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Resultados que falam por si e demonstram o nosso compromisso com a excelência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-sm border border-[#B5720A]/30">
              <div className="text-4xl font-black text-[#B5720A] mb-2">150+</div>
              <div className="text-xl font-bold text-black uppercase tracking-wide">Projetos Concluídos</div>
              <p className="text-gray-600 mt-2">Mais de 150 projetos realizados com sucesso em todo o país</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-sm border border-[#B5720A]/30">
              <div className="text-4xl font-black text-[#B5720A] mb-2">5★</div>
              <div className="text-xl font-bold text-black uppercase tracking-wide">Avaliação Média</div>
              <p className="text-gray-600 mt-2">Classificação média baseada em avaliações de clientes</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-sm border border-[#B5720A]/30">
              <div className="text-4xl font-black text-[#B5720A] mb-2">98%</div>
              <div className="text-xl font-bold text-black uppercase tracking-wide">Clientes Satisfeitos</div>
              <p className="text-gray-600 mt-2">Taxa de satisfação baseada em feedback direto dos clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compromisso com a Qualidade */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src={(() => {
                  // Get second image from Notion database for "quem-somos" category, fallback to hardcoded image
                  const quemSomosData = galleryData['quem-somos'] || []
                  if (quemSomosData.length > 0 && quemSomosData[0] && quemSomosData[0].processedImages && quemSomosData[0].processedImages[1]) {
                    return quemSomosData[0].processedImages[1]
                  } else if (quemSomosData.length > 0 && quemSomosData[0] && quemSomosData[0].images && quemSomosData[0].images[1]) {
                    return quemSomosData[0].images[1]
                  }
                  return "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                })()} 
                alt="Quality craftsmanship"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-black rounded-lg opacity-10"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-black text-black mb-6 uppercase tracking-wide">
                Compromisso com a Qualidade
              </h2>
              <div className="w-24 h-2 bg-[#B5720A] mb-8"></div>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Na ArtCasa, a qualidade não é apenas um objetivo — é o nosso compromisso diário. Trabalhamos com fornecedores de confiança e materiais de alta qualidade para garantir que cada projeto seja único, funcional e tenha durabilidade.
                </p>
                <p>
                  Cada detalhe importa. É por isso que acompanhamos todo o processo — do primeiro contacto à instalação final — com uma equipa experiente e dedicada. Queremos mais do que satisfazer: queremos surpreender.
                </p>
                <p>
                  Oferecemos garantia em todos os nossos produtos e serviços, porque acreditamos na qualidade do nosso trabalho e queremos que os nossos clientes tenham total confiança na sua escolha.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction productName="conhecer melhor a ArtCasa" />

      <Footer />
    </div>
  )
}

export default QuemSomosPage

export const Head = () => <title>Quem Somos - ArtCasa</title>
