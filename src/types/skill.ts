import { Attacments } from './shared'

export interface Skill {
  title: string
  logo: Attacments[]
  url: string
  type: 'database' | 'framework-library' | 'tools'
  Experiences: string[]
  Projects: string[]
}
export interface SkillUI
  extends Omit<Skill, 'Experiences' | 'Projects' | 'logo'> {
  id: string
  logo: { url: string }[]
}
