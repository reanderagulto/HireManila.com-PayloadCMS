'use client'
import React from 'react'
import Copyright from './Copyright'
import Legal from './Legal'
import SocialLinks from './SocialLinks'

import type { Footer as FooterType } from '@/payload-types'

import './info.css'

interface FooterInfoProps {
  legal: FooterType['legal']
  className?: string
  socialLinks?: FooterType['socialLinks']
}

export const FooterInfo: React.FC<FooterInfoProps> = ({ legal, className, socialLinks }) => {
  return (
    <div className={`footer-info ${className || ''}`}>
      <Copyright />
      <Legal termsOfService={legal?.termsOfService} privacyPolicy={legal?.privacyPolicy} />
      {socialLinks && socialLinks.length > 0 && <SocialLinks links={socialLinks} />}
    </div>
  )
}
