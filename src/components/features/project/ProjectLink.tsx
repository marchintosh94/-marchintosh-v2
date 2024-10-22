import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ProjectLinkProps {
  link: string
  icon: any
  label: string
}

const ProjectLink = ({ icon, label, link }: ProjectLinkProps) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      aria-label={label}
      className={'toolbar-social-logo h-10 w-10 p-2'}
    >
      <FontAwesomeIcon icon={icon} className={'!h-9 w-9'} />
    </a>
  )
}

export default ProjectLink
