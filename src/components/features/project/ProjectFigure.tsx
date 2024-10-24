'use client'

import cn from '@/utils/cn'
import Img from '../../common/Img'
import { ProjectUI } from '@/types'

interface ProjectFigureProps {
  project: ProjectUI
  index: number
}

const ProjectFigure = ({ project, index }: ProjectFigureProps) => {
  const navigateTo = (url: string) => window.open(url, '_blank')

  return (
    <figure
      className={cn({
        'mb-project__box-image justify-center sm:col-span-3': true,
        'sm:order-2 sm:justify-end': index % 2 == 0,
        'sm:justify-start': index % 2 == 1
      })}
    >
      <Img
        alt={project.title}
        onClick={() => navigateTo(project.website)}
        src={project.preview[0].url}
        className={cn({
          'mb-project__img ': true,
          'sm:order-2 mb-project__img-odd': index % 2 == 1,
          'mb-project__img-even': index % 2 == 0
        })}
      />
    </figure>
  )
}

export default ProjectFigure
