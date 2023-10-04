import React from 'react'
import ExploreLink from '../ExploreLink'
import Heading from '../Heading'
import { IProject } from '@/types'
import ProjectItem from '../project/ProjectItem'

interface ProjectsProps {
  projects: IProject[]
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <div className=" mt-10">
      <Heading
        title="Featured Projects 🧑🏻‍💻"
        subtitle="Check out my featured projects to see some of my best work and learn more about my skills and experience as a developer. Feel free to explore it."
      />
      <div className=" grid grid-cols-1 md:grid-cols-2 mt-4 gap-8">
        {projects
          .filter(
            (project) =>
              project.slug === 'catalink' || project.slug === 'healio'
          )
          .map((project, index) => (
            <ProjectItem data={project} key={index} />
          ))}
      </div>
      <div className="mt-4 flex justify-end w-full">
        <ExploreLink
          href="/showcase"
          label="Explore all projects in showcase"
        />
      </div>
    </div>
  )
}
