import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const ReviewBlock: Block = {
  slug: 'review',
  interfaceName: 'ReviewBlock',
  fields: [
    {
      name: 'reviewHeaderSection',
      type: 'group',
      label: 'Intro Section',
      fields: [
        {
          name: 'reviewHeaderContent',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }),
                FixedToolbarFeature(),
                InlineToolbarFeature(),
              ]
            },
          }),
          label: 'Content',
        },
      ],
    },
    {
      name: 'populateBy',
      type: 'select',
      defaultValue: 'featuredReviews',
      options: [
        {
          label: 'Featured Reviews',
          value: 'featuredReviews',
        },
        {
          label: 'Individual Selection',
          value: 'selection',
        },
      ],
    },
    {
      name: 'selectedReview',
      type: 'relationship',
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'selection',
      },
      hasMany: true,
      label: 'Selection',
      relationTo: ['reviews'],
    },
    {
      name: 'reviewLimit',
      type: 'number',
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'featuredReviews',
      },
      label: 'Limit',
      defaultValue: 3
    },
  ],
  labels: {
    plural: 'Reviews',
    singular: 'Review',
  },
}
