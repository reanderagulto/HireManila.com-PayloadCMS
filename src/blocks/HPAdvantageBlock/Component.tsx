import React from 'react'
import { HPAdvantageBlock as HPAdvantageBlockProps } from '@/payload-types'

import './advantage.css'
import { Media } from '@/components/Media'
import { RichText } from '@payloadcms/richtext-lexical/react'

export const HPAdvantageBlock: React.FC<HPAdvantageBlockProps> = async (props) => {
  const { id, image, title, subtitle, content, ctaGroup } = props

  return (
    <div className="advantage" id={`block-${id}`}>
      <div className="container advantage__wrapper">
        <div className="advantage__article">
          <div className="advantage__article--image">
            <Media resource={image} size="100%" alt={title || undefined} />
          </div>
          <div className="advantage__article--content">
            <span>{subtitle}</span>
            <h2>{title}</h2>
            <RichText data={content} />
          </div>
        </div>
        {ctaGroup.length > 0 && (
          <div className="advantage__cta">
            {ctaGroup.map((cta) => (
              <div key={cta?.id} className="advantage__cta-item">
                <div className="advantage__cta-item--content">
                  <div className="advantage__cta-item--content-wrapper">
                    <h6>{cta?.title}</h6>
                    <RichText data={cta?.content} />
                  </div>
                  <Media
                    className="article__cta-item--image"
                    resource={cta?.image}
                    size="100%"
                    alt={cta?.title || undefined}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
