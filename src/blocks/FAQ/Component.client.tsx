'use client'

import React from 'react'

type Props = {
  id: any
  question: any
  answer: any
}

import './faq.css'
import { CaretDownLarge } from '@/components/Icons'
import { RichText } from '@payloadcms/richtext-lexical/react'

export const FAQBlockClient: React.FC<Props> = ({ id, question, answer }) => {
  const [isActive, setIsActive] = React.useState(false)

  const handleToggle = () => {
    setIsActive((prev) => !prev)
  }

  return (
    <div key={id} className="faq__list--item">
      <div
        className={`faq-title ${isActive ? 'active' : ''}`}
        onClick={handleToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') handleToggle()
        }}
      >
        <h6>{question}</h6>
        <CaretDownLarge />
      </div>
      <div className={`faq-content ${isActive ? 'open' : ''}`}>
        <RichText data={answer} />
      </div>
    </div>
  )
}
