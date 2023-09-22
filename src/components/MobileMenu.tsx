'use client'

import { Menu, Transition } from '@headlessui/react'
import { Menu as MenuIcon, X } from 'lucide-react'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface ItemMenuProps {
  title: string
  path: string
}

const ItemMenu = ({ title, path }: ItemMenuProps) => {
  const pathname = usePathname()
  return (
    <Menu.Item>
      <Link
        href={path}
        className={cn(
          ' px-2.5 flex items-center h-10 w-full text-sm text-gray-500 rounded-md dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100  transition duration-100',
          {
            'text-gray-800 dark:text-gray-50 font-medium dark:bg-gray-700 bg-gray-100':
              pathname.split('/')[1] === path.split('/')[1],
          }
        )}
      >
        {title}
      </Link>
    </Menu.Item>
  )
}

export default function MobileMenu() {
  return (
    <Menu as="div" className="relative inline-block md:hidden text-left">
      {({ open }) => (
        <>
          <Menu.Button
            className={cn(
              `h-10 w-10 rounded-lg md:hidden items-center justify-center text-gray-950 dark:text-gray-50 hover:bg-gray-100 hover:bg-opacity-90 transition duration-100 flex dark:hover:bg-gray-800`,
              {
                'bg-gray-100 dark:bg-gray-800 ring-gray-200 dark:ring-gray-700':
                  open,
              }
            )}
          >
            {open ? (
              <X className=" h-5 w-5" />
            ) : (
              <MenuIcon className=" h-5 w-5" />
            )}
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-50 rounded-lg right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="p-2 flex flex-col text-[16px] lg:text-[20px]">
                <ItemMenu title="Home" path="/" />
                <ItemMenu title="About" path="/about" />
                <ItemMenu title="Showcase" path="/showcase" />
                <ItemMenu title="Blog" path="/blog" />
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}
