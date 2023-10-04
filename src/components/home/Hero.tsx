'use client'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <div className="flex sm:items-center gap-x-16 my-10 sm:flex-row flex-col-reverse items-start gap-8">
      <div className=" flex-1 flex flex-col items-start">
        <h1
          className={cn(
            ' text-3xl md:text-5xl  font-bold',
            'text-gray-800 dark:text-gray-100'
            // 'bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-indigo-700'
          )}
        >
          Zulfian F. Reza
        </h1>
        <p className=" text-gray-500 dark:text-gray-400 mt-2 leading-relaxed text-sm">
          I am a{' '}
          <span className=" font-medium text-gray-800 dark:text-gray-100">
            software engineer
          </span>{' '}
          who really interested in{' '}
          <span className=" font-medium text-gray-800 dark:text-gray-100">
            Frontend
          </span>
          ,{' '}
          <span className=" font-medium text-gray-800 dark:text-gray-100">
            Mobile
          </span>
          , also{' '}
          <span className=" font-medium text-gray-800 dark:text-gray-100">
            Fullstack Development
          </span>
          .
        </p>
        {/* <p className=" text-gray-500 dark:text-gray-400 text-sm">
          Want to collaborate?{' '}
          <Link
            href="/"
            className=" text-gray-800 dark:text-gray-100 font-medium"
          >
            Contact me 🤙
          </Link>
        </p> */}
        <div className="flex gap-2 mt-4">
          <Link
            href="mailto:zulfian.025fr@gmail.com"
            className=" px-8 h-10 rounded-full bg-gradient-to-r from-violet-700 to-indigo-700 hover:opacity-90 text-white text-sm font-medium flex justify-center items-center"
          >
            Hire Me
          </Link>
          <Link
            href="https://drive.google.com/file/d/1aiJZP82UKz9mkzB4uD521e6H90Qnpcnl/view?usp=drive_link"
            target="_blank"
            className=" h-10 p-[1.5px] rounded-full bg-gradient-to-r from-violet-700 to-indigo-700"
          >
            <div className=" w-full h-full hover:bg-transparent hover:bg-opacity-90 hover:text-white transition dark:bg-gray-950 dark:text-white bg-white rounded-full px-8 flex justify-center items-center text-gray-800 text-sm font-medium">
              Resume
            </div>
          </Link>
        </div>
      </div>
      <div className=" w-24 sm:w-32 md:w-36 aspect-square relative rounded-full overflow-hidden transition-all duration-300">
        <Image
          src="/images/profile.jpg"
          fill
          alt=""
          className=" object-cover object-center"
        />
      </div>
    </div>
  )
}
