import Container from '@/components/Container'
import ProjectItem from '@/components/ProjectItem'
import getProjects from '@/services/project/getProjects'
import React from 'react'

export default function Showcase() {
  const projects = getProjects()
  return (
    <Container>
      <div className=" mt-10">
        <div className=" space-y-2">
          <h1 className=" font-bold text-3xl text-gray-800 dark:text-gray-50">
            Projects Showcase 🚀
          </h1>
          <p className=" text-gray-600 dark:text-gray-400 leading-relaxed">
            Check out my featured projects to see some of my best work and learn
            more about my skills and experience as a developer. Feel free to
            explore it.
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 mt-8 gap-8">
          {projects.map((project, index) => (
            <ProjectItem key={index} data={project} />
          ))}
        </div>
      </div>
    </Container>
  )
}
