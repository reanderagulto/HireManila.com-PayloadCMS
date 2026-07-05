import React from 'react'

import type { Page } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'

import { Button } from '@/components/ui/button'
import { Media } from '@/components/Media'
import Link from 'next/link'

import './hero-media.css'

export const WithMedia: React.FC<Page['hero']> = ({ title, richText, heroMedia, ctaGroup }) => {
  return (
    <div className="hero-media">
      <div className="container">
        <div className="hero-media__wrapper">
          <div className="hero-media__text-container">
            {(title !== null || title !== '') && <h1>{title}</h1>}
            {(richText !== null || richText !== '') && (
              <div className="hero-media__description">
                <RichText data={richText} />
              </div>
            )}
            {ctaGroup !== undefined && ctaGroup.label !== '' && ctaGroup?.url !== '' && (
              <Button size="xl" variant="positive">
                <Link href={ctaGroup.url}>{ctaGroup.label}</Link>
              </Button>
            )}
          </div>
          <div className="hero-media__media-container">
            {heroMedia && typeof heroMedia !== 'number' && (
              <Media className="h-full w-full" resource={heroMedia} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
