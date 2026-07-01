'use client'

import { Page } from '@/payload-types'
import Link from 'next/link'

type LegalLink = number | Page | null | undefined

type LegalProps = {
  termsOfService?: LegalLink
  privacyPolicy?: LegalLink
}

const Legal = ({ termsOfService, privacyPolicy }: LegalProps) => {
  return (
    <div className="footer-legal">
      {termsOfService && (
        <Link href={termsOfService.slug} target="_blank" rel="noopener noreferrer">
          Terms of Service
        </Link>
      )}
      {privacyPolicy && (
        <Link href={privacyPolicy.slug} target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </Link>
      )}
    </div>
  )
}

export default Legal
