import Container from '@/components/Container'
import Heading from '@/components/Heading'
import PostItem from '@/components/post/PostItem'
import getPosts from '@/services/post/getPosts'
import { format } from 'date-fns'
import Link from 'next/link'
import { LuCalendarDays, LuClock } from 'react-icons/lu'

export default function Page() {
  const posts = getPosts()
  return (
    <Container className=" mt-10">
      <Heading
        title="Featured Post"
        subtitle="Discover my random posts, feel free to read and explore it."
      />
      <div className=" mt-4 flex flex-col divide-y dark:divide-gray-800">
        {posts.map((post, index) => (
          <PostItem key={index} post={post} />
        ))}
      </div>
    </Container>
  )
}
