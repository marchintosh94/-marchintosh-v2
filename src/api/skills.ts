import { airtableCache } from './airtable'
import { API_TAGS } from '@/types'
import { QueryParams } from 'airtable/lib/query_params'
import { FieldSet } from 'airtable'

const defaultQueryParams: QueryParams<FieldSet> = {
  sort: [
    { field: 'groupOrder', direction: 'asc' },
    { field: 'fieldOrder', direction: 'asc' }
  ]
}
export const getSkills = (
  queryParams: QueryParams<FieldSet> = defaultQueryParams
) => airtableCache({ table: 'Skills', tag: API_TAGS.skills, queryParams })()
