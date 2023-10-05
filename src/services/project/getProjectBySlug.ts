import { IProject } from '@/types'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const getProjectBySlug = (slug: string): IProject => {
  const folder = path.join(process.cwd(), 'src/data/project/')
  const file = `${folder}${slug}.mdx`
  const content = fs.readFileSync(file, 'utf8')
  const matterResult = matter(content)
  return {
    title: matterResult.data.title,
    slug: file.replace('.mdx', ''),
    image: matterResult.data.image,
    summary: matterResult.data.summary,
    finish: matterResult.data.finish,
    content: matterResult.content,
    repo: matterResult.data.repo,
    demo: matterResult.data.demo,
    stack: matterResult.data.stack,
  }
}

export default getProjectBySlug
