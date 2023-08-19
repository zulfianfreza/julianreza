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
import SpeedCodeSection from '@/components/SpeedCodeSection'
import { LuCalendarDays, LuClock } from 'react-icons/lu'

export default function Home() {
  const POSTS = [
    {
      title: 'Build CRUD App with tRPC Next.js',
      publishedDate: 'Aug 18, 2023',
      readTime: '7 min read',
    },
    {
      title: 'How To Center a Div',
      publishedDate: 'Jun 26, 2023',
      readTime: '3 min read',
    },
  ]
  const projects = getProjects()

  return (
    <Container>
      <div className="flex sm:items-center gap-x-10 my-10 sm:flex-row flex-col-reverse items-start gap-8">
        <div className=" flex-1 flex flex-col items-start">
          {/* <p className=" text-gray-500 dark:text-gray-400 text-sm">
            Hallo 👋, I&apos;m <br />
          </p> */}
          <h1 className=" text-3xl md:text-5xl text-gray-800 dark:text-gray-100 font-semibold">
            Zulfian F. Reza
          </h1>
          <p className=" text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
            I am a{' '}
            <span className=" font-medium text-gray-800 dark:text-gray-100">
              software engineer
            </span>{' '}
            who really interested in{' '}
            <span className=" font-medium text-gray-800 dark:text-gray-100">
              Frontend
            </span>
            ,{' '}
            <span className=" font-medium text-gray-800 dark:text-gray-100">
              Mobile
            </span>
            , also{' '}
            <span className=" font-medium text-gray-800 dark:text-gray-100">
              Fullstack Development
            </span>
            .
          </p>
          <p className=" text-gray-500 dark:text-gray-400">
            Want to collaborate?{' '}
            <Link
              href="/"
              className=" text-gray-800 dark:text-gray-100 font-medium"
            >
              Contact me 🤙
            </Link>
          </p>
          <Link
            href=""
            className=" text-white rounded-md mt-2 text-sm flex items-center font-medium px-4 h-10 bg-amber-400 transition duration-100"
          >
            Resume
          </Link>
        </div>
        <div className=" w-24 md:w-36 aspect-square relative rounded-full overflow-hidden transition-all duration-300">
          <Image src="/images/profile.jpeg" fill alt="" />
        </div>
      </div>
      <div className=" mt-10">
        <Heading
          title="Featured Projects"
          subtitle="Check out my featured projects to see some of my best work and learn more about my skills and experience as a developer. Feel free to explore it."
        />
        <div className=" grid grid-cols-1 md:grid-cols-2 mt-4 gap-8">
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
        <div className="mt-4 flex justify-end w-full">
          <ExploreLink
            href="/showcase"
            label="Explore all projects in showcase"
          />
        </div>
      </div>
      <SpeedCodeSection />
      <div className=" mt-10">
        <Heading
          title="Latest Posts ✏️"
          subtitle="Discover my random posts, feel free to explore it."
        />
        <div className=" mt-4 grid grid-cols-2 gap-4">
          {POSTS.map((post, index) => (
            <div
              key={index}
              className=" p-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-indigo-600 rounded-xl overflow-hidden"
            >
              <div className=" w-full p-4 bg-white rounded-lg h-full dark:bg-gray-950">
                <div className=" flex items-center gap-x-1 text-gray-500 text-sm dark:text-gray-400 mb-2">
                  <LuCalendarDays />
                  <p>Aug 18, 2023</p>
                  <div className=" h-1 w-1 rounded-full bg-gray-800 mx-1 dark:bg-gray-100"></div>
                  <LuClock />
                  <p>7 min read</p>
                </div>
                <Link
                  href="/"
                  className=" text-gray-800 text-xl font-medium dark:text-gray-100"
                >
                  {post.title}
                </Link>
                <p className=" line-clamp-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  molestiae commodi dicta dolore, perferendis amet nostrum hic
                  autem aspernatur iste laboriosam veritatis ea sunt. Deleniti!
                </p>
              </div>
            </div>
          ))}
          {/* <div className="">
            <Link
              href="/"
              className=" text-gray-800 text-2xl font-medium"
            ></Link>
            <div className=" flex items-center gap-x-1 text-gray-500 text-sm">
              <LuCalendarDays />
              <p>Aug 18, 2023</p>
              <div className=" h-1 w-1 rounded-full bg-gray-800 mx-1"></div>
              <LuClock />
              <p>7 min read</p>
            </div>
          </div> */}
        </div>
        <div className="mt-4 flex justify-end w-full">
          <ExploreLink href="/showcase" label="Read all posts" />
        </div>
        {/* <Tabs /> */}
      </div>
    </Container>
  )
}
