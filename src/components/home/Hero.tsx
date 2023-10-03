'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <div className="flex sm:items-center gap-x-16 my-10 sm:flex-row flex-col-reverse items-start gap-8">
      <div className=" flex-1 flex flex-col items-start">
        <h1 className=" text-3xl md:text-5xl text-gray-800 dark:text-gray-100 font-bold">
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
        <p className=" text-gray-500 dark:text-gray-400 text-sm">
          Want to collaborate?{' '}
          <Link
            href="/"
            className=" text-gray-800 dark:text-gray-100 font-medium"
          >
            Contact me 🤙
          </Link>
        </p>
        {/* <Link
            href=""
            className=" text-white rounded-md mt-2 text-sm flex items-center font-medium px-4 h-10 bg-amber-400 transition duration-100"
          >
            Resume
          </Link> */}
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
