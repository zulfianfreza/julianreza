import { cn } from '@/lib/utils'
import { IProject } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProjectItem({ data }: { data: IProject }) {
  return (
    <Link href={`/showcase/${data.slug}`} className="  group">
      <div className=" w-full aspect-[16/9] relative">
        <Image
          src={data.image ?? ''}
          fill={true}
          alt=""
          className=" object-cover object-top transition-all duration-300"
        />
      </div>
      <div className="py-4 space-y-2">
        <div className="flex items-center gap-x-2">
          <h1 className=" text-xl text-slate-950 dark:text-slate-50 font-bold">
            {data.title}
          </h1>
          <div
            className={cn(' px-2 py-1 transition-all duration-300', {
              'bg-indigo-100': data.finish,
              'bg-pink-100': data.finish === false,
            })}
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
        <p className=" text-slate-500 dark:text-slate-400 line-clamp-3">
          {data.summary}
        </p>
      </div>
    </Link>
  )
}
