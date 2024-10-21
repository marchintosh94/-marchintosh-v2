import { Attacments } from './shared'
import { SkillUI } from './skill'

export interface Experience {
  id: string
  company: string
  companyUrl: string
  title: string
  description: string
  logo: Attacments[]
  start: string
  end: string
}

export interface ExperienceUI extends Omit<Experience, 'logo'> {
  startYear: string
  endYear: string
  skills: SkillUI[]
  logo: { url: string }[]
}
