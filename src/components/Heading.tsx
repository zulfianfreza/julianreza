import { cn } from '@/lib/utils'
import React from 'react'

interface HeadingProps {
  title: string
  subtitle?: string
  center?: boolean
}

export default function Heading({ title, subtitle, center }: HeadingProps) {
  return (
    <div className={cn(' space-y-2', { 'text-center': center })}>
      <h1 className=" font-black text-3xl text-slate-800 dark:text-slate-100">
        {title}
      </h1>
      <p className=" text-slate-600 dark:text-slate-400 leading-relaxed">
        {subtitle}
      </p>
    </div>
  )
}
