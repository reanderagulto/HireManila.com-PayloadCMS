'use client'
import Link from 'next/link'
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon } from '@/components/Icons'

type SocialLink = {
  platform?: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | null | undefined
  url?: string | null | undefined
}

const socialPlatformIcons = {
  facebook: <FacebookIcon />,
  twitter: <TwitterIcon />,
  instagram: <InstagramIcon />,
  linkedin: <LinkedInIcon />,
}

const SocialLinks = ({ links }: { links: SocialLink[] }) => {
  return (
    <div className="footer-socials flex gap-3 mt-6">
      {links.map((link, index) => (
        <Link key={index} href={link.url ?? '#'} target="_blank" rel="noopener noreferrer">
          {socialPlatformIcons[link.platform ?? 'facebook']}
        </Link>
      ))}
    </div>
  )
}

export default SocialLinks
