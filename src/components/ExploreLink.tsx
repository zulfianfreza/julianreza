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
      className="flex items-center text-slate-950 dark:text-slate-50 duration-100 transition-all hover:underline"
    >
      {label}
      <ChevronsRight />
    </Link>
  )
}
