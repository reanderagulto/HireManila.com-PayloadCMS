import type { ArchiveBlock as ArchiveBlockProps, Post } from '@/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

import { RichText } from '@payloadcms/richtext-lexical/react'
import { CollectionArchive } from '@/components/CollectionArchive'
import { Button } from '@/components/ui/button'

import './archive.css'

export const ArchiveBlock: React.FC<
  ArchiveBlockProps & {
    id?: string
  }
> = async (props) => {
  const { id, categories, introSection, limit: limitFromProps, populateBy, selectedDocs } = props

  const limit = limitFromProps || 3

  let posts: Post[] = []

  if (populateBy === 'collection') {
    const payload = await getPayload({ config: configPromise })

    const flattenedCategories = categories?.map((category) => {
      if (typeof category === 'object') return category.id
      else return category
    })

    const fetchedPosts = await payload.find({
      collection: 'posts',
      depth: 1,
      limit,
      ...(flattenedCategories && flattenedCategories.length > 0
        ? {
            where: {
              categories: {
                in: flattenedCategories,
              },
            },
          }
        : {}),
    })

    posts = fetchedPosts.docs
  } else {
    if (selectedDocs?.length) {
      posts = selectedDocs.map((post) => {
        if (typeof post.value === 'object') return post.value
      }) as Post[]
    }
  }

  return (
    <div className="archive">
      <div id={`block-${id}`}>
        {introSection && (
          <div className="container">
            <div className="archive__header">
              <div className="archive__header--content">
                <RichText data={introSection.introContent} />
              </div>
              {introSection.showArchiveLink && (
                <div className="archive__header--button">
                  <Button type="button" variant="outline" size="md">
                    Visit our Blog
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
        <CollectionArchive posts={posts} />
      </div>
    </div>
  )
}
