import { airtableCache } from './airtable'
import { API_TAGS } from '@/types'

export const getExperiences = airtableCache({
  table: 'Experiences',
  tag: API_TAGS.experiences,
  queryParams: { sort: [{ field: 'order' }] }
})
