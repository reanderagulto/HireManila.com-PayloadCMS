import React from 'react'

import type { Page } from '@/payload-types'
import { HeroDefault } from './Default'
import { WithMedia } from './WithMedia'

const heroes = {
  default: HeroDefault,
  withMedia: WithMedia,
  withForm: HeroDefault,
}

export const RenderHero: React.FC<Page['hero']> = (props) => {
  const type = props?.type ?? 'default'

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  return <HeroToRender {...props} />
}
