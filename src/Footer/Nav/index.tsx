'use client'
import React from 'react'
import Link from 'next/link'
import type { Footer as FooterType } from '@/payload-types'
import './nav.css'

type NavItem = NonNullable<FooterType['navItems']>[number]
type NavChild = NonNullable<NonNullable<NavItem['children']>[number]>

const getNavLabel = (item: NonNullable<FooterType['navItems']>[number]) =>
  item?.title || item?.title || 'Nav item'

const getNavChildren = (item: NonNullable<FooterType['navItems']>[number]) => item.children || []

const renderNavItem = (item: NavItem, index: number) => (
  <div key={index} className="footer-nav__item">
    <Link href={item.link} className="footer-nav__item--label">
      {getNavLabel(item)}
    </Link>
    {getNavChildren(item).length > 0 && (
      <div className="footer-nav__submenu">{getNavChildren(item).map(renderNavItemChild)}</div>
    )}
  </div>
)

const renderNavItemChild = (item: NavChild, index: number) => (
  <Link key={index} className="footer-nav__submenu--item" href={item.link}>
    {item.title}
  </Link>
)

export const FooterNav: React.FC<{ data: FooterType }> = ({ data }) => {
  return (
    <nav className="footer-nav">
      {data.navItems?.map((item, index) => renderNavItem(item, index))}
    </nav>
  )
}
