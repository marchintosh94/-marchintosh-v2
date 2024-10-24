'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {
  const { push } = useRouter()
  return (
    <div className="cursor-pointer" onClick={() => push('/')}>
      <Image
        src={'/images/logo/mb_light.svg'}
        alt="Marco Baratto Logo"
        className="w-auto block h-16 rounded-ful dark:hidden"
        width={98}
        height={64}
      />
      <Image
        src={'/images/logo/mb_dark.svg'}
        alt="Marco Baratto Logo"
        className="w-auto dark:inline-block h-16 rounded-ful hidden"
        width={98}
        height={64}
      />
    </div>
  )
}

export default Logo
