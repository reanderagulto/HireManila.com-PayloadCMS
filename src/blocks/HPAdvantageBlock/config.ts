import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const HPAdvantageBlock: Block = {
  slug: 'hpAdvantage',
  interfaceName: 'HPAdvantageBlock',
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
      defaultValue: 'The Hire Manila Edge',
    },
    {
      name: 'content',
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
      name: 'ctaGroup',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
        {
          name: 'content',
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
      ],
      labels: {
        plural: 'CTA Groups',
        singular: 'CTA Group',
      },
    },
  ],
  labels: {
    plural: 'HP Advantages',
    singular: 'HP Advantage',
  },
}
