import Container from '@/components/Container'
import getProjectBySlug from '@/services/project/getProjectBySlug'
import Image from 'next/image'
import React from 'react'
import Markdown from 'markdown-to-jsx'
import { Globe } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import Heading from '@/components/Heading'
import Link from 'next/link'
import { Metadata } from 'next'

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

export default function Page({ params }: PageParams) {
  const project = getProjectBySlug(params.slug)

  return (
    <Container>
      <div className=" mt-10">
        <Heading title={project.title} subtitle={project.summary} />
        <div className=" mt-4 flex gap-x-2">
          <Link
            href={project.repo}
            target="_blank"
            className=" gap-x-1 px-4 h-10 bg-gray-100 border rounded-lg hover:bg-gray-100 font-medium text-gray-800 dark:text-gray-100 dark:hover:bg-gray-800 flex items-center text-sm justify-center"
          >
            <SiGithub size={16} /> Repository
          </Link>
          <Link
            href={project.demo}
            target="_blank"
            className=" flex items-center bg-gray-100 border rounded-lg hover:bg-gray-100 font-medium text-gray-800 dark:text-gray-100 dark:hover:bg-gray-800 h-10 px-4 text-sm justify-center gap-x-1"
          >
            <Globe size={16} /> Live Demo
          </Link>
        </div>
      </div>
      <div className=" mt-8 w-full aspect-[16/9] relative rounded-xl overflow-hidden">
        <Image
          src={project.image ?? ''}
          alt=""
          fill
          className=" object-cover object-top"
        />
      </div>
      <article className="prose max-w-full dark:prose-invert">
        <Markdown>{project.content}</Markdown>
      </article>
    </Container>
  )
}
