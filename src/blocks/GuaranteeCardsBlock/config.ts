import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const GuaranteeCardsBlock: Block = {
  slug: 'guaranteeBlock',
  interfaceName: 'GuaranteeBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Hire Confidently With Our 90-Day Guarantee Period',
      required: true,
    },
    {
      name: 'cards',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'content',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
            },
          }),
          label: 'Content',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
      labels: {
        plural: 'Cards',
        singular: 'Card',
      },
    },
  ],
  labels: {
    plural: 'Guarantee Cards Block',
    singular: 'Guarantee Card Block',
  },
}
