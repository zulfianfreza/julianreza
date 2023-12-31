import { IPost } from '@/types'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const getPostBySlug = (slug: string): IPost => {
  const folder = path.join(process.cwd(), 'src/data/post/')
  const file = `${folder}${slug}.mdx`
  const content = fs.readFileSync(file, 'utf8')
  const matterResult = matter(content)
  return {
    title: matterResult.data.title,
    slug: file.replace('.mdx', ''),
    content: matterResult.content,
    summary: matterResult.data.summary,
    date: matterResult.data.date,
  }
}

export default getPostBySlug
