import type { CollectionConfig } from 'payload'
import { formatSlug } from '@/hooks/formatSlug'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { slugField } from 'payload'

export const Partners: CollectionConfig = {
  slug: 'partners',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['image', 'name', 'position'],
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Company Name',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Company Logo',
    },
    {
      name: 'imageWidth',
      type: 'number',
      label: 'Custom Image Width',
      defaultValue: 32,
    },
    {
      name: 'imageHeight',
      type: 'number',
      label: 'Custom Image Height',
      defaultValue: 32,
    },
    slugField({
      position: undefined,
      useAsSlug: 'name',
    }),
  ],
}
