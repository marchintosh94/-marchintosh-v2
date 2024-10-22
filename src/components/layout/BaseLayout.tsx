import { montserratFont } from '@/fonts'

const BaseLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en" className={`${montserratFont.variable}`}>
      <body>{children}</body>
    </html>
  )
}

export default BaseLayout
