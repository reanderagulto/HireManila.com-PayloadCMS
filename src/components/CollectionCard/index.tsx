'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React, { Fragment } from 'react'

import type { Post } from '@/payload-types'
import { Media } from '@/components/Media'
import { RightArrow } from '@/components/Icons'

import './article-card.css'

export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title'>

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  relationTo?: 'posts'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, relationTo, showCategories, title: titleFromProps } = props

  const { slug, categories, meta, title } = doc || {}
  const { description, image: metaImage } = meta || {}

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title

  const sanitizedDescription = description
    ?.replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\s+/g, ' ') // Collapse multiple whitespace into one space
    .trim()

  const excerpt =
    sanitizedDescription && sanitizedDescription.length > 97
      ? `${sanitizedDescription.slice(0, 97)}...`
      : sanitizedDescription
  const href = `/${relationTo}/${slug}`

  return (
    <article className={cn('article-card', className)} ref={card.ref}>
      <div className="article-card__thumbnail">
        {!metaImage && <div className="no-image">No image</div>}
        {metaImage && typeof metaImage !== 'string' && (
          <Media resource={metaImage} size="12.5rem" />
        )}
      </div>
      <div className="article-card__content">
        <div className="article-card__content-wrapper">
          {showCategories && hasCategories && (
            <div className="article-card__tag-list">
              {categories?.map((category, index) => {
                if (typeof category === 'object') {
                  const { title: titleFromCategory } = category
                  const categoryTitle = titleFromCategory || 'Untitled category'
                  return (
                    <Fragment key={index}>
                      <span>{categoryTitle}</span>
                    </Fragment>
                  )
                }
                return null
              })}
            </div>
          )}
          {titleToUse && (
            <h6>
              <Link className="" href={href} ref={link.ref}>
                {titleToUse}
              </Link>
            </h6>
          )}
          {description && (
            <div className="article-card__description">{description && <p>{excerpt}</p>}</div>
          )}
        </div>
        <Link className="article-card__link" href={href} ref={link.ref}>
          Read this story <RightArrow />
        </Link>
      </div>
    </article>
  )
}
