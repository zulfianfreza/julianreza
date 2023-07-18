// import ProjectItem from '@/components/ProjectItem'
import Image from 'next/image'
import React from 'react'
// import { ProjectList } from '@/lib/constants/project'
import { ChevronsRight } from 'lucide-react'
import Link from 'next/link'
import Container from '@/components/Container'
import Heading from '@/components/Heading'
import ExploreLink from '@/components/ExploreLink'
import getProjects from '@/services/project/getProjects'
import ProjectItem from '@/components/ProjectItem'

export default function Home() {
  const projects = getProjects()

  return (
    <Container>
      <div className="flex items-center gap-x-10 my-10">
        <div className=" flex-1 flex flex-col items-start">
          <p className=" text-slate-600 dark:text-slate-400">
            Hallo 👋, I&apos;m <br />
          </p>
          <h1 className=" text-4xl md:text-5xl text-slate-800 dark:text-slate-50 font-black mt-2">
            Zulfian F. Reza
          </h1>
          <p className=" text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
            I am a{' '}
            <span className=" font-semibold text-slate-800 dark:text-slate-50">
              software engineer
            </span>{' '}
            who really interested in{' '}
            <span className=" font-semibold text-slate-800 dark:text-slate-50">
              Frontend
            </span>
            ,{' '}
            <span className=" font-semibold text-slate-800 dark:text-slate-50">
              Mobile
            </span>
            , also{' '}
            <span className=" font-semibold text-slate-800 dark:text-slate-50">
              Fullstack Development
            </span>
            .
          </p>
          <Link
            href=""
            className=" text-slate-50 mt-4 dark:text-slate-900 text-sm md:flex items-center hidden font-medium px-4 h-10 bg-slate-900 dark:bg-slate-50 transition duration-100"
          >
            Resume
          </Link>
        </div>
        <div className=" h-24 w-24 md:h-40 md:w-40 relative rounded-full overflow-hidden transition-all duration-300">
          <Image src="/images/profile.jpeg" fill={true} alt="" />
        </div>
      </div>
      <div className=" my-10">
        <Heading
          title="Featured Projects 🚀"
          subtitle="Check out my featured projects to see some of my best work and learn more about my skills and experience as a developer. Feel free to explore it."
        />
        <div className=" grid grid-cols-1 md:grid-cols-2 mt-8 gap-8">
          {/* {ProjectList.slice(0, 2).map((project, index) => (
            <ProjectItem key={index} data={project} />
          ))} */}
          {projects
            .filter(
              (project) =>
                project.slug === 'circle' || project.slug === 'healio'
            )
            .map((project, index) => (
              <ProjectItem data={project} key={index} />
            ))}
        </div>
        <div className="mt-10 flex justify-end w-full">
          <ExploreLink
            href="/showcase"
            label="Explore all projects in showcase"
          />
        </div>
      </div>
      <div className="">
        <Heading
          title="Featured Posts ✏️"
          subtitle="Discover my random posts, feel free to explore it."
        />
        <div className="mt-10 flex justify-end w-full">
          <ExploreLink href="/showcase" label="Read all posts" />
        </div>
        {/* <Tabs /> */}
      </div>
    </Container>
  )
}
