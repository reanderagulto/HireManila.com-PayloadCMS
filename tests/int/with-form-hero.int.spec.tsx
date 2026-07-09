import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import React from 'react'

vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}))

vi.mock('next/image', () => ({
  default: ({ alt, src }: { alt: string; src: string }) => <img alt={alt} src={src} />,
}))

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
}))

import WithForm from '@/heros/WithForm'

describe('WithForm hero', () => {
  it('renders the selected form fields inside the hero form area', () => {
    render(
      <WithForm
        title="Need help?"
        richText={null}
        form={{
          title: 'Contact us',
          description: null,
          form: {
            id: 24,
            title: 'Contact Form',
            fields: [
              {
                blockType: 'text',
                blockName: 'full-name',
                name: 'full-name',
                label: 'Full Name',
                required: true,
                width: 100,
              },
            ],
          } as never,
        }}
        ctaGroup={undefined}
        type="withForm"
      />,
    )

    expect(screen.getByText('Full Name')).toBeInTheDocument()
  })
})
