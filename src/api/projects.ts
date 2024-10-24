import { airtableCache } from './airtable'
import { API_TAGS } from '@/types'

export const getProjects = airtableCache({
  table: 'Projects',
  tag: API_TAGS.projects,
  queryParams: { sort: [{ field: 'order' }] }
})
