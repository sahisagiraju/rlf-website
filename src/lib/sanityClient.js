import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2025-01-01'
const useCdn = import.meta.env.VITE_SANITY_USE_CDN === 'true'

if (!projectId) {
  console.warn('VITE_SANITY_PROJECT_ID is not set. Sanity requests may fail.')
}

export const client = sanityClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

export default client