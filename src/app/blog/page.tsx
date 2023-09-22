import Container from '@/components/Container'
import Heading from '@/components/Heading'
import Link from 'next/link'
import { LuCalendarDays, LuClock } from 'react-icons/lu'
import { POSTS } from '../page'

export default function Page() {
  return (
    <Container className=" mt-10">
      <Heading
        title="Featured Post"
        subtitle="Discover my random posts, feel free to read and explore it."
      />
      <div className=" mt-4 flex flex-col divide-y">
        {POSTS.map((post, index) => (
          <div
            key={index}
            className=" py-4 first-of-type:pt-0 last-of-type:pb-0"
          >
            <div className=" w-full bg-white rounded-lg h-full dark:bg-gray-950">
              <div className=" flex items-center gap-x-1 text-gray-500 text-sm dark:text-gray-400 mb-2">
                <LuCalendarDays />
                <p>Aug 18, 2023</p>
                <div className=" h-1 w-1 rounded-full bg-gray-800 mx-1 dark:bg-gray-100"></div>
                <LuClock />
                <p>7 min read</p>
              </div>
              <Link
                href="/"
                className=" text-gray-800 text-2xl font-medium dark:text-gray-100"
              >
                {post.title}
              </Link>
              <p className=" line-clamp-1 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                molestiae commodi dicta dolore, perferendis amet nostrum hic
                autem aspernatur iste laboriosam veritatis ea sunt. Deleniti!
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
