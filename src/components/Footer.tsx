import { SOCIAL_LIST } from '@/lib/constants/social'
import Link from 'next/link'
import React from 'react'
import { SiSpotify } from 'react-icons/si'
import Container from './Container'

export default function Footer() {
  return (
    <>
      <Container className=" mt-10">
        <hr className=" border-slate-200 dark:border-slate-700 transition duration-300" />
        <footer className=" py-10">
          <div className="flex flex-col md:flex-row gap-x-36 gap-y-8 md:gap-y-4 justify-between">
            <div className="">
              <div className="flex items-center gap-x-2">
                <SiSpotify className=" h-5 w-5 text-[#1dd05e]" />
                <p className=" dark:text-slate-400 text-slate-600">
                  Spotify -{' '}
                  <span className=" dark:text-slate-50 text-slate-800 text-base">
                    Not Playing
                  </span>
                </p>
              </div>
            </div>
            <div className=" flex flex-1">
              <div className=" space-y-4 flex-1">
                <h1 className=" text-lg font-bold">General</h1>
                <nav className=" flex flex-col gap-y-4">
                  <Link
                    href="/"
                    className=" text-slate-600 dark:text-slate-400 transition duration-100 hover:text-slate-800 hover:dark:text-slate-50"
                  >
                    Home
                  </Link>
                  <Link
                    href=""
                    className=" text-slate-600 dark:text-slate-400 transition duration-100 hover:text-slate-800 hover:dark:text-slate-50"
                  >
                    About
                  </Link>
                  <Link
                    href="/showcase"
                    className=" text-slate-600 dark:text-slate-400 transition duration-100 hover:text-slate-800 hover:dark:text-slate-50"
                  >
                    Showcase
                  </Link>
                  <Link
                    href=""
                    className=" text-slate-600 dark:text-slate-400 transition duration-100 hover:text-slate-800 hover:dark:text-slate-50"
                  >
                    Blog
                  </Link>
                </nav>
              </div>
              <div className=" space-y-4 flex-1">
                <h1 className=" text-lg font-bold">Social</h1>
                <nav className=" flex flex-col gap-y-4">
                  {SOCIAL_LIST.map((social, index) => (
                    <Link
                      key={index}
                      href={social.url}
                      target="_blank"
                      className=" text-slate-600 dark:text-slate-400 transition duration-100 hover:text-slate-800 hover:dark:text-slate-50"
                    >
                      {social.name}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className=" space-y-4 flex-1">
                <h1 className=" text-lg font-bold">Extra</h1>
                <nav className=" flex flex-col gap-y-4">
                  <Link
                    href="https://github.com/zulfianfreza/julianreza.com"
                    target="_blank"
                    className=" text-slate-600 dark:text-slate-400 transition duration-100 hover:text-slate-800 hover:dark:text-slate-50"
                  >
                    Source Code
                  </Link>
                </nav>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-10 justify-center">
            <p className=" text-slate-600 dark:text-slate-400 text-sm">
              Made with Basreng and Bajigur.
            </p>
            <p className=" text-slate-600 dark:text-slate-400 text-sm">
              Copyright &copy; 2023, julianreza.
            </p>
          </div>
        </footer>
      </Container>
      <div className="w-full h-[6px] bg-gradient-to-r from-yellow-300 via-indigo-500 to-pink-400" />
    </>
  )
}
