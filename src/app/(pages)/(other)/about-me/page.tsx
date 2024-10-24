import AboutMeFirst from '@/components/features/about-me/AboutMeFirst'
import AboutMeThings from '@/components/features/about-me/AboutMeThings'
import Photos from '@/components/features/about-me/Photos'

export default function AboutMe() {
  return (
    <>
      <div className="space-y-20 sm:space-y-40">
        <AboutMeFirst />
        <section>
          <AboutMeThings />
        </section>
        <section>
          <Photos />
        </section>
      </div>
    </>
  )
}
