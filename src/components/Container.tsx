import { cn } from '@/lib/utils'
import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('max-w-3xl mx-auto px-5 md:px-0', className)}>
      {children}
    </div>
  )
}
