import { Attachment } from 'airtable'
import { SkillUI } from './skill'

export interface Project {
  id: string
  title: string
  description: string
  gitHub?: string
  doc?: string
  npm?: string
  preview: Attachment[]
  collaboration?: string
  website: string
}

export interface ProjectUI extends Project {
  skills: SkillUI[]
}
