import type { Field, GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

const navItemFields: Field[] = [
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

export const Footer: GlobalConfig = {
  slug: 'footer',
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
          RowLabel: '@/Footer/RowLabel#RowLabel',
        },
      },
    },
    {
      name: 'legal',
      type: 'group',
      label: 'Legal Pages',
      fields: [
        {
          name: 'termsOfService',
          type: 'relationship',
          label: 'Terms of Service Page',
          relationTo: 'pages',
        },
        {
          name: 'privacyPolicy',
          type: 'relationship',
          label: 'Privacy Policy Page',
          relationTo: 'pages',
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
