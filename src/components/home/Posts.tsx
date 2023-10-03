'use client'

import React from 'react'
import Heading from '../Heading'
import { IPost } from '@/types'
import { LuCalendarDays, LuClock } from 'react-icons/lu'
import { format } from 'date-fns'
import Link from 'next/link'
import ExploreLink from '../ExploreLink'

interface PostsProps {
  posts: IPost[]
}

export default function Posts({ posts }: PostsProps) {
  return (
    <div className=" mt-10">
      <Heading
        title="Latest Posts ✏️"
        subtitle="Discover my random posts, feel free to explore it."
      />
      <div className=" mt-4 flex flex-col divide-y dark:divide-gray-800">
        {posts.map((post, index) => {
          const wordCount = post.content.split(/\s+/).length
          const readingTime = Math.ceil(wordCount / 200)
          return (
            <div
              key={index}
              className=" py-4 first-of-type:pt-0 last-of-type:pb-0"
            >
              <div className=" w-full rounded-lg h-full ">
                <div className=" flex items-center gap-x-1 text-gray-500 text-sm dark:text-gray-400 mb-2">
                  <LuCalendarDays />
                  <p>{format(new Date(post.date), 'dd MMM, yyyy')}</p>
                  <div className=" h-1 w-1 rounded-full bg-gray-800 mx-1 dark:bg-gray-100"></div>
                  <LuClock />
                  <p>{readingTime} min read</p>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className=" text-gray-800 text-2xl font-medium dark:text-gray-100"
                >
                  {post.title}
                </Link>
                <p className=" line-clamp-2 text-gray-500 dark:text-gray-400 text-sm">
                  {post.summary}
                </p>
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-4 flex justify-end w-full">
        <ExploreLink href="/showcase" label="Read all posts" />
      </div>
    </div>
  )
}
