import React from 'react'

import type { Page } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'

import { Button } from '@/components/ui/button'
import { Media } from '@/components/Media'
import Link from 'next/link'

import '../hero.css'
import './hero-media.css'

const WithMedia: React.FC<Page['hero']> = ({ title, richText, heroMedia, ctaGroup }) => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__text-container">
            {(title !== null || title !== '') && <h1>{title}</h1>}
            {(richText !== null || richText !== '') && (
              <div className="hero__description">
                <RichText data={richText} />
              </div>
            )}
            {ctaGroup !== undefined && ctaGroup.label !== '' && ctaGroup?.url !== '' && (
              <Button size="xl" variant="positive" className="hero__cta">
                <Link href={ctaGroup.url}>{ctaGroup.label}</Link>
              </Button>
            )}
          </div>
          {heroMedia && typeof heroMedia !== 'number' && (
            <div className="hero__media--container">
              <Media className="h-full w-full" resource={heroMedia} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default WithMedia
