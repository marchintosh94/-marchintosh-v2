import '@/theme/globals.css'
import { defaultMetadata } from '@/metadata'
import { montserratFont } from '@/fonts'

export const metadata = defaultMetadata

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserratFont.variable}`}>
      <body>{children}</body>
    </html>
  )
}
