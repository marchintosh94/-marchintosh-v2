import { montserratFont } from '@/fonts'
import { AvailablePages } from '@/utils/app_pages'
import Header from './Header'
import cn from '@/utils/cn'
import Footer from './Footer'

const Layout = ({
  children,
  className
}: Readonly<{
  children: React.ReactNode
  className?: string
}>) => {
  const pages = [
    AvailablePages.Home,
    AvailablePages.Projects,
    AvailablePages.AboutMe,
    AvailablePages.Resume
  ]
  return (
    <html lang="en" className={`${montserratFont.variable}`}>
      <body>
        <Header pages={pages} />
        <main className="mb-10">
          <div className="px-4 sm:px-6 lg:px-8 mt-10 sm:mt-20">
            <div className="mx-auto max-w-7xl ">
              <div className="relative">
                <div className={cn('mx-auto', className)}>{children}</div>
              </div>
            </div>
          </div>
        </main>
        <Footer pages={pages} />
      </body>
    </html>
  )
}

export default Layout
