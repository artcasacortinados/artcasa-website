const { getNotionGalleryData } = require('./src/utils/notion')
const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = `
    type GalleryDataItems {
      name: String!
      description: String!
      images: [String!]!
      localImages: [File] @link(from: "localImages___NODE")
      projectInfo: ProjectInfo
    }

    type ProjectInfo {
      location: String!
      year: Int!
      area: String!
      style: String!
    }

    type GalleryData implements Node {
      category: String!
      items: [GalleryDataItems!]!
    }
  `

  createTypes(typeDefs)
}

exports.sourceNodes = async ({ 
  actions, 
  createNodeId, 
  createContentDigest, 
  cache, 
  store 
}) => {
  const { createNode } = actions

  try {
    // Fetch gallery data from Notion
    const galleryData = await getNotionGalleryData()

    // Process each category and download images
    for (const [category, items] of Object.entries(galleryData)) {
      const processedItems = []

      for (const item of items) {
        const localImageNodes = []

        // Download each image from Notion and create local file nodes
        for (const imageUrl of item.images) {
          try {
            // Only process Notion URLs (temporary ones that need caching)
            if (imageUrl.includes('notion-static.com') || imageUrl.includes('s3.us-west-2.amazonaws.com')) {
              console.log(`📥 Downloading Notion image: ${imageUrl.substring(0, 80)}...`)
              
              const imageNode = await createRemoteFileNode({
                url: imageUrl,
                parentNodeId: createNodeId(`gallery-${category}-${item.name}`),
                createNode,
                createNodeId,
                cache,
                store,
              })

              if (imageNode) {
                localImageNodes.push(imageNode.id)
                console.log(`✅ Downloaded and cached image for ${item.name}`)
              }
            } else {
              // For external URLs, we can use them directly (they're permanent)
              console.log(`🔗 Using external URL: ${imageUrl.substring(0, 80)}...`)
            }
          } catch (imageError) {
            console.error(`❌ Failed to download image ${imageUrl}:`, imageError.message)
          }
        }

        // Add processed item with both original URLs and local image nodes
        processedItems.push({
          ...item,
          localImages___NODE: localImageNodes
        })
      }

      // Create node for this category
      const nodeData = {
        category,
        items: processedItems,
      }

      const node = {
        ...nodeData,
        id: createNodeId(`gallery-${category}`),
        parent: null,
        children: [],
        internal: {
          type: 'GalleryData',
          content: JSON.stringify(nodeData),
          contentDigest: createContentDigest(nodeData),
        },
      }

      createNode(node)
    }

    console.log('✅ Successfully created gallery nodes from Notion data')
  } catch (error) {
    console.error('❌ Error creating gallery nodes:', error)
    // Create fallback nodes if Notion fails
    const fallbackData = {
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

    Object.entries(fallbackData).forEach(([category, items]) => {
      const nodeData = {
        category,
        items,
      }

      const node = {
        ...nodeData,
        id: createNodeId(`gallery-${category}`),
        parent: null,
        children: [],
        internal: {
          type: 'GalleryData',
          content: JSON.stringify(nodeData),
          contentDigest: createContentDigest(nodeData),
        },
      }

      createNode(node)
    })
  }
}
