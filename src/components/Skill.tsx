'use client'

import Image from 'next/image'
import React from 'react'
import Badge from './common/Badge'
import cn from '@/utils/cn'

interface SkillProps {
  title: string
  logo: { url: string }[]
  url: string
  id: string
  className?: string
}

const Skill = ({ id, logo, title, url, className }: SkillProps) => {
  return (
    <Badge
      title={title}
      aria-label={title}
      className={cn(
        `flex flex-row justify-center my-2 mr-3 bg-mb_dark/5 dark:bg-mb_light/30 duration-500 cursor-pointer hover:scale-110`,
        className || ''
      )}
      onClick={() => window.open(url)}
      key={id}
    >
      <Image
        alt={title}
        src={logo[0].url}
        width={20}
        height={20}
        className="h-5 w-5"
      />
      &nbsp;<span className="text-xs">{title}</span>
    </Badge>
  )
}

export default Skill
