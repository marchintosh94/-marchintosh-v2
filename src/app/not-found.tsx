import Img from '@/components/common/Img'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <main className="min-h-full">
        <div className="h-screen w-screen relative">
          <Img
            fill
            sizes="100vw"
            alt="Not Found"
            src={'/images/404.avif'}
            className="object-cover"
          />
        </div>
        <div className="fixed z-10 right-0 left-0 top-0 mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-44">
          <p className="text-base font-semibold text-black text-opacity-50">
            404
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Uh oh! I think you&apos;re lost.
          </h1>
          <p className="mt-2 text-lg font-medium text-black text-opacity-50">
            It looks like the page you&apos;re looking for doesn&apos;t exist.
          </p>
          <div className="mt-6">
            <Link href="/">
              <button className="inline-flex items-center rounded-md border border-transparent bg-white bg-opacity-75 px-4 py-2 text-sm font-medium text-black text-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50">
                Go back home
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
