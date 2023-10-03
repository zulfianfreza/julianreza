import { IPost, IProject } from '@/types'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const getPosts = (): IPost[] => {
  const folder = path.join(process.cwd(), 'src/data/post/')
  const files = fs.readdirSync(folder)
  const markdownPosts = files.filter((file) => file.endsWith('.mdx'))

  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`src/data/post/${filename}`, 'utf-8')
    const matterResult = matter(fileContents)
    return {
      title: matterResult.data.title,
      summary: matterResult.data.summary,
      date: matterResult.data.date,
      slug: filename.replace('.mdx', ''),
      content: matterResult.content,
    }
  })

  return posts
}

export default getPosts
