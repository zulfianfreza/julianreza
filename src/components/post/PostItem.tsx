'use client'

import { IPost } from '@/types'
import { format } from 'date-fns'
import Link from 'next/link'
import React from 'react'
import { LuCalendarDays, LuClock } from 'react-icons/lu'

interface PostItemProps {
  post: IPost
}

export default function PostItem({ post }: PostItemProps) {
  const wordCount = post.content.split(/\s+/).length
  const readingTime = Math.ceil(wordCount / 200)
  return (
    <div className=" py-4 first-of-type:pt-0 last-of-type:pb-0">
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
}
