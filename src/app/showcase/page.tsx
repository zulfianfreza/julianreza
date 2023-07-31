import Container from '@/components/Container'
import Heading from '@/components/Heading'
import ProjectItem from '@/components/ProjectItem'
import getProjects from '@/services/project/getProjects'
import React from 'react'

export default function Showcase() {
  const projects = getProjects()
  return (
    <Container>
      <div className=" mt-10">
        <Heading
          title="Projects Showcase 🚀"
          subtitle="Check out my featured projects to see some of my best work and learn
            more about my skills and experience as a developer. Feel free to
            explore it."
        />
        <div className=" grid grid-cols-1 md:grid-cols-2 mt-8 gap-8">
          {projects.map((project, index) => (
            <ProjectItem key={index} data={project} />
          ))}
        </div>
      </div>
    </Container>
  )
}
