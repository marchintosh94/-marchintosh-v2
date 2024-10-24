import { getMappedProjects } from '@/api/repository'
import Badge from '@/components/common/Badge'
import Img from '@/components/common/Img'
import Paragraph from '@/components/common/typography/Paragraph'
import Title2 from '@/components/common/typography/Title2'
import Title3 from '@/components/common/typography/Title3'
import ProjectFigure from '@/components/features/project/ProjectFigure'
import ProjectLinksSection from '@/components/features/project/ProjectLinksSection'
import SkillsBox from '@/components/SkillsBox'

export default async function Projects() {
  const projects = await getMappedProjects()

  return (
    <section>
      <Title2 className="mb-16">
        Projects&nbsp;
        <span className="text-mb_accent text-sm">@marchintosh94</span>
      </Title2>
      <div className="space-y-40">
        {projects.map((project, i) => (
          <article
            key={project.id}
            className={'grid grid-cols-1 sm:grid-cols-5 sm:gap-x-14'}
          >
            <ProjectFigure project={project} index={i} />
            <section className="space-y-8 sm:col-span-2">
              <Title3 className="sm:text-2xl">{project.title}</Title3>
              <Paragraph>{project.description}</Paragraph>
              {project.collaboration && (
                <Paragraph className="space-y-2">
                  <span>Experience:</span>
                  <br />
                  <Badge className="border dark:border-mb_light/20 border-mb_dark/20">
                    {project.collaboration}
                  </Badge>
                </Paragraph>
              )}
              <SkillsBox skills={project.skills} />
              <ProjectLinksSection project={project} />
            </section>
          </article>
        ))}
      </div>
    </section>
  )
}
