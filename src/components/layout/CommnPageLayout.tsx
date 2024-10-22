import { AvailablePages } from '@/utils/app_pages'
import cn from '@/utils/cn'
import Header from './Header'
import Footer from './Footer'

const CommonPageLayout = ({
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
    <>
      <Header pages={pages} />
      <main className={cn('mb-10')}>
        <div className="px-4 sm:px-6 lg:px-8 mt-10 sm:mt-20">
          <div className="mx-auto max-w-7xl ">
            <div className="relative">
              <div className={cn('mx-auto', className)}>{children}</div>
            </div>
          </div>
        </div>
      </main>
      <Footer pages={pages} />
    </>
  )
}

export default CommonPageLayout
