const { Client } = require('@notionhq/client')

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

// Database structure expectations:
// - Page Type (select): estores-exterior, estores-interior, texteis-lar, estofos, papel-parede, tapetes, projects
// - Name (title): Item name
// - Description (rich_text): Item description
// - Images (files): Array of image files
// - Order (number): Display order (optional)

async function getNotionGalleryData() {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID
    
    if (!databaseId) {
      console.warn('NOTION_DATABASE_ID not found, using fallback data')
      return getFallbackData()
    }

    console.log('🔍 Fetching from Notion database:', databaseId)

    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: 'Order',
          direction: 'ascending',
        },
      ],
    })

    console.log('📊 Notion response:', {
      totalResults: response.results.length,
      results: response.results.map(page => ({
        id: page.id,
        pageType: page.properties['Page Type']?.select?.name,
        name: page.properties.Name?.title?.[0]?.plain_text,
        imageCount: page.properties.Images?.files?.length || 0
      }))
    })

    const data = {
      'estores-exterior': [],
      'estores-interior': [],
      'calhas': [],
      'cortinados': [],
      'texteis-lar': [],
      'estofos': [],
      'papel-parede': [],
      'tapetes': [],
      'projects': [],
      'homepage-projects': [],
      'quem-somos': [],
      'hero-image': []
    }

    for (const page of response.results) {
      const properties = page.properties
      
      // Extract page type
      const pageType = properties['Page Type']?.select?.name
      if (!pageType || !data[pageType]) continue

      // Extract name (title)
      const name = properties['Name']?.title?.[0]?.plain_text || 'Untitled'
      
      // Extract description
      const description = properties['Description']?.rich_text?.[0]?.plain_text || ''
      
      // Extract images
      const images = properties['Images']?.files?.map(file => {
        if (file.type === 'file') {
          return file.file.url
        } else if (file.type === 'external') {
          return file.external.url
        }
        return null
      }).filter(Boolean) || []

      // For projects, also extract project info if available
      let projectInfo = null
      if (pageType === 'projects') {
        projectInfo = {
          location: properties['Location']?.rich_text?.[0]?.plain_text || '',
          year: properties['Year']?.number || new Date().getFullYear(),
          area: properties['Area']?.rich_text?.[0]?.plain_text || '',
          style: properties['Style']?.rich_text?.[0]?.plain_text || ''
        }
      }

      const item = {
        name,
        description,
        images,
        ...(projectInfo && { projectInfo })
      }

      data[pageType].push(item)
    }

    console.log('✅ Final processed data:', {
      'estores-exterior': data['estores-exterior'].length,
      'estores-interior': data['estores-interior'].length,
      'calhas': data['calhas'].length,
      'cortinados': data['cortinados'].length,
      'texteis-lar': data['texteis-lar'].length,
      'estofos': data['estofos'].length,
      'papel-parede': data['papel-parede'].length,
      'tapetes': data['tapetes'].length,
      'projects': data['projects'].length,
      'homepage-projects': data['homepage-projects'].length,
      'quem-somos': data['quem-somos'].length,
      'hero-image': data['hero-image'].length
    })

    return data
  } catch (error) {
    console.error('Error fetching Notion data:', error)
    return getFallbackData()
  }
}

function getFallbackData() {
  // Fallback data with current structure
  return {
    'estores-exterior': [
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
    ],
    'estores-interior': [
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
    ],
    'calhas': [],
    'cortinados': [],
    'texteis-lar': [],
    'estofos': [],
    'papel-parede': [],
    'tapetes': [],
    'projects': [
      {
        name: "Apartamento Moderno",
        description: "Sala de estar elegante com estores plissados, tapetes texturizados e têxteis em tons neutros que criam um ambiente sofisticado.",
        images: [
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ],
        projectInfo: {
          location: "Lisboa",
          year: 2023,
          area: "120m²",
          style: "Moderno"
        }
      },
      {
        name: "Casa de Campo",
        description: "Quarto principal com papel de parede elegante, cortinas em linho natural e almofadas em tons terrosos para um ambiente acolhedor.",
        images: [
          "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ],
        projectInfo: {
          location: "Sintra",
          year: 2023,
          area: "200m²",
          style: "Rústico Moderno"
        }
      }
    ],
    'homepage-projects': [
      {
        name: "Apartamento Moderno",
        description: "Sala de estar elegante com estores plissados, tapetes texturizados e têxteis em tons neutros que criam um ambiente sofisticado.",
        images: [
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ]
      }
    ],
    'quem-somos': [
      {
        name: "Historia da Empresa",
        description: "Imagem para a secção A Nossa História",
        images: [
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ]
      },
      {
        name: "Compromisso Qualidade",
        description: "Imagem para a secção Compromisso com a Qualidade",
        images: [
          "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ]
      }
    ],
    'hero-image': [
      {
        name: "Hero Background",
        description: "Imagem de fundo da página principal",
        images: [
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ]
      }
    ]
  }
}

module.exports = { getNotionGalleryData }
