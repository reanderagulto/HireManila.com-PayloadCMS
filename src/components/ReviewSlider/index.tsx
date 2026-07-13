import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'

import type { Review } from '@/payload-types'
import { Media } from '@/components/Media'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { ReviewGraphic } from '@/components/Icons'

import '@splidejs/react-splide/css'
import './review-slider.css'

type Props = {
  reviews: Review[]
  splideRef: React.RefObject<Splide | null>
  onArrowsUpdated: (state: { prevDisabled: boolean; nextDisabled: boolean }) => void
}

export const ReviewSlider: React.FC<Props> = ({ reviews, splideRef, onArrowsUpdated }) => {
  return (
    <div className="review-slider">
      <Splide
        ref={splideRef}
        options={{
          type: 'slide',
          padding: '25.12rem',
          perPage: 2,
          pagination: false,
          arrows: true,
          breakpoints: {
            1199: {
              padding: '18.12rem',
            },
            991: {
              perPage: 1,
              padding: '16rem',
            },
            480: {
              perPage: 1,
              padding: '2.5rem',
            },
          },
        }}
        onMounted={(splide: any) => {
          const update = () => {
            const prev = splide.root.querySelector('.splide__arrow--prev')
            const next = splide.root.querySelector('.splide__arrow--next')

            onArrowsUpdated({
              prevDisabled: prev?.hasAttribute('disabled') ?? true,
              nextDisabled: next?.hasAttribute('disabled') ?? false,
            })
          }

          splide.on('arrows:updated', update)

          update()
        }}
      >
        {reviews.map((review) => (
          <SplideSlide key={review.id}>
            <div className="review-slider__item">
              <div className="review-slider__item-wrapper">
                <ReviewGraphic />
                <div className="review-slider__item-content">
                  <RichText data={review.content} />
                </div>
                <div className="review-slider__item-name">
                  <Media
                    resource={review.image}
                    size="40px"
                    className="review-slider__item-avatar"
                  />
                  <div className="reviewer-info">
                    <h6>{review.name}</h6>
                    <p>{review.positon}</p>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}
