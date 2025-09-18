import * as React from "react"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import CallToAction from "../components/CallToAction"
import { useGalleryData } from "../hooks/useGalleryData"

const TexteisLarPage = () => {
  const galleryData = useGalleryData()
  const [activeGallery, setActiveGallery] = React.useState(null)
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)

  const openGallery = () => {
    setActiveGallery(true)
    setCurrentImageIndex(0)
  }

  const closeGallery = () => {
    setActiveGallery(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % texteisItems.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + texteisItems.length) % texteisItems.length)
  }

  // Get data from Notion or fallback to hardcoded data
  const items = galleryData['texteis-lar'] || []
  const texteisItems = items.length > 0 
    ? items.flatMap(item => item.processedImages || item.images || [])
    : [
        "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-black leading-none mb-6">
            TÊXTEIS
            <span className="block text-[#B5720A]">LAR</span>
          </h1>
          <div className="w-32 h-2 bg-black mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 leading-relaxed font-medium max-w-3xl mx-auto">
            Almofadas, colchas, mantas e outros têxteis decorativos que transformam qualquer espaço num ambiente acolhedor e elegante. Qualidade premium e design exclusivo.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {texteisItems.slice(0, Math.min(8, texteisItems.length)).map((image, index) => (
              <div key={index} className="group cursor-pointer" onClick={openGallery}>
                <div className="bg-white rounded-lg border-2 border-gray-200 hover:border-black shadow-sm hover:shadow-lg transition-all overflow-hidden">
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={image} 
                      alt={`Têxteis Lar ${index + 1}`}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    {index === 7 && texteisItems.length > 8 && (
                      <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
                        <span className="text-white text-lg font-bold">
                          +{texteisItems.length - 8} Mais Imagens
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={openGallery}
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
            <div className="flex justify-between items-center mb-4 flex-shrink-0">
              <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wide">
                Têxteis Lar - {currentImageIndex + 1} de {texteisItems.length}
              </h3>
              <button 
                onClick={closeGallery}
                className="text-white hover:text-[#B5720A] text-2xl md:text-3xl font-bold transition-colors"
              >
                ×
              </button>
            </div>
            
            {/* Main Image */}
            <div className="relative flex-1 flex items-center justify-center min-h-0">
              <img 
                src={texteisItems[currentImageIndex]} 
                alt={`Têxteis Lar ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all"
              >
                ←
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all"
              >
                →
              </button>
            </div>
            
            {/* Thumbnails */}
            <div className="flex justify-center mt-6 space-x-2 overflow-x-auto flex-shrink-0">
              {texteisItems.map((image, index) => (
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

      <CallToAction productName="nos nossos têxteis" />

      <Footer />
    </div>
  )
}

export default TexteisLarPage

export const Head = () => <title>Têxteis Lar - Art'Casa</title>
