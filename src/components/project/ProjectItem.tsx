'use client'

import { cn } from '@/lib/utils'
import { IProject } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProjectItem({ data }: { data: IProject }) {
  return (
    <Link href={`/showcase/${data.slug}`} className="  group">
      <div className=" w-full aspect-[16/9] relative rounded-xl group-hover:scale-[1.05] transition ease-in-out shadow-sm dark:shadow-gray-800 overflow-hidden">
        <Image
          src={data.image ?? ''}
          fill={true}
          alt=""
          className=" object-cover object-top transition-all duration-300"
        />
      </div>
      <div className="py-4 space-y-1">
        <div className="flex items-center gap-x-2">
          <h1 className=" text-lg text-gray-800 dark:text-gray-100 font-medium">
            {data.title}
          </h1>
          <div
            className={cn(
              ' px-2 py-[2px] transition-all duration-300 rounded-sm',
              {
                'bg-indigo-100': data.finish,
                'bg-pink-100': data.finish === false,
              }
            )}
          >
            <p
              className={cn(
                ' text-[10px] lowercase font-medium whitespace-nowrap',
                {
                  'text-indigo-500': data.finish,
                  'text-pink-500': data.finish === false,
                }
              )}
            >
              {data.finish === true ? 'finish' : 'ongoing'}
            </p>
          </div>
        </div>
        {/* <div className=" flex gap-x-2 transition-all duration-300">
          {data.techStack.map((stack, index) => (
            <IconStack key={index} stack={stack} />
          ))}
        </div> */}
        <p className=" text-gray-500 dark:text-gray-400 line-clamp-2 text-sm">
          {data.summary}
        </p>
      </div>
    </Link>
  )
}
