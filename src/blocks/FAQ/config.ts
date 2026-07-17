import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
  UnorderedListFeature,
  OrderedListFeature,
} from '@payloadcms/richtext-lexical'

export const FAQBlock: Block = {
  slug: 'faqBlock',
  interfaceName: 'faqBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Frequently Asked Questions',
      label: 'Title',
      required: true,
    },
    {
      name: 'questions',
      type: 'array',
      label: 'Questions',
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                FixedToolbarFeature(),
                InlineToolbarFeature(),
                OrderedListFeature(),
                UnorderedListFeature(),
              ]
            },
          }),
        },
      ],
    },
  ],
  labels: {
    plural: 'FAQS',
    singular: 'FAQ',
  },
}
