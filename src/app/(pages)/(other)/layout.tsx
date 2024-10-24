import CommonPageLayout from '@/components/layout/CommnPageLayout'
import '@/theme/globals.css'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <CommonPageLayout>{children}</CommonPageLayout>
}
