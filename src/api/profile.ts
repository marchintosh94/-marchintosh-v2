import { API_TAGS } from '@/types'
import { airtableCache } from './airtable'
import { QueryParams } from 'airtable/lib/query_params'
import { FieldSet } from 'airtable'

const defaultQueryParams: QueryParams<FieldSet> = {
  filterByFormula: '{Lang} = "EN"'
}

export const getProfile = (
  queryParams: QueryParams<FieldSet> = defaultQueryParams
) => airtableCache({ table: 'Profile', tag: API_TAGS.profile, queryParams })()
