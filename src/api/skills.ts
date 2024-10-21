import { unstable_cache } from 'next/cache'
import { airtable } from './airtable'
import { API_TAGS } from '@/types/api'

export const getSkills = unstable_cache(
  async () => {
    return await airtable('Skills')
      .select({
        sort: [
          { field: 'groupOrder', direction: 'asc' },
          { field: 'fieldOrder', direction: 'asc' }
        ]
      })
      .all()
  },
  [API_TAGS.skills],
  {
    tags: [API_TAGS.skills],
    revalidate: process.env.NODE_ENV === 'development' ? 1 : false
  }
)
