'use client'

import React from 'react'
import type { Footer as FooterType } from '@/payload-types'

import { FooterNav } from './Nav'
import { Logo } from '@/components/Logo/Logo'
import Link from 'next/link'
import { FooterInfo } from './FooterInfo'

import './footer.css'

interface FooterClientProps {
  data: FooterType
}

export const FooterClient: React.FC<FooterClientProps> = ({ data }) => {
  return (
    <footer className="footer">
      <div className="container footer__wrapper">
        <div className="footer__container">
          <div className="footer-info--wrapper">
            <Link href="/">
              <Logo inverted={true} />
            </Link>
            <FooterInfo
              legal={data.legal}
              className="lg:block hidden"
              socialLinks={data.socialLinks}
            />
          </div>
          <div className="footer-nav--wrapper">
            <FooterNav data={data} />
          </div>
          <FooterInfo
            legal={data.legal}
            className="lg:hidden block"
            socialLinks={data.socialLinks}
          />
        </div>
      </div>
    </footer>
  )
}
