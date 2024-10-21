'use client'

import { ExperienceUI } from '@/types'
import { useState } from 'react'
import ResumeBox from '../ResumeBox'
import ExperienceBox from '../ExperienceBox'

interface JobListDescriptionBoxProps {
  experiences: ExperienceUI[]
}

const JobListDescriptionBox = ({ experiences }: JobListDescriptionBoxProps) => {
  const [activeWork, setActiveWork] = useState(experiences[0])

  return (
    <>
      <ResumeBox
        onChangeActive={(experience) => setActiveWork(experience)}
        active={activeWork?.id}
        className="col-span-4 md:col-span-2 xl:col-span-1 border-none"
        experiences={experiences}
      />
      <ExperienceBox
        className="col-span-4 md:col-span-2 xl:col-span-2 border-none"
        experience={activeWork}
      />
    </>
  )
}

export default JobListDescriptionBox
