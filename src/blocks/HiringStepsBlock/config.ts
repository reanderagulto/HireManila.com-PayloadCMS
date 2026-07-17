import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const HiringStepsBlock: Block = {
  slug: 'hiringStepsBlock',
  interfaceName: 'HiringStepsBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      defaultValue: 'Hiring Success in Four Steps',
      required: true,
    },
    {
      name: 'steps',
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
      ],
      labels: {
        plural: 'Steps',
        singular: 'Step',
      },
    },
  ],
  labels: {
    plural: 'Hiring Steps',
    singular: 'Hiring Step',
  },
}
