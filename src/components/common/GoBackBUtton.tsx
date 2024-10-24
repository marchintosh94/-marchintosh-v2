'use client'

import React from 'react'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/pro-light-svg-icons'
import { useRouter } from 'next/navigation'

const GoBackBUtton = () => {
  const { back } = useRouter()

  return (
    <Button
      title="goback"
      onClick={() => back()}
      className="h-fit mb-link w-fit flex  justify-center"
    >
      <FontAwesomeIcon icon={faArrowLeft} className="text-4xl" />
    </Button>
  )
}

export default GoBackBUtton
