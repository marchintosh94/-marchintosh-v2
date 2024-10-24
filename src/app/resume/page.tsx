import { getResumePageData } from '@/api/repository'
import ExtLinkButton from '@/components/common/ExtLinkButton'
import GoBackBUtton from '@/components/common/GoBackBUtton'
import Paragraph from '@/components/common/typography/Paragraph'
import Title from '@/components/common/typography/Title'
import Title3 from '@/components/common/typography/Title3'
import DownloadResumeButton from '@/components/features/resume/DownloadResumeButton'
import ResumeItem from '@/components/ResumeItem'
import Skill from '@/components/Skill'
import Image from 'next/image'

export default async function Resume() {
  const { experiences, profile, contacts, skills } = await getResumePageData()

  return (
    <>
      <header className="mx-auto max-w-[120rem] py-8 px-4 sm:py-10 sm:px-6 space-y-10">
        <div className="mx-12 flex justify-between space-x-6">
          <GoBackBUtton />
          <DownloadResumeButton />
        </div>
        <div className="flex space-x-10 mx-auto max-w-[80rem]">
          <div className="sm:col-span-1 flex item justify-center">
            <figure className="dark:hidden">
              <Image
                alt="marcobaratto logo"
                height={200}
                width={250}
                src={'/images/logo/mb_light.svg'}
              />
            </figure>
            <figure className="hidden dark:block">
              <Image
                alt="marcobaratto logo"
                height={200}
                width={250}
                src={'/images/logo/mb_dark.svg'}
              />
            </figure>
          </div>
          <div className="sm:col-span-2 flex items-center">
            <section className="space-y-4">
              <Title>{profile.title}</Title>
              <Paragraph className="text-sm text-justify">
                {profile.intro}
              </Paragraph>
            </section>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-[120rem] mt-10 p-5 space-y-8">
        <section className="space-y-2 p-4">
          <Title3 className="sm:text-xl">Contacts and Info:</Title3>
          <div className="flex space-x-4">
            <dl className="sm:divide-y sm:divide-gray-200 sm:min-w-[40rem]">
              {contacts
                .filter((c) => c.type == 'social')
                .map((c) => (
                  <div
                    key={c.id}
                    className=" sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 py-1"
                  >
                    <dt className="text-sm flex items-center font-medium text-gray-500">
                      {c.name}
                    </dt>
                    {c.url && (
                      <dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">
                        <ExtLinkButton className="m-0" href={c.url}>
                          {c.urlLabel}
                        </ExtLinkButton>
                      </dd>
                    )}
                    {c.value && (
                      <dd className="mt-1 text-sm sm:col-span-2 py-2 sm:mt-0">
                        {c.value}
                      </dd>
                    )}
                  </div>
                ))}
            </dl>
            <dl className="sm:divide-y sm:divide-gray-200 sm:min-w-[40rem]">
              {contacts
                .filter((c) => ['contact', 'info'].includes(c.type))
                .map((c) => (
                  <div
                    key={c.id}
                    className=" sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 py-1"
                  >
                    <dt className="text-sm flex items-center font-medium text-gray-500">
                      {c.name}
                    </dt>
                    {c.url && (
                      <dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">
                        <ExtLinkButton className="m-0" href={c.url}>
                          {c.urlLabel}
                        </ExtLinkButton>
                      </dd>
                    )}
                    {c.value && (
                      <dd className="mt-1 text-sm sm:col-span-2 py-2 sm:mt-0">
                        {c.value}
                      </dd>
                    )}
                  </div>
                ))}
            </dl>
          </div>
        </section>
        <section className="p-4 dark:bg-black/20 rounded-2xl space-y-6 my-auto">
          <Title3 className="sm:text-xl">Relevant Experiences:</Title3>
          {experiences.map((e) => (
            <article key={e.id} className="p-3 space-y-2">
              <div className="flex gap-3">
                <ResumeItem role={e} />
              </div>
              <Paragraph className="text-sm">{e.description}</Paragraph>
            </article>
          ))}
        </section>
        <div className="grid grid-flow-col auto-cols-auto gap-x-4">
          <section className="p-4 dark:bg-black/20 rounded-2xl space-y-6">
            <Title3 className="sm:text-lg">Education:</Title3>
            <dl className="flex flex-auto flex-wrap gap-x-2 gap-y-2">
              <dt className="sr-only">School</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                High school leaving qualification in Electrical studies
              </dd>
              <dt className="sr-only">Place</dt>
              <dd className="w-full text-xs text-zinc-500 dark:text-zinc-400">
                ITI Antonio Pacinotti, Piombino, Italy | 2007 - 2013
              </dd>
            </dl>
          </section>
          <section className="p-4 dark:bg-black/20 rounded-2xl space-y-6">
            <Title3 className="sm:text-lg">Skills:</Title3>
            <div>
              {skills.map((s) => (
                <Skill
                  key={s.id}
                  id={s.id}
                  title={s.title}
                  url={s.url}
                  logo={s.logo}
                />
              ))}
            </div>
          </section>
          <section className="p-4 px-8 dark:bg-black/20 rounded-2xl space-y-6">
            <Title3 className="sm:text-lg">Languages:</Title3>
            <ul role="list" className="divide-y divide-gray-200">
              <li className="flex py-4">
                <div className="ml-3">
                  <Paragraph className="sm:text-base font-medium ">
                    Italian &#8594; Native
                  </Paragraph>
                </div>
              </li>
              <li className="flex py-4">
                <div className="ml-3">
                  <Paragraph className="sm:text-base font-medium ">
                    English &#8594; B1
                  </Paragraph>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  )
}
