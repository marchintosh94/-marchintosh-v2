import { Attachment } from 'airtable'
import { getExperiences } from './experiences'
import { getSkills } from './skills'
import { mapSkills } from '@/utils/mapper'
import { ExperienceUI } from '@/types'
import { getProjects } from './projects'
import { ProjectUI } from '@/types/project'

export const getMappedExperiences = async () => {
  const experiences = await getExperiences()
  const skillIds = experiences.map(
    (experience) => experience.fields.skills
  ) as string[]
  const skills = await getFilteredSkills(skillIds)

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
    skills
  })) as ExperienceUI[]
}

export const getFilteredSkills = async (ids: string[]) => {
  const skills = await getSkills()

  return skills.filter((s) => ids.includes(s.id)).map(mapSkills)
}

export const getMappedProjects = async () => {
  const projects = await getProjects()
  const skillIds = projects.map((project) => project.fields.skills) as string[]
  const skills = await getFilteredSkills(skillIds)

  return projects.map((p) => ({
    id: p.id,
    ...p.fields,
    preview: (p.fields.preview as Attachment[]).map((elem) => ({
      url: `/images/preview/${elem.filename}`
    })),
    skills
  })) as ProjectUI[]
}
