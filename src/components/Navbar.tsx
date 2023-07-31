'use client'
import Link from 'next/link'
import React from 'react'
import ThemeToggle from './ThemeToggle'
import { usePathname } from 'next/navigation'
import MobileMenu from './MobileMenu'
import Logo from './Logo'
import { cn } from '@/lib/utils'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import Container from './Container'

interface ItemMenuProps {
  title: string
  path: string
}

function ItemMenu({ title, path }: ItemMenuProps) {
  const pathname = usePathname()
  return (
    <Link
      href={path}
      className={cn(
        ' text-gray-500 dark:text-gray-400 font-normal px-4 py-2 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-100',
        {
          ' text-gray-800 dark:text-gray-50 font-medium':
            pathname.split('/')[1] === path.split('/')[1],
        }
      )}
    >
      {title}
    </Link>
  )
}

export default function Navbar() {
  const scrollPosition = useScrollPosition()
  return (
    <div
      className={cn(
        `w-full sticky top-0 backdrop-blur backdrop-filter z-50 duration-300 transition bg-white/80 dark:bg-gray-950/90 border-b border-transparent`,
        {
          ' border-gray-200 dark:border-gray-800 shadow-sm': scrollPosition > 0,
        }
      )}
    >
      <nav className="py-5">
        <Container>
          <div className="flex justify-between items-center">
            <div className=" flex-1">
              <Logo />
            </div>
            <div className=" hidden md:flex text-sm">
              <ItemMenu title="Home" path="/" />
              <ItemMenu title="About" path="/about" />
              <ItemMenu title="Showcase" path="/showcase" />
              <ItemMenu title="Blog" path="/blog" />
            </div>
            <div className=" flex-1 flex justify-end gap-x-1">
              <ThemeToggle />
              <MobileMenu />
            </div>
          </div>
        </Container>
      </nav>
    </div>
  )
}
