import React from 'react'
import type { Partner, PartnersBlock as PartnersBlockProps } from '@/payload-types'

import { getPayload } from 'payload'
import configPromise from '@payload-config'

import { RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'

import './partners.css'

export const PartnersBlock: React.FC<PartnersBlockProps> = async (props) => {
  const { id, partnersText, populateBy, selectedPartner } = props

  let partners: Partner[] = []

  if (populateBy === 'all') {
    const payload = await getPayload({ config: configPromise })

    const fetchedPartners = await payload.find({
      collection: 'partners',
      depth: 1,
      sort: 'createdAt',
    })
    partners = fetchedPartners.docs
  }

  if (populateBy === 'selection') {
    if (selectedPartner?.length) {
      partners = selectedPartner.map((review) => {
        if (typeof review?.value === 'object') return review.value
      }) as Partner[]
    }
  }

  return (
    <div className="partners" id={`block-${id}`}>
      <div className="container">
        <div className="partners__wrapper">
          {partnersText && (
            <div className="partners__header text-center">
              <RichText data={partnersText} />
            </div>
          )}
          {partners.length > 0 && (
            <div className="partners__list">
              {partners.map((partner) => (
                <Image
                  key={partner.id}
                  className="partners__logo"
                  src={partner?.image?.url}
                  width={partner?.imageWidth || undefined}
                  height={partner?.imageHeight || undefined}
                  alt={partner?.name}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
