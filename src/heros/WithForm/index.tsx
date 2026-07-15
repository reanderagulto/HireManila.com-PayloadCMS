'use client'

import React from 'react'
import type { Page } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

import { FormBlock } from '@/blocks/Form/Component'
import '../hero.css'
import './hero-form.css'
import { ArrowRightOutlined } from '@/components/Icons'

const WithForm: React.FC<Page['hero']> = ({ title, richText, form, ctaGroup }) => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__text-container">
            {(title !== null || title !== '') && <h1>{title}</h1>}
            {richText && (
              <div className="hero__description">
                <RichText data={richText} />
              </div>
            )}
            {ctaGroup?.label && ctaGroup?.url && (
              <Button size="xl" variant="positive" className="hero__cta">
                <Link href={ctaGroup.url as string}>{ctaGroup.label}</Link>
                <ArrowRightOutlined />
              </Button>
            )}
          </div>
          <div className="hero__form">
            <div className="hero__form--container">
              <div className="hero__form--header">
                <div className="hidden absolute bottom-[-20px] -left-4.5 sm:block">
                  <Image src="/images/cta-graph1.png" alt="infograph1" width={47} height={47} />
                </div>
                <div className="hidden absolute top-0 right-0 ml-2 sm:block">
                  <Image src="/images/cta-graph5.png" alt="infograph5" width={139} height={152} />
                </div>
                <div className="hidden absolute left-0 top-[0.75rem] sm:block">
                  <Image src="/images/cta-graph6.png" alt="infograph6 " width={28} height={26} />
                </div>
                <div className="hero__form--header-content text-white">
                  <h5 className="text-white">{form?.title}</h5>
                  {form?.description && <RichText data={form.description} />}
                </div>
              </div>
              <div className="hero__form--site-form">
                {form && typeof form !== 'string' && (
                  <FormBlock form={form?.form} enableIntro={false} />
                )}
                {form?.showTerm && (
                  <div className="hero__term">
                    <RichText data={form?.siteTermText} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WithForm
