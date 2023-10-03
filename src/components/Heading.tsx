'use client'

import { cn } from '@/lib/utils'
import React from 'react'

interface HeadingProps {
  title: string
  subtitle?: string
  center?: boolean
}

export default function Heading({ title, subtitle, center }: HeadingProps) {
  return (
    <div
      className={cn(' space-y-1 flex flex-col items-start', {
        'text-center': center,
      })}
    >
      <div className="  relative flex justify-start">
        <h1 className="font-semibold text-3xl text-gray-800 z-10 dark:text-gray-100">
          {title}
        </h1>
        <div className=" w-3/4 h-[6px] absolute bg-yellow-400 dark:bg-yellow-500 bottom-1 right-0"></div>
      </div>
      <p className=" text-gray-500 dark:text-gray-400 text-sm">{subtitle}</p>
    </div>
  )
}
