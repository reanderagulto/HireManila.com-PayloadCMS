import React from 'react'
import { RecruitmentAdvantageBlock as RecruitmentAdvantageProps } from '@/payload-types'

import './recruitment-advantage.css'
import { Media } from '@/components/Media'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const RecruitmentAdvantageBlock: React.FC<RecruitmentAdvantageProps> = async (props) => {
  const { id, title, image, content, ctaGroup } = props

  return (
    <div className="recruitment-advantage" id={`block-${id}`}>
      <div className="container recruitment-advantage__wrapper">
        <div className="recruitment-advantage__header">
          <h2>{title}</h2>
        </div>
        <div className="recruitment-advantage__content">
          {image && (
            <div className="recruitment-advantage__image">
              <Media resource={image} alt={`${title} Image`} size="100%" />
            </div>
          )}
          {content && (
            <div className="recruitment-advantage__text">
              <RichText data={content} />
              {ctaGroup !== undefined && ctaGroup.label !== null && (
                <Button size="md" variant="positive" className="recruitment-advantage__cta">
                  <Link href={ctaGroup?.url}>{ctaGroup?.label}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
