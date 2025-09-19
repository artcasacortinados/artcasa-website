import * as React from "react"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import CallToAction from "../components/CallToAction"
import { useGalleryData } from "../hooks/useGalleryData"

const CortinadosPage = () => {
  const galleryData = useGalleryData()
  const [activeGallery, setActiveGallery] = React.useState(null)
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)
  const [galleryType, setGalleryType] = React.useState('')

  const openGallery = (type) => {
    setActiveGallery(true)
    setGalleryType(type)
    setCurrentImageIndex(0)
  }

  const closeGallery = () => {
    setActiveGallery(null)
    setGalleryType('')
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    const images = getGalleryImages()
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    const images = getGalleryImages()
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const getGalleryImages = () => {
    if (galleryType === 'calhas') {
      return calhasImages
    } else if (galleryType === 'cortinados') {
      return cortinadosImages
    }
    return []
  }

  const getCurrentCalhaInfo = () => {
    if (galleryType !== 'calhas') return null
    
    const currentImage = getGalleryImages()[currentImageIndex]
    if (!currentImage) return null
    
    // Find which calha this image belongs to
    for (const calha of calhasData) {
      const calhaImages = calha.processedImages || calha.images || []
      if (calhaImages.includes(currentImage)) {
        return calha
      }
    }
    return null
  }

  // Get data from Notion or fallback to hardcoded data
  const calhasData = galleryData['calhas'] || [
    {
      name: "Calha Moderna",
      description: "Calha elegante em alumínio com acabamento discreto, ideal para cortinados leves e médios.",
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ]
    },
    {
      name: "Calha Clássica",
      description: "Sistema de calha tradicional em latão com suporte reforçado para cortinados pesados.",
      images: [
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ]
    }
  ]
  
  const cortinadosData = galleryData['cortinados'] || []

  const calhasImages = calhasData.flatMap(item => item.processedImages || item.images || [])
  
  const cortinadosImages = cortinadosData.length > 0 
    ? cortinadosData.flatMap(item => item.processedImages || item.images || [])
    : [
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-black leading-none mb-6">
            <span className="block text-[#B5720A]">CORTINADOS</span>
          </h1>
          <div className="w-32 h-2 bg-black mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 leading-relaxed font-medium max-w-3xl mx-auto">
            Dispomos da confeção de cortinados de onda, pregas, ilhós e fita/franzidos. Para a sua confeção contamos com costureiras experientes para que cada peça seja exatamente o que imaginou. Dispomos de uma vasta gama de tecidos, desde os mais leves e translúcidos aos mais incorporados e opacos. As várias marcas com que trabalhamos, oferecem diferentes cores e estilos para criar o ambiente ideal em qualquer divisão da sua casa.
          </p>
        </div>
      </section>

      {/* Cortinados Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-black mb-6 uppercase tracking-wide">
              <span className="text-[#B5720A]">CORTINADOS</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Cortinados elegantes e personalizados. Uma ampla seleção de tecidos, cores e estilos para criar o ambiente ideal em qualquer divisão da sua casa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {cortinadosImages.slice(0, 9).map((image, index) => (
              <div key={index} className="group cursor-pointer" onClick={() => openGallery('cortinados')}>
                <div className="bg-white rounded-lg border-2 border-gray-200 hover:border-black shadow-sm hover:shadow-lg transition-all overflow-hidden">
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={image} 
                      alt={`Cortinados ${index + 1}`}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    
                    {/* Show "+N more" overlay on the last visible image if there are more */}
                    {index === 8 && cortinadosImages.length > 9 && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <div className="text-white text-center">
                          <div className="text-3xl font-bold">+{cortinadosImages.length - 8}</div>
                          <div className="text-sm uppercase tracking-wide">Mais Imagens</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => openGallery('cortinados')}
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-[#B5720A] hover:text-[#B5720A] transition-all duration-300 uppercase tracking-wide"
            >
              Ver Galeria Completa
            </button>
          </div>
        </div>
      </section>

      {/* Calhas Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-black mb-6 uppercase tracking-wide">
              <span className="text-[#B5720A]">CALHAS</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Sistemas de calhas modernos e funcionais. Oferecemos uma vasta gama de calhas em diferentes materiais e acabamentos para complementar qualquer decoração.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {calhasImages.slice(0, 9).map((image, index) => {
              // Find which calha this image belongs to
              let calhaInfo = null
              let imageIndexInCalha = 0
              
              for (const calha of calhasData) {
                const calhaImages = calha.processedImages || calha.images || []
                const foundIndex = calhaImages.indexOf(image)
                if (foundIndex !== -1) {
                  calhaInfo = calha
                  imageIndexInCalha = foundIndex
                  break
                }
              }
              
              return (
                <div key={index} className="group cursor-pointer" onClick={() => openGallery('calhas')}>
                  <div className="bg-white rounded-lg border-2 border-gray-200 hover:border-black shadow-sm hover:shadow-lg transition-all overflow-hidden relative">
                    <div className="h-64 overflow-hidden relative">
                      <img 
                        src={image} 
                        alt={calhaInfo ? `${calhaInfo.name} ${imageIndexInCalha + 1}` : `Calhas ${index + 1}`}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                      
                      {/* Hover overlay with name and description */}
                      {calhaInfo && !(index === 8 && calhasImages.length > 9) && (
                        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                          <div className="text-white text-center">
                            <h3 className="text-lg font-bold mb-2 uppercase tracking-wide">{calhaInfo.name}</h3>
                            <p className="text-sm leading-relaxed">{calhaInfo.description}</p>
                          </div>
                        </div>
                      )}
                      
                      {/* Show "+N more" overlay on the last visible image if there are more */}
                      {index === 8 && calhasImages.length > 9 && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                          <div className="text-white text-center">
                            <div className="text-3xl font-bold">+{calhasImages.length - 8}</div>
                            <div className="text-sm uppercase tracking-wide">Mais Imagens</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => openGallery('calhas')}
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-[#B5720A] hover:text-[#B5720A] transition-all duration-300 uppercase tracking-wide"
            >
              Ver Galeria Completa
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {activeGallery && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
          <div className="max-w-5xl w-full h-full flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center mb-2 flex-shrink-0">
              <div>
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wide">
                  {galleryType === 'calhas' ? 'Calhas' : 'Cortinados'} - {currentImageIndex + 1} de {getGalleryImages().length}
                </h3>
                {/* Show calha name and description for calhas gallery */}
                {galleryType === 'calhas' && getCurrentCalhaInfo() && (
                  <div className="mt-3">
                    <h4 className="text-xl md:text-2xl font-black text-[#B5720A] uppercase tracking-wide mb-1">
                      {getCurrentCalhaInfo().name}
                    </h4>
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl">
                      {getCurrentCalhaInfo().description}
                    </p>
                  </div>
                )}
              </div>
              <button 
                onClick={closeGallery}
                className="text-white hover:text-[#B5720A] text-2xl md:text-3xl font-bold transition-colors ml-4"
              >
                ×
              </button>
            </div>
            
            {/* Main Image */}
            <div className="relative flex-1 flex items-center justify-center min-h-0">
              <img 
                src={getGalleryImages()[currentImageIndex]} 
                alt={`${galleryType === 'calhas' ? 'Calhas' : 'Cortinados'} ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg border border-white/20"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg border border-white/20"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Thumbnails */}
            <div className="flex justify-center mt-6 space-x-2 overflow-x-auto flex-shrink-0">
              {getGalleryImages().map((image, index) => (
                <div key={index} className="flex-shrink-0">
                  <img 
                    src={image} 
                    alt={`Thumbnail ${index + 1}`}
                    className={`h-16 w-20 object-cover rounded cursor-pointer transition-all ${
                      currentImageIndex === index ? 'ring-2 ring-[#B5720A] opacity-100' : 'opacity-60 hover:opacity-80'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <CallToAction productName="nos nossos cortinados" />

      <Footer />
    </div>
  )
}

export default CortinadosPage

export const Head = () => <title>Cortinados - ArtCasa</title>
