import React from 'react'
import { RecruitmentProcessBlock as RecruitmentProcessProps } from '@/payload-types'

import './recruitment-process.css'
import { Media } from '@/components/Media'
import { RichText } from '@payloadcms/richtext-lexical/react'

export const RecruitmentProcessBlock: React.FC<RecruitmentProcessProps> = async (props) => {
  const { id, content, items } = props

  return (
    <div className="recruitment" id={`block-${id}`}>
      <div className="container recruitment__wrapper">
        {content && (
          <div className="text-center recruitment__content">
            <RichText data={content} />
          </div>
        )}
        {items?.length > 0 && (
          <div className="recruitment__list">
            {items?.map((item) => (
              <div key={item.id} className="recruitment__list--item">
                <div className="recruitment__list--icon">
                  <Media resource={item?.image} size="56px" />
                </div>
                <div className="recruitment__list--content">
                  <h6>{item?.title}</h6>
                  <RichText data={item?.content} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
