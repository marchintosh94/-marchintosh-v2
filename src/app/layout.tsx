import '@/theme/globals.css'
import { defaultMetadata } from '@/metadata'
import BaseLayout from '@/components/layout/BaseLayout'

export const metadata = defaultMetadata

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <BaseLayout>{children}</BaseLayout>
}
