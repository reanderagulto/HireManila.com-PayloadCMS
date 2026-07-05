import React from 'react'

import type { Page } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'

import { Button } from '@/components/ui/button'

import './default.css'
import Link from 'next/link'

export const HeroDefault: React.FC<Page['hero']> = ({ title, richText, ctaGroup }) => {
  return (
    <div className="hero-default">
      <div className="container">
        <div className="hero-default__wrapper">
          {(title !== null || title !== '') && <h1>{title}</h1>}
          {(richText !== null || richText !== '') && (
            <div className="hero-default__description">
              <RichText data={richText} />
            </div>
          )}
          {ctaGroup !== undefined && ctaGroup.label !== '' && ctaGroup?.url !== '' && (
            <Button size="xl" variant="positive">
              <Link href={ctaGroup.url}>{ctaGroup.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
