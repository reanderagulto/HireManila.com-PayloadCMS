import React from 'react'
import { CategoryChecklist as CategoryChecklistProps } from '@/payload-types'

import './category-checklist.css'
import { CheckIcon } from '@/components/Icons'

export const CategoryChecklist: React.FC<CategoryChecklistProps> = async (props) => {
  const { id, title, categories } = props

  return (
    <div className="category-checklist" id={`block-${id}`}>
      <div className="container">
        <div className="category-checklist__wrapper">
          {title !== null && <h4>{title}</h4>}
          {categories !== null && categories !== undefined && (
            <div className="category-checklist__list">
              {categories.length > 0 &&
                categories.map((category: any, index: any) => (
                  <div key={index} className="category-checklist__item">
                    <h6>{category?.title}</h6>
                    {category?.items !== null && category?.items !== undefined && (
                      <ul className="category-checklist__skills">
                        {category?.items.length > 0 &&
                          category?.items.map((item: any, pointer: any) => (
                            <li key={pointer}>
                              <CheckIcon />
                              {item?.label}
                            </li>
                          ))}
                      </ul>
                    )}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
