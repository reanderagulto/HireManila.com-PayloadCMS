import type { CollectionConfig } from 'payload'

import {
  FixedToolbarFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { slugField } from 'payload'

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['image', 'name', 'positon'],
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Reviewer Name',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Reviewer Image',
    },
    {
      name: 'positon',
      type: 'text',
      required: true,
      label: 'Position',
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            FixedToolbarFeature(),
            InlineToolbarFeature(),
            HorizontalRuleFeature(),
          ]
        },
      }),
      label: 'Content',
      required: true,
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      label: 'Is Featured?',
      defaultValue: false,
    },
    slugField({
      position: undefined,
    }),
  ],
}
