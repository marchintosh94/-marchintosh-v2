import { ProjectUI } from '@/types'
import { faNpm, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faGraduationCap } from '@fortawesome/pro-light-svg-icons'
import ProjectLink from './ProjectLink'

interface ProjectLinksProps {
  project: ProjectUI
}

const ProjectLinksSection = ({ project }: ProjectLinksProps) => {
  return (
    <section className="mb-project-links__container">
      <span>Links</span>
      <div className={`flex items-center space-x-2`}>
        {project.gitHub && (
          <ProjectLink
            icon={faGithub}
            label={project.title}
            link={project.gitHub}
          />
        )}
        {project.doc && (
          <ProjectLink
            icon={faGraduationCap}
            label={project.title}
            link={project.doc}
          />
        )}
        {project.npm && (
          <ProjectLink icon={faNpm} label={project.title} link={project.npm} />
        )}
        {project.website && (
          <ProjectLink
            icon={faGlobe}
            label={project.title}
            link={project.website}
          />
        )}
      </div>
    </section>
  )
}

export default ProjectLinksSection
