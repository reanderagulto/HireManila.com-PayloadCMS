import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      label: 'Banner Type',
      defaultValue: 'default',
      required: true,
      options: [
        {
          label: 'Default (Full Width)',
          value: 'default',
        },
        {
          label: 'Banner with Media',
          value: 'withMedia',
        },
        {
          label: 'Banner with Form',
          value: 'withForm',
        },
      ],
    },
    {
      name: 'heroMedia',
      label: 'Hero Media',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (_, siblingData) => {
          return siblingData?.type === 'withMedia'
        },
      },
    },
    {
      name: 'form',
      label: 'Banner Form',
      type: 'relationship',
      relationTo: 'forms',
      admin: {
        condition: (_, siblingData) => {
          return siblingData?.type === 'withForm'
        },
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'richText',
      label: 'Description',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          HeadingFeature({
            enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
          }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
    },
    {
      name: 'ctaGroup',
      label: 'CTA Button',
      type: 'group',
      fields: [
        {
          name: 'label',
          type: 'text',
          admin: {
            width: '50%',
          },
        },
        {
          name: 'url',
          label: 'URL',
          type: 'text',
          admin: {
            width: '50%',
          },
        },
      ],
    },
  ],
  label: false,
}
