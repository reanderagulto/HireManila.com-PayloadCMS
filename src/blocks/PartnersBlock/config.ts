import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const PartnersBlock: Block = {
  slug: 'partner',
  interfaceName: 'PartnersBlock',
  fields: [
    {
      name: 'partnersText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4', 'h5', 'h6'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: 'Content',
    },
    {
      name: 'populateBy',
      type: 'select',
      defaultValue: 'all',
      options: [
        {
          label: 'All Partners',
          value: 'all',
        },
        {
          label: 'Individual Selection',
          value: 'selection',
        },
      ],
    },
    {
      name: 'selectedPartner',
      type: 'relationship',
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'selection',
      },
      hasMany: true,
      label: 'Selection',
      relationTo: ['partners'],
    },
  ],
  labels: {
    plural: 'Partners',
    singular: 'Partner',
  },
}
