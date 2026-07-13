'use client'
import React from 'react'
import type { Review, ReviewBlock as ReviewBlockProps } from '@/payload-types'

import { Splide } from '@splidejs/react-splide'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { ReviewSlider } from '@/components/ReviewSlider'
import { ReviewNav } from '@/components/ReviewSlider/ReviewNav'

type Props = {
  id: any
  reviewHeaderSection: any
  reviews: Review[]
}

import './reviews.css'

export const ReviewBlockClient: React.FC<Props> = ({ id, reviews, reviewHeaderSection }) => {
  const splideRef = React.useRef<Splide | null>(null)
  const [navState, setNavState] = React.useState({
    prevDisabled: true,
    nextDisabled: false,
  })

  return (
    <div className="review" id={`block-${id}`}>
      <div className="review__container">
        <div className="container">
          <div className="review__header">
            {reviewHeaderSection && (
              <div className="review__header--section">
                <RichText data={reviewHeaderSection.reviewHeaderContent} />
              </div>
            )}
            <ReviewNav
              splideRef={splideRef}
              nextDisabled={navState.nextDisabled}
              prevDisabled={navState.prevDisabled}
            />
          </div>
        </div>
        <div className="container review__wrapper">
          <ReviewSlider reviews={reviews} splideRef={splideRef} onArrowsUpdated={setNavState} />
        </div>
      </div>
    </div>
  )
}
