import { SkillUI } from '@/types'
import { Attachment, FieldSet, Record } from 'airtable'

export const mapSkills = ({
  id,
  fields: { Experiences, Projects, fieldOrder, groupOrder, ...skill }
}: Record<FieldSet>): SkillUI =>
  ({
    id,
    ...skill,
    logo: (skill.logo as Attachment[]).map((elem) => ({
      url: `/images/skills/${elem.filename}`
    }))
  }) as SkillUI
