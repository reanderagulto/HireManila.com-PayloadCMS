import type { Field, GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

const navItemFields: Field[] = [
  {
    type: 'row',
    fields: [
      {
        name: 'title',
        type: 'text',
        label: 'Title',
        required: true,
      },
    ],
  },
  link({
    appearances: false,
    disableLabel: true,
  }),
  {
    name: 'children',
    type: 'array',
    label: 'Nested items',
    minRows: 0,
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'title',
            type: 'text',
            label: 'Title',
            required: true,
            admin: {
              width: '100%',
            },
          },
          {
            name: 'desc',
            type: 'richText',
            label: 'Description',
            admin: {
              width: '100%',
            },
          },
          {
            name: 'icon',
            type: 'upload',
            relationTo: 'media', // This links to your media collection [1]
            label: 'Icon',
            admin: {
              width: '100%',
              description: 'Name of the icon to display for this nested item.',
            },
          },
        ],
      },
      link({
        appearances: false,
        disableLabel: true,
      }),
    ],
    admin: {
      initCollapsed: true,
    },
  },
]

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: navItemFields,
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Header/RowLabel#RowLabel',
        },
      },
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
