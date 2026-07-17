import type { Block } from 'payload'

export const CategoryChecklist: Block = {
  slug: 'categoryChecklist',
  interfaceName: 'CategoryChecklist',
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'We Can Help You Hire For These Skills',
      required: true,
    },
    {
      name: 'categories',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true },
        {
          name: 'items',
          type: 'array',
          fields: [{ name: 'label', type: 'text', required: true }],
        },
      ],
      labels: {
        singular: 'Category',
        plural: 'Categories',
      },
    },
  ],
  labels: {
    singular: 'Category Checklist Block',
    plural: 'Category Checklist Blocks',
  },
}
