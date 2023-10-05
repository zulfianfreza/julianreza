'use client'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import React from 'react'

interface ProjectProps {
  content: MDXRemoteSerializeResult
}

export default function Project({ content }: ProjectProps) {
  return (
    <div className=" prose max-w-full dark:prose-invert mt-8 prose-sm">
      <MDXRemote {...content} />
    </div>
  )
}
