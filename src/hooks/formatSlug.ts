import type { FieldHook } from 'payload'
import slugify from 'slug' // node-slug is typically imported as 'slug'

export const formatSlug: FieldHook = ({ value, data, operation }) => {
  // If the slug field already has a value and we are not creating a new document,
  // you might want to preserve the existing slug unless it's explicitly cleared.
  if (operation === 'create' || !value) {
    const fallbackData = data?.title || data?.name

    if (fallbackData && typeof fallbackData === 'string') {
      return slugify(fallbackData, { lower: true })
    }
  }

  return value
}
