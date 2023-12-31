import Container from '@/components/Container'
import Heading from '@/components/Heading'
import Project from '@/components/project/Project'
import getProjectBySlug from '@/services/project/getProjectBySlug'
import { Globe } from 'lucide-react'
import Markdown from 'markdown-to-jsx'
import { Metadata } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import Image from 'next/image'
import Link from 'next/link'
import { SiGithub } from 'react-icons/si'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'

interface PageParams {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)

  return {
    title: project?.title + ' - Julian Reza',
    description: project?.summary,
  }
}

export default async function Page({ params }: PageParams) {
  const project = getProjectBySlug(params.slug)

  const content = await serialize(project.content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        // @ts-ignore
        rehypeHighlight,
      ],
    },
  })

  return (
    <Container>
      <div className=" mt-10">
        <Heading title={project.title} subtitle={project.summary} />
        <div className=" mt-4 flex gap-x-2">
          <Link
            href={project.repo}
            target={project.repo != '' ? '_blank' : ''}
            className=" gap-x-1 px-4 h-10 dark:bg-gray-800 border-gray-300 dark:border-gray-600 bg-gray-50 border rounded-md hover:bg-gray-100 font-medium text-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 flex items-center text-sm justify-center"
          >
            <SiGithub size={16} /> Repository
          </Link>
          <Link
            href={project.demo}
            target="_blank"
            className=" flex items-center dark:bg-gray-800 border-gray-300 dark:border-gray-600 bg-gray-50 border rounded-md hover:bg-gray-100 font-medium text-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 h-10 px-4 text-sm justify-center gap-x-1"
          >
            <Globe size={16} /> Live Demo
          </Link>
        </div>
      </div>
      <div className=" mt-8 w-full aspect-[16/9] relative rounded-xl overflow-hidden shadow-sm">
        <Image
          src={project.image ?? ''}
          alt=""
          fill
          className=" object-cover object-top"
        />
      </div>

      <Project content={content} />

      {project.stack && (
        <div className=" prose prose-sm dark:prose-invert mt-8 max-w-full">
          <h3>Tech Stack</h3>
          <div className=" flex flex-wrap gap-2">
            {project.stack.map((tech, index) => (
              <div
                key={index}
                className=" px-4 py-1 border dark:border-gray-700 rounded-full dark:bg-gray-800 text-sm font-light dark:text-gray-400 bg-gray-100 text-gray-500"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      )}
    </Container>
  )
}
