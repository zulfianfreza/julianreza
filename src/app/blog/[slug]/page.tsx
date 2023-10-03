import Container from '@/components/Container'
import Heading from '@/components/Heading'
import Post from '@/components/post/Post'
import getPostBySlug from '@/services/post/getPostBySlug'
import 'highlight.js/styles/atom-one-dark.css'
import { Metadata } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
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
  const post = getPostBySlug(params.slug)

  return {
    title: post?.title + ' - Julian Reza',
  }
}

export default async function Page({ params }: PageParams) {
  const post = getPostBySlug(params.slug)

  const content = await serialize(post.content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        // @ts-ignore
        rehypeHighlight,
      ],
    },
  })

  return (
    <Container>
      <div className=" mt-10">
        <Heading title={post.title} />

        <Post content={content} />
      </div>
    </Container>
  )
}
