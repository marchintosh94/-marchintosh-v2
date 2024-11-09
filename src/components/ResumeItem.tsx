import { ExperienceUI } from '@/types'
import Img from './common/Img'

const ResumeItem: React.FC<{ role: ExperienceUI }> = ({ role }) => (
  <>
    <div className="mb-resume-item">
      {role.logo.map((l) => (
        <Img
          key={l.url}
          width={32}
          height={32}
          className="h-8 w-8 rounded-full object-contain"
          alt={role.company}
          src={l.url}
        />
      ))}
    </div>
    <dl className="flex flex-auto flex-wrap gap-x-2 gap-y-2">
      <dt className="sr-only">Company</dt>
      <dd className="w-full flex-none mb-resume-item__title">{role.company}</dd>
      <dt className="sr-only">Role</dt>
      <dd className="w-full mb-resume-item__subtitle">{role.title}</dd>
      <dt className="sr-only">Date</dt>
      <dd
        className="mb-resume-item__note"
        aria-label={`${role.startYear} until ${role.endYear}`}
      >
        <time dateTime={role.startYear}>{role.startYear}</time>{' '}
        <span aria-hidden="true">—</span>{' '}
        <time dateTime={role.endYear}>{role.endYear}</time>
      </dd>
    </dl>
  </>
)

export default ResumeItem
