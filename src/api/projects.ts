import { unstable_cache } from 'next/cache'
import { airtable } from './airtable'
import { API_TAGS } from '@/types/api'

export const getProjects = unstable_cache(
  async () => {
    return await airtable('Projects')
      .select({ sort: [{ field: 'order' }] })
      .all()
  },
  [API_TAGS.projects],
  {
    tags: [API_TAGS.projects],
    revalidate: process.env.NODE_ENV === 'development' ? 1 : false
  }
)
