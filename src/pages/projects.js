import * as React from "react"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import CallToAction from "../components/CallToAction"
import { useGalleryData } from "../hooks/useGalleryData"

const ProjectsPage = () => {
  const galleryData = useGalleryData()
  const [activeGallery, setActiveGallery] = React.useState(null)
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)
  const [selectedProject, setSelectedProject] = React.useState(null)
  const [showDescription, setShowDescription] = React.useState(false)
  const [visibleProjects, setVisibleProjects] = React.useState(6) // Show 6 projects initially

  const openGallery = (project) => {
    setSelectedProject(project)
    setActiveGallery(true)
    setCurrentImageIndex(0)
    setShowDescription(false) // Reset description state
  }

  const closeGallery = () => {
    setActiveGallery(null)
    setSelectedProject(null)
    setCurrentImageIndex(0)
    setShowDescription(false)
  }

  const toggleDescription = () => {
    setShowDescription(!showDescription)
  }

  const showMoreProjects = () => {
    setVisibleProjects(prev => prev + 6) // Show 6 more projects each time
  }

  const nextImage = () => {
    if (selectedProject && (selectedProject.processedImages || selectedProject.images)) {
      const images = selectedProject.processedImages || selectedProject.images
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (selectedProject && (selectedProject.processedImages || selectedProject.images)) {
      const images = selectedProject.processedImages || selectedProject.images
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
    }
  }

  // Get projects from Notion or fallback to hardcoded data
  const projects = galleryData['projects'] || [
    {
      name: "Sala de Estar Moderna",
      description: "Transformação completa de sala de estar com estores plissados, tapetes premium e têxteis coordenados. Combinação perfeita entre funcionalidade e elegância.",
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ],
      projectInfo: {
        location: "Lisboa",
        year: 2023
      }
    },
    {
      name: "Quarto Principal Elegante",
      description: "Decoração completa de quarto principal com cortinados blackout, papel de parede texturizado e coordenação de têxteis para criar um ambiente relaxante.",
      images: [
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ],
      projectInfo: {
        location: "Porto",
        year: 2023
      }
    },
    {
      name: "Escritório Corporativo",
      description: "Espaço de trabalho moderno com estores de rolo para controlo de luz, tapetes acústicos e elementos decorativos que promovem produtividade.",
      images: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ],
      projectInfo: {
        location: "Braga",
        year: 2023
      }
    },
    {
      name: "Cozinha Contemporânea",
      description: "Remodelação de cozinha com venezianas exteriores, estofos personalizados para bancadas e coordenação de cores elegante.",
      images: [
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ],
      projectInfo: {
        location: "Coimbra",
        year: 2023
      }
    },
    {
      name: "Espaço Comercial Premium",
      description: "Loja de luxo com painéis japoneses, tapetes statement e têxteis de alta qualidade que criam uma experiência única para clientes.",
      images: [
        "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ],
      projectInfo: {
        location: "Aveiro",
        year: 2023
      }
    },
    {
      name: "Apartamento Minimalista",
      description: "Decoração minimalista com estores de rolo discretos, papel de parede neutro e têxteis em tons naturais para um ambiente zen.",
      images: [
        "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ],
      projectInfo: {
        location: "Faro",
        year: 2023
      }
    },
    {
      name: "Sala de Jantar Clássica",
      description: "Ambiente clássico com cortinados elegantes, tapete persa e coordenação de têxteis que criam uma atmosfera sofisticada para jantares.",
      images: [
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ],
      projectInfo: {
        location: "Viseu",
        year: 2023
      }
    },
    {
      name: "Hotel Boutique",
      description: "Projeto completo para hotel boutique com estores térmicos, papel de parede artístico e têxteis de luxo em todos os quartos.",
      images: [
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ],
      projectInfo: {
        location: "Óbidos",
        year: 2023
      }
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-black leading-none mb-6">
            OS NOSSOS
            <span className="block text-[#B5720A]">PROJETOS</span>
          </h1>
          <div className="w-32 h-2 bg-black mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 leading-relaxed font-medium max-w-3xl mx-auto">
            Descubra alguns dos nossos projetos mais marcantes. Cada espaço é único e reflete a personalidade e necessidades dos nossos clientes.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-black text-[#B5720A] mb-2">150+</div>
              <div className="text-xl font-bold text-black uppercase tracking-wide">Projetos Concluídos</div>
              <p className="text-gray-600 mt-2">Mais de 150 projetos realizados com sucesso em todo o país</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-black text-[#B5720A] mb-2">5★</div>
              <div className="text-xl font-bold text-black uppercase tracking-wide">Avaliação Média</div>
              <p className="text-gray-600 mt-2">Classificação média baseada em avaliações de clientes</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-black text-[#B5720A] mb-2">98%</div>
              <div className="text-xl font-bold text-black uppercase tracking-wide">Clientes Satisfeitos</div>
              <p className="text-gray-600 mt-2">Taxa de satisfação baseada em feedback direto dos clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, visibleProjects).map((project, index) => (
              <div key={index} className="bg-white rounded-lg border-2 border-gray-200 hover:border-black shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col h-full group cursor-pointer"
                   onClick={() => openGallery(project)}>
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={project.processedImages?.[0] || project.images?.[0] || project.image} 
                    alt={project.name || project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#B5720A] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                      {project.projectInfo?.style || project.category || 'Projeto'}
                    </span>
                  </div>
                  {/* Multiple images indicator */}
                  {((project.processedImages && project.processedImages.length > 1) || (project.images && project.images.length > 1)) && (
                    <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs font-medium">
                      +{(project.processedImages || project.images).length - 1} fotos
                    </div>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-2xl font-black text-black mb-1 uppercase tracking-wide">{project.name || project.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed flex-1 font-medium">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Show More Button */}
          {visibleProjects < projects.length && (
            <div className="text-center mt-12">
              <button 
                onClick={showMoreProjects}
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-[#B5720A] hover:text-[#B5720A] transition-all duration-300 uppercase tracking-wide"
              >
                Ver Mais Projetos ({projects.length - visibleProjects} restantes)
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Gallery Modal */}
      {activeGallery && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
          <div className="max-w-6xl w-full h-full flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center mb-4 flex-shrink-0">
              <div className="flex items-center space-x-4">
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wide">
                  {selectedProject.name} - {currentImageIndex + 1} de {(selectedProject.processedImages || selectedProject.images)?.length || 1}
                </h3>
                {/* Mobile Description Toggle */}
                <button 
                  onClick={toggleDescription}
                  className="md:hidden bg-[#B5720A] text-white px-3 py-1 rounded text-sm font-medium"
                >
                  {showDescription ? 'Ocultar Info' : 'Ver Info'}
                </button>
              </div>
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
                src={(selectedProject.processedImages || selectedProject.images)?.[currentImageIndex] || selectedProject.image} 
                alt={`${selectedProject.name} - Imagem ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              {/* Navigation Arrows - Only show if multiple images */}
              {(selectedProject.processedImages || selectedProject.images) && (selectedProject.processedImages || selectedProject.images).length > 1 && (
                <>
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
                </>
              )}
            </div>
            
            {/* Project Info - Desktop: Always visible, Mobile: Collapsible */}
            <div className={`mt-4 bg-black bg-opacity-75 text-white p-4 md:p-6 rounded-lg flex-shrink-0 transition-all duration-300 ${
              showDescription ? 'block' : 'hidden md:block'
            }`}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="mb-4 md:mb-0">
                  <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-wide">{selectedProject.name || selectedProject.title}</h4>
                  <p className="text-[#B5720A] font-medium uppercase tracking-wide">{selectedProject.projectInfo?.location || selectedProject.location}</p>
                </div>
                <span className="bg-[#B5720A] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide self-start">
                  {selectedProject.projectInfo?.style || selectedProject.category || 'Projeto'}
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">{selectedProject.description}</p>
              
              {/* Project Details */}
              {selectedProject.projectInfo && (
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 uppercase tracking-wide font-bold">Ano</span>
                    <p className="text-white font-medium">{selectedProject.projectInfo.year}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 uppercase tracking-wide font-bold">Local</span>
                    <p className="text-white font-medium">{selectedProject.projectInfo.location}</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Thumbnails - Only show if multiple images */}
            {(selectedProject.processedImages || selectedProject.images) && (selectedProject.processedImages || selectedProject.images).length > 1 && (
              <div className="flex justify-center mt-4 space-x-2 overflow-x-auto flex-shrink-0">
                {(selectedProject.processedImages || selectedProject.images).map((image, index) => (
                  <div key={index} className="flex-shrink-0">
                    <img 
                      src={image} 
                      alt={`${selectedProject.name} - Thumbnail ${index + 1}`}
                      className={`h-16 w-20 object-cover rounded cursor-pointer transition-all ${
                        currentImageIndex === index ? 'ring-2 ring-[#B5720A] opacity-100' : 'opacity-60 hover:opacity-80'
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <CallToAction productName="nos nossos serviços" />

      <Footer />
    </div>
  )
}

export default ProjectsPage

export const Head = () => <title>Projetos - ArtCasa</title>
