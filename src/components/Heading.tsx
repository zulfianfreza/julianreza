import { cn } from '@/lib/utils'
import React from 'react'

interface HeadingProps {
  title: string
  subtitle?: string
  center?: boolean
}

export default function Heading({ title, subtitle, center }: HeadingProps) {
  return (
    <div className={cn(' space-y-1', { 'text-center': center })}>
      <h1 className=" font-bold text-2xl text-gray-950 dark:text-gray-50">
        {title}
      </h1>
      <p className=" text-gray-500 dark:text-gray-400 text">{subtitle}</p>
    </div>
  )
}
