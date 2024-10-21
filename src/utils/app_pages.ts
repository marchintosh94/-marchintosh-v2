import { AppPage } from '@/types'

//TODO: Move this to a CMS
export const AvailablePages: Record<string, AppPage> = {
  Home: { path: '/', title: 'Home' },
  AboutMe: { path: '/about-me', title: 'About' },
  Projects: { path: '/projects', title: 'Projects' },
  Resume: { path: '/resume', title: 'Resume' }
}
