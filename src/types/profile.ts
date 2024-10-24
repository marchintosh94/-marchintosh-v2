export interface Profile {
  title: string
  role: string
  intro: string
  lang: string
}
export interface ProfileUI extends Profile {
  id: string
}
