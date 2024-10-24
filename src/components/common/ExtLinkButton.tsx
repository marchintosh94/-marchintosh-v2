import { faArrowRight } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ExtLinkButton: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode
    displayIcon?: boolean
  }
> = ({ children, displayIcon = true, ...props }) => (
  <a {...props}>
    <div className="mb-link w-fit flex items-center">
      {children}&nbsp;
      {displayIcon && <FontAwesomeIcon icon={faArrowRight} />}
    </div>
  </a>
)

export default ExtLinkButton
