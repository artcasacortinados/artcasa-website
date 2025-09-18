import * as React from "react"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import CallToAction from "../components/CallToAction"
import { useGalleryData } from "../hooks/useGalleryData"

const EstoresPage = () => {
  const galleryData = useGalleryData()
  const [activeGallery, setActiveGallery] = React.useState(null)
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)

  const openGallery = (galleryType) => {
    setActiveGallery(galleryType)
    setCurrentImageIndex(0)
  }

  const closeGallery = () => {
    setActiveGallery(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    const images = activeGallery.startsWith('exterior') 
      ? (exteriorEstores[parseInt(activeGallery.split('-')[1])].processedImages || exteriorEstores[parseInt(activeGallery.split('-')[1])].images)
      : (interiorEstores[parseInt(activeGallery.split('-')[1])].processedImages || interiorEstores[parseInt(activeGallery.split('-')[1])].images)
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    const images = activeGallery.startsWith('exterior') 
      ? (exteriorEstores[parseInt(activeGallery.split('-')[1])].processedImages || exteriorEstores[parseInt(activeGallery.split('-')[1])].images)
      : (interiorEstores[parseInt(activeGallery.split('-')[1])].processedImages || interiorEstores[parseInt(activeGallery.split('-')[1])].images)
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  // Get data from Notion or fallback to hardcoded data
  const exteriorEstores = galleryData['estores-exterior'] || [
    {
      name: "Rolo",
      description: "Estores de rolo resistentes para exteriores, ideais para terraços e varandas",
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ]
    },
    {
      name: "Persiana Térmica",
      description: "Persianas térmicas para isolamento e proteção solar exterior",
      images: [
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ]
    },
    {
      name: "Veneziana",
      description: "Venezianas exteriores elegantes e duráveis",
      images: [
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ]
    }
  ]

  const interiorEstores = galleryData['estores-interior'] || [
    {
      name: "Rolo Interior",
      description: "Estores de rolo para controlo perfeito da luminosidade interior",
      images: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ]
    },
    {
      name: "Plissé",
      description: "Estores plissados modernos e funcionais para qualquer ambiente",
      images: [
        "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ]
    },
    {
      name: "Painel Japonês",
      description: "Painéis japoneses minimalistas e elegantes",
      images: [
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-black leading-none mb-6">
            <span className="block text-[#B5720A]">ESTORES</span>
          </h1>
          <div className="w-32 h-2 bg-black mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 leading-relaxed font-medium max-w-3xl mx-auto">
            Na Art´Casa encontra estores versáteis e funcionais: estores de rolo, venezianos, vertika, painel japonês, romanetes, mosquiteiras e estores pelissados.
          </p>
        </div>
      </section>

      {/* Exterior Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6 uppercase tracking-wide">
              EXTERIOR
            </h2>
            <div className="w-32 h-2 bg-[#B5720A] mb-8"></div>
            <p className="text-xl text-gray-700 leading-relaxed font-medium max-w-3xl">
              Estores resistentes e duráveis para proteção solar e privacidade no exterior.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {exteriorEstores.map((store, index) => (
              <div key={index} className="bg-white rounded-lg border-2 border-gray-200 hover:border-black shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col w-full sm:w-80 lg:w-96 cursor-pointer" style={{ height: '36rem' }} onClick={() => openGallery(`exterior-${index}`)}>
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={(store.processedImages || store.images)[0]} 
                    alt={store.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-black text-black mb-3 uppercase tracking-wide">{store.name}</h3>
                  <div className="flex-1 mb-4">
                    <p className="text-gray-700 leading-relaxed">{store.description}</p>
                  </div>
                  
                  {/* Thumbnail Preview */}
                  <div className="mb-4 min-h-[3rem] flex items-center">
                    {(store.processedImages || store.images).length > 1 ? (
                      <div className="flex space-x-2">
                        {(store.processedImages || store.images).slice(1, 5).map((image, imgIndex) => (
                          <div key={imgIndex} className="relative">
                            <img 
                              src={image} 
                              alt={`${store.name} ${imgIndex + 2}`}
                              className="w-12 h-12 object-cover rounded hover:scale-110 transition-transform cursor-pointer border border-gray-300 hover:border-[#B5720A]"
                              onClick={(e) => {
                                e.stopPropagation();
                                openGallery(`exterior-${index}`);
                              }}
                            />
                          </div>
                        ))}
                        {(store.processedImages || store.images).length > 5 && (
                          <div 
                            className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded flex items-center justify-center text-gray-700 text-xs font-bold cursor-pointer transition-all border border-gray-300 hover:border-[#B5720A]"
                            onClick={(e) => {
                              e.stopPropagation();
                              openGallery(`exterior-${index}`);
                            }}
                          >
                            +{(store.processedImages || store.images).length - 4}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      openGallery(`exterior-${index}`);
                    }}
                    className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:border-[#B5720A] hover:text-[#B5720A] transition-all duration-300 uppercase tracking-wide w-full text-sm"
                  >
                    Ver Galeria
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-right mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6 uppercase tracking-wide">
              INTERIOR
            </h2>
            <div className="w-32 h-2 bg-[#B5720A] ml-auto mb-8"></div>
            <p className="text-xl text-gray-700 leading-relaxed font-medium max-w-3xl ml-auto">
              Estores elegantes para controlo perfeito da luz e privacidade no interior.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {interiorEstores.map((store, index) => (
              <div key={index} className="bg-white rounded-lg border-2 border-gray-200 hover:border-black shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col w-full sm:w-80 lg:w-96 cursor-pointer" style={{ height: '36rem' }} onClick={() => openGallery(`interior-${index}`)}>
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={(store.processedImages || store.images)[0]} 
                    alt={store.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-black text-black mb-3 uppercase tracking-wide">{store.name}</h3>
                  <div className="flex-1 mb-4">
                    <p className="text-gray-700 leading-relaxed">{store.description}</p>
                  </div>
                  
                  {/* Thumbnail Preview */}
                  <div className="mb-4 min-h-[3rem] flex items-center">
                    {(store.processedImages || store.images).length > 1 ? (
                      <div className="flex space-x-2">
                        {(store.processedImages || store.images).slice(1, 5).map((image, imgIndex) => (
                          <div key={imgIndex} className="relative">
                            <img 
                              src={image} 
                              alt={`${store.name} ${imgIndex + 2}`}
                              className="w-12 h-12 object-cover rounded hover:scale-110 transition-transform cursor-pointer border border-gray-300 hover:border-[#B5720A]"
                              onClick={(e) => {
                                e.stopPropagation();
                                openGallery(`interior-${index}`);
                              }}
                            />
                          </div>
                        ))}
                        {(store.processedImages || store.images).length > 5 && (
                          <div 
                            className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded flex items-center justify-center text-gray-700 text-xs font-bold cursor-pointer transition-all border border-gray-300 hover:border-[#B5720A]"
                            onClick={(e) => {
                              e.stopPropagation();
                              openGallery(`interior-${index}`);
                            }}
                          >
                            +{(store.processedImages || store.images).length - 4}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      openGallery(`interior-${index}`);
                    }}
                    className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:border-[#B5720A] hover:text-[#B5720A] transition-all duration-300 uppercase tracking-wide w-full text-sm"
                  >
                    Ver Galeria
                  </button>
                </div>
              </div>
            ))}
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
                {activeGallery.startsWith('exterior') 
                  ? `${exteriorEstores[parseInt(activeGallery.split('-')[1])].name} - ${currentImageIndex + 1} de ${(exteriorEstores[parseInt(activeGallery.split('-')[1])].processedImages || exteriorEstores[parseInt(activeGallery.split('-')[1])].images).length}`
                  : `${interiorEstores[parseInt(activeGallery.split('-')[1])].name} - ${currentImageIndex + 1} de ${(interiorEstores[parseInt(activeGallery.split('-')[1])].processedImages || interiorEstores[parseInt(activeGallery.split('-')[1])].images).length}`
                }
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
                src={(activeGallery.startsWith('exterior') 
                  ? (exteriorEstores[parseInt(activeGallery.split('-')[1])].processedImages || exteriorEstores[parseInt(activeGallery.split('-')[1])].images)
                  : (interiorEstores[parseInt(activeGallery.split('-')[1])].processedImages || interiorEstores[parseInt(activeGallery.split('-')[1])].images)
                )[currentImageIndex]} 
                alt={`Galeria ${currentImageIndex + 1}`}
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
              {(activeGallery.startsWith('exterior') 
                ? (exteriorEstores[parseInt(activeGallery.split('-')[1])].processedImages || exteriorEstores[parseInt(activeGallery.split('-')[1])].images)
                : (interiorEstores[parseInt(activeGallery.split('-')[1])].processedImages || interiorEstores[parseInt(activeGallery.split('-')[1])].images)
              ).map((image, index) => (
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

      <CallToAction productName="nos nossos estores" />

      <Footer />
    </div>
  )
}

export default EstoresPage

export const Head = () => <title>Estores - Art'Casa</title>