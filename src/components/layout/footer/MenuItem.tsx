'use client'

import { IMenu } from '@/lib/constants/menu'
import { ISocial } from '@/types'
import Link from 'next/link'
import React from 'react'

interface MenuItemProps {
  menu?: IMenu
  social?: ISocial
}

export default function MenuItem({ menu, social }: MenuItemProps) {
  return (
    <Link
      href={menu?.path ?? social?.url ?? ''}
      target={social ? '_blank' : ''}
      className=" text-gray-500 text-sm dark:text-gray-400 transition duration-100 hover:text-violet-700 dark:hover:text-violet-700"
    >
      {menu?.title ?? social?.name}
    </Link>
  )
}
