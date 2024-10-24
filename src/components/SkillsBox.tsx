import clsx from 'clsx'
import { SkillUI } from '@/types'
import Skill from './Skill'

interface SkillsBoxProps extends React.HtmlHTMLAttributes<HTMLUListElement> {
  skills: SkillUI[]
  badgeClass?: string
}

const SkillsBox: React.FC<SkillsBoxProps> = ({
  skills,
  className,
  badgeClass,
  ...props
}) => (
  <ul
    role={'list'}
    className={clsx('grid grid-flow-col auto-cols-max gap-x-2', className)}
  >
    {skills.map((s) => (
      <Skill
        key={s.id}
        id={s.id}
        title={s.title}
        url={s.url}
        logo={s.logo}
        className={badgeClass}
      />
    ))}
  </ul>
)

export default SkillsBox
