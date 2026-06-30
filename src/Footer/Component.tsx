import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer as FooterType } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

const getNavLabel = (item: NonNullable<FooterType['navItems']>[number]) =>
  item?.link?.label || item?.title || 'Nav item'

const renderNavItem = (item: NonNullable<FooterType['navItems']>[number], index: number) => (
  <div key={index} className="flex flex-col gap-2">
    {item?.link ? (
      <CMSLink {...item.link} appearance="link" label={getNavLabel(item)} className="text-white" />
    ) : (
      <span className="text-white">{getNavLabel(item)}</span>
    )}
    {item?.children?.length ? (
      <div className="flex flex-col gap-1 ml-4">
        {item.children.map((child, childIndex) => (
          <React.Fragment key={childIndex}>
            {child?.link ? (
              <CMSLink
                {...child.link}
                appearance="link"
                label={child.link.label || child.title || 'Sub item'}
                className="text-sm text-white"
              />
            ) : (
              <span className="text-sm text-white">{child.title || 'Sub item'}</span>
            )}
          </React.Fragment>
        ))}
      </div>
    ) : null}
  </div>
)

export async function Footer() {
  const footerData = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

  return (
    <footer className="mt-auto border-t border-border bg-secondary-blue-500 dark:bg-card text-white">
      <div className="container py-8 gap-8 flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col gap-6">
          <Link className="flex items-center" href="/">
            <Logo inverted={true} />
          </Link>
          {footerData?.aboutUs ? (
            <div className="max-w-md">
              <h2 className="text-lg font-semibold text-white">
                {footerData.aboutUs.title || 'About Us'}
              </h2>
              {footerData.aboutUs.content ? (
                <p className="mt-2 text-sm text-slate-300">{footerData.aboutUs.content}</p>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex flex-col gap-2 text-sm">
              {footerData?.legal?.termsOfService ? (
                <CMSLink
                  {...footerData.legal.termsOfService}
                  appearance="link"
                  label="Terms of Service"
                  className="text-white"
                />
              ) : null}
              {footerData?.legal?.privacyPolicy ? (
                <CMSLink
                  {...footerData.legal.privacyPolicy}
                  appearance="link"
                  label="Privacy Policy"
                  className="text-white"
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
