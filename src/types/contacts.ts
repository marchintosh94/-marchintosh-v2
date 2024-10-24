export interface Contacts {
  name: string
  url?: string
  urlLabel?: string
  value?: string
  type: 'social' | 'info' | 'contact'
}
export interface ContactsUI extends Contacts {
  id: string
}
