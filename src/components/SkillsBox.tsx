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
  <ul role={'list'} className={clsx('flex flex-wrap gap-2', className)}>
    {skills.map((s) => (
      <li key={s.id}>
        <Skill
          id={s.id}
          title={s.title}
          url={s.url}
          logo={s.logo}
          className={badgeClass}
        />
      </li>
    ))}
  </ul>
)

export default SkillsBox
