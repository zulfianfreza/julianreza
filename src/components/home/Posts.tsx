'use client'

import React from 'react'
import Heading from '../Heading'
import { IPost } from '@/types'
import { LuCalendarDays, LuClock } from 'react-icons/lu'
import { format } from 'date-fns'
import Link from 'next/link'
import ExploreLink from '../ExploreLink'
import PostItem from '../post/PostItem'

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
        {posts.map((post, index) => (
          <PostItem post={post} key={index} />
        ))}
      </div>
      <div className="mt-4 flex justify-end w-full">
        <ExploreLink href="/showcase" label="Read all posts" />
      </div>
    </div>
  )
}
