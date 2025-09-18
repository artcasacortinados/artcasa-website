import * as React from "react"
import emailjs from '@emailjs/browser'
import logoImage from "../images/logo.png"
import estoresImage from "../images/estores.png"
import tapetesImage from "../images/tapetes.png"
import cortinadosImage from "../images/cortinados.png"
import papelparedeImage from "../images/papelparede.png"
import estofosImage from "../images/estofos.png"
import texteisLarImage from "../images/texteis-lar.png"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import heroImage from "../images/hero.png"
import { useGalleryData } from "../hooks/useGalleryData"  

const IndexPage = () => {
  const galleryData = useGalleryData()
  
  // Contact form state
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitStatus, setSubmitStatus] = React.useState(null) // 'success', 'error', or null

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Get EmailJS credentials from environment variables
    const SERVICE_ID = process.env.GATSBY_EMAILJS_SERVICE_ID
    const TEMPLATE_ID = process.env.GATSBY_EMAILJS_TEMPLATE_ID
    const PUBLIC_KEY = process.env.GATSBY_EMAILJS_PUBLIC_KEY

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          location: formData.location,
          message: formData.message,
          to_name: 'Art\'Casa', // Your business name
        },
        PUBLIC_KEY
      )
      
      if (result.status === 200) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          location: '',
          message: ''
        })
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center bg-cover bg-center bg-gray-800" 
               style={{backgroundImage: `url(${(() => {
                 // Get hero image from Notion database, fallback to hardcoded image
                 const heroData = galleryData['hero-image'] || []
                 if (heroData.length > 0 && heroData[0] && heroData[0].processedImages && heroData[0].processedImages[0]) {
                   return heroData[0].processedImages[0]
                 } else if (heroData.length > 0 && heroData[0] && heroData[0].images && heroData[0].images[0]) {
                   return heroData[0].images[0]
                 }
                 return heroImage
               })()})`}}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Logo in Hero */}
            <div>
              <img src={logoImage} alt="Art'Casa Logo" className="h-128 w-auto mx-auto brightness-0 invert opacity-90" />
            </div>
            <p className="text-xl md:text-2xl lg:text-3xl text-white mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
              Especialistas em decoração de interiores. 
              Criamos ambientes únicos e personalizados para o seu conforto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact"
                className="bg-[#B5720A] text-white px-10 py-4 rounded-xl font-black hover:bg-[#9A5D07] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 uppercase tracking-wide text-center"
              >
                Orçamento Gratuito
              </a>
              <a href="/projects" className="border-2 border-white text-white px-10 py-4 rounded-xl font-black hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wide text-center">
                Ver Projetos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="products" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-black leading-none mb-4">
                OS NOSSOS
                <span className="block text-[#B5720A]">PRODUTOS</span>
              </h2>
              <div className="w-32 h-2 bg-black mt-6 lg:mt-8"></div>
            </div>
            <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0 flex items-center">
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                Descubra a nossa ampla gama de produtos para decoração de interiores. 
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { 
                name: "Estores", 
                description: "Na Art´Casa encontra estores versáteis e funcionais: estores de rolo, venezianos, vertika, painel japonês, romanetes, mosquiteiras e estores pelissados.",
                image: estoresImage,
                link: "/estores"
              },
              { 
                name: "Cortinados", 
                description: "Na Art´Casa fazemos a confeção e a aplicação de cortinados personalizados com tecidos de qualidade e acabamento profissional.",
                image: cortinadosImage,
                link: "/cortinados"
              },
              { 
                name: "Tapetes", 
                description: "Na Art´Casa fabricamos tapetes à medida, para que cada detalhe combine com o seu espaço. Trabalhamos com diferentes cores, texturas e estilos, oferecendo opções que vão do clássico ao moderno.",
                image: tapetesImage,
                link: "/tapetes"
              },
              { 
                name: "Papel de Parede", 
                description: "Na Art´Casa damos cor e estilo ao seu espaço através dos nossos papéis de parede de qualidade. Desde padrões elegantes a texturas sofisticadas, temos a solução perfeita para o seu projeto.",
                image: papelparedeImage,
                link: "/papel-parede"
              },
              { 
                name: "Têxteis Lar", 
                description: "Na Art´Casa encontra têxteis lar elegantes e aconchegantes: cortinados, colchas, edredões, almofadas decorativas, mantas, tapetes e toalhas de alta qualidade.",
                image: texteisLarImage,
                link: "/texteis-lar"
              },
              { 
                name: "Estofos", 
                description: "Na Art´Casa revestimos e estofamos de forma personalizada e ao seu gosto. Renovamos e criamos peças únicas com tecidos de alta qualidade e acabamentos profissionais.",
                image: estofosImage,
                link: "/estofos"
              }
            ].map((category, index) => (
              <a key={index} href={category.link} className="group cursor-pointer w-full sm:w-80 lg:w-96 block">
                <div className="bg-white rounded-lg p-8 hover:bg-gray-50 transition-colors border border-gray-200 hover:border-black shadow-sm hover:shadow-lg h-[28rem] flex flex-col">
                  <div className="h-40 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-6 overflow-hidden border border-gray-100">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-3 uppercase tracking-wide">{category.name}</h3>
                  <p className="text-gray-700 mb-4 font-medium flex-1">{category.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-[#B5720A] font-medium">Saber mais</span>
                    <span className="text-black font-bold">→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Projects/Services Section */}
      <section id="projects" className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:justify-between mb-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-black leading-none mb-4 lg:text-right">
                PROJETOS &
                <span className="block text-[#B5720A]">SERVIÇOS</span>
              </h2>
              <div className="w-32 h-2 bg-black mt-6 lg:mt-8 lg:ml-auto"></div>
            </div>
            <div className="lg:w-1/2 lg:pr-12 mt-8 lg:mt-0 flex items-center">
              <p className="text-xl text-gray-700 leading-relaxed font-medium lg:text-right">
                Veja alguns dos nossos trabalhos recentes e os serviços que oferecemos. 
                Qualidade e dedicação ao seu serviço.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-3xl font-black text-black mb-6 border-b border-gray-200 pb-4 uppercase tracking-wide">OS NOSSOS SERVIÇOS</h3>
              <div className="space-y-4">
                {[
                  "Consulta domiciliária gratuita",
                  "Medições e orçamentos sem compromisso",
                  "Instalação profissional",
                  "Projetos personalizados",
                  "Assistência pós-venda"
                ].map((service, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 bg-black rounded-full mr-4"></div>
                    <span className="text-gray-800 font-bold">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {(() => {
                // Get images from Notion database for homepage projects, fallback to hardcoded images
                const homepageProjects = galleryData['homepage-projects'] || []
                const fallbackImages = [
                  {
                    url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                    alt: "Projeto sala de estar"
                  },
                  {
                    url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                    alt: "Projeto quarto"
                  },
                  {
                    url: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                    alt: "Projeto cozinha"
                  },
                  {
                    url: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                    alt: "Projeto escritório"
                  }
                ]
                
                // Use first 4 images from Notion or fallback images
                const imagesToUse = []
                for (let i = 0; i < 4; i++) {
                  if (homepageProjects.length > 0 && homepageProjects[0] && homepageProjects[0].processedImages && homepageProjects[0].processedImages[i]) {
                    imagesToUse.push({
                      url: homepageProjects[0].processedImages[i],
                      alt: `Projeto ${homepageProjects[0].name || 'Art\'Casa'} ${i + 1}`
                    })
                  } else if (homepageProjects.length > 0 && homepageProjects[0] && homepageProjects[0].images && homepageProjects[0].images[i]) {
                    imagesToUse.push({
                      url: homepageProjects[0].images[i],
                      alt: `Projeto ${homepageProjects[0].name || 'Art\'Casa'} ${i + 1}`
                    })
                  } else {
                    imagesToUse.push(fallbackImages[i])
                  }
                }
                
                return imagesToUse.map((image, index) => (
                  <div key={index} className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden border border-gray-300">
                    <img 
                      src={image.url} 
                      alt={image.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                ))
              })()}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/projects"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-[#B5720A] hover:text-[#B5720A] transition-all duration-300 uppercase tracking-wide"
            >
              Ver Todos os Projetos
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-black leading-none mb-4">
                O QUE DIZEM
                <span className="block text-[#B5720A]">OS CLIENTES</span>
              </h2>
              <div className="w-32 h-2 bg-black mt-6 lg:mt-8"></div>
            </div>
            <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0 flex items-center">
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                A satisfação dos nossos clientes é a nossa maior motivação. 
                Veja o que dizem sobre os nossos serviços.
              </p>
            </div>
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
                text: "Profissionais muito competentes. Recomendo vivamente os serviços da Art'Casa.",
                rating: 5
              },
              {
                name: "Ana Costa",
                text: "Desde a consulta até à instalação, tudo foi perfeito. Muito satisfeita com o resultado.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200 hover:border-black transition-colors shadow-sm">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#B5720A] text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-800 mb-4 italic font-bold text-lg">"{testimonial.text}"</p>
                <p className="font-black text-black uppercase tracking-wide">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:justify-between mb-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-black leading-none mb-4 lg:text-right">
                ENTRE EM
                <span className="block text-[#B5720A]">CONTACTO</span>
              </h2>
              <div className="w-32 h-2 bg-black mt-6 lg:mt-8 lg:ml-auto"></div>
            </div>
            <div className="lg:w-1/2 lg:pr-12 mt-8 lg:mt-0 flex items-center">
              <p className="text-xl text-gray-700 leading-relaxed font-medium lg:text-right">
                Teremos todo o gosto em criar um orçamento personalizado para si. 
                Contacte-nos hoje mesmo.
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-gray-200">
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-black text-green-800 uppercase tracking-wide">
                        Mensagem enviada com sucesso! Entraremos em contacto em breve.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-black text-red-800 uppercase tracking-wide mb-2">
                        Erro ao enviar mensagem. 
                      </p>
                      <p className="text-xs text-red-700">
                        Por favor tente novamente ou contacte-nos directamente em:
                      </p>
                      <div className="mt-2 space-y-1">
                        <p className="text-xs text-red-700">
                          📧 <a href="mailto:Artcasa.cortinados@gmail.com" className="underline hover:text-red-900">Artcasa.cortinados@gmail.com</a>
                        </p>
                        <p className="text-xs text-red-700">
                          📞 <a href="tel:+351913329907" className="underline hover:text-red-900">+351 913 329 907</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">Nome *</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5720A] focus:border-[#B5720A] transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5720A] focus:border-[#B5720A] transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed" 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">Telefone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5720A] focus:border-[#B5720A] transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">Localidade</label>
                    <input 
                      type="text" 
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5720A] focus:border-[#B5720A] transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">Mensagem *</label>
                  <textarea 
                    rows="4" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5720A] focus:border-[#B5720A] transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed" 
                    placeholder="Conte-nos sobre o seu projeto, tipos de tecido, medidas e outros detalhes..."
                  />
                </div>
                <div className="text-center">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-black text-white px-12 py-4 rounded-lg font-black hover:bg-gray-800 transition-colors shadow-lg uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto min-w-[200px]"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        A Enviar...
                      </>
                    ) : (
                      'Enviar Mensagem'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Art'Casa - Decoração de Interiores</title>
