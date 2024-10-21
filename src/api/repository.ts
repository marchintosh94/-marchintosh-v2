import { Attachment } from 'airtable'
import { getExperiences } from './experiences'
import { getSkills } from './skills'
import { mapSkills } from '@/utils/mapper'
import { ExperienceUI } from '@/types'

export const getMappedExperiences = async () => {
  const experiences = await getExperiences()
  const skills = await getSkills()

  return experiences.map((e) => ({
    id: e.id,
    ...e.fields,
    logo: (e.fields.logo as Attachment[]).map((elem) => ({
      url: `/images/experiences/${elem.filename}`
    })),
    startYear: `${new Date(e.fields.start as string).getMonth()}/${new Date(e.fields.start as string).getFullYear()}`,
    endYear: e.fields.end
      ? `${new Date(e.fields.end as string).getMonth()}/${new Date(e.fields.end as string).getFullYear()}`
      : 'Present',
    skills: skills
      .filter((s) => (e.fields.skills as string[]).includes(s.id))
      .map(mapSkills)
  })) as ExperienceUI[]
}
