import React from 'react'
import type { Review, ReviewBlock as ReviewBlockProps } from '@/payload-types'

import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { ReviewBlockClient } from './Component.client'

export const ReviewBlock: React.FC<ReviewBlockProps> = async (props) => {
  const { id, reviewHeaderSection, reviewLimit: limitFromProps, populateBy, selectedReview } = props

  const limit = limitFromProps || 3

  let reviews: Review[] = []

  if (populateBy === 'featuredReviews') {
    const payload = await getPayload({ config: configPromise })

    const fetchedReviews = await payload.find({
      collection: 'reviews',
      depth: 1,
      limit,
      where: {
        isFeatured: {
          equals: true,
        },
      },
      sort: 'createdAt',
    })
    reviews = fetchedReviews.docs
  }

  if (populateBy === 'selection') {
    if (selectedReview?.length) {
      reviews = selectedReview.map((review) => {
        if (typeof review?.value === 'object') return review.value
      }) as Review[]
    }
  }

  return <ReviewBlockClient id={id} reviewHeaderSection={reviewHeaderSection} reviews={reviews} />
}
