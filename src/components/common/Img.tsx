'use client'

import cn from '@/utils/cn'
import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

const Img = ({ className, alt, ...props }: ImageProps) => {
  const [isLoading, setLoading] = useState(true)
  return (
    <Image
      alt={alt}
      className={cn(
        {
          'grayscale blur-2xl': isLoading,
          'grayscale-0 blur-0': !isLoading
        },
        className
      )}
      onLoad={() => setLoading(false)}
      {...props}
    />
  )
}

export default Img
