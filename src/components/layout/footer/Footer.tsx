'use client'

import { SOCIAL_LIST } from '@/lib/constants/social'
import Link from 'next/link'
import React from 'react'
import { SiSpotify } from 'react-icons/si'
import Container from '../../Container'
import { MENU } from '@/lib/constants/menu'
import Logo from '@/components/Logo'
import MenuItem from './MenuItem'

export default function Footer() {
  return (
    <>
      <Container className=" mt-10 w-full">
        <hr className=" border-gray-200 dark:border-gray-800 transition duration-300" />
        <footer className=" py-10">
          <div className="flex flex-col md:flex-row gap-x-36 gap-y-8 md:gap-y-4 justify-between">
            <div className=" space-y-4">
              <Logo />
              {/* <div className="flex items-center gap-x-2">
                <SiSpotify className=" h-5 w-5 text-[#1dd05e]" />
                <p className=" dark:text-gray-400 text-gray-500 text-sm">
                  Spotify -{' '}
                  <span className=" dark:text-gray-100 text-gray-800">
                    Not Playing
                  </span>
                </p>
              </div> */}
            </div>
            <div className=" flex-1 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className=" space-y-2 flex-1">
                <h1 className=" font-semibold">General</h1>
                <nav className=" flex flex-col gap-y-2 items-start">
                  {MENU.map((menu, index) => (
                    <MenuItem key={index} menu={menu} />
                  ))}
                </nav>
              </div>
              <div className=" space-y-2 flex-1">
                <h1 className="  font-semibold">Social</h1>
                <nav className=" flex flex-col gap-y-2 items-start">
                  {SOCIAL_LIST.map((social, index) => (
                    <MenuItem key={index} social={social} />
                  ))}
                </nav>
              </div>
              <div className=" space-y-2 flex-1">
                <h1 className="  font-semibold">Extra</h1>
                <nav className=" flex flex-col gap-y-2 items-start">
                  <MenuItem
                    social={{
                      name: 'Source Code',
                      url: 'https://github.com/zulfianfreza/julianreza.com',
                    }}
                  />
                </nav>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-10 justify-center">
            <p className=" text-gray-800 dark:text-gray-100 text-sm">
              Made with Basreng and Bajigur.
            </p>
            <p className=" text-gray-800 dark:text-gray-100 text-sm">
              Copyright &copy; 2023 julianreza. All right Reserved.
            </p>
          </div>
        </footer>
      </Container>
      {/* <div className="w-full h-[6px] bg-amber-400" /> */}
    </>
  )
}
