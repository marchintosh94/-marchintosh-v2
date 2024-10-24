import { montserratFont } from '@/fonts'
import { WebVitals } from '../common/WebVitals'

const BaseLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en" className={`${montserratFont.variable}`}>
      <body>
        {process.env.NODE_ENV === 'development' && <WebVitals />}
        {children}
      </body>
    </html>
  )
}

export default BaseLayout
