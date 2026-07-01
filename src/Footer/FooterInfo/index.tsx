'use client'
import React from 'react'
import Copyright from './Copyright'

import type { Footer as FooterType } from '@/payload-types'
import Legal from './Legal'

import './info.css'

interface FooterInfoProps {
  data: FooterType['legal']
}

const FooterInfo: React.FC<FooterInfoProps> = ({ data }) => {
  return (
    <div className="footer-info">
      <Copyright />
      <Legal termsOfService={data?.termsOfService} privacyPolicy={data?.privacyPolicy} />
    </div>
  )
}

export default FooterInfo
