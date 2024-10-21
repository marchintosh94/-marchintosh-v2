import Airtable from 'airtable'
import '@/utils/envConfig'

export const airtable = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY
}).base(process.env.AIRTABLE_WORKSPACE!)
