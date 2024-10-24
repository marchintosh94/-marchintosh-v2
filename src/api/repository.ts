import { Attachment, FieldSet, Records } from 'airtable'
import { getExperiences } from './experiences'
import { getSkills } from './skills'
import { mapSkills } from '@/utils/mapper'
import { ExperienceUI, ProjectUI, ProfileUI, ContactsUI } from '@/types'
import { getProjects } from './projects'
import { QueryParams } from 'airtable/lib/query_params'
import { getProfile } from './profile'
import { getContacts } from './contacts'

export const getMappedExperiences = async () => {
  const experiences = await getExperiences()
  const skillIds = experiences.map(
    (experience) => experience.fields.skills
  ) as string[]
  const skills = await getSkillsWithOptions()
  const filteredSkills = getFilteredSkillsByIds(skills)(skillIds)
  const skillsUI = mapSkillsToUI(filteredSkills)

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
    skills: skillsUI
  })) as ExperienceUI[]
}
export const getMappedProjects = async () => {
  const projects = await getProjects()
  const skillIds = projects.map((project) => project.fields.skills) as string[]
  const skills = await getSkillsWithOptions()
  const filteredSkills = getFilteredSkillsByIds(skills)(skillIds)
  const skillsUI = mapSkillsToUI(filteredSkills)

  return projects.map((p) => ({
    id: p.id,
    ...p.fields,
    preview: (p.fields.preview as Attachment[]).map((elem) => ({
      url: `/images/preview/${elem.filename}`
    })),
    skills: skillsUI
  })) as ProjectUI[]
}

export const getResumePageData = async () => {
  const [experiences, profile, contacts, skills] = await Promise.all([
    getMappedExperiences(),
    getProfile({ filterByFormula: '{Lang} = "EN"' }),
    getContacts(),
    getSkillsWithOptions({
      sort: [
        { field: 'groupOrder', direction: 'asc' },
        { field: 'fieldOrder', direction: 'asc' }
      ],
      filterByFormula:
        'AND(NOT({type} = "database"), NOT({type} = "tools"), NOT({title} = "Yii"), NOT({title} = "Html"), NOT({title} = "Css"))'
    })
  ])

  const skillsUI = mapSkillsToUI(skills)

  return {
    experiences,
    profile: profile.map((p) => ({ id: p.id, ...p.fields })).at(0) as ProfileUI,
    contacts: contacts.map((c) => ({ id: c.id, ...c.fields })) as ContactsUI[],
    skills: skillsUI
  }
}

export const getFilteredSkillsByIds =
  (skills: Records<FieldSet>) => (ids: string[]) =>
    skills.filter((s) => ids.includes(s.id))
export const mapSkillsToUI = (skills: Records<FieldSet>) =>
  skills.map(mapSkills)
export const getSkillsWithOptions = async (options?: QueryParams<FieldSet>) =>
  await getSkills(options)
