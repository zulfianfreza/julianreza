'use client'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import React from 'react'

interface PostProps {
  content: MDXRemoteSerializeResult
}

export default function Post({ content }: PostProps) {
  return (
    <div className=" prose max-w-full dark:prose-invert mt-8">
      <MDXRemote {...content} />
    </div>
  )
}
