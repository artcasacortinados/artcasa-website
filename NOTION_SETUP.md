# Notion Database Setup for ArtCasa Website

This document explains how to set up your Notion database to manage all gallery content for the ArtCasa website.

## Database Structure

Create a Notion database with the following properties:

### Required Properties:

1. **Name** (Title)
   - Type: Title
   - Description: Name of the gallery item (e.g., "Estores de Rolo", "Apartamento Moderno")

2. **Page Type** (Select)
   - Type: Select
   - Options:
     - `estores-exterior`
     - `estores-interior`
     - `calhas`
     - `cortinados`
     - `texteis-lar`
     - `estofos`
     - `papel-parede`
     - `tapetes`
     - `projects`

3. **Description** (Rich Text)
   - Type: Rich Text
   - Description: Description of the item or project

4. **Images** (Files)
   - Type: Files & Media
   - Description: Gallery images for the item

### Optional Properties (for projects only):

5. **Location** (Rich Text)
   - Type: Rich Text
   - Description: Project location (e.g., "Lisboa", "Porto")

6. **Year** (Number)
   - Type: Number
   - Description: Year the project was completed

7. **Area** (Rich Text)
   - Type: Rich Text
   - Description: Project area (e.g., "120m²")

8. **Style** (Rich Text)
   - Type: Rich Text
   - Description: Design style (e.g., "Moderno", "Clássico")

9. **Order** (Number)
   - Type: Number
   - Description: Display order (optional, for sorting)

## Setup Instructions

### 1. Create Notion Integration

1. Go to https://www.notion.so/my-integrations
2. Click "New integration"
3. Give it a name (e.g., "ArtCasa Website")
4. Select your workspace
5. Copy the "Internal Integration Token" - this is your `NOTION_API_KEY`

### 2. Create Database

1. Create a new page in Notion
2. Add a database to the page
3. Set up the properties as described above
4. Share the database with your integration:
   - Click "Share" on the database
   - Search for your integration name
   - Give it access

### 3. Get Database ID

The database ID is the part of the URL after your workspace name and before the "?" character.

Example: If your database URL is:
```
https://www.notion.so/yourworkspace/abc123def456?v=...
```

Then your database ID is: `abc123def456`

### 4. Configure Environment Variables

1. Copy `.env.example` to `.env.development` and `.env.production`
2. Add your credentials:

```env
NOTION_API_KEY=secret_xxxxxxxxxxxxx
NOTION_DATABASE_ID=abc123def456
```

## Adding Content

### For Product Pages (Estores, Cortinados, Têxteis, etc.)

1. Create a new page in your database
2. Set the **Name** (e.g., "Estores de Rolo", "Calhas Modernas", "Cortinados Premium")
3. Select the appropriate **Page Type**:
   - `estores-exterior` - Exterior blinds/shutters
   - `estores-interior` - Interior blinds/shutters  
   - `calhas` - Curtain rails and hardware systems
   - `cortinados` - Curtains and drapes
   - `texteis-lar` - Home textiles
   - `estofos` - Upholstery
   - `papel-parede` - Wallpaper
   - `tapetes` - Rugs and carpets
4. Add a **Description**
5. Upload **Images** to the Files property
6. Optionally set an **Order** number for sorting

### For Projects

1. Create a new page in your database
2. Set the **Name** (e.g., "Apartamento Moderno Lisboa")
3. Set **Page Type** to `projects`
4. Add a **Description**
5. Upload **Images**
6. Fill in project details:
   - **Location**: "Lisboa"
   - **Year**: 2023
   - **Area**: "120m²"
   - **Style**: "Moderno"

## Image Guidelines

⚠️ **Important**: Notion's uploaded images have temporary URLs that expire after ~1 hour. However, this website has been configured to automatically download and cache these images during the build process, so you can safely use Notion's file upload feature.

### How Image Caching Works:

1. **Upload to Notion**: Upload images directly to Notion's "Images" property
2. **Build Process**: During site build, Gatsby automatically:
   - Downloads all Notion images to local storage
   - Optimizes them for web performance  
   - Creates permanent cached versions
   - Generates responsive image variants

### Image Options:

#### Option A: Upload to Notion (Recommended for Ease)
- Upload images directly to Notion's Files property
- Images are automatically downloaded and cached during build
- No need to manage external hosting
- Images are optimized automatically

#### Option B: External Image Hosting (Best for Performance)
- Upload images to Cloudinary, AWS S3, or your own server
- Paste permanent URLs into Notion's Images field
- Faster builds (no download needed)
- More control over image optimization

### Technical Details:
- **Notion URLs**: Temporary, but automatically cached during build
- **External URLs**: Used directly without caching
- **Optimization**: All images are processed through Gatsby's image pipeline
- **Formats**: Automatically converted to WebP/AVIF for better performance
- **Responsive**: Multiple sizes generated for different devices

### Recommended Image Specifications:
- **Resolution**: 1200px width minimum for galleries
- **Format**: JPG, PNG, or WebP
- **Quality**: High quality originals (optimization happens automatically)
- **Aspect Ratio**: Consistent ratios within each gallery for best layout

## Data Flow

1. **Build Time**: Gatsby fetches data from Notion API
2. **Processing**: Images and content are processed and optimized
3. **Generation**: Static pages are generated with the data
4. **Deployment**: Site is deployed with the latest content

## Fallback Behavior

If Notion API is unavailable or not configured, the site will fall back to hardcoded placeholder data to ensure the site continues to function.

## Troubleshooting

### Common Issues:

1. **"NOTION_API_KEY not found"**
   - Check your .env file exists and has the correct key
   - Ensure the key starts with `secret_`

2. **"Database not found"**
   - Verify the database ID is correct
   - Ensure the integration has access to the database

3. **"No data returned"**
   - Check that you have entries in your database
   - Verify the Page Type values match exactly (case-sensitive)

4. **Images not loading**
   - Ensure images are uploaded to Notion (not just linked)
   - Check that images are accessible
   - Try re-uploading images if they're not displaying

### Testing

To test the integration:

1. Run `gatsby develop` locally
2. Check the console for any Notion-related errors
3. Verify that your content appears on the site
4. Test with and without the Notion credentials to ensure fallback works
