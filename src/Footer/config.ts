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
      name: 'socialLinks',
      type: 'array',
      label: 'Social Links',
      fields: [
        {
          name: 'platform',
          type: 'select',
          label: 'Platform',
          options: [
            { label: 'Facebook', value: 'facebook' },
            { label: 'Twitter', value: 'twitter' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'LinkedIn', value: 'linkedin' },
          ],
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL',
        },
      ],
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
