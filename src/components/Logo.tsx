'use client'

import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <Link
      href="/"
      className=" text-slate-800 dark:text-slate-50 font-bold text-lg flex w-7"
    >
      <div className="w-[22px]  overflow-hidden inline-block h-[22px]">
        <div className=" h-8 bg-black dark:bg-white rotate-45 transform  origin-top-right"></div>
      </div>
      <div className="w-[22px]  overflow-hidden inline-block -ml-4 -mt-[10px] ">
        <div className=" h-8 bg-black dark:bg-white rotate-45 transform origin-bottom-left"></div>
      </div>
    </Link>
  )
}
