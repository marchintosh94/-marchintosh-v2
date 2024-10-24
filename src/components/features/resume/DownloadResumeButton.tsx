'use client'

import Button from '@/components/common/Button'
import { API_TAGS } from '@/types'
import { faArrowDownToLine } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DownloadResumeButton = () => {
  const download = async () => {
    const response = await fetch(`/api/resume`, {
      method: 'POST',
      next: { tags: [API_TAGS.resume] }
    })

    if (response.ok) {
      const blob = await response.blob()
      const url = window.URL.createObjectURL(new Blob([blob]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'marcobaratto-resume.pdf')
      document.body.appendChild(link)
      link.click()
    } else {
      console.error('Failed to generate PDF')
    }
  }

  return (
    <Button
      title="download"
      onClick={() => download()}
      className=" h-fit mb-link w-fit flex justify-center"
    >
      <FontAwesomeIcon icon={faArrowDownToLine} className="text-4xl" />
    </Button>
  )
}

export default DownloadResumeButton
