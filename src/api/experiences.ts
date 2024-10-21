import { unstable_cache } from 'next/cache'
import { airtable } from './airtable'
import { API_TAGS } from '@/types/api'

export const getExperiences = unstable_cache(
  async () => {
    return await airtable('Experiences')
      .select({ sort: [{ field: 'order' }] })
      .all()
  },
  [API_TAGS.experiences],
  {
    tags: [API_TAGS.experiences],
    revalidate: process.env.NODE_ENV === 'development' ? 1 : false
  }
)
