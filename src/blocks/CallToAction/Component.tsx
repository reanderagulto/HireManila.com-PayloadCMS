import React from 'react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'

import { RichText } from '@payloadcms/richtext-lexical/react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

import './cta.css'

export const CallToActionBlock: React.FC<CTABlockProps> = ({ title, richText, buttonGroup }) => {
  return (
    <div className="cta">
      <div className="container">
        <div className="cta__wrapper">
          <div className="relative z-2">
            {(title !== null || title !== '') && <h4 className="cta__header">{title}</h4>}
            {richText && (
              <div className="cta__description">
                <RichText data={richText} />
              </div>
            )}
            {buttonGroup?.label && buttonGroup?.url && (
              <Button size="lg" variant="white" className="cta__button-group">
                {buttonGroup.label}
              </Button>
            )}
          </div>
          <div className="block absolute top-[8.5rem] right-[-2.19rem] w-[4.375rem] sm:top-12 sm:right-5 xl:top-6 xl:right-8 xl:w-[6.3125rem] z-1">
            <Image src="/images/cta-graph1.png" alt="infograph1" width={101} height={101} />
          </div>
          <div className="z-1 block relative mt-[1.94rem] mx-auto w-[14.68rem] right-0 sm:absolute sm:-bottom-5 sm:right-[1.44rem] sm:w-[15.75rem] lg:ml-2 lg:right-[7rem] lg:bottom-0">
            <Image src="/images/cta-graph2.png" alt="infograph2" width={330} height={217} />
          </div>
          <div className="z-1 hidden absolute sm:block sm:bottom-0 sm:left-0">
            <Image src="/images/cta-graph3.png" alt="infograph3" width={77} height={75} />
          </div>
          <div className="z-1 block absolute left-0 bottom-[4.95rem] sm:hidden">
            <Image src="/images/cta-graph4.png" alt="infograph4 " width={39} height={76} />
          </div>
        </div>
      </div>
    </div>
  )
}
