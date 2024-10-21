import '@/theme/globals.css'
import { defaultMetadata } from '@/metadata'
import Layout from '@/components/layout/Layout'

export const metadata = defaultMetadata

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <Layout className="space-y60">{children}</Layout>
}
