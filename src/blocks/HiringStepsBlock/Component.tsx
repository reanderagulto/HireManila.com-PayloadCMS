import React from 'react'
import { HiringStepsBlock as HiringStepsBlockProps } from '@/payload-types'

import './hiring-steps.css'
import { RightArrowAlt } from '@/components/Icons'
import { RichText } from '@payloadcms/richtext-lexical/react'

export const HiringStepsBlock: React.FC<HiringStepsBlockProps> = async (props) => {
  const { id, title, steps } = props

  return (
    <div className="hiring-steps" id={`block-${id}`}>
      <div className="container">
        <div className="hiring-steps__wrapper">
          {title != null && (
            <div className="hiring-steps__header">
              <h4>{title}</h4>
            </div>
          )}
          {steps !== undefined && steps !== null && (
            <div className="hiring-steps__list">
              {steps.map((item: any, index: any) => (
                <React.Fragment key={index}>
                  <div className="hiring-steps__item">
                    <div className="hiring-steps__item--header">
                      <span>{`Step ${index + 1}`}</span>
                      <h6>{item?.title}</h6>
                    </div>
                    <div className="hiring-steps__item--content">
                      <RichText data={item?.content || []} />
                    </div>
                  </div>
                  {index !== steps.length - 1 && (
                    <div className="list-icon">
                      <RightArrowAlt />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
