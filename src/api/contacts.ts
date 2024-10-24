import { API_TAGS } from '@/types'
import { airtableCache } from './airtable'

export const getContacts = airtableCache({
  table: 'Contacts',
  tag: API_TAGS.contacts
})
