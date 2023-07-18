import fs from 'fs'
import matter from 'gray-matter'

const getProjectBySlug = (slug: string) => {
  const folder = 'src/data/project/'
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
  }
}

export default getProjectBySlug
