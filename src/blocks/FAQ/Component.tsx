import React from 'react'
import { FaqBlock as FAQBlockProps } from '@/payload-types'

import './faq.css'
import { FAQBlockClient } from './Component.client'

export const FAQBlock: React.FC<FAQBlockProps> = async (props) => {
  const { title, questions } = props

  return (
    <div className="faq">
      <div className="container faq__wrapper">
        <h2>{title}</h2>

        {questions != undefined && questions?.length > 0 && (
          <div className="faq__list">
            {questions?.map((question) => (
              <FAQBlockClient
                key={question?.id}
                id={question?.id}
                question={question?.question}
                answer={question?.answer}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
