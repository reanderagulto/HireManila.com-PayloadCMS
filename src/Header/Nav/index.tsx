'use client'
import React from 'react'
import type { Header as HeaderType } from '@/payload-types'
import './nav.css'

import { RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'
import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { CaretDown } from '@/components/Icons'

type NavItem = NonNullable<HeaderType['navItems']>[number]
type NavChild = NonNullable<NonNullable<NavItem['children']>[number]>

const getNavLabel = (item: NonNullable<HeaderType['navItems']>[number]) =>
  item?.title || item?.title || 'Nav item'

const getNavChildren = (item: NonNullable<HeaderType['navItems']>[number]) => item.children || []

const renderNavItem = (
  item: NavItem,
  index: number,
  openIndex: number | null,
  onToggle: (index: number) => void,
) => (
  <div
    key={index}
    className={`nav__item ${openIndex === index ? 'open' : ''}`}
    onClick={(e) => {
      e.stopPropagation()
      console.log(e)
      onToggle(index)
    }}
  >
    <div className={`nav__item--wrapper ${getNavChildren(item).length > 0 ? 'with-submenu' : ''}`}>
      <span>{getNavLabel(item)}</span>
      {getNavChildren(item).length > 0 && <CaretDown />}
    </div>

    {getNavChildren(item).length > 0 && (
      <div className="nav__submenu-wrapper">
        <div className="nav__submenu">{getNavChildren(item).map(renderNavItemChild)}</div>
      </div>
    )}
  </div>
)

const renderNavItemChild = (item: NavChild, index: number) => (
  <Link key={index} className="nav__submenu--item" href={item.link}>
    <div className="nav__submenu--icon">
      <Image src={item?.icon?.url} alt={item.title} width={20} height={20} />
    </div>

    <div className="nav__submenu--title">
      <h3>{item.title}</h3>
      <RichText data={item.desc} />
    </div>
  </Link>
)

const getNavLabel = (item: NonNullable<HeaderType['navItems']>[number]) =>
  item?.link?.label || item?.title || 'Nav item'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  console.log(navItems)

  const [openIndex, setOpenIndex] = React.useState<number | null>(null)
  const navRef = React.useRef<HTMLElement>(null)

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenIndex(null)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <nav ref={navRef} className="flex items-between align-center">
      {navItems.map((item, i) => renderNavItem(item, i, openIndex, handleToggle))}
    </nav>
  )
}
