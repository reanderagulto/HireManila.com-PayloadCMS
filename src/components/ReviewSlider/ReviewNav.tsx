'use client'
import React from 'react'

import { Splide } from '@splidejs/react-splide'
import { Button } from '@/components/ui/button'
import { SlideLeftIcon, SlideRightIcon } from '@/components/Icons'

type Props = {
  splideRef: React.RefObject<Splide | null>
  nextDisabled: boolean
  prevDisabled: boolean
}

import './review-slider.css'

export const ReviewNav: React.FC<Props> = ({ splideRef, nextDisabled, prevDisabled }) => {
  const navigation = (action: '<' | '>') => {
    splideRef.current?.splide?.go(action)
  }

  return (
    <div className="review-slider__nav">
      <Button
        disabled={prevDisabled}
        className={`slide-nav prev ${!prevDisabled ? 'active' : ''}`}
        type="button"
        variant="outline"
        size="sm"
        onClick={() => navigation('<')}
      >
        <SlideLeftIcon />
      </Button>
      <Button
        className={`slide-nav next ${!nextDisabled ? 'active' : ''}`}
        type="button"
        variant="outline"
        size="sm"
        onClick={() => navigation('>')}
      >
        <SlideRightIcon />
      </Button>
    </div>
  )
}
