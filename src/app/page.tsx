import Img from '@/components/common/Img'
import LinkButton from '@/components/common/LinkButton'
import Paragraph from '@/components/common/typography/Paragraph'
import Subtitle from '@/components/common/typography/Subtitle'
import Title from '@/components/common/typography/Title'
import SocialLinks from '@/components/SocialLinks'
import { AvailablePages } from '@/utils/app_pages'
import JobListDescriptionBox from '@/components/container/JobListDescriptionBox'
import { getMappedExperiences } from '@/api/repository'

export default async function Home() {
  const experiences = await getMappedExperiences()
  return (
    <>
      <section className="flex flex-col space-y-6 md:flex-row  items-center sm:space-x-10">
        <div className="space-y-6 md:basis-3/5">
          <div>
            <small className="lowercase text-lg">
              (aka <code className="text-mb_accent">@marchintosh94</code>)
            </small>
            <Title>
              Marco <span>Baratto</span>
            </Title>
            <Subtitle className="mt-3">
              Working with my hands to make magic happen on the internet.
            </Subtitle>
          </div>
          <Paragraph className="mt-6 sm:w-[95%]">
            I&apos;m softwaare developer from Florence, Italy with rock-solid
            experience in building complex applications with modern
            technologies. I&apos;m focused on&nbsp;
            <b>React TS</b>, &nbsp;
            <b>Angular</b>&nbsp; and &nbsp;<b>Vue</b> &nbsp;development and
            I&apos;m a mobile development enthusiast.
          </Paragraph>
          <LinkButton href={AvailablePages.AboutMe.path}>
            See more About me
          </LinkButton>
        </div>
        <div className="flex justify-center h-full w-full md:block md:items-center md:basis-2/5 space-x-2">
          <SocialLinks
            className="sm:hidden flex-col justify-center space-y-2"
            iconClass="w-8 !h-8"
          />
          <Img
            className="mb-image-page"
            alt="marco baratto"
            src="/photos/marcobaratto.png"
          />
        </div>
      </section>
      <section className="grid grid-cols-4 xl:grid-cols-3 p-2  dark:bg-black rounded-2xl">
        <JobListDescriptionBox experiences={experiences} />
      </section>
    </>
  )
}
