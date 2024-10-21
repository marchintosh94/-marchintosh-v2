'use client'

import cn from '@/utils/cn'
import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

const Img = ({ className, alt, ...props }: ImageProps) => {
  const [isLoading, setLoading] = useState(true)
  return (
    <div className={`overflow-hidden relative ${className}`}>
      <Image
        fill={true}
        alt={alt}
        className={cn(
          isLoading
            ? 'grayscale blur-2xl scale-110'
            : 'grayscale-0 blur-0 scale-100'
        )}
        onLoad={() => setLoading(false)}
        {...props}
      />
    </div>
  )
}

export default Img
