import React from 'react'
import { GuaranteeBlock as GuaranteeBlockProps } from '@/payload-types'

import './guarantee-block.css'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { Media } from '@/components/Media'

export const GuaranteeBlock: React.FC<GuaranteeBlockProps> = async (props) => {
  const { id, title, cards } = props

  return (
    <div className="guarantee-block" id={`block-${id}`}>
      <div className="container">
        <div className="guarantee-block__wrapper">
          {title !== null && (
            <div className="guarantee-block__header">
              <h4>{title}</h4>
            </div>
          )}
          {cards !== undefined && cards !== null && (
            <div className="guarantee-block__list">
              {cards.length &&
                cards.map((card: any, index: any) => (
                  <div key={index} className="guarantee-block__card">
                    <div className="guarantee-block__card--content">
                      <h5>{card?.title}</h5>
                      <RichText data={card?.content || []} />
                    </div>
                    <div className="guarantee-block__card--image">
                      <Media size="100%" resource={card?.image} alt={`${card?.title} Image`} />
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
