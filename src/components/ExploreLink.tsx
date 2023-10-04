'use client'

import { ChevronsRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface ExploreLinkProps {
  href: string
  label: string
}

export default function ExploreLink({ href, label }: ExploreLinkProps) {
  return (
    <Link
      href={href}
      className="flex items-center text-sm text-slate-800 dark:text-slate-100 duration-100 transition-all hover:underline"
    >
      {label}
      <ChevronsRight />
    </Link>
  )
}
