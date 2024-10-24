'use client'

import { setInitialMode } from '@/utils/theme'
import { useEffect } from 'react'

const ThemeInitializer = () => {
  useEffect(() => {
    setInitialMode()
  }, [])

  return <></>
}

export default ThemeInitializer
